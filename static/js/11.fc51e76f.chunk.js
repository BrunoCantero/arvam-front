(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[11],{629:function(e,t,n){"use strict";t.a={server:"http://ec2-3-16-129-81.us-east-2.compute.amazonaws.com:1337"}},632:function(e,t,n){"use strict";var r=n(15),c=(n(620),n(621));t.a=function(e){var t=e.children,n=e.visible,a=e.modalToggle,o=e.title,s=e.onSubmit,i=e.isEditing;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(c.eb,{show:n,onClose:a,children:[Object(r.jsx)(c.hb,{closeButton:!0,children:o}),Object(r.jsx)(c.fb,{children:t}),Object(r.jsxs)(c.gb,{children:[i?null:Object(r.jsx)(c.f,{onClick:s,color:"primary",children:"Guardar"}),Object(r.jsx)(c.f,{color:"secondary",onClick:a,children:"Cancel"})]})]})})}},633:function(e,t,n){"use strict";var r=n(15),c=n(621);t.a=function(e){var t=e.children,n=e.visible,a=e.modalToggle,o=e.title,s=e.onSubmit;return Object(r.jsxs)(c.eb,{show:n,onClose:a,color:"warning",children:[Object(r.jsx)(c.hb,{closeButton:!0,children:Object(r.jsx)(c.ib,{children:o})}),Object(r.jsx)(c.fb,{children:t}),Object(r.jsxs)(c.gb,{children:[Object(r.jsx)(c.f,{color:"warning",onClick:s,children:"Eliminar"}),Object(r.jsx)(c.f,{color:"secondary",onClick:a,children:"Cancelar"})]})]})}},637:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return b}));var r=n(627),c=n.n(r),a=n(628),o=n(630),s=n.n(o),i=n(629),l=function(){var e=Object(a.a)(c.a.mark((function e(){var t,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return t=e.sent,n={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:t}},e.prev=4,e.next=7,s.a.get(i.a.server+"/api/categorias",n);case 7:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return n=e.sent,r={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:n}},e.prev=4,e.next=7,s.a.post(i.a.server+"/api/categorias",t,r);case 7:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return n=e.sent,r={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:n}},e.prev=4,e.next=7,s.a.delete(i.a.server+"/api/categorias/"+t,r);case 7:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return r=e.sent,a={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:r}},e.prev=4,e.next=7,s.a.put(i.a.server+"/api/categorias/"+n,t,a);case 7:return o=e.sent,console.log(o.data),e.abrupt("return",o.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,n){return e.apply(this,arguments)}}()},639:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=[{name:"Anaranjado",code:"#C5A509"},{name:"Rojo",code:"#de0404"},{name:"Amarillo",code:"#dbc609"},{name:"Negro",code:"#000000"},{name:"Azul",code:"#3642c7"},{name:"Celeste",code:"#0ec3c9"},{name:"Verde",code:"#07b857"},{name:"Violeta",code:"#941ee3"}]},714:function(e,t,n){"use strict";n.r(t);var r=n(15),c=n(161),a=n(38),o=n(627),s=n.n(o),i=n(628),l=n(623),u=n(1),d=(n(620),n(621)),b=n(632),p=n(633),j=n(639),h=n(637),f=[{key:"name",value:"nombre",sorter:!0},"color","actions"],m={name:"Nombre",color:"Color",actions:"Acciones"};t.default=function(e){var t=e.history,n=Object(u.useState)(!1),o=Object(l.a)(n,2),x=o[0],g=o[1],O=Object(u.useState)([]),v=Object(l.a)(O,2),w=v[0],k=v[1],C=Object(u.useState)(!1),y=Object(l.a)(C,2),A=y[0],S=y[1],F=Object(u.useState)(!1),T=Object(l.a)(F,2),E=T[0],z=T[1],D=Object(u.useState)(!1),I=Object(l.a)(D,2),N=I[0],B=I[1],H=Object(u.useState)(null),K=Object(l.a)(H,2),W=K[0],J=K[1],P=Object(u.useState)(null),R=Object(l.a)(P,2),V=R[0],G=R[1],Q=Object(u.useState)({id:"",name:"",color:""}),q=Object(l.a)(Q,2),L=q[0],M=q[1],U=function(){M({name:"",color:""}),g(!x),B(!1),z(!1)};Object(u.useEffect)((function(){X(),Y()}),[]);var X=function(){var e=Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:null!==(n=e.sent)&&void 0!==n||t.push("/login");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,G(!0),e.next=4,Object(h.c)();case 4:return t=e.sent,e.next=7,k(t.data);case 7:if(!(t.data.length>0)){e.next=10;break}return e.next=10,G(!1);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new FormData,""!==L.name&&""!==L.color){e.next=5;break}B(!0),e.next=22;break;case 5:return t.append("name",L.name),t.append("color",L.color),e.prev=7,e.next=10,Object(h.a)(t);case 10:if(!(n=e.sent)){e.next=17;break}return console.log(n.data,"usuario creado"),g(!x),e.next=16,Y();case 16:B(!1);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(7),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[7,19]])})));return function(){return e.apply(this,arguments)}}(),$=function(e){S(!A),J(e)},_=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t,"si entra al delete"),e.prev=1,null===t){e.next=5;break}return e.next=5,Object(h.b)(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return S(!A),e.next=13,Y();case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("name",L.name),t.append("color",L.color),""===L.id||""===L.name||""===L.color){e.next=21;break}return e.prev=4,e.next=7,Object(h.d)(t,L.id);case 7:if(!(n=e.sent)){e.next=14;break}return console.log(n.data,"usuario creado"),g(!x),e.next=13,Y();case 13:z(!1);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.log(e.t0);case 19:e.next=22;break;case 21:B(!0);case 22:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(){return e.apply(this,arguments)}}(),te=function(e){e.preventDefault(),M(Object(a.a)(Object(a.a)({},L),{},Object(c.a)({},e.target.name,e.target.value))),console.log(L)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(d.j,{children:[Object(r.jsx)(d.n,{children:Object(r.jsx)(d.f,{color:"primary",onClick:function(){return U()},className:"mr-1",children:"Agregar Categor\xeda"})}),Object(r.jsx)(d.u,{xs:"12",lg:"12",children:Object(r.jsxs)(d.j,{children:[Object(r.jsx)(d.n,{children:"Categor\xedas de Cursos"}),Object(r.jsx)(d.k,{children:Object(r.jsx)(d.y,{items:w,fields:f,tableFilter:{label:"Buscar",placeholder:"Buscar Categoria"},itemsPerPage:10,columnHeaderSlot:m,loading:V,pagination:!0,striped:!0,responsive:!0,scopedSlots:{name:function(e){return Object(r.jsx)("td",{style:{maxHeight:20,height:20,maxWidth:80},children:"".concat(e.name)})},color:function(e){return Object(r.jsx)("td",{style:{maxHeight:20,height:20,maxWidth:80},children:Object(r.jsx)("div",{style:{backgroundColor:e.color,width:20,height:20}})})},actions:function(e){return Object(r.jsxs)("td",{children:[Object(r.jsx)(d.f,{style:{marginRight:10},onClick:function(){return function(e){g(!x),z(!0),B(!1),M(Object(a.a)(Object(a.a)({},L),{},{id:e.id,name:e.name,color:e.color}))}(e)},color:"warning",children:"Editar"}),Object(r.jsx)(d.f,{onClick:function(){return $(e.id)},color:"danger",children:"Eliminar"})]})}}})})]})})]}),Object(r.jsx)(b.a,{visible:x,modalToggle:U,onSubmit:E?function(){return ee()}:function(){return Z()},title:"Categor\xeda",children:Object(r.jsx)(d.u,{xs:"12",sm:"12",children:Object(r.jsx)(d.j,{children:Object(r.jsxs)(d.k,{children:[Object(r.jsxs)(d.K,{children:[Object(r.jsx)(d.ab,{htmlFor:"name",children:"Nombre"}),Object(r.jsx)(d.Q,{id:"name",name:"name",value:L.name,onChange:function(e){return te(e)},placeholder:"Nombre de la categor\xeda"})]}),Object(r.jsxs)(d.K,{children:[Object(r.jsx)(d.ab,{htmlFor:"color",children:"Color"}),Object(r.jsx)(d.vb,{onChange:function(e){return te(e)},value:L.color,custom:!0,name:"color",id:"color",children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("option",{value:"",children:"Selecciona"}),j.a.map((function(e){return Object(r.jsx)("option",{value:e.code,style:{flexDirection:"column",color:e.code,fontWeight:600,textShadow:"2px 2px #000000"},children:e.name})}))," "]})})]}),N?Object(r.jsx)(d.u,{children:Object(r.jsx)(d.K,{children:Object(r.jsx)(d.a,{color:"danger",children:"Debes ingresar todos los campos!"})})}):null]})})})}),Object(r.jsx)(p.a,{visible:A,onSubmit:function(){return _(W)},modalToggle:function(){return $(null)},title:"Eliminar Categoria",children:"Estas seguro de eliminar esta categor\xeda?"})]})}}}]);
//# sourceMappingURL=11.fc51e76f.chunk.js.map