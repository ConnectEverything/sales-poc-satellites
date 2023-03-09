package satellitetracking

import (
	"context"
	_ "embed"
	"fmt"
	"log"
	"math"
	"os"
	"strings"
	"time"

	"github.com/ConnectEverything/sales-poc-accenture/pkg/shared"
	"github.com/go-echarts/go-echarts/v2/charts"
	"github.com/go-echarts/go-echarts/v2/opts"
	"github.com/goccy/go-json"
	sat "github.com/joshuaferrara/go-satellite"
	"github.com/nats-io/nats.go"
	"github.com/pinzolo/casee"
)

//go:embed active.tle
var activeTLE string

//go:embed active.json
var activeJSON string

type satelliteMetadata struct {
	ID   string `json:"OBJECT_ID"`
	Name string `json:"OBJECT_NAME"`
}

type satallite struct {
	ID   string
	Name string
	TLE  sat.Satellite
}

type position struct {
	LongitudeDeg float64
	LatitudeDeg  float64
	AltitudeKm   float64
}

func Run(ctx context.Context) error {
	metadata := []satelliteMetadata{}
	if err := json.Unmarshal([]byte(activeJSON), &metadata); err != nil {
		return fmt.Errorf("can't unmarshal active.json: %w", err)
	}

	rows := strings.Split(activeTLE, "\n")
	satallites := make([]satallite, 0, len(rows)/3)
	for i := 0; i < len(rows); i += 3 {
		name := strings.TrimSpace(rows[i])
		if name == "" {
			break
		}

		prefix := name
		if idx := strings.Index(prefix, "*"); idx != -1 {
			prefix = prefix[:idx]
		}

		id := ""
		for j, m := range metadata {
			if strings.HasPrefix(m.Name, prefix) {
				name = m.Name
				id = casee.ToChainCase(m.ID)

				// remove metadata from search
				metadata = append(metadata[:j], metadata[j+1:]...)
				break
			}
		}

		if id == "" {
			log.Printf("no metadata found for %q", name)
		}

		line1 := rows[i+1]
		line2 := rows[i+2]
		tle := sat.ParseTLE(line1, line2, sat.GravityWGS84)

		s := satallite{
			ID:   id,
			Name: name,
			TLE:  tle,
		}
		satallites = append(satallites, s)
	}

	log.Printf("found %d satallites", len(satallites))

	nc := shared.NewNATsClient(ctx)
	var p position

	t := time.NewTicker(100 * time.Millisecond)
	defer t.Stop()

	js, err := nc.JetStream()
	if err != nil {
		return fmt.Errorf("can't get jetstream: %w", err)
	}

	satTrackingSubjectPrefix := "sat.tracking"

	maxMsgsPerSubject := int64(10)
	line := charts.NewLine()
	line.SetGlobalOptions(charts.WithTitleOpts(opts.Title{
		Title:    "Satallite Tracking",
		Subtitle: fmt.Sprintf("Max %d messages per subject", maxMsgsPerSubject),
	}))

	if err := js.DeleteStream("SatalliteTracking"); err != nil && err != nats.ErrStreamNotFound {
		return fmt.Errorf("can't delete stream: %w", err)
	}

	if _, err := js.AddStream(&nats.StreamConfig{
		Name:              "SatalliteTracking",
		Subjects:          []string{satTrackingSubjectPrefix + ".>"},
		MaxMsgsPerSubject: maxMsgsPerSubject,
		Retention:         nats.LimitsPolicy,
		Discard:           nats.DiscardOld,
		Storage:           nats.FileStorage,
	}); err != nil && err != nats.ErrStreamNameAlreadyInUse {
		return fmt.Errorf("can't create stream: %w", err)
	}

	testLimit := int(1.25 * float64(maxMsgsPerSubject))

	count := make([]int, 0, len(satallites))
	latencies := make([]opts.LineData, 0, len(satallites))
	// totalMessages := make([]opts.LineData, 0, len(satallites))

done:
	for {
		select {
		case <-ctx.Done():
			return ctx.Err()
		case <-t.C:
			now := time.Now()
			jd := timeToJulianDay(now)

			gmst := sat.ThetaG_JD(jd)

			year := now.Year()
			month := int(now.Month())
			day := now.Day()
			hour := now.Hour()
			minute := now.Minute()
			second := now.Second()

			for _, s := range satallites {
				eci, _ := sat.Propagate(s.TLE, year, month, day, hour, minute, second)
				alt, _, llRad := sat.ECIToLLA(eci, gmst)
				ll := sat.LatLongDeg(llRad)

				p.LongitudeDeg = ll.Longitude
				p.LatitudeDeg = ll.Latitude
				p.AltitudeKm = math.Abs(alt)
				b, _ := json.Marshal(p)
				// log.Print(len(b))
				subject := fmt.Sprintf("%s.%s", satTrackingSubjectPrefix, s.ID)

				if _, err := js.PublishAsync(subject, b); err != nil {
					return fmt.Errorf("can't publish: %w", err)
				}
			}

			took := time.Since(now)
			latencies = append(latencies, opts.LineData{Value: took.Seconds()})
			// totalMessages = append(totalMessages, opts.LineData{Value: len(satallites)})
			count = append(count, len(latencies))

			log.Printf("%d published %d positions in %s", len(latencies), len(satallites), took)

			if len(latencies) == testLimit {
				break done
			}
		}

	}

	line.AddSeries("update times", latencies)
	// line.AddSeries("total messages", totalMessages)
	line.SetSeriesOptions(charts.WithLineChartOpts(
		opts.LineChart{
			ShowSymbol: true,
			// Smooth: true,
		}),
	)
	line.SetXAxis(count)
	// line.SetXAxis([]string{"0", fmt.Sprint(maxMsgsPerSubject)})

	f, err := os.Create("satallite-tracking.html")
	if err != nil {
		return fmt.Errorf("can't create file: %w", err)
	}
	defer f.Close()
	if err := line.Render(f); err != nil {
		return fmt.Errorf("can't render chart: %w", err)
	}

	return nil
}

const (
	secondsInADay      = 86400
	UnixEpochJulianDay = 2440587.5
)

// timeToJulianDay converts a time.Time into a Julian day.
func timeToJulianDay(t time.Time) float64 {
	return float64(t.UTC().Unix())/secondsInADay + UnixEpochJulianDay
}