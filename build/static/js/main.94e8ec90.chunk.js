(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var r=n(10),s=n.n(r),o=(n(40),n(3)),c=n(2),a=n(1),i=n(0),l=function(e){var t=e.access,n=e.setnewaccess,r=Object(c.useState)(!1),s=Object(o.a)(r,2),l=s[0],u=s[1],j=Object(c.useState)(""),b=Object(o.a)(j,2),d=b[0],p=b[1];return"sigparadestate7"===d&&n(!t),Object(i.jsxs)(a.Div,{align:"center",p:{x:{xs:"1rem",md:"4rem"},y:{xs:"2rem",md:"0rem"}},children:[Object(i.jsx)(a.Text,{p:{xs:"1rem",md:"4rem"},textAlign:{xs:"center",lg:"left"},textWeight:"600",textSize:"display1",fontFamily:"Helvetica",pos:"relative",children:"Login"}),Object(i.jsx)(a.Input,{onChange:function(e){p(e.target.value)},placeholder:"Password",type:l?"text":"password",suffix:Object(i.jsx)(a.Button,{pos:"absolute",onClick:function(){u(!l)},bg:"transparent",w:"3rem",top:"0",right:"0",rounded:{r:"md"},children:Object(i.jsx)(a.Icon,{name:l?"EyeSolid":"Eye",color:l?"danger800":"success800",size:"16px"})})})]})},u=function(e){var t=e.message;return null===t?null:Object(i.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t})},j=function(e){var t=e.setnewGroup,n=e.newGroup,r=Object(i.jsxs)(a.Div,{p:{x:"1rem",y:"0.5rem"},value:n,onClick:function(e){j(!u),console.log("Group: ".concat(e.target.getAttribute("value"))),t(e.target.getAttribute("value"))},children:[Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"hq",children:"HQ"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"ccp",children:"FG1 - CCP"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"csp",children:"FG2 - CSP"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"others",children:"Others"})]}),s=Object(c.useState)(!1),l=Object(o.a)(s,2),u=l[0],j=l[1];return Object(i.jsx)(a.Dropdown,{rounded:"xl",isOpen:u,menu:r,onClick:function(){j(!u)},bg:"info100",focusBg:"info200",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",openSuffix:Object(i.jsx)(a.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(i.jsx)(a.Icon,{name:"Down",color:"info700",size:"16px"}),children:n?"GROUP: ".concat(n.toUpperCase()):"GROUP"})},b=function(e){var t=e.setnewRole,n=e.newRole,r=Object(i.jsxs)(a.Div,{p:{x:"1rem",y:"0.5rem"},value:n,onClick:function(e){j(!u),console.log("Role: ".concat(e.target.getAttribute("value"))),t(e.target.getAttribute("value"))},children:[Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"hq",children:"Coy HQ"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"sevenspec",children:"7th Mono Spec"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"ic2",children:"IC2 Opr"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"is",children:"IS Opr"})]}),s=Object(c.useState)(!1),l=Object(o.a)(s,2),u=l[0],j=l[1];return Object(i.jsx)(a.Dropdown,{rounded:"xl",isOpen:u,onClick:function(){j(!u)},menu:r,bg:"info100",focusBg:"info200",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",openSuffix:Object(i.jsx)(a.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(i.jsx)(a.Icon,{name:"Down",color:"info700",size:"16px"}),children:n?"ROLE: ".concat(n.toUpperCase()):"ROLE"})},d=new Date,p=d.getDate(),x=d.getMonth()+1,O=d.getFullYear().toString().substr(-2);p<10&&(p="0".concat(p)),x<10&&(x="0".concat(x));var f="".concat(p).concat(x).concat(O),m=function(e){var t=e.setnewStatus,n=e.newStatus,r=e.setnewReason,s="",l=Object(i.jsxs)(a.Div,{p:{x:"1rem",y:"0.5rem"},value:n,onClick:function(e){d(!b),console.log("Status: ".concat(e.target.getAttribute("value"))),t(e.target.getAttribute("value")),s="mc"===e.target.getAttribute("value")?prompt("Details","MC FROM ".concat(f," TO ").concat(f)):"ma"===e.target.getAttribute("value")?prompt("Details","MA AT"):"off"===e.target.getAttribute("value")?prompt("Details","OFF ON ".concat(f)):"leave"===e.target.getAttribute("value")?prompt("Details","LEAVE ON ".concat(f)):"attached"===e.target.getAttribute("value")?prompt("Details","ATTACHED OUT TO"):"others"===e.target.getAttribute("value")||"oncourse"===e.target.getAttribute("value")?prompt("Details",""):"",console.log("Reason: ".concat(s)),s&&r(s.toUpperCase())},children:[Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"present",children:"Present \u2705"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"mc",children:"MC \ud83d\ude37"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"ma",children:"MA \ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"off",children:"Off \ud83d\udeab"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"oncourse",children:"On Course \ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"leave",children:"Leave \ud83d\udeaa"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"attached",children:"Attached Out \ud83c\udd70"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"others",children:"Others \ud83d\uddd2"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"stayout",children:"Stay Out \ud83c\udfe0"})]}),u=Object(c.useState)(!1),j=Object(o.a)(u,2),b=j[0],d=j[1];return Object(i.jsx)(a.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(i.jsx)(a.Dropdown,{rounded:"xl",isOpen:b,menu:l,onClick:function(){d(!b)},bg:"info100",focusBg:"info200",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",openSuffix:Object(i.jsx)(a.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(i.jsx)(a.Icon,{name:"Down",color:"info700",size:"16px"}),children:n?"STATUS: ".concat(n.toUpperCase()):"STATUS"})})},h=function(e){var t=e.newName,n=e.setNewName;return Object(i.jsx)(a.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(i.jsx)(a.Input,{rounded:"xl",value:t,onChange:function(e){console.log("Name: ".concat(e.target.value)),n(e.target.value)},placeholder:"Rank/Name",p:{x:"2.5rem"},prefix:Object(i.jsx)(a.Icon,{name:"UserSolid",color:"warning800",size:"16px",cursor:"pointer",pos:"absolute",top:"50%",left:"0.75rem",transform:"translateY(-50%)"})})})},g=function(e){var t=e.newexcuse,n=e.setnewExcuse;return Object(i.jsx)(a.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(i.jsx)(a.Input,{rounded:"xl",value:t,onChange:function(e){console.log("Excuse: ".concat(e.target.value)),n(e.target.value)},placeholder:"Medical Excuses",p:{x:"2.5rem"},prefix:Object(i.jsx)(a.Icon,{name:"RemoveSolid",color:"danger800",size:"16px",cursor:"pointer",pos:"absolute",top:"50%",left:"0.75rem",transform:"translateY(-50%)"})})})},v=function(e){var t=e.addName,n=e.newName,r=e.setNewName,s=e.newStatus,o=e.setnewStatus,c=e.newGroup,l=e.setnewGroup,u=e.newexcuse,d=e.setnewExcuse,p=e.newRole,x=e.setnewRole,O=e.setnewReason;return Object(i.jsx)(a.Div,{children:Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsx)(h,{newName:n,setNewName:r}),Object(i.jsx)("br",{}),Object(i.jsx)(g,{newexcuse:u,setnewExcuse:d}),Object(i.jsx)("br",{}),Object(i.jsx)(m,{setnewStatus:o,newStatus:s,setnewReason:O}),Object(i.jsx)("br",{}),Object(i.jsx)(j,{setnewGroup:l,newGroup:c}),Object(i.jsx)("br",{}),Object(i.jsx)(b,{setnewRole:x,newRole:p}),Object(i.jsx)("br",{}),Object(i.jsx)(a.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(i.jsx)(a.Button,{suffix:Object(i.jsx)(a.Icon,{name:"LongRight",size:"16px",color:"white",m:{l:"1rem"}}),bg:"black",hoverBg:"black400",variant:"contained",color:"primary",type:"submit",children:"Add"})})]})})},w=function(e){var t=e.addName,n=e.newName,r=e.setNewName,s=e.newStatus,l=e.setnewStatus,u=e.newGroup,j=e.setnewGroup,b=e.newexcuse,d=e.setnewExcuse,p=e.newRole,x=e.setnewRole,O=e.setnewReason,f=Object(c.useState)(!1),m=Object(o.a)(f,2),h=m[0],g=m[1],w=function(){return g(!h)};return!1===h?Object(i.jsx)(a.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(i.jsx)(a.Button,{prefix:Object(i.jsx)(a.Icon,{name:"EyeSolid",size:"16px",color:"white",m:{r:"0.5rem"}}),bg:"black",hoverBg:"black400",p:{r:"1.5rem",l:"1rem"},shadow:"3",hoverShadow:"4",onClick:w,children:"Insert New"})}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(a.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(i.jsx)(a.Button,{prefix:Object(i.jsx)(a.Icon,{name:"EyeSolid",size:"16px",color:"white",m:{r:"0.5rem"}}),bg:"black",hoverBg:"black400",p:{r:"1.5rem",l:"1rem"},shadow:"3",hoverShadow:"4",onClick:w,children:"Hide"})}),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("br",{}),Object(i.jsx)(v,{addName:t,newName:n,setNewName:r,newStatus:s,setnewStatus:l,newGroup:u,setnewGroup:j,newexcuse:b,setnewExcuse:d,newRole:p,setnewRole:x,setnewReason:O}),Object(i.jsx)("br",{})]})]})},C=n(18),S=n.n(C),y="/api/persons",A=function(){return S.a.get(y).then((function(e){return e.data}))},k=function(e){return S.a.post(y,e).then((function(e){return e.data}))},D=function(e){return S.a.delete("".concat(y,"/").concat(e))},T=function(e,t){return S.a.put("".concat(y,"/").concat(e),t).then((function(e){return e.data}))},U=function(e){var t=e.options,n=e.person,r=e.persons,s=e.setPersons;if(t)return Object(i.jsx)(a.Div,{d:"flex",children:Object(i.jsx)(a.Button,{bg:"white",textColor:"black","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e,t){console.log(t);var o=prompt("Current excuses",n.excuse);if(o){var c={name:n.name,status:n.status,reason:n.reason,group:n.group,excuse:o.toUpperCase(),role:n.role},a=r.filter((function(e){return e.name.toLowerCase().includes(c.name.toLowerCase())}));if(console.log(a),o)return T(a[0].id,c).then((function(e){s(r.map((function(t){return t.id!==a[0].id?t:e})))}))}},children:"Excuses"})})},I=function(e){var t=e.isOpen,n=e.onClose,r=e.person;return Object(i.jsxs)(a.Modal,{isOpen:t,onClose:n,rounded:"md",maxW:"24rem",children:[Object(i.jsx)(a.Icon,{name:"Cross",pos:"absolute",top:"1rem",right:"1rem",size:"16px",onClick:n,cursor:"pointer"}),Object(i.jsxs)(a.Text,{p:{l:"0.5rem",t:"0.25rem"},m:{b:"2rem"},children:[Object(i.jsxs)("p",{children:["NAME: ",r.name]}),Object(i.jsxs)("p",{children:["STATUS: ",r.status.toUpperCase()]}),Object(i.jsxs)("p",{children:["REASON: ",r.reason.toUpperCase()]}),Object(i.jsxs)("p",{children:["GROUP: ",r.group.toUpperCase()]}),Object(i.jsxs)("p",{children:["EXCUSES: ",r.excuse.toUpperCase()]}),Object(i.jsxs)("p",{children:["ROLE: ",r.role.toUpperCase()]})]}),Object(i.jsx)(a.Div,{d:"flex",justify:"flex-end",children:Object(i.jsx)(a.Button,{onClick:n,bg:"gray200",textColor:"medium",m:{r:"1rem"},children:"Close"})})]})},R=function(e){var t=e.person,n=Object(c.useState)(!1),r=Object(o.a)(n,2),s=r[0],l=r[1],u=function(){l(!s)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(a.Button,{bg:"info700",hoverBg:"info600",m:{r:"0.5rem"},onClick:u,children:"Details"}),Object(i.jsx)(I,{isOpen:s,onClose:u,person:t})]})},E=function(e){var t=e.isOpen,n=e.onClose,r=e.onSubmit,s=e.person;return Object(i.jsxs)(a.Modal,{isOpen:t,onClose:n,align:"center",rounded:"md",children:[Object(i.jsx)(a.Icon,{name:"Cross",pos:"absolute",top:"1rem",right:"1rem",size:"16px",onClick:n,cursor:"pointer"}),Object(i.jsxs)(a.Div,{d:"flex",m:{b:"4rem"},children:[Object(i.jsx)(a.Icon,{name:"AlertSolid",color:"warning700",m:{t:"0.35rem",r:"0.5rem"}}),Object(i.jsxs)(a.Text,{p:{l:"0.5rem",t:"0.25rem"},textSize:"subheader",children:["Are you sure you want to permanently delete ",s,"?"]})]}),Object(i.jsxs)(a.Div,{d:"flex",justify:"flex-end",children:[Object(i.jsx)(a.Button,{onClick:n,bg:"gray200",textColor:"medium",m:{r:"1rem"},children:"Cancel"}),Object(i.jsx)(a.Button,{onClick:r,bg:"info700",children:"Yes, Delete"})]})]})},N=function(e){var t=e.id,n=e.setPersons,r=e.persons,s=e.person,l=Object(c.useState)(!1),u=Object(o.a)(l,2),j=u[0],b=u[1],d=function(){b(!j)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(a.Button,{bg:"info700",hoverBg:"info600",m:{b:"1rem"},onClick:d,children:"Delete"}),Object(i.jsx)(E,{isOpen:j,onClose:d,onSubmit:function(){b(!j),D(t),n(r.filter((function(e){return e.id!==t})))},person:s})]})},B=function(e){var t=e.person,n=e.persons,r=e.setPersons,s=Object(i.jsxs)(a.Div,{p:{x:"1rem",y:"0.5rem"},onClick:function(e){b(!j),console.log(e.target.getAttribute("value"));var s={name:t.name,status:t.status,reason:t.reason,group:t.group,excuse:t.excuse,role:e.target.getAttribute("value")},o=n.filter((function(e){return e.name.toLowerCase().includes(s.name.toLowerCase())}));if(console.log(o),e.target.getAttribute("value"))return T(o[0].id,s).then((function(e){r(n.map((function(t){return t.id!==o[0].id?t:e})))}))},children:[Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"hq",children:"Coy HQ"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"sevenspec",children:"7th Mono Spec"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"ic2",children:"IC2 Opr"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"is",children:"IS Opr"})]}),l=Object(c.useState)(!1),u=Object(o.a)(l,2),j=u[0],b=u[1];return Object(i.jsx)(a.Dropdown,{w:"fit-content",isOpen:j,onClick:function(){b(!j)},menu:s,bg:"info100",focusBg:"info200",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",openSuffix:Object(i.jsx)(a.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(i.jsx)(a.Icon,{name:"Down",color:"info700",size:"16px"}),children:"ROLE"})},F=function(e){var t=e.person,n=e.persons,r=e.setPersons,s=Object(i.jsxs)(a.Div,{p:{x:"1rem",y:"0.5rem"},onClick:function(e){b(!j),console.log(e.target.getAttribute("value"));var s={name:t.name,status:t.status,reason:t.reason,group:e.target.getAttribute("value"),excuse:t.excuse,role:t.role},o=n.filter((function(e){return e.name.toLowerCase().includes(s.name.toLowerCase())}));if(console.log(o),e.target.getAttribute("value"))return T(o[0].id,s).then((function(e){r(n.map((function(t){return t.id!==o[0].id?t:e})))}))},children:[Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"hq",children:"HQ"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"ccp",children:"FG1 - CCP"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"csp",children:"FG2 - CSP"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"others",children:"Others"})]}),l=Object(c.useState)(!1),u=Object(o.a)(l,2),j=u[0],b=u[1];return Object(i.jsx)(a.Dropdown,{w:"fit-content",isOpen:j,onClick:function(){b(!j)},menu:s,bg:"info100",focusBg:"info200",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",openSuffix:Object(i.jsx)(a.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(i.jsx)(a.Icon,{name:"Down",color:"info700",size:"16px"}),children:"GROUP"})},P=function(e){var t=e.person,n=e.persons,r=e.setPersons,s=Object(i.jsxs)(a.Div,{p:{x:"1rem",y:"0.5rem"},onClick:function(e){b(!j);var s=e.target.getAttribute("value"),o="";(o="mc"===s?prompt("Details","MC FROM ".concat(f," TO ").concat(f)):"ma"===s?prompt("Details","MA AT"):"off"===s?prompt("Details","OFF ON ".concat(f)):"leave"===s?prompt("Details","LEAVE ON ".concat(f)):"attached"===s?prompt("Details","ATTACHED OUT TO "):"others"===s||"oncourse"===s?prompt("Details",""):"")&&(o=o.toUpperCase()),console.log(o),console.log(e.target.getAttribute("value"));var c={name:t.name,status:e.target.getAttribute("value"),reason:o,group:t.group,excuse:t.excuse,role:t.role},a=n.filter((function(e){return e.name.toLowerCase().includes(c.name.toLowerCase())}));if(console.log(a),e.target.getAttribute("value"))return T(a[0].id,c).then((function(e){r(n.map((function(t){return t.id!==a[0].id?t:e})))}))},children:[Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"present",children:"Present \u2705"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"mc",children:"MC \ud83d\ude37"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"ma",children:"MA \ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"off",children:"Off \ud83d\udeab"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"oncourse",children:"On Course \ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"leave",children:"Leave \ud83d\udeaa"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"attached",children:"Attached Out \ud83c\udd70"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"others",children:"Others \ud83d\uddd2"}),Object(i.jsx)(a.Anchor,{d:"block",p:{y:"0.25rem"},value:"stayout",children:"Stay Out \ud83c\udfe0"})]}),l=Object(c.useState)(!1),u=Object(o.a)(l,2),j=u[0],b=u[1];return Object(i.jsx)(a.Dropdown,{w:"fit-content",isOpen:j,onClick:function(){b(!j)},menu:s,bg:"info100",focusBg:"info200",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",openSuffix:Object(i.jsx)(a.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(i.jsx)(a.Icon,{name:"Down",color:"info700",size:"16px"}),children:"STATUS"})},z=function(e){var t=e.person,n=e.id,r=e.setPersons,s=e.persons,l=Object(c.useState)(!1),u=Object(o.a)(l,2),j=u[0],b=u[1],d=function(){return b(!j)};return!1===j?Object(i.jsxs)(a.Div,{d:"flex",children:[Object(i.jsx)(a.Button,{color:"warning700",onClick:d,children:"Update"}),Object(i.jsx)(R,{person:t}),Object(i.jsx)(N,{id:n,setPersons:r,persons:s,person:t.name})]}):(setTimeout(d,1e4),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(a.Div,{d:"flex",children:[Object(i.jsx)(a.Button,{onClick:d,children:"Hide"}),Object(i.jsx)(R,{person:t}),Object(i.jsx)(N,{id:n,setPersons:r,persons:s,person:t.name})]}),Object(i.jsxs)(a.Div,{d:"flex",children:[Object(i.jsx)(P,{options:j,person:t,persons:s,setPersons:r}),Object(i.jsx)(F,{options:j,person:t,persons:s,setPersons:r}),Object(i.jsx)(B,{options:j,person:t,persons:s,setPersons:r})]}),Object(i.jsx)(a.Div,{d:"flex",children:Object(i.jsx)(U,{options:j,person:t,persons:s,setPersons:r})})]}))},L=function(e){var t=e.symbol;return Object(i.jsx)("span",{className:"emoji",role:"img",children:t})},G=function(e){var t=e.currentStatus;return"present"===t?Object(i.jsx)(L,{symbol:"\u2705"}):"attached"===t?Object(i.jsx)(L,{symbol:"\ud83c\udd70"}):"others"===t?Object(i.jsx)(L,{symbol:"\ud83d\uddd2"}):"mc"===t?Object(i.jsx)(L,{symbol:"\ud83d\ude37"}):"ma"===t?Object(i.jsx)(L,{symbol:"\ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}):"off"===t?Object(i.jsx)(L,{symbol:"\ud83d\udeab"}):"leave"===t||"leave"===t?Object(i.jsx)(L,{symbol:"\ud83d\udeaa"}):"stayout"===t?Object(i.jsx)(L,{symbol:"\ud83c\udfe0"}):"oncourse"===t?Object(i.jsx)(L,{symbol:"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}):""},M=function(e){var t=e.person;return t.reason&&"nil"!==t.reason?Object(i.jsxs)(i.Fragment,{children:["(",t.reason,")"]}):Object(i.jsx)(i.Fragment,{})},H=function(e){var t=e.setPersons,n=e.persons,r=Object(c.useState)(!1),s=Object(o.a)(r,2),l=s[0],u=s[1],j=function(){return u(!l)};return!1===l?Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(a.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(i.jsx)(a.Button,{id:"edit",suffix:Object(i.jsx)(a.Icon,{name:"Down",size:"16px",color:"white",m:{l:"1rem"}}),bg:"black",hoverBg:"black400",shadow:"3",hoverShadow:"4",m:{r:"1rem"},onClick:j,children:"Edit"})})}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(a.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(i.jsx)(a.Button,{id:"edit",suffix:Object(i.jsx)(a.Icon,{name:"Up",size:"16px",color:"white",m:{l:"1rem"}}),bg:"black",hoverBg:"black400",shadow:"3",hoverShadow:"4",m:{r:"1rem"},onClick:j,children:"Hide"})}),Object(i.jsx)("br",{}),Object(i.jsx)("ol",{children:n.map((function(e){return Object(i.jsxs)("li",{children:[e.name,Object(i.jsx)(G,{currentStatus:e.status}),Object(i.jsx)(M,{person:e}),Object(i.jsx)("br",{}),Object(i.jsx)(z,{person:e,id:e.id,setPersons:t,persons:n})]},e.name)}))})]})},W=function(e){var t=e.newcdo,n=e.setnewcdo,r=e.newcds,s=e.setnewcds,o=e.newcos,c=e.setnewcos,l=e.newas,u=e.setnewas,j=e.newauthor,b=e.setnewauthor;return Object(i.jsxs)(a.Div,{children:[Object(i.jsx)("h1",{children:"Settings"}),Object(i.jsx)(a.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(i.jsx)(a.Input,{rounded:"xl",value:t,id:"cdo",onChange:function(e){console.log("CDO: ".concat(e.target.value)),n(e.target.value)},placeholder:"CDO (Rank/Name)",p:{x:"2.5rem"},prefix:Object(i.jsx)(a.Icon,{name:"UserSolid",color:"warning800",size:"16px",cursor:"pointer",pos:"absolute",top:"50%",left:"0.75rem",transform:"translateY(-50%)"})})}),Object(i.jsx)(a.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(i.jsx)(a.Input,{rounded:"xl",value:r,onChange:function(e){console.log("CDS: ".concat(e.target.value)),s(e.target.value)},id:"cds",placeholder:"CDS (Rank/Name)",p:{x:"2.5rem"},prefix:Object(i.jsx)(a.Icon,{name:"UserSolid",color:"warning800",size:"16px",cursor:"pointer",pos:"absolute",top:"50%",left:"0.75rem",transform:"translateY(-50%)"})})}),Object(i.jsx)(a.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(i.jsx)(a.Input,{rounded:"xl",value:o,onChange:function(e){console.log("COS: ".concat(e.target.value)),c(e.target.value)},placeholder:"COS (Rank/Name)",p:{x:"2.5rem"},prefix:Object(i.jsx)(a.Icon,{name:"UserSolid",color:"warning800",size:"16px",cursor:"pointer",pos:"absolute",top:"50%",left:"0.75rem",transform:"translateY(-50%)"})})}),Object(i.jsx)(a.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(i.jsx)(a.Input,{rounded:"xl",value:l,onChange:function(e){console.log("Armskote: ".concat(e.target.value)),u(e.target.value)},placeholder:"A/S (Rank/Name)",p:{x:"2.5rem"},prefix:Object(i.jsx)(a.Icon,{name:"UserSolid",color:"warning800",size:"16px",cursor:"pointer",pos:"absolute",top:"50%",left:"0.75rem",transform:"translateY(-50%)"})})}),Object(i.jsx)(a.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(i.jsx)(a.Input,{rounded:"xl",value:j,onChange:function(e){console.log("Done by: ".concat(e.target.value)),b(e.target.value)},placeholder:"Done By: (Rank/Name)",p:{x:"2.5rem"},prefix:Object(i.jsx)(a.Icon,{name:"UserSolid",color:"warning800",size:"16px",cursor:"pointer",pos:"absolute",top:"50%",left:"0.75rem",transform:"translateY(-50%)"})})})]})},Y=new Date,Q=Y.getHours(),q=Y.getMinutes();Q<10&&(Q="0".concat(Q)),q<10&&(q="0".concat(q));var J="".concat(Q).concat(q),V="";V=J<1200&&J>="0000"?"morning":J>1600?"evening":"afternoon";var K=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("p",{children:["Good ",V," Commanders, this is the strength for Signal Company as of ",J," on ",f,"."]})})},X={padding:0,margin:0},Z=function(e){var t=e.persons,n=0;t.map((function(e){return"mc"===e.status?n+=1:n}));var r=0;t.map((function(e){return"ma"===e.status?r+=1:r}));var s=0;t.map((function(e){return"off"===e.status?s+=1:s}));var o=0;t.map((function(e){return"oncourse"===e.status?o+=1:o}));var c=0;t.map((function(e){return"leave"===e.status?c+=1:c}));var a=0;t.map((function(e){return"attached"===e.status?a+=1:a}));var l=0;t.map((function(e){return"others"===e.status?l+=1:l}));var u=0;t.map((function(e){return"stayout"===e.status?u+=1:u}));var j=n+r+s+c+a+l+u+o;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{style:X,children:["Absentees: ",j]}),Object(i.jsxs)("p",{style:X,children:[" - ",Object(i.jsx)(G,{currentStatus:"mc"})," MC: ",n," "]}),Object(i.jsxs)("p",{style:X,children:["- ",Object(i.jsx)(G,{currentStatus:"ma"})," MA: ",r," "]}),Object(i.jsxs)("p",{style:X,children:["- ",Object(i.jsx)(G,{currentStatus:"off"})," OFF: ",s," "]}),Object(i.jsxs)("p",{style:X,children:["- ",Object(i.jsx)(G,{currentStatus:"oncourse"})," ON COURSE: ",o," "]}),Object(i.jsxs)("p",{style:X,children:["- ",Object(i.jsx)(G,{currentStatus:"leave"})," LEAVE: ",c," "]}),Object(i.jsxs)("p",{style:X,children:["- ",Object(i.jsx)(G,{currentStatus:"attached"})," ATTACHED OUT: ",a," "]}),Object(i.jsxs)("p",{style:X,children:["- ",Object(i.jsx)(G,{currentStatus:"others"})," OTHERS: ",l," "]}),Object(i.jsxs)("p",{style:X,children:["- ",Object(i.jsx)(G,{currentStatus:"stayout"})," STAY OUT: ",u," "]}),Object(i.jsx)("br",{})]})},$={padding:0,margin:0},_=function(e){var t=e.persons,n=t.filter((function(e){return"hq"===e.role})),r=0;n.map((function(e){return"present"===e.status?r+=1:r}));var s=n.length,o=t.filter((function(e){return"sevenspec"===e.role})),c=0;o.map((function(e){return"present"===e.status?c+=1:c}));var a=o.length,l=t.filter((function(e){return"ic2"===e.role})),u=0;l.map((function(e){return"present"===e.status?u+=1:u}));var j=l.length,b=t.filter((function(e){return"is"===e.role})),d=0;b.map((function(e){return"present"===e.status?d+=1:d}));var p=b.length,x=t.filter((function(e){return"sixmono"===e.role})),O=0;x.map((function(e){return"present"===e.status?O+=1:O}));var f=x.length;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{style:$,children:[" -Coy HQ: ",r,"/",s," "]}),Object(i.jsxs)("p",{style:$,children:[" -7th Mono Spec: ",c,"/",a," "]}),Object(i.jsxs)("p",{style:$,children:[" -IC2 Opr: ",u,"/",j," "]}),Object(i.jsxs)("p",{style:$,children:[" -IS Opr: ",d,"/",p," "]}),Object(i.jsxs)("p",{style:$,children:[" -6th Mono Opr: ",O,"/",f," "]}),Object(i.jsx)("br",{})]})},ee={padding:0,margin:0},te=function(e){var t=e.persons,n=e.newcdo,r=e.newcds,s=e.newcos,o=e.newas,c=0;t.map((function(e){return"present"===e.status?c+=1:c}));var l=t.length;return Object(i.jsxs)("div",{children:[Object(i.jsxs)(a.Text,{style:ee,children:["CDO: ",n.toUpperCase()]}),Object(i.jsxs)(a.Text,{style:ee,children:["CDS: ",r.toUpperCase()]}),Object(i.jsxs)(a.Text,{style:ee,children:["COS: ",s.toUpperCase()]}),Object(i.jsxs)(a.Text,{style:ee,children:["ARMSKOTE: ",o.toUpperCase()]}),Object(i.jsx)("br",{}),Object(i.jsxs)(a.Text,{style:ee,children:["Total Strength: ",l]}),Object(i.jsxs)(a.Text,{style:ee,children:["Present Strength: ",c]}),Object(i.jsx)("br",{}),Object(i.jsx)(_,{persons:t}),Object(i.jsx)(Z,{persons:t}),Object(i.jsxs)(a.Text,{style:ee,children:["PRESENT IN CAMP: ",c]}),Object(i.jsx)("br",{})]})},ne={padding:0,margin:0},re=function(e){var t=e.persons.filter((function(e){return"hq"===String(e.group).toLowerCase()}));console.log("List of HQ personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var r=t.length;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{style:ne,children:["HQ: ",n,"/",r]}),t.map((function(e,t){return Object(i.jsxs)(a.Text,{style:ne,onClick:function(){return Object(a.scrollTo)("#edit")},children:[t+1,"."," "+e.name,Object(i.jsx)(G,{currentStatus:e.status}),Object(i.jsx)(M,{person:e})]},e.name)}))]})},se={padding:0,margin:0},oe=function(e){var t=e.persons.filter((function(e){return"ccp"===String(e.group).toLowerCase()}));console.log("List of CCP personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var r=t.length;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{style:se,children:["FG1 - CCP: ",n,"/",r]}),t.map((function(e,t){return Object(i.jsxs)(a.Text,{style:se,onClick:function(){return Object(a.scrollTo)("#edit")},children:[t+1," ."," "+e.name,Object(i.jsx)(G,{currentStatus:e.status}),Object(i.jsx)(M,{person:e})]},e.name)}))]})},ce={padding:0,margin:0},ae=function(e){var t=e.persons.filter((function(e){return"csp"===String(e.group).toLowerCase()}));console.log("List of CSP personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var r=t.length;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{style:ce,children:["FG2 - CSP: ",n,"/",r]}),t.map((function(e,t){return Object(i.jsxs)(a.Text,{style:ce,onClick:function(){return Object(a.scrollTo)("#edit")},children:[t+1,"."," "+e.name,Object(i.jsx)(G,{currentStatus:e.status}),Object(i.jsx)(M,{person:e})]},e.name)}))]})},ie={padding:0,margin:0},le=function(e){var t=e.person;return t.excuse?Object(i.jsxs)(i.Fragment,{children:["(",t.excuse,")"]}):Object(i.jsx)(i.Fragment,{})},ue=function(e){var t=e.persons.filter((function(e){return e.excuse&&"nil"!==e.excuse}));console.log("List of personnel with excuses: ".concat(JSON.stringify(t)));var n=t.length;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{style:ie,children:["STATUSES: ",n]}),t.map((function(e,t){return Object(i.jsxs)("p",{style:ie,children:[t+1,"."," "+e.name+" ",Object(i.jsx)(le,{person:e})]},e.name)}))]})},je={padding:0,margin:0},be=function(e){var t=e.newauthor;return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{style:je,children:"Done by:"}),t.toUpperCase()]})},de=function(e){var t=e.persons,n=e.newauthor;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(re,{persons:t}),Object(i.jsx)("br",{}),Object(i.jsx)(oe,{persons:t}),Object(i.jsx)("br",{}),Object(i.jsx)(ae,{persons:t}),Object(i.jsx)("br",{}),Object(i.jsx)(ue,{persons:t}),Object(i.jsx)("br",{}),Object(i.jsx)(be,{newauthor:n})]})},pe=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(o.a)(s,2),l=a[0],j=a[1],b=Object(c.useState)(""),d=Object(o.a)(b,2),p=d[0],x=d[1],O=Object(c.useState)(""),f=Object(o.a)(O,2),m=f[0],h=f[1],g=Object(c.useState)(""),v=Object(o.a)(g,2),C=v[0],S=v[1],y=Object(c.useState)(""),D=Object(o.a)(y,2),U=D[0],I=D[1],R=Object(c.useState)(""),E=Object(o.a)(R,2),N=E[0],B=E[1],F=Object(c.useState)(""),P=Object(o.a)(F,2),z=P[0],L=P[1],G=Object(c.useState)(""),M=Object(o.a)(G,2),Y=M[0],Q=M[1],q=Object(c.useState)(""),J=Object(o.a)(q,2),V=J[0],X=J[1],Z=Object(c.useState)(""),$=Object(o.a)(Z,2),_=$[0],ee=$[1],ne=Object(c.useState)(""),re=Object(o.a)(ne,2),se=re[0],oe=re[1],ce=Object(c.useState)(null),ae=Object(o.a)(ce,2),ie=ae[0],le=ae[1];Object(c.useEffect)((function(){A().then((function(e){r(e)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Parade State Application (For Internal Use Only)"}),Object(i.jsx)(u,{message:ie}),Object(i.jsx)(w,{addName:function(e){e.preventDefault();var t={name:l.trim().toUpperCase(),status:p.toLowerCase(),reason:m||"nil",group:C.toUpperCase(),excuse:U?U.trim:"nil",role:N},s=n.filter((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())}));if(console.log(s),l.trim()&&p.trim()&&C.trim()&&N.trim())if(s.length>0){if(window.confirm("".concat(l.toUpperCase()," is already added to phonebook. Would you like to update the status?")))return T(s[0].id,t).then((function(e){r(n.map((function(t){return t.id!==s[0].id?t:e}))),le("".concat(l.toUpperCase()," has been updated")),setTimeout((function(){return le(null)}),5e3)})).catch((function(e){le("".concat(l.toUpperCase()," has been already been removed from the server")),setTimeout((function(){return le(null)}),5e3)}))}else k(t).then((function(e){r(n.concat(e)),le("".concat(l.toUpperCase()," has been added")),setTimeout((function(){return le(null)}),5e3)})).catch((function(e){le("".concat(l.toUpperCase()," has already been added to the server")),setTimeout((function(){return le(null)}),5e3)}));else alert("All fields (other than medical excuses) must be filled.");x(""),j(""),h(""),S(""),I(""),B("")},newName:l,setNewName:j,newStatus:p,setnewStatus:x,newGroup:C,setnewGroup:S,newexcuse:U,setnewExcuse:I,newRole:N,setnewRole:B,setnewReason:h}),Object(i.jsx)(H,{setPersons:r,persons:n}),Object(i.jsx)(W,{newcdo:z,setnewcdo:L,newcds:Y,setnewcds:Q,newcos:V,setnewcos:X,newas:_,setnewas:ee,newauthor:se,setnewauthor:oe}),Object(i.jsx)("h2",{children:"Parade State"}),Object(i.jsx)(K,{}),Object(i.jsx)(te,{persons:n,newcdo:z,newcds:Y,newcos:V,newas:_}),Object(i.jsx)(de,{setPersons:r,persons:n,newauthor:se})]})},xe=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];return n?Object(i.jsx)(pe,{}):Object(i.jsx)(l,{access:n,setnewaccess:r})},Oe=n(7),fe=new(n(34).a);s.a.render(Object(i.jsx)(Oe.Provider,{value:fe,debug:undefined,debugAfterHydration:!0,children:Object(i.jsxs)(a.ThemeProvider,{theme:{colors:{brand100:"#F9F8FC",brand200:"#F3F1FA",brand300:"#E9E6F6",brand400:"#D2CCEC",brand500:"#BCB3E2",brand600:"#9C8FD6",brand700:"#6F5CC3",brand800:"#553EB5",brand900:"#382683"},grid:{containerWidth:{xs:"540px",sm:"720px",md:"960px",lg:"1156px",xl:"1156px"},gutterWidth:"12px"}},children:[Object(i.jsx)(a.StyleReset,{}),Object(i.jsx)(xe,{})]})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.94e8ec90.chunk.js.map