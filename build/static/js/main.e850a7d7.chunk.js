(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{148:function(e,t,n){"use strict";n.r(t);var s=n(10),r=n.n(s),c=(n(94),n(8)),a=n(0),o=(n(95),n(1)),l=function(e){var t=e.access,n=e.setnewaccess,s=Object(a.useState)(""),r=Object(c.a)(s,2),l=r[0],i=r[1];return"sigparadestate"===l&&n(!t),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{class:"main",children:[Object(o.jsx)("p",{class:"sign",align:"center",children:"Sign in"}),Object(o.jsx)("form",{class:"form1"}),Object(o.jsx)("input",{class:"pass",type:"password",align:"center",placeholder:"Password",onChange:function(e){i(e.target.value)}})]})})},i=function(e){var t=e.message;return null===t?null:Object(o.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t})},u=n(177),j=n(186),d=n(183),b=n(188),O=n(185),p=n(189),x=n(184),h=new Date,m=h.getDate(),f=h.getMonth()+1,g=h.getFullYear().toString().substr(-2);m<10&&(m="0".concat(m)),f<10&&(f="0".concat(f));var v="".concat(m).concat(f).concat(g),C=Object(u.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:177},selectEmpty:{marginTop:e.spacing(2)}}})),w=function(e){var t=e.addName,n=e.newName,s=e.setNewName,r=e.newStatus,c=e.setnewStatus,a=e.newGroup,l=e.setnewGroup,i=e.newexcuse,u=e.setnewExcuse,h=e.newRole,m=e.setnewRole,f=e.setnewReason;return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:t,children:[Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{id:"standard-multiline-flexible",label:"Rank/Name",multiline:!0,maxRows:4,value:n,onChange:function(e){console.log("Name: ".concat(e.target.value)),s(e.target.value)}})}),Object(o.jsx)("div",{children:Object(o.jsxs)(d.a,{className:C().formControl,children:[Object(o.jsx)(b.a,{id:"demo-simple-select-label",children:"Current Status"}),Object(o.jsxs)(O.a,{labelId:"status",id:"status",value:r,onChange:function(e){console.log("Status: ".concat(e.target.value)),c(e.target.value);var t="";t="mc"===e.target.value?prompt("Details","MC FROM ".concat(v," TO ").concat(v)):"ma"===e.target.value?prompt("Details","MA AT"):"off"===e.target.value?prompt("Details","OFF ON ".concat(v)):"leave"===e.target.value?prompt("Details","LEAVE ON ".concat(v)):"attached"===e.target.value?prompt("Details","ATTACHED OUT TO"):"others"===e.target.value||"oncourse"===e.target.value?prompt("Details",""):"",console.log("Reason: ".concat(t)),t&&f(t.toUpperCase())},children:[Object(o.jsx)(p.a,{value:"present",children:"Present \u2705"}),Object(o.jsx)(p.a,{value:"mc",children:"MC \ud83d\ude37"}),Object(o.jsx)(p.a,{value:"ma",children:"MA \ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}),Object(o.jsx)(p.a,{value:"off",children:"Off \ud83d\udeab"}),Object(o.jsx)(p.a,{value:"oncourse",children:"On Course \ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}),Object(o.jsx)(p.a,{value:"leave",children:"Leave \ud83d\udeaa"}),Object(o.jsx)(p.a,{value:"attached",children:"Attached Out \ud83c\udd70"}),Object(o.jsx)(p.a,{value:"others",children:"Others \ud83d\uddd2"}),Object(o.jsx)(p.a,{value:"stayout",children:"Stay Out \ud83c\udfe0"})]})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)(d.a,{className:C().formControl,children:[Object(o.jsx)(b.a,{id:"demo-simple-select-label",children:"Group"}),Object(o.jsxs)(O.a,{labelId:"group",id:"group",value:a,onChange:function(e){console.log("Group: ".concat(e.target.value)),l(e.target.value)},children:[Object(o.jsx)(p.a,{value:"HQ",children:"HQ"}),Object(o.jsx)(p.a,{value:"CCP",children:"FG1 - CCP"}),Object(o.jsx)(p.a,{value:"CSP",children:"FG2 - CSP"}),Object(o.jsx)(p.a,{value:"OTHERS",children:"Others"})]})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)(d.a,{className:C().formControl,children:[Object(o.jsx)(b.a,{id:"demo-simple-select-label",children:"Role"}),Object(o.jsxs)(O.a,{labelId:"role",id:"role",value:h,onChange:function(e){console.log("Role: ".concat(e.target.value)),m(e.target.value)},children:[Object(o.jsx)(p.a,{value:"hq",children:"Coy HQ"}),Object(o.jsx)(p.a,{value:"sevenspec",children:"7th Mono Spec"}),Object(o.jsx)(p.a,{value:"ic2",children:"IC2 Opr"}),Object(o.jsx)(p.a,{value:"is",children:"IS Opr"})]})]})}),Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{id:"standard-multiline-flexible",label:"Medical Excuses",multiline:!0,maxRows:4,value:i,onChange:function(e){console.log("Excuse: ".concat(e.target.value)),u(e.target.value)}})}),Object(o.jsx)("div",{children:Object(o.jsx)(x.a,{variant:"contained",color:"primary",type:"submit",children:"Add"})})]})})},S=n(5),y=function(e){var t=e.addName,n=e.newName,s=e.setNewName,r=e.newStatus,l=e.setnewStatus,i=e.newGroup,u=e.setnewGroup,j=e.newexcuse,d=e.setnewExcuse,b=e.newRole,O=e.setnewRole,p=e.setnewReason,x=Object(a.useState)(!1),h=Object(c.a)(x,2),m=h[0],f=h[1],g=function(){return f(!m)};return!1===m?Object(o.jsx)(S.Div,{d:"flex",children:Object(o.jsx)(S.Button,{prefix:Object(o.jsx)(S.Icon,{name:"EyeSolid",size:"16px",color:"white",m:{r:"0.5rem"}}),bg:"warning700",hoverBg:"warning800",rounded:"circle",p:{r:"1.5rem",l:"1rem"},shadow:"3",hoverShadow:"4",onClick:g,children:"Insert New"})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(S.Div,{d:"flex",children:Object(o.jsx)(S.Button,{prefix:Object(o.jsx)(S.Icon,{name:"EyeSolid",size:"16px",color:"white",m:{r:"0.5rem"}}),bg:"warning700",hoverBg:"warning800",rounded:"circle",p:{r:"1.5rem",l:"1rem"},shadow:"3",hoverShadow:"4",onClick:g,children:"Hide"})}),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsx)(w,{addName:t,newName:n,setNewName:s,newStatus:r,setnewStatus:l,newGroup:i,setnewGroup:u,newexcuse:j,setnewExcuse:d,newRole:b,setnewRole:O,setnewReason:p}),Object(o.jsx)("br",{})]})]})},A=n(51),D=n.n(A),k="/api/persons",F=function(){return D.a.get(k).then((function(e){return e.data}))},R=function(e){return D.a.post(k,e).then((function(e){return e.data}))},N=function(e){return D.a.delete("".concat(k,"/").concat(e))},E=function(e,t){return D.a.put("".concat(k,"/").concat(e),t).then((function(e){return e.data}))},P=n(82),T=function(e){var t=e.options,n=e.person,s=e.persons,r=e.setPersons,l=Object(a.useState)(null),i=Object(c.a)(l,2),u=i[0],j=i[1];return t?Object(o.jsxs)("div",{children:[Object(o.jsx)(x.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:"Status"}),Object(o.jsxs)(P.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClick:function(e,t){j(null);var c=e.target.getAttribute("value"),a="";(a="mc"===c?prompt("Details","MC FROM ".concat(v," TO ").concat(v)):"ma"===c?prompt("Details","MA AT"):"off"===c?prompt("Details","OFF ON ".concat(v)):"leave"===c?prompt("Details","LEAVE ON ".concat(v)):"attached"===c?prompt("Details","ATTACHED OUT TO "):"others"===c||"oncourse"===c?prompt("Details",""):"")&&(a=a.toUpperCase()),console.log(a),console.log(t);var o={name:n.name,status:e.target.getAttribute("value"),reason:a,group:n.group,excuse:n.excuse,role:n.role},l=s.filter((function(e){return e.name.toLowerCase().includes(o.name.toLowerCase())}));if(console.log(l),e.target.getAttribute("value"))return E(l[0].id,o).then((function(e){r(s.map((function(t){return t.id!==l[0].id?t:e})))}))},onClose:function(){j(null)},children:[Object(o.jsx)(p.a,{value:"present",children:"Present \u2705"}),Object(o.jsx)(p.a,{value:"mc",children:"MC \ud83d\ude37"}),Object(o.jsx)(p.a,{value:"ma",children:"MA \ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}),Object(o.jsx)(p.a,{value:"off",children:"Off \ud83d\udeab"}),Object(o.jsx)(p.a,{value:"oncourse",children:"On Course \ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}),Object(o.jsx)(p.a,{value:"leave",children:"Leave \ud83d\udeaa"}),Object(o.jsx)(p.a,{value:"attached",children:"Attached Out \ud83c\udd70"}),Object(o.jsx)(p.a,{value:"others",children:"Others \ud83d\uddd2"}),Object(o.jsx)(p.a,{value:"stayout",children:"Stay Out \ud83c\udfe0"})]})]}):Object(o.jsx)(o.Fragment,{})},L=function(e){var t=e.options,n=e.person,s=e.persons,r=e.setPersons,l=Object(a.useState)(null),i=Object(c.a)(l,2),u=i[0],j=i[1];return t?Object(o.jsxs)("div",{children:[Object(o.jsx)(x.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:"Group"}),Object(o.jsxs)(P.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClick:function(e,t){j(null),console.log(t);var c={name:n.name,status:n.status,reason:n.reason,group:e.target.getAttribute("value"),excuse:n.excuse,role:n.role},a=s.filter((function(e){return e.name.toLowerCase().includes(c.name.toLowerCase())}));if(console.log(a),e.target.getAttribute("value"))return E(a[0].id,c).then((function(e){r(s.map((function(t){return t.id!==a[0].id?t:e})))}))},onClose:function(){j(null)},children:[Object(o.jsx)(p.a,{value:"hq",children:"HQ"}),Object(o.jsx)(p.a,{value:"ccp",children:"FG1 - CCP"}),Object(o.jsx)(p.a,{value:"csp",children:"FG2 - CSP"}),Object(o.jsx)(p.a,{value:"others",children:"Others"})]})]}):Object(o.jsx)(o.Fragment,{})},B=function(e){var t=e.options,n=e.person,s=e.persons,r=e.setPersons,l=Object(a.useState)(null),i=Object(c.a)(l,2),u=i[0],j=i[1];return t?Object(o.jsxs)("div",{children:[Object(o.jsx)(x.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:"Role"}),Object(o.jsxs)(P.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClick:function(e){j(null),console.log(e.target.getAttribute("value"));var t={name:n.name,status:n.status,reason:n.reason,group:n.group,excuse:n.excuse,role:e.target.getAttribute("value")},c=s.filter((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())}));if(console.log(c),e.target.getAttribute("value"))return E(c[0].id,t).then((function(e){r(s.map((function(t){return t.id!==c[0].id?t:e})))}))},onClose:function(){j(null)},children:[Object(o.jsx)(p.a,{value:"hq",children:"Coy HQ"}),Object(o.jsx)(p.a,{value:"sevenspec",children:"7th Mono Spec"}),Object(o.jsx)(p.a,{value:"ic2",children:"IC2 Opr"}),Object(o.jsx)(p.a,{value:"is",children:"IS Opr"})]})]}):Object(o.jsx)(o.Fragment,{})},M=function(e){var t=e.options,n=e.person,s=e.persons,r=e.setPersons;if(t)return Object(o.jsx)("div",{children:Object(o.jsx)(x.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e,t){console.log(t);var c=prompt("Current excuses",n.excuse);if(c){var a={name:n.name,status:n.status,reason:n.reason,group:n.group,excuse:c.toUpperCase(),role:n.role},o=s.filter((function(e){return e.name.toLowerCase().includes(a.name.toLowerCase())}));if(console.log(o),c)return E(o[0].id,a).then((function(e){r(s.map((function(t){return t.id!==o[0].id?t:e})))}))}},children:"Excuses"})})},U=function(e){var t=e.isOpen,n=e.onClose,s=e.person;return Object(o.jsxs)(S.Modal,{isOpen:t,onClose:n,rounded:"md",maxW:"24rem",children:[Object(o.jsx)(S.Icon,{name:"Cross",pos:"absolute",top:"1rem",right:"1rem",size:"16px",onClick:n,cursor:"pointer"}),Object(o.jsx)(S.Text,{p:{l:"0.5rem",t:"0.25rem"},m:{b:"2rem"},children:JSON.stringify({person:s},null,2)}),Object(o.jsxs)(S.Div,{d:"flex",justify:"flex-end",children:[Object(o.jsx)(S.Button,{onClick:n,bg:"gray200",textColor:"medium",m:{r:"1rem"},children:"Close"}),Object(o.jsx)(S.Button,{onClick:n,bg:"info700",children:"OK"})]})]})},I=function(e){var t=e.person,n=Object(a.useState)(!1),s=Object(c.a)(n,2),r=s[0],l=s[1],i=function(){l(!r)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(S.Button,{bg:"info700",hoverBg:"info600",m:{r:"0.5rem"},onClick:i,children:"Details"}),Object(o.jsx)(U,{isOpen:r,onClose:i,person:t})]})},H=function(e){var t=e.isOpen,n=e.onClose,s=e.onSubmit,r=e.person;return Object(o.jsxs)(S.Modal,{isOpen:t,onClose:n,align:"center",rounded:"md",children:[Object(o.jsx)(S.Icon,{name:"Cross",pos:"absolute",top:"1rem",right:"1rem",size:"16px",onClick:n,cursor:"pointer"}),Object(o.jsxs)(S.Div,{d:"flex",m:{b:"4rem"},children:[Object(o.jsx)(S.Icon,{name:"AlertSolid",color:"warning700",m:{t:"0.35rem",r:"0.5rem"}}),Object(o.jsxs)(S.Text,{p:{l:"0.5rem",t:"0.25rem"},textSize:"subheader",children:["Are you sure you want to permanently delete ",r,"?"]})]}),Object(o.jsxs)(S.Div,{d:"flex",justify:"flex-end",children:[Object(o.jsx)(S.Button,{onClick:n,bg:"gray200",textColor:"medium",m:{r:"1rem"},children:"Cancel"}),Object(o.jsx)(S.Button,{onClick:s,bg:"info700",children:"Yes, Delete"})]})]})},G=function(e){var t=e.id,n=e.setPersons,s=e.persons,r=e.person,l=Object(a.useState)(!1),i=Object(c.a)(l,2),u=i[0],j=i[1],d=function(){j(!u)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(S.Button,{bg:"info700",hoverBg:"info600",m:{b:"1rem"},onClick:d,children:"Delete"}),Object(o.jsx)(H,{isOpen:u,onClose:d,onSubmit:function(){j(!u),N(t),n(s.filter((function(e){return e.id!==t})))},person:r})]})},Q=function(e){e.options;var t=e.person,n=e.persons,s=e.setPersons,r=Object(o.jsxs)(S.Div,{p:{x:"4rem",y:"0.5rem"},onClick:function(e){console.log(e.target.getAttribute("value"));var r={name:t.name,status:t.status,reason:t.reason,group:t.group,excuse:t.excuse,role:e.target.getAttribute("value")},c=n.filter((function(e){return e.name.toLowerCase().includes(r.name.toLowerCase())}));if(console.log(c),e.target.getAttribute("value"))return E(c[0].id,r).then((function(e){s(n.map((function(t){return t.id!==c[0].id?t:e})))}))},children:[Object(o.jsx)(S.Anchor,{d:"block",p:{y:"0.25rem"},value:"hq",children:'"Coy HQ"'}),Object(o.jsx)(S.Anchor,{d:"block",p:{y:"0.25rem"},value:"sevenspec",children:"7th Mono Spec"}),Object(o.jsx)(S.Anchor,{d:"block",p:{y:"0.25rem"},value:"ic2",children:"IC2 Opr"}),Object(o.jsx)(S.Anchor,{d:"block",p:{y:"0.25rem"},value:"is",children:"IS Opr"})]}),l=Object(a.useState)(!1),i=Object(c.a)(l,2),u=i[0],j=i[1];return Object(o.jsx)(S.Dropdown,{w:"fit-content",isOpen:u,onClick:function(){j(!u)},menu:r,children:"ROLE"})},z=function(e){var t=e.person,n=e.id,s=e.setPersons,r=e.persons,l=Object(a.useState)(!1),i=Object(c.a)(l,2),u=i[0],j=i[1],d=function(){return j(!u)};return!1===u?Object(o.jsxs)(S.Div,{d:"flex",children:[Object(o.jsx)(S.Button,{color:"warning700",onClick:d,children:"Update"}),Object(o.jsx)(I,{person:t}),Object(o.jsx)(G,{id:n,setPersons:s,persons:r,person:t.name})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(S.Div,{d:"flex",children:[Object(o.jsx)(S.Button,{onClick:d,children:"Hide"}),Object(o.jsx)(I,{person:t}),Object(o.jsx)(G,{id:n,setPersons:s,persons:r,person:t.name})]}),Object(o.jsxs)(S.Div,{d:"flex",children:[Object(o.jsx)(T,{options:u,person:t,persons:r,setPersons:s}),Object(o.jsx)(L,{options:u,person:t,persons:r,setPersons:s}),Object(o.jsx)(Q,{options:u,person:t,persons:r,setPersons:s}),Object(o.jsx)(B,{options:u,person:t,persons:r,setPersons:s}),Object(o.jsx)(M,{options:u,person:t,persons:r,setPersons:s})]})]})},J=function(e){var t=e.symbol;return Object(o.jsx)("span",{className:"emoji",role:"img",children:t})},q=function(e){var t=e.currentStatus;return"present"===t?Object(o.jsx)(J,{symbol:"\u2705"}):"attached"===t?Object(o.jsx)(J,{symbol:"\ud83c\udd70"}):"others"===t?Object(o.jsx)(J,{symbol:"\ud83d\uddd2"}):"mc"===t?Object(o.jsx)(J,{symbol:"\ud83d\ude37"}):"ma"===t?Object(o.jsx)(J,{symbol:"\ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}):"off"===t?Object(o.jsx)(J,{symbol:"\ud83d\udeab"}):"leave"===t||"leave"===t?Object(o.jsx)(J,{symbol:"\ud83d\udeaa"}):"stayout"===t?Object(o.jsx)(J,{symbol:"\ud83c\udfe0"}):"oncourse"===t?Object(o.jsx)(J,{symbol:"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}):""},V=function(e){var t=e.person;return t.reason&&"nil"!==t.reason?Object(o.jsxs)(o.Fragment,{children:["(",t.reason,")"]}):Object(o.jsx)(o.Fragment,{})},W=function(e){var t=e.setPersons,n=e.persons,s=Object(a.useState)(!1),r=Object(c.a)(s,2),l=r[0],i=r[1],u=function(){return i(!l)};return!1===l?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(S.Div,{d:"flex",children:Object(o.jsx)(S.Button,{suffix:Object(o.jsx)(S.Icon,{name:"LongRight",size:"16px",color:"white",m:{l:"1rem"}}),shadow:"3",hoverShadow:"4",m:{r:"1rem"},onClick:u,children:"Edit"})})}):Object(o.jsxs)("div",{children:[Object(o.jsx)(S.Div,{d:"flex",children:Object(o.jsx)(S.Button,{suffix:Object(o.jsx)(S.Icon,{name:"LongRight",size:"16px",color:"white",m:{l:"1rem"}}),shadow:"3",hoverShadow:"4",m:{r:"1rem"},onClick:u,children:"Hide"})}),Object(o.jsx)("br",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsxs)("li",{children:[e.name,Object(o.jsx)(q,{currentStatus:e.status}),Object(o.jsx)(V,{person:e}),Object(o.jsx)("br",{}),Object(o.jsx)(z,{person:e,id:e.id,setPersons:t,persons:n})]},e.name)}))})]})},Y=function(e){var t=e.newcdo,n=e.handlecdochange,s=e.newcds,r=e.handlecdschange,c=e.newcos,a=e.handlecoschange,l=e.newas,i=e.handleaschange,u=e.newauthor,d=e.handleauthorchange;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{id:"standard-multiline-flexible",label:"CDO (Rank/Name)",multiline:!0,maxRows:4,value:t,onChange:n})}),Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{id:"standard-multiline-flexible",label:"CDS (Rank/Name)",multiline:!0,maxRows:4,value:s,onChange:r})}),Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{id:"standard-multiline-flexible",label:"COS (Rank/Name)",multiline:!0,maxRows:4,value:c,onChange:a})}),Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{id:"standard-multiline-flexible",label:"A/S (Rank/Name)",multiline:!0,maxRows:4,value:l,onChange:i})}),Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{id:"standard-multiline-flexible",label:"Done By: (Rank/Name)",multiline:!0,maxRows:4,value:u,onChange:d})})]})},K=new Date,X=K.getHours(),Z=K.getMinutes();X<10&&(X="0".concat(X)),Z<10&&(Z="0".concat(Z));var $="".concat(X).concat(Z),_="";_=$<1200&&$>="0000"?"morning":$>1600?"evening":"afternoon";var ee=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("p",{children:["Good ",_," Commanders, this is the strength for Signal Company as of ",$," on ",v,"."]})})},te={padding:0,margin:0},ne=function(e){var t=e.persons,n=0;t.map((function(e){return"mc"===e.status?n+=1:n}));var s=0;t.map((function(e){return"ma"===e.status?s+=1:s}));var r=0;t.map((function(e){return"off"===e.status?r+=1:r}));var c=0;t.map((function(e){return"oncourse"===e.status?c+=1:c}));var a=0;t.map((function(e){return"leave"===e.status?a+=1:a}));var l=0;t.map((function(e){return"attached"===e.status?l+=1:l}));var i=0;t.map((function(e){return"others"===e.status?i+=1:i}));var u=0;t.map((function(e){return"stayout"===e.status?u+=1:u}));var j=n+s+r+a+l+i+u+c;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:te,children:["Absentees: ",j]}),Object(o.jsxs)("p",{style:te,children:[" - ",Object(o.jsx)(q,{currentStatus:"mc"})," MC: ",n," "]}),Object(o.jsxs)("p",{style:te,children:["- ",Object(o.jsx)(q,{currentStatus:"ma"})," MA: ",s," "]}),Object(o.jsxs)("p",{style:te,children:["- ",Object(o.jsx)(q,{currentStatus:"off"})," OFF: ",r," "]}),Object(o.jsxs)("p",{style:te,children:["- ",Object(o.jsx)(q,{currentStatus:"oncourse"})," ON COURSE: ",c," "]}),Object(o.jsxs)("p",{style:te,children:["- ",Object(o.jsx)(q,{currentStatus:"leave"})," LEAVE: ",a," "]}),Object(o.jsxs)("p",{style:te,children:["- ",Object(o.jsx)(q,{currentStatus:"attached"})," ATTACHED OUT: ",l," "]}),Object(o.jsxs)("p",{style:te,children:["- ",Object(o.jsx)(q,{currentStatus:"others"})," OTHERS: ",i," "]}),Object(o.jsxs)("p",{style:te,children:["- ",Object(o.jsx)(q,{currentStatus:"stayout"})," STAY OUT: ",u," "]}),Object(o.jsx)("br",{})]})},se={padding:0,margin:0},re=function(e){var t=e.persons,n=t.filter((function(e){return"hq"===e.role})),s=0;n.map((function(e){return"present"===e.status?s+=1:s}));var r=n.length,c=t.filter((function(e){return"sevenspec"===e.role})),a=0;c.map((function(e){return"present"===e.status?a+=1:a}));var l=c.length,i=t.filter((function(e){return"ic2"===e.role})),u=0;i.map((function(e){return"present"===e.status?u+=1:u}));var j=i.length,d=t.filter((function(e){return"is"===e.role})),b=0;d.map((function(e){return"present"===e.status?b+=1:b}));var O=d.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:se,children:[" -Coy HQ: ",s,"/",r," "]}),Object(o.jsxs)("p",{style:se,children:[" -7th Mono Spec: ",a,"/",l," "]}),Object(o.jsxs)("p",{style:se,children:[" -IC2 Opr: ",u,"/",j," "]}),Object(o.jsxs)("p",{style:se,children:[" -IS Opr: ",b,"/",O," "]}),Object(o.jsx)("br",{})]})},ce={padding:0,margin:0},ae=function(e){var t=e.persons,n=e.newcdo,s=e.newcds,r=e.newcos,c=e.newas,a=0;t.map((function(e){return"present"===e.status?a+=1:a}));var l=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:ce,children:["CDO: ",n.toUpperCase()]}),Object(o.jsxs)("p",{style:ce,children:["CDS: ",s.toUpperCase()]}),Object(o.jsxs)("p",{style:ce,children:["COS: ",r.toUpperCase()]}),Object(o.jsxs)("p",{style:ce,children:["ARMSKOTE: ",c.toUpperCase()]}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{style:ce,children:["Total Strength: ",l]}),Object(o.jsxs)("p",{style:ce,children:["Present Strength: ",a]}),Object(o.jsx)("br",{}),Object(o.jsx)(re,{persons:t}),Object(o.jsx)(ne,{persons:t})]})},oe={padding:0,margin:0},le=function(e){var t=e.persons.filter((function(e){return"hq"===String(e.group).toLowerCase()}));console.log("List of HQ personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var s=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:oe,children:["HQ: ",n,"/",s]}),t.map((function(e,t){return Object(o.jsxs)("p",{style:oe,children:[t+1,"."," "+e.name,Object(o.jsx)(q,{currentStatus:e.status}),Object(o.jsx)(V,{person:e})]},e.name)}))]})},ie={padding:0,margin:0},ue=function(e){var t=e.persons.filter((function(e){return"ccp"===String(e.group).toLowerCase()}));console.log("List of CCP personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var s=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:ie,children:["FG1 - CCP: ",n,"/",s]}),t.map((function(e,t){return Object(o.jsxs)("p",{style:ie,children:[t+1,"."," "+e.name,Object(o.jsx)(q,{currentStatus:e.status}),Object(o.jsx)(V,{person:e})]},e.name)}))]})},je={padding:0,margin:0},de=function(e){var t=e.persons.filter((function(e){return"csp"===String(e.group).toLowerCase()}));console.log("List of CSP personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var s=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:je,children:["FG2 - CSP: ",n,"/",s]}),t.map((function(e,t){return Object(o.jsxs)("p",{style:je,children:[t+1,"."," "+e.name,Object(o.jsx)(q,{currentStatus:e.status}),Object(o.jsx)(V,{person:e})]},e.name)}))]})},be={padding:0,margin:0},Oe=function(e){var t=e.person;return t.excuse?Object(o.jsxs)(o.Fragment,{children:["(",t.excuse,")"]}):Object(o.jsx)(o.Fragment,{})},pe=function(e){var t=e.persons.filter((function(e){return e.excuse&&"nil"!==e.excuse}));console.log("List of personnel with excuses: ".concat(JSON.stringify(t)));var n=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:be,children:["STATUSES: ",n]}),t.map((function(e,t){return Object(o.jsxs)("p",{style:be,children:[t+1,"."," "+e.name+" ",Object(o.jsx)(Oe,{person:e})]},e.name)}))]})},xe={padding:0,margin:0},he=function(e){var t=e.newauthor;return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{style:xe,children:"Done by:"}),t.toUpperCase()]})},me=function(e){var t=e.persons,n=e.newauthor;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(le,{persons:t}),Object(o.jsx)("br",{}),Object(o.jsx)(ue,{persons:t}),Object(o.jsx)("br",{}),Object(o.jsx)(de,{persons:t}),Object(o.jsx)("br",{}),Object(o.jsx)(pe,{persons:t}),Object(o.jsx)("br",{}),Object(o.jsx)(he,{newauthor:n})]})},fe=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),l=Object(c.a)(r,2),u=l[0],j=l[1],d=Object(a.useState)(""),b=Object(c.a)(d,2),O=b[0],p=b[1],x=Object(a.useState)(""),h=Object(c.a)(x,2),m=h[0],f=h[1],g=Object(a.useState)(""),v=Object(c.a)(g,2),C=v[0],w=v[1],S=Object(a.useState)(""),A=Object(c.a)(S,2),D=A[0],k=A[1],N=Object(a.useState)(""),P=Object(c.a)(N,2),T=P[0],L=P[1],B=Object(a.useState)(""),M=Object(c.a)(B,2),U=M[0],I=M[1],H=Object(a.useState)(""),G=Object(c.a)(H,2),Q=G[0],z=G[1],J=Object(a.useState)(""),q=Object(c.a)(J,2),V=q[0],K=q[1],X=Object(a.useState)(""),Z=Object(c.a)(X,2),$=Z[0],_=Z[1],te=Object(a.useState)(""),ne=Object(c.a)(te,2),se=ne[0],re=ne[1],ce=Object(a.useState)(null),oe=Object(c.a)(ce,2),le=oe[0],ie=oe[1];Object(a.useEffect)((function(){F().then((function(e){s(e)}))}),[]);var ue=function(e){console.log("Done by: ".concat(e.target.value)),re(e.target.value)};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Parade State Application (For Internal Use Only)"}),Object(o.jsx)(i,{message:le}),Object(o.jsx)(y,{addName:function(e){e.preventDefault();var t={name:u.trim().toUpperCase(),status:O.toLowerCase(),reason:m||"nil",group:C.toUpperCase(),excuse:D?D.trim:"nil",role:T},r=n.filter((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())}));if(console.log(r),u.trim()&&O.trim()&&C.trim()&&T.trim())if(r.length>0){if(window.confirm("".concat(u.toUpperCase()," is already added to phonebook. Would you like to update the status?")))return E(r[0].id,t).then((function(e){s(n.map((function(t){return t.id!==r[0].id?t:e}))),ie("".concat(u.toUpperCase()," has been updated")),setTimeout((function(){return ie(null)}),5e3)})).catch((function(e){ie("".concat(u.toUpperCase()," has been already been removed from the server")),setTimeout((function(){return ie(null)}),5e3)}))}else R(t).then((function(e){s(n.concat(e)),ie("".concat(u.toUpperCase()," has been added")),setTimeout((function(){return ie(null)}),5e3)})).catch((function(e){ie("".concat(u.toUpperCase()," has already been added to the server")),setTimeout((function(){return ie(null)}),5e3)}));else alert("All fields (besides medical excuses) must be filled");p(""),j(""),f(""),w(""),k(""),L("")},newName:u,setNewName:j,newStatus:O,setnewStatus:p,newGroup:C,setnewGroup:w,newexcuse:D,setnewExcuse:k,newRole:T,setnewRole:L,setnewReason:f}),Object(o.jsx)(W,{setPersons:s,persons:n}),Object(o.jsx)("h2",{children:"Settings"}),Object(o.jsx)(Y,{newcdo:U,handlecdochange:function(e){console.log("CDO: ".concat(e.target.value)),I(e.target.value)},newcds:Q,handlecdschange:function(e){console.log("CDS: ".concat(e.target.value)),z(e.target.value)},newcos:V,handlecoschange:function(e){console.log("COS: ".concat(e.target.value)),K(e.target.value)},newas:$,handleaschange:function(e){console.log("Armskote: ".concat(e.target.value)),_(e.target.value)},newauthor:se,handleauthorchange:ue}),Object(o.jsx)("h2",{children:"Parade State"}),Object(o.jsx)(ee,{}),Object(o.jsx)(ae,{persons:n,newcdo:U,newcds:Q,newcos:V,newas:$,newauthor:se,handleauthorchange:ue}),Object(o.jsx)(me,{setPersons:s,persons:n,newauthor:se})]})},ge=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],s=t[1];return n?Object(o.jsx)(fe,{}):Object(o.jsx)(l,{access:n,setnewaccess:s})},ve=n(19),Ce=new(n(81).a);r.a.render(Object(o.jsx)(ve.Provider,{value:Ce,debug:undefined,debugAfterHydration:!0,children:Object(o.jsxs)(S.ThemeProvider,{theme:{colors:{brand100:"#F9F8FC",brand200:"#F3F1FA",brand300:"#E9E6F6",brand400:"#D2CCEC",brand500:"#BCB3E2",brand600:"#9C8FD6",brand700:"#6F5CC3",brand800:"#553EB5",brand900:"#382683"}},children:[Object(o.jsx)(S.StyleReset,{}),Object(o.jsx)(ge,{})]})}),document.getElementById("root"))},94:function(e,t,n){},95:function(e,t,n){}},[[148,1,2]]]);
//# sourceMappingURL=main.e850a7d7.chunk.js.map