(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[28],{629:function(e,t,n){"use strict";t.a={server:"https://cors-anywhere.herokuapp.com/http://ec2-3-16-129-81.us-east-2.compute.amazonaws.com:1337"}},635:function(e,t,n){"use strict";var r=n(15),a=(n(620),n(621));t.a=function(e){var t=e.children,n=e.visible,c=e.modalToggle,o=e.title,s=e.onSubmit,i=e.isEditing;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(a.eb,{show:n,onClose:c,children:[Object(r.jsx)(a.hb,{closeButton:!0,children:o}),Object(r.jsx)(a.fb,{children:t}),Object(r.jsxs)(a.gb,{children:[i?null:Object(r.jsx)(a.f,{onClick:s,color:"primary",children:"Guardar"}),Object(r.jsx)(a.f,{color:"secondary",onClick:c,children:"Cancel"})]})]})})}},636:function(e,t,n){"use strict";var r=n(15),a=n(621);t.a=function(e){var t=e.children,n=e.visible,c=e.modalToggle,o=e.title,s=e.onSubmit;return Object(r.jsxs)(a.eb,{show:n,onClose:c,color:"warning",children:[Object(r.jsx)(a.hb,{closeButton:!0,children:Object(r.jsx)(a.ib,{children:o})}),Object(r.jsx)(a.fb,{children:t}),Object(r.jsxs)(a.gb,{children:[Object(r.jsx)(a.f,{color:"warning",onClick:s,children:"Eliminar"}),Object(r.jsx)(a.f,{color:"secondary",onClick:c,children:"Cancelar"})]})]})}},640:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return b}));var r=n(627),a=n.n(r),c=n(628),o=n(632),s=n.n(o),i=n(629),u=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return t=e.sent,n={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:t}},e.prev=4,e.next=7,s.a.get(i.a.server+"/api/categorias",n);case 7:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return n=e.sent,r={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:n}},e.prev=4,e.next=7,s.a.post(i.a.server+"/api/categorias",t,r);case 7:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return n=e.sent,r={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:n}},e.prev=4,e.next=7,s.a.delete(i.a.server+"/api/categorias/"+t,r);case 7:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return r=e.sent,c={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:r}},e.prev=4,e.next=7,s.a.put(i.a.server+"/api/categorias/"+n,t,c);case 7:return o=e.sent,console.log(o.data),e.abrupt("return",o.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,n){return e.apply(this,arguments)}}()},717:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n(161),c=n(38),o=n(627),s=n.n(o),i=n(628),u=n(623),l=n(1),p=(n(620),n(621)),b=n(635),d=n(636),j=n(640),h=[{key:"name",value:"nombre",sorter:!0},"actions"],f={name:"Nombre",actions:"Acciones"};t.default=function(e){var t=e.history,n=Object(l.useState)(!1),o=Object(u.a)(n,2),m=o[0],x=o[1],O=Object(l.useState)([]),g=Object(u.a)(O,2),v=g[0],w=g[1],k=Object(l.useState)(!1),C=Object(u.a)(k,2),y=C[0],S=C[1],A=Object(l.useState)(!1),T=Object(u.a)(A,2),E=T[0],F=T[1],z=Object(l.useState)(!1),I=Object(u.a)(z,2),B=I[0],D=I[1],N=Object(l.useState)(null),_=Object(u.a)(N,2),J=_[0],K=_[1],P=Object(l.useState)(null),G=Object(u.a)(P,2),H=G[0],Q=G[1],R=Object(l.useState)({id:"",name:""}),q=Object(u.a)(R,2),L=q[0],M=q[1],U=function(){M({name:""}),x(!m),D(!1),F(!1)};Object(l.useEffect)((function(){V(),W()}),[]);var V=function(){var e=Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:null!==(n=e.sent)&&void 0!==n||t.push("/login");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Q(!0),e.next=4,Object(j.c)();case 4:return t=e.sent,e.next=7,w(t.data);case 7:if(!(t.data.length>0)){e.next=10;break}return e.next=10,Q(!1);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new FormData,""!==L.name){e.next=5;break}D(!0),e.next=21;break;case 5:return t.append("name",L.name),e.prev=6,e.next=9,Object(j.a)(t);case 9:if(!(n=e.sent)){e.next=16;break}return console.log(n.data,"usuario creado"),x(!m),e.next=15,W();case 15:D(!1);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(6),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(){return e.apply(this,arguments)}}(),Y=function(e){S(!y),K(e)},Z=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t,"si entra al delete"),e.prev=1,null===t){e.next=5;break}return e.next=5,Object(j.b)(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return S(!y),e.next=13,W();case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("name",L.name),""===L.id||""===L.name){e.next=20;break}return e.prev=3,e.next=6,Object(j.d)(t,L.id);case 6:if(!(n=e.sent)){e.next=13;break}return console.log(n.data,"usuario creado"),x(!m),e.next=12,W();case 12:F(!1);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:e.next=21;break;case 20:D(!0);case 21:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(p.j,{children:[Object(r.jsx)(p.n,{children:Object(r.jsx)(p.f,{color:"primary",onClick:function(){return U()},className:"mr-1",children:"Agregar Categor\xeda"})}),Object(r.jsx)(p.u,{xs:"12",lg:"12",children:Object(r.jsxs)(p.j,{children:[Object(r.jsx)(p.n,{children:"Categor\xedas de Cursos"}),Object(r.jsx)(p.k,{children:Object(r.jsx)(p.y,{items:v,fields:h,tableFilter:{label:"Buscar",placeholder:"Buscar Categoria"},itemsPerPage:10,columnHeaderSlot:f,loading:H,pagination:!0,striped:!0,responsive:!0,scopedSlots:{actions:function(e){return Object(r.jsxs)("td",{children:[Object(r.jsx)(p.f,{style:{marginRight:10},onClick:function(){return function(e){x(!m),F(!0),D(!1),M(Object(c.a)(Object(c.a)({},L),{},{id:e.id,name:e.name}))}(e)},color:"warning",children:"Editar"}),Object(r.jsx)(p.f,{onClick:function(){return Y(e.id)},color:"danger",children:"Eliminar"})]})},phone_number:function(e){return Object(r.jsx)("td",{children:"".concat(e.area_code," ").concat(e.phone_number)})}}})})]})})]}),Object(r.jsx)(b.a,{visible:m,modalToggle:U,onSubmit:E?function(){return $()}:function(){return X()},title:"Categoria",children:Object(r.jsx)(p.u,{xs:"12",sm:"12",children:Object(r.jsx)(p.j,{children:Object(r.jsxs)(p.k,{children:[Object(r.jsxs)(p.K,{children:[Object(r.jsx)(p.ab,{htmlFor:"name",children:"Nombre"}),Object(r.jsx)(p.Q,{id:"name",name:"name",value:L.name,onChange:function(e){return function(e){e.preventDefault(),M(Object(c.a)(Object(c.a)({},L),{},Object(a.a)({},e.target.name,e.target.value))),console.log(L)}(e)},placeholder:"Nombre de la categoria"})]}),B?Object(r.jsx)(p.u,{children:Object(r.jsx)(p.K,{children:Object(r.jsx)(p.a,{color:"danger",children:"Debes ingresar todos los campos!"})})}):null]})})})}),Object(r.jsx)(d.a,{visible:y,onSubmit:function(){return Z(J)},modalToggle:function(){return Y(null)},title:"Eliminar Categoria",children:"Estas seguro de eliminar esta categor\xeda?"})]})}}}]);
//# sourceMappingURL=28.a4827e61.chunk.js.map