(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[28],{627:function(n,e,t){n.exports=t(381)},628:function(n,e,t){"use strict";function a(n,e,t,a,o,c,r){try{var s=n[c](r),i=s.value}catch(u){return void t(u)}s.done?e(i):Promise.resolve(i).then(a,o)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(o,c){var r=n.apply(e,t);function s(n){a(r,o,c,s,i,"next",n)}function i(n){a(r,o,c,s,i,"throw",n)}s(void 0)}))}}t.d(e,"a",(function(){return o}))},634:function(n,e,t){"use strict";e.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAB3CAYAAACHb4fXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABJvSURBVHgB7Z0JmFVlGcff2WfYhn0GHAMLKUaCXKPUQLFEg1Y1DTHDpVJKNDOyTTPNSp6kolXNyp4gzVJKUdNAS9MkVBCyUBRxVpARmH3r917Omfnmcu9Z7j3n3DtP9/885znbt77f+73f+73fJjLIUVFRcfXYsWN/LFmKPBnEGDdu3JS8vLzNPJZwn1FfX79Jsgz5MniRl5+ffw33En3p7e1dKVmYn0FLYMTCfIh6hvHpxPHjx39QsgyDlcDKvdeKxb02IPiNo0ePHiFZhEFJYBq2y7gdGf8dOTy1oKDgEskiDLpGjoZtGIT8D48TkjhphMiza2trt0oWYNBxMMT9iiQnrmJcV1fXFZIlGFQcPGHChGnd3d0beCxzcdqBjJ5XV1f3V8kwBhMH5/X09Kgq5kZcRTFul0sW5G/QEBjZeypawhwfXo5EbbtYMoxBISKqqqrKOjo6NvL4VvGHl1tbW4/Zt2/fbskQBgUHd3Z2flr8E1cxeciQIZ+WDCLrOXjMmDGHoHY9yeMhkhp64f7DmpqaXpEMIOs5uLCw8BpJnbiKvOLiYm3wMsJMWc3BNFIzuT3ONUTSBA3k6Y2NjfdLxMh2Dv6RBEBcBR2UG9GjAwnLD7KWwKhlF3B7lwSHGfTwPikRIytFhKWWbeFxsgSLnVyzGxoaXpKIkJUcjFqmtoTJEjyqkMWXS4TIOg4eOXLkJFp9HfoZLuGgmW700bt27XpBIkDWcTDEvU7CI65iKIagWyUiZBWBKysrZ1OFF0r4OJ4hp/dLBMgmAhdB3GtRpyJJE/HchDgaKSEjawgM934KAs+WiACB31ZUVPQpCRlZ0cgNHz58bFlZmdob3iwRggLtamlpObS5ublOQkJWcDAWr69LxMRVwMWFxP0tCREZ52DsDUrYf3GVS2aA1tZzMmrbegkB2cDBOq8sU8RVoLXlf7m6urpYQkBGCQz3nsrtFMk85mJpO0dCQMYIfPTRR6tadrNkRy3KRx5/RkIQmYWSIezYsWOhqkqSOezhUoPS3zHq31NTU6NaTK8EjIw0cui84+DerVxjJFq8QJy/R+Y+jHr2bKLBUJXFW7Zs6ZCAkBEOptW+hluoxIWQPdxqIeYDxHd/e3v7I3v37n3dyc+oUaPK0SZu4/GjEhAi5+CKiopZZPhRxEORBI92CHsvYT/C/Umq/gu1tbUtXj1j5H8Pftd3d3cft3v37n9KAIiag/Mh7lcDJG4z1+OEqXJ0/ejRox9Pp3rrxBbSpnrbSoxBc+HmfZImIiUwsncRxDhdUodyo86s/AeE0AHMh+vr65vtn3V16fV4CwoKdFK39vCO5fo4n34qaSJKEVFAFdxEwqeJP9RyrSPjD3GthauUioG39nDsRDhXh5RsmjS0tbVNc5PbboiMg5G910EgV+LiponbM1wPkuFVcOjLEgJBE8Q7SwYy3HgMUJ+HwF+WNBAJgbGWqcaQbCKeEm8znP07xMc6xuM2NwGJGBTmSfHfIPpVY8aM+WM6DV4kBIYTViTTefm+ury8/Pxt27a1S4agui+iJ5Etmraz8KvcP8LVJSmgQEIG9oZ3c/tOsrjg3OnIusrS0tL1ra2tGSEyhTyTdHxREqdxCibN5+mYbJEUELYdIJ/E/4C7o6WKzF0Ip9wwZcqUEskAEA/vlORpLCB9aq9OqbaHSmC0ho+SuKM8Or+UBuXWTBAZJniPi5MjyMvnJQWEpqbpejXtSfFYKf7w6xEjRlwUoUwuQIy9yH2SiztVF49saGioFx8IjYNR2peJf+IqFiknS0RAfVTV8U0enE6gNt4gPhEKgalO70CuXSCpYyEZ/5najCVkIB5UQ/BUk3G7mJpZLT4QFgdfTWLGSxrA/5mvvfZaOhOvvcYzx497auZKP9NgAycwnDeXqnSGpIdGasCp2BZelhChhFK7gx8/uJ9Dh+hDXt0HTeA8OOK7kl7j2QJx50PcpyRkdHV1qYYzTHyCPN6A7cLT/LlACQz3qrJ+pKSORq73RUFcC6ka1ichKpZ4cRiYmqbDQFSdZ8V5HbETGvH/MbqsUS1/zUc90/ROl9TQhmF+CnaK15wcBcbBVLcrJUXiUuVqVCxESFw1T1YQbypr72yUWjuuOCIQAiMaphOZpyqTAI1k9NwIxUIMpHdWuiMr+F/gNkMzCAKrmNH5Xams4GmJmnMNBDGwWVFUVPReJwdpE5hOxWlw4HzxD5W586PmXAua76Cmyp4qLhGljMmTJ5dSTb4t/pFJzlWRdgS3KgkGM51+pkVg7LdLxX8r3IgR6IQMca6NWRIQYDDHHmvKBKYX9DZEg9+GLaaK1dTUbJTMYoEEB0dbd8oERgfUToUfW0FT2GJBe1du9mTdVAnGOFkCAmE5zp1IicCqlnE714cX27YQmliAuBOIY72aOp32TqMHdgy3oRIcapx+pkRgaxtDr0MoodsWlHORhX+WA930hRBxeTJOJu0nSLDY7PTTN4HpXqr91G2IxUboDRpVvpICvA8C99lAdIwPTr4jEZGDJjBx/8Hxv/iAzj4k8d/z6FzFwvwwGzSdjcPtPq5ERDtj3759vzKJPHHixEPNgggA26qqqh51cuCLwHDjEjjAdXjFti2ELBZ0qtNdTgQjHWeZA6mdnZ2z0h0IMEHcKzds2NDp5MbzUDRV8XAC/IIHp6HbFiziatU8zoPzhRC5h4ZviRrLJTio7P25myM/Y/3fEPfVQDFVjJHXUBs05VzxRlwbi2j42n36SQoYqJfwroKJmt3cerIH6yJtnTfm4qyejC8g0kAmLieCqmJk7B7y52uYJ2gQ/7LGxkZPJgJPHEyn4iadmOyAZ3FzNpz7bwkJqttSgGvJ3AzJIKDDFeTTa0Pv3sghexcT6DFJfu/j3zerq6uPwbIfGnGVc2lgH+Axk8TV4axz6+vrPRNX4ciWyjXYO5+Da+JnvbRxfZ/vt1BV/ishwmeDFgY6yeevGbG5ds+ePTvEJxxFBMS93iKuLi7ZDrf+g/tjiIO7Xn/99b0SMiyx4LdBCwJN5PMZ4tZZ9atgopQ3UXLkYN2vl1tzbW2t9rdTmh+bDrSXJqlNv0oJEBTe6cYetatWcsghhxxyyCGHHHLIIYcccsghhxxyyCGHHHLIIYcc/m/gOGRUWVmpU6WO12furzJcfZU4I59hnuUMvRw0zIN/nfjRwLWJ5ycY59pm/tdzixjzW2a/t7S0LPFyDlxFRcXZ3OzzlDcz6nt9Ajd6ssEU6/Upt5FhXTlUUlJiH+fe29nZeT1jkM+LBxCXbu6xNOaxt7fJicD5OH7JGFFWAh0BkV908FMIobaLy/oH3dobYq7r6en5BONfsfm1jP9N4n2DsbfPlcS13CkcXY3/6quv6jFmE6xwL6DgbjPdkIfDCPc/utu19em/BQUF73DaERDGmoyf7fa77iRIoeg2vI67X1lHs/1N+g9ZqUs6L8I64tEcri8J6hQVK7OnwOlP6Zw3/UaGXyH839lueL54zpw5jqPeNTU1c6V/8aPOQ/5TAmeXG8RVHM4QvK9VUTojHsb5mpu7wsJCXac92fyWjMB68vZB4oCEnu+W6Tj3XyJxuszrNDjiA3zSkwbMJQSH4KZvqxbivNPwO3XLli2Ow/WMAJ9nPxOuclmD+V/nscUdz27D9+HWhHOFNcqeENSUc8jjWfHfExIYrppi7GOzg2f7HLahW7duPV+8J+ppquxavRAFa6jyP+NZq5o5r+s8Eheb0l9XV6dzbZ8z/J+ZLGyd68vtNOPTd+PdUEjzpJ/DfysHDovS7ydWVVUdLj6AnxEU6OpEe0WoaCCtP8LNQbtW5ScJ7HL7Hx5/DGfdbf/j/VJJb/mXbkr/C+O9jPeJ1nO3zhYy0nGxrsVLFAiZ1ZWa9jLWbRTcY3FOtBZ+xni/ncuuIfnt7e3LxBt0/q+9f9DbES83mj81fcjdXxppGbDX0EGEskrI3s9cp2mu6ejo0ITZUzVnwuGOi+/cAHGK495bjde1cmATUMUQtImES16trWDsZ12fMaABQjwcxXd7N7+a4uLixyjINTzH4qLw3m/tSOgG1WT6NBP8fdbaez6G5ubmC7nNtV7f4P+AhvkgApMIVXns0niCavv8nj173uD5l/1x5H1OUoQuoyoqKjIncm9DBerbEsCa6/a09EemhZ0XF4ZW7+Ot13Y4dUV8PHxbbISxcufOna2IqXU8P2N9rkAVc1xnbIP06smMT9rvWstUlUM0TCO87xtOvwizbBqQDvPFOurA3GPyJiPQVdLPJYuclkoZ+DDEuEwvSv0LXCtJkKoxi+xgef+aHKz+rDDinWctG+uDTiE10v4Yjdt287/OxtSV8Pa7sVClFwZabXz/pngAXNqNW9W3m6z4qyic31C775X+wl87YsSI2+P9DiAwJXwsGTrRetWpqQ/a/1BBVEe1z2Aj7IJF4o5LCONmveTA9oraesfEi+rC3K6FOL+N90RjuAY/tkZQEKcJqBbTt2cO7n4R71/3DMLPoVY8T6MCbjX+qZiwFw++RXfkFg/Q/YNMNVUPYZX+zstuCm5xor3e4kWEqj12S/h7c/NjSzG/3UjouckaIAPqZ7/ECX7wBzhiHoS8Lok/nTL6G/uF5wV2umgjVN7ZPcVXqL4DllHpcZWk7WwjnT8w/1vHTf7FCNvzcmDE1+3c7jK/WYyyNNmEwT6dVmcykpgP6w7QVsJ6+DagpdUusP0fHNfa2qpy8GFJAkr1Mtz/jbCGwvEP2L003psovEfEuWekMl+1AF3RX01aZpDBjcg4UzNYq7LV9ESDrDVwVn/+e6fG58PqSdqv8/UURh8HW2uB6GZKb7bycg+Fdkcyx2an4RNEPM5IxOL4ZQMGcRW68aee8pqUwBTIy/ayAqriZ7kpV+rOVIuQx6oXJ13Ex79N+NmIWz2ZtoS0XAShdCHOPCstyuWr4/3hbjHf8/tf89w2WC5Hw1ARtFw8QLdWJB2XWlucb+f9407uTRHh6DAJTqGx87TvgiVrV1mvWrB3uKhJekxDX88Oop1NprQ3GFvzxvMT06dPH6D7lpeXj9Jeo/iEhi0+Vlxpx4nbd6ih2hFy3JQ/RmBa3ZNIsL3+Ya8+UxWnJbpQtKeTIHs9RgVV/zzxCIubdlqvQ4DKs6QGJ6xYuoflfsvvKDF6a2q3WLdu3YBJ4bTs2gjZ2s1zyfKglxxQ89qtsGdQW3wdQQnnLkPubnBzV2hF0Nc68nwf3LbJyROJ+aMuZbLcq1qnGoLrDHhVp/C7hJK/W4+W1G0NqW6fgyNWJHKvyxT4vxq39j6YNvFadX2y6VZXc+7du/dj9jth3+q2MAcxpSqjNprFpEn17XvEOzztK59v6Yy2wt1L6d7h5onErLBaT8UkiOB5q0GIfC/EsTstWkDXYB48wsGLdtPjtZA/xeu+NFLasE3VZ7XDko+7xQW4+aGRjg94FXd+kK8rFrmXWgnbSKk+5OYJjtOjFh4wEudnp9VetdThx16xM5KM/kTlZ5K4NJ4Bxm7SeVu8O8K70njVRTo7xQVwuHYU9livZah8vq1sbig0W2MSucrrSSpqBJJ++dim+icqk/q9n3+xqkzhJdysAp16FwV5kWoq9jfc6slcTyRw3s21wlLsNa5OCuOvEL7PgXVUe5OdDyttXqAN6dXGDqyxhd20Mx3EY9Nkd1lZWYePgxFqDXpGfppCDjnkkEMO/Qj9oBIFathZpaWlb6djMZ2rGCN6rQ6zYN6bhCmwQW2r9Oou5HtsnwnUvjPNg0F0+0b8l2D7sFu2Qu1649d2fzruY2um+b6ARukowjtp6NChVbjps6TxbynGoo1oGNpw6vD8JNydMWzYsGNJVxlh+F6L7IZIDixFb66m17PKuv5lfR6OejZWH1CP1KBznBaE9c8cMSlArTscc2nfKAJWPO0gzUQTiZlM6fFNtf+hH68hDj0Xaejs2bP7Og46X0G3w2HwoC9sbBCX6DC/jhUS/1gJAZEQmIwpxy3VC25JtmfOg7g7JH67WLjzXdo1V+ueGPYC3h/le7l2lOIDgvDn8O+hO++8s9v+BsHfC5deTUH1Ge8h8LcJ/1u4X8j/pEardBAJgSFGF5x1s1779+9vSOYOjr4Fbh5w4grcO4ebHlM5CUJ80PyH7eEW9OcBnQNrRLzYtBNYm+G/FXGxVAktVkG1tbWVwMHL0HvX8z/wTkYs/RINeuI/kKFe81mHmvWIRwj6Z95jtladuQPR66jC34AQai/pmyeh7tUWDDHvghPNDUN0ulfDqFGjToC7Y6JDR6D5pmHcSPg3U1AnW/F+BLF0GoV0GN89n/3pB/8Dk3niLYLYfCEAAAAASUVORK5CYII="},643:function(n,e,t){"use strict";var a=t(1),o=t.n(a),c=o.a.lazy((function(){return t.e(22).then(t.bind(null,717))})),r=o.a.lazy((function(){return t.e(31).then(t.bind(null,684))})),s=o.a.lazy((function(){return t.e(34).then(t.bind(null,685))})),i=o.a.lazy((function(){return t.e(12).then(t.bind(null,686))})),u=o.a.lazy((function(){return t.e(13).then(t.bind(null,687))})),l=o.a.lazy((function(){return t.e(14).then(t.bind(null,688))})),m=o.a.lazy((function(){return t.e(15).then(t.bind(null,689))})),b=o.a.lazy((function(){return t.e(35).then(t.bind(null,690))})),d=o.a.lazy((function(){return t.e(16).then(t.bind(null,691))})),p=o.a.lazy((function(){return t.e(17).then(t.bind(null,692))})),h=o.a.lazy((function(){return t.e(36).then(t.bind(null,693))})),j=o.a.lazy((function(){return t.e(18).then(t.bind(null,694))})),f=o.a.lazy((function(){return t.e(37).then(t.bind(null,695))})),x=o.a.lazy((function(){return t.e(38).then(t.bind(null,696))})),O=o.a.lazy((function(){return t.e(39).then(t.bind(null,697))})),v=o.a.lazy((function(){return t.e(19).then(t.bind(null,698))})),y=o.a.lazy((function(){return t.e(40).then(t.bind(null,699))})),N=o.a.lazy((function(){return t.e(49).then(t.bind(null,700))})),g=o.a.lazy((function(){return t.e(41).then(t.bind(null,701))})),w=o.a.lazy((function(){return t.e(42).then(t.bind(null,702))})),z=o.a.lazy((function(){return t.e(43).then(t.bind(null,703))})),A=o.a.lazy((function(){return Promise.all([t.e(3),t.e(44)]).then(t.bind(null,704))})),J=o.a.lazy((function(){return Promise.all([t.e(2),t.e(54),t.e(32)]).then(t.bind(null,708))})),C=o.a.lazy((function(){return Promise.all([t.e(2),t.e(53),t.e(33)]).then(t.bind(null,709))})),D=o.a.lazy((function(){return Promise.all([t.e(2),t.e(45)]).then(t.bind(null,638))})),P=o.a.lazy((function(){return t.e(20).then(t.bind(null,710))})),B=o.a.lazy((function(){return t.e(46).then(t.bind(null,711))})),H=o.a.lazy((function(){return t.e(21).then(t.bind(null,712))})),I=o.a.lazy((function(){return t.e(9).then(t.bind(null,713))})),E=o.a.lazy((function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,719))})),F=o.a.lazy((function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,714))})),T=o.a.lazy((function(){return t.e(47).then(t.bind(null,715))})),V=o.a.lazy((function(){return Promise.all([t.e(3),t.e(48)]).then(t.bind(null,718))})),W=o.a.lazy((function(){return Promise.all([t.e(0),t.e(29)]).then(t.bind(null,720))})),G=o.a.lazy((function(){return t.e(23).then(t.bind(null,716))})),S=o.a.lazy((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,721))})),U=o.a.lazy((function(){return Promise.all([t.e(0),t.e(30)]).then(t.bind(null,722))})),k=[{path:"/cursos",exact:!0,name:"Home"},{path:"/theme",name:"Theme",component:I,exact:!0},{path:"/theme/colors",name:"Colors",component:I},{path:"/cursos",exact:!0,name:"Cursos",component:E},{path:"/cursos/modulos",name:"Modulos",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,723))}))},{path:"/cursos/etiquetas",name:"Etiquetas",component:U},{path:"/foro",name:"Temas de Foro",component:S},{path:"/categorias",name:"Categorias",component:F},{path:"/theme/typography",name:"Typography",component:T},{path:"/base",name:"Base",component:i,exact:!0},{path:"/base/breadcrumbs",name:"Breadcrumbs",component:s},{path:"/base/cards",name:"Cards",component:i},{path:"/base/carousels",name:"Carousel",component:u},{path:"/base/collapses",name:"Collapse",component:l},{path:"/base/forms",name:"Forms",component:m},{path:"/base/jumbotrons",name:"Jumbotrons",component:b},{path:"/base/list-groups",name:"List Groups",component:d},{path:"/base/navbars",name:"Navbars",component:p},{path:"/base/navs",name:"Navs",component:h},{path:"/base/paginations",name:"Paginations",component:j},{path:"/base/popovers",name:"Popovers",component:f},{path:"/base/progress-bar",name:"Progress Bar",component:x},{path:"/base/switches",name:"Switches",component:O},{path:"/base/tables",name:"Tables",component:r},{path:"/base/tabs",name:"Tabs",component:v},{path:"/base/tooltips",name:"Tooltips",component:y},{path:"/buttons",name:"Buttons",component:z,exact:!0},{path:"/buttons/buttons",name:"Buttons",component:z},{path:"/buttons/button-dropdowns",name:"Dropdowns",component:g},{path:"/buttons/button-groups",name:"Button Groups",component:w},{path:"/buttons/brand-buttons",name:"Brand Buttons",component:N},{path:"/charts",name:"Charts",component:A},{path:"/icons",exact:!0,name:"Icons",component:J},{path:"/icons/coreui-icons",name:"CoreUI Icons",component:J},{path:"/icons/flags",name:"Flags",component:C},{path:"/icons/brands",name:"Brands",component:D},{path:"/notifications",name:"Notifications",component:P,exact:!0},{path:"/notifications/alerts",name:"Alerts",component:P},{path:"/notifications/badges",name:"Badges",component:B},{path:"/notifications/modals",name:"Modals",component:H},{path:"/notifications/toaster",name:"Toaster",component:c},{path:"/widgets",name:"Widgets",component:V},{path:"/usuarios",exact:!0,name:"Users",component:W},{path:"/users/:id",exact:!0,name:"User Details",component:G}];e.a=k},736:function(n,e,t){"use strict";t.r(e);var a=t(15),o=t(1),c=t.n(o),r=t(38),s=t(20),i=t(621),u=t(643),l=Object(a.jsx)("div",{className:"pt-3 text-center",children:Object(a.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),m=function(){return Object(a.jsx)("main",{className:"c-main",children:Object(a.jsx)(i.w,{fluid:!0,children:Object(a.jsx)(o.Suspense,{fallback:l,children:Object(a.jsxs)(s.d,{children:[u.a.map((function(n,e){return n.component&&Object(a.jsx)(s.b,{path:n.path,exact:n.exact,name:n.name,render:function(e){return Object(a.jsx)(i.H,{children:Object(a.jsx)(n.component,Object(r.a)({},e))})}},e)})),Object(a.jsx)(s.a,{from:"/",to:"/cursos"})]})})})})},b=c.a.memo(m),d=function(){return Object(a.jsxs)(i.I,{fixed:!1,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{href:"https://coreui.io",target:"_blank",rel:"noopener noreferrer",children:"Arvam"}),Object(a.jsx)("span",{className:"ml-1",children:"\xa9 2020 "})]}),Object(a.jsxs)("div",{className:"mfs-auto",children:[Object(a.jsx)("span",{className:"mr-1",children:"Powered by"}),Object(a.jsx)("a",{href:"https://coreui.io/react",target:"_blank",rel:"noopener noreferrer",children:" 2020"})]})]})},p=c.a.memo(d),h=t(163),j=t(626),f=function(){var n=Object(h.b)(),e=Object(h.c)((function(n){return n.sidebarShow}));return Object(a.jsxs)(i.M,{withSubheader:!0,children:[Object(a.jsx)(i.Nb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var t=!![!1,"responsive"].includes(e)||"responsive";n({type:"set",sidebarShow:t})}}),Object(a.jsx)(i.Nb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var t=![!0,"responsive"].includes(e)&&"responsive";n({type:"set",sidebarShow:t})}}),Object(a.jsx)(i.N,{className:"mx-auto d-lg-none",to:"/"}),Object(a.jsx)(i.O,{className:"d-md-down-none mr-auto"}),Object(a.jsx)(i.O,{className:"px-3",children:Object(a.jsx)(y,{})})]})},x=t(627),O=t.n(x),v=t(628),y=Object(s.h)((function(n){var e=n.history,t=function(){var n=Object(v.a)(O.a.mark((function n(){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,localStorage.removeItem("apitoken");case 2:return n.next=4,localStorage.removeItem("iduser");case 4:return n.next=6,localStorage.removeItem("email");case 6:e.push("/login");case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.jsxs)(i.z,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(a.jsx)(i.E,{className:"c-header-nav-link",caret:!1,children:Object(a.jsx)("div",{className:"c-avatar",children:Object(a.jsx)(i.P,{src:"avatars/admin.png",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})})}),Object(a.jsxs)(i.D,{className:"pt-0",placement:"bottom-end",children:[Object(a.jsx)(i.C,{divider:!0}),Object(a.jsxs)(i.C,{onClick:function(){return t()},children:[Object(a.jsx)(j.a,{name:"cil-lock-locked",className:"mfe-2"}),"Salir"]})]})]})})),N=t(634),g=[{_tag:"CSidebarNavItem",name:"Categor\xeda de Cursos",to:"/categorias",icon:"cil-cursor"},{_tag:"CSidebarNavItem",name:"Cursos",to:"/cursos",icon:"cil-cursor"},{_tag:"CSidebarNavItem",name:"Temas de Foro",to:"/foro",icon:"cil-cursor"},{_tag:"CSidebarNavItem",name:"Usuarios",to:"/usuarios",icon:"cil-user"}],w=function(){var n=Object(h.b)(),e=Object(h.c)((function(n){return n.sidebarShow}));return Object(a.jsxs)(i.wb,{show:e,onShowChange:function(e){return n({type:"set",sidebarShow:e})},children:[Object(a.jsx)(i.xb,{className:"d-md-down-none",to:"/",children:Object(a.jsx)("div",{children:Object(a.jsx)("img",{alt:"arvam",style:{width:49,height:60},src:N.a})})}),Object(a.jsx)(i.zb,{children:Object(a.jsx)(i.x,{items:g,components:{CSidebarNavDivider:i.Ab,CSidebarNavDropdown:i.Bb,CSidebarNavItem:i.Cb,CSidebarNavTitle:i.Db}})}),Object(a.jsx)(i.yb,{className:"c-d-md-down-none"})]})},z=c.a.memo(w);e.default=function(){return Object(a.jsxs)("div",{className:"c-app c-default-layout",children:[Object(a.jsx)(z,{}),Object(a.jsxs)("div",{className:"c-wrapper",children:[Object(a.jsx)(f,{}),Object(a.jsx)("div",{className:"c-body",children:Object(a.jsx)(b,{})}),Object(a.jsx)(p,{})]})]})}}}]);
//# sourceMappingURL=28.63d9f03c.chunk.js.map