(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("cha2");return{page:e.default||e}}])},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),o=r(n("sLSF")),i=r(n("MI3g")),u=r(n("a7VT")),c=r(n("Tit0")),l=r(n("ln6h")),s=n("KI45");t.__esModule=!0,t.Container=w,t.createUrl=O,t.default=void 0;var p=s(n("htGi")),f=s(n("+oT+")),m=s(n("q1tI")),d=s(n("17x9")),h=n("Bu4q");t.AppInitialProps=h.AppInitialProps;var v=n("nOHt");function b(e){return y.apply(this,arguments)}function y(){return(y=(0,f.default)(l.default.mark(function e(t){var n,r,a;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,(0,h.loadGetInitialProps)(n,r);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var g=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,o.default)(t,[{key:"getChildContext",value:function(){return{router:(0,v.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=O(t);return m.default.createElement(w,null,m.default.createElement(n,(0,p.default)({},r,{url:a})))}}]),t}(m.default.Component);function w(e){return e.children}t.default=g,g.childContextTypes={router:d.default.object},g.origGetInitialProps=b,g.getInitialProps=b;var E=(0,h.execOnce)(function(){0});function O(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return E(),r},get pathname(){return E(),t},get asPath(){return E(),n},back:function(){E(),e.back()},push:function(t,n){return E(),e.push(t,n)},pushTo:function(t,n){E();var r=n?t:"",a=n||t;return e.push(r,a)},replace:function(t,n){return E(),e.replace(t,n)},replaceTo:function(t,n){E();var r=n?t:"",a=n||t;return e.replace(r,a)}}}},TY1u:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function a(e){var t={},n=o(e,t);return n.caseWithAction=function(e,r){return t[e.type]=r,n},n.case=function(e,t){return n.caseWithAction(e,function(e,n){return t(e,n.payload)})},n.casesWithAction=function(e,t){for(var r=0,a=e;r<a.length;r++){var o=a[r];n.caseWithAction(o,t)}return n},n.cases=function(e,t){return n.casesWithAction(e,function(e,n){return t(e,n.payload)})},n.withHandling=function(e){return e(n)},n.default=function(n){return o(e,r({},t),n)},n.build=function(){return o(e,r({},t))},n}function o(e,t,n){return function(r,a){void 0===r&&(r=e);var o=t[a.type]||n;return o?o(r,a):r}}Object.defineProperty(t,"__esModule",{value:!0}),t.reducerWithInitialState=function(e){return a(e)},t.reducerWithoutInitialState=function(){return a()},t.upcastingReducer=function(){return a()}},cha2:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),o=n("O40h"),i=n("0iUn"),u=n("sLSF"),c=n("MI3g"),l=n("a7VT"),s=n("Tit0"),p=n("q1tI"),f=n.n(p),m=n("m/Pd"),d=n.n(m),h=n("ANjH"),v=n("/MKj");function b(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(a){return"function"===typeof a?a(n,r,e):t(a)}}}}var y=b();y.withExtraArgument=b;var g=y,w=n("8Bbg"),E=n.n(w),O=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),P=function(){return(P=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},_=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function u(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,u)}c((r=r.apply(e,t||[])).next())})},j=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(u){o=[6,u],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},S={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(e){return e},deserializeState:function(e){return e}},I=(n("G+AF"),n("zrwo")),k=n("TY1u"),N=n("xvzY"),T={setCommon:n.n(N)()()("SET_COMMON")},C=Object(k.reducerWithInitialState)({open_menu:!1,scrollTop:0}).case(T.setCommon,function(e,t){return Object(I.a)({},e,t)}),A=Object(h.c)({app:C}),M=n("YFqc"),W=n.n(M),z=n("4yI5"),F=function(e){var t=e.toggleMenu,n=Object(p.useRef)(null);return Object(p.useEffect)(function(){n.current&&n.current.classList.add("in")},[]),f.a.createElement("header",{className:"header",ref:n},f.a.createElement("div",{className:"header-container"},f.a.createElement(W.a,{href:"/"},f.a.createElement("a",{className:"brand"},f.a.createElement(z.a,null))),f.a.createElement("div",{className:"global-nav-container"},f.a.createElement("nav",{className:"global-nav",role:"menubar"},f.a.createElement("ul",{className:"nav-menu",role:"menu"},f.a.createElement("li",{role:"menuitem"},f.a.createElement(W.a,{href:"about"},f.a.createElement("a",{className:"nav-menu-link"},"\u5800\u53e3\u7e4a\u7dad\u306b\u3064\u3044\u3066"))),f.a.createElement("li",{role:"menuitem"},f.a.createElement(W.a,{href:"about"},f.a.createElement("a",{className:"nav-menu-link"},"\u30b5\u30fc\u30d3\u30b9"))),f.a.createElement("li",{role:"menuitem"},f.a.createElement(W.a,{href:"about"},f.a.createElement("a",{className:"nav-menu-link"},"\u65bd\u8a2d\u3068\u8a2d\u5099"))),f.a.createElement("li",{role:"menuitem"},f.a.createElement(W.a,{href:"about"},f.a.createElement("a",{className:"nav-menu-link"},"\u4f1a\u793e\u60c5\u5831"))),f.a.createElement("li",{className:"contact",role:"menuitem"},f.a.createElement(W.a,{href:"/contact"},f.a.createElement("a",{className:"nav-menu-link"},"\u304a\u554f\u3044\u5408\u308f\u305b")))))),f.a.createElement("div",{className:"menu-trigger",onClick:function(e){e.preventDefault(),t()}},f.a.createElement("div",{className:"menu-trgger-btn"},f.a.createElement("span",null),f.a.createElement("span",null)))))},R=Object(v.b)(function(e){return e.app},function(e){return{toggleMenu:function(){return e(function(e,t){e(T.setCommon({open_menu:!t().app.open_menu})),t().app.open_menu?document.body.classList.add("open-menu"):document.body.classList.remove("open-menu")})}}})(F),q=n("MP5n"),D=function(e){function t(){return Object(i.default)(this,t),Object(c.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,r=e.store;return f.a.createElement(w.Container,null,f.a.createElement(v.a,{store:r},f.a.createElement(d.a,null,f.a.createElement("title",{key:"title"},"\u682a\u5f0f\u4f1a\u793e \u5800\u53e3\u7e4a\u7dad\u5de5\u696d"),f.a.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1,minimal-ui"}),f.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"})),f.a.createElement("div",{className:"wrapper"},f.a.createElement(R,null),f.a.createElement(t,n)),f.a.createElement(q.a,null)))}}],[{key:"getInitialProps",value:function(){var e=Object(o.default)(a.a.mark(function e(t){var n,r,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,(r=t.ctx).store.dispatch({type:"FOO",payload:"foo"}),!n.getInitialProps){e.next=8;break}return e.next=5,n.getInitialProps(r);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0={};case 9:return o=e.t0,e.abrupt("return",{pageProps:o});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(E.a);t.default=function(e,t){t=P({},S,t);var n=function(n){var r=n.initialState,a=n.ctx,o=t.storeKey,i=function(){return e(t.deserializeState(r),P({},a,t,{isServer:!1}))};return window.hasOwnProperty(o)||(window[o]=i()),window[o]};return function(e){var r;return(r=function(r){function a(e,a){var o=r.call(this,e,a)||this,i=e.initialState;return t.debug&&console.log("4. WrappedApp.render created new store with initialState",i),o.store=n({initialState:i}),o}return O(a,r),a.prototype.render=function(){var t=this.props,n=t.initialProps,r=(t.initialState,x(t,["initialProps","initialState"]));return f.a.createElement(e,P({},r,n,{store:this.store}))},a}(p.Component)).displayName="withRedux("+(e.displayName||e.name||"App")+")",r.getInitialProps=function(r){return _(void 0,void 0,void 0,function(){var a,o;return j(this,function(i){switch(i.label){case 0:if(!r)throw new Error("No app context");if(!r.ctx)throw new Error("No page context");return a=n({ctx:r.ctx}),t.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",a.getState()),r.ctx.store=a,r.ctx.isServer=!1,o={},"getInitialProps"in e?[4,e.getInitialProps.call(e,r)]:[3,2];case 1:o=i.sent(),i.label=2;case 2:return t.debug&&console.log("3. WrappedApp.getInitialProps has store state",a.getState()),[2,{isServer:!1,initialState:t.serializeState(a.getState()),initialProps:o}]}})})},r}}(function(){return Object(h.d)(A,Object(h.a)(g))})(D)},xvzY:function(e,t,n){"use strict";function r(e,t){void 0===t&&(t=function(e){return e instanceof Error});var n=e?e+"/":"";function r(e,r,a){void 0===a&&(a=t);var o=n+e;return Object.assign(function(e,t){var n={type:o,payload:e};return(r||t)&&(n.meta=Object.assign({},r,t)),a&&("boolean"===typeof a||a(e))&&(n.error=!0),n},{type:o,toString:function(){return o},match:function(e){return e.type===o}})}return Object.assign(r,{async:function(e,t){return{type:n+e,started:r(e+"_STARTED",t,!1),done:r(e+"_DONE",t,!1),failed:r(e+"_FAILED",t,!0)}}})}Object.defineProperty(t,"__esModule",{value:!0}),t.isType=function(e,t){return e.type===t.type},t.actionCreatorFactory=r,t.default=r}},[["74v/",1,0,2]]]);