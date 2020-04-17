(this["webpackJsonpgrace-project"]=this["webpackJsonpgrace-project"]||[]).push([[0],{29:function(e,n,t){e.exports=t(51)},34:function(e,n,t){},39:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),i=(t(34),t(5)),u=t(9),l=t(6),m=t(7),s=t(8),f=t(10),p=t(2),d=t(3);function g(){var e=Object(p.a)(["\n  display: block;\n"]);return g=function(){return e},e}function h(){var e=Object(p.a)(["\n  font-weight: 600;\n  text-align: right;\n  display: block;\n  color: #7f7979;\n  padding-top: 10px;\n"]);return h=function(){return e},e}function b(){var e=Object(p.a)(["\n  font-weight: 600;\n  padding-bottom: 5px;\n  display: block;\n"]);return b=function(){return e},e}function v(){var e=Object(p.a)(["\n  background: var(--message-colour);\n  border: solid var(--message-colour) red;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px #7f7979;\n  font-size: 14px;\n  padding: 5px 20px 5px 5px;\n  margin: 1rem 1rem;\n  line-height: 1.3;\n  word-wrap: anywhere;\n  ",";\n"]);return v=function(){return e},e}var x=d.a.div(v(),(function(e){return"Grace"===e.name?"margin-right: calc(1rem + 10px);":"margin-left: calc(1rem + 10px);"})),E=d.a.span(b()),j=d.a.span(h()),y=d.a.p(g()),k=function(e){var n=e.name,t=e.message,a=e.date,o=e.time;return r.a.createElement(x,{name:n},r.a.createElement(E,null,n),r.a.createElement(y,null,t),r.a.createElement(j,null,a," ",o))},w=t(15);function O(){var e=Object(p.a)(["\n  font-family: var(--heading-font);\n  font-size: 22vw;\n"]);return O=function(){return e},e}function L(){var e=Object(p.a)(["\n  margin: 0 1rem;\n"]);return L=function(){return e},e}var P=d.a.p(L()),C=Object(d.a)(w.a.span)(O()),M=function(e){var n=Object(w.b)({number:e.count,from:{number:0}});return r.a.createElement(P,null,r.a.createElement(C,null,n.number.interpolate((function(e){return Math.floor(e)})))," ",e.item)};M.defaultProps={item:"messages"};var N=M;function R(){var e=Object(p.a)(["\n  margin: 0 1rem;\n"]);return R=function(){return e},e}var z=d.a.p(R()),D=function(e){return r.a.createElement(z,null,e.emoji)},S=t(12),B=t.n(S);function G(){var e=Object(p.a)(["\n  grid-column: 2 / 3;\n  border: solid 2px #fff;\n  color: #fff;\n  background: transparent;\n  padding: 15px 10px;\n  margin: 0 1rem 20px;\n  font-size: 1.3rem;\n  box-shadow: 2px 2px 2px #7f7979;\n"]);return G=function(){return e},e}var J=d.a.button(G());J.propTypes={max:B.a.number,text:B.a.string,onClick:B.a.func};var W=function(e){var n=e.text;return r.a.createElement(J,{onClick:function(){return e.onClick(Math.floor(Math.random()*e.max))}},n)};function F(){var e=Object(p.a)(["\n  background: var(--",");\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  padding: 2rem 0;\n  scroll-snap-align: start;\n  position: relative;\n"]);return F=function(){return e},e}var I=d.a.section(F(),(function(e){return e.colour})),T=function(e){return r.a.createElement(I,{colour:e.colour},e.children)},$=(t(39),function(e){Object(s.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=n.call(this,e)).state={error:null,isLoading:!0,messages:[],number:""},a.handleRandomNumber=a.handleRandomNumber.bind(Object(l.a)(a)),a}return Object(u.a)(t,[{key:"fetchData",value:function(){var e=this;fetch("https://raw.githubusercontent.com/stevenbister/grace-project/master/backend/whatsapp-chat.json").then((function(e){return e.json()})).then((function(n){return e.setState({messages:n,isLoading:!1})})).catch((function(n){return e.setState({error:n,isLoading:!1})}))}},{key:"handleRandomNumber",value:function(e){this.setState({number:e})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e,n=this,t=this.state,a=t.messages,o=t.number,c=t.isLoading;return o&&(e=r.a.createElement(k,{key:a[o].id,name:a[o].meta.name,message:a[o].message,date:a[o].meta.date,time:a[o].meta.time})),!1===c?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.Parallax,{ref:function(e){return n.parallax=e},pages:6},r.a.createElement(T,{colour:"purple"},r.a.createElement(f.ParallaxLayer,{offset:.5,speed:.5},r.a.createElement(N,{count:a.length}))),r.a.createElement(T,{colour:"peach"},r.a.createElement(f.ParallaxLayer,{offset:.5,speed:.5},r.a.createElement(N,{count:a.map((function(e){return e.message})).join(",").match(/\u2764\ufe0f/gi).length,item:"\u2764\ufe0f's"}),r.a.createElement(D,{emoji:a.map((function(e){return e.message})).join(",").match(/\u2764\ufe0f/gi)}))),r.a.createElement(T,{colour:"green"},r.a.createElement(f.ParallaxLayer,{offset:1,speed:.75},a.slice(0,2).map((function(e){var n=e.id,t=e.message,a=e.meta,o=a.name,c=a.date,i=a.time;return r.a.createElement(k,{key:n,name:o,message:t,date:c,time:i})})))),r.a.createElement(T,{colour:"peach"},r.a.createElement(f.ParallaxLayer,{offset:1.5,speed:.5},r.a.createElement(N,{count:a.map((function(e){return e.message})).join(",").match(/love you/gi).length,item:"love you's"}))),r.a.createElement(T,{colour:"blue"},r.a.createElement(W,{text:"Generate a random message",max:a.length,onClick:this.handleRandomNumber}),e))):r.a.createElement("p",null,"Loading...")}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.e4038eab.chunk.js.map