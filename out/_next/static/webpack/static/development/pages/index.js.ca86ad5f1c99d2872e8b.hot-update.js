webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_styles_home_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/styles/home.scss */ "./src/styles/home.scss");
/* harmony import */ var _src_styles_home_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_styles_home_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_containers_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/containers/header */ "./src/containers/header.ts");
/* harmony import */ var _src_components_shares_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/shares/footer */ "./src/components/shares/footer.tsx");
/* harmony import */ var _src_components_homes_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/homes/slider */ "./src/components/homes/slider.tsx");
/* harmony import */ var _src_components_homes_service_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/homes/service_item */ "./src/components/homes/service_item.tsx");
/* harmony import */ var _src_components_homes_recent_post_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/homes/recent_post_item */ "./src/components/homes/recent_post_item.tsx");



var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/pages/index.tsx";

 //import Link from 'next/link';



 //import Footer from '../src/components/shares/footer';





function afsa() {}

var Home = function Home(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    image_src: 'https://0401morita.github.io/horiguchi-seni/static/images/service/machine-quilting.jpg',
    title: '縫製・販売',
    summary: '生地・デザインの選定からユニフォームを縫製・販売',
    label_en: 'Sewing & Sales',
    label_ja: '縫製・販売について',
    link: '/service/sewing'
  }, {
    image_src: 'https://0401morita.github.io/horiguchi-seni/static/images/service/name.jpg',
    title: 'ユニフォーム販売',
    summary: '各種メーカー品を特別価格にて販売',
    label_en: 'Sale',
    label_ja: '販売について',
    link: '/service/sale'
  }, {
    image_src: 'https://0401morita.github.io/horiguchi-seni/static/images/service/iron.jpg',
    title: 'リネンサプライ',
    summary: 'ユニフォームのリースやクリーニング付リース',
    label_en: 'Linen supply',
    label_ja: 'リネンサプライについて',
    link: '/service/linen-supply'
  }]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 1),
      Services = _useState2[0];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    title: '夏季休暇のお知らせ',
    created: '2019/10/21',
    category: 'News',
    link: '/news'
  }, {
    title: '暑い夏を快適に過ごせる素材',
    created: '2019/10/19',
    category: 'Column',
    link: '/news'
  }, {
    title: '企業におけるユニフォーム導入の価値',
    created: '2019/10/17',
    category: 'Column',
    link: '/news'
  }, {
    title: 'キャドカム導入のお知らせ',
    created: '2019/10/10',
    category: 'News',
    link: '/news'
  }]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 1),
      posts = _useState4[0];

  var windowState = {
    width: 0,
    height: 0,
    messageVw: 0,
    homePrimaryMessageHeight: 0,
    homeMessageSectionHeight: 0
  };
  var homeMessageSectionEl = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var homePrimaryMessageEl = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  /*
   * リサイズ実行関数
   *
   * @event {Object} event - イベント
   */

  var handleResize = function handleResize(e) {
    var timer = 200;

    if (timer > 0) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      windowState = {
        width: window.innerWidth,
        height: document.documentElement.clientHeight,
        messageVw: Math.floor(window.innerWidth * 0.06),
        homePrimaryMessageHeight: homePrimaryMessageEl.current ? homePrimaryMessageEl.current.clientHeight : 0,
        homeMessageSectionHeight: homeMessageSectionEl.current ? homeMessageSectionEl.current.clientHeight : 0
      };
      handleScroll();
    }, timer);
  };
  /*
   * スクロール実行関数
   *
   * @event {Object} event - イベント
   */


  var handleScroll = function handleScroll() {
    var _windowState = windowState,
        windowWidth = _windowState.width,
        windowHeight = _windowState.height,
        messageVw = _windowState.messageVw,
        homePrimaryMessageHeight = _windowState.homePrimaryMessageHeight,
        homeMessageSectionHeight = _windowState.homeMessageSectionHeight;
    var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    var scrollBottom = scrollTop + windowHeight;

    if (homePrimaryMessageEl.current && homeMessageSectionEl.current) {
      var homeMessageSectionTop = homeMessageSectionEl.current.offsetTop;
      var fixPosition = 0;

      if (windowWidth >= 768) {
        fixPosition = messageVw + homeMessageSectionTop + homeMessageSectionHeight / 2 + homePrimaryMessageHeight / 2;
      } else {
        fixPosition = messageVw + homeMessageSectionTop + homePrimaryMessageHeight / 2 + 180 / 2;
      }

      if (fixPosition < scrollBottom) {
        document.body.classList.add('fix-message');
      } else {
        document.body.classList.remove('fix-message');
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    windowState = {
      width: window.innerWidth,
      height: document.documentElement.clientHeight,
      messageVw: Math.floor(window.innerWidth * 0.06),
      homePrimaryMessageHeight: homePrimaryMessageEl.current ? homePrimaryMessageEl.current.clientHeight : 0,
      homeMessageSectionHeight: homeMessageSectionEl.current ? homeMessageSectionEl.current.clientHeight : 0
    };
    document.body.classList.add('in');
    window.addEventListener('load', handleScroll, false);
    window.addEventListener('scroll', handleScroll, false);
    window.addEventListener('touchmove', handleScroll, false);
    window.addEventListener('resize', handleResize, false);
    return function () {
      window.removeEventListener('load', handleScroll, false);
      window.removeEventListener('scroll', handleScroll, false);
      window.removeEventListener('touchmove', handleScroll, false);
      window.removeEventListener('resize', handleResize, false);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_containers_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("article", {
    className: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_homes_slider__WEBPACK_IMPORTED_MODULE_8__["HeroSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "section section-home-message",
    ref: homeMessageSectionEl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "home-primary-message",
    ref: homePrimaryMessageEl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "ENJOY"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "UNIFORM")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u3092\u7740\u308B\u4EBA\u3092\u3082\u3063\u3068\u5FEB\u9069\u306B\u3002"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "\u3082\u3063\u3068\u697D\u3057\u304F\u3002"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "home-secondary-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "\u5800\u53E3\u7E4A\u7DAD\u5DE5\u696D\u306F\u3001\u6226\u5F8C\u307E\u3082\u306A\u304F\u7E2B\u88FD\u4E8B\u696D\u3092\u7ACB\u3061\u4E0A\u3052\u307E\u3057\u305F\u3002"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u3092\u7E2B\u88FD\u30FB\u8CA9\u58F2\u3059\u308B\u4E00\u65B9\u3067\u5E73\u6210\u306B\u5165\u308A\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u8A2D\u5099\u3092 \u6574\u3048\u307E\u3057\u305F\u3002"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "\u73FE\u5728\u3001\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u306E\u7E2B\u88FD\u30FB\u8CA9\u58F2\u30FB\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u30FB\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u4ED8\u30EA\u30FC\u30B9\uFF08\u30EA\u30CD\u30F3\u30B5\u30D7\u30E9\u30A4\uFF09\u3092 \u4E2D\u5FC3\u306B\u5C55\u958B\u3044\u305F\u3057\u3066\u304A\u308A\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "read-more-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "About"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "ja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "\u5800\u53E3\u7E4A\u7DAD\u5DE5\u696D\u306B\u3064\u3044\u3066")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("main", {
    className: "main-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "section-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "section-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "ja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "\u79C1\u305F\u3061\u306E\u4E8B\u696D"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "Service"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "service-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, Services.map(function (service, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_homes_service_item__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, service, {
      index: '0' + (index + 1)
    }), {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "section-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "section-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "ja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "\u304A\u77E5\u3089\u305B"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "News and Column")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "recent-entries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "recent-entry-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, posts.map(function (post, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_homes_recent_post_item__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, post, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }));
  }))))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "contact-banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "ja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, "\u3054\u76F8\u8AC7\u306F\u3042\u308A\u307E\u3059\u304B\uFF1F"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, "CONTACT")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_shares_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(function (state) {
  return state;
})(Home));

/***/ })

})
//# sourceMappingURL=index.js.ca86ad5f1c99d2872e8b.hot-update.js.map