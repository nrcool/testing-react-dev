(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{28:function(e,t,a){e.exports=a(56)},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=(a(30),a(58)),i=a(10);function m(e){var t=e.data;return c.a.createElement("div",{className:"row"},t.map((function(e){return c.a.createElement(i.b,{className:"col-md-4",to:{pathname:"/recipe/".concat(e.recipe.label),state:e}},c.a.createElement(l.a,{style:{width:"50%"}},c.a.createElement(l.a.Img,{variant:"top",src:e.recipe.image}),c.a.createElement(l.a.Body,null,c.a.createElement(l.a.Title,null,e.recipe.label))))})))}var u=a(26),o=a.n(u),p=a(2);function s(e){console.log(e);var t=e.location.state.recipe;return c.a.createElement("div",null,c.a.createElement("h1",null,t.label),c.a.createElement("img",{src:t.image}))}function E(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],l=t[1],u=Object(n.useState)("chicken"),E=Object(r.a)(u,2),d=E[0],f=E[1];Object(n.useEffect)((function(){h()}),[]);var h=function(){o.a.get("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("f979cece","&app_key=").concat("2618e3e72782ab79620aef62be3326c7")).then((function(e){return l(e.data.hits)}))};return c.a.createElement(i.a,null,c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"container bg-dark text-white"},c.a.createElement("h1",null,"Recipe APP"),c.a.createElement("form",{className:"text-right",onSubmit:function(e){e.preventDefault(),h()}},c.a.createElement("label",null,"Search Recipe:"," ",c.a.createElement("input",{type:"text",onChange:function(e){return f(e.target.value)}})),c.a.createElement("input",{type:"submit",value:"search"}))),c.a.createElement(m,{data:a}))),c.a.createElement(p.a,{path:"/recipe/:productname",component:s})))}var d=a(27);a.n(d).a.render(c.a.createElement(E,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.9bd07aa7.chunk.js.map