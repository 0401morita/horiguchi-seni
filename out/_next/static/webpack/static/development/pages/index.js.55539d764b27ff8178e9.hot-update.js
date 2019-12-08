webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/shares/sailingScrollDown.tsx":
/*!*****************************************************!*\
  !*** ./src/components/shares/sailingScrollDown.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_event_listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-event-listener */ "./node_modules/react-event-listener/dist/react-event-listener.cjs.js");
/* harmony import */ var react_event_listener__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_event_listener__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/src/components/shares/sailingScrollDown.tsx";



var SailingScrollDown = function SailingScrollDown(_ref) {
  var text = _ref.text,
      scrollTop = _ref.scrollTop,
      windows = _ref.windows;

  var handleScroll = function handleScroll() {
    var vw = windows.vw,
        vh = windows.vh;
    var fixed = scrollTop <= windows.height - 12 * vh - 169 - 76;
    console.log(scrollTop, windows.height, windows.height - 12 * vh - 169 - 76);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sailingScrollDown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_event_listener__WEBPACK_IMPORTED_MODULE_1___default.a, {
    target: "window",
    onScroll: handleScroll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sailingScrollDown__txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sailingScrollDown__arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SailingScrollDown);

/***/ })

})
//# sourceMappingURL=index.js.55539d764b27ff8178e9.hot-update.js.map