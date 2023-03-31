import { r as Js, y as Ys } from "./vendor.3e0c1cd0.js";
var Vs =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Bt = { exports: {} },
  fs = { exports: {} },
  Mr = { exports: {} };
(function (s) {
  (function (e) {
    var t,
      r = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
      i = Math.ceil,
      n = Math.floor,
      a = "[BigNumber Error] ",
      h = a + "Number primitive has more than 15 significant digits: ",
      m = 1e14,
      _ = 14,
      O = 9007199254740991,
      I = [
        1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13,
      ],
      N = 1e7,
      T = 1e9;
    function H(Y) {
      var X,
        re,
        se,
        B = (R.prototype = { constructor: R, toString: null, valueOf: null }),
        de = new R(1),
        ne = 20,
        oe = 4,
        be = -7,
        Ee = 21,
        Le = -1e7,
        Oe = 1e7,
        qe = !1,
        Ke = 1,
        _e = 0,
        Xe = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: "\xA0",
          suffix: "",
        },
        Ie = "0123456789abcdefghijklmnopqrstuvwxyz",
        ze = !0;
      function R(c, d) {
        var p,
          S,
          w,
          v,
          P,
          b,
          y,
          A,
          E = this;
        if (!(E instanceof R)) return new R(c, d);
        if (d == null) {
          if (c && c._isBigNumber === !0) {
            (E.s = c.s),
              !c.c || c.e > Oe
                ? (E.c = E.e = null)
                : c.e < Le
                ? (E.c = [(E.e = 0)])
                : ((E.e = c.e), (E.c = c.c.slice()));
            return;
          }
          if ((b = typeof c == "number") && c * 0 == 0) {
            if (((E.s = 1 / c < 0 ? ((c = -c), -1) : 1), c === ~~c)) {
              for (v = 0, P = c; P >= 10; P /= 10, v++);
              v > Oe ? (E.c = E.e = null) : ((E.e = v), (E.c = [c]));
              return;
            }
            A = String(c);
          } else {
            if (!r.test((A = String(c)))) return se(E, A, b);
            E.s = A.charCodeAt(0) == 45 ? ((A = A.slice(1)), -1) : 1;
          }
          (v = A.indexOf(".")) > -1 && (A = A.replace(".", "")),
            (P = A.search(/e/i)) > 0
              ? (v < 0 && (v = P),
                (v += +A.slice(P + 1)),
                (A = A.substring(0, P)))
              : v < 0 && (v = A.length);
        } else {
          if ((D(d, 2, Ie.length, "Base"), d == 10 && ze))
            return (E = new R(c)), ue(E, ne + E.e + 1, oe);
          if (((A = String(c)), (b = typeof c == "number"))) {
            if (c * 0 != 0) return se(E, A, b, d);
            if (
              ((E.s = 1 / c < 0 ? ((A = A.slice(1)), -1) : 1),
              R.DEBUG && A.replace(/^0\.0*|\./, "").length > 15)
            )
              throw Error(h + c);
          } else E.s = A.charCodeAt(0) === 45 ? ((A = A.slice(1)), -1) : 1;
          for (p = Ie.slice(0, d), v = P = 0, y = A.length; P < y; P++)
            if (p.indexOf((S = A.charAt(P))) < 0) {
              if (S == ".") {
                if (P > v) {
                  v = y;
                  continue;
                }
              } else if (
                !w &&
                ((A == A.toUpperCase() && (A = A.toLowerCase())) ||
                  (A == A.toLowerCase() && (A = A.toUpperCase())))
              ) {
                (w = !0), (P = -1), (v = 0);
                continue;
              }
              return se(E, String(c), b, d);
            }
          (b = !1),
            (A = re(A, d, 10, E.s)),
            (v = A.indexOf(".")) > -1
              ? (A = A.replace(".", ""))
              : (v = A.length);
        }
        for (P = 0; A.charCodeAt(P) === 48; P++);
        for (y = A.length; A.charCodeAt(--y) === 48; );
        if ((A = A.slice(P, ++y))) {
          if (((y -= P), b && R.DEBUG && y > 15 && (c > O || c !== n(c))))
            throw Error(h + E.s * c);
          if ((v = v - P - 1) > Oe) E.c = E.e = null;
          else if (v < Le) E.c = [(E.e = 0)];
          else {
            if (
              ((E.e = v),
              (E.c = []),
              (P = (v + 1) % _),
              v < 0 && (P += _),
              P < y)
            ) {
              for (P && E.c.push(+A.slice(0, P)), y -= _; P < y; )
                E.c.push(+A.slice(P, (P += _)));
              P = _ - (A = A.slice(P)).length;
            } else P -= y;
            for (; P--; A += "0");
            E.c.push(+A);
          }
        } else E.c = [(E.e = 0)];
      }
      (R.clone = H),
        (R.ROUND_UP = 0),
        (R.ROUND_DOWN = 1),
        (R.ROUND_CEIL = 2),
        (R.ROUND_FLOOR = 3),
        (R.ROUND_HALF_UP = 4),
        (R.ROUND_HALF_DOWN = 5),
        (R.ROUND_HALF_EVEN = 6),
        (R.ROUND_HALF_CEIL = 7),
        (R.ROUND_HALF_FLOOR = 8),
        (R.EUCLID = 9),
        (R.config = R.set =
          function (c) {
            var d, p;
            if (c != null)
              if (typeof c == "object") {
                if (
                  (c.hasOwnProperty((d = "DECIMAL_PLACES")) &&
                    ((p = c[d]), D(p, 0, T, d), (ne = p)),
                  c.hasOwnProperty((d = "ROUNDING_MODE")) &&
                    ((p = c[d]), D(p, 0, 8, d), (oe = p)),
                  c.hasOwnProperty((d = "EXPONENTIAL_AT")) &&
                    ((p = c[d]),
                    p && p.pop
                      ? (D(p[0], -T, 0, d),
                        D(p[1], 0, T, d),
                        (be = p[0]),
                        (Ee = p[1]))
                      : (D(p, -T, T, d), (be = -(Ee = p < 0 ? -p : p)))),
                  c.hasOwnProperty((d = "RANGE")))
                )
                  if (((p = c[d]), p && p.pop))
                    D(p[0], -T, -1, d),
                      D(p[1], 1, T, d),
                      (Le = p[0]),
                      (Oe = p[1]);
                  else if ((D(p, -T, T, d), p)) Le = -(Oe = p < 0 ? -p : p);
                  else throw Error(a + d + " cannot be zero: " + p);
                if (c.hasOwnProperty((d = "CRYPTO")))
                  if (((p = c[d]), p === !!p))
                    if (p)
                      if (
                        typeof crypto < "u" &&
                        crypto &&
                        (crypto.getRandomValues || crypto.randomBytes)
                      )
                        qe = p;
                      else throw ((qe = !p), Error(a + "crypto unavailable"));
                    else qe = p;
                  else throw Error(a + d + " not true or false: " + p);
                if (
                  (c.hasOwnProperty((d = "MODULO_MODE")) &&
                    ((p = c[d]), D(p, 0, 9, d), (Ke = p)),
                  c.hasOwnProperty((d = "POW_PRECISION")) &&
                    ((p = c[d]), D(p, 0, T, d), (_e = p)),
                  c.hasOwnProperty((d = "FORMAT")))
                )
                  if (((p = c[d]), typeof p == "object")) Xe = p;
                  else throw Error(a + d + " not an object: " + p);
                if (c.hasOwnProperty((d = "ALPHABET")))
                  if (
                    ((p = c[d]),
                    typeof p == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(p))
                  )
                    (ze = p.slice(0, 10) == "0123456789"), (Ie = p);
                  else throw Error(a + d + " invalid: " + p);
              } else throw Error(a + "Object expected: " + c);
            return {
              DECIMAL_PLACES: ne,
              ROUNDING_MODE: oe,
              EXPONENTIAL_AT: [be, Ee],
              RANGE: [Le, Oe],
              CRYPTO: qe,
              MODULO_MODE: Ke,
              POW_PRECISION: _e,
              FORMAT: Xe,
              ALPHABET: Ie,
            };
          }),
        (R.isBigNumber = function (c) {
          if (!c || c._isBigNumber !== !0) return !1;
          if (!R.DEBUG) return !0;
          var d,
            p,
            S = c.c,
            w = c.e,
            v = c.s;
          e: if ({}.toString.call(S) == "[object Array]") {
            if ((v === 1 || v === -1) && w >= -T && w <= T && w === n(w)) {
              if (S[0] === 0) {
                if (w === 0 && S.length === 1) return !0;
                break e;
              }
              if (
                ((d = (w + 1) % _), d < 1 && (d += _), String(S[0]).length == d)
              ) {
                for (d = 0; d < S.length; d++)
                  if (((p = S[d]), p < 0 || p >= m || p !== n(p))) break e;
                if (p !== 0) return !0;
              }
            }
          } else if (
            S === null &&
            w === null &&
            (v === null || v === 1 || v === -1)
          )
            return !0;
          throw Error(a + "Invalid BigNumber: " + c);
        }),
        (R.maximum = R.max =
          function () {
            return ut(arguments, B.lt);
          }),
        (R.minimum = R.min =
          function () {
            return ut(arguments, B.gt);
          }),
        (R.random = (function () {
          var c = 9007199254740992,
            d =
              (Math.random() * c) & 2097151
                ? function () {
                    return n(Math.random() * c);
                  }
                : function () {
                    return (
                      ((Math.random() * 1073741824) | 0) * 8388608 +
                      ((Math.random() * 8388608) | 0)
                    );
                  };
          return function (p) {
            var S,
              w,
              v,
              P,
              b,
              y = 0,
              A = [],
              E = new R(de);
            if ((p == null ? (p = ne) : D(p, 0, T), (P = i(p / _)), qe))
              if (crypto.getRandomValues) {
                for (
                  S = crypto.getRandomValues(new Uint32Array((P *= 2)));
                  y < P;

                )
                  (b = S[y] * 131072 + (S[y + 1] >>> 11)),
                    b >= 9e15
                      ? ((w = crypto.getRandomValues(new Uint32Array(2))),
                        (S[y] = w[0]),
                        (S[y + 1] = w[1]))
                      : (A.push(b % 1e14), (y += 2));
                y = P / 2;
              } else if (crypto.randomBytes) {
                for (S = crypto.randomBytes((P *= 7)); y < P; )
                  (b =
                    (S[y] & 31) * 281474976710656 +
                    S[y + 1] * 1099511627776 +
                    S[y + 2] * 4294967296 +
                    S[y + 3] * 16777216 +
                    (S[y + 4] << 16) +
                    (S[y + 5] << 8) +
                    S[y + 6]),
                    b >= 9e15
                      ? crypto.randomBytes(7).copy(S, y)
                      : (A.push(b % 1e14), (y += 7));
                y = P / 7;
              } else throw ((qe = !1), Error(a + "crypto unavailable"));
            if (!qe) for (; y < P; ) (b = d()), b < 9e15 && (A[y++] = b % 1e14);
            for (
              P = A[--y],
                p %= _,
                P && p && ((b = I[_ - p]), (A[y] = n(P / b) * b));
              A[y] === 0;
              A.pop(), y--
            );
            if (y < 0) A = [(v = 0)];
            else {
              for (v = -1; A[0] === 0; A.splice(0, 1), v -= _);
              for (y = 1, b = A[0]; b >= 10; b /= 10, y++);
              y < _ && (v -= _ - y);
            }
            return (E.e = v), (E.c = A), E;
          };
        })()),
        (R.sum = function () {
          for (var c = 1, d = arguments, p = new R(d[0]); c < d.length; )
            p = p.plus(d[c++]);
          return p;
        }),
        (re = (function () {
          var c = "0123456789";
          function d(p, S, w, v) {
            for (var P, b = [0], y, A = 0, E = p.length; A < E; ) {
              for (y = b.length; y--; b[y] *= S);
              for (b[0] += v.indexOf(p.charAt(A++)), P = 0; P < b.length; P++)
                b[P] > w - 1 &&
                  (b[P + 1] == null && (b[P + 1] = 0),
                  (b[P + 1] += (b[P] / w) | 0),
                  (b[P] %= w));
            }
            return b.reverse();
          }
          return function (p, S, w, v, P) {
            var b,
              y,
              A,
              E,
              M,
              V,
              W,
              Q,
              he = p.indexOf("."),
              pe = ne,
              ee = oe;
            for (
              he >= 0 &&
                ((E = _e),
                (_e = 0),
                (p = p.replace(".", "")),
                (Q = new R(S)),
                (V = Q.pow(p.length - he)),
                (_e = E),
                (Q.c = d(le(K(V.c), V.e, "0"), 10, w, c)),
                (Q.e = Q.c.length)),
                W = d(p, S, w, P ? ((b = Ie), c) : ((b = c), Ie)),
                A = E = W.length;
              W[--E] == 0;
              W.pop()
            );
            if (!W[0]) return b.charAt(0);
            if (
              (he < 0
                ? --A
                : ((V.c = W),
                  (V.e = A),
                  (V.s = v),
                  (V = X(V, Q, pe, ee, w)),
                  (W = V.c),
                  (M = V.r),
                  (A = V.e)),
              (y = A + pe + 1),
              (he = W[y]),
              (E = w / 2),
              (M = M || y < 0 || W[y + 1] != null),
              (M =
                ee < 4
                  ? (he != null || M) && (ee == 0 || ee == (V.s < 0 ? 3 : 2))
                  : he > E ||
                    (he == E &&
                      (ee == 4 ||
                        M ||
                        (ee == 6 && W[y - 1] & 1) ||
                        ee == (V.s < 0 ? 8 : 7)))),
              y < 1 || !W[0])
            )
              p = M ? le(b.charAt(1), -pe, b.charAt(0)) : b.charAt(0);
            else {
              if (((W.length = y), M))
                for (--w; ++W[--y] > w; )
                  (W[y] = 0), y || (++A, (W = [1].concat(W)));
              for (E = W.length; !W[--E]; );
              for (he = 0, p = ""; he <= E; p += b.charAt(W[he++]));
              p = le(p, A, b.charAt(0));
            }
            return p;
          };
        })()),
        (X = (function () {
          function c(S, w, v) {
            var P,
              b,
              y,
              A,
              E = 0,
              M = S.length,
              V = w % N,
              W = (w / N) | 0;
            for (S = S.slice(); M--; )
              (y = S[M] % N),
                (A = (S[M] / N) | 0),
                (P = W * y + A * V),
                (b = V * y + (P % N) * N + E),
                (E = ((b / v) | 0) + ((P / N) | 0) + W * A),
                (S[M] = b % v);
            return E && (S = [E].concat(S)), S;
          }
          function d(S, w, v, P) {
            var b, y;
            if (v != P) y = v > P ? 1 : -1;
            else
              for (b = y = 0; b < v; b++)
                if (S[b] != w[b]) {
                  y = S[b] > w[b] ? 1 : -1;
                  break;
                }
            return y;
          }
          function p(S, w, v, P) {
            for (var b = 0; v--; )
              (S[v] -= b),
                (b = S[v] < w[v] ? 1 : 0),
                (S[v] = b * P + S[v] - w[v]);
            for (; !S[0] && S.length > 1; S.splice(0, 1));
          }
          return function (S, w, v, P, b) {
            var y,
              A,
              E,
              M,
              V,
              W,
              Q,
              he,
              pe,
              ee,
              ie,
              we,
              ht,
              vt,
              lt,
              Be,
              je,
              ye = S.s == w.s ? 1 : -1,
              xe = S.c,
              ae = w.c;
            if (!xe || !xe[0] || !ae || !ae[0])
              return new R(
                !S.s || !w.s || (xe ? ae && xe[0] == ae[0] : !ae)
                  ? NaN
                  : (xe && xe[0] == 0) || !ae
                  ? ye * 0
                  : ye / 0
              );
            for (
              he = new R(ye),
                pe = he.c = [],
                A = S.e - w.e,
                ye = v + A + 1,
                b ||
                  ((b = m), (A = q(S.e / _) - q(w.e / _)), (ye = (ye / _) | 0)),
                E = 0;
              ae[E] == (xe[E] || 0);
              E++
            );
            if ((ae[E] > (xe[E] || 0) && A--, ye < 0)) pe.push(1), (M = !0);
            else {
              for (
                vt = xe.length,
                  Be = ae.length,
                  E = 0,
                  ye += 2,
                  V = n(b / (ae[0] + 1)),
                  V > 1 &&
                    ((ae = c(ae, V, b)),
                    (xe = c(xe, V, b)),
                    (Be = ae.length),
                    (vt = xe.length)),
                  ht = Be,
                  ee = xe.slice(0, Be),
                  ie = ee.length;
                ie < Be;
                ee[ie++] = 0
              );
              (je = ae.slice()),
                (je = [0].concat(je)),
                (lt = ae[0]),
                ae[1] >= b / 2 && lt++;
              do {
                if (((V = 0), (y = d(ae, ee, Be, ie)), y < 0)) {
                  if (
                    ((we = ee[0]),
                    Be != ie && (we = we * b + (ee[1] || 0)),
                    (V = n(we / lt)),
                    V > 1)
                  )
                    for (
                      V >= b && (V = b - 1),
                        W = c(ae, V, b),
                        Q = W.length,
                        ie = ee.length;
                      d(W, ee, Q, ie) == 1;

                    )
                      V--,
                        p(W, Be < Q ? je : ae, Q, b),
                        (Q = W.length),
                        (y = 1);
                  else V == 0 && (y = V = 1), (W = ae.slice()), (Q = W.length);
                  if (
                    (Q < ie && (W = [0].concat(W)),
                    p(ee, W, ie, b),
                    (ie = ee.length),
                    y == -1)
                  )
                    for (; d(ae, ee, Be, ie) < 1; )
                      V++, p(ee, Be < ie ? je : ae, ie, b), (ie = ee.length);
                } else y === 0 && (V++, (ee = [0]));
                (pe[E++] = V),
                  ee[0]
                    ? (ee[ie++] = xe[ht] || 0)
                    : ((ee = [xe[ht]]), (ie = 1));
              } while ((ht++ < vt || ee[0] != null) && ye--);
              (M = ee[0] != null), pe[0] || pe.splice(0, 1);
            }
            if (b == m) {
              for (E = 1, ye = pe[0]; ye >= 10; ye /= 10, E++);
              ue(he, v + (he.e = E + A * _ - 1) + 1, P, M);
            } else (he.e = A), (he.r = +M);
            return he;
          };
        })());
      function ct(c, d, p, S) {
        var w, v, P, b, y;
        if ((p == null ? (p = oe) : D(p, 0, 8), !c.c)) return c.toString();
        if (((w = c.c[0]), (P = c.e), d == null))
          (y = K(c.c)),
            (y =
              S == 1 || (S == 2 && (P <= be || P >= Ee))
                ? Se(y, P)
                : le(y, P, "0"));
        else if (
          ((c = ue(new R(c), d, p)),
          (v = c.e),
          (y = K(c.c)),
          (b = y.length),
          S == 1 || (S == 2 && (d <= v || v <= be)))
        ) {
          for (; b < d; y += "0", b++);
          y = Se(y, v);
        } else if (((d -= P), (y = le(y, v, "0")), v + 1 > b)) {
          if (--d > 0) for (y += "."; d--; y += "0");
        } else if (((d += v - b), d > 0))
          for (v + 1 == b && (y += "."); d--; y += "0");
        return c.s < 0 && w ? "-" + y : y;
      }
      function ut(c, d) {
        for (var p, S = 1, w = new R(c[0]); S < c.length; S++)
          if (((p = new R(c[S])), p.s)) d.call(w, p) && (w = p);
          else {
            w = p;
            break;
          }
        return w;
      }
      function Ae(c, d, p) {
        for (var S = 1, w = d.length; !d[--w]; d.pop());
        for (w = d[0]; w >= 10; w /= 10, S++);
        return (
          (p = S + p * _ - 1) > Oe
            ? (c.c = c.e = null)
            : p < Le
            ? (c.c = [(c.e = 0)])
            : ((c.e = p), (c.c = d)),
          c
        );
      }
      se = (function () {
        var c = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
          d = /^([^.]+)\.$/,
          p = /^\.([^.]+)$/,
          S = /^-?(Infinity|NaN)$/,
          w = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function (v, P, b, y) {
          var A,
            E = b ? P : P.replace(w, "");
          if (S.test(E)) v.s = isNaN(E) ? null : E < 0 ? -1 : 1;
          else {
            if (
              !b &&
              ((E = E.replace(c, function (M, V, W) {
                return (
                  (A = (W = W.toLowerCase()) == "x" ? 16 : W == "b" ? 2 : 8),
                  !y || y == A ? V : M
                );
              })),
              y && ((A = y), (E = E.replace(d, "$1").replace(p, "0.$1"))),
              P != E)
            )
              return new R(E, A);
            if (R.DEBUG)
              throw Error(
                a + "Not a" + (y ? " base " + y : "") + " number: " + P
              );
            v.s = null;
          }
          v.c = v.e = null;
        };
      })();
      function ue(c, d, p, S) {
        var w,
          v,
          P,
          b,
          y,
          A,
          E,
          M = c.c,
          V = I;
        if (M) {
          e: {
            for (w = 1, b = M[0]; b >= 10; b /= 10, w++);
            if (((v = d - w), v < 0))
              (v += _),
                (P = d),
                (y = M[(A = 0)]),
                (E = (y / V[w - P - 1]) % 10 | 0);
            else if (((A = i((v + 1) / _)), A >= M.length))
              if (S) {
                for (; M.length <= A; M.push(0));
                (y = E = 0), (w = 1), (v %= _), (P = v - _ + 1);
              } else break e;
            else {
              for (y = b = M[A], w = 1; b >= 10; b /= 10, w++);
              (v %= _),
                (P = v - _ + w),
                (E = P < 0 ? 0 : (y / V[w - P - 1]) % 10 | 0);
            }
            if (
              ((S =
                S ||
                d < 0 ||
                M[A + 1] != null ||
                (P < 0 ? y : y % V[w - P - 1])),
              (S =
                p < 4
                  ? (E || S) && (p == 0 || p == (c.s < 0 ? 3 : 2))
                  : E > 5 ||
                    (E == 5 &&
                      (p == 4 ||
                        S ||
                        (p == 6 &&
                          (v > 0 ? (P > 0 ? y / V[w - P] : 0) : M[A - 1]) % 10 &
                            1) ||
                        p == (c.s < 0 ? 8 : 7)))),
              d < 1 || !M[0])
            )
              return (
                (M.length = 0),
                S
                  ? ((d -= c.e + 1),
                    (M[0] = V[(_ - (d % _)) % _]),
                    (c.e = -d || 0))
                  : (M[0] = c.e = 0),
                c
              );
            if (
              (v == 0
                ? ((M.length = A), (b = 1), A--)
                : ((M.length = A + 1),
                  (b = V[_ - v]),
                  (M[A] = P > 0 ? n((y / V[w - P]) % V[P]) * b : 0)),
              S)
            )
              for (;;)
                if (A == 0) {
                  for (v = 1, P = M[0]; P >= 10; P /= 10, v++);
                  for (P = M[0] += b, b = 1; P >= 10; P /= 10, b++);
                  v != b && (c.e++, M[0] == m && (M[0] = 1));
                  break;
                } else {
                  if (((M[A] += b), M[A] != m)) break;
                  (M[A--] = 0), (b = 1);
                }
            for (v = M.length; M[--v] === 0; M.pop());
          }
          c.e > Oe ? (c.c = c.e = null) : c.e < Le && (c.c = [(c.e = 0)]);
        }
        return c;
      }
      function Z(c) {
        var d,
          p = c.e;
        return p === null
          ? c.toString()
          : ((d = K(c.c)),
            (d = p <= be || p >= Ee ? Se(d, p) : le(d, p, "0")),
            c.s < 0 ? "-" + d : d);
      }
      return (
        (B.absoluteValue = B.abs =
          function () {
            var c = new R(this);
            return c.s < 0 && (c.s = 1), c;
          }),
        (B.comparedTo = function (c, d) {
          return J(this, new R(c, d));
        }),
        (B.decimalPlaces = B.dp =
          function (c, d) {
            var p,
              S,
              w,
              v = this;
            if (c != null)
              return (
                D(c, 0, T),
                d == null ? (d = oe) : D(d, 0, 8),
                ue(new R(v), c + v.e + 1, d)
              );
            if (!(p = v.c)) return null;
            if (((S = ((w = p.length - 1) - q(this.e / _)) * _), (w = p[w])))
              for (; w % 10 == 0; w /= 10, S--);
            return S < 0 && (S = 0), S;
          }),
        (B.dividedBy = B.div =
          function (c, d) {
            return X(this, new R(c, d), ne, oe);
          }),
        (B.dividedToIntegerBy = B.idiv =
          function (c, d) {
            return X(this, new R(c, d), 0, 1);
          }),
        (B.exponentiatedBy = B.pow =
          function (c, d) {
            var p,
              S,
              w,
              v,
              P,
              b,
              y,
              A,
              E,
              M = this;
            if (((c = new R(c)), c.c && !c.isInteger()))
              throw Error(a + "Exponent not an integer: " + Z(c));
            if (
              (d != null && (d = new R(d)),
              (b = c.e > 14),
              !M.c ||
                !M.c[0] ||
                (M.c[0] == 1 && !M.e && M.c.length == 1) ||
                !c.c ||
                !c.c[0])
            )
              return (
                (E = new R(Math.pow(+Z(M), b ? c.s * (2 - ce(c)) : +Z(c)))),
                d ? E.mod(d) : E
              );
            if (((y = c.s < 0), d)) {
              if (d.c ? !d.c[0] : !d.s) return new R(NaN);
              (S = !y && M.isInteger() && d.isInteger()), S && (M = M.mod(d));
            } else {
              if (
                c.e > 9 &&
                (M.e > 0 ||
                  M.e < -1 ||
                  (M.e == 0
                    ? M.c[0] > 1 || (b && M.c[1] >= 24e7)
                    : M.c[0] < 8e13 || (b && M.c[0] <= 9999975e7)))
              )
                return (
                  (v = M.s < 0 && ce(c) ? -0 : 0),
                  M.e > -1 && (v = 1 / v),
                  new R(y ? 1 / v : v)
                );
              _e && (v = i(_e / _ + 2));
            }
            for (
              b
                ? ((p = new R(0.5)), y && (c.s = 1), (A = ce(c)))
                : ((w = Math.abs(+Z(c))), (A = w % 2)),
                E = new R(de);
              ;

            ) {
              if (A) {
                if (((E = E.times(M)), !E.c)) break;
                v ? E.c.length > v && (E.c.length = v) : S && (E = E.mod(d));
              }
              if (w) {
                if (((w = n(w / 2)), w === 0)) break;
                A = w % 2;
              } else if (((c = c.times(p)), ue(c, c.e + 1, 1), c.e > 14))
                A = ce(c);
              else {
                if (((w = +Z(c)), w === 0)) break;
                A = w % 2;
              }
              (M = M.times(M)),
                v
                  ? M.c && M.c.length > v && (M.c.length = v)
                  : S && (M = M.mod(d));
            }
            return S
              ? E
              : (y && (E = de.div(E)), d ? E.mod(d) : v ? ue(E, _e, oe, P) : E);
          }),
        (B.integerValue = function (c) {
          var d = new R(this);
          return c == null ? (c = oe) : D(c, 0, 8), ue(d, d.e + 1, c);
        }),
        (B.isEqualTo = B.eq =
          function (c, d) {
            return J(this, new R(c, d)) === 0;
          }),
        (B.isFinite = function () {
          return !!this.c;
        }),
        (B.isGreaterThan = B.gt =
          function (c, d) {
            return J(this, new R(c, d)) > 0;
          }),
        (B.isGreaterThanOrEqualTo = B.gte =
          function (c, d) {
            return (d = J(this, new R(c, d))) === 1 || d === 0;
          }),
        (B.isInteger = function () {
          return !!this.c && q(this.e / _) > this.c.length - 2;
        }),
        (B.isLessThan = B.lt =
          function (c, d) {
            return J(this, new R(c, d)) < 0;
          }),
        (B.isLessThanOrEqualTo = B.lte =
          function (c, d) {
            return (d = J(this, new R(c, d))) === -1 || d === 0;
          }),
        (B.isNaN = function () {
          return !this.s;
        }),
        (B.isNegative = function () {
          return this.s < 0;
        }),
        (B.isPositive = function () {
          return this.s > 0;
        }),
        (B.isZero = function () {
          return !!this.c && this.c[0] == 0;
        }),
        (B.minus = function (c, d) {
          var p,
            S,
            w,
            v,
            P = this,
            b = P.s;
          if (((c = new R(c, d)), (d = c.s), !b || !d)) return new R(NaN);
          if (b != d) return (c.s = -d), P.plus(c);
          var y = P.e / _,
            A = c.e / _,
            E = P.c,
            M = c.c;
          if (!y || !A) {
            if (!E || !M) return E ? ((c.s = -d), c) : new R(M ? P : NaN);
            if (!E[0] || !M[0])
              return M[0]
                ? ((c.s = -d), c)
                : new R(E[0] ? P : oe == 3 ? -0 : 0);
          }
          if (((y = q(y)), (A = q(A)), (E = E.slice()), (b = y - A))) {
            for (
              (v = b < 0) ? ((b = -b), (w = E)) : ((A = y), (w = M)),
                w.reverse(),
                d = b;
              d--;
              w.push(0)
            );
            w.reverse();
          } else
            for (
              S = (v = (b = E.length) < (d = M.length)) ? b : d, b = d = 0;
              d < S;
              d++
            )
              if (E[d] != M[d]) {
                v = E[d] < M[d];
                break;
              }
          if (
            (v && ((w = E), (E = M), (M = w), (c.s = -c.s)),
            (d = (S = M.length) - (p = E.length)),
            d > 0)
          )
            for (; d--; E[p++] = 0);
          for (d = m - 1; S > b; ) {
            if (E[--S] < M[S]) {
              for (p = S; p && !E[--p]; E[p] = d);
              --E[p], (E[S] += m);
            }
            E[S] -= M[S];
          }
          for (; E[0] == 0; E.splice(0, 1), --A);
          return E[0]
            ? Ae(c, E, A)
            : ((c.s = oe == 3 ? -1 : 1), (c.c = [(c.e = 0)]), c);
        }),
        (B.modulo = B.mod =
          function (c, d) {
            var p,
              S,
              w = this;
            return (
              (c = new R(c, d)),
              !w.c || !c.s || (c.c && !c.c[0])
                ? new R(NaN)
                : !c.c || (w.c && !w.c[0])
                ? new R(w)
                : (Ke == 9
                    ? ((S = c.s),
                      (c.s = 1),
                      (p = X(w, c, 0, 3)),
                      (c.s = S),
                      (p.s *= S))
                    : (p = X(w, c, 0, Ke)),
                  (c = w.minus(p.times(c))),
                  !c.c[0] && Ke == 1 && (c.s = w.s),
                  c)
            );
          }),
        (B.multipliedBy = B.times =
          function (c, d) {
            var p,
              S,
              w,
              v,
              P,
              b,
              y,
              A,
              E,
              M,
              V,
              W,
              Q,
              he,
              pe,
              ee = this,
              ie = ee.c,
              we = (c = new R(c, d)).c;
            if (!ie || !we || !ie[0] || !we[0])
              return (
                !ee.s || !c.s || (ie && !ie[0] && !we) || (we && !we[0] && !ie)
                  ? (c.c = c.e = c.s = null)
                  : ((c.s *= ee.s),
                    !ie || !we ? (c.c = c.e = null) : ((c.c = [0]), (c.e = 0))),
                c
              );
            for (
              S = q(ee.e / _) + q(c.e / _),
                c.s *= ee.s,
                y = ie.length,
                M = we.length,
                y < M &&
                  ((Q = ie), (ie = we), (we = Q), (w = y), (y = M), (M = w)),
                w = y + M,
                Q = [];
              w--;
              Q.push(0)
            );
            for (he = m, pe = N, w = M; --w >= 0; ) {
              for (
                p = 0, V = we[w] % pe, W = (we[w] / pe) | 0, P = y, v = w + P;
                v > w;

              )
                (A = ie[--P] % pe),
                  (E = (ie[P] / pe) | 0),
                  (b = W * A + E * V),
                  (A = V * A + (b % pe) * pe + Q[v] + p),
                  (p = ((A / he) | 0) + ((b / pe) | 0) + W * E),
                  (Q[v--] = A % he);
              Q[v] = p;
            }
            return p ? ++S : Q.splice(0, 1), Ae(c, Q, S);
          }),
        (B.negated = function () {
          var c = new R(this);
          return (c.s = -c.s || null), c;
        }),
        (B.plus = function (c, d) {
          var p,
            S = this,
            w = S.s;
          if (((c = new R(c, d)), (d = c.s), !w || !d)) return new R(NaN);
          if (w != d) return (c.s = -d), S.minus(c);
          var v = S.e / _,
            P = c.e / _,
            b = S.c,
            y = c.c;
          if (!v || !P) {
            if (!b || !y) return new R(w / 0);
            if (!b[0] || !y[0]) return y[0] ? c : new R(b[0] ? S : w * 0);
          }
          if (((v = q(v)), (P = q(P)), (b = b.slice()), (w = v - P))) {
            for (
              w > 0 ? ((P = v), (p = y)) : ((w = -w), (p = b)), p.reverse();
              w--;
              p.push(0)
            );
            p.reverse();
          }
          for (
            w = b.length,
              d = y.length,
              w - d < 0 && ((p = y), (y = b), (b = p), (d = w)),
              w = 0;
            d;

          )
            (w = ((b[--d] = b[d] + y[d] + w) / m) | 0),
              (b[d] = m === b[d] ? 0 : b[d] % m);
          return w && ((b = [w].concat(b)), ++P), Ae(c, b, P);
        }),
        (B.precision = B.sd =
          function (c, d) {
            var p,
              S,
              w,
              v = this;
            if (c != null && c !== !!c)
              return (
                D(c, 1, T),
                d == null ? (d = oe) : D(d, 0, 8),
                ue(new R(v), c, d)
              );
            if (!(p = v.c)) return null;
            if (((w = p.length - 1), (S = w * _ + 1), (w = p[w]))) {
              for (; w % 10 == 0; w /= 10, S--);
              for (w = p[0]; w >= 10; w /= 10, S++);
            }
            return c && v.e + 1 > S && (S = v.e + 1), S;
          }),
        (B.shiftedBy = function (c) {
          return D(c, -O, O), this.times("1e" + c);
        }),
        (B.squareRoot = B.sqrt =
          function () {
            var c,
              d,
              p,
              S,
              w,
              v = this,
              P = v.c,
              b = v.s,
              y = v.e,
              A = ne + 4,
              E = new R("0.5");
            if (b !== 1 || !P || !P[0])
              return new R(!b || (b < 0 && (!P || P[0])) ? NaN : P ? v : 1 / 0);
            if (
              ((b = Math.sqrt(+Z(v))),
              b == 0 || b == 1 / 0
                ? ((d = K(P)),
                  (d.length + y) % 2 == 0 && (d += "0"),
                  (b = Math.sqrt(+d)),
                  (y = q((y + 1) / 2) - (y < 0 || y % 2)),
                  b == 1 / 0
                    ? (d = "5e" + y)
                    : ((d = b.toExponential()),
                      (d = d.slice(0, d.indexOf("e") + 1) + y)),
                  (p = new R(d)))
                : (p = new R(b + "")),
              p.c[0])
            ) {
              for (y = p.e, b = y + A, b < 3 && (b = 0); ; )
                if (
                  ((w = p),
                  (p = E.times(w.plus(X(v, w, A, 1)))),
                  K(w.c).slice(0, b) === (d = K(p.c)).slice(0, b))
                )
                  if (
                    (p.e < y && --b,
                    (d = d.slice(b - 3, b + 1)),
                    d == "9999" || (!S && d == "4999"))
                  ) {
                    if (!S && (ue(w, w.e + ne + 2, 0), w.times(w).eq(v))) {
                      p = w;
                      break;
                    }
                    (A += 4), (b += 4), (S = 1);
                  } else {
                    (!+d || (!+d.slice(1) && d.charAt(0) == "5")) &&
                      (ue(p, p.e + ne + 2, 1), (c = !p.times(p).eq(v)));
                    break;
                  }
            }
            return ue(p, p.e + ne + 1, oe, c);
          }),
        (B.toExponential = function (c, d) {
          return c != null && (D(c, 0, T), c++), ct(this, c, d, 1);
        }),
        (B.toFixed = function (c, d) {
          return (
            c != null && (D(c, 0, T), (c = c + this.e + 1)), ct(this, c, d)
          );
        }),
        (B.toFormat = function (c, d, p) {
          var S,
            w = this;
          if (p == null)
            c != null && d && typeof d == "object"
              ? ((p = d), (d = null))
              : c && typeof c == "object"
              ? ((p = c), (c = d = null))
              : (p = Xe);
          else if (typeof p != "object")
            throw Error(a + "Argument not an object: " + p);
          if (((S = w.toFixed(c, d)), w.c)) {
            var v,
              P = S.split("."),
              b = +p.groupSize,
              y = +p.secondaryGroupSize,
              A = p.groupSeparator || "",
              E = P[0],
              M = P[1],
              V = w.s < 0,
              W = V ? E.slice(1) : E,
              Q = W.length;
            if ((y && ((v = b), (b = y), (y = v), (Q -= v)), b > 0 && Q > 0)) {
              for (v = Q % b || b, E = W.substr(0, v); v < Q; v += b)
                E += A + W.substr(v, b);
              y > 0 && (E += A + W.slice(v)), V && (E = "-" + E);
            }
            S = M
              ? E +
                (p.decimalSeparator || "") +
                ((y = +p.fractionGroupSize)
                  ? M.replace(
                      new RegExp("\\d{" + y + "}\\B", "g"),
                      "$&" + (p.fractionGroupSeparator || "")
                    )
                  : M)
              : E;
          }
          return (p.prefix || "") + S + (p.suffix || "");
        }),
        (B.toFraction = function (c) {
          var d,
            p,
            S,
            w,
            v,
            P,
            b,
            y,
            A,
            E,
            M,
            V,
            W = this,
            Q = W.c;
          if (
            c != null &&
            ((b = new R(c)), (!b.isInteger() && (b.c || b.s !== 1)) || b.lt(de))
          )
            throw Error(
              a +
                "Argument " +
                (b.isInteger() ? "out of range: " : "not an integer: ") +
                Z(b)
            );
          if (!Q) return new R(W);
          for (
            d = new R(de),
              A = p = new R(de),
              S = y = new R(de),
              V = K(Q),
              v = d.e = V.length - W.e - 1,
              d.c[0] = I[(P = v % _) < 0 ? _ + P : P],
              c = !c || b.comparedTo(d) > 0 ? (v > 0 ? d : A) : b,
              P = Oe,
              Oe = 1 / 0,
              b = new R(V),
              y.c[0] = 0;
            (E = X(b, d, 0, 1)), (w = p.plus(E.times(S))), w.comparedTo(c) != 1;

          )
            (p = S),
              (S = w),
              (A = y.plus(E.times((w = A)))),
              (y = w),
              (d = b.minus(E.times((w = d)))),
              (b = w);
          return (
            (w = X(c.minus(p), S, 0, 1)),
            (y = y.plus(w.times(A))),
            (p = p.plus(w.times(S))),
            (y.s = A.s = W.s),
            (v = v * 2),
            (M =
              X(A, S, v, oe)
                .minus(W)
                .abs()
                .comparedTo(X(y, p, v, oe).minus(W).abs()) < 1
                ? [A, S]
                : [y, p]),
            (Oe = P),
            M
          );
        }),
        (B.toNumber = function () {
          return +Z(this);
        }),
        (B.toPrecision = function (c, d) {
          return c != null && D(c, 1, T), ct(this, c, d, 2);
        }),
        (B.toString = function (c) {
          var d,
            p = this,
            S = p.s,
            w = p.e;
          return (
            w === null
              ? S
                ? ((d = "Infinity"), S < 0 && (d = "-" + d))
                : (d = "NaN")
              : (c == null
                  ? (d =
                      w <= be || w >= Ee ? Se(K(p.c), w) : le(K(p.c), w, "0"))
                  : c === 10 && ze
                  ? ((p = ue(new R(p), ne + w + 1, oe)),
                    (d = le(K(p.c), p.e, "0")))
                  : (D(c, 2, Ie.length, "Base"),
                    (d = re(le(K(p.c), w, "0"), 10, c, S, !0))),
                S < 0 && p.c[0] && (d = "-" + d)),
            d
          );
        }),
        (B.valueOf = B.toJSON =
          function () {
            return Z(this);
          }),
        (B._isBigNumber = !0),
        Y != null && R.set(Y),
        R
      );
    }
    function q(Y) {
      var X = Y | 0;
      return Y > 0 || Y === X ? X : X - 1;
    }
    function K(Y) {
      for (var X, re, se = 1, B = Y.length, de = Y[0] + ""; se < B; ) {
        for (X = Y[se++] + "", re = _ - X.length; re--; X = "0" + X);
        de += X;
      }
      for (B = de.length; de.charCodeAt(--B) === 48; );
      return de.slice(0, B + 1 || 1);
    }
    function J(Y, X) {
      var re,
        se,
        B = Y.c,
        de = X.c,
        ne = Y.s,
        oe = X.s,
        be = Y.e,
        Ee = X.e;
      if (!ne || !oe) return null;
      if (((re = B && !B[0]), (se = de && !de[0]), re || se))
        return re ? (se ? 0 : -oe) : ne;
      if (ne != oe) return ne;
      if (((re = ne < 0), (se = be == Ee), !B || !de))
        return se ? 0 : !B ^ re ? 1 : -1;
      if (!se) return (be > Ee) ^ re ? 1 : -1;
      for (
        oe = (be = B.length) < (Ee = de.length) ? be : Ee, ne = 0;
        ne < oe;
        ne++
      )
        if (B[ne] != de[ne]) return (B[ne] > de[ne]) ^ re ? 1 : -1;
      return be == Ee ? 0 : (be > Ee) ^ re ? 1 : -1;
    }
    function D(Y, X, re, se) {
      if (Y < X || Y > re || Y !== n(Y))
        throw Error(
          a +
            (se || "Argument") +
            (typeof Y == "number"
              ? Y < X || Y > re
                ? " out of range: "
                : " not an integer: "
              : " not a primitive number: ") +
            String(Y)
        );
    }
    function ce(Y) {
      var X = Y.c.length - 1;
      return q(Y.e / _) == X && Y.c[X] % 2 != 0;
    }
    function Se(Y, X) {
      return (
        (Y.length > 1 ? Y.charAt(0) + "." + Y.slice(1) : Y) +
        (X < 0 ? "e" : "e+") +
        X
      );
    }
    function le(Y, X, re) {
      var se, B;
      if (X < 0) {
        for (B = re + "."; ++X; B += re);
        Y = B + Y;
      } else if (((se = Y.length), ++X > se)) {
        for (B = re, X -= se; --X; B += re);
        Y += B;
      } else X < se && (Y = Y.slice(0, X) + "." + Y.slice(X));
      return Y;
    }
    (t = H()),
      (t.default = t.BigNumber = t),
      s.exports
        ? (s.exports = t)
        : (e || (e = typeof self < "u" && self ? self : window),
          (e.BigNumber = t));
  })(Vs);
})(Mr);
(function (s) {
  var e = Mr.exports,
    t = s.exports;
  (function () {
    var r =
        /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      i,
      n,
      a = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\",
      },
      h;
    function m(O) {
      return (
        (r.lastIndex = 0),
        r.test(O)
          ? '"' +
            O.replace(r, function (I) {
              var N = a[I];
              return typeof N == "string"
                ? N
                : "\\u" + ("0000" + I.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
          : '"' + O + '"'
      );
    }
    function _(O, I) {
      var N,
        T,
        H,
        q,
        K = i,
        J,
        D = I[O],
        ce = D != null && (D instanceof e || e.isBigNumber(D));
      switch (
        (D &&
          typeof D == "object" &&
          typeof D.toJSON == "function" &&
          (D = D.toJSON(O)),
        typeof h == "function" && (D = h.call(I, O, D)),
        typeof D)
      ) {
        case "string":
          return ce ? D : m(D);
        case "number":
          return isFinite(D) ? String(D) : "null";
        case "boolean":
        case "null":
        case "bigint":
          return String(D);
        case "object":
          if (!D) return "null";
          if (
            ((i += n),
            (J = []),
            Object.prototype.toString.apply(D) === "[object Array]")
          ) {
            for (q = D.length, N = 0; N < q; N += 1) J[N] = _(N, D) || "null";
            return (
              (H =
                J.length === 0
                  ? "[]"
                  : i
                  ? `[
` +
                    i +
                    J.join(
                      `,
` + i
                    ) +
                    `
` +
                    K +
                    "]"
                  : "[" + J.join(",") + "]"),
              (i = K),
              H
            );
          }
          if (h && typeof h == "object")
            for (q = h.length, N = 0; N < q; N += 1)
              typeof h[N] == "string" &&
                ((T = h[N]),
                (H = _(T, D)),
                H && J.push(m(T) + (i ? ": " : ":") + H));
          else
            Object.keys(D).forEach(function (Se) {
              var le = _(Se, D);
              le && J.push(m(Se) + (i ? ": " : ":") + le);
            });
          return (
            (H =
              J.length === 0
                ? "{}"
                : i
                ? `{
` +
                  i +
                  J.join(
                    `,
` + i
                  ) +
                  `
` +
                  K +
                  "}"
                : "{" + J.join(",") + "}"),
            (i = K),
            H
          );
      }
    }
    typeof t.stringify != "function" &&
      (t.stringify = function (O, I, N) {
        var T;
        if (((i = ""), (n = ""), typeof N == "number"))
          for (T = 0; T < N; T += 1) n += " ";
        else typeof N == "string" && (n = N);
        if (
          ((h = I),
          I &&
            typeof I != "function" &&
            (typeof I != "object" || typeof I.length != "number"))
        )
          throw new Error("JSON.stringify");
        return _("", { "": O });
      });
  })();
})(fs);
var zt = null;
const Ws =
    /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,
  Ks =
    /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;
var Xs = function (s) {
    var e = {
      strict: !1,
      storeAsString: !1,
      alwaysParseAsBig: !1,
      useNativeBigInt: !1,
      protoAction: "error",
      constructorAction: "error",
    };
    if (s != null) {
      if (
        (s.strict === !0 && (e.strict = !0),
        s.storeAsString === !0 && (e.storeAsString = !0),
        (e.alwaysParseAsBig =
          s.alwaysParseAsBig === !0 ? s.alwaysParseAsBig : !1),
        (e.useNativeBigInt = s.useNativeBigInt === !0 ? s.useNativeBigInt : !1),
        typeof s.constructorAction < "u")
      )
        if (
          s.constructorAction === "error" ||
          s.constructorAction === "ignore" ||
          s.constructorAction === "preserve"
        )
          e.constructorAction = s.constructorAction;
        else
          throw new Error(
            `Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${s.constructorAction}`
          );
      if (typeof s.protoAction < "u")
        if (
          s.protoAction === "error" ||
          s.protoAction === "ignore" ||
          s.protoAction === "preserve"
        )
          e.protoAction = s.protoAction;
        else
          throw new Error(
            `Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${s.protoAction}`
          );
    }
    var t,
      r,
      i = {
        '"': '"',
        "\\": "\\",
        "/": "/",
        b: "\b",
        f: "\f",
        n: `
`,
        r: "\r",
        t: "	",
      },
      n,
      a = function (q) {
        throw { name: "SyntaxError", message: q, at: t, text: n };
      },
      h = function (q) {
        return (
          q && q !== r && a("Expected '" + q + "' instead of '" + r + "'"),
          (r = n.charAt(t)),
          (t += 1),
          r
        );
      },
      m = function () {
        var q,
          K = "";
        for (r === "-" && ((K = "-"), h("-")); r >= "0" && r <= "9"; )
          (K += r), h();
        if (r === ".") for (K += "."; h() && r >= "0" && r <= "9"; ) K += r;
        if (r === "e" || r === "E")
          for (
            K += r, h(), (r === "-" || r === "+") && ((K += r), h());
            r >= "0" && r <= "9";

          )
            (K += r), h();
        if (((q = +K), !isFinite(q))) a("Bad number");
        else
          return (
            zt == null && (zt = Mr.exports),
            K.length > 15
              ? e.storeAsString
                ? K
                : e.useNativeBigInt
                ? BigInt(K)
                : new zt(K)
              : e.alwaysParseAsBig
              ? e.useNativeBigInt
                ? BigInt(q)
                : new zt(q)
              : q
          );
      },
      _ = function () {
        var q,
          K,
          J = "",
          D;
        if (r === '"')
          for (var ce = t; h(); ) {
            if (r === '"')
              return t - 1 > ce && (J += n.substring(ce, t - 1)), h(), J;
            if (r === "\\") {
              if (
                (t - 1 > ce && (J += n.substring(ce, t - 1)), h(), r === "u")
              ) {
                for (
                  D = 0, K = 0;
                  K < 4 && ((q = parseInt(h(), 16)), !!isFinite(q));
                  K += 1
                )
                  D = D * 16 + q;
                J += String.fromCharCode(D);
              } else if (typeof i[r] == "string") J += i[r];
              else break;
              ce = t;
            }
          }
        a("Bad string");
      },
      O = function () {
        for (; r && r <= " "; ) h();
      },
      I = function () {
        switch (r) {
          case "t":
            return h("t"), h("r"), h("u"), h("e"), !0;
          case "f":
            return h("f"), h("a"), h("l"), h("s"), h("e"), !1;
          case "n":
            return h("n"), h("u"), h("l"), h("l"), null;
        }
        a("Unexpected '" + r + "'");
      },
      N,
      T = function () {
        var q = [];
        if (r === "[") {
          if ((h("["), O(), r === "]")) return h("]"), q;
          for (; r; ) {
            if ((q.push(N()), O(), r === "]")) return h("]"), q;
            h(","), O();
          }
        }
        a("Bad array");
      },
      H = function () {
        var q,
          K = Object.create(null);
        if (r === "{") {
          if ((h("{"), O(), r === "}")) return h("}"), K;
          for (; r; ) {
            if (
              ((q = _()),
              O(),
              h(":"),
              e.strict === !0 &&
                Object.hasOwnProperty.call(K, q) &&
                a('Duplicate key "' + q + '"'),
              Ws.test(q) === !0
                ? e.protoAction === "error"
                  ? a("Object contains forbidden prototype property")
                  : e.protoAction === "ignore"
                  ? N()
                  : (K[q] = N())
                : Ks.test(q) === !0
                ? e.constructorAction === "error"
                  ? a("Object contains forbidden constructor property")
                  : e.constructorAction === "ignore"
                  ? N()
                  : (K[q] = N())
                : (K[q] = N()),
              O(),
              r === "}")
            )
              return h("}"), K;
            h(","), O();
          }
        }
        a("Bad object");
      };
    return (
      (N = function () {
        switch ((O(), r)) {
          case "{":
            return H();
          case "[":
            return T();
          case '"':
            return _();
          case "-":
            return m();
          default:
            return r >= "0" && r <= "9" ? m() : I();
        }
      }),
      function (q, K) {
        var J;
        return (
          (n = q + ""),
          (t = 0),
          (r = " "),
          (J = N()),
          O(),
          r && a("Syntax error"),
          typeof K == "function"
            ? (function D(ce, Se) {
                var le,
                  Y = ce[Se];
                return (
                  Y &&
                    typeof Y == "object" &&
                    Object.keys(Y).forEach(function (X) {
                      (le = D(Y, X)), le !== void 0 ? (Y[X] = le) : delete Y[X];
                    }),
                  K.call(ce, Se, Y)
                );
              })({ "": J }, "")
            : J
        );
      }
    );
  },
  Zs = Xs,
  ds = fs.exports.stringify,
  ps = Zs;
Bt.exports = function (s) {
  return { parse: ps(s), stringify: ds };
};
Bt.exports.parse = ps();
Bt.exports.stringify = ds;
var U;
(function (s) {
  (s.ApiError = "BAD API"),
    (s.BadAuthentication = "BAD_AUTHENTICATION"),
    (s.BadCreds = "BAD_CREDS"),
    (s.BadHeader = "BAD_HEADER"),
    (s.BadJson = "BAD_JSON"),
    (s.BadPayload = "BAD_PAYLOAD"),
    (s.BadSubject = "BAD_SUBJECT"),
    (s.Cancelled = "CANCELLED"),
    (s.ConnectionClosed = "CONNECTION_CLOSED"),
    (s.ConnectionDraining = "CONNECTION_DRAINING"),
    (s.ConnectionRefused = "CONNECTION_REFUSED"),
    (s.ConnectionTimeout = "CONNECTION_TIMEOUT"),
    (s.Disconnect = "DISCONNECT"),
    (s.InvalidOption = "INVALID_OPTION"),
    (s.InvalidPayload = "INVALID_PAYLOAD"),
    (s.MaxPayloadExceeded = "MAX_PAYLOAD_EXCEEDED"),
    (s.NoResponders = "503"),
    (s.NotFunction = "NOT_FUNC"),
    (s.RequestError = "REQUEST_ERROR"),
    (s.ServerOptionNotAvailable = "SERVER_OPT_NA"),
    (s.SubClosed = "SUB_CLOSED"),
    (s.SubDraining = "SUB_DRAINING"),
    (s.Timeout = "TIMEOUT"),
    (s.Tls = "TLS"),
    (s.Unknown = "UNKNOWN_ERROR"),
    (s.WssRequired = "WSS_REQUIRED"),
    (s.JetStreamInvalidAck = "JESTREAM_INVALID_ACK"),
    (s.JetStream404NoMessages = "404"),
    (s.JetStream408RequestTimeout = "408"),
    (s.JetStream409MaxAckPendingExceeded = "409"),
    (s.JetStream409 = "409"),
    (s.JetStreamNotEnabled = "503"),
    (s.JetStreamIdleHeartBeat = "IDLE_HEARTBEAT"),
    (s.AuthorizationViolation = "AUTHORIZATION_VIOLATION"),
    (s.AuthenticationExpired = "AUTHENTICATION_EXPIRED"),
    (s.ProtocolError = "NATS_PROTOCOL_ERR"),
    (s.PermissionsViolation = "PERMISSIONS_VIOLATION");
})(U || (U = {}));
class ms {
  messages;
  constructor() {
    (this.messages = new Map()),
      this.messages.set(
        U.InvalidPayload,
        "Invalid payload type - payloads can be 'binary', 'string', or 'json'"
      ),
      this.messages.set(U.BadJson, "Bad JSON"),
      this.messages.set(
        U.WssRequired,
        "TLS is required, therefore a secure websocket connection is also required"
      );
  }
  static getMessage(e) {
    return Qs.getMessage(e);
  }
  getMessage(e) {
    return this.messages.get(e) || e;
  }
}
const Qs = new ms();
function ei(s) {
  return typeof s.code == "string";
}
class z extends Error {
  name;
  message;
  code;
  permissionContext;
  chainedError;
  api_error;
  constructor(e, t, r) {
    super(e),
      (this.name = "NatsError"),
      (this.message = e),
      (this.code = t),
      (this.chainedError = r);
  }
  static errorForCode(e, t) {
    const r = ms.getMessage(e);
    return new z(r, e, t);
  }
  isAuthError() {
    return (
      this.code === U.AuthenticationExpired ||
      this.code === U.AuthorizationViolation
    );
  }
  isPermissionError() {
    return this.code === U.PermissionsViolation;
  }
  isProtocolError() {
    return this.code === U.ProtocolError;
  }
  isJetStreamError() {
    return this.api_error !== void 0;
  }
  jsError() {
    return this.api_error ? this.api_error : null;
  }
}
const Pe = new Uint8Array(0);
var nt;
(function (s) {
  (s.Disconnect = "disconnect"),
    (s.Reconnect = "reconnect"),
    (s.Update = "update"),
    (s.LDM = "ldm"),
    (s.Error = "error");
})(nt || (nt = {}));
var Mt;
(function (s) {
  (s.Reconnecting = "reconnecting"),
    (s.PingTimer = "pingTimer"),
    (s.StaleConnection = "staleConnection");
})(Mt || (Mt = {}));
const Er = "127.0.0.1",
  gs = 2 * 1e3,
  bs = 2 * 60 * 1e3,
  ti = 2;
var Ye;
(function (s) {
  (s.Timer = "timer"),
    (s.Count = "count"),
    (s.JitterTimer = "jitterTimer"),
    (s.SentinelMsg = "sentinelMsg");
})(Ye || (Ye = {}));
var Gr;
(function (s) {
  (s.API = "api_audit"),
    (s.StreamAction = "stream_action"),
    (s.ConsumerAction = "consumer_action"),
    (s.SnapshotCreate = "snapshot_create"),
    (s.SnapshotComplete = "snapshot_complete"),
    (s.RestoreCreate = "restore_create"),
    (s.RestoreComplete = "restore_complete"),
    (s.MaxDeliver = "max_deliver"),
    (s.Terminated = "terminated"),
    (s.Ack = "consumer_ack"),
    (s.StreamLeaderElected = "stream_leader_elected"),
    (s.StreamQuorumLost = "stream_quorum_lost"),
    (s.ConsumerLeaderElected = "consumer_leader_elected"),
    (s.ConsumerQuorumLost = "consumer_quorum_lost");
})(Gr || (Gr = {}));
var Ar;
(function (s) {
  (s.Limits = "limits"), (s.Interest = "interest"), (s.Workqueue = "workqueue");
})(Ar || (Ar = {}));
var Tt;
(function (s) {
  (s.Old = "old"), (s.New = "new");
})(Tt || (Tt = {}));
var kr;
(function (s) {
  (s.File = "file"), (s.Memory = "memory");
})(kr || (kr = {}));
var Te;
(function (s) {
  (s.All = "all"),
    (s.Last = "last"),
    (s.New = "new"),
    (s.StartSequence = "by_start_sequence"),
    (s.StartTime = "by_start_time"),
    (s.LastPerSubject = "last_per_subject");
})(Te || (Te = {}));
var ve;
(function (s) {
  (s.None = "none"),
    (s.All = "all"),
    (s.Explicit = "explicit"),
    (s.NotSet = "");
})(ve || (ve = {}));
var xt;
(function (s) {
  (s.Instant = "instant"), (s.Original = "original");
})(xt || (xt = {}));
var He;
(function (s) {
  (s.StreamSourceHdr = "Nats-Stream-Source"),
    (s.LastConsumerSeqHdr = "Nats-Last-Consumer"),
    (s.LastStreamSeqHdr = "Nats-Last-Stream"),
    (s.ConsumerStalledHdr = "Nats-Consumer-Stalled"),
    (s.MessageSizeHdr = "Nats-Msg-Size"),
    (s.RollupHdr = "Nats-Rollup"),
    (s.RollupValueSubject = "sub"),
    (s.RollupValueAll = "all");
})(He || (He = {}));
var gt;
(function (s) {
  (s.Stream = "Nats-Stream"),
    (s.Sequence = "Nats-Sequence"),
    (s.TimeStamp = "Nats-Time-Stamp"),
    (s.Subject = "Nats-Subject");
})(gt || (gt = {}));
var Hr;
(function (s) {
  (s.Stream = "Nats-Stream"),
    (s.Subject = "Nats-Subject"),
    (s.Sequence = "Nats-Sequence"),
    (s.LastSequence = "Nats-Last-Sequence"),
    (s.Size = "Nats-Msg-Size");
})(Hr || (Hr = {}));
const yt = new TextEncoder(),
  We = new TextDecoder();
function ri(...s) {
  let e = 0;
  for (let i = 0; i < s.length; i++) e += s[i].length;
  const t = new Uint8Array(e);
  let r = 0;
  for (let i = 0; i < s.length; i++) t.set(s[i], r), (r += s[i].length);
  return t;
}
function It(...s) {
  const e = [];
  for (let t = 0; t < s.length; t++) e.push(yt.encode(s[t]));
  return e.length === 0 ? Pe : e.length === 1 ? e[0] : ri(...e);
}
function zr(s) {
  return !s || s.length === 0 ? "" : We.decode(s);
}
class Ut {
  buffers;
  byteLength;
  constructor() {
    (this.buffers = []), (this.byteLength = 0);
  }
  static concat(...e) {
    let t = 0;
    for (let n = 0; n < e.length; n++) t += e[n].length;
    const r = new Uint8Array(t);
    let i = 0;
    for (let n = 0; n < e.length; n++) r.set(e[n], i), (i += e[n].length);
    return r;
  }
  static fromAscii(e) {
    return e || (e = ""), yt.encode(e);
  }
  static toAscii(e) {
    return We.decode(e);
  }
  reset() {
    (this.buffers.length = 0), (this.byteLength = 0);
  }
  pack() {
    if (this.buffers.length > 1) {
      const e = new Uint8Array(this.byteLength);
      let t = 0;
      for (let r = 0; r < this.buffers.length; r++)
        e.set(this.buffers[r], t), (t += this.buffers[r].length);
      (this.buffers.length = 0), this.buffers.push(e);
    }
  }
  shift() {
    if (this.buffers.length) {
      const e = this.buffers.shift();
      if (e) return (this.byteLength -= e.length), e;
    }
    return new Uint8Array(0);
  }
  drain(e) {
    if (this.buffers.length) {
      this.pack();
      const t = this.buffers.pop();
      if (t) {
        const r = this.byteLength;
        (e === void 0 || e > r) && (e = r);
        const i = t.subarray(0, e);
        return (
          r > e && this.buffers.push(t.subarray(e)),
          (this.byteLength = r - e),
          i
        );
      }
    }
    return new Uint8Array(0);
  }
  fill(e, ...t) {
    e && (this.buffers.push(e), (this.byteLength += e.length));
    for (let r = 0; r < t.length; r++)
      t[r] &&
        t[r].length &&
        (this.buffers.push(t[r]), (this.byteLength += t[r].length));
  }
  peek() {
    return this.buffers.length
      ? (this.pack(), this.buffers[0])
      : new Uint8Array(0);
  }
  size() {
    return this.byteLength;
  }
  length() {
    return this.buffers.length;
  }
}
const it = `\r
`,
  Qt = Ut.fromAscii(it),
  si = new Uint8Array(Qt)[0],
  ii = new Uint8Array(Qt)[1];
function ni(s) {
  return s instanceof Uint8Array;
}
function oi(s) {
  for (let e = 0; e < s.length; e++) {
    const t = e + 1;
    if (s.byteLength > t && s[e] === si && s[t] === ii) return t + 1;
  }
  return 0;
}
function ai(s) {
  const e = oi(s);
  if (e > 0) {
    const r = new Uint8Array(s).slice(0, e);
    return We.decode(r);
  }
  return "";
}
function or(s, ...e) {
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    Object.keys(r).forEach(function (i) {
      s[i] = r[i];
    });
  }
  return s;
}
function Jt(s) {
  const e = "\u240D",
    t = "\u240A";
  return We.decode(s).replace(/\n/g, t).replace(/\r/g, e);
}
function ar(s) {
  const e = z.errorForCode(U.Timeout);
  let t, r;
  const i = new Promise((n, a) => {
    (t = {
      cancel: () => {
        r && clearTimeout(r);
      },
    }),
      (r = setTimeout(() => {
        a(e);
      }, s));
  });
  return Object.assign(i, t);
}
function Tr(s = 0) {
  return new Promise((e) => {
    setTimeout(() => {
      e();
    }, s);
  });
}
function me() {
  let s = {};
  const e = new Promise((t, r) => {
    s = { resolve: t, reject: r };
  });
  return Object.assign(e, s);
}
function _s(s) {
  for (let e = s.length - 1; e > 0; e--) {
    const t = Math.floor(Math.random() * (e + 1));
    [s[e], s[t]] = [s[t], s[e]];
  }
  return s;
}
class Ce {
  inflight;
  processed;
  received;
  noIterator;
  iterClosed;
  done;
  signal;
  yields;
  filtered;
  pendingFiltered;
  ingestionFilterFn;
  protocolFilterFn;
  dispatchedFn;
  ctx;
  _data;
  err;
  time;
  constructor() {
    (this.inflight = 0),
      (this.filtered = 0),
      (this.pendingFiltered = 0),
      (this.processed = 0),
      (this.received = 0),
      (this.noIterator = !1),
      (this.done = !1),
      (this.signal = me()),
      (this.yields = []),
      (this.iterClosed = me()),
      (this.time = 0);
  }
  [Symbol.asyncIterator]() {
    return this.iterate();
  }
  push(e) {
    if (this.done) return;
    if (typeof e == "function") {
      this.yields.push(e), this.signal.resolve();
      return;
    }
    const { ingest: t, protocol: r } = this.ingestionFilterFn
      ? this.ingestionFilterFn(e, this.ctx || this)
      : { ingest: !0, protocol: !1 };
    t &&
      (r && (this.filtered++, this.pendingFiltered++),
      this.yields.push(e),
      this.signal.resolve());
  }
  async *iterate() {
    if (this.noIterator) throw new z("unsupported iterator", U.ApiError);
    try {
      for (;;) {
        if ((this.yields.length === 0 && (await this.signal), this.err))
          throw this.err;
        const e = this.yields;
        (this.inflight = e.length), (this.yields = []);
        for (let t = 0; t < e.length; t++) {
          if (typeof e[t] == "function") {
            const i = e[t];
            try {
              i();
            } catch (n) {
              throw n;
            }
            if (this.err) throw this.err;
            continue;
          }
          if (this.protocolFilterFn ? this.protocolFilterFn(e[t]) : !0) {
            this.processed++;
            const i = Date.now();
            yield e[t],
              (this.time = Date.now() - i),
              this.dispatchedFn && e[t] && this.dispatchedFn(e[t]);
          } else this.pendingFiltered--;
          this.inflight--;
        }
        if (this.done) break;
        this.yields.length === 0 &&
          ((e.length = 0), (this.yields = e), (this.signal = me()));
      }
    } finally {
      this.stop();
    }
  }
  stop(e) {
    this.done ||
      ((this.err = e),
      (this.done = !0),
      this.signal.resolve(),
      this.iterClosed.resolve());
  }
  getProcessed() {
    return this.noIterator ? this.received : this.processed;
  }
  getPending() {
    return this.yields.length + this.inflight - this.pendingFiltered;
  }
  getReceived() {
    return this.received - this.filtered;
  }
}
function Jr(s) {
  let r = !0;
  const i = new Array(s.length);
  for (let n = 0; n < s.length; n++) {
    let a = s.charCodeAt(n);
    if (a === 58 || a < 33 || a > 126)
      throw new z(
        `'${s[n]}' is not a valid character for a header key`,
        U.BadHeader
      );
    r && 97 <= a && a <= 122
      ? (a -= 32)
      : !r && 65 <= a && a <= 90 && (a += 32),
      (i[n] = a),
      (r = a == 45);
  }
  return String.fromCharCode(...i);
}
function Qe(s = 0, e = "") {
  if ((s === 0 && e !== "") || (s > 0 && e === ""))
    throw new Error("setting status requires both code and description");
  return new et(s, e);
}
const _r = "NATS/1.0";
var Ue;
(function (s) {
  (s[(s.Exact = 0)] = "Exact"),
    (s[(s.CanonicalMIME = 1)] = "CanonicalMIME"),
    (s[(s.IgnoreCase = 2)] = "IgnoreCase");
})(Ue || (Ue = {}));
class et {
  _code;
  headers;
  _description;
  constructor(e = 0, t = "") {
    (this._code = e), (this._description = t), (this.headers = new Map());
  }
  [Symbol.iterator]() {
    return this.headers.entries();
  }
  size() {
    return this.headers.size;
  }
  equals(e) {
    if (e && this.headers.size === e.headers.size && this._code === e._code) {
      for (const [t, r] of this.headers) {
        const i = e.values(t);
        if (r.length !== i.length) return !1;
        const n = [...r].sort(),
          a = [...i].sort();
        for (let h = 0; h < n.length; h++) if (n[h] !== a[h]) return !1;
      }
      return !0;
    }
    return !1;
  }
  static decode(e) {
    const t = new et(),
      i = We.decode(e).split(`\r
`),
      n = i[0];
    if (n !== _r) {
      let a = n.replace(_r, "");
      t._code = parseInt(a, 10);
      const h = t._code.toString();
      (a = a.replace(h, "")), (t._description = a.trim());
    }
    return (
      i.length >= 1 &&
        i.slice(1).map((a) => {
          if (a) {
            const h = a.indexOf(":");
            if (h > -1) {
              const m = a.slice(0, h),
                _ = a.slice(h + 1).trim();
              t.append(m, _);
            }
          }
        }),
      t
    );
  }
  toString() {
    if (this.headers.size === 0 && this._code === 0) return "";
    let e = _r;
    this._code > 0 &&
      this._description !== "" &&
      (e += ` ${this._code} ${this._description}`);
    for (const [t, r] of this.headers)
      for (let i = 0; i < r.length; i++)
        e = `${e}\r
${t}: ${r[i]}`;
    return `${e}\r
\r
`;
  }
  encode() {
    return yt.encode(this.toString());
  }
  static validHeaderValue(e) {
    if (/[\r\n]/.test(e))
      throw new z(
        "invalid header value - \\r and \\n are not allowed.",
        U.BadHeader
      );
    return e.trim();
  }
  keys() {
    const e = [];
    for (const t of this.headers.keys()) e.push(t);
    return e;
  }
  findKeys(e, t = Ue.Exact) {
    const r = this.keys();
    switch (t) {
      case Ue.Exact:
        return r.filter((i) => i === e);
      case Ue.CanonicalMIME:
        return (e = Jr(e)), r.filter((i) => i === e);
      default: {
        const i = e.toLowerCase();
        return r.filter((n) => i === n.toLowerCase());
      }
    }
  }
  get(e, t = Ue.Exact) {
    const r = this.findKeys(e, t);
    if (r.length) {
      const i = this.headers.get(r[0]);
      if (i) return Array.isArray(i) ? i[0] : i;
    }
    return "";
  }
  has(e, t = Ue.Exact) {
    return this.findKeys(e, t).length > 0;
  }
  set(e, t, r = Ue.Exact) {
    this.delete(e, r), this.append(e, t, r);
  }
  append(e, t, r = Ue.Exact) {
    const i = Jr(e);
    r === Ue.CanonicalMIME && (e = i);
    const n = this.findKeys(e, r);
    e = n.length > 0 ? n[0] : e;
    const a = et.validHeaderValue(t);
    let h = this.headers.get(e);
    h || ((h = []), this.headers.set(e, h)), h.push(a);
  }
  values(e, t = Ue.Exact) {
    const r = [];
    return (
      this.findKeys(e, t).forEach((n) => {
        const a = this.headers.get(n);
        a && r.push(...a);
      }),
      r
    );
  }
  delete(e, t = Ue.Exact) {
    this.findKeys(e, t).forEach((i) => {
      this.headers.delete(i);
    });
  }
  get hasError() {
    return this._code >= 300;
  }
  get status() {
    return `${this._code} ${this._description}`.trim();
  }
  toRecord() {
    const e = {};
    return (
      this.keys().forEach((t) => {
        e[t] = this.values(t);
      }),
      e
    );
  }
  get code() {
    return this._code;
  }
  get description() {
    return this._description;
  }
  static fromRecord(e) {
    const t = new et();
    for (const r in e) t.headers.set(r, e[r]);
    return t;
  }
}
function ci() {
  return {
    encode(s) {
      return yt.encode(s);
    },
    decode(s) {
      return We.decode(s);
    },
  };
}
function Je(s) {
  return {
    encode(e) {
      try {
        return e === void 0 && (e = null), yt.encode(JSON.stringify(e));
      } catch (t) {
        throw z.errorForCode(U.BadJson, t);
      }
    },
    decode(e) {
      try {
        return JSON.parse(We.decode(e), s);
      } catch (t) {
        throw z.errorForCode(U.BadJson, t);
      }
    },
  };
}
const Yr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Vr = 36,
  ui = 0xcfd41b9100000,
  Wr = 33,
  hi = 333,
  Kr = 12 + 10;
function li(s) {
  for (let e = 0; e < s.length; e++) s[e] = Math.floor(Math.random() * 255);
}
function fi(s) {
  globalThis?.crypto?.getRandomValues
    ? globalThis.crypto.getRandomValues(s)
    : li(s);
}
class di {
  buf;
  seq;
  inc;
  constructor() {
    (this.buf = new Uint8Array(Kr)), this.init();
  }
  init() {
    this.setPre(), this.initSeqAndInc(), this.fillSeq();
  }
  initSeqAndInc() {
    (this.seq = Math.floor(Math.random() * ui)),
      (this.inc = Math.floor(Math.random() * (hi - Wr) + Wr));
  }
  setPre() {
    const e = new Uint8Array(12);
    fi(e);
    for (let t = 0; t < 12; t++) {
      const r = e[t] % 36;
      this.buf[t] = Yr.charCodeAt(r);
    }
  }
  fillSeq() {
    let e = this.seq;
    for (let t = Kr - 1; t >= 12; t--)
      (this.buf[t] = Yr.charCodeAt(e % Vr)), (e = Math.floor(e / Vr));
  }
  next() {
    return (
      (this.seq += this.inc),
      this.seq > 0xcfd41b9100000 && (this.setPre(), this.initSeqAndInc()),
      this.fillSeq(),
      String.fromCharCode.apply(String, this.buf)
    );
  }
  reset() {
    this.init();
  }
}
const cr = new di();
function ws(s) {
  return s && s.data.length === 0 && s.headers?.code === 503
    ? z.errorForCode(U.NoResponders)
    : null;
}
class xs {
  _headers;
  _msg;
  _rdata;
  _reply;
  _subject;
  publisher;
  constructor(e, t, r) {
    (this._msg = e), (this._rdata = t), (this.publisher = r);
  }
  get subject() {
    return this._subject
      ? this._subject
      : ((this._subject = We.decode(this._msg.subject)), this._subject);
  }
  get reply() {
    return this._reply
      ? this._reply
      : ((this._reply = We.decode(this._msg.reply)), this._reply);
  }
  get sid() {
    return this._msg.sid;
  }
  get headers() {
    if (this._msg.hdr > -1 && !this._headers) {
      const e = this._rdata.subarray(0, this._msg.hdr);
      this._headers = et.decode(e);
    }
    return this._headers;
  }
  get data() {
    return this._rdata
      ? this._msg.hdr > -1
        ? this._rdata.subarray(this._msg.hdr)
        : this._rdata
      : new Uint8Array(0);
  }
  respond(e = Pe, t) {
    return this.reply ? (this.publisher.publish(this.reply, e, t), !0) : !1;
  }
  size() {
    const e = this._msg.subject.length,
      t = this._msg.reply?.length || 0,
      r = this._msg.size === -1 ? 0 : this._msg.size;
    return e + t + r;
  }
}
function _t(s) {
  return ys("durable", s);
}
function Ne(s) {
  return ys("stream", s);
}
function ys(s, e = "") {
  if (e === "") throw Error(`${s} name required`);
  return (
    [".", "*", ">", "/", "\\"].forEach((r) => {
      if (e.indexOf(r) !== -1)
        throw Error(`invalid ${s} name - ${s} name cannot contain '${r}'`);
    }),
    ""
  );
}
function Xt(s, e = "") {
  if (e === "") throw Error(`${s} name required`);
  const t = vs(e);
  if (t.length) throw new Error(`invalid ${s} name - ${s} name ${t}`);
}
function vs(s = "") {
  if (s === "") throw Error("name required");
  const e = /^[-\w]+$/g;
  if (s.match(e) === null) {
    for (const r of s.split(""))
      if (r.match(e) === null) return `cannot contain '${r}'`;
  }
  return "";
}
function pi(s, e = {}) {
  return Object.assign(
    {
      name: s,
      deliver_policy: Te.All,
      ack_policy: ve.Explicit,
      ack_wait: ge(30 * 1e3),
      replay_policy: xt.Instant,
    },
    e
  );
}
function ge(s) {
  return s * 1e6;
}
function $r(s) {
  return Math.floor(s / 1e6);
}
function Pr(s) {
  if (s.data.length > 0) return !1;
  const e = s.headers;
  return e ? e.code >= 100 && e.code < 200 : !1;
}
function Xr(s) {
  return Pr(s) && s.headers?.description === "Idle Heartbeat";
}
function mi(s, e, t) {
  const r = Qe(s, e),
    i = { hdr: 1, sid: 0, size: 0 },
    n = new xs(i, Pe, {});
  return (n._headers = r), (n._subject = t), n;
}
function wt(s) {
  if (s.data.length !== 0) return null;
  const e = s.headers;
  return e ? Ss(e.code, e.description) : null;
}
var Ge;
(function (s) {
  (s.MaxBatchExceeded = "exceeded maxrequestbatch of"),
    (s.MaxExpiresExceeded = "exceeded maxrequestexpires of"),
    (s.MaxBytesExceeded = "exceeded maxrequestmaxbytes of"),
    (s.MaxMessageSizeExceeded = "message size exceeds maxbytes"),
    (s.PushConsumer = "consumer is push based"),
    (s.MaxWaitingExceeded = "exceeded maxwaiting"),
    (s.IdleHeartbeatMissed = "`idle heartbeats missed`");
})(Ge || (Ge = {}));
function gi(s) {
  return s.code !== U.JetStream409
    ? !1
    : [
        Ge.MaxBatchExceeded,
        Ge.MaxExpiresExceeded,
        Ge.MaxBytesExceeded,
        Ge.MaxMessageSizeExceeded,
        Ge.PushConsumer,
        Ge.IdleHeartbeatMissed,
      ].find((t) => s.message.indexOf(t) !== -1) !== void 0;
}
function Ss(s, e = "") {
  if (s < 300) return null;
  switch (((e = e.toLowerCase()), s)) {
    case 404:
      return new z(e, U.JetStream404NoMessages);
    case 408:
      return new z(e, U.JetStream408RequestTimeout);
    case 409: {
      const t = e.startsWith(Ge.IdleHeartbeatMissed)
        ? U.JetStreamIdleHeartBeat
        : U.JetStream409;
      return new z(e, t);
    }
    case 503:
      return z.errorForCode(U.JetStreamNotEnabled, new Error(e));
    default:
      return e === "" && (e = U.Unknown), new z(e, `${s}`);
  }
}
function at(s = "") {
  const e = s.match(/(\d+).(\d+).(\d+)/);
  if (e)
    return {
      major: parseInt(e[1]),
      minor: parseInt(e[2]),
      micro: parseInt(e[3]),
    };
  throw new Error(`'${s}' is not a semver value`);
}
function Or(s, e) {
  return s.major < e.major
    ? -1
    : s.major > e.major
    ? 1
    : s.minor < e.minor
    ? -1
    : s.minor > e.minor
    ? 1
    : s.micro < e.micro
    ? -1
    : s.micro > e.micro
    ? 1
    : 0;
}
var $e;
(function (s) {
  (s.JS_KV = "js_kv"),
    (s.JS_OBJECTSTORE = "js_objectstore"),
    (s.JS_PULL_MAX_BYTES = "js_pull_max_bytes"),
    (s.JS_NEW_CONSUMER_CREATE_API = "js_new_consumer_create"),
    (s.JS_ALLOW_DIRECT = "js_allow_direct");
})($e || ($e = {}));
class bi {
  server;
  features;
  disabled;
  constructor(e) {
    (this.features = new Map()), (this.disabled = []), this.update(e);
  }
  resetDisabled() {
    (this.disabled.length = 0), this.update(this.server);
  }
  disable(e) {
    this.disabled.push(e), this.update(this.server);
  }
  isDisabled(e) {
    return this.disabled.indexOf(e) !== -1;
  }
  update(e) {
    typeof e == "string" && (e = at(e)),
      (this.server = e),
      this.set($e.JS_KV, "2.6.2"),
      this.set($e.JS_OBJECTSTORE, "2.6.3"),
      this.set($e.JS_PULL_MAX_BYTES, "2.8.3"),
      this.set($e.JS_NEW_CONSUMER_CREATE_API, "2.9.0"),
      this.set($e.JS_ALLOW_DIRECT, "2.9.0"),
      this.disabled.forEach((t) => {
        this.features.delete(t);
      });
  }
  set(e, t) {
    this.features.set(e, { min: t, ok: Or(this.server, at(t)) >= 0 });
  }
  get(e) {
    return this.features.get(e) || { min: "unknown", ok: !1 };
  }
  supports(e) {
    return this.get(e)?.ok || !1;
  }
  require(e) {
    return typeof e == "string" && (e = at(e)), Or(this.server, e) >= 0;
  }
}
const _i = "$SRV",
  er = "Nats-Service-Error",
  tr = "Nats-Service-Error-Code";
var Ve;
(function (s) {
  (s.PING = "PING"),
    (s.STATS = "STATS"),
    (s.INFO = "INFO"),
    (s.SCHEMA = "SCHEMA");
})(Ve || (Ve = {}));
var bt;
(function (s) {
  (s.STATS = "io.nats.micro.v1.stats_response"),
    (s.INFO = "io.nats.micro.v1.info_response"),
    (s.PING = "io.nats.micro.v1.ping_response"),
    (s.SCHEMA = "io.nats.micro.v1.schema_response");
})(bt || (bt = {}));
class Zr {
  msg;
  constructor(e) {
    this.msg = e;
  }
  get data() {
    return this.msg.data;
  }
  get sid() {
    return this.msg.sid;
  }
  get subject() {
    return this.msg.subject;
  }
  respond(e, t) {
    return this.msg.respond(e, t);
  }
  respondError(e, t, r, i) {
    return (
      (i = i || {}),
      (i.headers = i.headers || Qe()),
      i.headers?.set(tr, `${e}`),
      i.headers?.set(er, t),
      this.msg.respond(r, i)
    );
  }
}
class $t {
  subject;
  srv;
  constructor(e, t = "") {
    t !== "" && xi("service group", t);
    let r = "";
    if (e instanceof Ft) (this.srv = e), (r = "");
    else if (e instanceof $t) {
      const i = e;
      (this.srv = i.srv), (r = i.subject);
    } else throw new Error("unknown ServiceGroup type");
    this.subject = this.calcSubject(r, t);
  }
  calcSubject(e, t = "") {
    return t === "" ? e : e !== "" ? `${e}.${t}` : t;
  }
  addEndpoint(e = "", t) {
    t = t || { subject: e };
    const r = typeof t == "function" ? { handler: t, subject: e } : t;
    Xt("endpoint", e);
    let { subject: i, handler: n, schema: a } = r;
    (i = i || e),
      wi("endpoint subject", i),
      (i = this.calcSubject(this.subject, i));
    const h = { name: e, subject: i, handler: n, schema: a };
    return this.srv._addEndpoint(h);
  }
  addGroup(e = "") {
    return new $t(this, e);
  }
}
function wi(s, e) {
  if (e === "") throw new Error(`${s} cannot be empty`);
  if (e.indexOf(" ") !== -1)
    throw new Error(`${s} cannot contain spaces: '${e}'`);
  const t = e.split(".");
  t.forEach((r, i) => {
    if (r === ">" && i !== t.length - 1)
      throw new Error(`${s} cannot have internal '>': '${e}'`);
  });
}
function xi(s, e) {
  if (e.indexOf(" ") !== -1)
    throw new Error(`${s} cannot contain spaces: '${e}'`);
  e.split(".").forEach((r) => {
    if (r === ">")
      throw new Error(`${s} name cannot contain internal '>': '${e}'`);
  });
}
class rr extends Error {
  code;
  constructor(e, t) {
    super(t), (this.code = e);
  }
  static isServiceError(e) {
    return rr.toServiceError(e) !== null;
  }
  static toServiceError(e) {
    const t = e?.headers?.get(tr) || "";
    if (t !== "") {
      const r = parseInt(t) || 400,
        i = e?.headers?.get(er) || "";
      return new rr(r, i.length ? i : t);
    }
    return null;
  }
}
class Ft extends Ce {
  nc;
  _id;
  config;
  handlers;
  internal;
  _stopped;
  _done;
  _schema;
  started;
  static controlSubject(e, t = "", r = "", i) {
    const n = i ?? _i;
    return t === "" && r === ""
      ? `${n}.${e}`
      : (Xt("control subject name", t),
        r !== ""
          ? (Xt("control subject id", r), `${n}.${e}.${t}.${r}`)
          : `${n}.${e}.${t}`);
  }
  constructor(e, t = { name: "", version: "" }) {
    super(),
      (this.nc = e),
      (this.config = t),
      Xt("name", this.config.name),
      at(this.config.version),
      (this._id = cr.next()),
      (this.internal = []),
      (this._done = me()),
      (this._stopped = !1),
      (this.handlers = []),
      (this.noIterator = !0),
      (this.started = new Date().toISOString()),
      this.reset(),
      this.config.endpoint &&
        this._addEndpoint(
          {
            name: "default",
            subject: this.config.endpoint?.subject,
            handler: this.config.endpoint?.handler,
            schema: this.config.endpoint?.schema,
          },
          !0
        ),
      this.nc
        .closed()
        .then(() => {
          this.close().catch();
        })
        .catch((r) => {
          this.close(r).catch();
        });
  }
  get subjects() {
    return this.handlers.filter((e) => e.internal === !1).map((e) => e.subject);
  }
  get id() {
    return this._id;
  }
  get name() {
    return this.config.name;
  }
  get description() {
    return this.config.description ?? "";
  }
  get version() {
    return this.config.version;
  }
  errorToHeader(e) {
    const t = Qe();
    if (e instanceof rr) {
      const r = e;
      t.set(er, r.message), t.set(tr, `${r.code}`);
    } else t.set(er, e.message), t.set(tr, "500");
    return t;
  }
  setupHandler(e, t = !1) {
    const r = t ? "" : "q",
      { name: i, subject: n, handler: a, schema: h } = e,
      m = e;
    (m.internal = t),
      t && this.internal.push(m),
      (m.stats = new yi(i, n)),
      (m.schema = h);
    const _ = a
      ? (O, I) => {
          if (O) {
            this.close(O);
            return;
          }
          const N = Date.now();
          try {
            a(O, new Zr(I));
          } catch (T) {
            m.stats.countError(T),
              I?.respond(Pe, { headers: this.errorToHeader(T) });
          } finally {
            m.stats.countLatency(N);
          }
        }
      : void 0;
    return (
      (m.sub = this.nc.subscribe(n, { callback: _, queue: r })),
      m.sub.closed
        .then(() => {
          this._stopped ||
            this.close(
              new Error(`required subscription ${e.subject} stopped`)
            ).catch();
        })
        .catch((O) => {
          if (!this._stopped) {
            const I = new Error(
              `required subscription ${e.subject} errored: ${O.message}`
            );
            (I.stack = O.stack), this.close(I).catch();
          }
        }),
      m
    );
  }
  info() {
    return {
      type: bt.INFO,
      name: this.name,
      id: this.id,
      version: this.version,
      description: this.description,
      subjects: this.subjects,
    };
  }
  async stats() {
    const e = [];
    for (const t of this.handlers) {
      if (typeof this.config.statsHandler == "function")
        try {
          t.stats.data = await this.config.statsHandler(t);
        } catch (r) {
          t.stats.countError(r);
        }
      e.push(t.stats.stats(t.qi));
    }
    return {
      type: bt.STATS,
      name: this.name,
      id: this.id,
      version: this.version,
      started: this.started,
      endpoints: e,
    };
  }
  addInternalHandler(e, t) {
    const r = `${e}`.toUpperCase();
    this._doAddInternalHandler(`${r}-all`, e, t),
      this._doAddInternalHandler(`${r}-kind`, e, t, this.name),
      this._doAddInternalHandler(`${r}`, e, t, this.name, this.id);
  }
  _doAddInternalHandler(e, t, r, i = "", n = "") {
    const a = {};
    (a.name = e),
      (a.subject = Ft.controlSubject(t, i, n)),
      (a.handler = r),
      this.setupHandler(a, !0);
  }
  start() {
    const e = Je(),
      t = (h, m) =>
        h
          ? (this.close(h), Promise.reject(h))
          : this.stats().then(
              (_) => (m?.respond(e.encode(_)), Promise.resolve())
            ),
      r = (h, m) =>
        h
          ? (this.close(h), Promise.reject(h))
          : (m?.respond(e.encode(this.info())), Promise.resolve()),
      i = e.encode({
        type: bt.PING,
        name: this.name,
        id: this.id,
        version: this.version,
      }),
      n = (h, m) =>
        h
          ? (this.close(h).then().catch(), Promise.reject(h))
          : (m.respond(i), Promise.resolve()),
      a = (h, m) =>
        h
          ? (this.close(h), Promise.reject(h))
          : (m?.respond(Je().encode(this.schema())), Promise.resolve());
    return (
      this.addInternalHandler(Ve.PING, n),
      this.addInternalHandler(Ve.STATS, t),
      this.addInternalHandler(Ve.INFO, r),
      this.addInternalHandler(Ve.SCHEMA, a),
      this.handlers.forEach((h) => {
        const { subject: m } = h;
        typeof m == "string" && h.handler !== null && this.setupHandler(h);
      }),
      Promise.resolve(this)
    );
  }
  close(e) {
    if (this._stopped) return this._done;
    this._stopped = !0;
    let t = [];
    return (
      this.nc.isClosed() ||
        (t = this.handlers.concat(this.internal).map((r) => r.sub.drain())),
      Promise.allSettled(t).then(() => {
        this._done.resolve(e || null);
      }),
      this._done
    );
  }
  get stopped() {
    return this._done;
  }
  get isStopped() {
    return this._stopped;
  }
  stop(e) {
    return this.close(e);
  }
  schema() {
    const e = {
      type: bt.SCHEMA,
      name: this.name,
      id: this.id,
      version: this.version,
      api_url: this.config.apiURL,
      endpoints: [],
    };
    return (
      (e.endpoints = this.handlers.map((t) => {
        const { schema: r, subject: i, name: n } = t;
        return { schema: r, subject: i, name: n };
      })),
      e
    );
  }
  reset() {
    if (((this.started = new Date().toISOString()), this.handlers))
      for (const e of this.handlers) e.stats.reset(e.qi);
  }
  addGroup(e) {
    return new $t(this, e);
  }
  addEndpoint(e, t) {
    return new $t(this).addEndpoint(e, t);
  }
  _addEndpoint(e, t = !1) {
    const r = t ? this : new Ce();
    (r.noIterator = typeof e.handler == "function"),
      r.noIterator ||
        ((e.handler = (n, a) => {
          n ? this.stop(n).catch() : r.push(new Zr(a));
        }),
        r.iterClosed.then(() => {
          this.close().catch();
        }));
    const i = this.setupHandler(e, !1);
    return (i.qi = r), this.handlers.push(i), r;
  }
}
class yi {
  name;
  subject;
  average_processing_time;
  num_requests;
  processing_time;
  num_errors;
  last_error;
  data;
  constructor(e, t) {
    (this.name = e),
      (this.subject = t),
      (this.average_processing_time = 0),
      (this.num_errors = 0),
      (this.num_requests = 0),
      (this.processing_time = 0);
  }
  reset(e) {
    (this.num_requests = 0),
      (this.processing_time = 0),
      (this.average_processing_time = 0),
      (this.num_errors = 0),
      (this.last_error = void 0),
      (this.data = void 0);
    const t = e;
    t && ((t.time = 0), (t.processed = 0));
  }
  countLatency(e) {
    this.num_requests++,
      (this.processing_time += ge(Date.now() - e)),
      (this.average_processing_time = Math.round(
        this.processing_time / this.num_requests
      ));
  }
  countError(e) {
    this.num_errors++, (this.last_error = e.message);
  }
  _stats() {
    const {
      name: e,
      subject: t,
      average_processing_time: r,
      num_errors: i,
      num_requests: n,
      processing_time: a,
      last_error: h,
      data: m,
    } = this;
    return {
      name: e,
      subject: t,
      average_processing_time: r,
      num_errors: i,
      num_requests: n,
      processing_time: a,
      last_error: h,
      data: m,
    };
  }
  stats(e) {
    const t = e;
    return (
      t?.noIterator === !1 &&
        ((this.processing_time = t.time),
        (this.num_requests = t.processed),
        (this.average_processing_time =
          this.processing_time > 0 && this.num_requests > 0
            ? this.processing_time / this.num_requests
            : 0)),
      this._stats()
    );
  }
}
const vi = "$JS.API";
function Si(s) {
  return (
    (s = s || {}),
    s.domain && ((s.apiPrefix = `$JS.${s.domain}.API`), delete s.domain),
    or({ apiPrefix: vi, timeout: 5e3 }, s)
  );
}
class Lt {
  nc;
  opts;
  prefix;
  timeout;
  jc;
  constructor(e, t) {
    (this.nc = e),
      (this.opts = Si(t)),
      this._parseOpts(),
      (this.prefix = this.opts.apiPrefix),
      (this.timeout = this.opts.timeout),
      (this.jc = Je());
  }
  _parseOpts() {
    let e = this.opts.apiPrefix;
    if (!e || e.length === 0) throw new Error("invalid empty prefix");
    e[e.length - 1] === "." && (e = e.substr(0, e.length - 1)),
      (this.opts.apiPrefix = e);
  }
  async _request(e, t = null, r) {
    (r = r || {}), (r.timeout = this.timeout);
    let i = Pe;
    t && (i = this.jc.encode(t));
    const n = await this.nc.request(e, i, r);
    return this.parseJsResponse(n);
  }
  async findStream(e) {
    const t = { subject: e },
      i = await this._request(`${this.prefix}.STREAM.NAMES`, t);
    if (!i.streams || i.streams.length !== 1)
      throw new Error("no stream matches subject");
    return i.streams[0];
  }
  parseJsResponse(e) {
    const t = this.jc.decode(e.data),
      r = t;
    if (r.error) {
      const i = Ss(r.error.code, r.error.description);
      if (i !== null) throw ((i.api_error = r.error), i);
    }
    return t;
  }
}
class Ot {
  err;
  offset;
  pageInfo;
  subject;
  jsm;
  filter;
  payload;
  constructor(e, t, r, i) {
    if (!e) throw new Error("subject is required");
    (this.subject = e),
      (this.jsm = r),
      (this.offset = 0),
      (this.pageInfo = {}),
      (this.filter = t),
      (this.payload = i || {});
  }
  async next() {
    if (this.err) return [];
    if (this.pageInfo && this.offset >= this.pageInfo.total) return [];
    const e = { offset: this.offset };
    this.payload && Object.assign(e, this.payload);
    try {
      const t = await this.jsm._request(this.subject, e, {
        timeout: this.jsm.timeout,
      });
      return (
        (this.pageInfo = t),
        (this.offset += this.countResponse(t)),
        this.filter(t)
      );
    } catch (t) {
      throw ((this.err = t), t);
    }
  }
  countResponse(e) {
    switch (e?.type) {
      case "io.nats.jetstream.api.v1.stream_names_response":
      case "io.nats.jetstream.api.v1.stream_list_response":
        return e.streams.length;
      case "io.nats.jetstream.api.v1.consumer_list_response":
        return e.consumers.length;
      default:
        return (
          console.error(
            `jslister.ts: unknown API response for paged output: ${e?.type}`
          ),
          e.streams?.length || 0
        );
    }
    return 0;
  }
  async *[Symbol.asyncIterator]() {
    let e = await this.next();
    for (; e.length > 0; ) {
      for (const t of e) yield t;
      e = await this.next();
    }
  }
}
class Es extends Lt {
  constructor(e, t) {
    super(e, t);
  }
  async add(e, t) {
    if ((Ne(e), t.deliver_group && t.flow_control))
      throw new Error(
        "jetstream flow control is not supported with queue groups"
      );
    if (t.deliver_group && t.idle_heartbeat)
      throw new Error(
        "jetstream idle heartbeat is not supported with queue groups"
      );
    const r = {};
    (r.config = t),
      (r.stream_name = e),
      r.config.durable_name && _t(r.config.durable_name);
    const i = this.nc,
      { min: n, ok: a } = i.features.get($e.JS_NEW_CONSUMER_CREATE_API),
      h = t.name === "" ? void 0 : t.name;
    if (h && !a) throw new Error(`consumer 'name' requires server ${n}`);
    if (h) {
      const I = vs(h);
      if (I.length) throw new Error(`consumer 'name' ${I}`);
    }
    let m,
      _ = "";
    if ((a && (_ = t.name ?? t.durable_name ?? ""), _ !== "")) {
      let I = t.filter_subject ?? void 0;
      I === ">" && (I = void 0),
        (m =
          I !== void 0
            ? `${this.prefix}.CONSUMER.CREATE.${e}.${_}.${I}`
            : `${this.prefix}.CONSUMER.CREATE.${e}.${_}`);
    } else
      m = t.durable_name
        ? `${this.prefix}.CONSUMER.DURABLE.CREATE.${e}.${t.durable_name}`
        : `${this.prefix}.CONSUMER.CREATE.${e}`;
    return await this._request(m, r);
  }
  async update(e, t, r) {
    const i = await this.info(e, t),
      n = r;
    return this.add(e, Object.assign(i.config, n));
  }
  async info(e, t) {
    return (
      Ne(e),
      _t(t),
      await this._request(`${this.prefix}.CONSUMER.INFO.${e}.${t}`)
    );
  }
  async delete(e, t) {
    return (
      Ne(e),
      _t(t),
      (await this._request(`${this.prefix}.CONSUMER.DELETE.${e}.${t}`)).success
    );
  }
  list(e) {
    Ne(e);
    const t = (i) => i.consumers,
      r = `${this.prefix}.CONSUMER.LIST.${e}`;
    return new Ot(r, t, this);
  }
}
class As {
  token;
  received;
  ctx;
  requestSubject;
  mux;
  constructor(e, t) {
    (this.mux = e),
      (this.requestSubject = t),
      (this.received = 0),
      (this.token = cr.next()),
      (this.ctx = new Error());
  }
}
class Ei extends As {
  callback;
  done;
  timer;
  max;
  opts;
  constructor(e, t, r = { maxWait: 1e3 }) {
    if ((super(e, t), (this.opts = r), typeof this.opts.callback != "function"))
      throw new Error("callback is required");
    (this.callback = this.opts.callback),
      (this.max =
        typeof r.maxMessages == "number" && r.maxMessages > 0
          ? r.maxMessages
          : -1),
      (this.done = me()),
      this.done.then(() => {
        this.callback(null, null);
      }),
      (this.timer = setTimeout(() => {
        this.cancel();
      }, r.maxWait));
  }
  cancel(e) {
    e && this.callback(e, null),
      clearTimeout(this.timer),
      this.mux.cancel(this),
      this.done.resolve();
  }
  resolver(e, t) {
    e
      ? ((e.stack += `

${this.ctx.stack}`),
        this.cancel(e))
      : (this.callback(null, t),
        this.opts.strategy === Ye.Count &&
          (this.max--, this.max === 0 && this.cancel()),
        this.opts.strategy === Ye.JitterTimer &&
          (clearTimeout(this.timer),
          (this.timer = setTimeout(() => {
            this.cancel();
          }, this.opts.jitter || 300))),
        this.opts.strategy === Ye.SentinelMsg &&
          t &&
          t.data.length === 0 &&
          this.cancel());
  }
}
class ks extends As {
  deferred;
  timer;
  constructor(e, t, r = { timeout: 1e3 }) {
    super(e, t), (this.deferred = me()), (this.timer = ar(r.timeout));
  }
  resolver(e, t) {
    this.timer && this.timer.cancel(),
      e
        ? ((e.stack += `

${this.ctx.stack}`),
          this.deferred.reject(e))
        : this.deferred.resolve(t),
      this.cancel();
  }
  cancel(e) {
    this.timer && this.timer.cancel(),
      this.mux.cancel(this),
      this.deferred.reject(e || z.errorForCode(U.Cancelled));
  }
}
const Qr = Uint8Array.of(43, 65, 67, 75),
  Ai = Uint8Array.of(45, 78, 65, 75),
  Pt = Uint8Array.of(43, 87, 80, 73),
  ki = Uint8Array.of(43, 78, 88, 84),
  Pi = Uint8Array.of(43, 84, 69, 82, 77),
  Oi = Uint8Array.of(32);
function sr(s) {
  return new Ni(s);
}
function Ii(s) {
  const e = s.split(".");
  if (
    (e.length === 9 && e.splice(2, 0, "_", ""),
    e.length < 11 || e[0] !== "$JS" || e[1] !== "ACK")
  )
    throw new Error("not js message");
  const t = {};
  return (
    (t.domain = e[2] === "_" ? "" : e[2]),
    (t.account_hash = e[3]),
    (t.stream = e[4]),
    (t.consumer = e[5]),
    (t.redeliveryCount = parseInt(e[6], 10)),
    (t.redelivered = t.redeliveryCount > 1),
    (t.streamSequence = parseInt(e[7], 10)),
    (t.deliverySequence = parseInt(e[8], 10)),
    (t.timestampNanos = parseInt(e[9], 10)),
    (t.pending = parseInt(e[10], 10)),
    t
  );
}
class Ni {
  msg;
  di;
  didAck;
  constructor(e) {
    (this.msg = e), (this.didAck = !1);
  }
  get subject() {
    return this.msg.subject;
  }
  get sid() {
    return this.msg.sid;
  }
  get data() {
    return this.msg.data;
  }
  get headers() {
    return this.msg.headers;
  }
  get info() {
    return this.di || (this.di = Ii(this.reply)), this.di;
  }
  get redelivered() {
    return this.info.redeliveryCount > 1;
  }
  get reply() {
    return this.msg.reply || "";
  }
  get seq() {
    return this.info.streamSequence;
  }
  doAck(e) {
    this.didAck || ((this.didAck = !this.isWIP(e)), this.msg.respond(e));
  }
  isWIP(e) {
    return (
      e.length === 4 &&
      e[0] === Pt[0] &&
      e[1] === Pt[1] &&
      e[2] === Pt[2] &&
      e[3] === Pt[3]
    );
  }
  async ackAck() {
    if (!this.didAck && ((this.didAck = !0), this.msg.reply)) {
      const t = this.msg.publisher,
        r = new ks(t.muxSubscriptions, this.msg.reply);
      t.request(r);
      try {
        t.publish(this.msg.reply, Qr, {
          reply: `${t.muxSubscriptions.baseInbox}${r.token}`,
        });
      } catch (i) {
        r.cancel(i);
      }
      try {
        return await Promise.race([r.timer, r.deferred]), !0;
      } catch (i) {
        r.cancel(i);
      }
    }
    return !1;
  }
  ack() {
    this.doAck(Qr);
  }
  nak(e) {
    let t = Ai;
    e && (t = ci().encode(`-NAK ${JSON.stringify({ delay: ge(e) })}`)),
      this.doAck(t);
  }
  working() {
    this.doAck(Pt);
  }
  next(e, t = { batch: 1 }) {
    const r = {};
    (r.batch = t.batch || 1),
      (r.no_wait = t.no_wait || !1),
      t.expires && t.expires > 0 && (r.expires = ge(t.expires));
    const i = Je().encode(r),
      n = Ut.concat(ki, Oi, i),
      a = e ? { reply: e } : void 0;
    this.msg.respond(n, a);
  }
  term() {
    this.doAck(Pi);
  }
}
function mt(s, e, t = !1) {
  if (t === !0 && !s)
    throw z.errorForCode(U.ApiError, new Error(`${e} is not a function`));
  if (s && typeof s != "function")
    throw z.errorForCode(U.ApiError, new Error(`${e} is not a function`));
}
class Ci extends Ce {
  sub;
  adapter;
  subIterDone;
  constructor(e, t, r) {
    super(),
      mt(r.adapter, "adapter", !0),
      (this.adapter = r.adapter),
      r.callback && mt(r.callback, "callback"),
      (this.noIterator = typeof r.callback == "function"),
      r.ingestionFilterFn &&
        (mt(r.ingestionFilterFn, "ingestionFilterFn"),
        (this.ingestionFilterFn = r.ingestionFilterFn)),
      r.protocolFilterFn &&
        (mt(r.protocolFilterFn, "protocolFilterFn"),
        (this.protocolFilterFn = r.protocolFilterFn)),
      r.dispatchedFn &&
        (mt(r.dispatchedFn, "dispatchedFn"),
        (this.dispatchedFn = r.dispatchedFn)),
      r.cleanupFn && mt(r.cleanupFn, "cleanupFn");
    let i = (_, O) => {
      this.callback(_, O);
    };
    if (r.callback) {
      const _ = r.callback;
      i = (O, I) => {
        const [N, T] = this.adapter(O, I);
        if (N) {
          _(N, null);
          return;
        }
        const { ingest: H } = this.ingestionFilterFn
          ? this.ingestionFilterFn(T, this)
          : { ingest: !0 };
        H &&
          (this.protocolFilterFn ? this.protocolFilterFn(T) : !0) &&
          (_(N, T), this.dispatchedFn && T && this.dispatchedFn(T));
      };
    }
    const { max: n, queue: a, timeout: h } = r,
      m = { queue: a, timeout: h, callback: i };
    n && n > 0 && (m.max = n),
      (this.sub = e.subscribe(t, m)),
      r.cleanupFn && (this.sub.cleanupFn = r.cleanupFn),
      this.noIterator ||
        this.iterClosed.then(() => {
          this.unsubscribe();
        }),
      (this.subIterDone = me()),
      Promise.all([this.sub.closed, this.iterClosed])
        .then(() => {
          this.subIterDone.resolve();
        })
        .catch(() => {
          this.subIterDone.resolve();
        }),
      (async (_) => {
        await _.closed, this.stop();
      })(this.sub)
        .then()
        .catch();
  }
  unsubscribe(e) {
    this.sub.unsubscribe(e);
  }
  drain() {
    return this.sub.drain();
  }
  isDraining() {
    return this.sub.isDraining();
  }
  isClosed() {
    return this.sub.isClosed();
  }
  callback(e, t) {
    this.sub.cancelTimeout();
    const [r, i] = this.adapter(e, t);
    r && this.stop(r), i && this.push(i);
  }
  getSubject() {
    return this.sub.getSubject();
  }
  getReceived() {
    return this.sub.getReceived();
  }
  getProcessed() {
    return this.sub.getProcessed();
  }
  getPending() {
    return this.sub.getPending();
  }
  getID() {
    return this.sub.getID();
  }
  getMax() {
    return this.sub.getMax();
  }
  get closed() {
    return this.sub.closed;
  }
}
let Re;
function ji(s) {
  Re = s;
}
function Ps() {
  return Re !== void 0 && Re.defaultPort !== void 0 ? Re.defaultPort : 4222;
}
function wr() {
  return Re !== void 0 && Re.urlParseFn ? Re.urlParseFn : void 0;
}
function Mi() {
  if (!Re || typeof Re.factory != "function")
    throw new Error("transport fn is not set");
  return Re.factory();
}
function Os() {
  return Re !== void 0 && Re.dnsResolveFn ? Re.dnsResolveFn : void 0;
}
const Ti = 4,
  Is = 48,
  $i = 65,
  Ri = 97;
function Bi(s, e, t, r) {
  const i = new Uint8Array(16);
  return (
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255].forEach((a, h) => {
      i[h] = a;
    }),
    (i[12] = s),
    (i[13] = e),
    (i[14] = t),
    (i[15] = r),
    i
  );
}
function Ir(s) {
  return Ui(s) !== void 0;
}
function Ui(s) {
  for (let e = 0; e < s.length; e++)
    switch (s[e]) {
      case ".":
        return Ns(s);
      case ":":
        return Fi(s);
    }
}
function Ns(s) {
  const e = new Uint8Array(4);
  for (let t = 0; t < 4; t++) {
    if (s.length === 0) return;
    if (t > 0) {
      if (s[0] !== ".") return;
      s = s.substring(1);
    }
    const { n: r, c: i, ok: n } = Li(s);
    if (!n || r > 255) return;
    (s = s.substring(i)), (e[t] = r);
  }
  return Bi(e[0], e[1], e[2], e[3]);
}
function Fi(s) {
  const e = new Uint8Array(16);
  let t = -1;
  if (
    s.length >= 2 &&
    s[0] === ":" &&
    s[1] === ":" &&
    ((t = 0), (s = s.substring(2)), s.length === 0)
  )
    return e;
  let r = 0;
  for (; r < 16; ) {
    const { n: i, c: n, ok: a } = qi(s);
    if (!a || i > 65535) return;
    if (n < s.length && s[n] === ".") {
      if ((t < 0 && r != 16 - 4) || r + 4 > 16) return;
      const h = Ns(s);
      if (h === void 0) return;
      (e[r] = h[12]),
        (e[r + 1] = h[13]),
        (e[r + 2] = h[14]),
        (e[r + 3] = h[15]),
        (s = ""),
        (r += Ti);
      break;
    }
    if (
      ((e[r] = i >> 8),
      (e[r + 1] = i),
      (r += 2),
      (s = s.substring(n)),
      s.length === 0)
    )
      break;
    if (s[0] !== ":" || s.length == 1) return;
    if (((s = s.substring(1)), s[0] === ":")) {
      if (t >= 0) return;
      if (((t = r), (s = s.substring(1)), s.length === 0)) break;
    }
  }
  if (s.length === 0) {
    if (r < 16) {
      if (t < 0) return;
      const i = 16 - r;
      for (let n = r - 1; n >= t; n--) e[n + i] = e[n];
      for (let n = t + i - 1; n >= t; n--) e[n] = 0;
    } else if (t >= 0) return;
    return e;
  }
}
function Li(s) {
  let e = 0,
    t = 0;
  for (
    e = 0;
    e < s.length && 48 <= s.charCodeAt(e) && s.charCodeAt(e) <= 57;
    e++
  )
    if (((t = t * 10 + (s.charCodeAt(e) - Is)), t >= 16777215))
      return { n: 16777215, c: e, ok: !1 };
  return e === 0 ? { n: 0, c: 0, ok: !1 } : { n: t, c: e, ok: !0 };
}
function qi(s) {
  let e = 0,
    t = 0;
  for (t = 0; t < s.length; t++) {
    if (48 <= s.charCodeAt(t) && s.charCodeAt(t) <= 57)
      (e *= 16), (e += s.charCodeAt(t) - Is);
    else if (97 <= s.charCodeAt(t) && s.charCodeAt(t) <= 102)
      (e *= 16), (e += s.charCodeAt(t) - Ri + 10);
    else if (65 <= s.charCodeAt(t) && s.charCodeAt(t) <= 70)
      (e *= 16), (e += s.charCodeAt(t) - $i + 10);
    else break;
    if (e >= 16777215) return { n: 0, c: t, ok: !1 };
  }
  return t === 0 ? { n: 0, c: t, ok: !1 } : { n: e, c: t, ok: !0 };
}
function Di(s) {
  return s.indexOf(".") !== -1
    ? !0
    : s.indexOf("[") !== -1 || s.indexOf("::") !== -1
    ? !1
    : s.split(":").length <= 2;
}
function Nr(s) {
  return !Di(s);
}
function Gi(s) {
  (s = s.trim()),
    s.match(/^(.*:\/\/)(.*)/m) && (s = s.replace(/^(.*:\/\/)(.*)/gm, "$2")),
    Nr(s) && s.indexOf("[") === -1 && (s = `[${s}]`);
  const e = Nr(s) ? s.match(/(]:)(\d+)/) : s.match(/(:)(\d+)/),
    t = e && e.length === 3 && e[1] && e[2] ? parseInt(e[2]) : 4222,
    r = t === 80 ? "https" : "http",
    i = new URL(`${r}://${s}`);
  i.port = `${t}`;
  let n = i.hostname;
  return (
    n.charAt(0) === "[" && (n = n.substring(1, n.length - 1)),
    { listen: i.host, hostname: n, port: t }
  );
}
class Nt {
  src;
  listen;
  hostname;
  port;
  didConnect;
  reconnects;
  lastConnect;
  gossiped;
  tlsName;
  resolves;
  constructor(e, t = !1) {
    (this.src = e), (this.tlsName = "");
    const r = Gi(e);
    (this.listen = r.listen),
      (this.hostname = r.hostname),
      (this.port = r.port),
      (this.didConnect = !1),
      (this.reconnects = 0),
      (this.lastConnect = 0),
      (this.gossiped = t);
  }
  toString() {
    return this.listen;
  }
  async resolve(e) {
    if (!e.fn) return [this];
    const t = [];
    if (Ir(this.hostname)) return [this];
    {
      const r = await e.fn(this.hostname);
      e.debug && console.log(`resolve ${this.hostname} = ${r.join(",")}`);
      for (const i of r) {
        const n = this.port === 80 ? "https" : "http",
          a = new URL(`${n}://${Nr(i) ? "[" + i + "]" : i}`);
        a.port = `${this.port}`;
        const h = new Nt(a.host, !1);
        (h.tlsName = this.hostname), t.push(h);
      }
    }
    return e.randomize && _s(t), (this.resolves = t), t;
  }
}
class Hi {
  firstSelect;
  servers;
  currentServer;
  tlsName;
  randomize;
  constructor(e = [], t = {}) {
    (this.firstSelect = !0),
      (this.servers = []),
      (this.tlsName = ""),
      (this.randomize = t.randomize || !1);
    const r = wr();
    e &&
      (e.forEach((i) => {
        (i = r ? r(i) : i), this.servers.push(new Nt(i));
      }),
      this.randomize && (this.servers = _s(this.servers))),
      this.servers.length === 0 && this.addServer(`${Er}:${Ps()}`, !1),
      (this.currentServer = this.servers[0]);
  }
  clear() {
    this.servers.length = 0;
  }
  updateTLSName() {
    const e = this.getCurrentServer();
    Ir(e.hostname) ||
      ((this.tlsName = e.hostname),
      this.servers.forEach((t) => {
        t.gossiped && (t.tlsName = this.tlsName);
      }));
  }
  getCurrentServer() {
    return this.currentServer;
  }
  addServer(e, t = !1) {
    const r = wr();
    e = r ? r(e) : e;
    const i = new Nt(e, t);
    Ir(i.hostname) && (i.tlsName = this.tlsName), this.servers.push(i);
  }
  selectServer() {
    if (this.firstSelect) return (this.firstSelect = !1), this.currentServer;
    const e = this.servers.shift();
    return e && (this.servers.push(e), (this.currentServer = e)), e;
  }
  removeCurrentServer() {
    this.removeServer(this.currentServer);
  }
  removeServer(e) {
    if (e) {
      const t = this.servers.indexOf(e);
      this.servers.splice(t, 1);
    }
  }
  length() {
    return this.servers.length;
  }
  next() {
    return this.servers.length ? this.servers[0] : void 0;
  }
  getServers() {
    return this.servers;
  }
  update(e) {
    const t = [];
    let r = [];
    const i = wr(),
      n = new Map();
    e.connect_urls &&
      e.connect_urls.length > 0 &&
      e.connect_urls.forEach((h) => {
        h = i ? i(h) : h;
        const m = new Nt(h, !0);
        n.set(h, m);
      });
    const a = [];
    return (
      this.servers.forEach((h, m) => {
        const _ = h.listen;
        h.gossiped &&
          this.currentServer.listen !== _ &&
          n.get(_) === void 0 &&
          a.push(m),
          n.delete(_);
      }),
      a.reverse(),
      a.forEach((h) => {
        const m = this.servers.splice(h, 1);
        r = r.concat(m[0].listen);
      }),
      n.forEach((h, m) => {
        this.servers.push(h), t.push(m);
      }),
      { added: t, deleted: r }
    );
  }
}
class Cs extends Ce {
  sid;
  queue;
  draining;
  max;
  subject;
  drained;
  protocol;
  timer;
  info;
  cleanupFn;
  closed;
  requestSubject;
  constructor(e, t, r = {}) {
    super(),
      or(this, r),
      (this.protocol = e),
      (this.subject = t),
      (this.draining = !1),
      (this.noIterator = typeof r.callback == "function"),
      (this.closed = me()),
      r.timeout &&
        ((this.timer = ar(r.timeout)),
        this.timer
          .then(() => {
            this.timer = void 0;
          })
          .catch((i) => {
            this.stop(i), this.noIterator && this.callback(i, {});
          })),
      this.noIterator ||
        this.iterClosed.then(() => {
          this.closed.resolve(), this.unsubscribe();
        });
  }
  setPrePostHandlers(e) {
    if (this.noIterator) {
      const t = this.callback,
        r = e.ingestionFilterFn
          ? e.ingestionFilterFn
          : () => ({ ingest: !0, protocol: !1 }),
        i = e.protocolFilterFn ? e.protocolFilterFn : () => !0,
        n = e.dispatchedFn ? e.dispatchedFn : () => {};
      this.callback = (a, h) => {
        const { ingest: m } = r(h);
        !m || (i(h) && (t(a, h), n(h)));
      };
    } else
      (this.protocolFilterFn = e.protocolFilterFn),
        (this.dispatchedFn = e.dispatchedFn);
  }
  callback(e, t) {
    this.cancelTimeout(), e ? this.stop(e) : this.push(t);
  }
  close() {
    if (!this.isClosed()) {
      this.cancelTimeout();
      const e = () => {
        if ((this.stop(), this.cleanupFn))
          try {
            this.cleanupFn(this, this.info);
          } catch {}
        this.closed.resolve();
      };
      this.noIterator ? e() : this.push(e);
    }
  }
  unsubscribe(e) {
    this.protocol.unsubscribe(this, e);
  }
  cancelTimeout() {
    this.timer && (this.timer.cancel(), (this.timer = void 0));
  }
  drain() {
    return this.protocol.isClosed()
      ? Promise.reject(z.errorForCode(U.ConnectionClosed))
      : this.isClosed()
      ? Promise.reject(z.errorForCode(U.SubClosed))
      : (this.drained ||
          (this.protocol.unsub(this),
          (this.drained = this.protocol
            .flush(me())
            .then(() => {
              this.protocol.subscriptions.cancel(this);
            })
            .catch(() => {
              this.protocol.subscriptions.cancel(this);
            }))),
        this.drained);
  }
  isDraining() {
    return this.draining;
  }
  isClosed() {
    return this.done;
  }
  getSubject() {
    return this.subject;
  }
  getMax() {
    return this.max;
  }
  getID() {
    return this.sid;
  }
}
class zi {
  mux;
  subs;
  sidCounter;
  constructor() {
    (this.sidCounter = 0), (this.mux = null), (this.subs = new Map());
  }
  size() {
    return this.subs.size;
  }
  add(e) {
    return (
      this.sidCounter++, (e.sid = this.sidCounter), this.subs.set(e.sid, e), e
    );
  }
  setMux(e) {
    return (this.mux = e), e;
  }
  getMux() {
    return this.mux;
  }
  get(e) {
    return this.subs.get(e);
  }
  resub(e) {
    return (
      this.sidCounter++,
      this.subs.delete(e.sid),
      (e.sid = this.sidCounter),
      this.subs.set(e.sid, e),
      e
    );
  }
  all() {
    return Array.from(this.subs.values());
  }
  cancel(e) {
    e && (e.close(), this.subs.delete(e.sid));
  }
  handleError(e) {
    if (e && e.permissionContext) {
      const t = e.permissionContext,
        r = this.all();
      let i;
      if (
        (t.operation === "subscription" &&
          (i = r.find((n) => n.subject === t.subject)),
        t.operation === "publish" &&
          (i = r.find((n) => n.requestSubject === t.subject)),
        i)
      )
        return (
          i.callback(e, {}), i.close(), this.subs.delete(i.sid), i !== this.mux
        );
    }
    return !1;
  }
  close() {
    this.subs.forEach((e) => {
      e.close();
    });
  }
}
class Ji {
  ph;
  interval;
  maxOut;
  timer;
  pendings;
  constructor(e, t, r) {
    (this.ph = e), (this.interval = t), (this.maxOut = r), (this.pendings = []);
  }
  start() {
    this.cancel(), this._schedule();
  }
  cancel(e) {
    this.timer && (clearTimeout(this.timer), (this.timer = void 0)),
      this._reset(),
      e && this.ph.disconnect();
  }
  _schedule() {
    this.timer = setTimeout(() => {
      if (
        (this.ph.dispatchStatus({
          type: Mt.PingTimer,
          data: `${this.pendings.length + 1}`,
        }),
        this.pendings.length === this.maxOut)
      ) {
        this.cancel(!0);
        return;
      }
      const e = me();
      this.ph
        .flush(e)
        .then(() => {
          this._reset();
        })
        .catch(() => {
          this.cancel();
        }),
        this.pendings.push(e),
        this._schedule();
    }, this.interval);
  }
  _reset() {
    this.pendings = this.pendings.filter((e) => (e.resolve(), !1));
  }
}
class Yi extends Error {
  constructor(e) {
    super(e), (this.name = "AssertionError");
  }
}
function Vi(s, e = "Assertion failed.") {
  if (!s) throw new Yi(e);
}
const es = 32 * 1024,
  xr = 2 ** 32 - 2;
