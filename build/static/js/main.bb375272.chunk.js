(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var r=n(7),s=n.n(r),c=(n(64),n(4)),o=n(0),a=(n(65),n(1)),l=function(e){var t=e.access,n=e.setnewaccess,r=Object(o.useState)(""),s=Object(c.a)(r,2),l=s[0],i=s[1];return"sigparadestate"===l&&n(!t),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{class:"main",children:[Object(a.jsx)("p",{class:"sign",align:"center",children:"Sign in"}),Object(a.jsx)("form",{class:"form1"}),Object(a.jsx)("input",{class:"pass",type:"password",align:"center",placeholder:"Password",onChange:function(e){i(e.target.value)}})]})})},i=function(e){var t=e.message;return null===t?null:Object(a.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t})},u=n(3),j=function(e){var t=e.setnewGroup,n=e.newGroup,r=Object(a.jsxs)(u.Div,{p:{x:"1rem",y:"0.5rem"},value:n,onClick:function(e){j(!i),console.log("Group: ".concat(e.target.getAttribute("value"))),t(e.target.getAttribute("value"))},children:[Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"hq",children:"HQ"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"ccp",children:"FG1 - CCP"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"csp",children:"FG2 - CSP"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"others",children:"Others"})]}),s=Object(o.useState)(!1),l=Object(c.a)(s,2),i=l[0],j=l[1];return Object(a.jsx)(u.Dropdown,{isOpen:i,menu:r,onClick:function(){j(!i)},children:n?"STATUS: ".concat(n.toUpperCase()):"STATUS"})},b=function(e){var t=e.setnewRole,n=e.newRole,r=Object(a.jsxs)(u.Div,{p:{x:"1rem",y:"0.5rem"},value:n,onClick:function(e){j(!i),console.log("Role: ".concat(e.target.getAttribute("value"))),t(e.target.getAttribute("value"))},children:[Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"hq",children:"Coy HQ"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"sevenspec",children:"7th Mono Spec"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"ic2",children:"IC2 Opr"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"is",children:"IS Opr"})]}),s=Object(o.useState)(!1),l=Object(c.a)(s,2),i=l[0],j=l[1];return Object(a.jsx)(u.Dropdown,{isOpen:i,onClick:function(){j(!i)},menu:r,children:n?"ROLE: ".concat(n.toUpperCase()):"ROLE"})},d=new Date,p=d.getDate(),O=d.getMonth()+1,h=d.getFullYear().toString().substr(-2);p<10&&(p="0".concat(p)),O<10&&(O="0".concat(O));var x="".concat(p).concat(O).concat(h),m=function(e){var t=e.setnewStatus,n=e.newStatus,r=e.setnewReason,s=Object(a.jsxs)(u.Div,{p:{x:"1rem",y:"0.5rem"},value:n,onClick:function(e){b(!j),console.log("Status: ".concat(e.target.getAttribute("value"))),t(e.target.getAttribute("value"));var n="";n="mc"===e.target.getAttribute("value")?prompt("Details","MC FROM ".concat(x," TO ").concat(x)):"ma"===e.target.getAttribute("value")?prompt("Details","MA AT"):"off"===e.target.getAttribute("value")?prompt("Details","OFF ON ".concat(x)):"leave"===e.target.getAttribute("value")?prompt("Details","LEAVE ON ".concat(x)):"attached"===e.target.getAttribute("value")?prompt("Details","ATTACHED OUT TO"):"others"===e.target.getAttribute("value")||"oncourse"===e.target.getAttribute("value")?prompt("Details",""):"",console.log("Reason: ".concat(n)),n&&r(n.toUpperCase())},children:[Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"present",children:"Present \u2705"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"mc",children:"MC \ud83d\ude37"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"ma",children:"MA \ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"off",children:"Off \ud83d\udeab"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"oncourse",children:"On Course \ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"leave",children:"Leave \ud83d\udeaa"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"attached",children:"Attached Out \ud83c\udd70"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"others",children:"Others \ud83d\uddd2"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"stayout",children:"Stay Out \ud83c\udfe0"})]}),l=Object(o.useState)(!1),i=Object(c.a)(l,2),j=i[0],b=i[1];return Object(a.jsx)(u.Dropdown,{isOpen:j,menu:s,onClick:function(){b(!j)},children:n?"STATUS: ".concat(n.toUpperCase()):"STATUS"})},f=function(e){var t=e.newName,n=e.setNewName;return Object(a.jsx)(u.Input,{value:t,onChange:function(e){console.log("Name: ".concat(e.target.value)),n(e.target.value)},placeholder:"Rank/Name",p:{x:"2.5rem"},prefix:Object(a.jsx)(u.Icon,{name:"UserSolid",color:"warning800",size:"16px",cursor:"pointer",pos:"absolute",top:"50%",left:"0.75rem",transform:"translateY(-50%)"})})},g=function(e){var t=e.newexcuse,n=e.setnewExcuse;return Object(a.jsx)(u.Input,{value:t,onChange:function(e){console.log("Excuse: ".concat(e.target.value)),n(e.target.value)},placeholder:"Medical Excuses",p:{x:"2.5rem"},prefix:Object(a.jsx)(u.Icon,{name:"RemoveSolid",color:"danger800",size:"16px",cursor:"pointer",pos:"absolute",top:"50%",left:"0.75rem",transform:"translateY(-50%)"})})},v=function(e){var t=e.addName,n=e.newName,r=e.setNewName,s=e.newStatus,c=e.setnewStatus,o=e.newGroup,l=e.setnewGroup,i=e.newexcuse,d=e.setnewExcuse,p=e.newRole,O=e.setnewRole,h=e.setnewReason;return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:t,children:[Object(a.jsx)(f,{newName:n,setNewName:r}),Object(a.jsx)("br",{}),Object(a.jsx)(m,{setnewStatus:c,newStatus:s,setnewReason:h}),Object(a.jsx)("br",{}),Object(a.jsx)(j,{setnewGroup:l,newGroup:o}),Object(a.jsx)("br",{}),Object(a.jsx)(b,{setnewRole:O,newRole:p}),Object(a.jsx)("br",{}),Object(a.jsx)(g,{newexcuse:i,setnewExcuse:d}),Object(a.jsx)("br",{}),Object(a.jsx)(u.Button,{suffix:Object(a.jsx)(u.Icon,{name:"LongRight",size:"16px",color:"white",m:{l:"1rem"}}),bg:"black",hoverBg:"black400",variant:"contained",color:"primary",type:"submit",children:"Add"})]})})},w=function(e){var t=e.addName,n=e.newName,r=e.setNewName,s=e.newStatus,l=e.setnewStatus,i=e.newGroup,j=e.setnewGroup,b=e.newexcuse,d=e.setnewExcuse,p=e.newRole,O=e.setnewRole,h=e.setnewReason,x=Object(o.useState)(!1),m=Object(c.a)(x,2),f=m[0],g=m[1],w=function(){return g(!f)};return!1===f?Object(a.jsx)(u.Div,{d:"flex",children:Object(a.jsx)(u.Button,{prefix:Object(a.jsx)(u.Icon,{name:"EyeSolid",size:"16px",color:"white",m:{r:"0.5rem"}}),bg:"black",hoverBg:"black400",p:{r:"1.5rem",l:"1rem"},shadow:"3",hoverShadow:"4",onClick:w,children:"Insert New"})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.Div,{d:"flex",children:Object(a.jsx)(u.Button,{prefix:Object(a.jsx)(u.Icon,{name:"EyeSolid",size:"16px",color:"white",m:{r:"0.5rem"}}),bg:"black",hoverBg:"black400",p:{r:"1.5rem",l:"1rem"},shadow:"3",hoverShadow:"4",onClick:w,children:"Hide"})}),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsx)(v,{addName:t,newName:n,setNewName:r,newStatus:s,setnewStatus:l,newGroup:i,setnewGroup:j,newexcuse:b,setnewExcuse:d,newRole:p,setnewRole:O,setnewReason:h}),Object(a.jsx)("br",{})]})]})},C=n(27),y=n.n(C),S="/api/persons",A=function(){return y.a.get(S).then((function(e){return e.data}))},k=function(e){return y.a.post(S,e).then((function(e){return e.data}))},D=function(e){return y.a.delete("".concat(S,"/").concat(e))},R=function(e,t){return y.a.put("".concat(S,"/").concat(e),t).then((function(e){return e.data}))},N=function(e){var t=e.options,n=e.person,r=e.persons,s=e.setPersons;if(t)return Object(a.jsx)(u.Div,{d:"flex",children:Object(a.jsx)(u.Button,{bg:"white",textColor:"black","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e,t){console.log(t);var c=prompt("Current excuses",n.excuse);if(c){var o={name:n.name,status:n.status,reason:n.reason,group:n.group,excuse:c.toUpperCase(),role:n.role},a=r.filter((function(e){return e.name.toLowerCase().includes(o.name.toLowerCase())}));if(console.log(a),c)return R(a[0].id,o).then((function(e){s(r.map((function(t){return t.id!==a[0].id?t:e})))}))}},children:"Excuses"})})},F=function(e){var t=e.isOpen,n=e.onClose,r=e.person;return Object(a.jsxs)(u.Modal,{isOpen:t,onClose:n,rounded:"md",maxW:"24rem",children:[Object(a.jsx)(u.Icon,{name:"Cross",pos:"absolute",top:"1rem",right:"1rem",size:"16px",onClick:n,cursor:"pointer"}),Object(a.jsx)(u.Text,{p:{l:"0.5rem",t:"0.25rem"},m:{b:"2rem"},children:JSON.stringify({person:r},null,2)}),Object(a.jsx)(u.Div,{d:"flex",justify:"flex-end",children:Object(a.jsx)(u.Button,{onClick:n,bg:"gray200",textColor:"medium",m:{r:"1rem"},children:"Close"})})]})},T=function(e){var t=e.person,n=Object(o.useState)(!1),r=Object(c.a)(n,2),s=r[0],l=r[1],i=function(){l(!s)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.Button,{bg:"info700",hoverBg:"info600",m:{r:"0.5rem"},onClick:i,children:"Details"}),Object(a.jsx)(F,{isOpen:s,onClose:i,person:t})]})},E=function(e){var t=e.isOpen,n=e.onClose,r=e.onSubmit,s=e.person;return Object(a.jsxs)(u.Modal,{isOpen:t,onClose:n,align:"center",rounded:"md",children:[Object(a.jsx)(u.Icon,{name:"Cross",pos:"absolute",top:"1rem",right:"1rem",size:"16px",onClick:n,cursor:"pointer"}),Object(a.jsxs)(u.Div,{d:"flex",m:{b:"4rem"},children:[Object(a.jsx)(u.Icon,{name:"AlertSolid",color:"warning700",m:{t:"0.35rem",r:"0.5rem"}}),Object(a.jsxs)(u.Text,{p:{l:"0.5rem",t:"0.25rem"},textSize:"subheader",children:["Are you sure you want to permanently delete ",s,"?"]})]}),Object(a.jsxs)(u.Div,{d:"flex",justify:"flex-end",children:[Object(a.jsx)(u.Button,{onClick:n,bg:"gray200",textColor:"medium",m:{r:"1rem"},children:"Cancel"}),Object(a.jsx)(u.Button,{onClick:r,bg:"info700",children:"Yes, Delete"})]})]})},U=function(e){var t=e.id,n=e.setPersons,r=e.persons,s=e.person,l=Object(o.useState)(!1),i=Object(c.a)(l,2),j=i[0],b=i[1],d=function(){b(!j)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.Button,{bg:"info700",hoverBg:"info600",m:{b:"1rem"},onClick:d,children:"Delete"}),Object(a.jsx)(E,{isOpen:j,onClose:d,onSubmit:function(){b(!j),D(t),n(r.filter((function(e){return e.id!==t})))},person:s})]})},P=function(e){var t=e.person,n=e.persons,r=e.setPersons,s=Object(a.jsxs)(u.Div,{p:{x:"1rem",y:"0.5rem"},onClick:function(e){b(!j),console.log(e.target.getAttribute("value"));var s={name:t.name,status:t.status,reason:t.reason,group:t.group,excuse:t.excuse,role:e.target.getAttribute("value")},c=n.filter((function(e){return e.name.toLowerCase().includes(s.name.toLowerCase())}));if(console.log(c),e.target.getAttribute("value"))return R(c[0].id,s).then((function(e){r(n.map((function(t){return t.id!==c[0].id?t:e})))}))},children:[Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"hq",children:"Coy HQ"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"sevenspec",children:"7th Mono Spec"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"ic2",children:"IC2 Opr"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"is",children:"IS Opr"})]}),l=Object(o.useState)(!1),i=Object(c.a)(l,2),j=i[0],b=i[1];return Object(a.jsx)(u.Dropdown,{w:"fit-content",isOpen:j,onClick:function(){b(!j)},menu:s,children:"ROLE"})},L=function(e){var t=e.person,n=e.persons,r=e.setPersons,s=Object(a.jsxs)(u.Div,{p:{x:"1rem",y:"0.5rem"},onClick:function(e){b(!j),console.log(e.target.getAttribute("value"));var s={name:t.name,status:t.status,reason:t.reason,group:e.target.getAttribute("value"),excuse:t.excuse,role:t.role},c=n.filter((function(e){return e.name.toLowerCase().includes(s.name.toLowerCase())}));if(console.log(c),e.target.getAttribute("value"))return R(c[0].id,s).then((function(e){r(n.map((function(t){return t.id!==c[0].id?t:e})))}))},children:[Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"hq",children:"HQ"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"ccp",children:"FG1 - CCP"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"csp",children:"FG2 - CSP"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"others",children:"Others"})]}),l=Object(o.useState)(!1),i=Object(c.a)(l,2),j=i[0],b=i[1];return Object(a.jsx)(u.Dropdown,{w:"fit-content",isOpen:j,onClick:function(){b(!j)},menu:s,children:"GROUP"})},B=function(e){var t=e.person,n=e.persons,r=e.setPersons,s=Object(a.jsxs)(u.Div,{p:{x:"1rem",y:"0.5rem"},onClick:function(e){b(!j);var s=e.target.getAttribute("value"),c="";(c="mc"===s?prompt("Details","MC FROM ".concat(x," TO ").concat(x)):"ma"===s?prompt("Details","MA AT"):"off"===s?prompt("Details","OFF ON ".concat(x)):"leave"===s?prompt("Details","LEAVE ON ".concat(x)):"attached"===s?prompt("Details","ATTACHED OUT TO "):"others"===s||"oncourse"===s?prompt("Details",""):"")&&(c=c.toUpperCase()),console.log(c),console.log(e.target.getAttribute("value"));var o={name:t.name,status:e.target.getAttribute("value"),reason:c,group:t.group,excuse:t.excuse,role:t.role},a=n.filter((function(e){return e.name.toLowerCase().includes(o.name.toLowerCase())}));if(console.log(a),e.target.getAttribute("value"))return R(a[0].id,o).then((function(e){r(n.map((function(t){return t.id!==a[0].id?t:e})))}))},children:[Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"present",children:"Present \u2705"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"mc",children:"MC \ud83d\ude37"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"ma",children:"MA \ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"off",children:"Off \ud83d\udeab"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"oncourse",children:"On Course \ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"leave",children:"Leave \ud83d\udeaa"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"attached",children:"Attached Out \ud83c\udd70"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"others",children:"Others \ud83d\uddd2"}),Object(a.jsx)(u.Anchor,{d:"block",p:{y:"0.25rem"},value:"stayout",children:"Stay Out \ud83c\udfe0"})]}),l=Object(o.useState)(!1),i=Object(c.a)(l,2),j=i[0],b=i[1];return Object(a.jsx)(u.Dropdown,{w:"fit-content",isOpen:j,onClick:function(){b(!j)},menu:s,children:"STATUS"})},G=function(e){var t=e.person,n=e.id,r=e.setPersons,s=e.persons,l=Object(o.useState)(!1),i=Object(c.a)(l,2),j=i[0],b=i[1],d=function(){return b(!j)};return!1===j?Object(a.jsxs)(u.Div,{d:"flex",children:[Object(a.jsx)(u.Button,{color:"warning700",onClick:d,children:"Update"}),Object(a.jsx)(T,{person:t}),Object(a.jsx)(U,{id:n,setPersons:r,persons:s,person:t.name})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(u.Div,{d:"flex",children:[Object(a.jsx)(u.Button,{onClick:d,children:"Hide"}),Object(a.jsx)(T,{person:t}),Object(a.jsx)(U,{id:n,setPersons:r,persons:s,person:t.name})]}),Object(a.jsxs)(u.Div,{d:"flex",children:[Object(a.jsx)(B,{options:j,person:t,persons:s,setPersons:r}),Object(a.jsx)(L,{options:j,person:t,persons:s,setPersons:r}),Object(a.jsx)(P,{options:j,person:t,persons:s,setPersons:r}),Object(a.jsx)(N,{options:j,person:t,persons:s,setPersons:r})]})]})},I=function(e){var t=e.symbol;return Object(a.jsx)("span",{className:"emoji",role:"img",children:t})},M=function(e){var t=e.currentStatus;return"present"===t?Object(a.jsx)(I,{symbol:"\u2705"}):"attached"===t?Object(a.jsx)(I,{symbol:"\ud83c\udd70"}):"others"===t?Object(a.jsx)(I,{symbol:"\ud83d\uddd2"}):"mc"===t?Object(a.jsx)(I,{symbol:"\ud83d\ude37"}):"ma"===t?Object(a.jsx)(I,{symbol:"\ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}):"off"===t?Object(a.jsx)(I,{symbol:"\ud83d\udeab"}):"leave"===t||"leave"===t?Object(a.jsx)(I,{symbol:"\ud83d\udeaa"}):"stayout"===t?Object(a.jsx)(I,{symbol:"\ud83c\udfe0"}):"oncourse"===t?Object(a.jsx)(I,{symbol:"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}):""},H=function(e){var t=e.person;return t.reason&&"nil"!==t.reason?Object(a.jsxs)(a.Fragment,{children:["(",t.reason,")"]}):Object(a.jsx)(a.Fragment,{})},z=function(e){var t=e.setPersons,n=e.persons,r=Object(o.useState)(!1),s=Object(c.a)(r,2),l=s[0],i=s[1],j=function(){return i(!l)};return!1===l?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(u.Div,{d:"flex",children:Object(a.jsx)(u.Button,{suffix:Object(a.jsx)(u.Icon,{name:"Down",size:"16px",color:"white",m:{l:"1rem"}}),bg:"black",hoverBg:"black400",shadow:"3",hoverShadow:"4",m:{r:"1rem"},onClick:j,children:"Edit"})})}):Object(a.jsxs)("div",{children:[Object(a.jsx)(u.Div,{d:"flex",children:Object(a.jsx)(u.Button,{suffix:Object(a.jsx)(u.Icon,{name:"Up",size:"16px",color:"white",m:{l:"1rem"}}),bg:"black",hoverBg:"black400",shadow:"3",hoverShadow:"4",m:{r:"1rem"},onClick:j,children:"Hide"})}),Object(a.jsx)("br",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsxs)("li",{children:[e.name,Object(a.jsx)(M,{currentStatus:e.status}),Object(a.jsx)(H,{person:e}),Object(a.jsx)("br",{}),Object(a.jsx)(G,{person:e,id:e.id,setPersons:t,persons:n})]},e.name)}))})]})},J=n(144),Q=function(e){var t=e.newcdo,n=e.handlecdochange,r=e.newcds,s=e.handlecdschange,c=e.newcos,o=e.handlecoschange,l=e.newas,i=e.handleaschange,u=e.newauthor,j=e.handleauthorchange;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:Object(a.jsx)(J.a,{id:"standard-multiline-flexible",label:"CDO (Rank/Name)",multiline:!0,maxRows:4,value:t,onChange:n})}),Object(a.jsx)("div",{children:Object(a.jsx)(J.a,{id:"standard-multiline-flexible",label:"CDS (Rank/Name)",multiline:!0,maxRows:4,value:r,onChange:s})}),Object(a.jsx)("div",{children:Object(a.jsx)(J.a,{id:"standard-multiline-flexible",label:"COS (Rank/Name)",multiline:!0,maxRows:4,value:c,onChange:o})}),Object(a.jsx)("div",{children:Object(a.jsx)(J.a,{id:"standard-multiline-flexible",label:"A/S (Rank/Name)",multiline:!0,maxRows:4,value:l,onChange:i})}),Object(a.jsx)("div",{children:Object(a.jsx)(J.a,{id:"standard-multiline-flexible",label:"Done By: (Rank/Name)",multiline:!0,maxRows:4,value:u,onChange:j})})]})},q=new Date,Y=q.getHours(),V=q.getMinutes();Y<10&&(Y="0".concat(Y)),V<10&&(V="0".concat(V));var W="".concat(Y).concat(V),K="";K=W<1200&&W>="0000"?"morning":W>1600?"evening":"afternoon";var X=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("p",{children:["Good ",K," Commanders, this is the strength for Signal Company as of ",W," on ",x,"."]})})},Z={padding:0,margin:0},$=function(e){var t=e.persons,n=0;t.map((function(e){return"mc"===e.status?n+=1:n}));var r=0;t.map((function(e){return"ma"===e.status?r+=1:r}));var s=0;t.map((function(e){return"off"===e.status?s+=1:s}));var c=0;t.map((function(e){return"oncourse"===e.status?c+=1:c}));var o=0;t.map((function(e){return"leave"===e.status?o+=1:o}));var l=0;t.map((function(e){return"attached"===e.status?l+=1:l}));var i=0;t.map((function(e){return"others"===e.status?i+=1:i}));var u=0;t.map((function(e){return"stayout"===e.status?u+=1:u}));var j=n+r+s+o+l+i+u+c;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:Z,children:["Absentees: ",j]}),Object(a.jsxs)("p",{style:Z,children:[" - ",Object(a.jsx)(M,{currentStatus:"mc"})," MC: ",n," "]}),Object(a.jsxs)("p",{style:Z,children:["- ",Object(a.jsx)(M,{currentStatus:"ma"})," MA: ",r," "]}),Object(a.jsxs)("p",{style:Z,children:["- ",Object(a.jsx)(M,{currentStatus:"off"})," OFF: ",s," "]}),Object(a.jsxs)("p",{style:Z,children:["- ",Object(a.jsx)(M,{currentStatus:"oncourse"})," ON COURSE: ",c," "]}),Object(a.jsxs)("p",{style:Z,children:["- ",Object(a.jsx)(M,{currentStatus:"leave"})," LEAVE: ",o," "]}),Object(a.jsxs)("p",{style:Z,children:["- ",Object(a.jsx)(M,{currentStatus:"attached"})," ATTACHED OUT: ",l," "]}),Object(a.jsxs)("p",{style:Z,children:["- ",Object(a.jsx)(M,{currentStatus:"others"})," OTHERS: ",i," "]}),Object(a.jsxs)("p",{style:Z,children:["- ",Object(a.jsx)(M,{currentStatus:"stayout"})," STAY OUT: ",u," "]}),Object(a.jsx)("br",{})]})},_={padding:0,margin:0},ee=function(e){var t=e.persons,n=t.filter((function(e){return"hq"===e.role})),r=0;n.map((function(e){return"present"===e.status?r+=1:r}));var s=n.length,c=t.filter((function(e){return"sevenspec"===e.role})),o=0;c.map((function(e){return"present"===e.status?o+=1:o}));var l=c.length,i=t.filter((function(e){return"ic2"===e.role})),u=0;i.map((function(e){return"present"===e.status?u+=1:u}));var j=i.length,b=t.filter((function(e){return"is"===e.role})),d=0;b.map((function(e){return"present"===e.status?d+=1:d}));var p=b.length;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:_,children:[" -Coy HQ: ",r,"/",s," "]}),Object(a.jsxs)("p",{style:_,children:[" -7th Mono Spec: ",o,"/",l," "]}),Object(a.jsxs)("p",{style:_,children:[" -IC2 Opr: ",u,"/",j," "]}),Object(a.jsxs)("p",{style:_,children:[" -IS Opr: ",d,"/",p," "]}),Object(a.jsx)("br",{})]})},te={padding:0,margin:0},ne=function(e){var t=e.persons,n=e.newcdo,r=e.newcds,s=e.newcos,c=e.newas,o=0;t.map((function(e){return"present"===e.status?o+=1:o}));var l=t.length;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:te,children:["CDO: ",n.toUpperCase()]}),Object(a.jsxs)("p",{style:te,children:["CDS: ",r.toUpperCase()]}),Object(a.jsxs)("p",{style:te,children:["COS: ",s.toUpperCase()]}),Object(a.jsxs)("p",{style:te,children:["ARMSKOTE: ",c.toUpperCase()]}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{style:te,children:["Total Strength: ",l]}),Object(a.jsxs)("p",{style:te,children:["Present Strength: ",o]}),Object(a.jsx)("br",{}),Object(a.jsx)(ee,{persons:t}),Object(a.jsx)($,{persons:t})]})},re={padding:0,margin:0},se=function(e){var t=e.persons.filter((function(e){return"hq"===String(e.group).toLowerCase()}));console.log("List of HQ personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var r=t.length;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:re,children:["HQ: ",n,"/",r]}),t.map((function(e,t){return Object(a.jsxs)("p",{style:re,children:[t+1,"."," "+e.name,Object(a.jsx)(M,{currentStatus:e.status}),Object(a.jsx)(H,{person:e})]},e.name)}))]})},ce={padding:0,margin:0},oe=function(e){var t=e.persons.filter((function(e){return"ccp"===String(e.group).toLowerCase()}));console.log("List of CCP personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var r=t.length;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:ce,children:["FG1 - CCP: ",n,"/",r]}),t.map((function(e,t){return Object(a.jsxs)("p",{style:ce,children:[t+1,"."," "+e.name,Object(a.jsx)(M,{currentStatus:e.status}),Object(a.jsx)(H,{person:e})]},e.name)}))]})},ae={padding:0,margin:0},le=function(e){var t=e.persons.filter((function(e){return"csp"===String(e.group).toLowerCase()}));console.log("List of CSP personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var r=t.length;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:ae,children:["FG2 - CSP: ",n,"/",r]}),t.map((function(e,t){return Object(a.jsxs)("p",{style:ae,children:[t+1,"."," "+e.name,Object(a.jsx)(M,{currentStatus:e.status}),Object(a.jsx)(H,{person:e})]},e.name)}))]})},ie={padding:0,margin:0},ue=function(e){var t=e.person;return t.excuse?Object(a.jsxs)(a.Fragment,{children:["(",t.excuse,")"]}):Object(a.jsx)(a.Fragment,{})},je=function(e){var t=e.persons.filter((function(e){return e.excuse&&"nil"!==e.excuse}));console.log("List of personnel with excuses: ".concat(JSON.stringify(t)));var n=t.length;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{style:ie,children:["STATUSES: ",n]}),t.map((function(e,t){return Object(a.jsxs)("p",{style:ie,children:[t+1,"."," "+e.name+" ",Object(a.jsx)(ue,{person:e})]},e.name)}))]})},be={padding:0,margin:0},de=function(e){var t=e.newauthor;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{style:be,children:"Done by:"}),t.toUpperCase()]})},pe=function(e){var t=e.persons,n=e.newauthor;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(se,{persons:t}),Object(a.jsx)("br",{}),Object(a.jsx)(oe,{persons:t}),Object(a.jsx)("br",{}),Object(a.jsx)(le,{persons:t}),Object(a.jsx)("br",{}),Object(a.jsx)(je,{persons:t}),Object(a.jsx)("br",{}),Object(a.jsx)(de,{newauthor:n})]})},Oe=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(o.useState)(""),l=Object(c.a)(s,2),u=l[0],j=l[1],b=Object(o.useState)(""),d=Object(c.a)(b,2),p=d[0],O=d[1],h=Object(o.useState)(""),x=Object(c.a)(h,2),m=x[0],f=x[1],g=Object(o.useState)(""),v=Object(c.a)(g,2),C=v[0],y=v[1],S=Object(o.useState)(""),D=Object(c.a)(S,2),N=D[0],F=D[1],T=Object(o.useState)(""),E=Object(c.a)(T,2),U=E[0],P=E[1],L=Object(o.useState)(""),B=Object(c.a)(L,2),G=B[0],I=B[1],M=Object(o.useState)(""),H=Object(c.a)(M,2),J=H[0],q=H[1],Y=Object(o.useState)(""),V=Object(c.a)(Y,2),W=V[0],K=V[1],Z=Object(o.useState)(""),$=Object(c.a)(Z,2),_=$[0],ee=$[1],te=Object(o.useState)(""),re=Object(c.a)(te,2),se=re[0],ce=re[1],oe=Object(o.useState)(null),ae=Object(c.a)(oe,2),le=ae[0],ie=ae[1];Object(o.useEffect)((function(){A().then((function(e){r(e)}))}),[]);var ue=function(e){console.log("Done by: ".concat(e.target.value)),ce(e.target.value)};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Parade State Application (For Internal Use Only)"}),Object(a.jsx)(i,{message:le}),Object(a.jsx)(w,{addName:function(e){e.preventDefault();var t={name:u.trim().toUpperCase(),status:p.toLowerCase(),reason:m||"nil",group:C.toUpperCase(),excuse:N?N.trim:"nil",role:U},s=n.filter((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())}));if(console.log(s),u.trim()&&p.trim()&&C.trim()&&U.trim())if(s.length>0){if(window.confirm("".concat(u.toUpperCase()," is already added to phonebook. Would you like to update the status?")))return R(s[0].id,t).then((function(e){r(n.map((function(t){return t.id!==s[0].id?t:e}))),ie("".concat(u.toUpperCase()," has been updated")),setTimeout((function(){return ie(null)}),5e3)})).catch((function(e){ie("".concat(u.toUpperCase()," has been already been removed from the server")),setTimeout((function(){return ie(null)}),5e3)}))}else k(t).then((function(e){r(n.concat(e)),ie("".concat(u.toUpperCase()," has been added")),setTimeout((function(){return ie(null)}),5e3)})).catch((function(e){ie("".concat(u.toUpperCase()," has already been added to the server")),setTimeout((function(){return ie(null)}),5e3)}));else alert("All fields (besides medical excuses) must be filled");O(""),j(""),f(""),y(""),F(""),P("")},newName:u,setNewName:j,newStatus:p,setnewStatus:O,newGroup:C,setnewGroup:y,newexcuse:N,setnewExcuse:F,newRole:U,setnewRole:P,setnewReason:f}),Object(a.jsx)(z,{setPersons:r,persons:n}),Object(a.jsx)("h2",{children:"Settings"}),Object(a.jsx)(Q,{newcdo:G,handlecdochange:function(e){console.log("CDO: ".concat(e.target.value)),I(e.target.value)},newcds:J,handlecdschange:function(e){console.log("CDS: ".concat(e.target.value)),q(e.target.value)},newcos:W,handlecoschange:function(e){console.log("COS: ".concat(e.target.value)),K(e.target.value)},newas:_,handleaschange:function(e){console.log("Armskote: ".concat(e.target.value)),ee(e.target.value)},newauthor:se,handleauthorchange:ue}),Object(a.jsx)("h2",{children:"Parade State"}),Object(a.jsx)(X,{}),Object(a.jsx)(ne,{persons:n,newcdo:G,newcds:J,newcos:W,newas:_,newauthor:se,handleauthorchange:ue}),Object(a.jsx)(pe,{setPersons:r,persons:n,newauthor:se})]})},he=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),n=t[0],r=t[1];return n?Object(a.jsx)(Oe,{}):Object(a.jsx)(l,{access:n,setnewaccess:r})},xe=n(13),me=new(n(55).a);s.a.render(Object(a.jsx)(xe.Provider,{value:me,debug:undefined,debugAfterHydration:!0,children:Object(a.jsxs)(u.ThemeProvider,{theme:{colors:{brand100:"#F9F8FC",brand200:"#F3F1FA",brand300:"#E9E6F6",brand400:"#D2CCEC",brand500:"#BCB3E2",brand600:"#9C8FD6",brand700:"#6F5CC3",brand800:"#553EB5",brand900:"#382683"},grid:{containerWidth:"100%"}},children:[Object(a.jsx)(u.StyleReset,{}),Object(a.jsx)(he,{})]})}),document.getElementById("root"))},64:function(e,t,n){},65:function(e,t,n){}},[[118,1,2]]]);
//# sourceMappingURL=main.bb375272.chunk.js.map