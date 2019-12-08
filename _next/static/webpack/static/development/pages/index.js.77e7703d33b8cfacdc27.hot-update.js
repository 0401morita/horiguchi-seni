webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/shares/sailingScrollDown.tsx":
/*!*****************************************************!*\
  !*** ./src/components/shares/sailingScrollDown.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_event_listener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-event-listener */ "./node_modules/react-event-listener/dist/react-event-listener.cjs.js");
/* harmony import */ var react_event_listener__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_event_listener__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/src/components/shares/sailingScrollDown.tsx";




var SailingScrollDown = function SailingScrollDown(_ref) {
  var text = _ref.text,
      scrollTop = _ref.scrollTop,
      windows = _ref.windows;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isFixed = _useState2[0],
      setIsFixed = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isFeature = _useState4[0],
      setIsFeature = _useState4[1];

  var handleScroll = function handleScroll() {
    var width = windows.width,
        vw = windows.vw,
        vh = windows.vh;
    var isSmartPhone = width < 768;
    var headerHeight = 76;

    if (isSmartPhone) {
      headerHeight = 56;
    }

    var fixed = windows.height - 10 * vh - 173 - headerHeight;

    if (scrollTop >= fixed) {
      setIsFixed(true);

      if (scrollTop * (5 * vw) >= fixed) {
        setIsFeature(true);
      } else {
        setIsFeature(false);
      }
    } else {
      setIsFixed(false);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])({
      sailingScrollDown: true,
      fixed: isFixed,
      feature: isFeature
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_event_listener__WEBPACK_IMPORTED_MODULE_3___default.a, {
    target: "window",
    onScroll: handleScroll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "sailingScrollDown__txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "sailingScrollDown__arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SailingScrollDown);

/***/ })

})
//# sourceMappingURL=index.js.77e7703d33b8cfacdc27.hot-update.js.map