function Yt(s, e, t = 0) {
  const r = e.byteLength - t;
  return s.byteLength > r && (s = s.subarray(0, r)), e.set(s, t), s.byteLength;
}
class yr {
  _buf;
  _off;
  constructor(e) {
    if (((this._off = 0), e == null)) {
      this._buf = new Uint8Array(0);
      return;
    }
    this._buf = new Uint8Array(e);
  }
  bytes(e = { copy: !0 }) {
    return e.copy === !1
      ? this._buf.subarray(this._off)
      : this._buf.slice(this._off);
  }
  empty() {
    return this._buf.byteLength <= this._off;
  }
  get length() {
    return this._buf.byteLength - this._off;
  }
  get capacity() {
    return this._buf.buffer.byteLength;
  }
  truncate(e) {
    if (e === 0) {
      this.reset();
      return;
    }
    if (e < 0 || e > this.length)
      throw Error("bytes.Buffer: truncation out of range");
    this._reslice(this._off + e);
  }
  reset() {
    this._reslice(0), (this._off = 0);
  }
  _tryGrowByReslice(e) {
    const t = this._buf.byteLength;
    return e <= this.capacity - t ? (this._reslice(t + e), t) : -1;
  }
  _reslice(e) {
    Vi(e <= this._buf.buffer.byteLength),
      (this._buf = new Uint8Array(this._buf.buffer, 0, e));
  }
  readByte() {
    const e = new Uint8Array(1);
    return this.read(e) ? e[0] : null;
  }
  read(e) {
    if (this.empty()) return this.reset(), e.byteLength === 0 ? 0 : null;
    const t = Yt(this._buf.subarray(this._off), e);
    return (this._off += t), t;
  }
  writeByte(e) {
    return this.write(Uint8Array.of(e));
  }
  writeString(e) {
    return this.write(yt.encode(e));
  }
  write(e) {
    const t = this._grow(e.byteLength);
    return Yt(e, this._buf, t);
  }
  _grow(e) {
    const t = this.length;
    t === 0 && this._off !== 0 && this.reset();
    const r = this._tryGrowByReslice(e);
    if (r >= 0) return r;
    const i = this.capacity;
    if (e <= Math.floor(i / 2) - t)
      Yt(this._buf.subarray(this._off), this._buf);
    else {
      if (i + e > xr)
        throw new Error("The buffer cannot be grown beyond the maximum size.");
      {
        const n = new Uint8Array(Math.min(2 * i + e, xr));
        Yt(this._buf.subarray(this._off), n), (this._buf = n);
      }
    }
    return (this._off = 0), this._reslice(Math.min(t + e, xr)), t;
  }
  grow(e) {
    if (e < 0) throw Error("Buffer._grow: negative count");
    const t = this._grow(e);
    this._reslice(t);
  }
  readFrom(e) {
    let t = 0;
    const r = new Uint8Array(es);
    for (;;) {
      const i = this.capacity - this.length < es,
        n = i ? r : new Uint8Array(this._buf.buffer, this.length),
        a = e.read(n);
      if (a === null) return t;
      i ? this.write(n.subarray(0, a)) : this._reslice(this.length + a),
        (t += a);
    }
  }
}
var ke;
(function (s) {
  (s[(s.OK = 0)] = "OK"),
    (s[(s.ERR = 1)] = "ERR"),
    (s[(s.MSG = 2)] = "MSG"),
    (s[(s.INFO = 3)] = "INFO"),
    (s[(s.PING = 4)] = "PING"),
    (s[(s.PONG = 5)] = "PONG");
})(ke || (ke = {}));
function ts() {
  const s = {};
  return (s.sid = -1), (s.hdr = -1), (s.size = -1), s;
}
const Wi = 48;
class rs {
  dispatcher;
  state;
  as;
  drop;
  hdr;
  ma;
  argBuf;
  msgBuf;
  constructor(e) {
    (this.dispatcher = e),
      (this.state = F.OP_START),
      (this.as = 0),
      (this.drop = 0),
      (this.hdr = 0);
  }
  parse(e) {
    let t;
    for (t = 0; t < e.length; t++) {
      const r = e[t];
      switch (this.state) {
        case F.OP_START:
          switch (r) {
            case L.M:
            case L.m:
              (this.state = F.OP_M), (this.hdr = -1), (this.ma = ts());
              break;
            case L.H:
            case L.h:
              (this.state = F.OP_H), (this.hdr = 0), (this.ma = ts());
              break;
            case L.P:
            case L.p:
              this.state = F.OP_P;
              break;
            case L.PLUS:
              this.state = F.OP_PLUS;
              break;
            case L.MINUS:
              this.state = F.OP_MINUS;
              break;
            case L.I:
            case L.i:
              this.state = F.OP_I;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_H:
          switch (r) {
            case L.M:
            case L.m:
              this.state = F.OP_M;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_M:
          switch (r) {
            case L.S:
            case L.s:
              this.state = F.OP_MS;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_MS:
          switch (r) {
            case L.G:
            case L.g:
              this.state = F.OP_MSG;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_MSG:
          switch (r) {
            case L.SPACE:
            case L.TAB:
              this.state = F.OP_MSG_SPC;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_MSG_SPC:
          switch (r) {
            case L.SPACE:
            case L.TAB:
              continue;
            default:
              (this.state = F.MSG_ARG), (this.as = t);
          }
          break;
        case F.MSG_ARG:
          switch (r) {
            case L.CR:
              this.drop = 1;
              break;
            case L.NL: {
              const i = this.argBuf
                ? this.argBuf.bytes()
                : e.subarray(this.as, t - this.drop);
              this.processMsgArgs(i),
                (this.drop = 0),
                (this.as = t + 1),
                (this.state = F.MSG_PAYLOAD),
                (t = this.as + this.ma.size - 1);
              break;
            }
            default:
              this.argBuf && this.argBuf.writeByte(r);
          }
          break;
        case F.MSG_PAYLOAD:
          if (this.msgBuf)
            if (this.msgBuf.length >= this.ma.size) {
              const i = this.msgBuf.bytes({ copy: !1 });
              this.dispatcher.push({ kind: ke.MSG, msg: this.ma, data: i }),
                (this.argBuf = void 0),
                (this.msgBuf = void 0),
                (this.state = F.MSG_END);
            } else {
              let i = this.ma.size - this.msgBuf.length;
              const n = e.length - t;
              n < i && (i = n),
                i > 0
                  ? (this.msgBuf.write(e.subarray(t, t + i)), (t = t + i - 1))
                  : this.msgBuf.writeByte(r);
            }
          else
            t - this.as >= this.ma.size &&
              (this.dispatcher.push({
                kind: ke.MSG,
                msg: this.ma,
                data: e.subarray(this.as, t),
              }),
              (this.argBuf = void 0),
              (this.msgBuf = void 0),
              (this.state = F.MSG_END));
          break;
        case F.MSG_END:
          switch (r) {
            case L.NL:
              (this.drop = 0), (this.as = t + 1), (this.state = F.OP_START);
              break;
            default:
              continue;
          }
          break;
        case F.OP_PLUS:
          switch (r) {
            case L.O:
            case L.o:
              this.state = F.OP_PLUS_O;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_PLUS_O:
          switch (r) {
            case L.K:
            case L.k:
              this.state = F.OP_PLUS_OK;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_PLUS_OK:
          switch (r) {
            case L.NL:
              this.dispatcher.push({ kind: ke.OK }),
                (this.drop = 0),
                (this.state = F.OP_START);
              break;
          }
          break;
        case F.OP_MINUS:
          switch (r) {
            case L.E:
            case L.e:
              this.state = F.OP_MINUS_E;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_MINUS_E:
          switch (r) {
            case L.R:
            case L.r:
              this.state = F.OP_MINUS_ER;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_MINUS_ER:
          switch (r) {
            case L.R:
            case L.r:
              this.state = F.OP_MINUS_ERR;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_MINUS_ERR:
          switch (r) {
            case L.SPACE:
            case L.TAB:
              this.state = F.OP_MINUS_ERR_SPC;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_MINUS_ERR_SPC:
          switch (r) {
            case L.SPACE:
            case L.TAB:
              continue;
            default:
              (this.state = F.MINUS_ERR_ARG), (this.as = t);
          }
          break;
        case F.MINUS_ERR_ARG:
          switch (r) {
            case L.CR:
              this.drop = 1;
              break;
            case L.NL: {
              let i;
              this.argBuf
                ? ((i = this.argBuf.bytes()), (this.argBuf = void 0))
                : (i = e.subarray(this.as, t - this.drop)),
                this.dispatcher.push({ kind: ke.ERR, data: i }),
                (this.drop = 0),
                (this.as = t + 1),
                (this.state = F.OP_START);
              break;
            }
            default:
              this.argBuf && this.argBuf.write(Uint8Array.of(r));
          }
          break;
        case F.OP_P:
          switch (r) {
            case L.I:
            case L.i:
              this.state = F.OP_PI;
              break;
            case L.O:
            case L.o:
              this.state = F.OP_PO;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_PO:
          switch (r) {
            case L.N:
            case L.n:
              this.state = F.OP_PON;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_PON:
          switch (r) {
            case L.G:
            case L.g:
              this.state = F.OP_PONG;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_PONG:
          switch (r) {
            case L.NL:
              this.dispatcher.push({ kind: ke.PONG }),
                (this.drop = 0),
                (this.state = F.OP_START);
              break;
          }
          break;
        case F.OP_PI:
          switch (r) {
            case L.N:
            case L.n:
              this.state = F.OP_PIN;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_PIN:
          switch (r) {
            case L.G:
            case L.g:
              this.state = F.OP_PING;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_PING:
          switch (r) {
            case L.NL:
              this.dispatcher.push({ kind: ke.PING }),
                (this.drop = 0),
                (this.state = F.OP_START);
              break;
          }
          break;
        case F.OP_I:
          switch (r) {
            case L.N:
            case L.n:
              this.state = F.OP_IN;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_IN:
          switch (r) {
            case L.F:
            case L.f:
              this.state = F.OP_INF;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_INF:
          switch (r) {
            case L.O:
            case L.o:
              this.state = F.OP_INFO;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_INFO:
          switch (r) {
            case L.SPACE:
            case L.TAB:
              this.state = F.OP_INFO_SPC;
              break;
            default:
              throw this.fail(e.subarray(t));
          }
          break;
        case F.OP_INFO_SPC:
          switch (r) {
            case L.SPACE:
            case L.TAB:
              continue;
            default:
              (this.state = F.INFO_ARG), (this.as = t);
          }
          break;
        case F.INFO_ARG:
          switch (r) {
            case L.CR:
              this.drop = 1;
              break;
            case L.NL: {
              let i;
              this.argBuf
                ? ((i = this.argBuf.bytes()), (this.argBuf = void 0))
                : (i = e.subarray(this.as, t - this.drop)),
                this.dispatcher.push({ kind: ke.INFO, data: i }),
                (this.drop = 0),
                (this.as = t + 1),
                (this.state = F.OP_START);
              break;
            }
            default:
              this.argBuf && this.argBuf.writeByte(r);
          }
          break;
        default:
          throw this.fail(e.subarray(t));
      }
    }
    (this.state === F.MSG_ARG ||
      this.state === F.MINUS_ERR_ARG ||
      this.state === F.INFO_ARG) &&
      !this.argBuf &&
      (this.argBuf = new yr(e.subarray(this.as, t - this.drop))),
      this.state === F.MSG_PAYLOAD &&
        !this.msgBuf &&
        (this.argBuf || this.cloneMsgArg(),
        (this.msgBuf = new yr(e.subarray(this.as))));
  }
  cloneMsgArg() {
    const e = this.ma.subject.length,
      t = this.ma.reply ? this.ma.reply.length : 0,
      r = new Uint8Array(e + t);
    r.set(this.ma.subject),
      this.ma.reply && r.set(this.ma.reply, e),
      (this.argBuf = new yr(r)),
      (this.ma.subject = r.subarray(0, e)),
      this.ma.reply && (this.ma.reply = r.subarray(e));
  }
  processMsgArgs(e) {
    if (this.hdr >= 0) return this.processHeaderMsgArgs(e);
    const t = [];
    let r = -1;
    for (let i = 0; i < e.length; i++)
      switch (e[i]) {
        case L.SPACE:
        case L.TAB:
        case L.CR:
        case L.NL:
          r >= 0 && (t.push(e.subarray(r, i)), (r = -1));
          break;
        default:
          r < 0 && (r = i);
      }
    switch ((r >= 0 && t.push(e.subarray(r)), t.length)) {
      case 3:
        (this.ma.subject = t[0]),
          (this.ma.sid = this.protoParseInt(t[1])),
          (this.ma.reply = void 0),
          (this.ma.size = this.protoParseInt(t[2]));
        break;
      case 4:
        (this.ma.subject = t[0]),
          (this.ma.sid = this.protoParseInt(t[1])),
          (this.ma.reply = t[2]),
          (this.ma.size = this.protoParseInt(t[3]));
        break;
      default:
        throw this.fail(e, "processMsgArgs Parse Error");
    }
    if (this.ma.sid < 0)
      throw this.fail(e, "processMsgArgs Bad or Missing Sid Error");
    if (this.ma.size < 0)
      throw this.fail(e, "processMsgArgs Bad or Missing Size Error");
  }
  fail(e, t = "") {
    return (
      t ? (t = `${t} [${this.state}]`) : (t = `parse error [${this.state}]`),
      new Error(`${t}: ${We.decode(e)}`)
    );
  }
  processHeaderMsgArgs(e) {
    const t = [];
    let r = -1;
    for (let i = 0; i < e.length; i++)
      switch (e[i]) {
        case L.SPACE:
        case L.TAB:
        case L.CR:
        case L.NL:
          r >= 0 && (t.push(e.subarray(r, i)), (r = -1));
          break;
        default:
          r < 0 && (r = i);
      }
    switch ((r >= 0 && t.push(e.subarray(r)), t.length)) {
      case 4:
        (this.ma.subject = t[0]),
          (this.ma.sid = this.protoParseInt(t[1])),
          (this.ma.reply = void 0),
          (this.ma.hdr = this.protoParseInt(t[2])),
          (this.ma.size = this.protoParseInt(t[3]));
        break;
      case 5:
        (this.ma.subject = t[0]),
          (this.ma.sid = this.protoParseInt(t[1])),
          (this.ma.reply = t[2]),
          (this.ma.hdr = this.protoParseInt(t[3])),
          (this.ma.size = this.protoParseInt(t[4]));
        break;
      default:
        throw this.fail(e, "processHeaderMsgArgs Parse Error");
    }
    if (this.ma.sid < 0)
      throw this.fail(e, "processHeaderMsgArgs Bad or Missing Sid Error");
    if (this.ma.hdr < 0 || this.ma.hdr > this.ma.size)
      throw this.fail(
        e,
        "processHeaderMsgArgs Bad or Missing Header Size Error"
      );
    if (this.ma.size < 0)
      throw this.fail(e, "processHeaderMsgArgs Bad or Missing Size Error");
  }
  protoParseInt(e) {
    if (e.length === 0) return -1;
    let t = 0;
    for (let r = 0; r < e.length; r++) {
      if (e[r] < 48 || e[r] > 57) return -1;
      t = t * 10 + (e[r] - Wi);
    }
    return t;
  }
}
var F;
(function (s) {
  (s[(s.OP_START = 0)] = "OP_START"),
    (s[(s.OP_PLUS = 1)] = "OP_PLUS"),
    (s[(s.OP_PLUS_O = 2)] = "OP_PLUS_O"),
    (s[(s.OP_PLUS_OK = 3)] = "OP_PLUS_OK"),
    (s[(s.OP_MINUS = 4)] = "OP_MINUS"),
    (s[(s.OP_MINUS_E = 5)] = "OP_MINUS_E"),
    (s[(s.OP_MINUS_ER = 6)] = "OP_MINUS_ER"),
    (s[(s.OP_MINUS_ERR = 7)] = "OP_MINUS_ERR"),
    (s[(s.OP_MINUS_ERR_SPC = 8)] = "OP_MINUS_ERR_SPC"),
    (s[(s.MINUS_ERR_ARG = 9)] = "MINUS_ERR_ARG"),
    (s[(s.OP_M = 10)] = "OP_M"),
    (s[(s.OP_MS = 11)] = "OP_MS"),
    (s[(s.OP_MSG = 12)] = "OP_MSG"),
    (s[(s.OP_MSG_SPC = 13)] = "OP_MSG_SPC"),
    (s[(s.MSG_ARG = 14)] = "MSG_ARG"),
    (s[(s.MSG_PAYLOAD = 15)] = "MSG_PAYLOAD"),
    (s[(s.MSG_END = 16)] = "MSG_END"),
    (s[(s.OP_H = 17)] = "OP_H"),
    (s[(s.OP_P = 18)] = "OP_P"),
    (s[(s.OP_PI = 19)] = "OP_PI"),
    (s[(s.OP_PIN = 20)] = "OP_PIN"),
    (s[(s.OP_PING = 21)] = "OP_PING"),
    (s[(s.OP_PO = 22)] = "OP_PO"),
    (s[(s.OP_PON = 23)] = "OP_PON"),
    (s[(s.OP_PONG = 24)] = "OP_PONG"),
    (s[(s.OP_I = 25)] = "OP_I"),
    (s[(s.OP_IN = 26)] = "OP_IN"),
    (s[(s.OP_INF = 27)] = "OP_INF"),
    (s[(s.OP_INFO = 28)] = "OP_INFO"),
    (s[(s.OP_INFO_SPC = 29)] = "OP_INFO_SPC"),
    (s[(s.INFO_ARG = 30)] = "INFO_ARG");
})(F || (F = {}));
var L;
(function (s) {
  (s[(s.CR = "\r".charCodeAt(0))] = "CR"),
    (s[(s.E = "E".charCodeAt(0))] = "E"),
    (s[(s.e = "e".charCodeAt(0))] = "e"),
    (s[(s.F = "F".charCodeAt(0))] = "F"),
    (s[(s.f = "f".charCodeAt(0))] = "f"),
    (s[(s.G = "G".charCodeAt(0))] = "G"),
    (s[(s.g = "g".charCodeAt(0))] = "g"),
    (s[(s.H = "H".charCodeAt(0))] = "H"),
    (s[(s.h = "h".charCodeAt(0))] = "h"),
    (s[(s.I = "I".charCodeAt(0))] = "I"),
    (s[(s.i = "i".charCodeAt(0))] = "i"),
    (s[(s.K = "K".charCodeAt(0))] = "K"),
    (s[(s.k = "k".charCodeAt(0))] = "k"),
    (s[(s.M = "M".charCodeAt(0))] = "M"),
    (s[(s.m = "m".charCodeAt(0))] = "m"),
    (s[(s.MINUS = "-".charCodeAt(0))] = "MINUS"),
    (s[(s.N = "N".charCodeAt(0))] = "N"),
    (s[(s.n = "n".charCodeAt(0))] = "n"),
    (s[
      (s.NL = `
`.charCodeAt(0))
    ] = "NL"),
    (s[(s.O = "O".charCodeAt(0))] = "O"),
    (s[(s.o = "o".charCodeAt(0))] = "o"),
    (s[(s.P = "P".charCodeAt(0))] = "P"),
    (s[(s.p = "p".charCodeAt(0))] = "p"),
    (s[(s.PLUS = "+".charCodeAt(0))] = "PLUS"),
    (s[(s.R = "R".charCodeAt(0))] = "R"),
    (s[(s.r = "r".charCodeAt(0))] = "r"),
    (s[(s.S = "S".charCodeAt(0))] = "S"),
    (s[(s.s = "s".charCodeAt(0))] = "s"),
    (s[(s.SPACE = " ".charCodeAt(0))] = "SPACE"),
    (s[(s.TAB = "	".charCodeAt(0))] = "TAB");
})(L || (L = {}));
const Ki = 1024 * 32,
  Xi = /^INFO\s+([^\r\n]+)\r\n/i;
function tt(s = "") {
  if (((s = s || "_INBOX"), typeof s != "string"))
    throw new Error("prefix must be a string");
  return `${s}.${cr.next()}`;
}
class Zi {
  baseInbox;
  reqs;
  constructor() {
    this.reqs = new Map();
  }
  size() {
    return this.reqs.size;
  }
  init(e) {
    return (this.baseInbox = `${tt(e)}.`), this.baseInbox;
  }
  add(e) {
    isNaN(e.received) || (e.received = 0), this.reqs.set(e.token, e);
  }
  get(e) {
    return this.reqs.get(e);
  }
  cancel(e) {
    this.reqs.delete(e.token);
  }
  getToken(e) {
    const t = e.subject || "";
    return t.indexOf(this.baseInbox) === 0
      ? t.substring(this.baseInbox.length)
      : null;
  }
  all() {
    return Array.from(this.reqs.values());
  }
  handleError(e, t) {
    if (t && t.permissionContext) {
      if (e)
        return (
          this.all().forEach((i) => {
            i.resolver(t, {});
          }),
          !0
        );
      const r = t.permissionContext;
      if (r.operation === "publish") {
        const i = this.all().find((n) => n.requestSubject === r.subject);
        if (i) return i.resolver(t, {}), !0;
      }
    }
    return !1;
  }
  dispatcher() {
    return (e, t) => {
      const r = this.getToken(t);
      if (r) {
        const i = this.get(r);
        i && (e === null && t.headers && (e = ws(t)), i.resolver(e, t));
      }
    };
  }
  close() {
    const e = z.errorForCode(U.Timeout);
    this.reqs.forEach((t) => {
      t.resolver(e, {});
    });
  }
}
const Qi = It(`PONG\r
`),
  ss = It(`PING\r
`);
class en {
  echo;
  no_responders;
  protocol;
  verbose;
  pedantic;
  jwt;
  nkey;
  sig;
  user;
  pass;
  auth_token;
  tls_required;
  name;
  lang;
  version;
  headers;
  constructor(e, t, r) {
    (this.protocol = 1),
      (this.version = e.version),
      (this.lang = e.lang),
      (this.echo = t.noEcho ? !1 : void 0),
      (this.verbose = t.verbose),
      (this.pedantic = t.pedantic),
      (this.tls_required = t.tls ? !0 : void 0),
      (this.name = t.name);
    const i = (t && t.authenticator ? t.authenticator(r) : {}) || {};
    or(this, i);
  }
}
class ir {
  connected;
  connectedOnce;
  infoReceived;
  info;
  muxSubscriptions;
  options;
  outbound;
  pongs;
  subscriptions;
  transport;
  noMorePublishing;
  connectError;
  publisher;
  _closed;
  closed;
  listeners;
  heartbeats;
  parser;
  outMsgs;
  inMsgs;
  outBytes;
  inBytes;
  pendingLimit;
  lastError;
  abortReconnect;
  servers;
  server;
  features;
  constructor(e, t) {
    (this._closed = !1),
      (this.connected = !1),
      (this.connectedOnce = !1),
      (this.infoReceived = !1),
      (this.noMorePublishing = !1),
      (this.abortReconnect = !1),
      (this.listeners = []),
      (this.pendingLimit = Ki),
      (this.outMsgs = 0),
      (this.inMsgs = 0),
      (this.outBytes = 0),
      (this.inBytes = 0),
      (this.options = e),
      (this.publisher = t),
      (this.subscriptions = new zi()),
      (this.muxSubscriptions = new Zi()),
      (this.outbound = new Ut()),
      (this.pongs = []),
      (this.pendingLimit = e.pendingLimit || this.pendingLimit),
      (this.features = new bi({ major: 0, minor: 0, micro: 0 }));
    const r = typeof e.servers == "string" ? [e.servers] : e.servers;
    (this.servers = new Hi(r, { randomize: !e.noRandomize })),
      (this.closed = me()),
      (this.parser = new rs(this)),
      (this.heartbeats = new Ji(
        this,
        this.options.pingInterval || bs,
        this.options.maxPingOut || ti
      ));
  }
  resetOutbound() {
    this.outbound.reset();
    const e = this.pongs;
    this.pongs = [];
    const t = z.errorForCode(U.Disconnect);
    (t.stack = ""),
      e.forEach((r) => {
        r.reject(t);
      }),
      (this.parser = new rs(this)),
      (this.infoReceived = !1);
  }
  dispatchStatus(e) {
    this.listeners.forEach((t) => {
      t.push(e);
    });
  }
  status() {
    const e = new Ce();
    return this.listeners.push(e), e;
  }
  prepare() {
    (this.info = void 0), this.resetOutbound();
    const e = me();
    return (
      e.catch(() => {}),
      this.pongs.unshift(e),
      (this.connectError = (t) => {
        e.reject(t);
      }),
      (this.transport = Mi()),
      this.transport.closed().then(async (t) => {
        if (((this.connected = !1), !this.isClosed())) {
          await this.disconnected(this.transport.closeError || this.lastError);
          return;
        }
      }),
      e
    );
  }
  disconnect() {
    this.dispatchStatus({ type: Mt.StaleConnection, data: "" }),
      this.transport.disconnect();
  }
  async disconnected(e) {
    this.dispatchStatus({
      type: nt.Disconnect,
      data: this.servers.getCurrentServer().toString(),
    }),
      this.options.reconnect
        ? await this.dialLoop()
            .then(() => {
              this.dispatchStatus({
                type: nt.Reconnect,
                data: this.servers.getCurrentServer().toString(),
              }),
                this.lastError?.code === U.AuthenticationExpired &&
                  (this.lastError = void 0);
            })
            .catch((t) => {
              this._close(t);
            })
        : await this._close(e);
  }
  async dial(e) {
    const t = this.prepare();
    let r;
    try {
      r = ar(this.options.timeout || 2e4);
      const i = this.transport.connect(e, this.options);
      await Promise.race([i, r]),
        (async () => {
          try {
            for await (const n of this.transport) this.parser.parse(n);
          } catch (n) {
            console.log("reader closed", n);
          }
        })().then();
    } catch (i) {
      t.reject(i);
    }
    try {
      await Promise.race([r, t]),
        r && r.cancel(),
        (this.connected = !0),
        (this.connectError = void 0),
        this.sendSubscriptions(),
        (this.connectedOnce = !0),
        (this.server.didConnect = !0),
        (this.server.reconnects = 0),
        this.flushPending(),
        this.heartbeats.start();
    } catch (i) {
      throw (r && r.cancel(), await this.transport.close(i), i);
    }
  }
  async _doDial(e) {
    const t = await e.resolve({
      fn: Os(),
      debug: this.options.debug,
      randomize: !this.options.noRandomize,
    });
    let r = null;
    for (const i of t)
      try {
        (r = null),
          this.dispatchStatus({ type: Mt.Reconnecting, data: i.toString() }),
          await this.dial(i);
        return;
      } catch (n) {
        r = n;
      }
    throw r;
  }
  async dialLoop() {
    let e;
    for (;;) {
      this._closed && this.servers.clear();
      const t = this.options.reconnectDelayHandler
        ? this.options.reconnectDelayHandler()
        : gs;
      let r = t;
      const i = this.selectServer();
      if (!i || this.abortReconnect)
        throw (
          e ||
          (this.lastError
            ? this.lastError
            : z.errorForCode(U.ConnectionRefused))
        );
      const n = Date.now();
      if (i.lastConnect === 0 || i.lastConnect + t <= n) {
        i.lastConnect = Date.now();
        try {
          await this._doDial(i);
          break;
        } catch (a) {
          if (((e = a), !this.connectedOnce)) {
            if (this.options.waitOnFirstConnect) continue;
            this.servers.removeCurrentServer();
          }
          i.reconnects++;
          const h = this.options.maxReconnectAttempts || 0;
          h !== -1 && i.reconnects >= h && this.servers.removeCurrentServer();
        }
      } else (r = Math.min(r, i.lastConnect + t - n)), await Tr(r);
    }
  }
  static async connect(e, t) {
    const r = new ir(e, t);
    return await r.dialLoop(), r;
  }
  static toError(e) {
    const t = e ? e.toLowerCase() : "";
    if (t.indexOf("permissions violation") !== -1) {
      const r = new z(e, U.PermissionsViolation),
        i = e.match(/(Publish|Subscription) to "(\S+)"/);
      return (
        i &&
          (r.permissionContext = {
            operation: i[1].toLowerCase(),
            subject: i[2],
          }),
        r
      );
    } else
      return t.indexOf("authorization violation") !== -1
        ? new z(e, U.AuthorizationViolation)
        : t.indexOf("user authentication expired") !== -1
        ? new z(e, U.AuthenticationExpired)
        : new z(e, U.ProtocolError);
  }
  processMsg(e, t) {
    if (
      (this.inMsgs++,
      (this.inBytes += t.length),
      !this.subscriptions.sidCounter)
    )
      return;
    const r = this.subscriptions.get(e.sid);
    !r ||
      ((r.received += 1),
      r.callback && r.callback(null, new xs(e, t, this)),
      r.max !== void 0 && r.received >= r.max && r.unsubscribe());
  }
  processError(e) {
    const t = zr(e),
      r = ir.toError(t),
      i = { type: nt.Error, data: r.code };
    if (r.isPermissionError()) {
      let n = !1;
      r.permissionContext &&
        ((i.permissionContext = r.permissionContext),
        (n =
          this.subscriptions.getMux()?.subject ===
          r.permissionContext.subject)),
        this.subscriptions.handleError(r),
        this.muxSubscriptions.handleError(n, r),
        n && this.subscriptions.setMux(null);
    }
    this.dispatchStatus(i), this.handleError(r);
  }
  handleError(e) {
    e.isAuthError() && this.handleAuthError(e),
      e.isProtocolError() && (this.lastError = e),
      e.isPermissionError() || (this.lastError = e);
  }
  handleAuthError(e) {
    this.lastError &&
      e.code === this.lastError.code &&
      this.options.ignoreAuthErrorAbort === !1 &&
      (this.abortReconnect = !0),
      this.connectError ? this.connectError(e) : this.disconnect();
  }
  processPing() {
    this.transport.send(Qi);
  }
  processPong() {
    const e = this.pongs.shift();
    e && e.resolve();
  }
  processInfo(e) {
    const t = JSON.parse(zr(e));
    this.info = t;
    const r =
      this.options && this.options.ignoreClusterUpdates
        ? void 0
        : this.servers.update(t);
    if (!this.infoReceived) {
      this.features.update(at(t.version)),
        (this.infoReceived = !0),
        this.transport.isEncrypted() && this.servers.updateTLSName();
      const { version: n, lang: a } = this.transport;
      try {
        const h = new en({ version: n, lang: a }, this.options, t.nonce);
        t.headers && ((h.headers = !0), (h.no_responders = !0));
        const m = JSON.stringify(h);
        this.transport.send(It(`CONNECT ${m}${it}`)), this.transport.send(ss);
      } catch (h) {
        this._close(h);
      }
    }
    r && this.dispatchStatus({ type: nt.Update, data: r }),
      (t.ldm !== void 0 ? t.ldm : !1) &&
        this.dispatchStatus({
          type: nt.LDM,
          data: this.servers.getCurrentServer().toString(),
        });
  }
  push(e) {
    switch (e.kind) {
      case ke.MSG: {
        const { msg: t, data: r } = e;
        this.processMsg(t, r);
        break;
      }
      case ke.OK:
        break;
      case ke.ERR:
        this.processError(e.data);
        break;
      case ke.PING:
        this.processPing();
        break;
      case ke.PONG:
        this.processPong();
        break;
      case ke.INFO:
        this.processInfo(e.data);
        break;
    }
  }
  sendCommand(e, ...t) {
    const r = this.outbound.length();
    let i;
    typeof e == "string" ? (i = It(e)) : (i = e),
      this.outbound.fill(i, ...t),
      r === 0
        ? setTimeout(() => {
            this.flushPending();
          })
        : this.outbound.size() >= this.pendingLimit && this.flushPending();
  }
  publish(e, t, r) {
    let i = t.length;
    (r = r || {}), (r.reply = r.reply || "");
    let n = Pe,
      a = 0;
    if (r.headers) {
      if (this.info && !this.info.headers)
        throw new z("headers", U.ServerOptionNotAvailable);
      (n = r.headers.encode()), (a = n.length), (i = t.length + a);
    }
    if (this.info && i > this.info.max_payload)
      throw z.errorForCode(U.MaxPayloadExceeded);
    (this.outBytes += i), this.outMsgs++;
    let h;
    r.headers
      ? (r.reply
          ? (h = `HPUB ${e} ${r.reply} ${a} ${i}${it}`)
          : (h = `HPUB ${e} ${a} ${i}\r
`),
        this.sendCommand(h, n, t, Qt))
      : (r.reply
          ? (h = `PUB ${e} ${r.reply} ${i}\r
`)
          : (h = `PUB ${e} ${i}\r
`),
        this.sendCommand(h, t, Qt));
  }
  request(e) {
    return this.initMux(), this.muxSubscriptions.add(e), e;
  }
  subscribe(e) {
    return this.subscriptions.add(e), this._subunsub(e), e;
  }
  _sub(e) {
    e.queue
      ? this.sendCommand(`SUB ${e.subject} ${e.queue} ${e.sid}\r
`)
      : this.sendCommand(`SUB ${e.subject} ${e.sid}\r
`);
  }
  _subunsub(e) {
    return this._sub(e), e.max && this.unsubscribe(e, e.max), e;
  }
  unsubscribe(e, t) {
    this.unsub(e, t),
      (e.max === void 0 || e.received >= e.max) && this.subscriptions.cancel(e);
  }
  unsub(e, t) {
    !e ||
      this.isClosed() ||
      (t
        ? this.sendCommand(`UNSUB ${e.sid} ${t}${it}`)
        : this.sendCommand(`UNSUB ${e.sid}${it}`),
      (e.max = t));
  }
  resub(e, t) {
    !e ||
      this.isClosed() ||
      ((e.subject = t), this.subscriptions.resub(e), this._sub(e));
  }
  flush(e) {
    return e || (e = me()), this.pongs.push(e), this.sendCommand(ss), e;
  }
  sendSubscriptions() {
    const e = [];
    this.subscriptions.all().forEach((t) => {
      const r = t;
      r.queue
        ? e.push(`SUB ${r.subject} ${r.queue} ${r.sid}${it}`)
        : e.push(`SUB ${r.subject} ${r.sid}${it}`);
    }),
      e.length && this.transport.send(It(e.join("")));
  }
  async _close(e) {
    this._closed ||
      (this.heartbeats.cancel(),
      this.connectError && (this.connectError(e), (this.connectError = void 0)),
      this.muxSubscriptions.close(),
      this.subscriptions.close(),
      this.listeners.forEach((t) => {
        t.stop();
      }),
      (this._closed = !0),
      await this.transport.close(e),
      await this.closed.resolve(e));
  }
  close() {
    return this._close();
  }
  isClosed() {
    return this._closed;
  }
  drain() {
    const e = this.subscriptions.all(),
      t = [];
    return (
      e.forEach((r) => {
        t.push(r.drain());
      }),
      Promise.all(t)
        .then(
          async () => (
            (this.noMorePublishing = !0), await this.flush(), this.close()
          )
        )
        .catch(() => {})
    );
  }
  flushPending() {
    if (!(!this.infoReceived || !this.connected) && this.outbound.size()) {
      const e = this.outbound.drain();
      this.transport.send(e);
    }
  }
  initMux() {
    if (!this.subscriptions.getMux()) {
      const t = this.muxSubscriptions.init(this.options.inboxPrefix),
        r = new Cs(this, `${t}*`);
      (r.callback = this.muxSubscriptions.dispatcher()),
        this.subscriptions.setMux(r),
        this.subscribe(r);
    }
  }
  selectServer() {
    const e = this.servers.selectServer();
    if (e !== void 0) return (this.server = e), this.server;
  }
  getServer() {
    return this.server;
  }
}
function rt(s) {
  return new tn(s);
}
class tn {
  config;
  ordered;
  mack;
  stream;
  callbackFn;
  max;
  qname;
  isBind;
  constructor(e) {
    (this.stream = ""),
      (this.mack = !1),
      (this.ordered = !1),
      (this.config = pi("", e || {}));
  }
  getOpts() {
    const e = {};
    return (
      (e.config = this.config),
      (e.mack = this.mack),
      (e.stream = this.stream),
      (e.callbackFn = this.callbackFn),
      (e.max = this.max),
      (e.queue = this.qname),
      (e.ordered = this.ordered),
      (e.config.ack_policy = e.ordered ? ve.None : e.config.ack_policy),
      (e.isBind = e.isBind || !1),
      e
    );
  }
  description(e) {
    return (this.config.description = e), this;
  }
  deliverTo(e) {
    return (this.config.deliver_subject = e), this;
  }
  durable(e) {
    return _t(e), (this.config.durable_name = e), this;
  }
  startSequence(e) {
    if (e <= 0) throw new Error("sequence must be greater than 0");
    return (
      (this.config.deliver_policy = Te.StartSequence),
      (this.config.opt_start_seq = e),
      this
    );
  }
  startTime(e) {
    return (
      (this.config.deliver_policy = Te.StartTime),
      (this.config.opt_start_time = e.toISOString()),
      this
    );
  }
  deliverAll() {
    return (this.config.deliver_policy = Te.All), this;
  }
  deliverLastPerSubject() {
    return (this.config.deliver_policy = Te.LastPerSubject), this;
  }
  deliverLast() {
    return (this.config.deliver_policy = Te.Last), this;
  }
  deliverNew() {
    return (this.config.deliver_policy = Te.New), this;
  }
  startAtTimeDelta(e) {
    return this.startTime(new Date(Date.now() - e)), this;
  }
  headersOnly() {
    return (this.config.headers_only = !0), this;
  }
  ackNone() {
    return (this.config.ack_policy = ve.None), this;
  }
  ackAll() {
    return (this.config.ack_policy = ve.All), this;
  }
  ackExplicit() {
    return (this.config.ack_policy = ve.Explicit), this;
  }
  ackWait(e) {
    return (this.config.ack_wait = ge(e)), this;
  }
  maxDeliver(e) {
    return (this.config.max_deliver = e), this;
  }
  filterSubject(e) {
    return (this.config.filter_subject = e), this;
  }
  replayInstantly() {
    return (this.config.replay_policy = xt.Instant), this;
  }
  replayOriginal() {
    return (this.config.replay_policy = xt.Original), this;
  }
  sample(e) {
    if (((e = Math.trunc(e)), e < 0 || e > 100))
      throw new Error("value must be between 0-100");
    return (this.config.sample_freq = `${e}%`), this;
  }
  limit(e) {
    return (this.config.rate_limit_bps = e), this;
  }
  maxWaiting(e) {
    return (this.config.max_waiting = e), this;
  }
  maxAckPending(e) {
    return (this.config.max_ack_pending = e), this;
  }
  idleHeartbeat(e) {
    return (this.config.idle_heartbeat = ge(e)), this;
  }
  flowControl() {
    return (this.config.flow_control = !0), this;
  }
  deliverGroup(e) {
    return this.queue(e), this;
  }
  manualAck() {
    return (this.mack = !0), this;
  }
  maxMessages(e) {
    return (this.max = e), this;
  }
  callback(e) {
    return (this.callbackFn = e), this;
  }
  queue(e) {
    return (this.qname = e), (this.config.deliver_group = e), this;
  }
  orderedConsumer() {
    return (this.ordered = !0), this;
  }
  bind(e, t) {
    return (
      (this.stream = e),
      (this.config.durable_name = t),
      (this.isBind = !0),
      this
    );
  }
  bindStream(e) {
    return (this.stream = e), this;
  }
  inactiveEphemeralThreshold(e) {
    return (this.config.inactive_threshold = ge(e)), this;
  }
  maxPullBatch(e) {
    return (this.config.max_batch = e), this;
  }
  maxPullRequestExpires(e) {
    return (this.config.max_expires = ge(e)), this;
  }
  memory() {
    return (this.config.mem_storage = !0), this;
  }
  numReplicas(e) {
    return (this.config.num_replicas = e), this;
  }
}
function is(s) {
  return typeof s.getOpts == "function";
}
class js {
  interval;
  maxOut;
  cancelAfter;
  timer;
  autoCancelTimer;
  last;
  missed;
  count;
  callback;
  constructor(e, t, r = { maxOut: 2 }) {
    (this.interval = e),
      (this.maxOut = r?.maxOut || 2),
      (this.cancelAfter = r?.cancelAfter || 0),
      (this.last = Date.now()),
      (this.missed = 0),
      (this.count = 0),
      (this.callback = t),
      this._schedule();
  }
  cancel() {
    this.autoCancelTimer && clearTimeout(this.autoCancelTimer),
      this.timer && clearInterval(this.timer),
      (this.timer = 0),
      (this.autoCancelTimer = 0);
  }
  work() {
    (this.last = Date.now()), (this.missed = 0);
  }
  _change(e, t = 0, r = 2) {
    (this.interval = e),
      (this.maxOut = r),
      (this.cancelAfter = t),
      this.restart();
  }
  restart() {
    this.cancel(), this._schedule();
  }
  _schedule() {
    this.cancelAfter > 0 &&
      (this.autoCancelTimer = setTimeout(() => {
        this.cancel();
      }, this.cancelAfter)),
      (this.timer = setInterval(() => {
        if (
          (this.count++,
          Date.now() - this.interval > this.last && this.missed++,
          this.missed >= this.maxOut)
        )
          try {
            this.callback(this.missed) === !0 && this.cancel();
          } catch (e) {
            console.log(e);
          }
      }, this.interval));
  }
}
class rn {
  static encode(e) {
    if (typeof e == "string") return btoa(e);
    const t = Array.from(e);
    return btoa(String.fromCharCode(...t));
  }
  static decode(e, t = !1) {
    const r = atob(e);
    return t ? Uint8Array.from(r, (i) => i.charCodeAt(0)) : r;
  }
}
class Ct {
  static encode(e) {
    return Ct.toB64URLEncoding(rn.encode(e));
  }
  static decode(e, t = !1) {
    return Ct.decode(Ct.fromB64URLEncoding(e), t);
  }
  static toB64URLEncoding(e) {
    return e.replace(/\+/g, "-").replace(/\//g, "_");
  }
  static fromB64URLEncoding(e) {
    return e.replace(/_/g, "/").replace(/-/g, "+");
  }
}
function ns(s) {
  const e = s.length;
  let t = s.indexOf("=");
  t === -1 && (t = e);
  const r = t === e ? 0 : 4 - (t % 4);
  return [t, r];
}
function sn(s, e, t = !1) {
  function r(a, h) {
    return Math.floor(((a + h) * 3) / 4 - h);
  }
  function i(a) {
    return s[(a >> 18) & 63] + s[(a >> 12) & 63] + s[(a >> 6) & 63] + s[a & 63];
  }
  function n(a, h, m) {
    const _ = new Array((m - h) / 3);
    for (let O = h, I = 0; O < m; O += 3)
      _[I++] = i((a[O] << 16) + (a[O + 1] << 8) + a[O + 2]);
    return _.join("");
  }
  return {
    byteLength(a) {
      return r.apply(null, ns(a));
    },
    toUint8Array(a) {
      const [h, m] = ns(a),
        _ = new Uint8Array(r(h, m)),
        O = m ? h - 4 : h;
      let I,
        N = 0,
        T;
      for (T = 0; T < O; T += 4)
        (I =
          (e[a.charCodeAt(T)] << 18) |
          (e[a.charCodeAt(T + 1)] << 12) |
          (e[a.charCodeAt(T + 2)] << 6) |
          e[a.charCodeAt(T + 3)]),
          (_[N++] = (I >> 16) & 255),
          (_[N++] = (I >> 8) & 255),
          (_[N++] = I & 255);
      return (
        m === 2
          ? ((I = (e[a.charCodeAt(T)] << 2) | (e[a.charCodeAt(T + 1)] >> 4)),
            (_[N++] = I & 255))
          : m === 1 &&
            ((I =
              (e[a.charCodeAt(T)] << 10) |
              (e[a.charCodeAt(T + 1)] << 4) |
              (e[a.charCodeAt(T + 2)] >> 2)),
            (_[N++] = (I >> 8) & 255),
            (_[N++] = I & 255)),
        _
      );
    },
    fromUint8Array(a) {
      const m = a.length,
        _ = m % 3,
        O = m - _,
        I = new Array(Math.ceil(O / 16383) + (_ ? 1 : 0));
      let N = 0,
        T;
      for (let q = 0; q < O; q += 16383)
        (T = q + 16383), (I[N++] = n(a, q, T > O ? O : T));
      let H;
      return (
        _ === 1
          ? ((H = a[O]),
            (I[N] = s[H >> 2] + s[(H << 4) & 63]),
            t || (I[N] += "=="))
          : _ === 2 &&
            ((H = (a[O] << 8) | (a[O + 1] & 255)),
            (I[N] = s[H >> 10] + s[(H >> 4) & 63] + s[(H << 2) & 63]),
            t || (I[N] += "=")),
        I.join("")
      );
    },
  };
}
const Ms = [],
  Ts = [],
  vr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
for (let s = 0, e = vr.length; s < e; ++s)
  (Ms[s] = vr[s]), (Ts[vr.charCodeAt(s)] = s);
const { byteLength: Zn, toUint8Array: nn, fromUint8Array: on } = sn(Ms, Ts, !0),
  an = new TextDecoder(),
  cn = new TextEncoder();
function un(s) {
  return s.reduce((e, t) => `${e}${t < 16 ? "0" : ""}${t.toString(16)}`, "");
}
function hn(s) {
  const e = s.length;
  if (e % 2 || !/^[0-9a-fA-F]+$/.test(s))
    throw new TypeError("Invalid hex string.");
  s = s.toLowerCase();
  const t = new Uint8Array(Math.floor(e / 2)),
    r = e / 2;
  for (let i = 0; i < r; ++i) t[i] = parseInt(s.substr(i * 2, 2), 16);
  return t;
}
function ln(s, e = "utf8") {
  if (/^utf-?8$/i.test(e)) return an.decode(s);
  if (/^base64$/i.test(e)) return on(s);
  if (/^hex(?:adecimal)?$/i.test(e)) return un(s);
  throw new TypeError("Unsupported string encoding.");
}
function fn(s, e = "utf8") {
  if (/^utf-?8$/i.test(e)) return cn.encode(s);
  if (/^base64$/i.test(e)) return nn(s);
  if (/^hex(?:adecimal)?$/i.test(e)) return hn(s);
  throw new TypeError("Unsupported string encoding.");
}
class os {
  hashSize = 32;
  _buf;
  _bufIdx;
  _count;
  _K;
  _H;
  _finalized;
  constructor() {
    (this._buf = new Uint8Array(64)),
      (this._K = new Uint32Array([
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ])),
      this.init();
  }
  init() {
    return (
      (this._H = new Uint32Array([
        1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
        528734635, 1541459225,
      ])),
      (this._bufIdx = 0),
      (this._count = new Uint32Array(2)),
      this._buf.fill(0),
      (this._finalized = !1),
      this
    );
  }
  update(e, t) {
    if (e === null) throw new TypeError("msg must be a string or Uint8Array.");
    typeof e == "string" && (e = fn(e, t));
    for (let i = 0, n = e.length; i < n; i++)
      (this._buf[this._bufIdx++] = e[i]),
        this._bufIdx === 64 && (this._transform(), (this._bufIdx = 0));
    const r = this._count;
    return (
      (r[0] += e.length << 3) < e.length << 3 && r[1]++,
      (r[1] += e.length >>> 29),
      this
    );
  }
  digest(e) {
    if (this._finalized) throw new Error("digest has already been called.");
    this._finalized = !0;
    const t = this._buf;
    let r = this._bufIdx;
    for (t[r++] = 128; r !== 56; )
      r === 64 && (this._transform(), (r = 0)), (t[r++] = 0);
    const i = this._count;
    (t[56] = (i[1] >>> 24) & 255),
      (t[57] = (i[1] >>> 16) & 255),
      (t[58] = (i[1] >>> 8) & 255),
      (t[59] = (i[1] >>> 0) & 255),
      (t[60] = (i[0] >>> 24) & 255),
      (t[61] = (i[0] >>> 16) & 255),
      (t[62] = (i[0] >>> 8) & 255),
      (t[63] = (i[0] >>> 0) & 255),
      this._transform();
    const n = new Uint8Array(32);
    for (let a = 0; a < 8; a++)
      (n[(a << 2) + 0] = (this._H[a] >>> 24) & 255),
        (n[(a << 2) + 1] = (this._H[a] >>> 16) & 255),
        (n[(a << 2) + 2] = (this._H[a] >>> 8) & 255),
        (n[(a << 2) + 3] = (this._H[a] >>> 0) & 255);
    return this.init(), e ? ln(n, e) : n;
  }
  _transform() {
    const e = this._H;
    let t = e[0],
      r = e[1],
      i = e[2],
      n = e[3],
      a = e[4],
      h = e[5],
      m = e[6],
      _ = e[7];
    const O = new Uint32Array(16);
    let I;
    for (I = 0; I < 16; I++)
      O[I] =
        this._buf[(I << 2) + 3] |
        (this._buf[(I << 2) + 2] << 8) |
        (this._buf[(I << 2) + 1] << 16) |
        (this._buf[I << 2] << 24);
    for (I = 0; I < 64; I++) {
      let N;
      if (I < 16) N = O[I];
      else {
        let T = O[(I + 1) & 15],
          H = O[(I + 14) & 15];
        N = O[I & 15] =
          (((T >>> 7) ^ (T >>> 18) ^ (T >>> 3) ^ (T << 25) ^ (T << 14)) +
            ((H >>> 17) ^ (H >>> 19) ^ (H >>> 10) ^ (H << 15) ^ (H << 13)) +
            O[I & 15] +
            O[(I + 9) & 15]) |
          0;
      }
      (N =
        (N +
          _ +
          ((a >>> 6) ^
            (a >>> 11) ^
            (a >>> 25) ^
            (a << 26) ^
            (a << 21) ^
            (a << 7)) +
          (m ^ (a & (h ^ m))) +
          this._K[I]) |
        0),
        (_ = m),
        (m = h),
        (h = a),
        (a = n + N),
        (n = i),
        (i = r),
        (r = t),
        (t =
          (N +
            ((r & i) ^ (n & (r ^ i))) +
            ((r >>> 2) ^
              (r >>> 13) ^
              (r >>> 22) ^
              (r << 30) ^
              (r << 19) ^
              (r << 10))) |
          0);
    }
    (e[0] = (e[0] + t) | 0),
      (e[1] = (e[1] + r) | 0),
      (e[2] = (e[2] + i) | 0),
      (e[3] = (e[3] + n) | 0),
      (e[4] = (e[4] + a) | 0),
      (e[5] = (e[5] + h) | 0),
      (e[6] = (e[6] + m) | 0),
      (e[7] = (e[7] + _) | 0);
  }
}
class dn extends Lt {
  constructor(e, t) {
    super(e, t);
  }
  async getMessage(e, t) {
    Ne(e);
    let r = t;
    const { last_by_subj: i } = r;
    i && (r = null);
    const n = r ? this.jc.encode(r) : Pe,
      a = this.opts.apiPrefix || "$JS.API",
      h = i ? `${a}.DIRECT.GET.${e}.${i}` : `${a}.DIRECT.GET.${e}`,
      m = await this.nc.request(h, n),
      _ = wt(m);
    if (_) return Promise.reject(_);
    const O = new pn(m);
    return Promise.resolve(O);
  }
}
class pn {
  data;
  header;
  constructor(e) {
    if (!e.headers) throw new Error("headers expected");
    (this.data = e.data), (this.header = e.headers);
  }
  get subject() {
    return this.header.get(gt.Subject);
  }
  get seq() {
    const e = this.header.get(gt.Sequence);
    return typeof e == "string" ? parseInt(e) : 0;
  }
  get time() {
    return new Date(Date.parse(this.header.get(gt.TimeStamp)));
  }
  get stream() {
    return this.header.get(gt.Stream);
  }
}
(function (s) {
  var e = function (o, l) {
      (this.hi = o | 0), (this.lo = l | 0);
    },
    t = function (o) {
      var l,
        u = new Float64Array(16);
      if (o) for (l = 0; l < o.length; l++) u[l] = o[l];
      return u;
    },
    r = function () {
      throw new Error("no PRNG");
    },
    i = new Uint8Array(16),
    n = new Uint8Array(32);
  n[0] = 9;
  var a = t(),
    h = t([1]),
    m = t([56129, 1]),
    _ = t([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    O = t([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    I = t([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    N = t([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    T = t([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function H(o, l) {
    return (o << l) | (o >>> (32 - l));
  }
  function q(o, l) {
    var u = o[l + 3] & 255;
    return (
      (u = (u << 8) | (o[l + 2] & 255)),
      (u = (u << 8) | (o[l + 1] & 255)),
      (u << 8) | (o[l + 0] & 255)
    );
  }
  function K(o, l) {
    var u = (o[l] << 24) | (o[l + 1] << 16) | (o[l + 2] << 8) | o[l + 3],
      f = (o[l + 4] << 24) | (o[l + 5] << 16) | (o[l + 6] << 8) | o[l + 7];
    return new e(u, f);
  }
  function J(o, l, u) {
    var f;
    for (f = 0; f < 4; f++) (o[l + f] = u & 255), (u >>>= 8);
  }
  function D(o, l, u) {
    (o[l] = (u.hi >> 24) & 255),
      (o[l + 1] = (u.hi >> 16) & 255),
      (o[l + 2] = (u.hi >> 8) & 255),
      (o[l + 3] = u.hi & 255),
      (o[l + 4] = (u.lo >> 24) & 255),
      (o[l + 5] = (u.lo >> 16) & 255),
      (o[l + 6] = (u.lo >> 8) & 255),
      (o[l + 7] = u.lo & 255);
  }
  function ce(o, l, u, f, g) {
    var x,
      j = 0;
    for (x = 0; x < g; x++) j |= o[l + x] ^ u[f + x];
    return (1 & ((j - 1) >>> 8)) - 1;
  }
  function Se(o, l, u, f) {
    return ce(o, l, u, f, 16);
  }
  function le(o, l, u, f) {
    return ce(o, l, u, f, 32);
  }
  function Y(o, l, u, f, g) {
    var x = new Uint32Array(16),
      j = new Uint32Array(16),
      $ = new Uint32Array(16),
      k = new Uint32Array(4),
      C,
      G,
      te;
    for (C = 0; C < 4; C++)
      (j[5 * C] = q(f, 4 * C)),
        (j[1 + C] = q(u, 4 * C)),
        (j[6 + C] = q(l, 4 * C)),
        (j[11 + C] = q(u, 16 + 4 * C));
    for (C = 0; C < 16; C++) $[C] = j[C];
    for (C = 0; C < 20; C++) {
      for (G = 0; G < 4; G++) {
        for (te = 0; te < 4; te++) k[te] = j[(5 * G + 4 * te) % 16];
        for (
          k[1] ^= H((k[0] + k[3]) | 0, 7),
            k[2] ^= H((k[1] + k[0]) | 0, 9),
            k[3] ^= H((k[2] + k[1]) | 0, 13),
            k[0] ^= H((k[3] + k[2]) | 0, 18),
            te = 0;
          te < 4;
          te++
        )
          x[4 * G + ((G + te) % 4)] = k[te];
      }
      for (te = 0; te < 16; te++) j[te] = x[te];
    }
    if (g) {
      for (C = 0; C < 16; C++) j[C] = (j[C] + $[C]) | 0;
      for (C = 0; C < 4; C++)
        (j[5 * C] = (j[5 * C] - q(f, 4 * C)) | 0),
          (j[6 + C] = (j[6 + C] - q(l, 4 * C)) | 0);
      for (C = 0; C < 4; C++) J(o, 4 * C, j[5 * C]), J(o, 16 + 4 * C, j[6 + C]);
    } else for (C = 0; C < 16; C++) J(o, 4 * C, (j[C] + $[C]) | 0);
  }
  function X(o, l, u, f) {
    return Y(o, l, u, f, !1), 0;
  }
  function re(o, l, u, f) {
    return Y(o, l, u, f, !0), 0;
  }
  var se = new Uint8Array([
    101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107,
  ]);
  function B(o, l, u, f, g, x, j) {
    var $ = new Uint8Array(16),
      k = new Uint8Array(64),
      C,
      G;
    if (!g) return 0;
    for (G = 0; G < 16; G++) $[G] = 0;
    for (G = 0; G < 8; G++) $[G] = x[G];
    for (; g >= 64; ) {
      for (X(k, $, j, se), G = 0; G < 64; G++)
        o[l + G] = (u ? u[f + G] : 0) ^ k[G];
      for (C = 1, G = 8; G < 16; G++)
        (C = (C + ($[G] & 255)) | 0), ($[G] = C & 255), (C >>>= 8);
      (g -= 64), (l += 64), u && (f += 64);
    }
    if (g > 0)
      for (X(k, $, j, se), G = 0; G < g; G++)
        o[l + G] = (u ? u[f + G] : 0) ^ k[G];
    return 0;
  }
  function de(o, l, u, f, g) {
    return B(o, l, null, 0, u, f, g);
  }
  function ne(o, l, u, f, g) {
    var x = new Uint8Array(32);
    return re(x, f, g, se), de(o, l, u, f.subarray(16), x);
  }
  function oe(o, l, u, f, g, x, j) {
    var $ = new Uint8Array(32);
    return re($, x, j, se), B(o, l, u, f, g, x.subarray(16), $);
  }
  function be(o, l) {
    var u,
      f = 0;
    for (u = 0; u < 17; u++)
      (f = (f + ((o[u] + l[u]) | 0)) | 0), (o[u] = f & 255), (f >>>= 8);
  }
  var Ee = new Uint32Array([
    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 252,
  ]);
  function Le(o, l, u, f, g, x) {
    var j,
      $,
      k,
      C,
      G = new Uint32Array(17),
      te = new Uint32Array(17),
      fe = new Uint32Array(17),
      De = new Uint32Array(17),
      pt = new Uint32Array(17);
    for (k = 0; k < 17; k++) te[k] = fe[k] = 0;
    for (k = 0; k < 16; k++) te[k] = x[k];
    for (
      te[3] &= 15,
        te[4] &= 252,
        te[7] &= 15,
        te[8] &= 252,
        te[11] &= 15,
        te[12] &= 252,
        te[15] &= 15;
      g > 0;

    ) {
      for (k = 0; k < 17; k++) De[k] = 0;
      for (k = 0; k < 16 && k < g; ++k) De[k] = u[f + k];
      for (De[k] = 1, f += k, g -= k, be(fe, De), $ = 0; $ < 17; $++)
        for (G[$] = 0, k = 0; k < 17; k++)
          G[$] =
            (G[$] + fe[k] * (k <= $ ? te[$ - k] : (320 * te[$ + 17 - k]) | 0)) |
            0 |
            0;
      for ($ = 0; $ < 17; $++) fe[$] = G[$];
      for (C = 0, k = 0; k < 16; k++)
        (C = (C + fe[k]) | 0), (fe[k] = C & 255), (C >>>= 8);
      for (
        C = (C + fe[16]) | 0, fe[16] = C & 3, C = (5 * (C >>> 2)) | 0, k = 0;
        k < 16;
        k++
      )
        (C = (C + fe[k]) | 0), (fe[k] = C & 255), (C >>>= 8);
      (C = (C + fe[16]) | 0), (fe[16] = C);
    }
    for (k = 0; k < 17; k++) pt[k] = fe[k];
    for (be(fe, Ee), j = -(fe[16] >>> 7) | 0, k = 0; k < 17; k++)
      fe[k] ^= j & (pt[k] ^ fe[k]);
    for (k = 0; k < 16; k++) De[k] = x[k + 16];
    for (De[16] = 0, be(fe, De), k = 0; k < 16; k++) o[l + k] = fe[k];
    return 0;
  }
  function Oe(o, l, u, f, g, x) {
    var j = new Uint8Array(16);
    return Le(j, 0, u, f, g, x), Se(o, l, j, 0);
  }
  function qe(o, l, u, f, g) {
    var x;
    if (u < 32) return -1;
    for (
      oe(o, 0, l, 0, u, f, g), Le(o, 16, o, 32, u - 32, o), x = 0;
      x < 16;
      x++
    )
      o[x] = 0;
    return 0;
  }
  function Ke(o, l, u, f, g) {
    var x,
      j = new Uint8Array(32);
    if (u < 32 || (ne(j, 0, 32, f, g), Oe(l, 16, l, 32, u - 32, j) !== 0))
      return -1;
    for (oe(o, 0, l, 0, u, f, g), x = 0; x < 32; x++) o[x] = 0;
    return 0;
  }
  function _e(o, l) {
    var u;
    for (u = 0; u < 16; u++) o[u] = l[u] | 0;
  }
  function Xe(o) {
    var l, u;
    for (u = 0; u < 16; u++)
      (o[u] += 65536),
        (l = Math.floor(o[u] / 65536)),
        (o[(u + 1) * (u < 15 ? 1 : 0)] +=
          l - 1 + 37 * (l - 1) * (u === 15 ? 1 : 0)),
        (o[u] -= l * 65536);
  }
  function Ie(o, l, u) {
    for (var f, g = ~(u - 1), x = 0; x < 16; x++)
      (f = g & (o[x] ^ l[x])), (o[x] ^= f), (l[x] ^= f);
  }
  function ze(o, l) {
    var u,
      f,
      g,
      x = t(),
      j = t();
    for (u = 0; u < 16; u++) j[u] = l[u];
    for (Xe(j), Xe(j), Xe(j), f = 0; f < 2; f++) {
      for (x[0] = j[0] - 65517, u = 1; u < 15; u++)
        (x[u] = j[u] - 65535 - ((x[u - 1] >> 16) & 1)), (x[u - 1] &= 65535);
      (x[15] = j[15] - 32767 - ((x[14] >> 16) & 1)),
        (g = (x[15] >> 16) & 1),
        (x[14] &= 65535),
        Ie(j, x, 1 - g);
    }
    for (u = 0; u < 16; u++)
      (o[2 * u] = j[u] & 255), (o[2 * u + 1] = j[u] >> 8);
  }
  function R(o, l) {
    var u = new Uint8Array(32),
      f = new Uint8Array(32);
    return ze(u, o), ze(f, l), le(u, 0, f, 0);
  }
  function ct(o) {
    var l = new Uint8Array(32);
    return ze(l, o), l[0] & 1;
  }
  function ut(o, l) {
    var u;
    for (u = 0; u < 16; u++) o[u] = l[2 * u] + (l[2 * u + 1] << 8);
    o[15] &= 32767;
  }
  function Ae(o, l, u) {
    var f;
    for (f = 0; f < 16; f++) o[f] = (l[f] + u[f]) | 0;
  }
  function ue(o, l, u) {
    var f;
    for (f = 0; f < 16; f++) o[f] = (l[f] - u[f]) | 0;
  }
  function Z(o, l, u) {
    var f,
      g,
      x = new Float64Array(31);
    for (f = 0; f < 31; f++) x[f] = 0;
    for (f = 0; f < 16; f++) for (g = 0; g < 16; g++) x[f + g] += l[f] * u[g];
    for (f = 0; f < 15; f++) x[f] += 38 * x[f + 16];
    for (f = 0; f < 16; f++) o[f] = x[f];
    Xe(o), Xe(o);
  }
  function c(o, l) {
    Z(o, l, l);
  }
  function d(o, l) {
    var u = t(),
      f;
    for (f = 0; f < 16; f++) u[f] = l[f];
    for (f = 253; f >= 0; f--) c(u, u), f !== 2 && f !== 4 && Z(u, u, l);
    for (f = 0; f < 16; f++) o[f] = u[f];
  }
  function p(o, l) {
    var u = t(),
      f;
    for (f = 0; f < 16; f++) u[f] = l[f];
    for (f = 250; f >= 0; f--) c(u, u), f !== 1 && Z(u, u, l);
    for (f = 0; f < 16; f++) o[f] = u[f];
  }
  function S(o, l, u) {
    var f = new Uint8Array(32),
      g = new Float64Array(80),
      x,
      j,
      $ = t(),
      k = t(),
      C = t(),
      G = t(),
      te = t(),
      fe = t();
    for (j = 0; j < 31; j++) f[j] = l[j];
    for (f[31] = (l[31] & 127) | 64, f[0] &= 248, ut(g, u), j = 0; j < 16; j++)
      (k[j] = g[j]), (G[j] = $[j] = C[j] = 0);
    for ($[0] = G[0] = 1, j = 254; j >= 0; --j)
      (x = (f[j >>> 3] >>> (j & 7)) & 1),
        Ie($, k, x),
        Ie(C, G, x),
        Ae(te, $, C),
        ue($, $, C),
        Ae(C, k, G),
        ue(k, k, G),
        c(G, te),
        c(fe, $),
        Z($, C, $),
        Z(C, k, te),
        Ae(te, $, C),
        ue($, $, C),
        c(k, $),
        ue(C, G, fe),
        Z($, C, m),
        Ae($, $, G),
        Z(C, C, $),
        Z($, G, fe),
        Z(G, k, g),
        c(k, te),
        Ie($, k, x),
        Ie(C, G, x);
    for (j = 0; j < 16; j++)
      (g[j + 16] = $[j]),
        (g[j + 32] = C[j]),
        (g[j + 48] = k[j]),
        (g[j + 64] = G[j]);
    var De = g.subarray(32),
      pt = g.subarray(16);
    return d(De, De), Z(pt, pt, De), ze(o, pt), 0;
  }
  function w(o, l) {
    return S(o, l, n);
  }
  function v(o, l) {
    return r(l, 32), w(o, l);
  }
  function P(o, l, u) {
    var f = new Uint8Array(32);
    return S(f, u, l), re(o, i, f, se);
  }
  var b = qe,
    y = Ke;
  function A(o, l, u, f, g, x) {
    var j = new Uint8Array(32);
    return P(j, g, x), b(o, l, u, f, j);
  }
  function E(o, l, u, f, g, x) {
    var j = new Uint8Array(32);
    return P(j, g, x), y(o, l, u, f, j);
  }
  function M() {
    var o = 0,
      l = 0,
      u = 0,
      f = 0,
      g = 65535,
      x,
      j,
      $;
    for ($ = 0; $ < arguments.length; $++)
      (x = arguments[$].lo),
        (j = arguments[$].hi),
        (o += x & g),
        (l += x >>> 16),
        (u += j & g),
        (f += j >>> 16);
    return (
      (l += o >>> 16),
      (u += l >>> 16),
      (f += u >>> 16),
      new e((u & g) | (f << 16), (o & g) | (l << 16))
    );
  }
  function V(o, l) {
    return new e(o.hi >>> l, (o.lo >>> l) | (o.hi << (32 - l)));
  }
  function W() {
    var o = 0,
      l = 0,
      u;
    for (u = 0; u < arguments.length; u++)
      (o ^= arguments[u].lo), (l ^= arguments[u].hi);
    return new e(l, o);
  }
  function Q(o, l) {
    var u,
      f,
      g = 32 - l;
    return (
      l < 32
        ? ((u = (o.hi >>> l) | (o.lo << g)), (f = (o.lo >>> l) | (o.hi << g)))
        : l < 64 &&
          ((u = (o.lo >>> l) | (o.hi << g)), (f = (o.hi >>> l) | (o.lo << g))),
      new e(u, f)
    );
  }
  function he(o, l, u) {
    var f = (o.hi & l.hi) ^ (~o.hi & u.hi),
      g = (o.lo & l.lo) ^ (~o.lo & u.lo);
    return new e(f, g);
  }
  function pe(o, l, u) {
    var f = (o.hi & l.hi) ^ (o.hi & u.hi) ^ (l.hi & u.hi),
      g = (o.lo & l.lo) ^ (o.lo & u.lo) ^ (l.lo & u.lo);
    return new e(f, g);
  }
  function ee(o) {
    return W(Q(o, 28), Q(o, 34), Q(o, 39));
  }
  function ie(o) {
    return W(Q(o, 14), Q(o, 18), Q(o, 41));
  }
  function we(o) {
    return W(Q(o, 1), Q(o, 8), V(o, 7));
  }
  function ht(o) {
    return W(Q(o, 19), Q(o, 61), V(o, 6));
  }
  var vt = [
    new e(1116352408, 3609767458),
    new e(1899447441, 602891725),
    new e(3049323471, 3964484399),
    new e(3921009573, 2173295548),
    new e(961987163, 4081628472),
    new e(1508970993, 3053834265),
    new e(2453635748, 2937671579),
    new e(2870763221, 3664609560),
    new e(3624381080, 2734883394),
    new e(310598401, 1164996542),
    new e(607225278, 1323610764),
    new e(1426881987, 3590304994),
    new e(1925078388, 4068182383),
    new e(2162078206, 991336113),
    new e(2614888103, 633803317),
    new e(3248222580, 3479774868),
    new e(3835390401, 2666613458),
    new e(4022224774, 944711139),
    new e(264347078, 2341262773),
    new e(604807628, 2007800933),
    new e(770255983, 1495990901),
    new e(1249150122, 1856431235),
    new e(1555081692, 3175218132),
    new e(1996064986, 2198950837),
    new e(2554220882, 3999719339),
    new e(2821834349, 766784016),
    new e(2952996808, 2566594879),
    new e(3210313671, 3203337956),
    new e(3336571891, 1034457026),
    new e(3584528711, 2466948901),
    new e(113926993, 3758326383),
    new e(338241895, 168717936),
    new e(666307205, 1188179964),
    new e(773529912, 1546045734),
    new e(1294757372, 1522805485),
    new e(1396182291, 2643833823),
    new e(1695183700, 2343527390),
    new e(1986661051, 1014477480),
    new e(2177026350, 1206759142),
    new e(2456956037, 344077627),
    new e(2730485921, 1290863460),
    new e(2820302411, 3158454273),
    new e(3259730800, 3505952657),
    new e(3345764771, 106217008),
    new e(3516065817, 3606008344),
    new e(3600352804, 1432725776),
    new e(4094571909, 1467031594),
    new e(275423344, 851169720),
    new e(430227734, 3100823752),
    new e(506948616, 1363258195),
    new e(659060556, 3750685593),
    new e(883997877, 3785050280),
    new e(958139571, 3318307427),
    new e(1322822218, 3812723403),
    new e(1537002063, 2003034995),
    new e(1747873779, 3602036899),
    new e(1955562222, 1575990012),
    new e(2024104815, 1125592928),
    new e(2227730452, 2716904306),
    new e(2361852424, 442776044),
    new e(2428436474, 593698344),
    new e(2756734187, 3733110249),
    new e(3204031479, 2999351573),
    new e(3329325298, 3815920427),
    new e(3391569614, 3928383900),
    new e(3515267271, 566280711),
    new e(3940187606, 3454069534),
    new e(4118630271, 4000239992),
    new e(116418474, 1914138554),
    new e(174292421, 2731055270),
    new e(289380356, 3203993006),
    new e(460393269, 320620315),
    new e(685471733, 587496836),
    new e(852142971, 1086792851),
    new e(1017036298, 365543100),
    new e(1126000580, 2618297676),
    new e(1288033470, 3409855158),
    new e(1501505948, 4234509866),
    new e(1607167915, 987167468),
    new e(1816402316, 1246189591),
  ];
  function lt(o, l, u) {
    var f = [],
      g = [],
      x = [],
      j = [],
      $,
      k,
      C;
    for (k = 0; k < 8; k++) f[k] = x[k] = K(o, 8 * k);
    for (var G = 0; u >= 128; ) {
      for (k = 0; k < 16; k++) j[k] = K(l, 8 * k + G);
      for (k = 0; k < 80; k++) {
        for (C = 0; C < 8; C++) g[C] = x[C];
        for (
          $ = M(x[7], ie(x[4]), he(x[4], x[5], x[6]), vt[k], j[k % 16]),
            g[7] = M($, ee(x[0]), pe(x[0], x[1], x[2])),
            g[3] = M(g[3], $),
            C = 0;
          C < 8;
          C++
        )
          x[(C + 1) % 8] = g[C];
        if (k % 16 === 15)
          for (C = 0; C < 16; C++)
            j[C] = M(
              j[C],
              j[(C + 9) % 16],
              we(j[(C + 1) % 16]),
              ht(j[(C + 14) % 16])
            );
      }
      for (k = 0; k < 8; k++) (x[k] = M(x[k], f[k])), (f[k] = x[k]);
      (G += 128), (u -= 128);
    }
    for (k = 0; k < 8; k++) D(o, 8 * k, f[k]);
    return u;
  }
  var Be = new Uint8Array([
    106, 9, 230, 103, 243, 188, 201, 8, 187, 103, 174, 133, 132, 202, 167, 59,
    60, 110, 243, 114, 254, 148, 248, 43, 165, 79, 245, 58, 95, 29, 54, 241, 81,
    14, 82, 127, 173, 230, 130, 209, 155, 5, 104, 140, 43, 62, 108, 31, 31, 131,
    217, 171, 251, 65, 189, 107, 91, 224, 205, 25, 19, 126, 33, 121,
  ]);
  function je(o, l, u) {
    var f = new Uint8Array(64),
      g = new Uint8Array(256),
      x,
      j = u;
    for (x = 0; x < 64; x++) f[x] = Be[x];
    for (lt(f, l, u), u %= 128, x = 0; x < 256; x++) g[x] = 0;
    for (x = 0; x < u; x++) g[x] = l[j - u + x];
    for (
      g[u] = 128,
        u = 256 - 128 * (u < 112 ? 1 : 0),
        g[u - 9] = 0,
        D(g, u - 8, new e((j / 536870912) | 0, j << 3)),
        lt(f, g, u),
        x = 0;
      x < 64;
      x++
    )
      o[x] = f[x];
    return 0;
  }
  function ye(o, l) {
    var u = t(),
      f = t(),
      g = t(),
      x = t(),
      j = t(),
      $ = t(),
      k = t(),
      C = t(),
      G = t();
    ue(u, o[1], o[0]),
      ue(G, l[1], l[0]),
      Z(u, u, G),
      Ae(f, o[0], o[1]),
      Ae(G, l[0], l[1]),
      Z(f, f, G),
      Z(g, o[3], l[3]),
      Z(g, g, O),
      Z(x, o[2], l[2]),
      Ae(x, x, x),
      ue(j, f, u),
      ue($, x, g),
      Ae(k, x, g),
      Ae(C, f, u),
      Z(o[0], j, $),
      Z(o[1], C, k),
      Z(o[2], k, $),
      Z(o[3], j, C);
  }
  function xe(o, l, u) {
    var f;
    for (f = 0; f < 4; f++) Ie(o[f], l[f], u);
  }
  function ae(o, l) {
    var u = t(),
      f = t(),
      g = t();
    d(g, l[2]), Z(u, l[0], g), Z(f, l[1], g), ze(o, f), (o[31] ^= ct(u) << 7);
  }
  function ur(o, l, u) {
    var f, g;
    for (
      _e(o[0], a), _e(o[1], h), _e(o[2], h), _e(o[3], a), g = 255;
      g >= 0;
      --g
    )
      (f = (u[(g / 8) | 0] >> (g & 7)) & 1),
        xe(o, l, f),
        ye(l, o),
        ye(o, o),
        xe(o, l, f);
  }
  function qt(o, l) {
    var u = [t(), t(), t(), t()];
    _e(u[0], I), _e(u[1], N), _e(u[2], h), Z(u[3], I, N), ur(o, u, l);
  }
  function hr(o, l, u) {
    var f = new Uint8Array(64),
      g = [t(), t(), t(), t()],
      x;
    for (
      u || r(l, 32),
        je(f, l, 32),
        f[0] &= 248,
        f[31] &= 127,
        f[31] |= 64,
        qt(g, f),
        ae(o, g),
        x = 0;
      x < 32;
      x++
    )
      l[x + 32] = o[x];
    return 0;
  }
  var Dt = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function lr(o, l) {
    var u, f, g, x;
    for (f = 63; f >= 32; --f) {
      for (u = 0, g = f - 32, x = f - 12; g < x; ++g)
        (l[g] += u - 16 * l[f] * Dt[g - (f - 32)]),
          (u = Math.floor((l[g] + 128) / 256)),
          (l[g] -= u * 256);
      (l[g] += u), (l[f] = 0);
    }
    for (u = 0, g = 0; g < 32; g++)
      (l[g] += u - (l[31] >> 4) * Dt[g]), (u = l[g] >> 8), (l[g] &= 255);
    for (g = 0; g < 32; g++) l[g] -= u * Dt[g];
    for (f = 0; f < 32; f++) (l[f + 1] += l[f] >> 8), (o[f] = l[f] & 255);
  }
  function fr(o) {
    var l = new Float64Array(64),
      u;
    for (u = 0; u < 64; u++) l[u] = o[u];
    for (u = 0; u < 64; u++) o[u] = 0;
    lr(o, l);
  }
  function Fr(o, l, u, f) {
    var g = new Uint8Array(64),
      x = new Uint8Array(64),
      j = new Uint8Array(64),
      $,
      k,
      C = new Float64Array(64),
      G = [t(), t(), t(), t()];
    je(g, f, 32), (g[0] &= 248), (g[31] &= 127), (g[31] |= 64);
    var te = u + 64;
    for ($ = 0; $ < u; $++) o[64 + $] = l[$];
    for ($ = 0; $ < 32; $++) o[32 + $] = g[32 + $];
    for (
      je(j, o.subarray(32), u + 32), fr(j), qt(G, j), ae(o, G), $ = 32;
      $ < 64;
      $++
    )
      o[$] = f[$];
    for (je(x, o, u + 64), fr(x), $ = 0; $ < 64; $++) C[$] = 0;
    for ($ = 0; $ < 32; $++) C[$] = j[$];
    for ($ = 0; $ < 32; $++) for (k = 0; k < 32; k++) C[$ + k] += x[$] * g[k];
    return lr(o.subarray(32), C), te;
  }
  function Ds(o, l) {
    var u = t(),
      f = t(),
      g = t(),
      x = t(),
      j = t(),
      $ = t(),
      k = t();
    return (
      _e(o[2], h),
      ut(o[1], l),
      c(g, o[1]),
      Z(x, g, _),
      ue(g, g, o[2]),
      Ae(x, o[2], x),
      c(j, x),
      c($, j),
      Z(k, $, j),
      Z(u, k, g),
      Z(u, u, x),
      p(u, u),
      Z(u, u, g),
      Z(u, u, x),
      Z(u, u, x),
      Z(o[0], u, x),
      c(f, o[0]),
      Z(f, f, x),
      R(f, g) && Z(o[0], o[0], T),
      c(f, o[0]),
      Z(f, f, x),
      R(f, g)
        ? -1
        : (ct(o[0]) === l[31] >> 7 && ue(o[0], a, o[0]), Z(o[3], o[0], o[1]), 0)
    );
  }
  function dr(o, l, u, f) {
    var g,
      x = new Uint8Array(32),
      j = new Uint8Array(64),
      $ = [t(), t(), t(), t()],
      k = [t(), t(), t(), t()];
    if (u < 64 || Ds(k, f)) return -1;
    for (g = 0; g < u; g++) o[g] = l[g];
    for (g = 0; g < 32; g++) o[g + 32] = f[g];
    if (
      (je(j, o, u),
      fr(j),
      ur($, k, j),
      qt(k, l.subarray(32)),
      ye($, k),
      ae(x, $),
      (u -= 64),
      le(l, 0, x, 0))
    ) {
      for (g = 0; g < u; g++) o[g] = 0;
      return -1;
    }
    for (g = 0; g < u; g++) o[g] = l[g + 64];
    return u;
  }
  var pr = 32,
    Gt = 24,
    St = 32,
    ft = 16,
    Et = 32,
    Ht = 32,
    At = 32,
    kt = 32,
    mr = 32,
    Lr = Gt,
    Gs = St,
    Hs = ft,
    Ze = 64,
    st = 32,
    dt = 64,
    gr = 32,
    br = 64;
  s.lowlevel = {
    crypto_core_hsalsa20: re,
    crypto_stream_xor: oe,
    crypto_stream: ne,
    crypto_stream_salsa20_xor: B,
    crypto_stream_salsa20: de,
    crypto_onetimeauth: Le,
    crypto_onetimeauth_verify: Oe,
    crypto_verify_16: Se,
    crypto_verify_32: le,
    crypto_secretbox: qe,
    crypto_secretbox_open: Ke,
    crypto_scalarmult: S,
    crypto_scalarmult_base: w,
    crypto_box_beforenm: P,
    crypto_box_afternm: b,
    crypto_box: A,
    crypto_box_open: E,
    crypto_box_keypair: v,
    crypto_hash: je,
    crypto_sign: Fr,
    crypto_sign_keypair: hr,
    crypto_sign_open: dr,
    crypto_secretbox_KEYBYTES: pr,
    crypto_secretbox_NONCEBYTES: Gt,
    crypto_secretbox_ZEROBYTES: St,
    crypto_secretbox_BOXZEROBYTES: ft,
    crypto_scalarmult_BYTES: Et,
    crypto_scalarmult_SCALARBYTES: Ht,
    crypto_box_PUBLICKEYBYTES: At,
    crypto_box_SECRETKEYBYTES: kt,
    crypto_box_BEFORENMBYTES: mr,
    crypto_box_NONCEBYTES: Lr,
    crypto_box_ZEROBYTES: Gs,
    crypto_box_BOXZEROBYTES: Hs,
    crypto_sign_BYTES: Ze,
    crypto_sign_PUBLICKEYBYTES: st,
    crypto_sign_SECRETKEYBYTES: dt,
    crypto_sign_SEEDBYTES: gr,
    crypto_hash_BYTES: br,
    gf: t,
    D: _,
    L: Dt,
    pack25519: ze,
    unpack25519: ut,
    M: Z,
    A: Ae,
    S: c,
    Z: ue,
    pow2523: p,
    add: ye,
    set25519: _e,
    modL: lr,
    scalarmult: ur,
    scalarbase: qt,
  };
  function qr(o, l) {
    if (o.length !== pr) throw new Error("bad key size");
    if (l.length !== Gt) throw new Error("bad nonce size");
  }
  function zs(o, l) {
    if (o.length !== At) throw new Error("bad public key size");
    if (l.length !== kt) throw new Error("bad secret key size");
  }
  function Me() {
    for (var o = 0; o < arguments.length; o++)
      if (!(arguments[o] instanceof Uint8Array))
        throw new TypeError("unexpected type, use Uint8Array");
  }
  function Dr(o) {
    for (var l = 0; l < o.length; l++) o[l] = 0;
  }
  (s.randomBytes = function (o) {
    var l = new Uint8Array(o);
    return r(l, o), l;
  }),
    (s.secretbox = function (o, l, u) {
      Me(o, l, u), qr(u, l);
      for (
        var f = new Uint8Array(St + o.length),
          g = new Uint8Array(f.length),
          x = 0;
        x < o.length;
        x++
      )
        f[x + St] = o[x];
      return qe(g, f, f.length, l, u), g.subarray(ft);
    }),
    (s.secretbox.open = function (o, l, u) {
      Me(o, l, u), qr(u, l);
      for (
        var f = new Uint8Array(ft + o.length),
          g = new Uint8Array(f.length),
          x = 0;
        x < o.length;
        x++
      )
        f[x + ft] = o[x];
      return f.length < 32 || Ke(g, f, f.length, l, u) !== 0
        ? null
        : g.subarray(St);
    }),
    (s.secretbox.keyLength = pr),
    (s.secretbox.nonceLength = Gt),
    (s.secretbox.overheadLength = ft),
    (s.scalarMult = function (o, l) {
      if ((Me(o, l), o.length !== Ht)) throw new Error("bad n size");
      if (l.length !== Et) throw new Error("bad p size");
      var u = new Uint8Array(Et);
      return S(u, o, l), u;
    }),
    (s.scalarMult.base = function (o) {
      if ((Me(o), o.length !== Ht)) throw new Error("bad n size");
      var l = new Uint8Array(Et);
      return w(l, o), l;
    }),
    (s.scalarMult.scalarLength = Ht),
    (s.scalarMult.groupElementLength = Et),
    (s.box = function (o, l, u, f) {
      var g = s.box.before(u, f);
      return s.secretbox(o, l, g);
    }),
    (s.box.before = function (o, l) {
      Me(o, l), zs(o, l);
      var u = new Uint8Array(mr);
      return P(u, o, l), u;
    }),
    (s.box.after = s.secretbox),
    (s.box.open = function (o, l, u, f) {
      var g = s.box.before(u, f);
      return s.secretbox.open(o, l, g);
    }),
    (s.box.open.after = s.secretbox.open),
    (s.box.keyPair = function () {
      var o = new Uint8Array(At),
        l = new Uint8Array(kt);
      return v(o, l), { publicKey: o, secretKey: l };
    }),
    (s.box.keyPair.fromSecretKey = function (o) {
      if ((Me(o), o.length !== kt)) throw new Error("bad secret key size");
      var l = new Uint8Array(At);
      return w(l, o), { publicKey: l, secretKey: new Uint8Array(o) };
    }),
    (s.box.publicKeyLength = At),
    (s.box.secretKeyLength = kt),
    (s.box.sharedKeyLength = mr),
    (s.box.nonceLength = Lr),
    (s.box.overheadLength = s.secretbox.overheadLength),
    (s.sign = function (o, l) {
      if ((Me(o, l), l.length !== dt)) throw new Error("bad secret key size");
      var u = new Uint8Array(Ze + o.length);
      return Fr(u, o, o.length, l), u;
    }),
    (s.sign.open = function (o, l) {
      if ((Me(o, l), l.length !== st)) throw new Error("bad public key size");
      var u = new Uint8Array(o.length),
        f = dr(u, o, o.length, l);
      if (f < 0) return null;
      for (var g = new Uint8Array(f), x = 0; x < g.length; x++) g[x] = u[x];
      return g;
    }),
    (s.sign.detached = function (o, l) {
      for (
        var u = s.sign(o, l), f = new Uint8Array(Ze), g = 0;
        g < f.length;
        g++
      )
        f[g] = u[g];
      return f;
    }),
    (s.sign.detached.verify = function (o, l, u) {
      if ((Me(o, l, u), l.length !== Ze)) throw new Error("bad signature size");
      if (u.length !== st) throw new Error("bad public key size");
      var f = new Uint8Array(Ze + o.length),
        g = new Uint8Array(Ze + o.length),
        x;
      for (x = 0; x < Ze; x++) f[x] = l[x];
      for (x = 0; x < o.length; x++) f[x + Ze] = o[x];
      return dr(g, f, f.length, u) >= 0;
    }),
    (s.sign.keyPair = function () {
      var o = new Uint8Array(st),
        l = new Uint8Array(dt);
      return hr(o, l), { publicKey: o, secretKey: l };
    }),
    (s.sign.keyPair.fromSecretKey = function (o) {
      if ((Me(o), o.length !== dt)) throw new Error("bad secret key size");
      for (var l = new Uint8Array(st), u = 0; u < l.length; u++)
        l[u] = o[32 + u];
      return { publicKey: l, secretKey: new Uint8Array(o) };
    }),
    (s.sign.keyPair.fromSeed = function (o) {
      if ((Me(o), o.length !== gr)) throw new Error("bad seed size");
      for (
        var l = new Uint8Array(st), u = new Uint8Array(dt), f = 0;
        f < 32;
        f++
      )
        u[f] = o[f];
      return hr(l, u, !0), { publicKey: l, secretKey: u };
    }),
    (s.sign.publicKeyLength = st),
    (s.sign.secretKeyLength = dt),
    (s.sign.seedLength = gr),
    (s.sign.signatureLength = Ze),
    (s.hash = function (o) {
      Me(o);
      var l = new Uint8Array(br);
      return je(l, o, o.length), l;
    }),
    (s.hash.hashLength = br),
    (s.verify = function (o, l) {
      return (
        Me(o, l),
        o.length === 0 || l.length === 0 || o.length !== l.length
          ? !1
          : ce(o, 0, l, 0, o.length) === 0
      );
    }),
    (s.setPRNG = function (o) {
      r = o;
    }),
    (function () {
      var o =
        typeof globalThis < "u"
          ? globalThis.crypto || globalThis.msCrypto
          : null;
      if (o && o.getRandomValues) {
        var l = 65536;
        s.setPRNG(function (u, f) {
          var g,
            x = new Uint8Array(f);
          for (g = 0; g < f; g += l)
            o.getRandomValues(x.subarray(g, g + Math.min(f - g, l)));
          for (g = 0; g < f; g++) u[g] = x[g];
          Dr(x);
        });
      } else
        typeof require < "u" &&
          ((o = require("crypto")),
          o &&
            o.randomBytes &&
            s.setPRNG(function (u, f) {
              var g,
                x = o.randomBytes(f);
              for (g = 0; g < f; g++) u[g] = x[g];
              Dr(x);
            }));
    })();
})(
  typeof module < "u" && module.exports
    ? module.exports
    : (globalThis.nacl = globalThis.nacl || {})
);
const Vt =
  typeof module < "u" && module.exports ? module.exports : globalThis.nacl;
Vt.sign.keyPair.fromSeed,
  Vt.sign.detached,
  Vt.sign.detached.verify,
  Vt.randomBytes;
var as;
(function (s) {
  (s.InvalidPrefixByte = "nkeys: invalid prefix byte"),
    (s.InvalidKey = "nkeys: invalid key"),
    (s.InvalidPublicKey = "nkeys: invalid public key"),
    (s.InvalidSeedLen = "nkeys: invalid seed length"),
    (s.InvalidSeed = "nkeys: invalid seed"),
    (s.InvalidEncoding = "nkeys: invalid encoded key"),
    (s.InvalidSignature = "nkeys: signature verification failed"),
    (s.CannotSign = "nkeys: cannot sign, no private key available"),
    (s.PublicKeyOnly = "nkeys: no seed or private key available"),
    (s.InvalidChecksum = "nkeys: invalid checksum"),
    (s.SerializationError = "nkeys: serialization error"),
    (s.ApiError = "nkeys: api error"),
    (s.ClearedPair = "nkeys: pair is cleared");
})(as || (as = {}));
var cs;
(function (s) {
  (s[(s.Seed = 144)] = "Seed"),
    (s[(s.Private = 120)] = "Private"),
    (s[(s.Operator = 112)] = "Operator"),
    (s[(s.Server = 104)] = "Server"),
    (s[(s.Cluster = 16)] = "Cluster"),
    (s[(s.Account = 0)] = "Account"),
    (s[(s.User = 160)] = "User");
})(cs || (cs = {}));
function mn(s) {
  return s.authenticator
    ? s.authenticator
    : s.token
    ? _n(s.token)
    : s.user
    ? bn(s.user, s.pass)
    : gn();
}
function gn() {
  return () => {};
}
function bn(s, e) {
  return () => {
    const t = typeof s == "function" ? s() : s,
      r = typeof e == "function" ? e() : e;
    return { user: t, pass: r };
  };
}
function _n(s) {
  return () => ({ auth_token: typeof s == "function" ? s() : s });
}
function wn() {
  return {
    maxPingOut: 2,
    maxReconnectAttempts: 10,
    noRandomize: !1,
    pedantic: !1,
    pingInterval: bs,
    reconnect: !0,
    reconnectJitter: 100,
    reconnectJitterTLS: 1e3,
    reconnectTimeWait: gs,
    tls: void 0,
    verbose: !1,
    waitOnFirstConnect: !1,
    ignoreAuthErrorAbort: !1,
  };
}
function xn(s) {
  const e = `${Er}:${Ps()}`;
  if (
    ((s = s || { servers: [e] }),
    (s.servers = s.servers || []),
    typeof s.servers == "string" && (s.servers = [s.servers]),
    s.servers.length > 0 && s.port)
  )
    throw new z(
      "port and servers options are mutually exclusive",
      U.InvalidOption
    );
  s.servers.length === 0 && s.port && (s.servers = [`${Er}:${s.port}`]),
    s.servers && s.servers.length === 0 && (s.servers = [e]);
  const t = or(wn(), s);
  if ((s.user && s.token) || (s.authenticator && (s.token || s.user || s.pass)))
    throw z.errorForCode(U.BadAuthentication);
  if (
    ((t.authenticator = mn(t)),
    ["reconnectDelayHandler", "authenticator"].forEach((r) => {
      if (t[r] && typeof t[r] != "function")
        throw new z(`${r} option should be a function`, U.NotFunction);
    }),
    t.reconnectDelayHandler ||
      (t.reconnectDelayHandler = () => {
        let r = t.tls ? t.reconnectJitterTLS : t.reconnectJitter;
        return (
          r && (r++, (r = Math.floor(Math.random() * r))),
          t.reconnectTimeWait + r
        );
      }),
    t.inboxPrefix)
  )
    try {
      tt(t.inboxPrefix);
    } catch (r) {
      throw new z(r.message, U.ApiError);
    }
  if (t.resolve && typeof Os() != "function")
    throw new z("'resolve' is not supported on this client", U.InvalidOption);
  return t;
}
function $s() {
  return {
    key: {
      encode(s) {
        return s;
      },
      decode(s) {
        return s;
      },
    },
    value: {
      encode(s) {
        return s;
      },
      decode(s) {
        return s;
      },
    },
  };
}
function yn() {
  return {
    replicas: 1,
    history: 1,
    timeout: 2e3,
    maxBucketSize: -1,
    maxValueSize: -1,
    codec: $s(),
    storage: kr.File,
  };
}
const Wt = "KV-Operation",
  Fe = "KV_",
  us = "$KV",
  vn = /^[-/=.\w]+$/,
  Sn = /^[-/=.>*\w]+$/,
  En = /^[-\w]+$/;
function Rs(s) {
  if (s.startsWith(".") || s.endsWith(".") || !vn.test(s))
    throw new Error(`invalid key: ${s}`);
}
function An(s) {
  if (s.startsWith(".") || s.endsWith(".") || !Sn.test(s))
    throw new Error(`invalid key: ${s}`);
}
function kn(s) {
  if (s.startsWith(".") || s.endsWith("."))
    throw new Error(`invalid key: ${s}`);
  const e = s.split(".");
  let t = !1;
  for (let r = 0; r < e.length; r++)
    switch (e[r]) {
      case "*":
        t = !0;
        break;
      case ">":
        if (r !== e.length - 1) throw new Error(`invalid key: ${s}`);
        t = !0;
        break;
    }
  return t;
}
function Zt(s) {
  if (!En.test(s)) throw new Error(`invalid bucket name: ${s}`);
}
class Rt {
  jsm;
  js;
  stream;
  bucket;
  direct;
  codec;
  prefix;
  editPrefix;
  useJsPrefix;
  _prefixLen;
  constructor(e, t, r) {
    Zt(e),
      (this.jsm = t),
      (this.js = r),
      (this.bucket = e),
      (this.prefix = us),
      (this.editPrefix = ""),
      (this.useJsPrefix = !1),
      (this._prefixLen = 0);
  }
  static async create(e, t, r = {}) {
    const i = e,
      { ok: n, min: a } = i.nc.features.get($e.JS_KV);
    if (!n)
      return Promise.reject(
        new Error(`kv is only supported on servers ${a} or better`)
      );
    Zt(t);
    const h = r.timeout || 2e3;
    let m = i.opts || {};
    m = Object.assign(m, { timeout: h });
    const _ = await i.nc.jetstreamManager(m),
      O = new Rt(t, _, e);
    return await O.init(r), O;
  }
  static async bind(e, t, r = {}) {
    const n = await e.nc.jetstreamManager(),
      a = await n.streams.info(`${Fe}${t}`);
    Zt(a.config.name);
    const h = new Rt(t, n, e);
    return (
      Object.assign(h, a),
      (h.codec = r.codec || $s()),
      (h.direct = a.config.allow_direct ?? !1),
      h.initializePrefixes(a),
      h
    );
  }
  async init(e = {}) {
    const t = Object.assign(yn(), e);
    this.codec = t.codec;
    const r = {};
    (this.stream = r.name = e.streamName ?? this.bucketName()),
      (r.retention = Ar.Limits),
      (r.max_msgs_per_subject = t.history),
      t.maxBucketSize && (t.max_bytes = t.maxBucketSize),
      t.max_bytes && (r.max_bytes = t.max_bytes),
      (r.max_msg_size = t.maxValueSize),
      (r.storage = t.storage);
    const i = e.placementCluster ?? "";
    if (
      (i &&
        ((e.placement = {}),
        (e.placement.cluster = i),
        (e.placement.tags = [])),
      e.placement && (r.placement = e.placement),
      e.republish && (r.republish = e.republish),
      e.description && (r.description = e.description),
      e.mirror)
    ) {
      const I = Object.assign({}, e.mirror);
      I.name.startsWith(Fe) || (I.name = `${Fe}${I.name}`),
        (r.mirror = I),
        (r.mirror_direct = !0);
    } else if (e.sources) {
      const I = e.sources.map((N) => {
        const T = Object.assign({}, N);
        T.name.startsWith(Fe) || (T.name = `${Fe}${T.name}`);
      });
      r.sources = I;
    } else r.subjects = [this.subjectForBucket()];
    const n = this.js.nc,
      a = n.getServerVersion(),
      h = a ? Or(a, at("2.7.2")) >= 0 : !1;
    r.discard = h ? Tt.New : Tt.Old;
    const { ok: m, min: _ } = n.features.get($e.JS_ALLOW_DIRECT);
    if (!m && e.allow_direct === !0) {
      const I = a ? `${a.major}.${a.minor}.${a.micro}` : "unknown";
      return Promise.reject(
        new Error(
          `allow_direct is not available on server version ${I} - requires ${_}`
        )
      );
    }
    (e.allow_direct = typeof e.allow_direct == "boolean" ? e.allow_direct : m),
      (r.allow_direct = e.allow_direct),
      (this.direct = r.allow_direct),
      (r.num_replicas = t.replicas),
      t.ttl && (r.max_age = ge(t.ttl)),
      (r.allow_rollup_hdrs = !0);
    let O;
    try {
      (O = await this.jsm.streams.info(r.name)),
        !O.config.allow_direct && this.direct === !0 && (this.direct = !1);
    } catch (I) {
      if (I.message === "stream not found") O = await this.jsm.streams.add(r);
      else throw I;
    }
    this.initializePrefixes(O);
  }
  initializePrefixes(e) {
    (this._prefixLen = 0),
      (this.prefix = `$KV.${this.bucket}`),
      (this.useJsPrefix = this.js.opts.apiPrefix !== "$JS.API");
    const { mirror: t } = e.config;
    if (t) {
      let r = t.name;
      if (
        (r.startsWith(Fe) && (r = r.substring(Fe.length)),
        t.external && t.external.api !== "")
      ) {
        const i = t.name.substring(Fe.length);
        (this.useJsPrefix = !1),
          (this.prefix = `$KV.${i}`),
          (this.editPrefix = `${t.external.api}.$KV.${r}`);
      } else this.editPrefix = this.prefix;
    }
  }
  bucketName() {
    return this.stream ?? `${Fe}${this.bucket}`;
  }
  subjectForBucket() {
    return `${this.prefix}.${this.bucket}.>`;
  }
  subjectForKey(e, t = !1) {
    const r = [];
    return (
      t
        ? (this.useJsPrefix && r.push(this.js.apiPrefix),
          this.editPrefix !== ""
            ? r.push(this.editPrefix)
            : r.push(this.prefix))
        : this.prefix && r.push(this.prefix),
      r.push(e),
      r.join(".")
    );
  }
  fullKeyName(e) {
    return this.prefix !== ""
      ? `${this.prefix}.${e}`
      : `${us}.${this.bucket}.${e}`;
  }
  get prefixLen() {
    return (
      this._prefixLen === 0 && (this._prefixLen = this.prefix.length + 1),
      this._prefixLen
    );
  }
  encodeKey(e) {
    const t = [];
    for (const r of e.split("."))
      switch (r) {
        case ">":
        case "*":
          t.push(r);
          break;
        default:
          t.push(this.codec.key.encode(r));
          break;
      }
    return t.join(".");
  }
  decodeKey(e) {
    const t = [];
    for (const r of e.split("."))
      switch (r) {
        case ">":
        case "*":
          t.push(r);
          break;
        default:
          t.push(this.codec.key.decode(r));
          break;
      }
    return t.join(".");
  }
  validateKey = Rs;
  validateSearchKey = An;
  hasWildcards = kn;
  close() {
    return Promise.resolve();
  }
  dataLen(e, t) {
    const r = (t && t.get(He.MessageSizeHdr)) || "";
    return r !== "" ? parseInt(r, 10) : e.length;
  }
  smToEntry(e) {
    return {
      bucket: this.bucket,
      key: e.subject.substring(this.prefixLen),
      value: e.data,
      delta: 0,
      created: e.time,
      revision: e.seq,
      operation: e.header.get(Wt) || "PUT",
      length: this.dataLen(e.data, e.header),
    };
  }
  jmToEntry(e) {
    const t = this.decodeKey(e.subject.substring(this.prefixLen));
    return {
      bucket: this.bucket,
      key: t,
      value: e.data,
      created: new Date($r(e.info.timestampNanos)),
      revision: e.seq,
      operation: e.headers?.get(Wt) || "PUT",
      delta: e.info.pending,
      length: this.dataLen(e.data, e.headers),
    };
  }
  async create(e, t) {
    let r;
    try {
      const n = await this.put(e, t, { previousSeq: 0 });
      return Promise.resolve(n);
    } catch (n) {
      if (((r = n), n?.api_error?.err_code !== 10071)) return Promise.reject(n);
    }
    let i = 0;
    try {
      const n = await this.get(e);
      return n?.operation === "DEL" || n?.operation === "PURGE"
        ? ((i = n !== null ? n.revision : 0), this.update(e, t, i))
        : Promise.reject(r);
    } catch (n) {
      return Promise.reject(n);
    }
  }
  update(e, t, r) {
    if (r <= 0) throw new Error("version must be greater than 0");
    return this.put(e, t, { previousSeq: r });
  }
  async put(e, t, r = {}) {
    const i = this.encodeKey(e);
    this.validateKey(i);
    const n = {};
    if (r.previousSeq !== void 0) {
      const a = Qe();
      (n.headers = a),
        a.set("Nats-Expected-Last-Subject-Sequence", `${r.previousSeq}`);
    }
    try {
      return (await this.js.publish(this.subjectForKey(i, !0), t, n)).seq;
    } catch (a) {
      const h = a;
      return h.isJetStreamError()
        ? ((h.message = h.api_error?.description),
          (h.code = `${h.api_error?.code}`),
          Promise.reject(h))
        : Promise.reject(a);
    }
  }
  async get(e, t) {
    const r = this.encodeKey(e);
    this.validateKey(r);
    let i = { last_by_subj: this.subjectForKey(r) };
    t && t.revision > 0 && (i = { seq: t.revision });
    let n;
    try {
      this.direct
        ? (n = await this.jsm.direct.getMessage(this.bucketName(), i))
        : (n = await this.jsm.streams.getMessage(this.bucketName(), i));
      const a = this.smToEntry(n);
      return a.key !== r ? null : a;
    } catch (a) {
      if (a.code === U.JetStream404NoMessages) return null;
      throw a;
    }
  }
  purge(e) {
    return this._deleteOrPurge(e, "PURGE");
  }
  delete(e) {
    return this._deleteOrPurge(e, "DEL");
  }
  async purgeDeletes(e = 30 * 60 * 1e3) {
    const t = me(),
      r = [],
      i = await this.watch({
        key: ">",
        initializedFn: () => {
          t.resolve();
        },
      });
    (async () => {
      for await (const m of i)
        (m.operation === "DEL" || m.operation === "PURGE") && r.push(m);
    })().then(),
      await t,
      i.stop();
    const n = Date.now() - e,
      a = r.map((m) => {
        const _ = this.subjectForKey(m.key);
        return m.created.getTime() >= n
          ? this.jsm.streams.purge(this.stream, { filter: _, keep: 1 })
          : this.jsm.streams.purge(this.stream, { filter: _, keep: 0 });
      }),
      h = await Promise.all(a);
    return (
      h.unshift({ success: !0, purged: 0 }),
      h.reduce((m, _) => ((m.purged += _.purged), m))
    );
  }
  async _deleteOrPurge(e, t) {
    if (!this.hasWildcards(e)) return this._doDeleteOrPurge(e, t);
    const r = await this.keys(e),
      i = [];
    for await (const n of r)
      i.push(this._doDeleteOrPurge(n, t)),
        i.length === 100 && (await Promise.all(i), (i.length = 0));
    i.length > 0 && (await Promise.all(i));
  }
  async _doDeleteOrPurge(e, t) {
    const r = this.encodeKey(e);
    this.validateKey(r);
    const i = Qe();
    i.set(Wt, t),
      t === "PURGE" && i.set(He.RollupHdr, He.RollupValueSubject),
      await this.js.publish(this.subjectForKey(r, !0), Pe, { headers: i });
  }
  _buildCC(e, t = !1, r = {}) {
    const i = this.encodeKey(e);
    return (
      this.validateSearchKey(e),
      Object.assign(
        {
          deliver_policy: t ? Te.All : Te.LastPerSubject,
          ack_policy: ve.None,
          filter_subject: this.fullKeyName(i),
          flow_control: !0,
          idle_heartbeat: ge(5 * 1e3),
        },
        r
      )
    );
  }
  remove(e) {
    return this.purge(e);
  }
  async history(e = {}) {
    const t = e.key ?? ">",
      r = new Ce(),
      i = {};
    i.headers_only = e.headers_only || !1;
    let n;
    n = () => {
      r.stop();
    };
    let a = 0;
    const h = this._buildCC(t, !0, i),
      m = h.filter_subject,
      _ = rt(h);
    _.bindStream(this.stream),
      _.orderedConsumer(),
      _.callback((I, N) => {
        if (I) {
          r.stop(I);
          return;
        }
        if (N) {
          const T = this.jmToEntry(N);
          r.push(T),
            r.received++,
            ((n && a > 0 && r.received >= a) || N.info.pending === 0) &&
              (r.push(n), (n = void 0));
        }
      });
    const O = await this.js.subscribe(m, _);
    if (n) {
      const {
          info: { last: I },
        } = O,
        N = I.num_pending + I.delivered.consumer_seq;
      if (N === 0 || r.received >= N)
        try {
          n();
        } catch (T) {
          r.stop(T);
        } finally {
          n = void 0;
        }
      else a = N;
    }
    return (
      (r._data = O),
      r.iterClosed.then(() => {
        O.unsubscribe();
      }),
      O.closed
        .then(() => {
          r.stop();
        })
        .catch((I) => {
          r.stop(I);
        }),
      r
    );
  }
  async watch(e = {}) {
    const t = e.key ?? ">",
      r = new Ce(),
      i = {};
    i.headers_only = e.headers_only || !1;
    let n = e.initializedFn,
      a = 0;
    const h = this._buildCC(t, !1, i),
      m = h.filter_subject,
      _ = rt(h);
    _.bindStream(this.stream),
      _.orderedConsumer(),
      _.callback((I, N) => {
        if (I) {
          r.stop(I);
          return;
        }
        if (N) {
          const T = this.jmToEntry(N);
          r.push(T),
            r.received++,
            n &&
              ((a > 0 && r.received >= a) || N.info.pending === 0) &&
              (r.push(n), (n = void 0));
        }
      });
    const O = await this.js.subscribe(m, _);
    if (n) {
      const {
          info: { last: I },
        } = O,
        N = I.num_pending + I.delivered.consumer_seq;
      if (N === 0 || r.received >= N)
        try {
          n();
        } catch (T) {
          r.stop(T);
        } finally {
          n = void 0;
        }
      else a = N;
    }
    return (
      (r._data = O),
      r.iterClosed.then(() => {
        O.unsubscribe();
      }),
      O.closed
        .then(() => {
          r.stop();
        })
        .catch((I) => {
          r.stop(I);
        }),
      r
    );
  }
  async keys(e = ">") {
    const t = new Ce(),
      r = this._buildCC(e, !1, { headers_only: !0 }),
      i = r.filter_subject,
      n = rt(r);
    n.bindStream(this.stream), n.orderedConsumer();
    const a = await this.js.subscribe(i, n);
    return (
      (async () => {
        for await (const m of a) {
          const _ = m.headers?.get(Wt);
          if (_ !== "DEL" && _ !== "PURGE") {
            const O = this.decodeKey(m.subject.substring(this.prefixLen));
            t.push(O);
          }
          m.info.pending === 0 && a.unsubscribe();
        }
      })()
        .then(() => {
          t.stop();
        })
        .catch((m) => {
          t.stop(m);
        }),
      a.info.last.num_pending === 0 && a.unsubscribe(),
      t
    );
  }
  purgeBucket(e) {
    return this.jsm.streams.purge(this.bucketName(), e);
  }
  destroy() {
    return this.jsm.streams.delete(this.bucketName());
  }
  async status() {
    const t = this.js.nc.info?.cluster ?? "",
      r = this.bucketName(),
      i = await this.jsm.streams.info(r);
    return new Bs(i, t);
  }
}
class Bs {
  si;
  cluster;
  constructor(e, t = "") {
    (this.si = e), (this.cluster = t);
  }
  get bucket() {
    return this.si.config.name.startsWith(Fe)
      ? this.si.config.name.substring(Fe.length)
      : this.si.config.name;
  }
  get values() {
    return this.si.state.messages;
  }
  get history() {
    return this.si.config.max_msgs_per_subject;
  }
  get ttl() {
    return $r(this.si.config.max_age);
  }
  get bucket_location() {
    return this.cluster;
  }
  get backingStore() {
    return this.si.config.storage;
  }
  get storage() {
    return this.si.config.storage;
  }
  get replicas() {
    return this.si.config.num_replicas;
  }
  get description() {
    return this.si.config.description ?? "";
  }
  get maxBucketSize() {
    return this.si.config.max_bytes;
  }
  get maxValueSize() {
    return this.si.config.max_msg_size;
  }
  get max_bytes() {
    return this.si.config.max_bytes;
  }
  get placement() {
    return this.si.config.placement || { cluster: "", tags: [] };
  }
  get placementCluster() {
    return this.si.config.placement?.cluster ?? "";
  }
  get republish() {
    return this.si.config.republish ?? { src: "", dest: "" };
  }
  get streamInfo() {
    return this.si;
  }
  get size() {
    return this.si.state.bytes;
  }
}
const Rr = "OBJ_",
  hs = "SHA-256=";
function Pn(s) {
  return Zt(s), `${Rr}${s}`;
}
function On(s) {
  return s.startsWith(Rr) ? s.substring(4) : s;
}
class Cr {
  si;
  backingStore;
  constructor(e) {
    (this.si = e), (this.backingStore = "JetStream");
  }
  get bucket() {
    return On(this.si.config.name);
  }
  get description() {
    return this.si.config.description ?? "";
  }
  get ttl() {
    return this.si.config.max_age;
  }
  get storage() {
    return this.si.config.storage;
  }
  get replicas() {
    return this.si.config.num_replicas;
  }
  get sealed() {
    return this.si.config.sealed;
  }
  get size() {
    return this.si.state.bytes;
  }
  get streamInfo() {
    return this.si;
  }
}
function Kt(s) {
  if (s === void 0) return;
  const { domain: e } = s;
  if (e === void 0) return s;
  const t = Object.assign({}, s);
  if ((delete t.domain, e === "")) return t;
  if (t.external) throw new Error("domain and external are both set");
  return (t.external = { api: `$JS.${e}.API` }), t;
}
class In extends Lt {
  constructor(e, t) {
    super(e, t);
  }
  async add(e = {}) {
    Ne(e.name), (e.mirror = Kt(e.mirror)), (e.sources = e.sources?.map(Kt));
    const r = await this._request(`${this.prefix}.STREAM.CREATE.${e.name}`, e);
    return this._fixInfo(r), r;
  }
  async delete(e) {
    return (
      Ne(e), (await this._request(`${this.prefix}.STREAM.DELETE.${e}`)).success
    );
  }
  async update(e, t = {}) {
    if (typeof e == "object") {
      const h = e;
      (e = h.name),
        (t = h),
        console.trace(
          "\x1B[33m >> streams.update(config: StreamConfig) api changed to streams.update(name: string, config: StreamUpdateConfig) - this shim will be removed - update your code.  \x1B[0m"
        );
    }
    Ne(e);
    const r = await this.info(e),
      i = Object.assign(r.config, t);
    (i.mirror = Kt(i.mirror)), (i.sources = i.sources?.map(Kt));
    const a = await this._request(`${this.prefix}.STREAM.UPDATE.${e}`, i);
    return this._fixInfo(a), a;
  }
  async info(e, t) {
    Ne(e);
    const r = `${this.prefix}.STREAM.INFO.${e}`;
    let n = await this._request(r, t),
      { total: a, limit: h } = n,
      m = n.state.subjects
        ? Object.getOwnPropertyNames(n.state.subjects).length
        : 1;
    if (a && a > m) {
      const _ = [n],
        O = t || {};
      let I = 0;
      for (; a > m; ) {
        I++, (O.offset = h * I);
        const T = await this._request(r, O);
        (a = T.total), _.push(T);
        const H = Object.getOwnPropertyNames(T.state.subjects).length;
        if (((m += H), H < h)) break;
      }
      let N = {};
      for (let T = 0; T < _.length; T++)
        (n = _[T]),
          n.state.subjects && (N = Object.assign(N, n.state.subjects));
      (n.offset = 0), (n.total = 0), (n.limit = 0), (n.state.subjects = N);
    }
    return this._fixInfo(n), n;
  }
  list(e = "") {
    const t = e?.length ? { subject: e } : {},
      r = (n) => {
        const a = n;
        return (
          a.streams.forEach((h) => {
            this._fixInfo(h);
          }),
          a.streams
        );
      },
      i = `${this.prefix}.STREAM.LIST`;
    return new Ot(i, r, this, t);
  }
  _fixInfo(e) {
    (e.config.sealed = e.config.sealed || !1),
      (e.config.deny_delete = e.config.deny_delete || !1),
      (e.config.deny_purge = e.config.deny_purge || !1),
      (e.config.allow_rollup_hdrs = e.config.allow_rollup_hdrs || !1);
  }
  async purge(e, t) {
    if (t) {
      const { keep: i, seq: n } = t;
      if (typeof i == "number" && typeof n == "number")
        throw new Error("can specify one of keep or seq");
    }
    return Ne(e), await this._request(`${this.prefix}.STREAM.PURGE.${e}`, t);
  }
  async deleteMessage(e, t, r = !0) {
    Ne(e);
    const i = { seq: t };
    return (
      r || (i.no_erase = !0),
      (await this._request(`${this.prefix}.STREAM.MSG.DELETE.${e}`, i)).success
    );
  }
  async getMessage(e, t) {
    Ne(e);
    const i = await this._request(`${this.prefix}.STREAM.MSG.GET.${e}`, t);
    return new Bn(i);
  }
  find(e) {
    return this.findStream(e);
  }
  listKvs() {
    const e = (r) => {
        const n = r.streams.filter((m) => m.config.name.startsWith(Fe));
        n.forEach((m) => {
          this._fixInfo(m);
        });
        let a = "";
        return (
          n.length && (a = this.nc.info?.cluster ?? ""),
          n.map((m) => new Bs(m, a))
        );
      },
      t = `${this.prefix}.STREAM.LIST`;
    return new Ot(t, e, this);
  }
  listObjectStores() {
    const e = (r) => {
        const n = r.streams.filter((h) => h.config.name.startsWith(Rr));
        return (
          n.forEach((h) => {
            this._fixInfo(h);
          }),
          n.map((h) => new Cr(h))
        );
      },
      t = `${this.prefix}.STREAM.LIST`;
    return new Ot(t, e, this);
  }
  names(e = "") {
    const t = e?.length ? { subject: e } : {},
      r = (n) => n.streams,
      i = `${this.prefix}.STREAM.NAMES`;
    return new Ot(i, r, this, t);
  }
}
class Nn extends Lt {
  streams;
  consumers;
  direct;
  constructor(e, t) {
    super(e, t),
      (this.streams = new In(e, t)),
      (this.consumers = new Es(e, t)),
      (this.direct = new dn(e, t));
  }
  async getAccountInfo() {
    return await this._request(`${this.prefix}.INFO`);
  }
  advisories() {
    const e = new Ce();
    return (
      this.nc.subscribe("$JS.EVENT.ADVISORY.>", {
        callback: (t, r) => {
          if (t) throw t;
          try {
            const i = this.parseJsResponse(r),
              n = i.type.split("."),
              a = n[n.length - 1];
            e.push({ kind: a, data: i });
          } catch (i) {
            e.stop(i);
          }
        },
      }),
      e
    );
  }
}
var ot;
(function (s) {
  (s.MsgIdHdr = "Nats-Msg-Id"),
    (s.ExpectedStreamHdr = "Nats-Expected-Stream"),
    (s.ExpectedLastSeqHdr = "Nats-Expected-Last-Sequence"),
    (s.ExpectedLastMsgIdHdr = "Nats-Expected-Last-Msg-Id"),
    (s.ExpectedLastSubjectSequenceHdr = "Nats-Expected-Last-Subject-Sequence");
})(ot || (ot = {}));
class Sr {
  info;
  hdrs;
  constructor(e) {
    this.info = e;
  }
  get name() {
    return this.info.name;
  }
  get description() {
    return this.info.description ?? "";
  }
  get headers() {
    return (
      this.hdrs || (this.hdrs = et.fromRecord(this.info.headers || {})),
      this.hdrs
    );
  }
  get options() {
    return this.info.options;
  }
  get bucket() {
    return this.info.bucket;
  }
  get chunks() {
    return this.info.chunks;
  }
  get deleted() {
    return this.info.deleted ?? !1;
  }
  get digest() {
    return this.info.digest;
  }
  get mtime() {
    return this.info.mtime;
  }
  get nuid() {
    return this.info.nuid;
  }
  get size() {
    return this.info.size;
  }
}
function ls(s) {
  const e = {
    name: s.name,
    description: s.description ?? "",
    options: s.options,
  };
  if (s.headers) {
    const t = s.headers;
    e.headers = t.toRecord();
  }
  return e;
}
function Cn(s) {
  return {
    name: s.name,
    description: s.description,
    headers: s.headers,
    options: s.options,
  };
}
function jn() {
  return new ReadableStream({
    pull(s) {
      s.enqueue(new Uint8Array(0)), s.close();
    },
  });
}
class jt {
  jsm;
  js;
  stream;
  name;
  constructor(e, t, r) {
    (this.name = e), (this.jsm = t), (this.js = r);
  }
  _sanitizeName(e) {
    if (!e || e.length === 0)
      return { name: e, error: new Error("name cannot be empty") };
    e = e.replace(/[. ]/g, "_");
    let t;
    try {
      Rs(e);
    } catch (r) {
      t = r;
    }
    return { name: e, error: t };
  }
  async info(e) {
    const t = await this.rawInfo(e);
    return t ? new Sr(t) : null;
  }
  async list() {
    const e = [],
      t = await this.watch({ ignoreDeletes: !0, includeHistory: !0 });
    for await (const r of t) {
      if (r === null) break;
      e.push(r);
    }
    return Promise.resolve(e);
  }
  async rawInfo(e) {
    const { name: t, error: r } = this._sanitizeName(e);
    if (r) return Promise.reject(r);
    const i = this._metaSubject(t);
    try {
      const n = await this.jsm.streams.getMessage(this.stream, {
        last_by_subj: i,
      });
      return Je().decode(n.data);
    } catch (n) {
      return n.code === "404" ? null : Promise.reject(n);
    }
  }
  async _si(e) {
    try {
      return await this.jsm.streams.info(this.stream, e);
    } catch (t) {
      return t.code === "404" ? null : Promise.reject(t);
    }
  }
  async seal() {
    let e = await this._si();
    return e === null
      ? Promise.reject(new Error("object store not found"))
      : ((e.config.sealed = !0),
        (e = await this.jsm.streams.update(this.stream, e.config)),
        Promise.resolve(new Cr(e)));
  }
  async status(e) {
    const t = await this._si(e);
    return t === null
      ? Promise.reject(new Error("object store not found"))
      : Promise.resolve(new Cr(t));
  }
  destroy() {
    return this.jsm.streams.delete(this.stream);
  }
  async _put(e, t, r) {
    const i = this.js;
    (r = r || { timeout: i.timeout }), (r.timeout = r.timeout || 1e3);
    const { timeout: n } = r,
      a = i.nc.info?.max_payload || 1024;
    (e = e || {}), (e.options = e.options || {});
    let h = e.options?.max_chunk_size || 128 * 1024;
    (h = h > a ? a : h), (e.options.max_chunk_size = h);
    const m = await this.info(e.name),
      { name: _, error: O } = this._sanitizeName(e.name);
    if (O) return Promise.reject(O);
    const I = cr.next(),
      N = this._chunkSubject(I),
      T = this._metaSubject(_),
      H = Object.assign(
        { bucket: this.name, nuid: I, size: 0, chunks: 0 },
        ls(e)
      ),
      q = me(),
      K = [],
      J = new Ut();
    try {
      const D = t ? t.getReader() : null,
        ce = new os();
      for (;;) {
        const { done: Se, value: le } = D
          ? await D.read()
          : { done: !0, value: void 0 };
        if (Se) {
          if (J.size() > 0) {
            const B = J.drain();
            ce.update(B),
              H.chunks++,
              (H.size += B.length),
              K.push(this.js.publish(N, B, { timeout: n }));
          }
          H.mtime = new Date().toISOString();
          const Y = ce.digest("base64"),
            X = Y.length % 3,
            re = X > 0 ? "=".repeat(X) : "";
          (H.digest = `${hs}${Y}${re}`), (H.deleted = !1);
          const se = Qe();
          se.set(He.RollupHdr, He.RollupValueSubject),
            K.push(
              this.js.publish(T, Je().encode(H), { headers: se, timeout: n })
            ),
            m &&
              K.push(
                this.jsm.streams.purge(this.stream, {
                  filter: `$O.${this.name}.C.${m.nuid}`,
                })
              ),
            await Promise.all(K),
            q.resolve(new Sr(H));
          break;
        }
        if (le)
          for (J.fill(le); J.size() > h; ) {
            H.chunks++, (H.size += h);
            const Y = J.drain(e.options.max_chunk_size);
            ce.update(Y), K.push(this.js.publish(N, Y, { timeout: n }));
          }
      }
    } catch (D) {
      await this.jsm.streams.purge(this.stream, { filter: N }), q.reject(D);
    }
    return q;
  }
  put(e, t, r) {
    return e?.options?.link
      ? Promise.reject(
          new Error("link cannot be set when putting the object in bucket")
        )
      : this._put(e, t, r);
  }
  async get(e) {
    const t = await this.rawInfo(e);
    if (t === null || t.deleted) return Promise.resolve(null);
    if (t.options && t.options.link) {
      const O = t.options.link.name || "";
      if (O === "") throw new Error("link is a bucket");
      return (await jt.create(this.js, t.options.link.bucket)).get(O);
    }
    const r = me(),
      i = { info: new Sr(t), error: r };
    if (t.size === 0)
      return (i.data = jn()), r.resolve(null), Promise.resolve(i);
    let n;
    const a = rt();
    a.orderedConsumer();
    const h = new os(),
      m = `$O.${this.name}.C.${t.nuid}`,
      _ = await this.js.subscribe(m, a);
    return (
      (async () => {
        for await (const O of _)
          if (
            (O.data.length > 0 && (h.update(O.data), n.enqueue(O.data)),
            O.info.pending === 0)
          ) {
            const I = h.digest("base64"),
              N = I.length % 3,
              T = N > 0 ? "=".repeat(N) : "",
              H = `${hs}${I}${T}`;
            H !== t.digest
              ? n.error(
                  new Error(
                    `received a corrupt object, digests do not match received: ${t.digest} calculated ${H}`
                  )
                )
              : n.close(),
              _.unsubscribe();
          }
      })()
        .then(() => {
          r.resolve();
        })
        .catch((O) => {
          n.error(O), r.reject(O);
        }),
      (i.data = new ReadableStream({
        start(O) {
          n = O;
        },
        cancel() {
          _.unsubscribe();
        },
      })),
      i
    );
  }
  linkStore(e, t) {
    if (!(t instanceof jt)) return Promise.reject("bucket required");
    const r = t,
      { name: i, error: n } = this._sanitizeName(e);
    if (n) return Promise.reject(n);
    const a = { name: i, options: { link: { bucket: r.name } } };
    return this._put(a, null);
  }
  async link(e, t) {
    if (t.deleted) return Promise.reject(new Error("object is deleted"));
    const { name: r, error: i } = this._sanitizeName(e);
    if (i) return Promise.reject(i);
    if (this.name === t.bucket) {
      const h = Object.assign({}, Cn(t));
      h.name = r;
      try {
        return await this.update(t.name, h), await this.info(r);
      } catch (m) {
        return Promise.reject(m);
      }
    }
    const n = { bucket: t.bucket, name: t.name },
      a = { name: r, options: { link: n } };
    return this._put(a, null);
  }
  async delete(e) {
    const t = await this.rawInfo(e);
    if (t === null) return Promise.resolve({ purged: 0, success: !1 });
    (t.deleted = !0), (t.size = 0), (t.chunks = 0), (t.digest = "");
    const r = Je(),
      i = Qe();
    return (
      i.set(He.RollupHdr, He.RollupValueSubject),
      await this.js.publish(this._metaSubject(t.name), r.encode(t), {
        headers: i,
      }),
      this.jsm.streams.purge(this.stream, {
        filter: this._chunkSubject(t.nuid),
      })
    );
  }
  async update(e, t = {}) {
    const r = await this.rawInfo(e);
    if (r === null) return Promise.reject(new Error("object not found"));
    if (r.deleted)
      return Promise.reject(
        new Error("cannot update meta for a deleted object")
      );
    t.name = t.name ?? r.name;
    const { name: i, error: n } = this._sanitizeName(t.name);
    if (n) return Promise.reject(n);
    if (e !== t.name) {
      const m = await this.info(t.name);
      if (m && !m.deleted)
        return Promise.reject(
          new Error("an object already exists with that name")
        );
    }
    t.name = i;
    const a = Object.assign({}, r, ls(t)),
      h = Je();
    return this.js.publish(this._metaSubject(a.name), h.encode(a));
  }
  async watch(e = {}) {
    (e.includeHistory = e.includeHistory ?? !1),
      (e.ignoreDeletes = e.ignoreDeletes ?? !1);
    let t = !1;
    const r = new Ce(),
      i = this._metaSubjectAll();
    try {
      await this.jsm.streams.getMessage(this.stream, { last_by_subj: i });
    } catch (m) {
      m.code === "404" ? (r.push(null), (t = !0)) : r.stop(m);
    }
    const n = Je(),
      a = rt();
    a.orderedConsumer(),
      e.includeHistory ? a.deliverLastPerSubject() : ((t = !0), a.deliverNew()),
      a.callback((m, _) => {
        if (m) {
          r.stop(m);
          return;
        }
        if (_ !== null) {
          const O = n.decode(_.data);
          (O.deleted && e.ignoreDeletes === !0) || r.push(O),
            _.info?.pending === 0 && !t && ((t = !0), r.push(null));
        }
      });
    const h = await this.js.subscribe(i, a);
    return (
      (r._data = h),
      r.iterClosed.then(() => {
        h.unsubscribe();
      }),
      h.closed
        .then(() => {
          r.stop();
        })
        .catch((m) => {
          r.stop(m);
        }),
      r
    );
  }
  _chunkSubject(e) {
    return `$O.${this.name}.C.${e}`;
  }
  _metaSubject(e) {
    return `$O.${this.name}.M.${Ct.encode(e)}`;
  }
  _metaSubjectAll() {
    return `$O.${this.name}.M.>`;
  }
  async init(e = {}) {
    try {
      this.stream = Pn(this.name);
    } catch (r) {
      return Promise.reject(r);
    }
    const t = Object.assign({}, e);
    (t.name = this.stream),
      (t.allow_rollup_hdrs = !0),
      (t.discard = Tt.New),
      (t.subjects = [`$O.${this.name}.C.>`, `$O.${this.name}.M.>`]),
      e.placement && (t.placement = e.placement);
    try {
      await this.jsm.streams.info(t.name);
    } catch (r) {
      r.message === "stream not found" && (await this.jsm.streams.add(t));
    }
  }
  static async create(e, t, r = {}) {
    console.log("FROM ESM");
    const i = e,
      { ok: n, min: a } = i.nc.features.get($e.JS_OBJECTSTORE);
    if (!n)
      return Promise.reject(
        new Error(`objectstore is only supported on servers ${a} or better`)
      );
    let h = i.opts || {};
    const m = h.timeout || 2e3;
    h = Object.assign(h, { timeout: m });
    const _ = await i.nc.jetstreamManager(h),
      O = new jt(t, _, e);
    return await O.init(r), Promise.resolve(O);
  }
}
class Mn {
  js;
  constructor(e) {
    this.js = e;
  }
  kv(e, t = {}) {
    return t.bindOnly ? Rt.bind(this.js, e) : Rt.create(this.js, e, t);
  }
  os(e, t = {}) {
    return Gn(this.js.nc), jt.create(this.js, e, t);
  }
}
class Br extends Lt {
  api;
  constructor(e, t) {
    super(e, t), (this.api = new Es(e, t));
  }
  get apiPrefix() {
    return this.prefix;
  }
  get views() {
    return new Mn(this);
  }
  async publish(e, t = Pe, r) {
    (r = r || {}), (r.expect = r.expect || {});
    const i = r?.headers || Qe();
    r &&
      (r.msgID && i.set(ot.MsgIdHdr, r.msgID),
      r.expect.lastMsgID && i.set(ot.ExpectedLastMsgIdHdr, r.expect.lastMsgID),
      r.expect.streamName && i.set(ot.ExpectedStreamHdr, r.expect.streamName),
      typeof r.expect.lastSequence == "number" &&
        i.set(ot.ExpectedLastSeqHdr, `${r.expect.lastSequence}`),
      typeof r.expect.lastSubjectSequence == "number" &&
        i.set(
          ot.ExpectedLastSubjectSequenceHdr,
          `${r.expect.lastSubjectSequence}`
        ));
    const n = r.timeout || this.timeout,
      a = {};
    n && (a.timeout = n), r && (a.headers = i);
    let { retries: h, retry_delay: m } = r;
    (h = h || 1), (m = m || 250);
    let _;
    for (let I = 0; I < h; I++)
      try {
        _ = await this.nc.request(e, t, a);
        break;
      } catch (N) {
        if (N.code === "503" && I + 1 < h) await Tr(m);
        else throw N;
      }
    const O = this.parseJsResponse(_);
    if (O.stream === "") throw z.errorForCode(U.JetStreamInvalidAck);
    return (O.duplicate = O.duplicate ? O.duplicate : !1), O;
  }
  async pull(e, t, r = 0) {
    Ne(e), _t(t);
    let i = this.timeout;
    r > i && (i = r), (r = r < 0 ? 0 : ge(r));
    const n = { batch: 1, no_wait: r === 0, expires: r },
      a = await this.nc.request(
        `${this.prefix}.CONSUMER.MSG.NEXT.${e}.${t}`,
        this.jc.encode(n),
        { noMux: !0, timeout: i }
      ),
      h = wt(a);
    if (h) throw h;
    return sr(a);
  }
  fetch(e, t, r = {}) {
    Ne(e), _t(t);
    let i = null;
    const n = (r.max_bytes ?? 0) > 0;
    let a = 0;
    const h = n ? r.max_bytes : 0;
    let m = null;
    const _ = {};
    if (((_.batch = r.batch || 1), h)) {
      const J = this.nc.features.get($e.JS_PULL_MAX_BYTES);
      if (!J.ok)
        throw new Error(
          `max_bytes is only supported on servers ${J.min} or better`
        );
      _.max_bytes = h;
    }
    (_.no_wait = r.no_wait || !1), _.no_wait && _.expires && (_.expires = 0);
    const O = r.expires || 0;
    if ((O && (_.expires = ge(O)), O === 0 && _.no_wait === !1))
      throw new Error("expires or no_wait is required");
    const I = r.idle_heartbeat || 0;
    I &&
      ((_.idle_heartbeat = ge(I)),
      r.delay_heartbeat === !0 && (_.idle_heartbeat = ge(I * 4)));
    const N = new Ce(),
      T = _.batch;
    let H = 0;
    (N.protocolFilterFn = (J, D = !1) => (Xr(J.msg) ? (m?.work(), !1) : !0)),
      (N.dispatchedFn = (J) => {
        if (J) {
          if ((n && (a += J.data.length), H++, i && J.info.pending === 0))
            return;
          ((N.getPending() === 1 && J.info.pending === 0) ||
            T === H ||
            (h > 0 && a >= h)) &&
            N.stop();
        }
      });
    const q = tt(this.nc.options.inboxPrefix),
      K = this.nc.subscribe(q, {
        max: r.batch,
        callback: (J, D) => {
          J === null && (J = wt(D)),
            J !== null
              ? (i && (i.cancel(), (i = null)),
                ei(J) ? N.stop(Fs(J) === null ? void 0 : J) : N.stop(J))
              : (m?.work(), N.received++, N.push(sr(D)));
        },
      });
    return (
      O &&
        ((i = ar(O)),
        i.catch(() => {
          K.isClosed() || (K.drain().catch(() => {}), (i = null)),
            m && m.cancel();
        })),
      (async () => {
        try {
          I &&
            (m = new js(
              I,
              (J) => (
                N.push(() => {
                  N.err = new z(
                    `${Ge.IdleHeartbeatMissed}: ${J}`,
                    U.JetStreamIdleHeartBeat
                  );
                }),
                !0
              )
            ));
        } catch {}
        await K.closed,
          i !== null && (i.cancel(), (i = null)),
          m && m.cancel(),
          N.stop();
      })().catch(),
      this.nc.publish(
        `${this.prefix}.CONSUMER.MSG.NEXT.${e}.${t}`,
        this.jc.encode(_),
        { reply: q }
      ),
      N
    );
  }
  async pullSubscribe(e, t = rt()) {
    const r = await this._processOptions(e, t);
    if (r.ordered) throw new Error("pull subscribers cannot be be ordered");
    if ((r.attached || (r.config.filter_subject = e), r.config.deliver_subject))
      throw new Error(
        "consumer info specifies deliver_subject - pull consumers cannot have deliver_subject set"
      );
    const i = r.config.ack_policy;
    if (i === ve.None || i === ve.All)
      throw new Error("ack policy for pull consumers must be explicit");
    const n = this._buildTypedSubscriptionOpts(r),
      a = new Un(this, r.deliver, n);
    a.info = r;
    try {
      await this._maybeCreateConsumer(r);
    } catch (h) {
      throw (a.unsubscribe(), h);
    }
    return a;
  }
  async subscribe(e, t = rt()) {
    const r = await this._processOptions(e, t);
    if (!r.isBind && !r.config.deliver_subject)
      throw new Error("push consumer requires deliver_subject");
    const i = this._buildTypedSubscriptionOpts(r),
      n = new Us(this, r.deliver, i);
    n.info = r;
    try {
      await this._maybeCreateConsumer(r);
    } catch (a) {
      throw (n.unsubscribe(), a);
    }
    return n._maybeSetupHbMonitoring(), n;
  }
  async _processOptions(e, t = rt()) {
    const r = is(t) ? t.getOpts() : t;
    if (
      ((r.isBind = is(t) ? t.isBind : !1),
      (r.flow_control = {
        heartbeat_count: 0,
        fc_count: 0,
        consumer_restarts: 0,
      }),
      r.ordered)
    ) {
      if (
        ((r.ordered_consumer_sequence = { stream_seq: 0, delivery_seq: 0 }),
        r.config.ack_policy !== ve.NotSet && r.config.ack_policy !== ve.None)
      )
        throw new z(
          "ordered consumer: ack_policy can only be set to 'none'",
          U.ApiError
        );
      if (r.config.durable_name && r.config.durable_name.length > 0)
        throw new z("ordered consumer: durable_name cannot be set", U.ApiError);
      if (r.config.deliver_subject && r.config.deliver_subject.length > 0)
        throw new z(
          "ordered consumer: deliver_subject cannot be set",
          U.ApiError
        );
      if (r.config.max_deliver !== void 0 && r.config.max_deliver > 1)
        throw new z("ordered consumer: max_deliver cannot be set", U.ApiError);
      if (r.config.deliver_group && r.config.deliver_group.length > 0)
        throw new z(
          "ordered consumer: deliver_group cannot be set",
          U.ApiError
        );
      (r.config.deliver_subject = tt(this.nc.options.inboxPrefix)),
        (r.config.ack_policy = ve.None),
        (r.config.max_deliver = 1),
        (r.config.flow_control = !0),
        (r.config.idle_heartbeat = r.config.idle_heartbeat || ge(5e3)),
        (r.config.ack_wait = ge(22 * 60 * 60 * 1e3)),
        (r.config.mem_storage = !0),
        (r.config.num_replicas = 1);
    }
    if (
      (r.config.ack_policy === ve.NotSet && (r.config.ack_policy = ve.All),
      (r.api = this),
      (r.config = r.config || {}),
      (r.stream = r.stream ? r.stream : await this.findStream(e)),
      (r.attached = !1),
      r.config.durable_name)
    )
      try {
        const i = await this.api.info(r.stream, r.config.durable_name);
        if (i) {
          if (i.config.filter_subject && i.config.filter_subject !== e)
            throw new Error("subject does not match consumer");
          const n = r.config.deliver_group ?? "";
          if (n === "" && i.push_bound === !0)
            throw new Error("duplicate subscription");
          const a = i.config.deliver_group ?? "";
          if (n !== a)
            throw a === ""
              ? new Error("durable requires no queue group")
              : new Error(`durable requires queue group '${a}'`);
          (r.last = i),
            (r.config = i.config),
            (r.attached = !0),
            r.config.durable_name || (r.name = i.name);
        }
      } catch (i) {
        if (i.code !== "404") throw i;
      }
    return (
      r.attached || (r.config.filter_subject = e),
      (r.deliver = r.config.deliver_subject || tt(this.nc.options.inboxPrefix)),
      r
    );
  }
  _buildTypedSubscriptionOpts(e) {
    const t = {};
    return (
      (t.adapter = Fn(e.callbackFn === void 0)),
      (t.ingestionFilterFn = Br.ingestionFn(e.ordered)),
      (t.protocolFilterFn = (r, i = !1) => {
        const n = r;
        return Pr(n.msg) ? (i || n.msg.respond(), !1) : !0;
      }),
      !e.mack && e.config.ack_policy !== ve.None && (t.dispatchedFn = Dn),
      e.callbackFn && (t.callback = e.callbackFn),
      (t.max = e.max || 0),
      (t.queue = e.queue),
      t
    );
  }
  async _maybeCreateConsumer(e) {
    if (e.attached) return;
    if (e.isBind)
      throw new Error(
        `unable to bind - durable consumer ${e.config.durable_name} doesn't exist in ${e.stream}`
      );
    e.config = Object.assign(
      {
        deliver_policy: Te.All,
        ack_policy: ve.Explicit,
        ack_wait: ge(30 * 1e3),
        replay_policy: xt.Instant,
      },
      e.config
    );
    const t = await this.api.add(e.stream, e.config);
    (e.name = t.name), (e.config = t.config), (e.last = t);
  }
  static ingestionFn(e) {
    return (t, r) => {
      const i = r;
      if (!t) return { ingest: !1, protocol: !1 };
      const n = t;
      if ((wt(n.msg) || i.monitor?.work(), Xr(n.msg))) {
        const h = e ? i._checkHbOrderConsumer(n.msg) : !0;
        return (
          e || i.info.flow_control.heartbeat_count++,
          { ingest: h, protocol: !0 }
        );
      } else if (Pr(n.msg))
        return i.info.flow_control.fc_count++, { ingest: !0, protocol: !0 };
      return { ingest: e ? i._checkOrderedConsumer(t) : !0, protocol: !1 };
    };
  }
}
class Ur {
  options;
  protocol;
  draining;
  listeners;
  _services;
  constructor(e) {
    (this.draining = !1), (this.options = xn(e)), (this.listeners = []);
  }
  static connect(e = {}) {
    return new Promise((t, r) => {
      const i = new Ur(e);
      ir.connect(i.options, i)
        .then((n) => {
          (i.protocol = n),
            (async function () {
              for await (const a of n.status())
                i.listeners.forEach((h) => {
                  h.push(a);
                });
            })(),
            t(i);
        })
        .catch((n) => {
          r(n);
        });
    });
  }
  closed() {
    return this.protocol.closed;
  }
  async close() {
    await this.protocol.close();
  }
  _check(e, t, r) {
    if (this.isClosed()) throw z.errorForCode(U.ConnectionClosed);
    if ((t && this.isDraining()) || (r && this.protocol.noMorePublishing))
      throw z.errorForCode(U.ConnectionDraining);
    if (((e = e || ""), e.length === 0)) throw z.errorForCode(U.BadSubject);
  }
  publish(e, t = Pe, r) {
    if ((this._check(e, !1, !0), t && !ni(t)))
      throw z.errorForCode(U.BadPayload);
    this.protocol.publish(e, t, r);
  }
  subscribe(e, t = {}) {
    this._check(e, !0, !1);
    const r = new Cs(this.protocol, e, t);
    return this.protocol.subscribe(r), r;
  }
  _resub(e, t, r) {
    this._check(t, !0, !1);
    const i = e;
    (i.max = r), r && (i.max = r + i.received), this.protocol.resub(i, t);
  }
  requestMany(e, t = Pe, r = { maxWait: 1e3, maxMessages: -1 }) {
    try {
      this._check(e, !0, !0);
    } catch (h) {
      return Promise.reject(h);
    }
    if (
      ((r.strategy = r.strategy || Ye.Timer),
      (r.maxWait = r.maxWait || 1e3),
      r.maxWait < 1)
    )
      return Promise.reject(new z("timeout", U.InvalidOption));
    const i = new Ce();
    function n(h) {
      i.push(() => {
        i.stop(h);
      });
    }
    function a(h, m) {
      h || m === null ? n(h === null ? void 0 : h) : i.push(m);
    }
    if (r.noMux) {
      const h = new Error().stack;
      let m =
        typeof r.maxMessages == "number" && r.maxMessages > 0
          ? r.maxMessages
          : -1;
      const _ = this.subscribe(tt(this.options.inboxPrefix), {
        callback: (T, H) => {
          if (
            (H?.data?.length === 0 &&
              H?.headers?.status === U.NoResponders &&
              (T = z.errorForCode(U.NoResponders)),
            T)
          ) {
            (T.stack += `

${h}`),
              O(T);
            return;
          }
          a(null, H),
            r.strategy === Ye.Count && (m--, m === 0 && O()),
            r.strategy === Ye.JitterTimer &&
              (N(),
              (I = setTimeout(() => {
                O();
              }, 300))),
            r.strategy === Ye.SentinelMsg && H && H.data.length === 0 && O();
        },
      });
      _.closed
        .then(() => {
          n();
        })
        .catch((T) => {
          i.stop(T);
        });
      const O = (T) => {
        T &&
          i.push(() => {
            throw T;
          }),
          N(),
          _.drain()
            .then(() => {
              n();
            })
            .catch((H) => {
              n();
            });
      };
      i.iterClosed
        .then(() => {
          N(), _?.unsubscribe();
        })
        .catch((T) => {
          N(), _?.unsubscribe();
        });
      try {
        this.publish(e, Pe, { reply: _.getSubject() });
      } catch (T) {
        O(T);
      }
      let I = setTimeout(() => {
        O();
      }, r.maxWait);
      const N = () => {
        I && clearTimeout(I);
      };
    } else {
      const h = r;
      (h.callback = a),
        i.iterClosed
          .then(() => {
            m.cancel();
          })
          .catch((_) => {
            m.cancel(_);
          });
      const m = new Ei(this.protocol.muxSubscriptions, e, h);
      this.protocol.request(m);
      try {
        this.publish(e, t, {
          reply: `${this.protocol.muxSubscriptions.baseInbox}${m.token}`,
          headers: r.headers,
        });
      } catch (_) {
        m.cancel(_);
      }
    }
    return Promise.resolve(i);
  }
  request(e, t = Pe, r = { timeout: 1e3, noMux: !1 }) {
    try {
      this._check(e, !0, !0);
    } catch (i) {
      return Promise.reject(i);
    }
    if (((r.timeout = r.timeout || 1e3), r.timeout < 1))
      return Promise.reject(new z("timeout", U.InvalidOption));
    if (!r.noMux && r.reply)
      return Promise.reject(
        new z("reply can only be used with noMux", U.InvalidOption)
      );
    if (r.noMux) {
      const i = r.reply ? r.reply : tt(this.options.inboxPrefix),
        n = me(),
        a = new Error(),
        h = this.subscribe(i, {
          max: 1,
          timeout: r.timeout,
          callback: (m, _) => {
            m
              ? (m.code !== U.Timeout &&
                  (m.stack += `

${a.stack}`),
                n.reject(m))
              : ((m = ws(_)),
                m
                  ? ((m.stack += `

${a.stack}`),
                    n.reject(m))
                  : n.resolve(_));
          },
        });
      return (
        (h.requestSubject = e),
        this.protocol.publish(e, t, { reply: i, headers: r.headers }),
        n
      );
    } else {
      const i = new ks(this.protocol.muxSubscriptions, e, r);
      this.protocol.request(i);
      try {
        this.publish(e, t, {
          reply: `${this.protocol.muxSubscriptions.baseInbox}${i.token}`,
          headers: r.headers,
        });
      } catch (a) {
        i.cancel(a);
      }
      const n = Promise.race([i.timer, i.deferred]);
      return (
        n.catch(() => {
          i.cancel();
        }),
        n
      );
    }
  }
  flush() {
    return this.isClosed()
      ? Promise.reject(z.errorForCode(U.ConnectionClosed))
      : this.protocol.flush();
  }
  drain() {
    return this.isClosed()
      ? Promise.reject(z.errorForCode(U.ConnectionClosed))
      : this.isDraining()
      ? Promise.reject(z.errorForCode(U.ConnectionDraining))
      : ((this.draining = !0), this.protocol.drain());
  }
  isClosed() {
    return this.protocol.isClosed();
  }
  isDraining() {
    return this.draining;
  }
  getServer() {
    const e = this.protocol.getServer();
    return e ? e.listen : "";
  }
  status() {
    const e = new Ce();
    return this.listeners.push(e), e;
  }
  get info() {
    return this.protocol.isClosed() ? void 0 : this.protocol.info;
  }
  stats() {
    return {
      inBytes: this.protocol.inBytes,
      outBytes: this.protocol.outBytes,
      inMsgs: this.protocol.inMsgs,
      outMsgs: this.protocol.outMsgs,
    };
  }
  async jetstreamManager(e = {}) {
    const t = new Nn(this, e);
    try {
      await t.getAccountInfo();
    } catch (r) {
      const i = r;
      throw (i.code === U.NoResponders && (i.code = U.JetStreamNotEnabled), i);
    }
    return t;
  }
  jetstream(e = {}) {
    return new Br(this, e);
  }
  getServerVersion() {
    const e = this.info;
    return e ? at(e.version) : void 0;
  }
  async rtt() {
    if (!this.protocol._closed && !this.protocol.connected)
      throw z.errorForCode(U.Disconnect);
    const e = Date.now();
    return await this.flush(), Date.now() - e;
  }
  get features() {
    return this.protocol.features;
  }
  get services() {
    return this._services || (this._services = new Rn(this)), this._services;
  }
}
class Tn {
  nc;
  prefix;
  opts;
  constructor(e, t = { strategy: Ye.JitterTimer, maxWait: 2e3 }, r) {
    (this.nc = e), (this.prefix = r), (this.opts = t);
  }
  ping(e = "", t = "") {
    return this.q(Ve.PING, e, t);
  }
  stats(e = "", t = "") {
    return this.q(Ve.STATS, e, t);
  }
  schema(e = "", t = "") {
    return this.q(Ve.SCHEMA, e, t);
  }
  info(e = "", t = "") {
    return this.q(Ve.INFO, e, t);
  }
  async q(e, t = "", r = "") {
    const i = new Ce(),
      n = Je(),
      a = Ft.controlSubject(e, t, r, this.prefix),
      h = await this.nc.requestMany(a, Pe, this.opts);
    return (
      (async () => {
        for await (const m of h)
          try {
            const _ = n.decode(m.data);
            i.push(_);
          } catch (_) {
            i.push(() => {
              i.stop(_);
            });
          }
        i.push(() => {
          i.stop();
        });
      })().catch((m) => {
        i.stop(m);
      }),
      i
    );
  }
}
function $n(s, e) {
  const { proto: t, tls_required: r, tls_available: i } = s;
  if ((t === void 0 || t < 1) && e.noEcho)
    throw new z("noEcho", U.ServerOptionNotAvailable);
  const n = r || i || !1;
  if (e.tls && !n) throw new z("tls", U.ServerOptionNotAvailable);
}
class Rn {
  nc;
  constructor(e) {
    (this.nc = e),
      console.log(
        "\x1B[33m >> service framework is beta functionality \x1B[0m"
      );
  }
  add(e) {
    try {
      return new Ft(this.nc, e).start();
    } catch (t) {
      return Promise.reject(t);
    }
  }
  client(e, t) {
    return new Tn(this.nc, e, t);
  }
}
class Bn {
  subject;
  seq;
  data;
  time;
  header;
  constructor(e) {
    if (
      ((this.subject = e.message.subject),
      (this.seq = e.message.seq),
      (this.time = new Date(Date.parse(e.message.time))),
      (this.data = e.message.data ? this._parse(e.message.data) : Pe),
      e.message.hdrs)
    ) {
      const t = this._parse(e.message.hdrs);
      this.header = et.decode(t);
    } else this.header = Qe();
  }
  _parse(e) {
    const t = atob(e),
      r = t.length,
      i = new Uint8Array(r);
    for (let n = 0; n < r; n++) i[n] = t.charCodeAt(n);
    return i;
  }
}
class Us extends Ci {
  js;
  monitor;
  constructor(e, t, r) {
    super(e.nc, t, r),
      (this.js = e),
      (this.monitor = null),
      this.sub.closed.then(() => {
        this.monitor && this.monitor.cancel();
      });
  }
  set info(e) {
    this.sub.info = e;
  }
  get info() {
    return this.sub.info;
  }
  _resetOrderedConsumer(e) {
    if (this.info === null || this.sub.isClosed()) return;
    const t = tt(this.js.nc.options.inboxPrefix);
    this.js.nc._resub(this.sub, t);
    const i = this.info;
    (i.ordered_consumer_sequence.delivery_seq = 0),
      (i.flow_control.heartbeat_count = 0),
      (i.flow_control.fc_count = 0),
      i.flow_control.consumer_restarts++,
      (i.deliver = t),
      (i.config.deliver_subject = t),
      (i.config.deliver_policy = Te.StartSequence),
      (i.config.opt_start_seq = e);
    const n = {};
    (n.stream_name = this.info.stream), (n.config = i.config);
    const a = `${i.api.prefix}.CONSUMER.CREATE.${i.stream}`;
    this.js
      ._request(a, n)
      .then((h) => {
        const m = h;
        (this.info.config = m.config), (this.info.name = m.name);
      })
      .catch((h) => {
        const m = new z(
          `unable to recreate ordered consumer ${i.stream} at seq ${e}`,
          U.RequestError,
          h
        );
        this.sub.callback(m, {});
      });
  }
  _maybeSetupHbMonitoring() {
    const e = this.info?.config?.idle_heartbeat || 0;
    e && this._setupHbMonitoring($r(e));
  }
  _setupHbMonitoring(e, t = 0) {
    const r = { cancelAfter: 0, maxOut: 2 };
    t && (r.cancelAfter = t);
    const i = this.sub,
      n = (a) => {
        const h = mi(409, `${Ge.IdleHeartbeatMissed}: ${a}`, this.sub.subject);
        if (!this.info?.ordered) this.sub.callback(null, h);
        else {
          if (!this.js.nc.protocol.connected) return !1;
          const _ = this.info?.ordered_consumer_sequence?.stream_seq || 0;
          return this._resetOrderedConsumer(_ + 1), !1;
        }
        return !i.noIterator;
      };
    this.monitor = new js(e, n, r);
  }
  _checkHbOrderConsumer(e) {
    const t = e.headers.get(He.ConsumerStalledHdr);
    t !== "" && this.js.nc.publish(t);
    const r = parseInt(e.headers.get(He.LastConsumerSeqHdr), 10),
      i = this.info.ordered_consumer_sequence;
    return (
      this.info.flow_control.heartbeat_count++,
      r !== i.delivery_seq && this._resetOrderedConsumer(i.stream_seq + 1),
      !1
    );
  }
  _checkOrderedConsumer(e) {
    const t = this.info.ordered_consumer_sequence,
      r = e.info.streamSequence,
      i = e.info.deliverySequence;
    return i != t.delivery_seq + 1
      ? (this._resetOrderedConsumer(t.stream_seq + 1), !1)
      : ((t.delivery_seq = i), (t.stream_seq = r), !0);
  }
  async destroy() {
    this.isClosed() || (await this.drain());
    const e = this.sub.info,
      t = e.config.durable_name || e.name,
      r = `${e.api.prefix}.CONSUMER.DELETE.${e.stream}.${t}`;
    await e.api._request(r);
  }
  async consumerInfo() {
    const e = this.sub.info,
      t = e.config.durable_name || e.name,
      r = `${e.api.prefix}.CONSUMER.INFO.${e.stream}.${t}`,
      i = await e.api._request(r);
    return (e.last = i), i;
  }
}
class Un extends Us {
  constructor(e, t, r) {
    super(e, t, r);
  }
  pull(e = { batch: 1 }) {
    const { stream: t, config: r, name: i } = this.sub.info,
      n = r.durable_name ?? i,
      a = {};
    if (
      ((a.batch = e.batch || 1),
      (a.no_wait = e.no_wait || !1),
      (e.max_bytes ?? 0) > 0)
    ) {
      const _ = this.js.nc.features.get($e.JS_PULL_MAX_BYTES);
      if (!_.ok)
        throw new Error(
          `max_bytes is only supported on servers ${_.min} or better`
        );
      a.max_bytes = e.max_bytes;
    }
    let h = 0;
    e.expires && e.expires > 0 && ((h = e.expires), (a.expires = ge(h)));
    let m = 0;
    if (
      (e.idle_heartbeat &&
        e.idle_heartbeat > 0 &&
        ((m = e.idle_heartbeat), (a.idle_heartbeat = ge(m))),
      m && h === 0)
    )
      throw new Error("idle_heartbeat requires expires");
    if (m > h) throw new Error("expires must be greater than idle_heartbeat");
    if (this.info) {
      this.monitor && this.monitor.cancel(),
        h &&
          m &&
          (this.monitor
            ? this.monitor._change(m, h)
            : this._setupHbMonitoring(m, h));
      const _ = this.info.api,
        O = `${_.prefix}.CONSUMER.MSG.NEXT.${t}.${n}`,
        I = this.sub.subject;
      _.nc.publish(O, _.jc.encode(a), { reply: I });
    }
  }
}
function Fn(s) {
  return s ? qn : Ln;
}
function Ln(s, e) {
  return s ? [s, null] : ((s = wt(e)), s ? [s, null] : [null, sr(e)]);
}
function qn(s, e) {
  if (s) return [s, null];
  const t = wt(e);
  return t !== null ? [Fs(t), null] : [null, sr(e)];
}
function Fs(s) {
  if (s !== null)
    switch (s.code) {
      case U.JetStream404NoMessages:
      case U.JetStream408RequestTimeout:
        return null;
      case U.JetStream409:
        return gi(s) ? s : null;
      default:
        return s;
    }
  return null;
}
function Dn(s) {
  s && s.ack();
}
const Gn = (() => {
    let s = !1;
    return (e) => {
      if (!s) {
        s = !0;
        const { lang: t } = e?.protocol?.transport;
        console.log(
          t
            ? `\x1B[33m >> jetstream's materialized views object store functionality in ${t} is beta functionality \x1B[0m`
            : "\x1B[33m >> jetstream's materialized views object store functionality is beta functionality \x1B[0m"
        );
      }
    };
  })(),
  Hn = "1.14.0",
  zn = "nats.ws";
class Jn {
  version;
  lang;
  closeError;
  connected;
  done;
  socket;
  options;
  socketClosed;
  encrypted;
  peeked;
  yields;
  signal;
  closedNotification;
  constructor() {
    (this.version = Hn),
      (this.lang = zn),
      (this.connected = !1),
      (this.done = !1),
      (this.socketClosed = !1),
      (this.encrypted = !1),
      (this.peeked = !1),
      (this.yields = []),
      (this.signal = me()),
      (this.closedNotification = me());
  }
  async connect(e, t) {
    const r = me();
    if (t.tls) return r.reject(new z("tls", U.InvalidOption)), r;
    this.options = t;
    const i = e.src;
    if (t.wsFactory) {
      const { socket: n, encrypted: a } = await t.wsFactory(e.src, t);
      (this.socket = n), (this.encrypted = a);
    } else
      (this.encrypted = i.indexOf("wss://") === 0),
        (this.socket = new WebSocket(i));
    return (
      (this.socket.binaryType = "arraybuffer"),
      (this.socket.onopen = () => {}),
      (this.socket.onmessage = (n) => {
        if ((this.yields.push(new Uint8Array(n.data)), this.peeked)) {
          this.signal.resolve();
          return;
        }
        const a = Ut.concat(...this.yields),
          h = ai(a);
        if (h !== "") {
          const m = Xi.exec(h);
          if (!m) {
            t.debug && console.error("!!!", Jt(a)),
              r.reject(new Error("unexpected response from server"));
            return;
          }
          try {
            const _ = JSON.parse(m[1]);
            $n(_, this.options),
              (this.peeked = !0),
              (this.connected = !0),
              this.signal.resolve(),
              r.resolve();
          } catch (_) {
            r.reject(_);
            return;
          }
        }
      }),
      (this.socket.onclose = (n) => {
        this.socketClosed = !0;
        let a;
        this.done || (n.wasClean || (a = new Error(n.reason)), this._closed(a));
      }),
      (this.socket.onerror = (n) => {
        const a = n,
          h = new z(a.message, U.Unknown, new Error(a.error));
        r.reject(h);
      }),
      r
    );
  }
  disconnect() {
    this._closed(void 0, !0);
  }
  async _closed(e, t = !0) {
    if (!!this.connected && !this.done) {
      if (((this.closeError = e), !e))
        for (; !this.socketClosed && this.socket.bufferedAmount > 0; )
          console.log(this.socket.bufferedAmount), await Tr(100);
      this.done = !0;
      try {
        this.socket.close(e ? 1002 : 1e3, e ? e.message : void 0);
      } catch {}
      t && this.closedNotification.resolve(e);
    }
  }
  get isClosed() {
    return this.done;
  }
  [Symbol.asyncIterator]() {
    return this.iterate();
  }
  async *iterate() {
    for (;;) {
      this.yields.length === 0 && (await this.signal);
      const e = this.yields;
      this.yields = [];
      for (let t = 0; t < e.length; t++)
        this.options.debug && console.info(`> ${Jt(e[t])}`), yield e[t];
      if (this.done) break;
      this.yields.length === 0 &&
        ((e.length = 0), (this.yields = e), (this.signal = me()));
    }
  }
  isEncrypted() {
    return this.connected && this.encrypted;
  }
  send(e) {
    if (!this.done)
      try {
        this.socket.send(e.buffer),
          this.options.debug && console.info(`< ${Jt(e)}`);
        return;
      } catch (t) {
        this.options.debug && console.error(`!!! ${Jt(e)}: ${t}`);
      }
  }
  close(e) {
    return this._closed(e, !1);
  }
  closed() {
    return this.closedNotification;
  }
}
function Yn(s) {
  /^(.*:\/\/)(.*)/.test(s) || (s = `https://${s}`);
  let t = new URL(s);
  const r = t.protocol.toLowerCase();
  r !== "https:" &&
    r !== "http" &&
    ((s = s.replace(/^(.*:\/\/)(.*)/gm, "$2")), (t = new URL(`http://${s}`)));
  let i, n;
  const a = t.hostname,
    h = t.pathname,
    m = t.search || "";
  switch (r) {
    case "http:":
    case "ws:":
    case "nats:":
      (n = t.port || "80"), (i = "ws:");
      break;
    default:
      (n = t.port || "443"), (i = "wss:");
      break;
  }
  return `${i}//${a}:${n}${h}${m}`;
}
function Ls(s = {}) {
  return (
    ji({ defaultPort: 443, urlParseFn: Yn, factory: () => new Jn() }),
    Ur.connect(s)
  );
}
const nr = Js(`ws://${window.location.hostname}:4443`);
if (!nr) throw new Error("VITE_NATS_URL is not set");
let jr = Ls({ servers: [nr.value] });
Ys(nr, () => {
  (jr = Ls({ servers: [nr.value] })), window.location.reload();
});
async function Vn() {
  for (; !jr; ) await new Promise((s) => setTimeout(s, 10));
  return jr;
}
async function qs() {
  return (await Vn()).jetstream();
}
async function Qn(s) {
  return (await qs()).views.kv(s);
}
async function eo(s) {
  return (await qs()).views.os(s);
}
const Wn = new TextEncoder();
function to(s) {
  return Wn.encode(Bt.exports.stringify(s));
}
const Kn = new TextDecoder();
function ro(s) {
  const e = Kn.decode(s);
  return Bt.exports.parse(e);
}
export { qs as a, Qn as b, rt as c, ro as d, eo as e, to as f, Vn as n };
