webpackHotUpdate("static/development/pages/entry/[slug].js",{

/***/ "./src/components/entries/show.tsx":
/*!*****************************************!*\
  !*** ./src/components/entries/show.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/src/components/entries/show.tsx";



var Entry = function Entry(_ref) {
  var wpPost = _ref.wpPost,
      getWpPostBySlug = _ref.getWpPostBySlug;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var slug = router.query.slug;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(wpPost);
    if (typeof slug !== 'string') return;
    getWpPostBySlug(slug);
    console.log(wpPost);
  }, []);

  if (wpPost.data) {
    var title = wpPost.data.title;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "entryList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contentHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "contentHeader__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "en",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "ja",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "\u79C1\u305F\u3061\u306E\u4E8B\u696D"))), title.rendered);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "404");
};

/* harmony default export */ __webpack_exports__["default"] = (Entry);

/***/ })

})
//# sourceMappingURL=[slug].js.57c56a0ffbaf15173941.hot-update.js.map