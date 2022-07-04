import{_ as i,d as c,o as d,c as p,a as D,t as a,n as b,e as B,w as g,b as m,f}from"./entry-155aed47.mjs";const x=c({__name:"ProgressBar",props:{value:Number},setup(t,{expose:e}){e();const E={};return Object.defineProperty(E,"__isScriptSetup",{enumerable:!1,value:!0}),E}}),h={class:"w-full bg-gray-200 rounded-full dark:bg-gray-200 border-4 border-gray-200"};function v(t,e,E,u,A,o){return d(),p("div",h,[D("div",{class:"bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full",style:b({width:E.value+"%"})},a(Math.round(E.value))+"% ",5)])}var F=i(x,[["render",v]]);const w=c({__name:"ProjectCard",props:["project"],setup(t,{expose:e}){e();const{project:E}=t,{id:u,title:A,image:o,description:s,target:r,raised:n}=E,l=`/project/${u}/`,_=n/r*100,C={id:u,title:A,image:o,description:s,target:r,raised:n,linkTarget:l,progress:_};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}}),y={class:"lg:max-w-1/3 rounded overflow-hidden shadow-lg hover:shadow-xl"},j=["src","alt"],k={class:"px-6 py-4"},S={class:"font-bold text-xl mb-2"},P={class:"text-gray-700 text-base"},$=D("div",{class:"w-full flex"},null,-1),N=D("div",{class:"w-full flex justify-center mb-3"},[D("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-80 m-auto"}," \u05DC\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D1\u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8 ")],-1);function O(t,e,E,u,A,o){const s=F,r=f;return d(),B(r,{href:u.linkTarget},{default:g(()=>[D("div",y,[D("img",{class:"w-full",src:u.image,alt:u.title},null,8,j),D("div",k,[m(s,{value:u.progress}),D("div",S,a(u.title),1),D("p",P,a(u.description),1)]),$,N])]),_:1})}var z=i(w,[["render",O]]);const T=[{id:1,title:"\u05D3\u05D0\u05D8\u05D4 \u05D5\u05D0\u05E0\u05DC\u05D9\u05D6\u05D4",description:"\u05D4\u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8 \u05DB\u05D5\u05DC\u05DC \u05DE\u05E2\u05E8\u05DB\u05EA \u05E0\u05D9\u05EA\u05D5\u05D7 \u05D5\u05D9\u05D3\u05D0\u05D5 \u05E9\u05DC \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D7\u05D8\u05D9\u05D1\u05D4 \u05D4\u05D1\u05D5\u05D2\u05E8\u05EA \u05E9\u05DC \u05DE\u05D7\u05DC\u05E7\u05EA \u05D4\u05E0\u05D5\u05E2\u05E8. \u05EA\u05E9\u05DC\u05D5\u05DD \u05E2\u05D1\u05D5\u05E8 \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05DC\u05E9\u05E0\u05D4 \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05E6\u05DC\u05DE\u05D5\u05EA \u05D4\u05DE\u05D5\u05EA\u05E7\u05E0\u05EA \u05D1\u05DE\u05D2\u05E8\u05E9 2 \u05D1\u05E1\u05D9\u05E8\u05E7\u05D9\u05DF. \u05DE\u05E2\u05E8\u05DB\u05EA \u05E0\u05D9\u05D4\u05D5\u05DC \u05DC\u05DE\u05D7\u05DC\u05E7\u05EA \u05E0\u05D5\u05E2\u05E8.",target:1e5,raised:64e3,image:"/image.jpeg",donorsCount:120,details:"<p>\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05E8\u05D0\u05E7 160 | 60,000\u20AA<br />\u05DE\u05E2\u05E8\u05DB\u05EA \u05E0\u05D9\u05EA\u05D5\u05D7 \u05D5\u05D9\u05D3\u05D0\u05D5 \u05E9\u05DC \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D7\u05D8\u05D9\u05D1\u05D4 \u05D4\u05D1\u05D5\u05D2\u05E8\u05EA \u05E9\u05DC \u05DE\u05D7\u05DC\u05E7\u05EA \u05D4\u05E0\u05D5\u05E2\u05E8. <br />\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E4\u05D9\u05E7\u05D4 \u05D3\u05D5\u05D7\u05D5\u05EA \u05E2\u05DD \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD \u05E4\u05E8 \u05E9\u05D7\u05E7\u05DF \u05D5\u05E7\u05D1\u05D5\u05E6\u05D4, \u05D5\u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05D0\u05D7\u05E8\u05D9 \u05DB\u05DC \u05DE\u05E9\u05D7\u05E7, \u05D2\u05DD \u05DB\u05DF \u05D1\u05E8\u05DE\u05D4 \u05D4\u05D0\u05D9\u05E9\u05D9\u05EA \u05D5\u05D4\u05E7\u05D1\u05D5\u05E6\u05EA\u05D9\u05EA. <br /><br />\u05DE\u05E2\u05E8\u05DB\u05EA \u05E4\u05D9\u05E7\u05E1\u05DC\u05D5\u05D8 | 60,000\u20AA<br />\u05EA\u05E9\u05DC\u05D5\u05DD \u05E2\u05D1\u05D5\u05E8 \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05DC\u05E9\u05E0\u05D4 \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05E6\u05DC\u05DE\u05D5\u05EA \u05D4\u05DE\u05D5\u05EA\u05E7\u05E0\u05EA \u05D1\u05DE\u05D2\u05E8\u05E9 2 \u05D1\u05E1\u05D9\u05E8\u05E7\u05D9\u05DF, \u05D4\u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D1\u05E9\u05D9\u05D3\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 \u05D5\u05DC\u05D1\u05E6\u05E2 \u05E0\u05D9\u05EA\u05D5\u05D7 \u05E9\u05DC \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D5\u05D0\u05D9\u05DE\u05D5\u05E0\u05D9\u05DD \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05E6\u05D5\u05D5\u05EA\u05D9\u05DD \u05D4\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D9\u05DD \u05D1\u05DE\u05D7\u05DC\u05E7\u05D4. <br /><br />\u05DE\u05E2\u05E8\u05DB\u05EA \u05E0\u05D9\u05D4\u05D5\u05DC \u05DC\u05DE\u05D7\u05DC\u05E7\u05EA \u05E0\u05D5\u05E2\u05E8 | 12,000\u20AA <br />\u05E2\u05D1\u05D5\u05E8 \u05D3\u05DE\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05E9\u05E0\u05EA\u05D9\u05D9\u05DD. </p>"},{id:2,title:"\u05DE\u05E2\u05D8\u05E4\u05EA \u05DC\u05E9\u05D7\u05E7\u05E0\u05D9 \u05D4\u05DE\u05D7\u05DC\u05E7\u05D4",description:"\u05D1\u05DE\u05E1\u05D2\u05E8\u05EA \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8, \u05D9\u05E6\u05D5\u05E8\u05E4\u05D5 \u05DC\u05DE\u05D7\u05DC\u05E7\u05D4 \u05EA\u05D6\u05D5\u05E0\u05D0\u05D9, \u05D9\u05D5\u05E2\u05E5 \u05D7\u05D9\u05E0\u05D5\u05DB\u05D9 \u05D5\u05D9\u05D5\u05E2\u05E5 \u05DE\u05E0\u05D8\u05D0\u05DC\u05D9, \u05D0\u05E9\u05E8 \u05D9\u05DC\u05D5\u05D5 \u05D0\u05EA \u05D9\u05DC\u05D3\u05D9 \u05D4\u05DE\u05D7\u05DC\u05E7\u05D4 \u05DC\u05DB\u05DC \u05D0\u05D5\u05E8\u05DA \u05E2\u05D5\u05E0\u05EA \u05D4\u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D5\u05D9\u05E1\u05E4\u05E7\u05D5 \u05D0\u05EA \u05D4\u05DE\u05E2\u05E0\u05D4 \u05D4\u05D3\u05E8\u05D5\u05E9 \u05D5\u05D0\u05EA \u05D4\u05E1\u05D1\u05D9\u05D1\u05D4 \u05D4\u05EA\u05D5\u05DE\u05DB\u05EA \u05DC\u05D4 \u05D4\u05DD \u05D6\u05E7\u05D5\u05E7\u05D9\u05DD \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D4\u05EA\u05E4\u05EA\u05D7.",target:75e3,raised:34e3,image:"/image.jpeg",donorsCount:12,details:"<p>\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05E8\u05D0\u05E7 160 | 60,000\u20AA<br />\u05DE\u05E2\u05E8\u05DB\u05EA \u05E0\u05D9\u05EA\u05D5\u05D7 \u05D5\u05D9\u05D3\u05D0\u05D5 \u05E9\u05DC \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D7\u05D8\u05D9\u05D1\u05D4 \u05D4\u05D1\u05D5\u05D2\u05E8\u05EA \u05E9\u05DC \u05DE\u05D7\u05DC\u05E7\u05EA \u05D4\u05E0\u05D5\u05E2\u05E8. <br />\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E4\u05D9\u05E7\u05D4 \u05D3\u05D5\u05D7\u05D5\u05EA \u05E2\u05DD \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD \u05E4\u05E8 \u05E9\u05D7\u05E7\u05DF \u05D5\u05E7\u05D1\u05D5\u05E6\u05D4, \u05D5\u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05D0\u05D7\u05E8\u05D9 \u05DB\u05DC \u05DE\u05E9\u05D7\u05E7, \u05D2\u05DD \u05DB\u05DF \u05D1\u05E8\u05DE\u05D4 \u05D4\u05D0\u05D9\u05E9\u05D9\u05EA \u05D5\u05D4\u05E7\u05D1\u05D5\u05E6\u05EA\u05D9\u05EA. <br /><br />\u05DE\u05E2\u05E8\u05DB\u05EA \u05E4\u05D9\u05E7\u05E1\u05DC\u05D5\u05D8 | 60,000\u20AA<br />\u05EA\u05E9\u05DC\u05D5\u05DD \u05E2\u05D1\u05D5\u05E8 \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05DC\u05E9\u05E0\u05D4 \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05E6\u05DC\u05DE\u05D5\u05EA \u05D4\u05DE\u05D5\u05EA\u05E7\u05E0\u05EA \u05D1\u05DE\u05D2\u05E8\u05E9 2 \u05D1\u05E1\u05D9\u05E8\u05E7\u05D9\u05DF, \u05D4\u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D1\u05E9\u05D9\u05D3\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 \u05D5\u05DC\u05D1\u05E6\u05E2 \u05E0\u05D9\u05EA\u05D5\u05D7 \u05E9\u05DC \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D5\u05D0\u05D9\u05DE\u05D5\u05E0\u05D9\u05DD \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05E6\u05D5\u05D5\u05EA\u05D9\u05DD \u05D4\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D9\u05DD \u05D1\u05DE\u05D7\u05DC\u05E7\u05D4. <br /><br />\u05DE\u05E2\u05E8\u05DB\u05EA \u05E0\u05D9\u05D4\u05D5\u05DC \u05DC\u05DE\u05D7\u05DC\u05E7\u05EA \u05E0\u05D5\u05E2\u05E8 | 12,000\u20AA <br />\u05E2\u05D1\u05D5\u05E8 \u05D3\u05DE\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05E9\u05E0\u05EA\u05D9\u05D9\u05DD. </p>"},{id:3,title:"\u05E9\u05D3\u05E8\u05D5\u05D2 \u05D7\u05D3\u05E8\u05D9 \u05D4\u05D0\u05D9\u05DE\u05D5\u05E0\u05D9\u05DD",description:"\u05E9\u05D3\u05E8\u05D5\u05D2 \u05D4\u05DE\u05EA\u05E7\u05E0\u05D9\u05DD, \u05D4\u05E0\u05E8\u05D0\u05D5\u05EA \u05D5\u05D4\u05E6\u05D9\u05D5\u05D3 \u05D1\u05D7\u05D3\u05E8 \u05D4\u05DB\u05D5\u05E9\u05E8 \u05D4\u05DE\u05E9\u05DE\u05E9 \u05E9\u05DC \u05E9\u05D7\u05E7\u05E0\u05D9 \u05DE\u05D7\u05DC\u05E7\u05EA \u05D4\u05E0\u05D5\u05E2\u05E8 \u05D5\u05D4\u05D1\u05D5\u05D2\u05E8\u05D9\u05DD \u05E9\u05DC \u05D4\u05DE\u05D5\u05E2\u05D3\u05D5\u05DF, \u05E8\u05DB\u05D9\u05E9\u05EA \u05E6\u05D9\u05D5\u05D3 \u05D0\u05D9\u05DE\u05D5\u05DF \u05DE\u05EA\u05E7\u05D3\u05DD, \u05DB\u05D2\u05D5\u05DF: \u05D4\u05EA\u05E7\u05E9\u05E8\u05D5\u05EA \u05E2\u05DD \u05D7\u05D1\u05E8\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA \u05D0\u05E9\u05E8 \u05EA\u05E2\u05E0\u05D9\u05E7 \u05DC\u05DE\u05E6\u05D8\u05D9\u05D9\u05E0\u05D9 \u05D4\u05DE\u05D7\u05DC\u05E7\u05D4 \u05D0\u05D9\u05DE\u05D5\u05E0\u05D9 \u05D4\u05E2\u05E9\u05E8\u05D4",target:9e4,raised:8e4,image:"/image.jpeg",donorsCount:22,details:"<p>\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05E8\u05D0\u05E7 160 | 60,000\u20AA<br />\u05DE\u05E2\u05E8\u05DB\u05EA \u05E0\u05D9\u05EA\u05D5\u05D7 \u05D5\u05D9\u05D3\u05D0\u05D5 \u05E9\u05DC \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D7\u05D8\u05D9\u05D1\u05D4 \u05D4\u05D1\u05D5\u05D2\u05E8\u05EA \u05E9\u05DC \u05DE\u05D7\u05DC\u05E7\u05EA \u05D4\u05E0\u05D5\u05E2\u05E8. <br />\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E4\u05D9\u05E7\u05D4 \u05D3\u05D5\u05D7\u05D5\u05EA \u05E2\u05DD \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD \u05E4\u05E8 \u05E9\u05D7\u05E7\u05DF \u05D5\u05E7\u05D1\u05D5\u05E6\u05D4, \u05D5\u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05D0\u05D7\u05E8\u05D9 \u05DB\u05DC \u05DE\u05E9\u05D7\u05E7, \u05D2\u05DD \u05DB\u05DF \u05D1\u05E8\u05DE\u05D4 \u05D4\u05D0\u05D9\u05E9\u05D9\u05EA \u05D5\u05D4\u05E7\u05D1\u05D5\u05E6\u05EA\u05D9\u05EA. <br /><br />\u05DE\u05E2\u05E8\u05DB\u05EA \u05E4\u05D9\u05E7\u05E1\u05DC\u05D5\u05D8 | 60,000\u20AA<br />\u05EA\u05E9\u05DC\u05D5\u05DD \u05E2\u05D1\u05D5\u05E8 \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05DC\u05E9\u05E0\u05D4 \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05E6\u05DC\u05DE\u05D5\u05EA \u05D4\u05DE\u05D5\u05EA\u05E7\u05E0\u05EA \u05D1\u05DE\u05D2\u05E8\u05E9 2 \u05D1\u05E1\u05D9\u05E8\u05E7\u05D9\u05DF, \u05D4\u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D1\u05E9\u05D9\u05D3\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 \u05D5\u05DC\u05D1\u05E6\u05E2 \u05E0\u05D9\u05EA\u05D5\u05D7 \u05E9\u05DC \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D5\u05D0\u05D9\u05DE\u05D5\u05E0\u05D9\u05DD \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05E6\u05D5\u05D5\u05EA\u05D9\u05DD \u05D4\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D9\u05DD \u05D1\u05DE\u05D7\u05DC\u05E7\u05D4. <br /><br />\u05DE\u05E2\u05E8\u05DB\u05EA \u05E0\u05D9\u05D4\u05D5\u05DC \u05DC\u05DE\u05D7\u05DC\u05E7\u05EA \u05E0\u05D5\u05E2\u05E8 | 12,000\u20AA <br />\u05E2\u05D1\u05D5\u05E8 \u05D3\u05DE\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05E9\u05E0\u05EA\u05D9\u05D9\u05DD. </p>"}];var L={projects:T};export{z as _,F as a,L as d};
