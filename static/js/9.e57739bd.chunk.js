(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9],{622:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(38),a=n(15),c=n(159),o=n(1),i=n.n(o),s=n(621),l=function(e){var t=e.name,n=e.text,o=Object(c.a)(e,["name","text"]),i=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return Object(a.jsx)("div",{className:"card-header-actions",children:Object(a.jsx)(s.bb,Object(r.a)(Object(r.a)({},o),{},{href:i,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(a.jsx)("small",{className:"text-muted",children:n||"docs"})}))})},u=i.a.memo(l)},629:function(e,t,n){"use strict";var r={server:"http://ec2-3-16-129-81.us-east-2.compute.amazonaws.com:1337"};t.a=r},632:function(e,t,n){"use strict";var r=n(15),a=(n(620),n(621));t.a=function(e){var t=e.children,n=e.visible,c=e.modalToggle,o=e.title,i=e.onSubmit,s=e.isEditing;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(a.eb,{show:n,onClose:c,children:[Object(r.jsx)(a.hb,{closeButton:!0,children:o}),Object(r.jsx)(a.fb,{children:t}),Object(r.jsxs)(a.gb,{children:[s?null:Object(r.jsx)(a.f,{onClick:i,color:"primary",children:"Guardar"}),Object(r.jsx)(a.f,{color:"secondary",onClick:c,children:"Cancel"})]})]})})}},633:function(e,t,n){"use strict";var r=n(15),a=n(621);t.a=function(e){var t=e.children,n=e.visible,c=e.modalToggle,o=e.title,i=e.onSubmit;return Object(r.jsxs)(a.eb,{show:n,onClose:c,color:"warning",children:[Object(r.jsx)(a.hb,{closeButton:!0,children:Object(r.jsx)(a.ib,{children:o})}),Object(r.jsx)(a.fb,{children:t}),Object(r.jsxs)(a.gb,{children:[Object(r.jsx)(a.f,{color:"warning",onClick:i,children:"Eliminar"}),Object(r.jsx)(a.f,{color:"secondary",onClick:c,children:"Cancelar"})]})]})}},635:function(e,t,n){"use strict";t.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]},637:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return p}));var r=n(627),a=n.n(r),c=n(628),o=n(630),i=n.n(o),s=n(629),l=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return t=e.sent,n={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:t}},e.prev=4,e.next=7,i.a.get(s.a.server+"/api/categorias",n);case 7:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return n=e.sent,r={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:n}},e.prev=4,e.next=7,i.a.post(s.a.server+"/api/categorias",t,r);case 7:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return n=e.sent,r={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:n}},e.prev=4,e.next=7,i.a.delete(s.a.server+"/api/categorias/"+t,r);case 7:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return r=e.sent,c={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:r}},e.prev=4,e.next=7,i.a.put(s.a.server+"/api/categorias/"+n,t,c);case 7:return o=e.sent,console.log(o.data),e.abrupt("return",o.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,n){return e.apply(this,arguments)}}()},723:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n(161),c=n(38),o=n(627),i=n.n(o),s=n(628),l=n(623),u=n(1),d=(n(620),n(621)),p=(n(622),n(635),n(632)),h=n(630),g=n.n(h),m=n(629),b=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return t=e.sent,n={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}},e.prev=4,e.next=7,g.a.get(m.a.server+"/api/publicaciones",n);case 7:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return n=e.sent,r={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(n)}},e.prev=4,e.next=7,g.a.delete(m.a.server+"/api/publicaciones/"+t,r);case 7:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return n=e.sent,r={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(n)}},e.prev=4,e.next=7,g.a.post(m.a.server+"/api/publicaciones",t,r);case 7:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(i.a.mark((function e(t,n){var r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:return r=e.sent,a={headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*",host:"arbam-test.herokuapp.com","Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(r)}},e.prev=4,e.next=7,g.a.put(m.a.server+"/api/publicaciones/"+n,t,a);case 7:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,n){return e.apply(this,arguments)}}(),v=n(637),O=n(633),w=function(e){switch(e){case!0:return"success";case!1:return"danger";default:return"primary"}},k=[{key:"name",value:"nombre",sorter:!0},"description","content","highlight","actions"],A={name:"Nombre",description:"Descripcion",content:"Contenido",highlight:"Destacado",actions:"Acciones",createdAt:"Fecha"};t.default=function(e){var t=e.history,n=Object(u.useState)(!1),o=Object(l.a)(n,2),h=o[0],g=o[1],m=Object(u.useState)(!1),y=Object(l.a)(m,2),S=y[0],C=y[1],T=Object(u.useState)(!1),F=Object(l.a)(T,2),D=F[0],I=F[1],M=Object(u.useState)(!1),P=Object(l.a)(M,2),B=P[0],E=P[1],N=Object(u.useState)(!1),z=Object(l.a)(N,2),K=z[0],G=z[1],H=Object(u.useState)(null),J=Object(l.a)(H,2),Q=J[0],R=J[1],U=Object(u.useState)([]),L=Object(l.a)(U,2),W=L[0],q=L[1],V=Object(u.useState)([]),Y=Object(l.a)(V,2),Z=Y[0],_=Y[1],X=Object(u.useState)(!1),$=Object(l.a)(X,2),ee=$[0],te=($[1],Object(u.useState)(null)),ne=Object(l.a)(te,2),re=ne[0],ae=ne[1],ce=Object(u.useState)({name:"",description:"",highlight:ee,category:"",image:"",content:""}),oe=Object(l.a)(ce,2),ie=oe[0],se=oe[1],le=function(){I(!1),g(!h),G(!1),se({name:"",description:"",highlight:"",category:"",image:"",content:"",clean:!!h})};Object(u.useEffect)((function(){ue(),de(),pe()}),[]);var ue=function(){var e=Object(s.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("apitoken");case 2:null!==(n=e.sent)&&void 0!==n||t.push("/login");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,ae(!0),e.next=4,b();case 4:return t=e.sent,e.next=7,q(t.data.reverse());case 7:if(!(t.data.length>0)){e.next=10;break}return e.next=10,ae(!1);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,ae(!0),e.next=4,Object(v.c)();case 4:return t=e.sent,e.next=7,_(t.data);case 7:if(!(t.data.length>0)){e.next=10;break}return e.next=10,ae(!1);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new FormData,""!==ie.name&&""!==ie.description&&""!==ie.content&&""!==ie.highlight&&""!==ie.image&&""!==ie.category){e.next=6;break}E(!0),setTimeout((function(){E(!1)}),6e3),e.next=27;break;case 6:return t.append("name",ie.name),t.append("description",ie.description),t.append("content",ie.content),t.append("category",ie.category),t.append("highlight",ie.highlight),t.append("image",ie.image),e.prev=12,e.next=15,f(t);case 15:if(!(n=e.sent)){e.next=22;break}return console.log(n.data,"post creado"),g(!h),e.next=21,de();case 21:E(!1);case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(12),console.log(e.t0);case 27:case"end":return e.stop()}}),e,null,[[12,24]])})));return function(){return e.apply(this,arguments)}}(),ge=function(e){C(!S),R(e)},me=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t,"si entra al delete"),e.prev=1,null===t){e.next=5;break}return e.next=5,j(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return C(!S),e.next=13,de();case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("name",ie.name),t.append("description",ie.description),t.append("content",ie.content),t.append("category",ie.category),t.append("highlight",ie.highlight),""!==ie.image&&t.append("image",ie.image),""===ie.id||""===ie.name||""===ie.description||""===ie.content||""===ie.highlight||""===ie.category){e.next=26;break}return e.prev=8,e.next=11,x(t,ie.id);case 11:if(!(n=e.sent)){e.next=18;break}return console.log(n.data,"post actualizado"),g(!h),e.next=17,de();case 17:I(!1);case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(8),console.log(e.t0),E(!0);case 24:e.next=28;break;case 26:E(!0),setTimeout((function(){E(!1)}),6e3);case 28:case"end":return e.stop()}}),e,null,[[8,20]])})));return function(){return e.apply(this,arguments)}}(),je=function(e){e.preventDefault(),se(Object(c.a)(Object(c.a)({},ie),{},Object(a.a)({},e.target.name,e.target.value))),console.log(ie)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(d.j,{children:[Object(r.jsx)(d.n,{children:Object(r.jsx)(d.f,{color:"primary",onClick:function(){return le()},className:"mr-1",children:"Agregar Publicaci\xf3n"})}),Object(r.jsx)(d.u,{xs:"12",lg:"12",children:Object(r.jsxs)(d.j,{children:[Object(r.jsx)(d.n,{children:"Temas de Foro"}),Object(r.jsx)(d.k,{children:Object(r.jsx)(d.y,{items:W,fields:k,columnHeaderSlot:A,itemsPerPage:10,tableFilter:{label:"Buscar",placeholder:"Ingresa tu Busqueda"},loading:re,pagination:!0,striped:!0,responsive:!0,scopedSlots:{highlight:function(e){return Object(r.jsx)("td",{children:Object(r.jsx)(d.b,{color:w(e.highlight),children:1==e.highlight?"Si":"No"})})},actions:function(e){return Object(r.jsxs)("td",{children:[Object(r.jsx)(d.f,{style:{marginRight:10},onClick:function(){return function(e){g(!h),I(!0),E(!1),se(Object(c.a)(Object(c.a)({},ie),{},{id:e.id,name:e.name,description:e.description,highlight:e.highlight,category:e.category,content:e.content,clean:!!h}))}(e)},color:"warning",children:"Editar"}),Object(r.jsx)(d.f,{onClick:function(){return ge(e.id)},color:"danger",children:"Eliminar"})]})},name:function(e){return Object(r.jsx)("td",{style:{maxHeight:20,height:20,maxWidth:90},children:"".concat(e.name)})},description:function(e){return Object(r.jsx)("td",{style:{maxHeight:20,height:20,maxWidth:90},children:"".concat(e.description)})},content:function(e){return Object(r.jsx)("td",{style:{maxHeight:20,height:20,maxWidth:90},children:"".concat(e.content)})}}})})]})})]}),Object(r.jsx)(p.a,{visible:h,modalToggle:le,onSubmit:D?function(){return be()}:function(){return he()},title:"Publicacion",children:Object(r.jsx)(d.u,{xs:"12",sm:"12",children:Object(r.jsx)(d.j,{children:Object(r.jsxs)(d.k,{children:[Object(r.jsxs)(d.K,{children:[Object(r.jsx)(d.ab,{htmlFor:"name",children:"Nombre"}),Object(r.jsx)(d.Q,{id:"name",name:"name",value:ie.name,onChange:function(e){return je(e)},placeholder:"Nombre del curso"})]}),Object(r.jsxs)(d.K,{children:[Object(r.jsx)(d.ab,{htmlFor:"description",children:"Descripci\xf3n"}),Object(r.jsx)(d.Q,{id:"description",name:"description",value:ie.description,onChange:function(e){return je(e)},placeholder:"Descripci\xf3n"})]}),Object(r.jsxs)(d.K,{children:[Object(r.jsxs)(d.K,{children:[Object(r.jsx)(d.ab,{htmlFor:"content",children:"Contenido"}),Object(r.jsx)(d.Q,{type:"textarea",name:"content",onChange:function(e){return je(e)},value:ie.content,id:"content",placeholder:"Contenido"})]}),Object(r.jsx)(d.ab,{htmlFor:"category",children:"Categor\xeda"}),Object(r.jsxs)(d.vb,{onChange:function(e){return je(e)},value:ie.category,custom:!0,name:"category",id:"category",children:[Object(r.jsx)("option",{value:"",children:"'Selecciona'"}),Z.map((function(e){return Object(r.jsx)("option",{value:e.id,children:e.name})}))]})]}),Object(r.jsxs)(d.K,{row:!0,children:[Object(r.jsx)(d.u,{md:"3",children:Object(r.jsx)(d.ab,{children:" \xbfDestacado?"})}),Object(r.jsx)(d.u,{md:"9",children:Object(r.jsx)(d.K,{variant:"custom-checkbox",inline:!0,children:Object(r.jsx)(d.vb,{onChange:function(e){return je(e)},value:ie.highlight,custom:!0,name:"highlight",id:"highlight",children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("option",{value:""}),Object(r.jsx)("option",{value:!0,children:"Si"}),Object(r.jsx)("option",{value:!1,children:"No"})," "]})})})})]}),Object(r.jsxs)(d.K,{row:!0,children:[Object(r.jsx)(d.ab,{col:!0,htmlFor:"image",children:"Imagen"}),Object(r.jsx)(d.u,{xs:"12",md:"12",children:Object(r.jsx)(d.S,{encType:"multipart/form-data",onChange:function(e){return function(e){var t=e.target.files[0],n=new FileReader;if(!/^image/.test(t.type))return G(!0),console.log(e.target.files[0].name),void se(Object(c.a)(Object(c.a)({},ie),{},{image:"",clean:!!h}));G(!1),n.onload=function(e){se(Object(c.a)(Object(c.a)({},ie),{},{image:e.target.result})),console.log(ie)},n.readAsDataURL(t),console.log(ie.image),console.log("Uploaded"),console.log(ie.image)}(e)},id:"image",name:"image"})})]},ie.clean),B?Object(r.jsx)(d.u,{children:Object(r.jsx)(d.K,{children:Object(r.jsx)(d.a,{color:"danger",children:"Debes ingresar todos los campos!"})})}):null,K?Object(r.jsx)(d.u,{children:Object(r.jsx)(d.K,{children:Object(r.jsx)(d.a,{color:"danger",children:"Formato de archivo inv\xe1lido, solo im\xe1genes!"})})}):null]})})})}),Object(r.jsx)(O.a,{visible:S,onSubmit:function(){return me(Q)},modalToggle:function(){return ge(null)},title:"Eliminar Usuario",children:"Estas seguro de eliminar este Usuario?"})]})}}}]);
//# sourceMappingURL=9.e57739bd.chunk.js.map