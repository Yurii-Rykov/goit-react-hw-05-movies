"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[781],{1781:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(8152),a=r(2791),c=r(3504),u={},o=r(4390),i=r(184),s=function(){var e=(0,a.useState)([]),t=(0,n.Z)(e,2),r=t[0],s=t[1];return o.b.trending().then((function(e){s(e.data.results)})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:u.title,children:"Tranding today"}),(0,i.jsx)("ul",{children:r.map((function(e){e.poster_path;var t=e.id,r=e.name,n=e.title;return(0,i.jsx)(c.rU,{to:"/movies/".concat(t),children:(0,i.jsxs)("li",{children:[" ",void 0!==r?r:n]})},t)}))})]})}},4390:function(e,t,r){r.d(t,{b:function(){return o}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569).default,o={trending:function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u({method:"get",url:"https:api.themoviedb.org/3/trending/movie/day?api_key=7e27a31a64f35e2d3f45ab72b99097a8"});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),movie:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u({method:"get",url:"https://api.themoviedb.org/3/search/movie?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US&page=1&query=".concat(t,"&include_adult=false")});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),infoCart:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u({method:"get",url:"https://api.themoviedb.org/3/movie/".concat(t,"?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US&page=1")});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),cast:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u({method:"get",url:"https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US")});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),reviews:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u({method:"get",url:"https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US&page=1")});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=781.c367311b.chunk.js.map