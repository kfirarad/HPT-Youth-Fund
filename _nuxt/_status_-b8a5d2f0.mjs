import{_ as u,d as c,u as i,o as d}from"./entry-79e4c011.mjs";const f=c({__name:"[status]",setup(a,{expose:s}){s();const{path:n,params:o={},query:e={}}=i(),{ResponseCode:t="",Description:_}=e;d(()=>{const p=t==="0"?"SUCCESS":"ERROR";parent.window.postMessage(p,`${window.location.origin}`)});const r={path:n,params:o,query:e,ResponseCode:t,Description:_};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function l(a,s,n,o,e,t){return null}var R=u(f,[["render",l]]);export{R as default};