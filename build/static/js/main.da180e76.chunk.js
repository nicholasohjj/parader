(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var s=n(14),c=n.n(s),r=n(3),a=n(1),o=n(0),u=function(e){var t=e.text,n=e.value,s=e.onChange;return Object(o.jsxs)("div",{children:[t,":",Object(o.jsx)("input",{value:n,onChange:s})]})},i=function(e){var t=e.addName,n=e.newName,s=e.handleNameChange,c=e.newStatus,r=e.handleStatusChange;return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:t,children:[Object(o.jsx)(u,{text:"Rank/Name ",value:n,onChange:s}),Object(o.jsx)(u,{text:"Status (PRESENT/MC/MA/OFF/LEAVE/ATTACHED/OTHERS/STAYOUT) ",value:c.toLowerCase(),onChange:r}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})})},j=n(4),l=n.n(j),b="/api/persons",d=function(){return l.a.get(b).then((function(e){return e.data}))},h=function(e){return l.a.post(b,e).then((function(e){return e.data}))},O=function(e){return l.a.delete("".concat(b,"/").concat(e))},x=function(e,t){return l.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},m=function(e){var t=e.options,n=e.person,s=e.persons;e.setPersons;return t?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{value:"present",onClick:function(e){var t={name:n,status:e.target.value},c=s.filter((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())}));console.log(c)},children:"\u2705"}),Object(o.jsx)("button",{value:"mc",onClick:!0,children:"\ud83d\ude37"}),Object(o.jsx)("button",{value:"ma",onClick:!0,children:"\ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}),Object(o.jsx)("button",{value:"off",onClick:!0,children:"\ud83d\udeab"}),Object(o.jsx)("button",{value:"leave",onClick:!0,children:"\ud83d\udeaa"}),Object(o.jsx)("button",{value:"attached",onClick:!0,children:"\ud83c\udd70"}),Object(o.jsx)("button",{value:"others",onClick:!0,children:"\ud83d\uddd2"}),Object(o.jsx)("button",{value:"stayout",onClick:!0,children:"\ud83c\udfe0"})]}):Object(o.jsx)(o.Fragment,{})},f=function(e){var t=e.person,n=e.id,s=e.setPersons,c=e.persons,u=Object(a.useState)(!1),i=Object(r.a)(u,2),j=i[0],l=i[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:function(){window.confirm("Do you want to delete ".concat(t.name))&&(O(n),s(c.filter((function(e){return e.id!==n}))))},children:"Delete"}),Object(o.jsx)("button",{onClick:function(){return l(!j)},children:"Update"}),Object(o.jsx)("br",{}),Object(o.jsx)(m,{options:j,person:t.name,persons:c,setPersons:s})]})},p=function(e){var t=e.symbol;return Object(o.jsx)("span",{className:"emoji",role:"img",children:t})},v=function(e){var t=e.currentStatus;return"present"===t?Object(o.jsx)(p,{symbol:"\u2705"}):"attached"===t?Object(o.jsx)(p,{symbol:"\ud83c\udd70"}):"others"===t?Object(o.jsx)(p,{symbol:"\ud83d\uddd2"}):"mc"===t?Object(o.jsx)(p,{symbol:"\ud83d\ude37"}):"ma"===t?Object(o.jsx)(p,{symbol:"\ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}):"off"===t?Object(o.jsx)(p,{symbol:"\ud83d\udeab"}):"leave"===t||"leave"===t?Object(o.jsx)(p,{symbol:"\ud83d\udeaa"}):"stayout"===t?Object(o.jsx)(p,{symbol:"\ud83c\udfe0"}):""},g=function(e){var t=e.setPersons,n=e.persons;return Object(o.jsx)("div",{children:Object(o.jsx)("ul",{children:n.map((function(e){return Object(o.jsxs)("li",{children:[e.name,Object(o.jsx)(v,{currentStatus:e.status}),Object(o.jsx)(f,{person:e,id:e.id,setPersons:t,persons:n})]},e.name)}))})})},S=function(e){var t=e.message;return null===t?null:Object(o.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t})},C=new Date,y=C.getDate(),w=C.getMonth()+1,k=C.getFullYear().toString().substr(-2),T=C.getHours(),P=C.getMinutes();y<10&&(y="0".concat(y)),w<10&&(w="0".concat(w)),T<10&&(T="0".concat(T)),P<10&&(P="0".concat(P));var A="".concat(w).concat(y).concat(k),E="".concat(T).concat(P),N="";N=E<1200&&E>="0000"?"morning":E>1600?"evening":"afternoon";var F=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("p",{children:["Good ",N," Commanders , this is the strength for Signal Company as of ",E," on ",A,"."]})})},L=function(e){e.setPersons;var t=e.persons,n=0;t.map((function(e){return"mc"===e.status?n+=1:n}));var s=0;t.map((function(e){return"ma"===e.status?s+=1:s}));var c=0;t.map((function(e){return"off"===e.status?c+=1:c}));var r=0;t.map((function(e){return"leave"===e.status?r+=1:r}));var a=0;t.map((function(e){return"attached"===e.status?a+=1:a}));var u=0;t.map((function(e){return"others"===e.status?u+=1:u}));var i=0;t.map((function(e){return"stayout"===e.status?i+=1:i}));var j=n+s+c+r+a+u+i;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["Absentees: ",j]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsxs)("p",{children:["- ",Object(o.jsx)(v,{currentStatus:"mc"})," MC: ",n," "]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("p",{children:["- ",Object(o.jsx)(v,{currentStatus:"ma"})," MA: ",s," "]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("p",{children:["- ",Object(o.jsx)(v,{currentStatus:"off"})," OFF: ",c," "]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("p",{children:["- ",Object(o.jsx)(v,{currentStatus:"leave"})," LEAVE: ",r," "]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("p",{children:["- ",Object(o.jsx)(v,{currentStatus:"attached"})," ATTACHED OUT: ",a," "]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("p",{children:["- ",Object(o.jsx)(v,{currentStatus:"others"})," OTHERS: ",u," "]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("p",{children:["- ",Object(o.jsx)(v,{currentStatus:"stayout"})," STAY OUT: ",i," "]})})]})]})},D=function(e){e.setPersons;var t=e.persons,n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var s=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["HQ ",n,"/",s]}),Object(o.jsx)("ol",{children:t.map((function(e){return Object(o.jsxs)("li",{children:[e.name,Object(o.jsx)(v,{currentStatus:e.status})]},e.name)}))})]})},H=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),u=Object(r.a)(c,2),j=u[0],l=u[1],b=Object(a.useState)(""),O=Object(r.a)(b,2),m=O[0],f=O[1],p=Object(a.useState)(null),v=Object(r.a)(p,2),C=v[0],y=v[1];Object(a.useEffect)((function(){d().then((function(e){s(e)}))}),[]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Parade State Application"}),Object(o.jsx)(S,{message:C}),Object(o.jsx)("h2",{children:"Add a new"}),Object(o.jsx)(i,{addName:function(e){e.preventDefault();var t={name:j.trim().toUpperCase(),status:m.toLowerCase()},c=n.filter((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())}));if(console.log(c),j.trim()&&m.trim())if(c.length>0){if(window.confirm("".concat(j," is already added to phonebook. Would you like to update the status?")))return x(c[0].id,t).then((function(e){s(n.map((function(t){return t.id!==c[0].id?t:e}))),y("".concat(j," has been updated")),setTimeout((function(){return y(null)}),5e3)})).catch((function(e){y("".concat(j," has been already been removed from the server")),setTimeout((function(){return y(null)}),5e3)}))}else h(t).then((function(e){s(n.concat(e)),y("".concat(j," has been added")),setTimeout((function(){return y(null)}),5e3)})).catch((function(e){y("".concat(j," has been already been added to the server")),setTimeout((function(){return y(null)}),5e3)}));else alert("Name/status must be filled");f(""),l("")},newName:j,handleNameChange:function(e){console.log(e.target.value),l(e.target.value)},newStatus:m,handleStatusChange:function(e){console.log(e.target.value),f(e.target.value)}}),Object(o.jsx)("h2",{children:"List of Personnel"}),Object(o.jsx)(g,{setPersons:s,persons:n}),Object(o.jsx)("h2",{children:"Parade State"}),Object(o.jsx)(F,{}),Object(o.jsx)(L,{setPersons:s,persons:n}),Object(o.jsx)(D,{setPersons:s,persons:n})]})};c.a.render(Object(o.jsx)(H,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.da180e76.chunk.js.map