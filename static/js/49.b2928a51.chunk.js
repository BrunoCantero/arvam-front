(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[49],{631:function(e,s){!function(e,s){for(var c in s)e[c]=s[c]}(s,function(e){var s={};function c(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}return c.m=e,c.c=s,c.d=function(e,s,t){c.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,s){if(1&s&&(e=c(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)c.d(t,r,function(s){return e[s]}.bind(null,r));return t},c.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(s,"a",s),s},c.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},c.p="",c(c.s=0)}([function(e,s,c){"use strict";c.r(s),c.d(s,"deepObjectsMerge",(function(){return t})),c.d(s,"getColor",(function(){return i})),c.d(s,"getStyle",(function(){return n})),c.d(s,"hexToRgb",(function(){return j})),c.d(s,"hexToRgba",(function(){return d})),c.d(s,"makeUid",(function(){return o})),c.d(s,"omitByKeys",(function(){return b})),c.d(s,"pickByKeys",(function(){return x})),c.d(s,"rgbToHex",(function(){return m}));var t=function e(s,c){for(var t=0,r=Object.keys(c);t<r.length;t++){var a=r[t];c[a]instanceof Object&&Object.assign(c[a],e(s[a],c[a]))}return Object.assign(s||{},c),s},r=function(){for(var e={},s=document.styleSheets,c="",t=s.length-1;t>-1;t--){for(var r=s[t].cssRules,a=r.length-1;a>-1;a--)if(".ie-custom-properties"===r[a].selectorText){c=r[a].cssText;break}if(c)break}return(c=c.substring(c.lastIndexOf("{")+1,c.lastIndexOf("}"))).split(";").forEach((function(s){if(s){var c=s.split(": ")[0],t=s.split(": ")[1];c&&t&&(e["--".concat(c.trim())]=t.trim())}})),e},a=function(){return Boolean(document.documentMode)&&document.documentMode>=10},l=function(e){return e.match(/^--.*/i)},n=function(e){var s,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(l(e)&&a()){var t=r();s=t[e]}else s=window.getComputedStyle(c,null).getPropertyValue(e).replace(/^\s/,"");return s},i=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,c="--".concat(e),t=n(c,s);return t||e},j=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var s,c,t;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(s=parseInt(e.slice(1,3),16),c=parseInt(e.slice(3,5),16),t=parseInt(e.slice(5,7),16)):(s=parseInt(e.slice(1,2),16),c=parseInt(e.slice(2,3),16),t=parseInt(e.slice(3,5),16)),"rgba(".concat(s,", ").concat(c,", ").concat(t,")")},d=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var c,t,r,a=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!a)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(c=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16)):(c=parseInt(e.slice(1,2),16),t=parseInt(e.slice(2,3),16),r=parseInt(e.slice(3,5),16)),"rgba(".concat(c,", ").concat(t,", ").concat(r,", ").concat(s/100,")")},o=function(){return"uid-"+Math.random().toString(36).substr(2)},b=function(e,s){for(var c={},t=Object.keys(e),r=0;r<t.length;r++)!s.includes(t[r])&&(c[t[r]]=e[t[r]]);return c},x=function(e,s){for(var c={},t=0;t<s.length;t++)c[s[t]]=e[s[t]];return c},m=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var s=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!s)throw new Error("".concat(e," is not a valid rgb color"));var c="0".concat(parseInt(s[1],10).toString(16)),t="0".concat(parseInt(s[2],10).toString(16)),r="0".concat(parseInt(s[3],10).toString(16));return"#".concat(c.slice(-2)).concat(t.slice(-2)).concat(r.slice(-2))},h={deepObjectsMerge:t,getColor:i,getStyle:n,hexToRgb:j,hexToRgba:d,makeUid:o,omitByKeys:b,pickByKeys:x,rgbToHex:m};s.default=h}]))},722:function(e,s,c){"use strict";c.r(s);var t=c(15),r=c(1),a=c(621),l=c(624),n=c(38),i=c(638),j=c(631),d=Object(j.getStyle)("success")||"#4dbd74",o=Object(j.getStyle)("info")||"#20a8d8",b=Object(j.getStyle)("danger")||"#f86c6b",x=function(e){var s=function(e,s){return Math.floor(Math.random()*(s-e+1)+e)},c=function(){for(var e=[],c=[],t=[],r=0;r<=27;r++)e.push(s(50,200)),c.push(s(80,100)),t.push(65);return[{label:"My First dataset",backgroundColor:Object(j.hexToRgba)(o,10),borderColor:o,pointHoverBackgroundColor:o,borderWidth:2,data:e},{label:"My Second dataset",backgroundColor:"transparent",borderColor:d,pointHoverBackgroundColor:d,borderWidth:2,data:c},{label:"My Third dataset",backgroundColor:"transparent",borderColor:b,pointHoverBackgroundColor:b,borderWidth:1,borderDash:[8,5],data:t}]}(),r={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{drawOnChartArea:!1}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250},gridLines:{display:!0}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}};return Object(t.jsx)(i.c,Object(n.a)(Object(n.a)({},e),{},{datasets:c,options:r,labels:["Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su"]}))},m=Object(r.lazy)((function(){return c.e(33).then(c.bind(null,658))})),h=Object(r.lazy)((function(){return c.e(48).then(c.bind(null,657))}));s.default=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(m,{}),Object(t.jsxs)(a.j,{children:[Object(t.jsxs)(a.k,{children:[Object(t.jsxs)(a.ub,{children:[Object(t.jsxs)(a.u,{sm:"5",children:[Object(t.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"Traffic"}),Object(t.jsx)("div",{className:"small text-muted",children:"November 2017"})]}),Object(t.jsxs)(a.u,{sm:"7",className:"d-none d-md-block",children:[Object(t.jsx)(a.f,{color:"primary",className:"float-right",children:Object(t.jsx)(l.a,{name:"cil-cloud-download"})}),Object(t.jsx)(a.g,{className:"float-right mr-3",children:["Day","Month","Year"].map((function(e){return Object(t.jsx)(a.f,{color:"outline-secondary",className:"mx-0",active:"Month"===e,children:e},e)}))})]})]}),Object(t.jsx)(x,{style:{height:"300px",marginTop:"40px"}})]}),Object(t.jsx)(a.l,{children:Object(t.jsxs)(a.ub,{className:"text-center",children:[Object(t.jsxs)(a.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0",children:[Object(t.jsx)("div",{className:"text-muted",children:"Visits"}),Object(t.jsx)("strong",{children:"29.703 Users (40%)"}),Object(t.jsx)(a.sb,{className:"progress-xs mt-2",precision:1,color:"success",value:40})]}),Object(t.jsxs)(a.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0 d-md-down-none",children:[Object(t.jsx)("div",{className:"text-muted",children:"Unique"}),Object(t.jsx)("strong",{children:"24.093 Users (20%)"}),Object(t.jsx)(a.sb,{className:"progress-xs mt-2",precision:1,color:"info",value:40})]}),Object(t.jsxs)(a.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0",children:[Object(t.jsx)("div",{className:"text-muted",children:"Pageviews"}),Object(t.jsx)("strong",{children:"78.706 Views (60%)"}),Object(t.jsx)(a.sb,{className:"progress-xs mt-2",precision:1,color:"warning",value:40})]}),Object(t.jsxs)(a.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0",children:[Object(t.jsx)("div",{className:"text-muted",children:"New Users"}),Object(t.jsx)("strong",{children:"22.123 Users (80%)"}),Object(t.jsx)(a.sb,{className:"progress-xs mt-2",precision:1,color:"danger",value:40})]}),Object(t.jsxs)(a.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0 d-md-down-none",children:[Object(t.jsx)("div",{className:"text-muted",children:"Bounce Rate"}),Object(t.jsx)("strong",{children:"Average Rate (40.15%)"}),Object(t.jsx)(a.sb,{className:"progress-xs mt-2",precision:1,value:40})]})]})})]}),Object(t.jsx)(h,{withCharts:!0}),Object(t.jsx)(a.ub,{children:Object(t.jsx)(a.u,{children:Object(t.jsxs)(a.j,{children:[Object(t.jsxs)(a.n,{children:["Traffic "," & "," Sales"]}),Object(t.jsxs)(a.k,{children:[Object(t.jsxs)(a.ub,{children:[Object(t.jsxs)(a.u,{xs:"12",md:"6",xl:"6",children:[Object(t.jsxs)(a.ub,{children:[Object(t.jsx)(a.u,{sm:"6",children:Object(t.jsxs)(a.i,{color:"info",children:[Object(t.jsx)("small",{className:"text-muted",children:"New Clients"}),Object(t.jsx)("br",{}),Object(t.jsx)("strong",{className:"h4",children:"9,123"})]})}),Object(t.jsx)(a.u,{sm:"6",children:Object(t.jsxs)(a.i,{color:"danger",children:[Object(t.jsx)("small",{className:"text-muted",children:"Recurring Clients"}),Object(t.jsx)("br",{}),Object(t.jsx)("strong",{className:"h4",children:"22,643"})]})})]}),Object(t.jsx)("hr",{className:"mt-0"}),Object(t.jsxs)("div",{className:"progress-group mb-4",children:[Object(t.jsx)("div",{className:"progress-group-prepend",children:Object(t.jsx)("span",{className:"progress-group-text",children:"Monday"})}),Object(t.jsxs)("div",{className:"progress-group-bars",children:[Object(t.jsx)(a.sb,{className:"progress-xs",color:"info",value:"34"}),Object(t.jsx)(a.sb,{className:"progress-xs",color:"danger",value:"78"})]})]}),Object(t.jsxs)("div",{className:"progress-group mb-4",children:[Object(t.jsx)("div",{className:"progress-group-prepend",children:Object(t.jsx)("span",{className:"progress-group-text",children:"Tuesday"})}),Object(t.jsxs)("div",{className:"progress-group-bars",children:[Object(t.jsx)(a.sb,{className:"progress-xs",color:"info",value:"56"}),Object(t.jsx)(a.sb,{className:"progress-xs",color:"danger",value:"94"})]})]}),Object(t.jsxs)("div",{className:"progress-group mb-4",children:[Object(t.jsx)("div",{className:"progress-group-prepend",children:Object(t.jsx)("span",{className:"progress-group-text",children:"Wednesday"})}),Object(t.jsxs)("div",{className:"progress-group-bars",children:[Object(t.jsx)(a.sb,{className:"progress-xs",color:"info",value:"12"}),Object(t.jsx)(a.sb,{className:"progress-xs",color:"danger",value:"67"})]})]}),Object(t.jsxs)("div",{className:"progress-group mb-4",children:[Object(t.jsx)("div",{className:"progress-group-prepend",children:Object(t.jsx)("span",{className:"progress-group-text",children:"Thursday"})}),Object(t.jsxs)("div",{className:"progress-group-bars",children:[Object(t.jsx)(a.sb,{className:"progress-xs",color:"info",value:"43"}),Object(t.jsx)(a.sb,{className:"progress-xs",color:"danger",value:"91"})]})]}),Object(t.jsxs)("div",{className:"progress-group mb-4",children:[Object(t.jsx)("div",{className:"progress-group-prepend",children:Object(t.jsx)("span",{className:"progress-group-text",children:"Friday"})}),Object(t.jsxs)("div",{className:"progress-group-bars",children:[Object(t.jsx)(a.sb,{className:"progress-xs",color:"info",value:"22"}),Object(t.jsx)(a.sb,{className:"progress-xs",color:"danger",value:"73"})]})]}),Object(t.jsxs)("div",{className:"progress-group mb-4",children:[Object(t.jsx)("div",{className:"progress-group-prepend",children:Object(t.jsx)("span",{className:"progress-group-text",children:"Saturday"})}),Object(t.jsxs)("div",{className:"progress-group-bars",children:[Object(t.jsx)(a.sb,{className:"progress-xs",color:"info",value:"53"}),Object(t.jsx)(a.sb,{className:"progress-xs",color:"danger",value:"82"})]})]}),Object(t.jsxs)("div",{className:"progress-group mb-4",children:[Object(t.jsx)("div",{className:"progress-group-prepend",children:Object(t.jsx)("span",{className:"progress-group-text",children:"Sunday"})}),Object(t.jsxs)("div",{className:"progress-group-bars",children:[Object(t.jsx)(a.sb,{className:"progress-xs",color:"info",value:"9"}),Object(t.jsx)(a.sb,{className:"progress-xs",color:"danger",value:"69"})]})]}),Object(t.jsx)("div",{className:"legend text-center",children:Object(t.jsxs)("small",{children:[Object(t.jsx)("sup",{className:"px-1",children:Object(t.jsx)(a.b,{shape:"pill",color:"info",children:"\xa0"})}),"New clients \xa0",Object(t.jsx)("sup",{className:"px-1",children:Object(t.jsx)(a.b,{shape:"pill",color:"danger",children:"\xa0"})}),"Recurring clients"]})})]}),Object(t.jsxs)(a.u,{xs:"12",md:"6",xl:"6",children:[Object(t.jsxs)(a.ub,{children:[Object(t.jsx)(a.u,{sm:"6",children:Object(t.jsxs)(a.i,{color:"warning",children:[Object(t.jsx)("small",{className:"text-muted",children:"Pageviews"}),Object(t.jsx)("br",{}),Object(t.jsx)("strong",{className:"h4",children:"78,623"})]})}),Object(t.jsx)(a.u,{sm:"6",children:Object(t.jsxs)(a.i,{color:"success",children:[Object(t.jsx)("small",{className:"text-muted",children:"Organic"}),Object(t.jsx)("br",{}),Object(t.jsx)("strong",{className:"h4",children:"49,123"})]})})]}),Object(t.jsx)("hr",{className:"mt-0"}),Object(t.jsxs)("div",{className:"progress-group mb-4",children:[Object(t.jsxs)("div",{className:"progress-group-header",children:[Object(t.jsx)(l.a,{className:"progress-group-icon",name:"cil-user"}),Object(t.jsx)("span",{className:"title",children:"Male"}),Object(t.jsx)("span",{className:"ml-auto font-weight-bold",children:"43%"})]}),Object(t.jsx)("div",{className:"progress-group-bars",children:Object(t.jsx)(a.sb,{className:"progress-xs",color:"warning",value:"43"})})]}),Object(t.jsxs)("div",{className:"progress-group mb-5",children:[Object(t.jsxs)("div",{className:"progress-group-header",children:[Object(t.jsx)(l.a,{className:"progress-group-icon",name:"cil-user-female"}),Object(t.jsx)("span",{className:"title",children:"Female"}),Object(t.jsx)("span",{className:"ml-auto font-weight-bold",children:"37%"})]}),Object(t.jsx)("div",{className:"progress-group-bars",children:Object(t.jsx)(a.sb,{className:"progress-xs",color:"warning",value:"37"})})]}),Object(t.jsxs)("div",{className:"progress-group",children:[Object(t.jsxs)("div",{className:"progress-group-header",children:[Object(t.jsx)(l.a,{className:"progress-group-icon",name:"cil-globe-alt"}),Object(t.jsx)("span",{className:"title",children:"Organic Search"}),Object(t.jsxs)("span",{className:"ml-auto font-weight-bold",children:["191,235 ",Object(t.jsx)("span",{className:"text-muted small",children:"(56%)"})]})]}),Object(t.jsx)("div",{className:"progress-group-bars",children:Object(t.jsx)(a.sb,{className:"progress-xs",color:"success",value:"56"})})]}),Object(t.jsxs)("div",{className:"progress-group",children:[Object(t.jsxs)("div",{className:"progress-group-header",children:[Object(t.jsx)(l.a,{name:"cib-facebook",className:"progress-group-icon"}),Object(t.jsx)("span",{className:"title",children:"Facebook"}),Object(t.jsxs)("span",{className:"ml-auto font-weight-bold",children:["51,223 ",Object(t.jsx)("span",{className:"text-muted small",children:"(15%)"})]})]}),Object(t.jsx)("div",{className:"progress-group-bars",children:Object(t.jsx)(a.sb,{className:"progress-xs",color:"success",value:"15"})})]}),Object(t.jsxs)("div",{className:"progress-group",children:[Object(t.jsxs)("div",{className:"progress-group-header",children:[Object(t.jsx)(l.a,{name:"cib-twitter",className:"progress-group-icon"}),Object(t.jsx)("span",{className:"title",children:"Twitter"}),Object(t.jsxs)("span",{className:"ml-auto font-weight-bold",children:["37,564 ",Object(t.jsx)("span",{className:"text-muted small",children:"(11%)"})]})]}),Object(t.jsx)("div",{className:"progress-group-bars",children:Object(t.jsx)(a.sb,{className:"progress-xs",color:"success",value:"11"})})]}),Object(t.jsxs)("div",{className:"progress-group",children:[Object(t.jsxs)("div",{className:"progress-group-header",children:[Object(t.jsx)(l.a,{name:"cib-linkedin",className:"progress-group-icon"}),Object(t.jsx)("span",{className:"title",children:"LinkedIn"}),Object(t.jsxs)("span",{className:"ml-auto font-weight-bold",children:["27,319 ",Object(t.jsx)("span",{className:"text-muted small",children:"(8%)"})]})]}),Object(t.jsx)("div",{className:"progress-group-bars",children:Object(t.jsx)(a.sb,{className:"progress-xs",color:"success",value:"8"})})]}),Object(t.jsx)("div",{className:"divider text-center",children:Object(t.jsx)(a.f,{color:"link",size:"sm",className:"text-muted",children:Object(t.jsx)(l.a,{name:"cil-options"})})})]})]}),Object(t.jsx)("br",{}),Object(t.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(t.jsx)("thead",{className:"thead-light",children:Object(t.jsxs)("tr",{children:[Object(t.jsx)("th",{className:"text-center",children:Object(t.jsx)(l.a,{name:"cil-people"})}),Object(t.jsx)("th",{children:"User"}),Object(t.jsx)("th",{className:"text-center",children:"Country"}),Object(t.jsx)("th",{children:"Usage"}),Object(t.jsx)("th",{className:"text-center",children:"Payment Method"}),Object(t.jsx)("th",{children:"Activity"})]})}),Object(t.jsxs)("tbody",{children:[Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{className:"text-center",children:Object(t.jsxs)("div",{className:"c-avatar",children:[Object(t.jsx)("img",{src:"avatars/1.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(t.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(t.jsxs)("td",{children:[Object(t.jsx)("div",{children:"Yiorgos Avraamu"}),Object(t.jsxs)("div",{className:"small text-muted",children:[Object(t.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(t.jsx)("td",{className:"text-center",children:Object(t.jsx)(l.a,{height:25,name:"cif-us",title:"us",id:"us"})}),Object(t.jsxs)("td",{children:[Object(t.jsxs)("div",{className:"clearfix",children:[Object(t.jsx)("div",{className:"float-left",children:Object(t.jsx)("strong",{children:"50%"})}),Object(t.jsx)("div",{className:"float-right",children:Object(t.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(t.jsx)(a.sb,{className:"progress-xs",color:"success",value:"50"})]}),Object(t.jsx)("td",{className:"text-center",children:Object(t.jsx)(l.a,{height:25,name:"cib-cc-mastercard"})}),Object(t.jsxs)("td",{children:[Object(t.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(t.jsx)("strong",{children:"10 sec ago"})]})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{className:"text-center",children:Object(t.jsxs)("div",{className:"c-avatar",children:[Object(t.jsx)("img",{src:"avatars/2.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(t.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(t.jsxs)("td",{children:[Object(t.jsx)("div",{children:"Avram Tarasios"}),Object(t.jsxs)("div",{className:"small text-muted",children:[Object(t.jsx)("span",{children:"Recurring"})," | Registered: Jan 1, 2015"]})]}),Object(t.jsx)("td",{className:"text-center",children:Object(t.jsx)(l.a,{height:25,name:"cif-br",title:"br",id:"br"})}),Object(t.jsxs)("td",{children:[Object(t.jsxs)("div",{className:"clearfix",children:[Object(t.jsx)("div",{className:"float-left",children:Object(t.jsx)("strong",{children:"10%"})}),Object(t.jsx)("div",{className:"float-right",children:Object(t.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(t.jsx)(a.sb,{className:"progress-xs",color:"info",value:"10"})]}),Object(t.jsx)("td",{className:"text-center",children:Object(t.jsx)(l.a,{height:25,name:"cib-cc-visa"})}),Object(t.jsxs)("td",{children:[Object(t.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(t.jsx)("strong",{children:"5 minutes ago"})]})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{className:"text-center",children:Object(t.jsxs)("div",{className:"c-avatar",children:[Object(t.jsx)("img",{src:"avatars/3.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(t.jsx)("span",{className:"c-avatar-status bg-warning"})]})}),Object(t.jsxs)("td",{children:[Object(t.jsx)("div",{children:"Quintin Ed"}),Object(t.jsxs)("div",{className:"small text-muted",children:[Object(t.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(t.jsx)("td",{className:"text-center",children:Object(t.jsx)(l.a,{height:25,name:"cif-in",title:"in",id:"in"})}),Object(t.jsxs)("td",{children:[Object(t.jsxs)("div",{className:"clearfix",children:[Object(t.jsx)("div",{className:"float-left",children:Object(t.jsx)("strong",{children:"74%"})}),Object(t.jsx)("div",{className:"float-right",children:Object(t.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(t.jsx)(a.sb,{className:"progress-xs",color:"warning",value:"74"})]}),Object(t.jsx)("td",{className:"text-center",children:Object(t.jsx)(l.a,{height:25,name:"cib-stripe"})}),Object(t.jsxs)("td",{children:[Object(t.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(t.jsx)("strong",{children:"1 hour ago"})]})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{className:"text-center",children:Object(t.jsxs)("div",{className:"c-avatar",children:[Object(t.jsx)("img",{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(t.jsx)("span",{className:"c-avatar-status bg-secondary"})]})}),Object(t.jsxs)("td",{children:[Object(t.jsx)("div",{children:"En\xe9as Kwadwo"}),Object(t.jsxs)("div",{className:"small text-muted",children:[Object(t.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(t.jsx)("td",{className:"text-center",children:Object(t.jsx)(l.a,{height:25,name:"cif-fr",title:"fr",id:"fr"})}),Object(t.jsxs)("td",{children:[Object(t.jsxs)("div",{className:"clearfix",children:[Object(t.jsx)("div",{className:"float-left",children:Object(t.jsx)("strong",{children:"98%"})}),Object(t.jsx)("div",{className:"float-right",children:Object(t.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(t.jsx)(a.sb,{className:"progress-xs",color:"danger",value:"98"})]}),Object(t.jsx)("td",{className:"text-center",children:Object(t.jsx)(l.a,{height:25,name:"cib-paypal"})}),Object(t.jsxs)("td",{children:[Object(t.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(t.jsx)("strong",{children:"Last month"})]})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{className:"text-center",children:Object(t.jsxs)("div",{className:"c-avatar",children:[Object(t.jsx)("img",{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(t.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(t.jsxs)("td",{children:[Object(t.jsx)("div",{children:"Agapetus Tade\xe1\u0161"}),Object(t.jsxs)("div",{className:"small text-muted",children:[Object(t.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(t.jsx)("td",{className:"text-center",children:Object(t.jsx)(l.a,{height:25,name:"cif-es",title:"es",id:"es"})}),Object(t.jsxs)("td",{children:[Object(t.jsxs)("div",{className:"clearfix",children:[Object(t.jsx)("div",{className:"float-left",children:Object(t.jsx)("strong",{children:"22%"})}),Object(t.jsx)("div",{className:"float-right",children:Object(t.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(t.jsx)(a.sb,{className:"progress-xs",color:"info",value:"22"})]}),Object(t.jsx)("td",{className:"text-center",children:Object(t.jsx)(l.a,{height:25,name:"cib-google-pay"})}),Object(t.jsxs)("td",{children:[Object(t.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(t.jsx)("strong",{children:"Last week"})]})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{className:"text-center",children:Object(t.jsxs)("div",{className:"c-avatar",children:[Object(t.jsx)("img",{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(t.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(t.jsxs)("td",{children:[Object(t.jsx)("div",{children:"Friderik D\xe1vid"}),Object(t.jsxs)("div",{className:"small text-muted",children:[Object(t.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(t.jsx)("td",{className:"text-center",children:Object(t.jsx)(l.a,{height:25,name:"cif-pl",title:"pl",id:"pl"})}),Object(t.jsxs)("td",{children:[Object(t.jsxs)("div",{className:"clearfix",children:[Object(t.jsx)("div",{className:"float-left",children:Object(t.jsx)("strong",{children:"43%"})}),Object(t.jsx)("div",{className:"float-right",children:Object(t.jsx)("small",{className:"text-muted",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(t.jsx)(a.sb,{className:"progress-xs",color:"success",value:"43"})]}),Object(t.jsx)("td",{className:"text-center",children:Object(t.jsx)(l.a,{height:25,name:"cib-cc-amex"})}),Object(t.jsxs)("td",{children:[Object(t.jsx)("div",{className:"small text-muted",children:"Last login"}),Object(t.jsx)("strong",{children:"Yesterday"})]})]})]})]})]})]})})})]})}}}]);
//# sourceMappingURL=49.b2928a51.chunk.js.map