"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[166],{3166:function(e,t,r){r.r(t);var n=r(885),a=r(2791),u=r(501),c=r(4390),o=r(184);t.default=function(){var e=(0,a.useState)([]),t=(0,n.Z)(e,2),r=t[0],i=t[1],s=(0,a.useState)(""),p=(0,n.Z)(s,2),l=p[0],f=p[1],v=(0,a.useState)(""),h=(0,n.Z)(v,2),d=h[0],g=h[1],m=(0,u.lr)(),b=(0,n.Z)(m,2),x=b[0],w=b[1];return(0,a.useEffect)((function(){var e=x.get("query")||"";e!==d&&g(e),""!==d&&c.b.movie(d).then((function(e){return i(e.data.results)}))}),[d,x]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==l.trim()?(w({query:l}),g(l),f("")):alert("no")},children:[(0,o.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,value:l,onChange:function(e){f(e.currentTarget.value.toLowerCase())}}),(0,o.jsx)("button",{type:"submit",children:"Search"})]}),r.length>0&&(0,o.jsx)("ul",{children:r.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{to:"/movies/".concat(e.id),children:e.title},e.id)},e.id)}))})]})}},4390:function(e,t,r){r.d(t,{b:function(){return o}});var n=r(5861),a=r(7757),u=r.n(a),c=r(4569).default,o={trending:function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("https://api.themoviedb.org/3/trending/movie/day?api_key=7e27a31a64f35e2d3f45ab72b99097a8");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),movie:function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c({method:"get",url:"https://api.themoviedb.org/3/search/movie?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US&page=1&query=".concat(t,"&include_adult=false")});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),infoCart:function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c({method:"get",url:"https://api.themoviedb.org/3/movie/".concat(t,"?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US&page=1")});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),cast:function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c({method:"get",url:"https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US")});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),reviews:function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c({method:"get",url:"https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US&page=1")});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=166.24ae652d.chunk.js.map