(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{622:function(t,e,c){"use strict";c.d(e,"a",(function(){return l}));var n=c(38),r=c(15),o=c(159),a=c(1),i=c.n(a),s=c(621),u=function(t){var e=t.name,c=t.text,a=Object(o.a)(t,["name","text"]),i=e?"https://coreui.io/react/docs/components/".concat(e):t.href;return Object(r.jsx)("div",{className:"card-header-actions",children:Object(r.jsx)(s.bb,Object(n.a)(Object(n.a)({},a),{},{href:i,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(r.jsx)("small",{className:"text-muted",children:c||"docs"})}))})},l=i.a.memo(u)},623:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(624);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var c=[],n=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done)&&(c.push(a.value),!e||c.length!==e);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return c}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},624:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(625);function r(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);return"Object"===c&&t.constructor&&(c=t.constructor.name),"Map"===c||"Set"===c?Array.from(t):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Object(n.a)(t,e):void 0}}},625:function(t,e,c){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var c=0,n=new Array(e);c<e;c++)n[c]=t[c];return n}c.d(e,"a",(function(){return n}))},715:function(t,e,c){"use strict";c.r(e);var n=c(15),r=c(625);var o=c(624);function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=c(623),s=c(1),u=c(621),l=c(622);e.default=function(){var t=Object(s.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),e=Object(i.a)(t,2),c=e[0],r=e[1],o=Object(s.useState)("top-right"),b=Object(i.a)(o,2),j=b[0],d=b[1],h=Object(s.useState)(!0),m=Object(i.a)(h,2),f=m[0],O=m[1],p=Object(s.useState)(5e3),x=Object(i.a)(p,2),y=x[0],v=x[1],g=Object(s.useState)(!0),k=Object(i.a)(g,2),S=k[0],w=k[1],A=Object(s.useState)(!0),N=Object(i.a)(A,2),C=N[0],T=N[1],K=c.reduce((function(t,e){return t[e.position]=t[e.position]||[],t[e.position].push(e),t}),{});return Object(n.jsxs)(u.j,{children:[Object(n.jsxs)(u.n,{children:["Toasts.",Object(n.jsx)(l.a,{name:"-Toast"})]}),Object(n.jsx)(u.k,{children:Object(n.jsx)(u.w,{children:Object(n.jsxs)(u.ub,{children:[Object(n.jsx)(u.u,{sm:"12",lg:"6",children:Object(n.jsxs)(u.J,{children:[Object(n.jsx)("h5",{children:"Add toast with following props:"}),Object(n.jsxs)(u.K,{variant:"custom-checkbox",className:"my-2 mt-4",children:[Object(n.jsx)(u.R,{id:"autohide",checked:f,onChange:function(t){O(t.target.checked)},custom:!0}),Object(n.jsx)(u.ab,{variant:"custom-checkbox",htmlFor:"autohide",children:"Autohide of the toast"})]}),f&&Object(n.jsxs)(u.K,{className:"my-2",children:[Object(n.jsx)(u.ab,{htmlFor:"ccyear",children:"Time to autohide"}),Object(n.jsx)(u.Q,{type:"number",value:y,onChange:function(t){v(Number(t.target.value))}})]}),Object(n.jsxs)(u.K,{className:"my-2",children:[Object(n.jsx)(u.ab,{htmlFor:"ccyear",children:"Position"}),Object(n.jsx)("select",{className:"form-control",value:j,onChange:function(t){d(t.target.value)},children:["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map((function(t,e){return Object(n.jsx)("option",{children:t},e)}))})]}),Object(n.jsxs)(u.K,{variant:"custom-checkbox",className:"my-2",children:[Object(n.jsx)(u.R,{id:"fade",checked:C,onChange:function(t){T(t.target.checked)},custom:!0}),Object(n.jsx)(u.ab,{variant:"custom-checkbox",htmlFor:"fade",children:"fade"})]}),Object(n.jsxs)(u.K,{variant:"custom-checkbox",className:"my-2",children:[Object(n.jsx)(u.R,{id:"close",custom:!0,checked:S,onChange:function(t){w(t.target.checked)}}),Object(n.jsx)(u.ab,{variant:"custom-checkbox",htmlFor:"close",children:"closeButton"})]}),Object(n.jsx)(u.f,{className:"mr-1 w-25",color:"success",onClick:function(){r([].concat(a(c),[{position:j,autohide:f&&y,closeButton:S,fade:C}]))},children:"Add toast"})]})}),Object(n.jsx)(u.u,{sm:"12",lg:"6",children:Object.keys(K).map((function(t){return Object(n.jsx)(u.Mb,{position:t,children:K[t].map((function(e,c){return Object(n.jsxs)(u.Jb,{show:!0,autohide:e.autohide,fade:e.fade,children:[Object(n.jsx)(u.Lb,{closeButton:e.closeButton,children:"Toast title"}),Object(n.jsx)(u.Kb,{children:"This is a toast in ".concat(t," positioned toaster number ").concat(c+1,".")})]},"toast"+c)}))},"toaster"+t)}))})]})})})]})}}}]);
//# sourceMappingURL=20.2af9cbbd.chunk.js.map