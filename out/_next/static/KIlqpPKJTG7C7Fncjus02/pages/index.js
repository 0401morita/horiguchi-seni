(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/EDR":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=t("23aj");return{page:e.default||e}}])},"23aj":function(e,a,t){"use strict";t.r(a);var n=t("kOwS"),s=t("zrwo"),i=t("doui"),c=t("q1tI"),r=t.n(c),l=t("/MKj"),m=(t("HSia"),t("MP5n")),o=t("OS56"),d=t.n(o),u=(t("r7B0"),function(){var e=Object(c.useRef)(null);return Object(c.useEffect)(function(){e.current&&e.current.classList.add("in")},[]),r.a.createElement("section",{className:"hero-section home-visual",ref:e},r.a.createElement("div",{className:"hero-image"},r.a.createElement(d.a,{arrows:!1,dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplaySpeed:5e3,autoplay:!0,fade:!0},r.a.createElement("div",{className:"slick-image"}),r.a.createElement("div",{className:"slick-image"}),r.a.createElement("div",{className:"slick-image"}),r.a.createElement("div",{className:"slick-image"}))),r.a.createElement("div",{className:"sailing-scroll-down"},r.a.createElement("span",{className:"txt"},"Scroll"),r.a.createElement("span",{className:"arrow"})))}),E=function(e){var a=e.index,t=void 0===a?"01":a,n=e.title,s=e.summary,i=e.image_src,c=e.label_ja,l=e.label_en,m=e.link,o=void 0===m?"/service/sewing":m;return r.a.createElement("div",{className:"service-item"},r.a.createElement("figure",{className:"service-image"},r.a.createElement("img",{src:i})),r.a.createElement("a",{href:o,className:"service-summary"},r.a.createElement("span",{className:"index"},r.a.createElement("span",{className:"number"},t)),r.a.createElement("h4",{className:"summary-title"},n),r.a.createElement("p",{className:"summary-description"},s),r.a.createElement("div",{className:"read-more"},r.a.createElement("span",{className:"en"},l),r.a.createElement("span",{className:"ja"},c))))},g=function(e){var a=e.title,t=e.created,n=e.category,s=e.link,i=void 0===s?"/news":s;return r.a.createElement("li",{className:"recent-entry-item"},r.a.createElement("a",{href:i,className:"recent-entry-link"},r.a.createElement("p",{className:"recent-entry-meta"},t,"\u30fb",n),r.a.createElement("div",{className:"recent-entry-body"},r.a.createElement("span",{className:"title"},a),r.a.createElement("span",{className:"arrow"}))))};a.default=Object(l.b)(function(e){return e})(function(e){var a=Object(c.useState)([{image_src:"https://0401morita.github.io/horiguchi-seni/static/images/service/machine-quilting.jpg",title:"\u7e2b\u88fd\u30fb\u8ca9\u58f2",summary:"\u751f\u5730\u30fb\u30c7\u30b6\u30a4\u30f3\u306e\u9078\u5b9a\u304b\u3089\u30e6\u30cb\u30d5\u30a9\u30fc\u30e0\u3092\u7e2b\u88fd\u30fb\u8ca9\u58f2",label_en:"Sewing & Sales",label_ja:"\u7e2b\u88fd\u30fb\u8ca9\u58f2\u306b\u3064\u3044\u3066",link:"/service/sewing"},{image_src:"https://0401morita.github.io/horiguchi-seni/static/images/service/name.jpg",title:"\u30e6\u30cb\u30d5\u30a9\u30fc\u30e0\u8ca9\u58f2",summary:"\u5404\u7a2e\u30e1\u30fc\u30ab\u30fc\u54c1\u3092\u7279\u5225\u4fa1\u683c\u306b\u3066\u8ca9\u58f2",label_en:"Sale",label_ja:"\u8ca9\u58f2\u306b\u3064\u3044\u3066",link:"/service/sale"},{image_src:"https://0401morita.github.io/horiguchi-seni/static/images/service/iron.jpg",title:"\u30ea\u30cd\u30f3\u30b5\u30d7\u30e9\u30a4",summary:"\u30e6\u30cb\u30d5\u30a9\u30fc\u30e0\u306e\u30ea\u30fc\u30b9\u3084\u30af\u30ea\u30fc\u30cb\u30f3\u30b0\u4ed8\u30ea\u30fc\u30b9",label_en:"Linen supply",label_ja:"\u30ea\u30cd\u30f3\u30b5\u30d7\u30e9\u30a4\u306b\u3064\u3044\u3066",link:"/service/linen-supply"}]),t=Object(i.default)(a,1)[0],l=Object(c.useState)([{title:"\u590f\u5b63\u4f11\u6687\u306e\u304a\u77e5\u3089\u305b",created:"2019/10/21",category:"News",link:"/news"},{title:"\u6691\u3044\u590f\u3092\u5feb\u9069\u306b\u904e\u3054\u305b\u308b\u7d20\u6750",created:"2019/10/19",category:"Column",link:"/news"},{title:"\u4f01\u696d\u306b\u304a\u3051\u308b\u30e6\u30cb\u30d5\u30a9\u30fc\u30e0\u5c0e\u5165\u306e\u4fa1\u5024",created:"2019/10/17",category:"Column",link:"/news"},{title:"\u30ad\u30e3\u30c9\u30ab\u30e0\u5c0e\u5165\u306e\u304a\u77e5\u3089\u305b",created:"2019/10/10",category:"News",link:"/news"}]),o=Object(i.default)(l,1)[0],d={width:0,height:0,messageVw:0,homePrimaryMessageHeight:0,homeMessageSectionHeight:0},h=Object(c.useRef)(null),w=Object(c.useRef)(null),v=function(e){var a=200;a>0&&clearTimeout(a),a=setTimeout(function(){d={width:window.innerWidth,height:window.innerHeight,messageVw:Math.floor(.06*window.innerWidth),homePrimaryMessageHeight:w.current?w.current.clientHeight:0,homeMessageSectionHeight:h.current?h.current.clientHeight:0},N()},a)},N=function(){var e=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop);if(w.current&&h.current){var a=d,t=a.width,n=(a.height,a.messageVw),s=a.homePrimaryMessageHeight,i=a.homeMessageSectionHeight,c=0,r=0,l=h.current.offsetTop;t>=768?(r=e+window.innerHeight,c=n+l+i/2+s/2):(r=e+window.innerHeight,c=n+l+s/2+90,console.log(c,r)),c<r?document.body.classList.add("fix-message"):document.body.classList.remove("fix-message")}};return Object(c.useEffect)(function(){d={width:window.innerWidth,height:screen.height,messageVw:Math.floor(.06*window.innerWidth),homePrimaryMessageHeight:w.current?w.current.clientHeight:0,homeMessageSectionHeight:h.current?h.current.clientHeight:0},document.body.classList.add("in");var e=navigator.userAgent;return e.indexOf("iPhone")>=0||e.indexOf("iPad")>=0||e.indexOf("Android")>=0?window.addEventListener("orientationchange",v):window.addEventListener("resize",v,!1),window.addEventListener("load",N,!1),window.addEventListener("scroll",N,!1),window.addEventListener("touchmove",N,!1),function(){window.removeEventListener("load",N,!1),window.removeEventListener("scroll",N,!1),window.removeEventListener("touchmove",N,!1),window.removeEventListener("resize",v,!1),window.removeEventListener("orientationchange",v)}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("article",{className:"home"},r.a.createElement(u,null),r.a.createElement("section",{className:"section section-home-message",ref:h},r.a.createElement("div",{className:"home-primary-message",ref:w},r.a.createElement("h2",{className:"title"},r.a.createElement("span",null,"ENJOY"),r.a.createElement("br",null),r.a.createElement("span",null,"UNIFORM")),r.a.createElement("p",{className:"description"},r.a.createElement("span",null,"\u30e6\u30cb\u30d5\u30a9\u30fc\u30e0\u3092\u7740\u308b\u4eba\u3092\u3082\u3063\u3068\u5feb\u9069\u306b\u3002"),r.a.createElement("br",null),r.a.createElement("span",null,"\u3082\u3063\u3068\u697d\u3057\u304f\u3002"))),r.a.createElement("div",{className:"home-secondary-message"},r.a.createElement("p",null,"\u5800\u53e3\u7e4a\u7dad\u5de5\u696d\u306f\u3001\u6226\u5f8c\u307e\u3082\u306a\u304f\u7e2b\u88fd\u4e8b\u696d\u3092\u7acb\u3061\u4e0a\u3052\u307e\u3057\u305f\u3002"),r.a.createElement("p",null,"\u30e6\u30cb\u30d5\u30a9\u30fc\u30e0\u3092\u7e2b\u88fd\u30fb\u8ca9\u58f2\u3059\u308b\u4e00\u65b9\u3067\u5e73\u6210\u306b\u5165\u308a\u30af\u30ea\u30fc\u30cb\u30f3\u30b0\u8a2d\u5099\u3092 \u6574\u3048\u307e\u3057\u305f\u3002"),r.a.createElement("p",null,"\u73fe\u5728\u3001\u30e6\u30cb\u30d5\u30a9\u30fc\u30e0\u306e\u7e2b\u88fd\u30fb\u8ca9\u58f2\u30fb\u30af\u30ea\u30fc\u30cb\u30f3\u30b0\u30fb\u30af\u30ea\u30fc\u30cb\u30f3\u30b0\u4ed8\u30ea\u30fc\u30b9\uff08\u30ea\u30cd\u30f3\u30b5\u30d7\u30e9\u30a4\uff09\u3092 \u4e2d\u5fc3\u306b\u5c55\u958b\u3044\u305f\u3057\u3066\u304a\u308a\u307e\u3059\u3002"),r.a.createElement("a",{className:"read-more-link"},r.a.createElement("span",{className:"en"},"About"),r.a.createElement("span",{className:"ja"},"\u5800\u53e3\u7e4a\u7dad\u5de5\u696d\u306b\u3064\u3044\u3066")))),r.a.createElement("main",{className:"main-content"},r.a.createElement("div",{className:"section-heading"},r.a.createElement("h3",{className:"section-title"},r.a.createElement("span",{className:"ja"},"\u79c1\u305f\u3061\u306e\u4e8b\u696d"),r.a.createElement("span",{className:"en"},"Service"))),r.a.createElement("div",{className:"service-list"},t.map(function(e,a){return r.a.createElement(E,Object(n.a)({},Object(s.a)({},e,{index:"0"+(a+1)}),{key:a}))}))),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("div",{className:"section-heading"},r.a.createElement("h3",{className:"section-title"},r.a.createElement("span",{className:"ja"},"\u304a\u77e5\u3089\u305b"),r.a.createElement("span",{className:"en"},"News and Column")))),r.a.createElement("div",{className:"col-md-7"},r.a.createElement("div",{className:"recent-entries"},r.a.createElement("ul",{className:"recent-entry-list"},o.map(function(e,a){return r.a.createElement(g,Object(n.a)({},e,{key:a}))}))))))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"contact-banner"},r.a.createElement("h2",{className:"message"},r.a.createElement("span",{className:"ja"},"\u3054\u76f8\u8ac7\u306f\u3042\u308a\u307e\u3059\u304b\uff1f"),r.a.createElement("span",{className:"en"},"CONTACT")))),r.a.createElement(m.a,null))})}},[["/EDR",1,0,2]]]);