(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"74v/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var t=n("cha2");return{page:t.default||t}}])},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),o=r(n("sLSF")),i=r(n("MI3g")),u=r(n("a7VT")),c=r(n("Tit0")),l=r(n("ln6h")),p=n("KI45");e.__esModule=!0,e.Container=m,e.createUrl=P,e.default=void 0;var s=p(n("htGi")),f=p(n("+oT+")),h=p(n("q1tI")),d=p(n("17x9")),v=n("Bu4q");e.AppInitialProps=v.AppInitialProps;var y=n("nOHt");function b(t){return w.apply(this,arguments)}function w(){return(w=(0,f.default)(l.default.mark(function t(e){var n,r,a;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,r=e.ctx,t.next=3,(0,v.loadGetInitialProps)(n,r);case 3:return a=t.sent,t.abrupt("return",{pageProps:a});case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}var g=function(t){function e(){return(0,a.default)(this,e),(0,i.default)(this,(0,u.default)(e).apply(this,arguments))}return(0,c.default)(e,t),(0,o.default)(e,[{key:"getChildContext",value:function(){return{router:(0,y.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,a=P(e);return h.default.createElement(m,null,h.default.createElement(n,(0,s.default)({},r,{url:a})))}}]),e}(h.default.Component);function m(t){return t.children}e.default=g,g.childContextTypes={router:d.default.object},g.origGetInitialProps=b,g.getInitialProps=b;var O=(0,v.execOnce)(function(){0});function P(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return O(),r},get pathname(){return O(),e},get asPath(){return O(),n},back:function(){O(),t.back()},push:function(e,n){return O(),t.push(e,n)},pushTo:function(e,n){O();var r=n?e:"",a=n||e;return t.push(r,a)},replace:function(e,n){return O(),t.replace(e,n)},replaceTo:function(e,n){O();var r=n?e:"",a=n||e;return t.replace(r,a)}}}},TY1u:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};function a(t){var e={},n=o(t,e);return n.caseWithAction=function(t,r){return e[t.type]=r,n},n.case=function(t,e){return n.caseWithAction(t,function(t,n){return e(t,n.payload)})},n.casesWithAction=function(t,e){for(var r=0,a=t;r<a.length;r++){var o=a[r];n.caseWithAction(o,e)}return n},n.cases=function(t,e){return n.casesWithAction(t,function(t,n){return e(t,n.payload)})},n.withHandling=function(t){return t(n)},n.default=function(n){return o(t,r({},e),n)},n.build=function(){return o(t,r({},e))},n}function o(t,e,n){return function(r,a){void 0===r&&(r=t);var o=e[a.type]||n;return o?o(r,a):r}}Object.defineProperty(e,"__esModule",{value:!0}),e.reducerWithInitialState=function(t){return a(t)},e.reducerWithoutInitialState=function(){return a()},e.upcastingReducer=function(){return a()}},cha2:function(t,e,n){"use strict";n.r(e);var r=n("ln6h"),a=n.n(r),o=n("O40h"),i=n("0iUn"),u=n("sLSF"),c=n("MI3g"),l=n("a7VT"),p=n("Tit0"),s=n("q1tI"),f=n.n(s),h=n("m/Pd"),d=n.n(h),v=n("ANjH"),y=n("/MKj");function b(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(a){return"function"===typeof a?a(n,r,t):e(a)}}}}var w=b();w.withExtraArgument=b;var g=w,m=n("8Bbg"),O=n.n(m),P=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),x=function(){return(x=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},S=function(t,e,n,r){return new(n||(n=Promise))(function(a,o){function i(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(i,u)}c((r=r.apply(t,e||[])).next())})},_=function(t,e){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(u){o=[6,u],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},j=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n},I={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(t){return t},deserializeState:function(t){return t}},E=(n("G+AF"),n("zrwo")),k=n("TY1u"),T=n("5hh5"),A=Object(k.reducerWithInitialState)({open_menu:!1,scrollTop:0}).case(T.a.setCommon,function(t,e){return Object(E.a)({},t,e)}),C=Object(v.c)({app:A}),W=function(t){function e(){return Object(i.default)(this,e),Object(c.default)(this,Object(l.default)(e).apply(this,arguments))}return Object(p.default)(e,t),Object(u.default)(e,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r=t.store;return f.a.createElement(m.Container,null,f.a.createElement(y.a,{store:r},f.a.createElement(d.a,null,f.a.createElement("title",{key:"title"},"\u682a\u5f0f\u4f1a\u793e \u5800\u53e3\u7e4a\u7dad\u5de5\u696d"),f.a.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1,minimal-ui"}),f.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"})),f.a.createElement(e,n)))}}],[{key:"getInitialProps",value:function(){var t=Object(o.default)(a.a.mark(function t(e){var n,r,o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,(r=e.ctx).store.dispatch({type:"FOO",payload:"foo"}),!n.getInitialProps){t.next=8;break}return t.next=5,n.getInitialProps(r);case 5:t.t0=t.sent,t.next=9;break;case 8:t.t0={};case 9:return o=t.t0,t.abrupt("return",{pageProps:o});case 11:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}]),e}(O.a);e.default=function(t,e){e=x({},I,e);var n=function(n){var r=n.initialState,a=n.ctx,o=e.storeKey,i=function(){return t(e.deserializeState(r),x({},a,e,{isServer:!1}))};return window.hasOwnProperty(o)||(window[o]=i()),window[o]};return function(t){var r;return(r=function(r){function a(t,a){var o=r.call(this,t,a)||this,i=t.initialState;return e.debug&&console.log("4. WrappedApp.render created new store with initialState",i),o.store=n({initialState:i}),o}return P(a,r),a.prototype.render=function(){var e=this.props,n=e.initialProps,r=(e.initialState,j(e,["initialProps","initialState"]));return f.a.createElement(t,x({},r,n,{store:this.store}))},a}(s.Component)).displayName="withRedux("+(t.displayName||t.name||"App")+")",r.getInitialProps=function(r){return S(void 0,void 0,void 0,function(){var a,o;return _(this,function(i){switch(i.label){case 0:if(!r)throw new Error("No app context");if(!r.ctx)throw new Error("No page context");return a=n({ctx:r.ctx}),e.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",a.getState()),r.ctx.store=a,r.ctx.isServer=!1,o={},"getInitialProps"in t?[4,t.getInitialProps.call(t,r)]:[3,2];case 1:o=i.sent(),i.label=2;case 2:return e.debug&&console.log("3. WrappedApp.getInitialProps has store state",a.getState()),[2,{isServer:!1,initialState:e.serializeState(a.getState()),initialProps:o}]}})})},r}}(function(){return Object(v.d)(C,Object(v.a)(g))})(W)}},[["74v/",1,0,2]]]);