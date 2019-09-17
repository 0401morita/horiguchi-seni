webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/homes/slider.tsx":
/*!*****************************************!*\
  !*** ./src/components/homes/slider.tsx ***!
  \*****************************************/
/*! exports provided: HeroSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSection", function() { return HeroSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_slick_carousel_slick_slick_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/slick-carousel/slick/slick.scss */ "./node_modules/slick-carousel/slick/slick.scss");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/src/components/homes/slider.tsx";
 //import Slider from 'react-slick';


var HeroSection = function HeroSection() {
  /*const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    fade: true
  };*/
  var HomeVisualRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleEvent = function handleEvent() {
    console.log('load');
    var windowHeight = window.outerHeight;
    var scrollY = window.scrollY;
    var position = scrollY + windowHeight;

    if (HomeVisualRef.current && position > HomeVisualRef.current.offsetTop) {
      HomeVisualRef.current.classList.add('in');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('load', handleEvent, false);
    window.addEventListener('DOMContentLoaded', handleEvent, false);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero-section home-visual",
    ref: HomeVisualRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "test-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-visual-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "ENJOY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "UNIFORM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u3092\u7740\u308B\u4EBA\u3092\u3082\u3063\u3068\u5FEB\u9069\u306B\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "\u3082\u3063\u3068\u697D\u3057\u304F\u3002")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sailing-scroll-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Scroll"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))));
};

/***/ })

})
//# sourceMappingURL=index.js.6c90bed1dfbbd271621a.hot-update.js.map