import{n as y}from"./nats.e9079dc5.js";import{d as x,u as b,z as g,r as _,b as u,c,B as v,g as p,F as h,o,e as s,i as w,t}from"./vendor.3e0c1cd0.js";const B={class:"card bg-base-300"},C={class:"card-body"},V={class:"uppercase align-baseline card-title"},k={class:"text-sm opacity-50"},A={class:"text-sm opacity-50 text-primary"},F={class:"opacity-60"},N={class:"shadow stats"},S={class:"stat"},z={class:"stat-title"},D=s("div",{class:"stat-value"},"Key",-1),E=s("div",{class:"stat-desc"},"Value",-1),T=x({__name:"services",async setup(H){let e,n;b({title:"Services"});const m=([e,n]=g(()=>y()),e=await e,n(),e).services.client(),i=_([]);u(async()=>{const d=await m.info();i.value=[];for await(const l of d)i.value.push(l)});const r=_([]);return u(async()=>{r.value=[]}),(d,l)=>(o(!0),c(h,null,v(p(i),(a,K)=>(o(),c("div",null,[s("div",B,[s("div",C,[s("div",V,[w(t(a.name.replaceAll("-"," "))+" ",1),s("div",k,t(a.version),1),s("span",A,t(a.id),1)]),s("div",F,t(a.description),1),s("div",N,[(o(!0),c(h,null,v(p(r),f=>(o(),c("div",S,[s("div",z,t(f),1),D,E]))),256))])])])]))),256))}});export{T as default};
