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





var Home = function Home(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    image_src: '/static/images/service/machine-quilting.jpg',
    title: '縫製・販売',
    summary: '生地・デザインの選定からユニフォームを縫製・販売',
    label_en: 'Sewing & Sales',
    label_ja: '縫製・販売について',
    link: '/service/sewing'
  }, {
    image_src: '/static/images/service/name.jpg',
    title: 'ユニフォーム販売',
    summary: '各種メーカー品を特別価格にて販売',
    label_en: 'Sale',
    label_ja: '販売について',
    link: '/service/sale'
  }, {
    image_src: '/static/images/service/iron.jpg',
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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      rectTop = _useState6[0],
      setRectTop = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    top: null,
    height: null
  }),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      visualMessageOffset = _useState8[0],
      setVisualMessageOffset = _useState8[1];

  var stopperEl = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var visualMessageEl = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (stopperEl.current !== null) {
      //const windowHeight = window.outerHeight;
      var _rectTop = stopperEl.current.getBoundingClientRect().top;
      setRectTop(_rectTop);
    }

    if (visualMessageEl.current) {
      var _visualMessageEl$curr = visualMessageEl.current,
          offsetTop = _visualMessageEl$curr.offsetTop,
          offsetHeight = _visualMessageEl$curr.offsetHeight;
      setVisualMessageOffset({
        top: offsetTop,
        height: offsetHeight
      });
    }

    document.body.classList.add('in');
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    //const windowHeight = window.outerHeight;
    if (stopperEl.current !== null) {
      //const windowHeight = window.outerHeight;
      var _rectTop2 = stopperEl.current.getBoundingClientRect().top;
      setRectTop(_rectTop2);
    }

    if (visualMessageEl.current && stopperEl.current) {
      //const { scrollTop } = props.app;
      var top = visualMessageOffset.top,
          height = visualMessageOffset.height;

      if (rectTop !== null && top !== null && height !== null) {
        var rectTopp = stopperEl.current.getBoundingClientRect().top;
        console.log(rectTopp + props.app.scrollTop, top + height + props.app.scrollTop);
      }
    }
  }, [props.app.scrollTop]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_containers_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("article", {
    className: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_homes_slider__WEBPACK_IMPORTED_MODULE_8__["HeroSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "section section-home-message d-flex justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "home-primary-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "ENJOY"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "UNIFORM")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u3092\u7740\u308B\u4EBA\u3092\u3082\u3063\u3068\u5FEB\u9069\u306B\u3002"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "\u3082\u3063\u3068\u697D\u3057\u304F\u3002"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "home-secondary-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "\u5800\u53E3\u7E4A\u7DAD\u5DE5\u696D\u306F\u3001\u6226\u5F8C\u307E\u3082\u306A\u304F\u7E2B\u88FD\u4E8B\u696D\u3092\u7ACB\u3061\u4E0A\u3052\u307E\u3057\u305F\u3002"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u3092\u7E2B\u88FD\u30FB\u8CA9\u58F2\u3059\u308B\u4E00\u65B9\u3067\u5E73\u6210\u306B\u5165\u308A\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u8A2D\u5099\u3092 \u6574\u3048\u307E\u3057\u305F\u3002"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "\u73FE\u5728\u3001\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u306E\u7E2B\u88FD\u30FB\u8CA9\u58F2\u30FB\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u30FB\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u4ED8\u30EA\u30FC\u30B9\uFF08\u30EA\u30CD\u30F3\u30B5\u30D7\u30E9\u30A4\uFF09\u3092 \u4E2D\u5FC3\u306B\u5C55\u958B\u3044\u305F\u3057\u3066\u304A\u308A\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "read-more-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "About"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "ja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "\u5800\u53E3\u7E4A\u7DAD\u5DE5\u696D\u306B\u3064\u3044\u3066")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("main", {
    className: "main-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "section-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "section-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "ja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "\u79C1\u305F\u3061\u306E\u4E8B\u696D"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Service"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "service-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, Services.map(function (service, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_homes_service_item__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, service, {
      index: '0' + (index + 1)
    }), {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "section-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "section-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "ja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "\u304A\u77E5\u3089\u305B"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "News and Column")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "recent-entries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "recent-entry-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, posts.map(function (post, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_homes_recent_post_item__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, post, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }));
  }))))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "contact-banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "ja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "\u3054\u76F8\u8AC7\u306F\u3042\u308A\u307E\u3059\u304B\uFF1F"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "CONTACT")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_shares_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(function (state) {
  return state;
})(Home));

/***/ })

})
//# sourceMappingURL=index.js.921d731e2896989ff6f6.hot-update.js.map