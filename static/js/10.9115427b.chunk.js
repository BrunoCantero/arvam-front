(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{629:function(e,t,r){"use strict";t.a={server:"http://ec2-3-16-129-81.us-east-2.compute.amazonaws.com:1337"}},632:function(e,t,r){"use strict";var n=r(15),a=(r(620),r(621));t.a=function(e){var t=e.children,r=e.visible,c=e.modalToggle,o=e.title,s=e.onSubmit,i=e.isEditing;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(a.eb,{show:r,onClose:c,children:[Object(n.jsx)(a.hb,{closeButton:!0,children:o}),Object(n.jsx)(a.fb,{children:t}),Object(n.jsxs)(a.gb,{children:[i?null:Object(n.jsx)(a.f,{onClick:s,color:"primary",children:"Guardar"}),Object(n.jsx)(a.f,{color:"secondary",onClick:c,children:"Cancel"})]})]})})}},633:function(e,t,r){"use strict";var n=r(15),a=r(621);t.a=function(e){var t=e.children,r=e.visible,c=e.modalToggle,o=e.title,s=e.onSubmit;return Object(n.jsxs)(a.eb,{show:r,onClose:c,color:"warning",children:[Object(n.jsx)(a.hb,{closeButton:!0,children:Object(n.jsx)(a.ib,{children:o})}),Object(n.jsx)(a.fb,{children:t}),Object(n.jsxs)(a.gb,{children:[Object(n.jsx)(a.f,{color:"warning",onClick:s,children:"Eliminar"}),Object(n.jsx)(a.f,{color:"secondary",onClick:c,children:"Cancelar"})]})]})}},637:function(e,t,r){"use strict";r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d})),r.d(t,"d",(function(){return p}));var n=r(627),a=r.n(n),c=r(628),o=r(630),s=r.n(o),i=r(629),u=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return t=e.sent,r={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:t}},e.prev=4,e.next=7,s.a.get(i.a.server+"/api/categorias",r);case 7:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return r=e.sent,n={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:r}},e.prev=4,e.next=7,s.a.post(i.a.server+"/api/categorias",t,n);case 7:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return r=e.sent,n={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:r}},e.prev=4,e.next=7,s.a.delete(i.a.server+"/api/categorias/"+t,n);case 7:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return n=e.sent,c={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:n}},e.prev=4,e.next=7,s.a.put(i.a.server+"/api/categorias/"+r,t,c);case 7:return o=e.sent,console.log(o.data),e.abrupt("return",o.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,r){return e.apply(this,arguments)}}()},639:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=[{name:"Anaranjado",code:"#C5A509"},{name:"Rojo",code:"#de0404"},{name:"Amarillo",code:"#dbc609"},{name:"Negro",code:"#000000"},{name:"Azul",code:"#3642c7"},{name:"Celeste",code:"#0ec3c9"},{name:"Verde",code:"#07b857"},{name:"Violeta",code:"#941ee3"}]},723:function(e,t,r){"use strict";r.r(t);var n=r(15),a=r(161),c=r(627),o=r.n(c),s=r(628),i=r(38),u=r(623),l=r(1),d=(r(620),r(621)),p=r(632),b=r(633),m=(r(639),r(20)),j=(r(637),r(630)),h=r.n(j),f=r(629),g=function(){var e=Object(s.a)(o.a.mark((function e(t){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return r=e.sent,n={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(r)}},e.prev=4,e.next=7,h.a.get(f.a.server+"/bff/cursos/"+t+"/modulos/",n);case 7:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(o.a.mark((function e(t){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return r=e.sent,n={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(r)}},e.prev=4,e.next=7,h.a.post(f.a.server+"/api/modulos",t,n);case 7:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(o.a.mark((function e(t){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return r=e.sent,n={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(r)}},e.prev=4,e.next=7,h.a.delete(f.a.server+"/api/modulos/"+t,n);case 7:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(o.a.mark((function e(t,r){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return n=e.sent,a={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(n)}},e.prev=4,e.next=7,h.a.put(f.a.server+"/api/modulos/"+r,t,a);case 7:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,r){return e.apply(this,arguments)}}(),w=["order_number",{key:"name",value:"nombre",sorter:!0},"description","url","actions"],k={order_number:"Orden",name:"Nombre",description:"Descripcion",url:"Enlace",actions:"Acciones"};t.default=function(e){var t=e.history,r=Object(m.g)(),c=Object(l.useState)(!1),j=Object(u.a)(c,2),h=j[0],f=j[1],A=Object(l.useState)([]),y=Object(u.a)(A,2),C=y[0],S=y[1],_=Object(l.useState)(!1),T=Object(u.a)(_,2),F=T[0],z=T[1],I=Object(l.useState)(!1),B=Object(u.a)(I,2),D=B[0],E=B[1],K=Object(l.useState)(!1),M=Object(u.a)(K,2),N=M[0],Q=M[1],R=Object(l.useState)(!1),U=Object(u.a)(R,2),H=U[0],J=U[1],P=Object(l.useState)(null),V=Object(u.a)(P,2),W=V[0],q=V[1],G=Object(l.useState)(null),L=Object(u.a)(G,2),X=L[0],Y=L[1],Z=Object(l.useState)({id:"",course:r.id,name:"",description:"",order_number:"",url:"",image:""}),$=Object(u.a)(Z,2),ee=$[0],te=$[1],re=function(){te(Object(i.a)(Object(i.a)({},ee),{},{id:"",name:"",description:"",order_number:"",url:"",image:"",clean:!!h})),f(!h),Q(!1),J(!1),E(!1)};Object(l.useEffect)((function(){ne(),ae()}),[]);var ne=function(){var e=Object(s.a)(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:null!==(r=e.sent)&&void 0!==r||t.push("/login");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Y(!0),e.next=4,g(ee.course);case 4:return t=e.sent,e.next=7,S(t[0].module_list.reverse());case 7:if(console.log(t),!(t[0].module_list.length>0)){e.next=13;break}return e.next=11,Y(!1);case 11:e.next=15;break;case 13:return e.next=15,Y(!1);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(s.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new FormData,""!==ee.name&&""!==ee.description&&""!==ee.url&&""!==ee.order_number&&""!==ee.image){e.next=5;break}Q(!0),e.next=26;break;case 5:return t.append("course",ee.course),t.append("name",ee.name),t.append("description",ee.description),t.append("url",ee.url),t.append("order_number",ee.order_number),t.append("image",ee.image),e.prev=11,e.next=14,x(t);case 14:if(!(r=e.sent)){e.next=21;break}return console.log(r.data,"modulo creado"),f(!h),e.next=20,ae();case 20:Q(!1);case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(11),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[11,23]])})));return function(){return e.apply(this,arguments)}}(),oe=function(e){z(!F),q(e)},se=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t,"si entra al delete"),e.prev=1,null===t){e.next=5;break}return e.next=5,O(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return z(!F),e.next=13,ae();case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(s.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("course",ee.course),t.append("name",ee.name),t.append("description",ee.description),t.append("url",ee.url),t.append("order_number",ee.order_number),""!==ee.image&&t.append("image",ee.image),""===ee.course||""===ee.name||""===ee.description||""===ee.url||""===ee.order_number){e.next=25;break}return e.prev=8,e.next=11,v(t,ee.id);case 11:if(!(r=e.sent)){e.next=18;break}return console.log(r.data,"usuario creado"),f(!h),e.next=17,ae();case 17:E(!1);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),console.log(e.t0);case 23:e.next=26;break;case 25:Q(!0);case 26:case"end":return e.stop()}}),e,null,[[8,20]])})));return function(){return e.apply(this,arguments)}}(),ue=function(e){e.preventDefault(),te(Object(i.a)(Object(i.a)({},ee),{},Object(a.a)({},e.target.name,e.target.value))),console.log(ee)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(d.j,{children:[Object(n.jsx)(d.n,{children:Object(n.jsx)(d.f,{color:"primary",onClick:function(){return re()},className:"mr-1",children:"Agregar M\xf3dulo"})}),Object(n.jsx)(d.u,{xs:"12",lg:"12",children:Object(n.jsxs)(d.j,{children:[Object(n.jsxs)(d.n,{children:["M\xf3dulos de ",r.course]}),Object(n.jsx)(d.k,{children:Object(n.jsx)(d.y,{items:C,fields:w,tableFilter:{label:"Buscar",placeholder:"Buscar Modulo"},itemsPerPage:10,columnHeaderSlot:k,loading:X,pagination:!0,striped:!0,responsive:!0,scopedSlots:{name:function(e){return Object(n.jsx)("td",{style:{maxHeight:20,height:20,maxWidth:120},children:"".concat(e.name)})},description:function(e){return Object(n.jsx)("td",{style:{maxHeight:20,height:20,maxWidth:150},children:"".concat(e.description)})},url:function(e){return Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:e.url,children:e.url})})},actions:function(e){return Object(n.jsxs)("td",{children:[Object(n.jsx)(d.f,{style:{marginRight:10},onClick:function(){return function(e){f(!h),E(!0),Q(!1),te(Object(i.a)(Object(i.a)({},ee),{},{id:e.id,course:ee.course,name:e.name,description:e.description,url:e.url,order_number:e.order_number,clean:!!h}))}(e)},color:"warning",children:"Editar"}),Object(n.jsx)(d.f,{onClick:function(){return oe(e.id)},color:"danger",children:"Eliminar"})]})}}})})]})})]}),Object(n.jsx)(p.a,{visible:h,modalToggle:re,onSubmit:D?function(){return ie()}:function(){return ce()},title:"M\xf3dulo",children:Object(n.jsx)(d.u,{xs:"12",sm:"12",children:Object(n.jsx)(d.j,{children:Object(n.jsxs)(d.k,{children:[Object(n.jsxs)(d.K,{children:[Object(n.jsx)(d.ab,{htmlFor:"name",children:"Nombre"}),Object(n.jsx)(d.Q,{required:!0,id:"name",name:"name",value:ee.name,onChange:function(e){return ue(e)},placeholder:"Nombre del m\xf3dulo"})]}),Object(n.jsxs)(d.K,{children:[Object(n.jsx)(d.ab,{htmlFor:"description",children:"Descripci\xf3n"}),Object(n.jsx)(d.Q,{id:"description",name:"description",value:ee.description,onChange:function(e){return ue(e)},placeholder:"Descripci\xf3n"})]}),Object(n.jsxs)(d.K,{children:[Object(n.jsx)(d.ab,{htmlFor:"order_number",children:"Orden"}),Object(n.jsx)(d.Q,{type:"number",id:"order_number",name:"order_number",value:ee.order_number,onChange:function(e){return ue(e)},placeholder:"Orden"})]}),Object(n.jsxs)(d.K,{children:[Object(n.jsx)(d.ab,{htmlFor:"url",children:"Url"}),Object(n.jsx)(d.Q,{id:"url",name:"url",value:ee.url,onChange:function(e){return ue(e)},placeholder:"Url"})]}),Object(n.jsxs)(d.K,{row:!0,children:[Object(n.jsx)(d.ab,{col:!0,htmlFor:"image",children:"Imagen"}),Object(n.jsx)(d.u,{xs:"12",md:"12",children:Object(n.jsx)(d.S,{encType:"multipart/form-data",onChange:function(e){return function(e){var t=e.target.files[0],r=new FileReader;if(!/^image/.test(t.type))return J(!0),console.log(e.target.files[0].name),void te(Object(i.a)(Object(i.a)({},ee),{},{image:"",clean:!!h}));J(!1),r.onload=function(e){te(Object(i.a)(Object(i.a)({},ee),{},{image:e.target.result})),console.log(ee)},r.readAsDataURL(t),console.log(ee.image),console.log("Uploaded"),console.log(ee.image)}(e)},id:"image",name:"image"})})]},ee.clean),N?Object(n.jsx)(d.u,{children:Object(n.jsx)(d.K,{children:Object(n.jsx)(d.a,{color:"danger",children:"Debes ingresar todos los campos!"})})}):null,H?Object(n.jsx)(d.u,{children:Object(n.jsx)(d.K,{children:Object(n.jsx)(d.a,{color:"danger",children:"Formato de archivo inv\xe1lido, solo im\xe1genes!"})})}):null]})})})}),Object(n.jsx)(b.a,{visible:F,onSubmit:function(){return se(W)},modalToggle:function(){return oe(null)},title:"Eliminar Modulo",children:"Estas seguro de eliminar este modulo?"})]})}}}]);
//# sourceMappingURL=10.9115427b.chunk.js.map