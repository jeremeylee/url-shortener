(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{109:function(e,t,n){e.exports=n(186)},131:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=n(33),s=n.n(l),i=n(46),u=n(74),m=n(97),p=n.n(m),f={shortenUrl:function(){var e=Object(i.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/urlShortener",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},h=(n(131),n(188)),w=n(190),v=n(191),d=n(189),y=n(54),E=h.a.Title,g=(h.a.Paragraph,function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(""),m=Object(u.a)(l,2),p=m[0],h=m[1],g=function(){var e=Object(i.a)(s.a.mark(function e(t){var n,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={url:o},e.next=4,f.shortenUrl(n);case 4:a=e.sent,console.log(a),h(a.shortenUrl),console.log(p),c("");case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement(w.a,{type:"flex",justify:"center"},r.a.createElement(E,null,"Url Shortener")),r.a.createElement("form",{onSubmit:g,className:"form-container"},r.a.createElement(w.a,{type:"flex",justify:"center"},r.a.createElement(E,{level:2},"Paste a URL to shorten it: ")),r.a.createElement(w.a,{type:"flex",justify:"center"},r.a.createElement(v.a,{xs:4,sm:6,md:8,lg:10,xl:12},r.a.createElement(d.a,{onChange:function(e){return c(e.target.value)},placeholder:"http://www.google.com",value:o,className:"input-form"})),r.a.createElement(v.a,{span:2},r.a.createElement(y.a,{htmlType:"submit",type:"primary",size:"large"},"Shorten!")))),p?function(){var e=window.location.href.concat(p);return r.a.createElement(w.a,{type:"flex",justify:"center",className:"shorten-url-container"},r.a.createElement(E,{level:3,copyable:!0},e))}():r.a.createElement("div",null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[109,1,2]]]);
//# sourceMappingURL=main.e2fd4b71.chunk.js.map