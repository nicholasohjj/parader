(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var s=n(14),r=n.n(s),c=n(4),a=n(1),o=n(0),u=function(e){var t=e.text,n=e.value,s=e.onChange;return Object(o.jsxs)("div",{children:[t,":",Object(o.jsx)("input",{value:n,onChange:s})]})},i=function(e){var t=e.addName,n=e.newName,s=e.handleNameChange,r=e.newStatus,c=e.handleStatusChange;return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:t,children:[Object(o.jsx)(u,{text:"Rank/Name ",value:n,onChange:s}),Object(o.jsx)(u,{text:"Status (PRESENT/MC/MA/OFF/LEAVE/ATTACHED/OTHERS/STAYOUT) ",value:r.toLowerCase(),onChange:c}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})})},j=n(3),l=n.n(j),d="/api/persons",b=function(){return l.a.get(d).then((function(e){return e.data}))},h=function(e){return l.a.post(d,e).then((function(e){return e.data}))},O=function(e){return l.a.delete("".concat(d,"/").concat(e))},f=function(e,t){return l.a.put("".concat(d,"/").concat(e),t).then((function(e){return e.data}))},m=function(e){var t=e.person,n=e.id,s=e.setPersons,r=e.persons;return Object(o.jsx)("button",{onClick:function(){window.confirm("Do you want to delete ".concat(t.name))&&(O(n),s(r.filter((function(e){return e.id!==n}))))},children:"Delete"})},x=function(e){var t=e.symbol;return Object(o.jsx)("span",{className:"emoji",role:"img",children:t})},p=function(e){var t=e.currentStatus;return"present"===t?Object(o.jsx)(x,{symbol:"\u2705"}):"attached"===t?Object(o.jsx)(x,{symbol:"\ud83c\udd70"}):"others"===t?Object(o.jsx)(x,{symbol:"\ud83d\uddd2"}):"mc"===t?Object(o.jsx)(x,{symbol:"\ud83d\ude37"}):"ma"===t?Object(o.jsx)(x,{symbol:"\ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}):"off"===t?Object(o.jsx)(x,{symbol:"\ud83d\udeab"}):"leave"===t||"leave"===t?Object(o.jsx)(x,{symbol:"\ud83d\udeaa"}):"stayout"===t?Object(o.jsx)(x,{symbol:"\ud83c\udfe0"}):void 0},v=function(e){var t=e.setPersons,n=e.persons;return Object(o.jsx)("div",{children:Object(o.jsx)("ul",{children:n.map((function(e){return Object(o.jsxs)("li",{children:[e.name,Object(o.jsx)(p,{currentStatus:e.status}),Object(o.jsx)(m,{person:e,id:e.id,setPersons:t,persons:n})]},e.name)}))})})},g=function(e){var t=e.message;return null===t?null:Object(o.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t})},S=new Date,y=S.getDate(),C=S.getMonth()+1,w=S.getFullYear().toString().substr(-2),P=S.getHours(),E=S.getMinutes();y<10&&(y="0".concat(y)),C<10&&(C="0".concat(C)),P<10&&(P="0".concat(P)),E<10&&(E="0".concat(E));var T="".concat(C).concat(y).concat(w),A="".concat(P).concat(E),N="";N=A<1200&&A>="0000"?"morning":A>1600?"evening":"afternoon";var k=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("p",{children:["Good ",N," Commanders , this is the strength for Signal Company as of ",A," on ",T,"."]})})},L=function(e){e.setPersons;var t=e.persons,n=0;t.map((function(e){return"mc"===e.status?n+=1:n}));var s=0;t.map((function(e){return"ma"===e.status?s+=1:s}));var r=0;t.map((function(e){return"off"===e.status?r+=1:r}));var c=0;t.map((function(e){return"leave"===e.status?c+=1:c}));var a=0;t.map((function(e){return"attached"===e.status?a+=1:a}));var u=0;t.map((function(e){return"others"===e.status?u+=1:u}));var i=0;t.map((function(e){return"stayout"===e.status?i+=1:i}));var j=n+s+r+c+a+u+i;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["Absentees: ",j]}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)(p,{currentStatus:"mc"})," ",Object(o.jsxs)("p",{children:["MC: ",n," "]})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(p,{currentStatus:"ma"})," ",Object(o.jsxs)("p",{children:["MA: ",s," "]})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(p,{currentStatus:"off"})," ",Object(o.jsxs)("p",{children:["OFF: ",r," "]})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(p,{currentStatus:"leave"})," ",Object(o.jsxs)("p",{children:["LEAVE: ",c," "]})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)(p,{currentStatus:"others"})," ",Object(o.jsxs)("p",{children:["OTHERS: ",u," "]})]})]})]})},D=function(e){e.setPersons;var t=e.persons,n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var s=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["HQ ",n,"/",s]}),Object(o.jsx)("ol",{children:t.map((function(e){return Object(o.jsxs)("li",{children:[e.name,Object(o.jsx)(p,{currentStatus:e.status})]},e.name)}))})]})},F=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),u=Object(c.a)(r,2),j=u[0],l=u[1],d=Object(a.useState)(""),O=Object(c.a)(d,2),m=O[0],x=O[1],p=Object(a.useState)(null),S=Object(c.a)(p,2),y=S[0],C=S[1];Object(a.useEffect)((function(){b().then((function(e){s(e)}))}),[]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Parade State Application"}),Object(o.jsx)(g,{message:y}),Object(o.jsx)("h2",{children:"Add a new"}),Object(o.jsx)(i,{addName:function(e){e.preventDefault();var t={name:j.trim().toUpperCase(),status:m.toLowerCase()},r=n.filter((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())}));if(console.log(r),j.trim()&&m.trim())if(r.length>0){if(window.confirm("".concat(j," is already added to phonebook. Would you like to update the status?")))return f(r[0].id,t).then((function(e){s(n.map((function(t){return t.id!==r[0].id?t:e}))),C("".concat(j," has been updated")),setTimeout((function(){return C(null)}),5e3)})).catch((function(e){C("".concat(j," has been already been removed from the server")),setTimeout((function(){return C(null)}),5e3)}))}else h(t).then((function(e){s(n.concat(e)),C("".concat(j," has been added")),setTimeout((function(){return C(null)}),5e3)})).catch((function(e){C("".concat(j," has been already been added to the server")),setTimeout((function(){return C(null)}),5e3)}));else alert("Name/status must be filled");x(""),l("")},newName:j,handleNameChange:function(e){console.log(e.target.value),l(e.target.value)},newStatus:m,handleStatusChange:function(e){console.log(e.target.value),x(e.target.value)}}),Object(o.jsx)("h2",{children:"List of Personnel"}),Object(o.jsx)(v,{setPersons:s,persons:n}),Object(o.jsx)("h2",{children:"Parade State"}),Object(o.jsx)(k,{}),Object(o.jsx)(L,{setPersons:s,persons:n}),Object(o.jsx)(D,{setPersons:s,persons:n})]})};r.a.render(Object(o.jsx)(F,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.8be2deb3.chunk.js.map