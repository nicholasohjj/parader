(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r),s=(n(40),n(3)),c=n(2),i=n(1),a=n(0),l=function(e){var t=e.access,n=e.setnewaccess,r=Object(c.useState)(!1),o=Object(s.a)(r,2),l=o[0],u=o[1],j=Object(c.useState)(""),b=Object(s.a)(j,2),d=b[0],x=b[1];return"sigparadestate7"===d&&n(!t),Object(a.jsxs)(i.Div,{align:"center",p:{x:{xs:"1rem",md:"4rem"},y:{xs:"2rem",md:"0rem"}},children:[Object(a.jsx)(i.Text,{p:{xs:"1rem",md:"4rem"},textAlign:"center",textWeight:"600",textSize:"display1",fontFamily:"Helvetica",pos:"relative",children:"Login"}),Object(a.jsx)(i.Div,{bgImg:"https://i.ibb.co/cthGK82/Parade-State-logos-black.png://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",bgSize:"cover",bgPos:"center",h:"10rem"}),Object(a.jsx)(i.Input,{onChange:function(e){x(e.target.value)},placeholder:"Password",type:l?"text":"password",suffix:Object(a.jsx)(i.Button,{pos:"absolute",onClick:function(){u(!l)},bg:"transparent",w:"3rem",top:"0",right:"0",rounded:{r:"md"},children:Object(a.jsx)(i.Icon,{name:l?"EyeSolid":"Eye",color:l?"danger800":"success800",size:"16px"})})}),Object(a.jsx)(i.Text,{p:{xs:"1rem",md:"4rem"},textAlign:"center",textWeight:"600",textSize:"tiny",fontFamily:"Helvetica",pos:"relative",children:"If you are not authorised to use this system, please do not attempt to login."}),Object(a.jsx)(i.Text,{p:{xs:"1rem",md:"4rem"},textAlign:"center",textWeight:"600",textSize:"tiny",fontFamily:"Helvetica",pos:"relative",children:"App under maintenance"})]})},u=function(e){var t=e.message;return null===t?null:Object(a.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t})},j=function(e){var t=e.setnewGroup,n=e.newGroup,r=Object(a.jsxs)(i.Div,{p:{x:"1rem",y:"0.5rem"},value:n,onClick:function(e){j(!u),console.log("Group: ".concat(e.target.getAttribute("value"))),t(e.target.getAttribute("value"))},children:[Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"hq",children:"HQ"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"ccp",children:"FG1 - CCP"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"csp",children:"FG2 - CSP"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"tradecourse",children:"TRADE COURSE"})]}),o=Object(c.useState)(!1),l=Object(s.a)(o,2),u=l[0],j=l[1];return Object(a.jsx)(i.Dropdown,{rounded:"xl",isOpen:u,menu:r,onClick:function(){j(!u)},bg:"info100",focusBg:"info200",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",openSuffix:Object(a.jsx)(i.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(a.jsx)(i.Icon,{name:"Down",color:"info700",size:"16px"}),children:n?"Group: ".concat(n.toUpperCase()):"Group"})},b=function(e){var t=e.setnewRole,n=e.newRole,r=Object(a.jsxs)(i.Div,{p:{x:"1rem",y:"0.5rem"},value:n,onClick:function(e){j(!u),console.log("Role: ".concat(e.target.getAttribute("value"))),t(e.target.getAttribute("value"))},children:[Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"hq",children:"Coy HQ"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"sevenspec",children:"7th Mono Spec"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"ic2",children:"IC2 Opr"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"is",children:"IS Opr"})]}),o=Object(c.useState)(!1),l=Object(s.a)(o,2),u=l[0],j=l[1];return Object(a.jsx)(i.Dropdown,{rounded:"xl",isOpen:u,onClick:function(){j(!u)},menu:r,bg:"info100",focusBg:"info200",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",openSuffix:Object(a.jsx)(i.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(a.jsx)(i.Icon,{name:"Down",color:"info700",size:"16px"}),children:n?"Role: ".concat(n.toUpperCase()):"Role"})},d=new Date,x=d.getDate(),p=d.getMonth()+1,O=d.getFullYear().toString().substr(-2);x<10&&(x="0".concat(x)),p<10&&(p="0".concat(p));var f="".concat(x).concat(p).concat(O),m=function(e){var t=e.setnewStatus,n=e.newStatus,r=e.setnewReason,o="",l=Object(a.jsxs)(i.Div,{p:{x:"1rem",y:"0.5rem"},value:n,onClick:function(e){d(!b),console.log("Status: ".concat(e.target.getAttribute("value"))),t(e.target.getAttribute("value")),o="mc"===e.target.getAttribute("value")?prompt("Details","MC FROM ".concat(f," TO ").concat(f)):"ma"===e.target.getAttribute("value")?prompt("Details","MA AT"):"off"===e.target.getAttribute("value")?prompt("Details","OFF ON ".concat(f)):"leave"===e.target.getAttribute("value")?prompt("Details","LEAVE ON ".concat(f)):"attached"===e.target.getAttribute("value")?prompt("Details","ATTACHED OUT TO"):"others"===e.target.getAttribute("value")||"oncourse"===e.target.getAttribute("value")?prompt("Details",""):"",console.log("Reason: ".concat(o)),r(o?o.toUpperCase():"nil")},children:[Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"present",children:"Present \u2705"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"mc",children:"MC \ud83d\ude37"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"ma",children:"MA \ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"off",children:"Off \ud83d\udeab"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"oncourse",children:"On Course \ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"leave",children:"Leave \ud83d\udeaa"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"attached",children:"Attached Out \ud83c\udd70"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"others",children:"Others \ud83d\uddd2"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"stayout",children:"Stay Out \ud83c\udfe0"})]}),u=Object(c.useState)(!1),j=Object(s.a)(u,2),b=j[0],d=j[1];return Object(a.jsx)(i.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(a.jsx)(i.Dropdown,{rounded:"xl",isOpen:b,menu:l,onClick:function(){d(!b)},bg:"info100",focusBg:"info200",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",openSuffix:Object(a.jsx)(i.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(a.jsx)(i.Icon,{name:"Down",color:"info700",size:"16px"}),children:n?"Status: ".concat(n.toUpperCase()):"Status"})})},h=function(e){var t=e.newName,n=e.setNewName;return Object(a.jsx)(i.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(a.jsx)(i.Input,{rounded:"xl",value:t,bg:"success00",onChange:function(e){console.log("Name: ".concat(e.target.value)),n(e.target.value)},placeholder:"Rank/Name",p:{x:"2.5rem"},prefix:Object(a.jsx)(i.Icon,{name:"UserSolid",color:"black",size:"16px",cursor:"pointer",pos:"absolute",top:"50%",left:"0.75rem",transform:"translateY(-50%)",onClick:function(){return window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}})})})},g=function(e){var t=e.newexcuse,n=e.setnewExcuse;return Object(a.jsx)(i.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(a.jsx)(i.Input,{rounded:"xl",value:t,onChange:function(e){console.log("Excuse: ".concat(e.target.getAttribute("value"))),n(e.target.value)},placeholder:"Medical Excuses",p:{x:"2.5rem"},prefix:Object(a.jsx)(i.Icon,{name:"RemoveSolid",color:"danger800",size:"16px",cursor:"pointer",pos:"absolute",top:"50%",left:"0.75rem",transform:"translateY(-50%)"})})})},v=function(e){var t=e.addName,n=e.newName,r=e.setNewName,o=e.newStatus,s=e.setnewStatus,c=e.newGroup,l=e.setnewGroup,u=e.newexcuse,d=e.setnewExcuse,x=e.newRole,p=e.setnewRole,O=e.setnewReason;return Object(a.jsx)(i.Div,{children:Object(a.jsxs)("form",{onSubmit:t,children:[Object(a.jsx)(h,{newName:n,setNewName:r}),Object(a.jsx)("br",{}),Object(a.jsx)(g,{newexcuse:u,setnewExcuse:d}),Object(a.jsx)("br",{}),Object(a.jsx)(m,{setnewStatus:s,newStatus:o,setnewReason:O}),Object(a.jsx)("br",{}),Object(a.jsx)(j,{setnewGroup:l,newGroup:c}),Object(a.jsx)("br",{}),Object(a.jsx)(b,{setnewRole:p,newRole:x}),Object(a.jsx)("br",{}),Object(a.jsx)(i.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(a.jsx)(i.Button,{textColor:"white",type:"submit",rounded:"xl",bg:"black700",hoverBg:"black800",p:{r:"1.5rem",l:"1rem"},shadow:"3",hoverShadow:"4",children:"Submit"})})]})})},C=n(18),w=n.n(C),S="/api/persons",y=function(){return w.a.get(S).then((function(e){return e.data}))},A=function(e){return w.a.post(S,e).then((function(e){return e.data}))},k=function(e){return w.a.delete("".concat(S,"/").concat(e))},D=function(e,t){return w.a.put("".concat(S,"/").concat(e),t).then((function(e){return e.data}))},B=function(e){var t=e.setNewMessage,n=e.persons,r=e.setPersons,o=Object(c.useState)(""),l=Object(s.a)(o,2),u=l[0],j=l[1],b=Object(c.useState)(""),d=Object(s.a)(b,2),x=d[0],p=d[1],O=Object(c.useState)(""),f=Object(s.a)(O,2),m=f[0],h=f[1],g=Object(c.useState)(""),C=Object(s.a)(g,2),w=C[0],S=C[1],y=Object(c.useState)(""),k=Object(s.a)(y,2),B=k[0],I=k[1],T=Object(c.useState)(""),U=Object(s.a)(T,2),E=U[0],F=U[1],z=Object(c.useState)(!1),P=Object(s.a)(z,2),R=P[0],N=P[1],L=function(){return N(!R)};return!1===R?Object(a.jsx)(i.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(a.jsx)(i.Button,{textColor:"black",rounded:"xl",bg:"success700",hoverBg:"success600",p:{r:"1.5rem",l:"1rem"},shadow:"3",hoverShadow:"4",onClick:L,suffix:Object(a.jsx)(i.Icon,{name:"Add",size:"16px",color:"black",m:{l:"1rem"}}),children:"Add"})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(a.jsx)(i.Button,{textColor:"black",rounded:"xl",bg:"success700",hoverBg:"success600",p:{r:"1.5rem",l:"1rem"},shadow:"3",hoverShadow:"4",onClick:L,suffix:Object(a.jsx)(i.Icon,{name:"Add",size:"16px",color:"black",m:{l:"1rem"}}),children:"Hide"})}),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsx)(v,{addName:function(e){e.preventDefault(),console.log(B);var o={name:u.trim().toUpperCase(),status:x.toLowerCase(),reason:m||"nil",group:w.toUpperCase(),excuse:B||"nil",role:E},s=n.filter((function(e){return e.name.toLowerCase().includes(o.name.toLowerCase())}));if(console.log(s),u.trim()&&x.trim()&&w.trim()&&E.trim())if(s.length>0){if(window.confirm("".concat(u.toUpperCase()," is already added to phonebook. Would you like to update the status?")))return D(s[0].id,o).then((function(e){r(n.map((function(t){return t.id!==s[0].id?t:e}))),t("".concat(u.toUpperCase()," has been updated")),setTimeout((function(){return t(null)}),5e3)})).catch((function(e){t("".concat(u.toUpperCase()," has been already been removed from the server")),setTimeout((function(){return t(null)}),5e3)}))}else A(o).then((function(e){r(n.concat(e)),t("".concat(u.toUpperCase()," has been added")),setTimeout((function(){return t(null)}),5e3)})).catch((function(e){t("".concat(u.toUpperCase()," has already been added to the server")),setTimeout((function(){return t(null)}),5e3)}));else alert("All fields (other than medical excuses) must be filled.");p(""),j(""),h(""),S(""),I(""),F("")},newName:u,setNewName:j,newStatus:x,setnewStatus:p,newGroup:w,setnewGroup:S,newexcuse:B,setnewExcuse:I,newRole:E,setnewRole:F,setnewReason:h}),Object(a.jsx)("br",{})]})]})},I=function(e){var t=e.options,n=e.person,r=e.persons,o=e.setPersons;if(t)return Object(a.jsx)(i.Div,{d:"flex",children:Object(a.jsx)(i.Button,{bg:"white",focusBg:"info300",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",m:{r:"0.5rem",y:"0.5rem"},"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e,t){console.log(t);var s=prompt("Current excuses",n.excuse);if(s){var c={name:n.name,status:n.status,reason:n.reason,group:n.group,excuse:s.toUpperCase(),role:n.role},i=r.filter((function(e){return e.name.toLowerCase().includes(c.name.toLowerCase())}));if(console.log(i),s)return D(i[0].id,c).then((function(e){o(r.map((function(t){return t.id!==i[0].id?t:e})))}))}},children:"Excuses"})})},T=function(e){var t=e.isOpen,n=e.onClose,r=e.person;return Object(a.jsxs)(i.Modal,{isOpen:t,onClose:n,rounded:"md",maxW:"24rem",children:[Object(a.jsx)(i.Icon,{name:"Cross",pos:"absolute",top:"1rem",right:"1rem",size:"16px",onClick:n,cursor:"pointer"}),Object(a.jsxs)(i.Text,{p:{l:"0.5rem",t:"0.25rem"},m:{b:"2rem"},children:[Object(a.jsxs)("p",{children:["NAME: ",r.name]}),Object(a.jsxs)("p",{children:["STATUS: ",r.status.toUpperCase()]}),Object(a.jsxs)("p",{children:["REASON: ",r.reason.toUpperCase()]}),Object(a.jsxs)("p",{children:["GROUP: ",r.group.toUpperCase()]}),Object(a.jsxs)("p",{children:["EXCUSES: ",r.excuse.toUpperCase()]}),Object(a.jsxs)("p",{children:["ROLE: ",r.role.toUpperCase()]})]}),Object(a.jsx)(i.Div,{d:"flex",justify:"flex-end",children:Object(a.jsx)(i.Button,{onClick:n,bg:"gray200",textColor:"medium",m:{r:"1rem"},children:"Close"})})]})},U=function(e){var t=e.person,n=Object(c.useState)(!1),r=Object(s.a)(n,2),o=r[0],l=r[1],u=function(){l(!o)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.Button,{bg:"success700",hoverBg:"success600",m:{r:"0.5rem"},onClick:u,children:Object(a.jsx)(i.Icon,{name:"Menu",size:"20px"})}),Object(a.jsx)(T,{isOpen:o,onClose:u,person:t})]})},E=function(e){var t=e.isOpen,n=e.onClose,r=e.onSubmit,o=e.person;return Object(a.jsxs)(i.Modal,{isOpen:t,onClose:n,align:"center",rounded:"md",children:[Object(a.jsx)(i.Icon,{name:"Cross",pos:"absolute",top:"1rem",right:"1rem",size:"16px",onClick:n,cursor:"pointer"}),Object(a.jsxs)(i.Div,{d:"flex",m:{b:"4rem"},children:[Object(a.jsx)(i.Icon,{name:"AlertSolid",color:"warning700",m:{t:"0.35rem",r:"0.5rem"}}),Object(a.jsxs)(i.Text,{p:{l:"0.5rem",t:"0.25rem"},textSize:"subheader",children:["Are you sure you want to permanently delete ",o,"?"]})]}),Object(a.jsxs)(i.Div,{d:"flex",justify:"flex-end",children:[Object(a.jsx)(i.Button,{onClick:n,bg:"gray200",textColor:"medium",m:{r:"1rem"},children:"Cancel"}),Object(a.jsx)(i.Button,{onClick:r,bg:"info700",children:"Yes, Delete"})]})]})},F=function(e){var t=e.id,n=e.setPersons,r=e.persons,o=e.person,l=Object(c.useState)(!1),u=Object(s.a)(l,2),j=u[0],b=u[1],d=function(){b(!j)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.Button,{bg:"danger700",hoverBg:"danger600",m:{b:"1rem"},onClick:d,children:Object(a.jsx)(i.Icon,{name:"Delete",size:"20px"})}),Object(a.jsx)(E,{isOpen:j,onClose:d,onSubmit:function(){b(!j),k(t),n(r.filter((function(e){return e.id!==t})))},person:o})]})},z=function(e){var t=e.person,n=e.persons,r=e.setPersons,o=Object(a.jsxs)(i.Div,{p:{x:"1rem",y:"0.5rem"},onClick:function(e){b(!j),console.log(e.target.getAttribute("value"));var o={name:t.name,status:t.status,reason:t.reason,group:t.group,excuse:t.excuse,role:e.target.getAttribute("value")},s=n.filter((function(e){return e.name.toLowerCase().includes(o.name.toLowerCase())}));if(console.log(s),e.target.getAttribute("value"))return D(s[0].id,o).then((function(e){r(n.map((function(t){return t.id!==s[0].id?t:e})))}))},children:[Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"hq",children:"Coy HQ"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"sevenspec",children:"7th Mono Spec"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"ic2",children:"IC2 Opr"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"is",children:"IS Opr"})]}),l=Object(c.useState)(!1),u=Object(s.a)(l,2),j=u[0],b=u[1];return Object(a.jsx)(i.Dropdown,{w:"fit-content",isOpen:j,onClick:function(){b(!j)},menu:o,bg:"info100",focusBg:"info200",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",m:{r:"0.5rem"},openSuffix:Object(a.jsx)(i.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(a.jsx)(i.Icon,{name:"Down",color:"info700",size:"16px"}),children:"Role"})},P=function(e){var t=e.person,n=e.persons,r=e.setPersons,o=Object(a.jsxs)(i.Div,{p:{x:"1rem",y:"0.5rem"},onClick:function(e){b(!j),console.log(e.target.getAttribute("value"));var o={name:t.name,status:t.status,reason:t.reason,group:e.target.getAttribute("value"),excuse:t.excuse,role:t.role},s=n.filter((function(e){return e.name.toLowerCase().includes(o.name.toLowerCase())}));if(console.log(s),e.target.getAttribute("value"))return D(s[0].id,o).then((function(e){r(n.map((function(t){return t.id!==s[0].id?t:e})))}))},children:[Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"hq",children:"HQ"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"ccp",children:"FG1 - CCP"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"csp",children:"FG2 - CSP"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"tradecourse",children:"Trade Course"})]}),l=Object(c.useState)(!1),u=Object(s.a)(l,2),j=u[0],b=u[1];return Object(a.jsx)(i.Dropdown,{w:"fit-content",isOpen:j,onClick:function(){b(!j)},menu:o,bg:"info100",focusBg:"info200",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",m:{r:"0.5rem"},openSuffix:Object(a.jsx)(i.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(a.jsx)(i.Icon,{name:"Down",color:"info700",size:"16px"}),children:"Group"})},R=function(e){var t=e.person,n=e.persons,r=e.setPersons,o=Object(a.jsxs)(i.Div,{p:{x:"1rem",y:"0.5rem"},onClick:function(e){b(!j);var o=e.target.getAttribute("value"),s="";s=(s="mc"===o?prompt("Details","MC FROM ".concat(f," TO ").concat(f)):"ma"===o?prompt("Details","MA AT"):"off"===o?prompt("Details","OFF ON ".concat(f)):"leave"===o?prompt("Details","LEAVE ON ".concat(f)):"attached"===o?prompt("Details","ATTACHED OUT TO "):"others"===o||"oncourse"===o?prompt("Details",""):"")?s.toUpperCase():"nil",console.log(s),console.log(e.target.getAttribute("value"));var c={name:t.name,status:e.target.getAttribute("value"),reason:s,group:t.group,excuse:t.excuse,role:t.role},i=n.filter((function(e){return e.name.toLowerCase().includes(c.name.toLowerCase())}));if(console.log(i),e.target.getAttribute("value"))return D(i[0].id,c).then((function(e){r(n.map((function(t){return t.id!==i[0].id?t:e})))}))},children:[Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"present",children:"Present \u2705"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"mc",children:"MC \ud83d\ude37"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"ma",children:"MA \ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"off",children:"Off \ud83d\udeab"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"oncourse",children:"On Course \ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"leave",children:"Leave \ud83d\udeaa"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"attached",children:"Attached Out \ud83c\udd70"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"others",children:"Others \ud83d\uddd2"}),Object(a.jsx)(i.Anchor,{d:"block",p:{y:"0.25rem"},value:"stayout",children:"Stay Out \ud83c\udfe0"})]}),l=Object(c.useState)(!1),u=Object(s.a)(l,2),j=u[0],b=u[1];return Object(a.jsx)(i.Dropdown,{w:"fit-content",isOpen:j,onClick:function(){b(!j)},menu:o,bg:"info200",focusBg:"info300",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",m:{r:"0.5rem"},openSuffix:Object(a.jsx)(i.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(a.jsx)(i.Icon,{name:"Down",color:"info700",size:"16px"}),children:"Status"})},N=function(e){var t=e.person,n=e.id,r=e.setPersons,o=e.persons,l=Object(c.useState)(!1),u=Object(s.a)(l,2),j=u[0],b=u[1],d=function(){return b(!j)};return!1===j?Object(a.jsxs)(i.Div,{d:"flex",children:[Object(a.jsx)(i.Button,{bg:"info700",hoverBg:"info600",m:{r:"0.5rem"},onClick:d,children:Object(a.jsx)(i.Icon,{name:"Edit",size:"20px"})}),Object(a.jsx)(U,{person:t}),Object(a.jsx)(F,{id:n,setPersons:r,persons:o,person:t.name})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(i.Div,{d:"flex",children:[Object(a.jsx)(i.Button,{bg:"info700",hoverBg:"info600",m:{r:"0.5rem"},onClick:d,children:Object(a.jsx)(i.Icon,{name:"Edit",size:"20px"})}),Object(a.jsx)(U,{person:t}),Object(a.jsx)(F,{id:n,setPersons:r,persons:o,person:t.name})]}),Object(a.jsxs)(i.Div,{d:"flex",children:[Object(a.jsx)(R,{options:j,person:t,persons:o,setPersons:r}),Object(a.jsx)(P,{options:j,person:t,persons:o,setPersons:r}),Object(a.jsx)(z,{options:j,person:t,persons:o,setPersons:r})]}),Object(a.jsx)(i.Div,{d:"flex",children:Object(a.jsx)(I,{options:j,person:t,persons:o,setPersons:r})})]})},L=function(e){var t=e.symbol;return Object(a.jsx)("span",{className:"emoji",role:"img",children:t})},M=function(e){var t=e.currentStatus;return"present"===t?Object(a.jsx)(L,{symbol:"\u2705"}):"attached"===t?Object(a.jsx)(L,{symbol:"\ud83c\udd70"}):"others"===t?Object(a.jsx)(L,{symbol:"\ud83d\uddd2"}):"mc"===t?Object(a.jsx)(L,{symbol:"\ud83d\ude37"}):"ma"===t?Object(a.jsx)(L,{symbol:"\ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}):"off"===t?Object(a.jsx)(L,{symbol:"\ud83d\udeab"}):"leave"===t||"leave"===t?Object(a.jsx)(L,{symbol:"\ud83d\udeaa"}):"stayout"===t?Object(a.jsx)(L,{symbol:"\ud83c\udfe0"}):"oncourse"===t?Object(a.jsx)(L,{symbol:"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}):""},G=function(e){var t=e.person;return t.reason&&"nil"!==t.reason?Object(a.jsxs)(a.Fragment,{children:["(",t.reason,")"]}):Object(a.jsx)(a.Fragment,{})},W=function(e){var t=e.setPersons,n=e.persons,r=Object(c.useState)(!1),o=Object(s.a)(r,2),l=o[0],u=o[1],j=function(){return u(!l)};return!1===l?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(i.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(a.jsx)(i.Button,{textColor:"black",rounded:"xl",bg:"info700",hoverBg:"info600",p:{r:"1.5rem",l:"1rem"},shadow:"3",hoverShadow:"4",onClick:j,suffix:Object(a.jsx)(i.Icon,{name:"EditSolid",size:"16px",color:"black",m:{l:"1rem"}}),children:"Edit"})})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(a.jsx)(i.Button,{textColor:"black",rounded:"xl",bg:"info700",hoverBg:"info600",p:{r:"1.5rem",l:"1rem"},shadow:"3",hoverShadow:"4",onClick:j,suffix:Object(a.jsx)(i.Icon,{name:"EditSolid",size:"16px",color:"black",m:{l:"1rem"}}),children:"Hide"})}),Object(a.jsx)("br",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsxs)("li",{children:[e.name,Object(a.jsx)(M,{currentStatus:e.status}),Object(a.jsx)(G,{person:e}),Object(a.jsx)("br",{}),Object(a.jsx)(N,{person:e,id:e.id,setPersons:t,persons:n})]},e.name)}))})]})},H=function(e){var t=e.persons,n=e.setnewcdo,r=Object(c.useState)(!1),o=Object(s.a)(r,2),l=o[0],u=o[1],j=function(){u(!l)},b=t.filter((function(e){return"hq"===String(e.role).toLowerCase()}));console.log(b);var d=Object(a.jsx)(i.Div,{p:{x:"1rem",y:"0.5rem"},onClick:function(e){console.log("CDO: ".concat(e.target.getAttribute("value"))),n(e.target.getAttribute("value"))},children:b.map((function(e){return Object(a.jsx)(i.Anchor,{value:e.name,d:"block",p:{y:"0.25rem"},onClick:j,children:e.name})}))});return Object(a.jsx)(i.Dropdown,{rounded:"xl",isOpen:l,onClick:j,menu:d,bg:"info200",focusBg:"info300",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",openSuffix:Object(a.jsx)(i.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(a.jsx)(i.Icon,{name:"Down",color:"info700",size:"16px"}),children:"CDO"})},Q=function(e){var t=e.persons,n=e.setnewcds,r=Object(c.useState)(!1),o=Object(s.a)(r,2),l=o[0],u=o[1],j=function(){u(!l)},b=t.filter((function(e){return"sevenspec"===String(e.role).toLowerCase()}));console.log(b);var d=Object(a.jsx)(i.Div,{p:{x:"1rem",y:"0.5rem"},onClick:function(e){console.log("CDS: ".concat(e.target.getAttribute("value"))),n(e.target.getAttribute("value"))},children:b.map((function(e){return Object(a.jsx)(i.Anchor,{value:e.name,d:"block",p:{y:"0.25rem"},onClick:j,children:e.name})}))});return Object(a.jsx)(i.Dropdown,{rounded:"xl",isOpen:l,onClick:j,menu:d,bg:"info200",focusBg:"info300",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",openSuffix:Object(a.jsx)(i.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(a.jsx)(i.Icon,{name:"Down",color:"info700",size:"16px"}),children:"COS"})},q=function(e){var t=e.persons,n=e.setnewcos,r=Object(c.useState)(!1),o=Object(s.a)(r,2),l=o[0],u=o[1],j=function(){u(!l)},b=t.filter((function(e){return"sevenspec"===String(e.role).toLowerCase()}));console.log(b);var d=Object(a.jsx)(i.Div,{p:{x:"1rem",y:"0.5rem"},onClick:function(e){console.log("COS: ".concat(e.target.getAttribute("value"))),n(e.target.getAttribute("value"))},children:b.map((function(e){return Object(a.jsx)(i.Anchor,{value:e.name,d:"block",p:{y:"0.25rem"},onClick:j,children:e.name})}))});return Object(a.jsx)(i.Dropdown,{rounded:"xl",isOpen:l,onClick:j,menu:d,bg:"info200",focusBg:"info300",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",openSuffix:Object(a.jsx)(i.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(a.jsx)(i.Icon,{name:"Down",color:"info700",size:"16px"}),children:"CDS"})},J=function(e){var t=e.persons,n=e.setnewas,r=function(){d(!b)},o=t.filter((function(e){return"sevenspec"===String(e.role).toLowerCase()}));console.log(o);var l=Object(a.jsx)(i.Div,{p:{x:"1rem",y:"0.5rem"},onClick:function(e){console.log("AS: ".concat(e.target.getAttribute("value"))),n(e.target.getAttribute("value"))},children:o.map((function(e){return Object(a.jsx)(i.Anchor,{value:e.name,d:"block",p:{y:"0.25rem"},onClick:r,children:e.name})}))}),u=Object(c.useState)(!1),j=Object(s.a)(u,2),b=j[0],d=j[1];return Object(a.jsx)(i.Dropdown,{rounded:"xl",isOpen:b,onClick:r,menu:l,bg:"info200",focusBg:"info300",borderColor:"info600",focusBorderColor:"info800",textColor:"info800",textWeight:"500",openSuffix:Object(a.jsx)(i.Icon,{name:"Up",color:"info700",size:"16px"}),closeSuffix:Object(a.jsx)(i.Icon,{name:"Down",color:"info700",size:"16px"}),children:"Armskote"})},Y=function(e){var t=e.setnewcdo,n=e.setnewcds,r=e.setnewcos,o=e.setnewas,s=e.newauthor,c=e.setnewauthor,l=e.persons;return Object(a.jsxs)(i.Div,{children:[Object(a.jsx)("h1",{children:"Settings"}),Object(a.jsx)(i.Div,{d:"flex",justify:{xs:"space-around",lg:"center"},children:Object(a.jsx)(i.Input,{rounded:"xl",value:s,onChange:function(e){console.log("Done by: ".concat(e.target.value)),c(e.target.value)},placeholder:"Done By: (Rank/Name)",p:{l:"2rem",r:"3rem"},prefix:Object(a.jsx)(i.Icon,{name:"UserSolid",color:"black",size:"16px",cursor:"pointer",pos:"absolute",top:"50%",left:"0.75rem",transform:"translateY(-50%)"})})}),Object(a.jsx)(H,{persons:l,setnewcdo:t}),Object(a.jsx)(Q,{persons:l,setnewcds:n}),Object(a.jsx)(q,{persons:l,setnewcos:r}),Object(a.jsx)(J,{persons:l,setnewas:o})]})},V=new Date,K=V.getHours(),X=V.getMinutes();K<10&&(K="0".concat(K)),X<10&&(X="0".concat(X));var Z="".concat(K).concat(X),$="";$=Z<1200&&Z>="0000"?"morning":Z>1600?"evening":"afternoon";var _=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("p",{children:["Good ",$," Commanders, this is the strength for Signal Company as of ",Z," on ",f,"."]})})},ee={padding:0,margin:0},te=function(e){var t=e.persons,n=0;t.map((function(e){return"mc"===e.status?n+=1:n}));var r=0;t.map((function(e){return"ma"===e.status?r+=1:r}));var o=0;t.map((function(e){return"off"===e.status?o+=1:o}));var s=0;t.map((function(e){return"oncourse"===e.status?s+=1:s}));var c=0;t.map((function(e){return"leave"===e.status?c+=1:c}));var i=0;t.map((function(e){return"attached"===e.status?i+=1:i}));var l=0;t.map((function(e){return"others"===e.status?l+=1:l}));var u=0;t.map((function(e){return"stayout"===e.status?u+=1:u}));var j=n+r+o+c+i+l+u+s;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:ee,children:["Absentees: ",j]}),Object(a.jsxs)("p",{style:ee,children:[" - ",Object(a.jsx)(M,{currentStatus:"mc"})," MC: ",n," "]}),Object(a.jsxs)("p",{style:ee,children:["- ",Object(a.jsx)(M,{currentStatus:"ma"})," MA: ",r," "]}),Object(a.jsxs)("p",{style:ee,children:["- ",Object(a.jsx)(M,{currentStatus:"off"})," OFF: ",o," "]}),Object(a.jsxs)("p",{style:ee,children:["- ",Object(a.jsx)(M,{currentStatus:"oncourse"})," ON COURSE: ",s," "]}),Object(a.jsxs)("p",{style:ee,children:["- ",Object(a.jsx)(M,{currentStatus:"leave"})," LEAVE: ",c," "]}),Object(a.jsxs)("p",{style:ee,children:["- ",Object(a.jsx)(M,{currentStatus:"attached"})," ATTACHED OUT: ",i," "]}),Object(a.jsxs)("p",{style:ee,children:["- ",Object(a.jsx)(M,{currentStatus:"others"})," OTHERS: ",l," "]}),Object(a.jsxs)("p",{style:ee,children:["- ",Object(a.jsx)(M,{currentStatus:"stayout"})," STAY OUT: ",u," "]}),Object(a.jsx)("br",{})]})},ne={padding:0,margin:0},re=function(e){var t=e.persons,n=t.filter((function(e){return"hq"===e.role})),r=0;n.map((function(e){return"present"===e.status?r+=1:r}));var o=n.length,s=t.filter((function(e){return"sevenspec"===e.role})),c=0;s.map((function(e){return"present"===e.status?c+=1:c}));var i=s.length,l=t.filter((function(e){return"ic2"===e.role})),u=0;l.map((function(e){return"present"===e.status?u+=1:u}));var j=l.length,b=t.filter((function(e){return"is"===e.role})),d=0;b.map((function(e){return"present"===e.status?d+=1:d}));var x=b.length,p=t.filter((function(e){return"sixmono"===e.role})),O=0;p.map((function(e){return"present"===e.status?O+=1:O}));var f=p.length;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:ne,children:[" -Coy HQ: ",r,"/",o," "]}),Object(a.jsxs)("p",{style:ne,children:[" -7th Mono Spec: ",c,"/",i," "]}),Object(a.jsxs)("p",{style:ne,children:[" -IC2 Opr: ",u,"/",j," "]}),Object(a.jsxs)("p",{style:ne,children:[" -IS Opr: ",d,"/",x," "]}),Object(a.jsxs)("p",{style:ne,children:[" -6th Mono Opr: ",O,"/",f," "]}),Object(a.jsx)("br",{})]})},oe={padding:0,margin:0},se=function(e){var t=e.persons,n=e.newcdo,r=e.newcds,o=e.newcos,s=e.newas,c=0;t.map((function(e){return"present"===e.status?c+=1:c}));var l=t.length;return Object(a.jsxs)("div",{children:[Object(a.jsxs)(i.Text,{style:oe,children:["CDO: ",n.toUpperCase()]}),Object(a.jsxs)(i.Text,{style:oe,children:["CDS: ",r.toUpperCase()]}),Object(a.jsxs)(i.Text,{style:oe,children:["COS: ",o.toUpperCase()]}),Object(a.jsxs)(i.Text,{style:oe,children:["ARMSKOTE: ",s.toUpperCase()]}),Object(a.jsx)("br",{}),Object(a.jsxs)(i.Text,{style:oe,children:["Total Strength: ",l]}),Object(a.jsxs)(i.Text,{style:oe,children:["Present Strength: ",c]}),Object(a.jsx)("br",{}),Object(a.jsx)(re,{persons:t}),Object(a.jsx)(te,{persons:t}),Object(a.jsxs)(i.Text,{style:oe,children:["PRESENT IN CAMP: ",c]}),Object(a.jsx)("br",{})]})},ce={padding:0,margin:0},ie=function(e){var t=e.persons.filter((function(e){return"hq"===String(e.group).toLowerCase()}));console.log("List of HQ personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var r=t.length;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:ce,children:["HQ: ",n,"/",r]}),t.map((function(e,t){return Object(a.jsxs)("p",{style:ce,children:[t+1,"."," "+e.name,Object(a.jsx)(M,{currentStatus:e.status}),Object(a.jsx)(G,{person:e})]},e.name)}))]})},ae={padding:0,margin:0},le=function(e){var t=e.persons.filter((function(e){return"ccp"===String(e.group).toLowerCase()}));console.log("List of CCP personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var r=t.length;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:ae,children:["FG1 - CCP: ",n,"/",r]}),t.map((function(e,t){return Object(a.jsxs)(i.Text,{style:ae,children:[t+1," ."," "+e.name,Object(a.jsx)(M,{currentStatus:e.status}),Object(a.jsx)(G,{person:e})]},e.name)}))]})},ue={padding:0,margin:0},je=function(e){var t=e.persons.filter((function(e){return"csp"===String(e.group).toLowerCase()}));console.log("List of CSP personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var r=t.length;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:ue,children:["FG2 - CSP: ",n,"/",r]}),t.map((function(e,t){return Object(a.jsxs)(i.Text,{style:ue,children:["                ",t+1,"."," "+e.name,Object(a.jsx)(M,{currentStatus:e.status}),Object(a.jsx)(G,{person:e})]},e.name)}))]})},be={padding:0,margin:0},de=function(e){var t=e.person;return t.excuse?Object(a.jsxs)(a.Fragment,{children:["(",t.excuse,")"]}):Object(a.jsx)(a.Fragment,{})},xe=function(e){var t=e.persons.filter((function(e){return e.excuse&&"nil"!==e.excuse}));console.log("List of personnel with excuses: ".concat(JSON.stringify(t)));var n=t.length;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:be,children:["STATUSES: ",n]}),t.map((function(e,t){return Object(a.jsxs)("p",{style:be,children:[t+1,"."," "+e.name+" ",Object(a.jsx)(de,{person:e})]},e.name)}))]})},pe={padding:0,margin:0},Oe=function(e){var t=e.newauthor;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{style:pe,children:"Done by:"}),t.toUpperCase()]})},fe={padding:0,margin:0},me=function(e){var t=e.persons.filter((function(e){return"tradecourse"===String(e.group).toLowerCase()}));console.log("List of Trade Course personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var r=t.length;return"0"!=r?Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:fe,children:["IC2 OPR COURSE TILL 160921: ",n,"/",r]}),t.map((function(e,t){return Object(a.jsxs)(i.Text,{style:fe,children:[t+1," ."," "+e.name,Object(a.jsx)(M,{currentStatus:e.status}),Object(a.jsx)(G,{person:e})]},e.name)}))]}):Object(a.jsx)(a.Fragment,{})},he=function(e){var t=e.persons,n=e.newauthor;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ie,{persons:t}),Object(a.jsx)("br",{}),Object(a.jsx)(le,{persons:t}),Object(a.jsx)("br",{}),Object(a.jsx)(je,{persons:t}),Object(a.jsx)("br",{}),Object(a.jsx)(me,{persons:t}),Object(a.jsx)("br",{}),Object(a.jsx)(xe,{persons:t}),Object(a.jsx)("br",{}),Object(a.jsx)(Oe,{newauthor:n})]})},ge=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),i=Object(s.a)(o,2),l=i[0],j=i[1],b=Object(c.useState)(""),d=Object(s.a)(b,2),x=d[0],p=d[1],O=Object(c.useState)(""),f=Object(s.a)(O,2),m=f[0],h=f[1],g=Object(c.useState)(""),v=Object(s.a)(g,2),C=v[0],w=v[1],S=Object(c.useState)(""),A=Object(s.a)(S,2),k=A[0],D=A[1],I=Object(c.useState)(null),T=Object(s.a)(I,2),U=T[0],E=T[1];return Object(c.useEffect)((function(){y().then((function(e){r(e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Parade State Application (For Internal Use Only)"}),Object(a.jsx)(u,{message:U}),Object(a.jsx)(B,{setNewMessage:E,persons:n,setPersons:r}),Object(a.jsx)(W,{setPersons:r,persons:n}),Object(a.jsx)(Y,{newcdo:l,setnewcdo:j,newcds:x,setnewcds:p,newcos:m,setnewcos:h,newas:C,setnewas:w,newauthor:k,setnewauthor:D,persons:n}),Object(a.jsx)("h2",{children:"Parade State"}),Object(a.jsx)(_,{}),Object(a.jsx)(se,{persons:n,newcdo:l,newcds:x,newcos:m,newas:C}),Object(a.jsx)(he,{setPersons:r,persons:n,newauthor:k})]})},ve=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1];return n?Object(a.jsx)(ge,{}):Object(a.jsx)(l,{access:n,setnewaccess:r})},Ce=n(7),we=new(n(34).a);o.a.render(Object(a.jsx)(Ce.Provider,{value:we,debug:undefined,debugAfterHydration:!0,children:Object(a.jsxs)(i.ThemeProvider,{theme:{colors:{brand100:"#F9F8FC",brand200:"#F3F1FA",brand300:"#E9E6F6",brand400:"#D2CCEC",brand500:"#BCB3E2",brand600:"#9C8FD6",brand700:"#6F5CC3",brand800:"#553EB5",brand900:"#382683"},grid:{containerWidth:{xs:"540px",sm:"720px",md:"960px",lg:"1156px",xl:"1156px"},gutterWidth:"12px"}},children:[Object(a.jsx)(i.StyleReset,{}),Object(a.jsx)(ve,{})]})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.8e380ac8.chunk.js.map