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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_styles_home_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/styles/home.scss */ "./src/styles/home.scss");
/* harmony import */ var _src_styles_home_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_styles_home_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_components_homes_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/homes/slider */ "./src/components/homes/slider.tsx");
/* harmony import */ var _src_components_homes_service_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/homes/service_item */ "./src/components/homes/service_item.tsx");
/* harmony import */ var _src_components_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/icons */ "./src/components/icons/index.ts");



var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/pages/index.tsx";








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

  var windowState = {
    width: 0,
    height: 0,
    messageVw: 0,
    homePrimaryMessageHeight: 0,
    homeMessageSectionHeight: 0
  };
  var homeMessageSectionEl = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var primaryMessageEl = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
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
        height: window.innerHeight,
        messageVw: Math.floor(window.innerWidth * 0.06),
        homePrimaryMessageHeight: primaryMessageEl.current ? primaryMessageEl.current.clientHeight : 0,
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
    var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

    if (primaryMessageEl.current && homeMessageSectionEl.current) {
      var _windowState = windowState,
          windowWidth = _windowState.width,
          windowHeight = _windowState.height,
          messageVw = _windowState.messageVw,
          homePrimaryMessageHeight = _windowState.homePrimaryMessageHeight,
          homeMessageSectionHeight = _windowState.homeMessageSectionHeight;
      var fixPosition = 0;
      var scrollBottom = 0;
      var homeMessageSectionTop = homeMessageSectionEl.current.offsetTop;

      if (windowWidth >= 768) {
        scrollBottom = scrollTop + window.innerHeight;
        fixPosition = messageVw + homeMessageSectionTop + homeMessageSectionHeight / 2 + homePrimaryMessageHeight / 2;
      } else {
        scrollBottom = scrollTop + window.innerHeight;
        fixPosition = messageVw + homeMessageSectionTop + homePrimaryMessageHeight / 2 + 180 / 2;
        console.log(fixPosition, scrollBottom);
      }

      if (fixPosition < scrollBottom) {
        document.body.classList.add('fix-message');
      } else {
        document.body.classList.remove('fix-message');
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log(primaryMessageEl.current);
    windowState = {
      width: window.innerWidth,
      height: screen.height,
      messageVw: Math.floor(window.innerWidth * 0.06),
      homePrimaryMessageHeight: primaryMessageEl.current ? primaryMessageEl.current.clientHeight : 0,
      homeMessageSectionHeight: homeMessageSectionEl.current ? homeMessageSectionEl.current.clientHeight : 0
    };
    document.body.classList.add('in');
    var userAgent = navigator.userAgent;

    if (userAgent.indexOf('iPhone') >= 0 || userAgent.indexOf('iPad') >= 0 || userAgent.indexOf('Android') >= 0) {
      window.addEventListener('orientationchange', handleResize);
    } else {
      window.addEventListener('resize', handleResize, false);
    }

    window.addEventListener('load', handleScroll, false);
    window.addEventListener('scroll', handleScroll, false);
    window.addEventListener('touchmove', handleScroll, false);
    return function () {
      window.removeEventListener('load', handleScroll, false);
      window.removeEventListener('scroll', handleScroll, false);
      window.removeEventListener('touchmove', handleScroll, false);
      window.removeEventListener('resize', handleResize, false);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_homes_slider__WEBPACK_IMPORTED_MODULE_7__["HeroSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("main", {
    className: "mainContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mainContainer__index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Company - \u4F1A\u793E\u6982\u8981"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "content mainContainer__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "homeMessage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "homeMessage__primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "primaryMessage",
    ref: primaryMessageEl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "primaryMessage__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "ENJOY"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "UNIFORM")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "primaryMessage__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u3092\u7740\u308B\u4EBA\u3092\u3082\u3063\u3068\u5FEB\u9069\u306B\u3002"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "\u3082\u3063\u3068\u697D\u3057\u304F\u3002")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "homeMessage__secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "secondaryMessage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "\u5800\u53E3\u7E4A\u7DAD\u5DE5\u696D\u306F\u3001\u6226\u5F8C\u307E\u3082\u306A\u304F\u7E2B\u88FD\u4E8B\u696D\u3092\u7ACB\u3061\u4E0A\u3052\u307E\u3057\u305F\u3002"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u3092\u7E2B\u88FD\u30FB\u8CA9\u58F2\u3059\u308B\u4E00\u65B9\u3067\u5E73\u6210\u306B\u5165\u308A\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u8A2D\u5099\u3092 \u6574\u3048\u307E\u3057\u305F\u3002"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "\u73FE\u5728\u3001\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u306E\u7E2B\u88FD\u30FB\u8CA9\u58F2\u30FB\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u30FB\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u4ED8\u30EA\u30FC\u30B9\uFF08\u30EA\u30CD\u30F3\u30B5\u30D7\u30E9\u30A4\uFF09\u3092 \u4E2D\u5FC3\u306B\u5C55\u958B\u3044\u305F\u3057\u3066\u304A\u308A\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "read-more-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "About"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "ja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "\u5800\u53E3\u7E4A\u7DAD\u5DE5\u696D\u306B\u3064\u3044\u3066"))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "contentInnerHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "contentInnerHeader__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "ja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "\u79C1\u305F\u3061\u306E\u4E8B\u696D"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Service"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "service-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, Services.map(function (service, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_homes_service_item__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, service, {
      index: '0' + (index + 1)
    }), {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "contentFooter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "btn btn-black contentFooter__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "\u304A\u554F\u3044\u5408\u308F\u305B", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_9__["ArrowRightIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (state) {
  return state;
})(Home));

/***/ })

})
//# sourceMappingURL=index.js.0bda0888d502c8d1c2d7.hot-update.js.map