(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{629:function(e,t,n){"use strict";var r={server:"http://ec2-3-16-129-81.us-east-2.compute.amazonaws.com:1337"};t.a=r},632:function(e,t,n){"use strict";var r=n(15),a=(n(620),n(621));t.a=function(e){var t=e.children,n=e.visible,c=e.modalToggle,o=e.title,s=e.onSubmit,i=e.isEditing;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(a.eb,{show:n,onClose:c,children:[Object(r.jsx)(a.hb,{closeButton:!0,children:o}),Object(r.jsx)(a.fb,{children:t}),Object(r.jsxs)(a.gb,{children:[i?null:Object(r.jsx)(a.f,{onClick:s,color:"primary",children:"Guardar"}),Object(r.jsx)(a.f,{color:"secondary",onClick:c,children:"Cancel"})]})]})})}},633:function(e,t,n){"use strict";var r=n(15),a=n(621);t.a=function(e){var t=e.children,n=e.visible,c=e.modalToggle,o=e.title,s=e.onSubmit;return Object(r.jsxs)(a.eb,{show:n,onClose:c,color:"warning",children:[Object(r.jsx)(a.hb,{closeButton:!0,children:Object(r.jsx)(a.ib,{children:o})}),Object(r.jsx)(a.fb,{children:t}),Object(r.jsxs)(a.gb,{children:[Object(r.jsx)(a.f,{color:"warning",onClick:s,children:"Eliminar"}),Object(r.jsx)(a.f,{color:"secondary",onClick:c,children:"Cancelar"})]})]})}},638:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=[{name:"Anaranjado",code:"#C5A509"},{name:"Rojo",code:"#de0404"},{name:"Amarillo",code:"#dbc609"},{name:"Negro",code:"#000000"},{name:"Azul",code:"#3642c7"},{name:"Celeste",code:"#0ec3c9"},{name:"Verde",code:"#07b857"},{name:"Violeta",code:"#941ee3"}]},644:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return p}));var r=n(627),a=n.n(r),c=n(628),o=n(630),s=n.n(o),i=n(629),l=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return t=e.sent,n={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}},e.prev=4,e.next=7,s.a.get(i.a.server+"/api/tag/",n);case 7:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return n=e.sent,r={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(n)}},e.prev=4,e.next=7,s.a.post(i.a.server+"/api/tag",t,r);case 7:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return n=e.sent,r={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(n)}},e.prev=4,e.next=7,s.a.delete(i.a.server+"/api/tag/"+t,r);case 7:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return r=e.sent,c={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(r)}},e.prev=4,e.next=7,s.a.put(i.a.server+"/api/tag/"+n,t,c);case 7:return o=e.sent,console.log(o.data),e.abrupt("return",o.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,n){return e.apply(this,arguments)}}()},725:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n(161),c=n(38),o=n(627),s=n.n(o),i=n(628),l=n(623),u=n(1),d=(n(620),n(621)),p=n(632),b=n(633),j=(n(638),n(644)),h=n(630),m=n.n(h),f=n(629),x=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return n=e.sent,r={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(n)}},e.prev=4,e.next=7,m.a.get(f.a.server+"/api/cursos/"+t+"/alumnos",r);case 7:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var r,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return r=e.sent,a={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(r)}},e.prev=4,e.next=7,m.a.post(f.a.server+"/api/alumnos/"+t+"/cursos/"+n+"/aprobar",a);case 7:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var r,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return r=e.sent,a={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(r)}},e.prev=4,e.next=7,m.a.post(f.a.server+"/api/alumnos/"+t+"/cursos/"+n+"/reprobar",a);case 7:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,n){return e.apply(this,arguments)}}(),O=n(20),w=n(657),k=n.n(w),A=function(e){switch(e){case 1:return"primary";case 0:return"danger";default:return"primary"}},y=["createdAt",{key:"name",value:"nombre",sorter:!0},"email","completed","actions"],C={createdAt:"Fecha inscripci\xf3n",name:"Nombre",completed:"\xbfAprobado?",actions:"Acciones"};t.default=function(e){var t=e.history,n=Object(O.g)(),o=Object(u.useState)(!1),h=Object(l.a)(o,2),m=h[0],f=h[1],w=Object(u.useState)([]),S=Object(l.a)(w,2),B=S[0],T=S[1],z=Object(u.useState)(!1),E=Object(l.a)(z,2),F=E[0],I=E[1],K=Object(u.useState)(!1),N=Object(l.a)(K,2),D=N[0],H=N[1],W=Object(u.useState)(!1),q=Object(l.a)(W,2),J=q[0],P=q[1],Q=Object(u.useState)(null),R=Object(l.a)(Q,2),U=R[0],V=R[1],G=Object(u.useState)(null),L=Object(l.a)(G,2),M=L[0],X=L[1],Y=Object(u.useState)({id:"",course:n.id,name:""}),Z=Object(l.a)(Y,2),$=Z[0],_=Z[1];Object(u.useEffect)((function(){ee(),te()}),[]);var ee=function(){var e=Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:null!==(n=e.sent)&&void 0!==n||t.push("/login");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,X(!0),e.next=4,x(n.id);case 4:return t=e.sent,e.next=7,T(t);case 7:t.length>=0&&X(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new FormData,""!==$.name){e.next=5;break}P(!0),e.next=22;break;case 5:return t.append("name",$.name),t.append("course",$.course),e.prev=7,e.next=10,Object(j.a)(t);case 10:if(!(n=e.sent)){e.next=17;break}return console.log(n.data,"tag creado"),f(!m),e.next=16,te();case 16:P(!1);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(7),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[7,19]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t,"si entra al delete"),e.prev=1,null===t){e.next=5;break}return e.next=5,Object(j.b)(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return I(!F),e.next=13,te();case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(i.a)(s.a.mark((function e(){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=$.completed){e.next=18;break}return e.prev=1,e.next=4,g($.id,n.id);case 4:if(!(t=e.sent)){e.next=11;break}return console.log(t.data,"Aprobado"),f(!m),e.next=10,te();case 10:H(!1);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:e.next=33;break;case 18:return e.prev=18,e.next=21,v($.id,n.id);case 21:if(!(r=e.sent)){e.next=28;break}return console.log(r.data,"desprobado"),f(!m),e.next=27,te();case 27:H(!1);case 28:e.next=33;break;case 30:e.prev=30,e.t1=e.catch(18),console.log(e.t1);case 33:case"end":return e.stop()}}),e,null,[[1,13],[18,30]])})));return function(){return e.apply(this,arguments)}}(),ce=function(e){e.preventDefault(),_(Object(c.a)(Object(c.a)({},$),{},Object(a.a)({},e.target.name,e.target.value))),console.log($)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.j,{children:Object(r.jsx)(d.u,{xs:"12",lg:"12",children:Object(r.jsxs)(d.j,{children:[Object(r.jsxs)(d.n,{children:["Alumnos inscriptos en ",Object(r.jsx)("b",{children:n.course.toUpperCase()})]}),Object(r.jsx)(d.k,{children:Object(r.jsx)(d.y,{items:B,fields:y,tableFilter:{label:"Buscar",placeholder:"Buscar Alumno"},itemsPerPage:10,columnHeaderSlot:C,loading:M,pagination:!0,striped:!0,responsive:!0,scopedSlots:{name:function(e){return Object(r.jsx)("td",{style:{maxHeight:20,height:20,maxWidth:80},children:"".concat(e.name)})},createdAt:function(e){return Object(r.jsx)("td",{style:{maxHeight:20,height:20,maxWidth:80},children:"".concat(k.a.unix(e.createdAt/1e3).format("l"))})},completed:function(e){return Object(r.jsx)("td",{style:{maxHeight:20,height:20,maxWidth:80},children:Object(r.jsx)(d.b,{color:A(e.completed),children:1==e.completed?"Si":"No"})})},actions:function(e){return Object(r.jsx)("td",{children:Object(r.jsx)(d.f,{style:{marginRight:10},onClick:function(){return function(e){f(!m),H(!0),P(!1),_(Object(c.a)(Object(c.a)({},$),{},{id:e.id,name:e.name,email:e.email,completed:e.completed,course:e.course}))}(e)},color:"warning",children:"Aprobar/Desaprobar"})})}}})})]})})}),Object(r.jsx)(p.a,{visible:m,modalToggle:function(){_({id:"",course:n.id,name:""}),f(!m),P(!1),H(!1)},onSubmit:D?function(){return ae()}:function(){return ne()},title:"Curso ".concat(n.course.toUpperCase()),children:Object(r.jsx)(d.u,{xs:"12",sm:"12",children:Object(r.jsx)(d.j,{children:Object(r.jsxs)(d.k,{children:[Object(r.jsxs)(d.K,{children:[Object(r.jsx)(d.ab,{htmlFor:"name",children:"Nombre"}),Object(r.jsx)(d.Q,{id:"name",disabled:!0,name:"name",value:$.name,onChange:function(e){return ce(e)},placeholder:"Alumno"})]}),Object(r.jsxs)(d.K,{children:[Object(r.jsx)(d.ab,{htmlFor:"email",children:"Email"}),Object(r.jsx)(d.Q,{id:"email",disabled:!0,name:"email",value:$.email,onChange:function(e){return ce(e)},placeholder:"Email"})]}),Object(r.jsxs)(d.K,{row:!0,children:[Object(r.jsx)(d.u,{md:"3",children:Object(r.jsx)(d.ab,{children:" \xbfAprobado?"})}),Object(r.jsx)(d.u,{md:"9",children:Object(r.jsx)(d.K,{variant:"custom-checkbox",inline:!0,children:Object(r.jsx)(d.vb,{onChange:function(e){return ce(e)},value:$.completed,custom:!0,name:"completed",id:"completed",children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("option",{value:1,children:"Si"}),Object(r.jsx)("option",{value:0,children:"No"})]})})})})]}),J?Object(r.jsx)(d.u,{children:Object(r.jsx)(d.K,{children:Object(r.jsx)(d.a,{color:"danger",children:"Debes ingresar todos los campos!"})})}):null]})})})}),Object(r.jsx)(b.a,{visible:F,onSubmit:function(){return re(U)},modalToggle:function(){return e=null,I(!F),void V(e);var e},title:"Eliminar Etiqueta",children:"Estas seguro de eliminar esta Etiqueta?"})]})}}}]);
//# sourceMappingURL=13.0d52a170.chunk.js.map