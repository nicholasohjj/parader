(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{71:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var r=n(10),s=n.n(r),a=(n(71),n(9)),c=n(0),o=n(1),l=function(e){var t=e.message;return null===t?null:Object(o.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t})},i=n(126),u=n(135),j=n(132),d=n(137),b=n(134),O=n(138),p=n(95),h=new Date,x=h.getDate(),m=h.getMonth()+1,f=h.getFullYear().toString().substr(-2);x<10&&(x="0".concat(x)),m<10&&(m="0".concat(m));var g="".concat(x).concat(m).concat(f),v=Object(i.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:177},selectEmpty:{marginTop:e.spacing(2)}}})),w=function(e){var t=e.addName,n=e.newName,r=e.setNewName,s=e.newStatus,a=e.setnewStatus,c=e.newGroup,l=e.setnewGroup,i=e.newexcuse,h=e.setnewExcuse,x=e.newRole,m=e.setnewRole,f=e.setnewReason;return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:t,children:[Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{id:"standard-multiline-flexible",label:"Rank/Name",multiline:!0,maxRows:4,value:n,onChange:function(e){console.log("Name: ".concat(e.target.value)),r(e.target.value)}})}),Object(o.jsx)("div",{children:Object(o.jsxs)(j.a,{className:v().formControl,children:[Object(o.jsx)(d.a,{id:"demo-simple-select-label",children:"Current Status"}),Object(o.jsxs)(b.a,{labelId:"status",id:"status",value:s,onChange:function(e){console.log("Status: ".concat(e.target.value)),a(e.target.value);var t="";t="mc"===e.target.value?prompt("Details","MC FROM ".concat(g," TO ").concat(g)):"ma"===e.target.value?prompt("Details","MA AT"):"off"===e.target.value?prompt("Details","OFF ON ".concat(g)):"leave"===e.target.value?prompt("Details","LEAVE ON ".concat(g)):"attachedout"===e.target.value?prompt("Details","ATTACHED OUT TO"):"others"===e.target.value?prompt("Details",""):"",console.log("Reason: ".concat(t)),t&&f(t.toUpperCase())},children:[Object(o.jsx)(O.a,{value:"present",children:"Present \u2705"}),Object(o.jsx)(O.a,{value:"mc",children:"MC \ud83d\ude37"}),Object(o.jsx)(O.a,{value:"ma",children:"MA \ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}),Object(o.jsx)(O.a,{value:"off",children:"Off \ud83d\udeab"}),Object(o.jsx)(O.a,{value:"leave",children:"Leave \ud83d\udeaa"}),Object(o.jsx)(O.a,{value:"attached",children:"Attached Out \ud83c\udd70"}),Object(o.jsx)(O.a,{value:"others",children:"Others \ud83d\uddd2"}),Object(o.jsx)(O.a,{value:"stayout",children:"Stay Out \ud83c\udfe0"})]})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)(j.a,{className:v().formControl,children:[Object(o.jsx)(d.a,{id:"demo-simple-select-label",children:"Group"}),Object(o.jsxs)(b.a,{labelId:"group",id:"group",value:c,onChange:function(e){console.log("Group: ".concat(e.target.value)),l(e.target.value)},children:[Object(o.jsx)(O.a,{value:"HQ",children:"HQ"}),Object(o.jsx)(O.a,{value:"CCP",children:"FG1 - CCP"}),Object(o.jsx)(O.a,{value:"CSP",children:"FG2 - CSP"}),Object(o.jsx)(O.a,{value:"OTHERS",children:"Others"})]})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)(j.a,{className:v().formControl,children:[Object(o.jsx)(d.a,{id:"demo-simple-select-label",children:"Role"}),Object(o.jsxs)(b.a,{labelId:"role",id:"role",value:x,onChange:function(e){console.log("Role: ".concat(e.target.value)),m(e.target.value)},children:[Object(o.jsx)(O.a,{value:"hq",children:"Coy HQ"}),Object(o.jsx)(O.a,{value:"sevenspec",children:"7th Mono Spec"}),Object(o.jsx)(O.a,{value:"ic2",children:"IC2 Opr"}),Object(o.jsx)(O.a,{value:"is",children:"IS Opr"})]})]})}),Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{id:"standard-multiline-flexible",label:"Medical Excuses",multiline:!0,maxRows:4,value:i,onChange:function(e){console.log("Excuse: ".concat(e.target.value)),h(e.target.value)}})}),Object(o.jsx)("div",{children:Object(o.jsx)(p.a,{variant:"contained",color:"primary",type:"submit",children:"Add"})})]})})},C=n(133),S=function(e){var t=e.addName,n=e.newName,r=e.setNewName,s=e.newStatus,l=e.setnewStatus,i=e.newGroup,u=e.setnewGroup,j=e.newexcuse,d=e.setnewExcuse,b=e.newRole,O=e.setnewRole,p=e.setnewReason,h=Object(c.useState)(!1),x=Object(a.a)(h,2),m=x[0],f=x[1],g=function(){return f(!m)};return!1===m?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(C.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:Object(o.jsx)("button",{onClick:g,children:Object(o.jsx)("h3",{children:"Insert New"})})})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(C.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:Object(o.jsx)("button",{onClick:g,children:Object(o.jsx)("h3",{children:"Hide"})})}),Object(o.jsx)("br",{}),Object(o.jsx)(w,{addName:t,newName:n,setNewName:r,newStatus:s,setnewStatus:l,newGroup:i,setnewGroup:u,newexcuse:j,setnewExcuse:d,newRole:b,setnewRole:O,setnewReason:p}),Object(o.jsx)("br",{})]})},y=n(38),N=n.n(y),R="/api/persons",A=function(){return N.a.get(R).then((function(e){return e.data}))},D=function(e){return N.a.post(R,e).then((function(e){return e.data}))},F=function(e){return N.a.delete("".concat(R,"/").concat(e))},T=function(e,t){return N.a.put("".concat(R,"/").concat(e),t).then((function(e){return e.data}))},k=n(59),P=function(e){var t=e.options,n=e.person,r=e.persons,s=e.setPersons,l=Object(c.useState)(null),i=Object(a.a)(l,2),u=i[0],j=i[1];return t?Object(o.jsxs)("div",{children:[Object(o.jsx)(p.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:"Status"}),Object(o.jsxs)(k.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClick:function(e,t){j(null);var a=e.target.getAttribute("value"),c="";c="mc"===a?prompt("Details","MC FROM ".concat(g," TO ").concat(g)):"ma"===a?prompt("Details","MA AT"):"off"===a?prompt("Details","OFF ON ".concat(g)):"leave"===a?prompt("Details","LEAVE ON ".concat(g)):"attached"===a?prompt("Details","ATTACHED OUT TO "):"others"===a?prompt("Details",""):"",console.log(c),console.log(t);var o={name:n.name,status:e.target.getAttribute("value"),reason:c,group:n.group,excuse:n.excuse,role:n.role},l=r.filter((function(e){return e.name.toLowerCase().includes(o.name.toLowerCase())}));if(console.log(l),e.target.getAttribute("value"))return T(l[0].id,o).then((function(e){s(r.map((function(t){return t.id!==l[0].id?t:e})))}))},onClose:function(){j(null)},children:[Object(o.jsx)(O.a,{value:"present",children:"Present \u2705"}),Object(o.jsx)(O.a,{value:"mc",children:"MC \ud83d\ude37"}),Object(o.jsx)(O.a,{value:"ma",children:"MA \ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}),Object(o.jsx)(O.a,{value:"off",children:"Off \ud83d\udeab"}),Object(o.jsx)(O.a,{value:"leave",children:"Leave \ud83d\udeaa"}),Object(o.jsx)(O.a,{value:"attached",children:"Attached Out \ud83c\udd70"}),Object(o.jsx)(O.a,{value:"others",children:"Others \ud83d\uddd2"}),Object(o.jsx)(O.a,{value:"stayout",children:"Stay Out \ud83c\udfe0"})]})]}):Object(o.jsx)(o.Fragment,{})},E=function(e){var t=e.options,n=e.person,r=e.persons,s=e.setPersons,l=Object(c.useState)(null),i=Object(a.a)(l,2),u=i[0],j=i[1];return t?Object(o.jsxs)("div",{children:[Object(o.jsx)(p.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:"Group"}),Object(o.jsxs)(k.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClick:function(e,t){j(null),console.log(t);var a={name:n.name,status:n.status,reason:n.reason,group:e.target.getAttribute("value"),excuse:n.excuse,role:n.role},c=r.filter((function(e){return e.name.toLowerCase().includes(a.name.toLowerCase())}));if(console.log(c),e.target.getAttribute("value"))return T(c[0].id,a).then((function(e){s(r.map((function(t){return t.id!==c[0].id?t:e})))}))},onClose:function(){j(null)},children:[Object(o.jsx)(O.a,{value:"hq",children:"HQ"}),Object(o.jsx)(O.a,{value:"ccp",children:"FG1 - CCP"}),Object(o.jsx)(O.a,{value:"csp",children:"FG2 - CSP"}),Object(o.jsx)(O.a,{value:"others",children:"Others"})]})]}):Object(o.jsx)(o.Fragment,{})},L=function(e){var t=e.options,n=e.person,r=e.persons,s=e.setPersons,l=Object(c.useState)(null),i=Object(a.a)(l,2),u=i[0],j=i[1];return t?Object(o.jsxs)("div",{children:[Object(o.jsx)(p.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:"Role"}),Object(o.jsxs)(k.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClick:function(e,t){j(null),console.log(t);var a={name:n.name,status:n.status,reason:n.reason,group:n.group,excuse:n.excuse,role:e.target.getAttribute("value")},c=r.filter((function(e){return e.name.toLowerCase().includes(a.name.toLowerCase())}));if(console.log(c),e.target.getAttribute("value"))return T(c[0].id,a).then((function(e){s(r.map((function(t){return t.id!==c[0].id?t:e})))}))},onClose:function(){j(null)},children:[Object(o.jsx)(O.a,{value:"hq",children:"Coy HQ"}),Object(o.jsx)(O.a,{value:"7spec",children:"7th Mono Spec"}),Object(o.jsx)(O.a,{value:"ic2",children:"IC2 Opr"}),Object(o.jsx)(O.a,{value:"is",children:"IS Opr"})]})]}):Object(o.jsx)(o.Fragment,{})},M=function(e){var t=e.options,n=e.person,r=e.persons,s=e.setPersons;if(t)return Object(o.jsx)("div",{children:Object(o.jsx)(p.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e,t){console.log(t);var a=prompt("Current excuses",n.excuse);if(a){var c={name:n.name,status:n.status,reason:n.reason,group:n.group,excuse:a.toUpperCase(),role:n.role},o=r.filter((function(e){return e.name.toLowerCase().includes(c.name.toLowerCase())}));if(console.log(o),a)return T(o[0].id,c).then((function(e){s(r.map((function(t){return t.id!==o[0].id?t:e})))}))}},children:"Excuses"})})},G=function(e){var t=e.person,n=e.id,r=e.setPersons,s=e.persons,l=Object(c.useState)(!1),i=Object(a.a)(l,2),u=i[0],j=i[1],d=function(){window.confirm("Do you want to delete ".concat(t.name))&&(F(n),r(s.filter((function(e){return e.id!==n}))))},b=function(){return j(!u)};return!1===u?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(C.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:[Object(o.jsx)("button",{onClick:b,children:"Update"}),Object(o.jsx)(p.a,{onClick:d,children:"Delete"})]})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(C.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:[Object(o.jsx)("button",{onClick:b,children:"Hide"}),Object(o.jsx)(p.a,{onClick:d,children:"Delete"})]}),Object(o.jsx)("br",{}),Object(o.jsxs)(C.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:[Object(o.jsx)(P,{options:u,person:t,persons:s,setPersons:r}),Object(o.jsx)(E,{options:u,person:t,persons:s,setPersons:r}),Object(o.jsx)(L,{options:u,person:t,persons:s,setPersons:r}),Object(o.jsx)(M,{options:u,person:t,persons:s,setPersons:r})]})]})},H=function(e){var t=e.symbol;return Object(o.jsx)("span",{className:"emoji",role:"img",children:t})},U=function(e){var t=e.currentStatus;return"present"===t?Object(o.jsx)(H,{symbol:"\u2705"}):"attached"===t?Object(o.jsx)(H,{symbol:"\ud83c\udd70"}):"others"===t?Object(o.jsx)(H,{symbol:"\ud83d\uddd2"}):"mc"===t?Object(o.jsx)(H,{symbol:"\ud83d\ude37"}):"ma"===t?Object(o.jsx)(H,{symbol:"\ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}):"off"===t?Object(o.jsx)(H,{symbol:"\ud83d\udeab"}):"leave"===t||"leave"===t?Object(o.jsx)(H,{symbol:"\ud83d\udeaa"}):"stayout"===t?Object(o.jsx)(H,{symbol:"\ud83c\udfe0"}):""},I=function(e){var t=e.person;return t.reason?Object(o.jsxs)(o.Fragment,{children:["(",t.reason,")"]}):Object(o.jsx)(o.Fragment,{})},Q=function(e){var t=e.setPersons,n=e.persons,r=Object(c.useState)(!1),s=Object(a.a)(r,2),l=s[0],i=s[1],u=function(){return i(!l)};return!1===l?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(C.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:Object(o.jsx)("button",{onClick:u,children:Object(o.jsx)("h3",{children:"Show Personnel List"})})})}):Object(o.jsxs)("div",{children:[Object(o.jsx)(C.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:Object(o.jsx)("button",{onClick:u,children:Object(o.jsx)("h3",{children:"Hide Personnel List"})})}),Object(o.jsx)("br",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsxs)("li",{children:[e.name,Object(o.jsx)(U,{currentStatus:e.status}),Object(o.jsx)(I,{person:e}),Object(o.jsx)("br",{}),Object(o.jsx)(G,{person:e,id:e.id,setPersons:t,persons:n})]},e.name)}))})]})},B=function(e){var t=e.newcdo,n=e.handlecdochange,r=e.newcds,s=e.handlecdschange,a=e.newcos,c=e.handlecoschange,l=e.newas,i=e.handleaschange,j=e.newauthor,d=e.handleauthorchange;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{id:"standard-multiline-flexible",label:"CDO (Rank/Name)",multiline:!0,maxRows:4,value:t,onChange:n})}),Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{id:"standard-multiline-flexible",label:"CDS (Rank/Name)",multiline:!0,maxRows:4,value:r,onChange:s})}),Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{id:"standard-multiline-flexible",label:"COS (Rank/Name)",multiline:!0,maxRows:4,value:a,onChange:c})}),Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{id:"standard-multiline-flexible",label:"A/S (Rank/Name)",multiline:!0,maxRows:4,value:l,onChange:i})}),Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{id:"standard-multiline-flexible",label:"Done By: (Rank/Name)",multiline:!0,maxRows:4,value:j,onChange:d})})]})},J=new Date,q=J.getHours(),V=J.getMinutes();q<10&&(q="0".concat(q)),V<10&&(V="0".concat(V));var W="".concat(q).concat(V),Y="";Y=W<1200&&W>="0000"?"morning":W>1600?"evening":"afternoon";var z=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("p",{children:["Good ",Y," Commanders, this is the strength for Signal Company as of ",W," on ",g,"."]})})},K={padding:0,margin:0},X=function(e){var t=e.persons,n=0;t.map((function(e){return"mc"===e.status?n+=1:n}));var r=0;t.map((function(e){return"ma"===e.status?r+=1:r}));var s=0;t.map((function(e){return"off"===e.status?s+=1:s}));var a=0;t.map((function(e){return"leave"===e.status?a+=1:a}));var c=0;t.map((function(e){return"attached"===e.status?c+=1:c}));var l=0;t.map((function(e){return"others"===e.status?l+=1:l}));var i=0;t.map((function(e){return"stayout"===e.status?i+=1:i}));var u=n+r+s+a+c+l+i;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:K,children:["Absentees: ",u]}),Object(o.jsxs)("p",{style:K,children:[" - ",Object(o.jsx)(U,{currentStatus:"mc"})," MC: ",n," "]}),Object(o.jsxs)("p",{style:K,children:["- ",Object(o.jsx)(U,{currentStatus:"ma"})," MA: ",r," "]}),Object(o.jsxs)("p",{style:K,children:["- ",Object(o.jsx)(U,{currentStatus:"off"})," OFF: ",s," "]}),Object(o.jsxs)("p",{style:K,children:["- ",Object(o.jsx)(U,{currentStatus:"leave"})," LEAVE: ",a," "]}),Object(o.jsxs)("p",{style:K,children:["- ",Object(o.jsx)(U,{currentStatus:"attached"})," ATTACHED OUT: ",c," "]}),Object(o.jsxs)("p",{style:K,children:["- ",Object(o.jsx)(U,{currentStatus:"others"})," OTHERS: ",l," "]}),Object(o.jsxs)("p",{style:K,children:["- ",Object(o.jsx)(U,{currentStatus:"stayout"})," STAY OUT: ",i," "]}),Object(o.jsx)("br",{})]})},Z={padding:0,margin:0},$=function(e){var t=e.persons,n=t.filter((function(e){return"hq"===e.role})),r=0;n.map((function(e){return"present"===e.status?r+=1:r}));var s=n.length,a=t.filter((function(e){return"7spec"===e.role})),c=0;a.map((function(e){return"present"===e.status?c+=1:c}));var l=a.length,i=t.filter((function(e){return"ic2"===e.role})),u=0;i.map((function(e){return"present"===e.status?u+=1:u}));var j=i.length,d=t.filter((function(e){return"is"===e.role})),b=0;d.map((function(e){return"present"===e.status?b+=1:b}));var O=d.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:Z,children:[" -Coy HQ: ",r,"/",s," "]}),Object(o.jsxs)("p",{style:Z,children:[" -7th Mono Spec: ",c,"/",l," "]}),Object(o.jsxs)("p",{style:Z,children:[" -IC2 Opr: ",u,"/",j," "]}),Object(o.jsxs)("p",{style:Z,children:[" -IS Opr: ",b,"/",O," "]}),Object(o.jsx)("br",{})]})},_={padding:0,margin:0},ee=function(e){var t=e.persons,n=e.newcdo,r=e.newcds,s=e.newcos,a=e.newas,c=0;t.map((function(e){return"present"===e.status?c+=1:c}));var l=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:_,children:["CDO: ",n.toUpperCase()]}),Object(o.jsxs)("p",{style:_,children:["CDS: ",r.toUpperCase()]}),Object(o.jsxs)("p",{style:_,children:["COS: ",s.toUpperCase()]}),Object(o.jsxs)("p",{style:_,children:["ARMSKOTE: ",a.toUpperCase()]}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{style:_,children:["Total Strength: ",l]}),Object(o.jsxs)("p",{style:_,children:["Present Strength: ",c]}),Object(o.jsx)("br",{}),Object(o.jsx)($,{persons:t}),Object(o.jsx)(X,{persons:t})]})},te={padding:0,margin:0},ne=function(e){var t=e.persons.filter((function(e){return"hq"===String(e.group).toLowerCase()}));console.log("List of HQ personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var r=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:te,children:["HQ: ",n,"/",r]}),t.map((function(e,t){return Object(o.jsxs)("p",{style:te,children:[t+1,"."," "+e.name,Object(o.jsx)(U,{currentStatus:e.status}),Object(o.jsx)(I,{person:e})]},e.name)}))]})},re={padding:0,margin:0},se=function(e){var t=e.persons.filter((function(e){return"ccp"===String(e.group).toLowerCase()}));console.log("List of CCP personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var r=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:re,children:["FG1 - CCP: ",n,"/",r]}),t.map((function(e,t){return Object(o.jsxs)("p",{style:re,children:[t+1,"."," "+e.name,Object(o.jsx)(U,{currentStatus:e.status}),Object(o.jsx)(I,{person:e})]},e.name)}))]})},ae={padding:0,margin:0},ce=function(e){var t=e.persons.filter((function(e){return"csp"===String(e.group).toLowerCase()}));console.log("List of CSP personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var r=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:ae,children:["FG2 - CSP: ",n,"/",r]}),t.map((function(e,t){return Object(o.jsxs)("p",{style:ae,children:[t+1,"."," "+e.name,Object(o.jsx)(U,{currentStatus:e.status}),Object(o.jsx)(I,{person:e})]},e.name)}))]})},oe={padding:0,margin:0},le=function(e){var t=e.person;return t.excuse?Object(o.jsxs)(o.Fragment,{children:["(",t.excuse,")"]}):Object(o.jsx)(o.Fragment,{})},ie=function(e){var t=e.persons.filter((function(e){return e.excuse&&"nil"!==e.excuse}));console.log("List of personnel with excuses: ".concat(JSON.stringify(t)));var n=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:oe,children:["STATUSES: ",n]}),t.map((function(e,t){return Object(o.jsxs)("p",{style:oe,children:[t+1,"."," "+e.name+" ",Object(o.jsx)(le,{person:e})]},e.name)}))]})},ue={padding:0,margin:0},je=function(e){var t=e.newauthor;return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{style:ue,children:"Done by:"}),t.toUpperCase()]})},de=function(e){var t=e.persons,n=e.newauthor;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(ne,{persons:t}),Object(o.jsx)("br",{}),Object(o.jsx)(se,{persons:t}),Object(o.jsx)("br",{}),Object(o.jsx)(ce,{persons:t}),Object(o.jsx)("br",{}),Object(o.jsx)(ie,{persons:t}),Object(o.jsx)("br",{}),Object(o.jsx)(je,{newauthor:n})]})},be=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(a.a)(s,2),u=i[0],j=i[1],d=Object(c.useState)(""),b=Object(a.a)(d,2),O=b[0],p=b[1],h=Object(c.useState)(""),x=Object(a.a)(h,2),m=x[0],f=x[1],g=Object(c.useState)(""),v=Object(a.a)(g,2),w=v[0],C=v[1],y=Object(c.useState)(""),N=Object(a.a)(y,2),R=N[0],F=N[1],k=Object(c.useState)(""),P=Object(a.a)(k,2),E=P[0],L=P[1],M=Object(c.useState)(""),G=Object(a.a)(M,2),H=G[0],U=G[1],I=Object(c.useState)(""),J=Object(a.a)(I,2),q=J[0],V=J[1],W=Object(c.useState)(""),Y=Object(a.a)(W,2),K=Y[0],X=Y[1],Z=Object(c.useState)(""),$=Object(a.a)(Z,2),_=$[0],te=$[1],ne=Object(c.useState)(""),re=Object(a.a)(ne,2),se=re[0],ae=re[1],ce=Object(c.useState)(null),oe=Object(a.a)(ce,2),le=oe[0],ie=oe[1];Object(c.useEffect)((function(){A().then((function(e){r(e)}))}),[]);var ue=function(e){console.log("Done by: ".concat(e.target.value)),ae(e.target.value)};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Parade State Application (For Internal Use Only)"}),Object(o.jsx)(l,{message:le}),Object(o.jsx)(S,{addName:function(e){e.preventDefault();var t={name:u.trim().toUpperCase(),status:O.toLowerCase(),reason:m||"nil",group:w.toUpperCase(),excuse:R?R.trim:"nil",role:E},s=n.filter((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())}));if(console.log(s),u.trim()&&O.trim()&&w.trim()&&E.trim())if(s.length>0){if(window.confirm("".concat(u," is already added to phonebook. Would you like to update the status?")))return T(s[0].id,t).then((function(e){r(n.map((function(t){return t.id!==s[0].id?t:e}))),ie("".concat(u," has been updated")),setTimeout((function(){return ie(null)}),5e3)})).catch((function(e){ie("".concat(u," has been already been removed from the server")),setTimeout((function(){return ie(null)}),5e3)}))}else D(t).then((function(e){r(n.concat(e)),ie("".concat(u," has been added")),setTimeout((function(){return ie(null)}),5e3)})).catch((function(e){ie("".concat(u," has already been added to the server")),setTimeout((function(){return ie(null)}),5e3)}));else alert("All fields (besides medical excuses) must be filled");p(""),j("")},newName:u,setNewName:j,newStatus:O,setnewStatus:p,newGroup:w,setnewGroup:C,newexcuse:R,setnewExcuse:F,newRole:E,setnewRole:L,setnewReason:f}),Object(o.jsx)(Q,{setPersons:r,persons:n}),Object(o.jsx)("h2",{children:"Settings"}),Object(o.jsx)(B,{newcdo:H,handlecdochange:function(e){console.log("CDO: ".concat(e.target.value)),U(e.target.value)},newcds:q,handlecdschange:function(e){console.log("CDS: ".concat(e.target.value)),V(e.target.value)},newcos:K,handlecoschange:function(e){console.log("COS: ".concat(e.target.value)),X(e.target.value)},newas:_,handleaschange:function(e){console.log("Armskote: ".concat(e.target.value)),te(e.target.value)},newauthor:se,handleauthorchange:ue}),Object(o.jsx)("h2",{children:"Parade State"}),Object(o.jsx)(z,{}),Object(o.jsx)(ee,{persons:n,newcdo:H,newcds:q,newcos:K,newas:_,newauthor:se,handleauthorchange:ue}),Object(o.jsx)(de,{setPersons:r,persons:n,newauthor:se})]})};s.a.render(Object(o.jsx)(be,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.8b3bd593.chunk.js.map