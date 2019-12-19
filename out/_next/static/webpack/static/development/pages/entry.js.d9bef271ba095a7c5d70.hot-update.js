webpackHotUpdate("static/development/pages/entry.js",{

/***/ "./pages/entry/index.tsx":
/*!*******************************!*\
  !*** ./pages/entry/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/icons */ "./src/components/icons/index.ts");
/* harmony import */ var _src_containers_sailingScrollDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/containers/sailingScrollDown */ "./src/containers/sailingScrollDown.ts");
/* harmony import */ var _src_styles_home_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/styles/home.scss */ "./src/styles/home.scss");
/* harmony import */ var _src_styles_home_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_styles_home_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/pages/entry/index.tsx";







var EntryListItem = function EntryListItem() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: "entryItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "entryItem__eyecatch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://horiguchi-seni.com/static/images/service/winding.jpg",
    alt: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entryItem__summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\u590F\u5B63\u4F11\u6687\u306E\u304A\u77E5\u3089\u305B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "2019/10/21")));
};

var Entries = function Entries(_ref) {
  var service = _ref.service;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.body.classList.add('in');
  }, []);
  var items = [];

  for (var i = 0; i < 5; i++) {
    items.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EntryListItem, {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-image",
    style: {
      backgroundImage: "url(http://horiguchi-seni.com/static/images/service/winding.jpg)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "mainContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_containers_sailingScrollDown__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "News",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content mainContainer__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contentHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "contentHeader__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "News"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "\u304A\u77E5\u3089\u305B"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, items), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contentFooter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-black contentFooter__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\u304A\u554F\u3044\u5408\u308F\u305B", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowRightIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return state;
})(Entries));

/***/ })

})
//# sourceMappingURL=entry.js.d9bef271ba095a7c5d70.hot-update.js.map