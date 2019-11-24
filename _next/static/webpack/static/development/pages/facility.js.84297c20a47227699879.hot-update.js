webpackHotUpdate("static/development/pages/facility.js",{

/***/ "./src/components/shares/slider.tsx":
/*!******************************************!*\
  !*** ./src/components/shares/slider.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/src/components/shares/slider.tsx";



var Caroucel = function Caroucel(_ref) {
  var children = _ref.children;
  var sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  var SlickEl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(SlickEl.current);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sliderSettings, {
    ref: SlickEl,
    afterChange: function afterChange(w) {
      console.log(w, 'swipe');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Caroucel);

/***/ })

})
//# sourceMappingURL=facility.js.84297c20a47227699879.hot-update.js.map