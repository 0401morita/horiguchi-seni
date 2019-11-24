webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./src/components/contacts/form.tsx":
/*!******************************************!*\
  !*** ./src/components/contacts/form.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./src/components/icons/index.ts");
var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/src/components/contacts/form.tsx";




var ContactForm = function ContactForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-row mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "formLabel col-md-4 mb-2 mb-md-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "\u4EF6\u540D", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "formLabel__tips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\u5FC5\u9808")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "type",
    component: "select",
    className: "form-control form-control-lg col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "lease",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u30EA\u30FC\u30B9\u306B\u3064\u3044\u3066"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "sewing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\u7E2B\u88FD\u30FB\u8CA9\u58F2\u306B\u3064\u3044\u3066"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "linensupply",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\u30EA\u30CD\u30F3\u30B5\u30D7\u30E9\u30A4\u306B\u3064\u3044\u3066"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "other",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\u305D\u306E\u4ED6"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-row mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "formLabel col-md-4 mb-2 mb-md-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\u304A\u540D\u524D", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "formLabel__tips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\u5FC5\u9808")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "name",
    component: "input",
    type: "text",
    placeholder: "\u304A\u540D\u524D",
    className: "form-control form-control-lg col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-row mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "formLabel col-md-4 mb-2 mb-md-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Email", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "formLabel__tips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\u5FC5\u9808")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "email",
    component: "input",
    type: "text",
    placeholder: "\u8FD4\u4FE1\u5148\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    className: "form-control form-control-lg col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "formLabel col-md-4 mb-2 mb-md-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "formLabel__tips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "\u5FC5\u9808")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "body",
    component: "textarea",
    type: "textarea",
    rows: "5",
    placeholder: "\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9",
    className: "form-control form-control-lg col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "formFooter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-black btn-lg formFooter__submit",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__["Plane"], {
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), "\u9001\u4FE1\u3059\u308B")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: 'contactForm'
})(ContactForm));

/***/ })

})
//# sourceMappingURL=contact.js.476a0e7462581e17114d.hot-update.js.map