(this.webpackJsonpfeeble=this.webpackJsonpfeeble||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),l=s(17),a=s.n(l),o=(s(38),s(2)),r=(s(39),s(10)),i=s.p+"static/media/waveLarge.cbd53cbe.png",d=s(0);var j=function(){return Object(d.jsx)("img",{className:"fixed bottom-0 z-0 md:h-28 md:w-full lg:h-40 lg:w-full",src:i,alt:"graphic element wave form"})};var b=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),s=t[0],c=t[1],l=function(){c(!s),console.log("ckliicking throygh")};return[Object(d.jsx)("div",{className:"z-50 absolute inset-y-0 left-0 block",children:Object(d.jsx)("svg",{onClick:l,xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),Object(d.jsxs)("div",{className:" ".concat(s?"":"hidden"," bg-pink-300 flex h-screen w-screen z-40 absolute inset-y-0 left-0 "),children:[Object(d.jsx)("nav",{className:"m-auto text-3xl text-center",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)(r.b,{to:"/Session",children:Object(d.jsx)("li",{onClick:l,children:"Home"})}),Object(d.jsx)(r.b,{to:"/Myprofile",children:Object(d.jsx)("li",{onClick:l,children:"My Profile"})}),Object(d.jsx)(r.b,{to:"/CreateSession",children:Object(d.jsx)("li",{onClick:l,children:"Create"})}),Object(d.jsx)("li",{onClick:l,children:"Logout"})]})}),Object(d.jsx)(j,{})]})]},m=s(14),x=s.n(m),h=s(18),u=s(19),f=s(20),O=s(22),g=s(21),p=s(51),v=s(55),y=s(52),w=s(53),N=s(31);var S=function(e){var t=Object(n.useState)([51.505,-.09]),s=Object(o.a)(t,2),c=s[0],l=s[1],a=Object(n.useState)(!1),r=Object(o.a)(a,2),i=r[0],j=r[1],b=new N.a;function m(){return(m=Object(h.a)(x.a.mark((function e(t){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.search({query:'"'.concat(t,'"')});case 2:s=e.sent,l([s[0].y,s[0].x]),j(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){m.apply(this,arguments)}(e.address.street)}),[]),Object(d.jsx)("div",{className:"",children:i?Object(d.jsxs)(p.a,{center:c,zoom:13,scrollWheelZoom:!0,children:[Object(d.jsx)(v.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(d.jsx)(y.a,{position:c,children:Object(d.jsxs)(w.a,{children:["A pretty CSS3 popup. ",Object(d.jsx)("br",{})," Easily customizable."]})})]}):Object(d.jsx)("div",{children:"Something went wrong"})})};var k=function(e){console.log(e.info,"modal");var t=Object(n.useState)(e.info.users),s=Object(o.a)(t,2),c=s[0],l=s[1];return Object(d.jsxs)("div",{className:"p-5 m-5 bg-gray-50 bg-opacity-50 rounded-lg flex flex-col md:flex-row ",children:[Object(d.jsx)(S,{address:e.info}),Object(d.jsxs)("div",{className:"ml-5",children:[Object(d.jsx)("h1",{children:e.info.city}),Object(d.jsx)("h1",{children:e.info.street}),Object(d.jsx)("h1",{children:e.info.date}),Object(d.jsxs)("div",{className:"flex flex-row ",children:[Object(d.jsx)("p",{className:"font-medium",children:"Participants:"}),Object(d.jsx)("ul",{className:"flex flex-row flex-wrap",children:c.map((function(e,t){return Object(d.jsxs)("li",{className:"flex  flex-row font-normal ml-3",children:[Object(d.jsx)("img",{className:"rounded-full  m-2 h-8 w-8 flex items-center justify-center border-black border-2 filter drop-shadow-xl",src:"https://github.com/"+e+".png",alt:"profile"}),e]},t)}))})]}),Object(d.jsx)("button",{className:" mt-5 w-28 border rounded-xl bg-gray-200 shadow-xl font-medium",onClick:function(){var t=localStorage.getItem("user"),s={userName:t,sessionId:e.info.sessionId};console.log(t),fetch("http://localhost:5000/session/check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){console.log("front",e),l(e.participants)}))},children:"Join"})]})]})};var C=function(e){var t=Object(n.useState)(!1),s=Object(o.a)(t,2),c=s[0],l=s[1];function a(){l(!c)}if(console.log(e),!1===e.filterSwitch)return Object(d.jsx)("div",{className:"lg:grid lg:grid-cols-3 lg:gap-3 lg:m-10",children:e.info.map((function(e,t){return Object(d.jsx)(r.b,{to:{pathname:"open/"+t,state:{item:e}},children:Object(d.jsxs)("div",{onClick:a,id:"sessionCards",className:"p-5 m-5 bg-gray-50 bg-opacity-50 rounded-md shadow-xl font-sans text-lg font-medium lg:m-0 lg:w-full",children:[Object(d.jsxs)("p",{children:["Host: ",e.userName]}),Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{children:"Street:"}),Object(d.jsx)("p",{className:"font-normal ml-3",children:e.street})]}),Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{children:"City:"}),Object(d.jsxs)("p",{className:"font-normal ml-3",children:[" ",e.city]})]}),Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{children:"When:"}),Object(d.jsxs)("p",{className:"font-normal ml-3",children:[" ",e.date]})]})]},t)})}))});var i=localStorage.getItem("user"),j=e.info.filter((function(e){return e.users.indexOf(i)>=0}));return console.log(j),Object(d.jsx)("div",{className:"lg:grid lg:grid-cols-3 lg:gap-3 lg:m-10",children:j.map((function(e,t){return Object(d.jsx)(r.b,{to:{pathname:"open/"+t,state:{item:e}},children:Object(d.jsxs)("div",{onClick:a,className:"p-5 m-5 bg-gray-50 bg-opacity-50 rounded-md shadow-xl font-sans text-lg font-medium lg:m-0 lg:w-full",children:[Object(d.jsxs)("p",{children:["Host: ",e.userName]}),Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{children:"Street:"}),Object(d.jsx)("p",{className:"font-normal ml-3",children:e.street})]}),Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{children:"City:"}),Object(d.jsxs)("p",{className:"font-normal ml-3",children:[" ",e.city]})]}),Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{children:"When:"}),Object(d.jsxs)("p",{className:"font-normal ml-3",children:[" ",e.date]})]})]},t)})}))})},I=function(e){Object(O.a)(s,e);var t=Object(g.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={loading:!0,sessions:null,filterSwitch:!1},e}return Object(f.a)(s,[{key:"componentDidMount",value:function(){var e=Object(h.a)(x.a.mark((function e(){var t,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:5000/session",e.next=3,fetch("http://localhost:5000/session");case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,this.setState({sessions:s,loading:!1}),console.log(s);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"filterSwitch",value:function(){!1===this.state.filterSwitch?(console.log("switch is on"),this.setState({filterSwitch:!0}),document.getElementById("allSessions").className="mr-2 mt-1 font-normal",document.getElementById("mySessions").className="ml-2 mt-1 font-bold"):!0===this.state.filterSwitch&&(console.log("switch is off"),this.setState({filterSwitch:!1}),document.getElementById("allSessions").className="mr-2 mt-1 font-bold",document.getElementById("mySessions").className="ml-2 mt-1 font-normal")}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center text-6xl font-sans font-bold tracking-wider mt-5 mb-10",children:"Sessions"}),Object(d.jsxs)("div",{className:"flex justify-center ",children:[Object(d.jsx)("p",{id:"allSessions",className:"mr-2 mt-1 font-bold",children:"All Sessions"}),Object(d.jsxs)("label",{class:"switch",children:[Object(d.jsx)("input",{id:"filterSwitch",type:"checkbox",onClick:function(){return e.filterSwitch()}}),Object(d.jsx)("span",{class:"slider round"})]}),Object(d.jsx)("p",{id:"mySessions",className:"ml-2 mt-1 font-normal",children:"My Sessions"})]}),this.state.loading?Object(d.jsx)("div",{children:"loading"}):Object(d.jsx)(C,{filterSwitch:this.state.filterSwitch,info:this.state.sessions})]})}}]),s}(n.Component),M=s.p+"static/media/logoSkateB.6a4fc919.png";var P=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),s=t[0],c=t[1],l=Object(n.useState)(""),a=Object(o.a)(l,2),r=a[0],i=a[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{className:"object-center mx-auto mt-10",src:M,alt:"logo with feeble and skater"}),Object(d.jsxs)("div",{className:"text-center text-2xl mt-15 flex-column font-sans",children:[Object(d.jsx)("input",{onChange:function(e){c(e.target.value)},className:"text-left px-3 text-2xl mt-5 border rounded bg-gray-200",type:"text",placeholder:"Username"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{onChange:function(e){i(e.target.value)},className:"text-left px-3 text-2xl mt-5 border rounded bg-gray-200",type:"password",placeholder:"Password"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){var e={Username:s,Password:r};console.log("login",e),fetch("http://localhost:5000/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("data",e.message),e.message==="Anv\xe4ndare: ".concat(s," inloggad")?(console.log("login successfull"),localStorage.setItem("user",s),window.location.href="http://localhost:3000/Session"):console.log("Login failed")}))},className:"text-left px-3 py-1 text-2xl mt-5 border rounded bg-gray-200 ",children:"Login"})]})]})};var L=function(e){return Object(d.jsxs)("div",{className:"userProfileCard flex flex-col",children:[Object(d.jsx)("div",{className:"self-center",children:Object(d.jsx)("img",{className:"rounded-full h-24 w-24 flex items-center justify-center border-black border-2 filter drop-shadow-xl",src:"https://github.com/"+e.name+".png",alt:"profile"})}),Object(d.jsx)("h1",{className:"self-center text-3xl mt-2",children:e.name}),Object(d.jsxs)("div",{className:"p-5 m-5 bg-gray-50 bg-opacity-50 rounded-md shadow-xl",children:[Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{className:"text-xl",children:"Stance:"}),Object(d.jsx)("p",{className:"text-xl ml-4 bg-gray-100 px-2 rounded-md",contenteditable:"true",children:e.stance})]}),Object(d.jsxs)("div",{className:"flex flex-row mt-1",children:[Object(d.jsx)("p",{className:"text-xl",children:"Location:"}),Object(d.jsx)("p",{className:"text-xl ml-2 bg-gray-100 px-2 rounded-md",contenteditable:"true",children:e.location})]})]}),Object(d.jsx)("button",{className:"rounded-md bg-gray-50 bg-opacity-50 w-12 object-center mx-auto mt-0 shadow-xl",children:"Save"})]})};var E=function(){var e="goofy",t="malmo";return Object(d.jsx)("div",{className:"flex justify-center items-center font-sans",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:" pb-10 text-center text-6xl font-bold mt-5",children:"My profile"}),Object(d.jsx)(L,{name:localStorage.getItem("user"),stance:e,location:t})]})})},T=s(54),B=s(32),z=s.n(B);var F=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),s=t[0],c=t[1],l=Object(n.useState)(""),a=Object(o.a)(l,2),r=a[0],i=a[1],j=Object(n.useState)(""),b=Object(o.a)(j,2),m=b[0],x=b[1],h=Object(n.useState)(localStorage.getItem("user")),u=Object(o.a)(h,2),f=u[0],O=(u[1],Object(n.useState)([localStorage.getItem("user")])),g=Object(o.a)(O,2),p=g[0],v=(g[1],Object(n.useState)(Object(T.a)())),y=Object(o.a)(v,2),w=y[0];return y[1],Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"text-center text-6xl font-bold mt-5 mb-0 font-sans",children:"Create Session"})}),Object(d.jsxs)("div",{className:"flex flex-col justify-center m-10 md:mx-56",children:[Object(d.jsx)("h1",{className:"p-1 text-center font-medium mb-3 text-xl",children:"Time & Date "}),Object(d.jsx)("input",{className:"border rounded bg-gray-200 shadow-xl",onChange:function(e){var t=z()(e.target.value).format("MMMM Do YYYY, h:mm a");console.log(t),x(t)},type:"datetime-local"}),Object(d.jsx)("h3",{className:"p-0 mt-3 text-center font-medium mb-3 text-xl",children:"Enter Location"}),Object(d.jsx)("input",{onChange:function(e){c(e.target.value)},className:"mb-4 border rounded bg-gray-200 shadow-xl",type:"text",placeholder:"City"}),Object(d.jsx)("input",{onChange:function(e){i(e.target.value)},className:"mb-5 border rounded bg-gray-200 shadow-xl",type:"text",placeholder:"Street"}),Object(d.jsx)("div",{className:"flex justify-center",children:Object(d.jsx)("button",{className:"w-28 border rounded-xl bg-gray-200 shadow-xl font-medium",onClick:function(){console.log("posting new session");var e={userName:f,sessionId:w,date:m,city:s,street:r,users:p};console.log(e),fetch("http://localhost:5000/session/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e)})),window.location.href="http://localhost:3000/Session"},children:"Post Session"})})]})]})},J=function(e){Object(O.a)(s,e);var t=Object(g.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={items:null},e}return Object(f.a)(s,[{key:"componentDidMount",value:function(){if(this.props.location.state){var e=this.props.location.state.item;this.setState({items:e}),console.log(e.city)}}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center text-6xl font-bold tracking-wider mt-5 mb-10",children:"Session"}),this.state.items?Object(d.jsx)(k,{info:this.state.items}):Object(d.jsx)("div",{children:"this does not exist"})]})}}]),s}(n.Component),A=s(4);var D=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),s=t[0],c=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("user");e&&c(e)}),[]),s?Object(d.jsxs)(r.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(A.a,{path:"/Session",component:I}),Object(d.jsx)(A.a,{path:"/Myprofile",component:E}),Object(d.jsx)(A.a,{path:"/CreateSession",component:F}),Object(d.jsx)(A.a,{path:"/Open/:id",component:J})]}):Object(d.jsx)(P,{})},W=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,56)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),l(e),a(e)}))};a.a.render(Object(d.jsxs)(c.a.StrictMode,{children:[Object(d.jsx)(D,{}),Object(d.jsx)(j,{})]}),document.getElementById("root")),W()}},[[48,1,2]]]);
//# sourceMappingURL=main.13ee4b25.chunk.js.map