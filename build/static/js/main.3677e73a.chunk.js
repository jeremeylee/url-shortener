(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{107:function(e,t,n){e.exports=n(184)},129:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),l=n(33),u=n.n(l),i=n(46),s=n(73),f=n(96),p=n.n(f),m={shortenUrl:function(){var e=Object(i.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/urlShortener",t);case 2:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},d=(n(129),n(187)),h=n(189),w=n(188),v=n(52),b=d.a.Title,E=function(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),o=n[0],c=n[1],l=Object(r.useState)(""),f=Object(s.a)(l,2),p=(f[0],f[1],function(){var e=Object(i.a)(u.a.mark(function e(t){var n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n={url:o,id:1},r=m.shortenUrl(n),console.log(r),c("");case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());return a.a.createElement("div",null,a.a.createElement(h.a,{type:"flex",justify:"center"},a.a.createElement(b,null,"Url Shortener")),a.a.createElement(h.a,{type:"flex",justify:"center"},a.a.createElement("form",{onSubmit:p},a.a.createElement("label",null,"Enter a valid URL:"),a.a.createElement(w.a,{onChange:function(e){return c(e.target.value)},placeholder:"www.google.com",value:o}),a.a.createElement(v.a,{htmlType:"submit"},"Shorten!"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[107,1,2]]]);
//# sourceMappingURL=main.3677e73a.chunk.js.map