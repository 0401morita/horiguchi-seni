module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__(/*! ../client/router */ "./node_modules/next/dist/client/router.js");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    let {
      Component,
      ctx
    } = _ref;
    const pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  getChildContext() {
    return {
      router: (0, _router.makePublicRouterInstance)(this.props.router)
    };
  } // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level


  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps
    } = this.props;
    const url = createUrl(router);
    return _react.default.createElement(Container, null, _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    })));
  }

} // @deprecated noop for now until removal


exports.default = App;
App.childContextTypes = {
  router: _propTypes.default.object
};
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

function Container(p) {
  return p.children;
}

const warnUrl = (0, _utils.execOnce)(() => {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: () => {
      warnUrl();
      router.back();
    },
    push: (url, as) => {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_styles_common_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/styles/common.scss */ "./src/styles/common.scss");
/* harmony import */ var _src_styles_common_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_styles_common_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/reducers */ "./src/reducers/index.ts");
/* harmony import */ var _src_actions_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/actions/app */ "./src/actions/app.ts");
/* harmony import */ var _src_containers_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/containers/header */ "./src/containers/header.ts");
/* harmony import */ var _src_components_shares_footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/shares/footer */ "./src/components/shares/footer.tsx");
/* harmony import */ var _src_components_recent_entries_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/recent_entries/list */ "./src/components/recent_entries/list.tsx");



var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/pages/_app.tsx";














const makeStore = () => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(_src_reducers__WEBPACK_IMPORTED_MODULE_11__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_7___default.a));
};

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_8___default.a {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleScroll", () => {
      const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) || 0;
      const props = this.props;
      const {
        app
      } = props.store.getState();

      const updateState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, app, {
        windows: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, app.windows, {
          scrollTop: scrollTop
        })
      });

      this.props.store.dispatch(_src_actions_app__WEBPACK_IMPORTED_MODULE_12__["actions"].setApp(updateState));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleResize", () => {
      let timer = 200;

      if (timer > 0) {
        clearTimeout(timer);
      }

      const props = this.props;
      timer = setTimeout(function () {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) || 0;
        props.store.dispatch(_src_actions_app__WEBPACK_IMPORTED_MODULE_12__["actions"].setApp({
          windows: {
            scrollTop: scrollTop,
            width: width,
            height: height,
            vw: Math.floor(width * 0.01),
            vh: Math.floor(height * 0.01)
          }
        }));
      }, timer);
    });
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {
      pageProps
    };
  }

  componentDidUpdate() {
    this.props.store.dispatch(Object(_src_actions_app__WEBPACK_IMPORTED_MODULE_12__["closeMenu"])());
  }

  componentDidMount() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) || 0;
    this.props.store.dispatch(_src_actions_app__WEBPACK_IMPORTED_MODULE_12__["actions"].setApp({
      windows: {
        scrollTop: scrollTop,
        width: width,
        height: height,
        vw: Math.floor(width * 0.01),
        vh: Math.floor(height * 0.01)
      }
    }));
    document.addEventListener('scroll', this.handleScroll, false);
    window.addEventListener('resize', this.handleResize, false);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_8__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
      key: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "\u682A\u5F0F\u4F1A\u793E \u5800\u53E3\u7E4A\u7DAD\u5DE5\u696D"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1,minimal-ui",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_containers_header__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
      className: "section sectionRecentEntries",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "col-md-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "section-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "ja",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, "\u304A\u77E5\u3089\u305B"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "en",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, "News and Column")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "col-md-7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_recent_entries_list__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_shares_footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9___default()(makeStore)(MyApp));

/***/ }),

/***/ "./src/actions/app.ts":
/*!****************************!*\
  !*** ./src/actions/app.ts ***!
  \****************************/
/*! exports provided: actions, setScrollTop, closeMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScrollTop", function() { return setScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeMenu", function() { return closeMenu; });
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-fsa */ "typescript-fsa");
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa__WEBPACK_IMPORTED_MODULE_0__);

//import { State } from '../reducers';
//import { Dispatch } from 'redux';
//import { CommonState } from '../reducers/common';
const actionCreator = typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default()();
const actions = {
  setApp: actionCreator('SET_APP')
}; //
// Set ScrollTop
//

const setScrollTop = scrollTop => dispatch => {
  dispatch(actions.setApp({
    scrollTop: scrollTop
  }));
};
const closeMenu = () => dispatch => {
  dispatch(actions.setApp({
    open_menu: false
  }));
  document.body.classList.remove('open-menu');
};

/***/ }),

/***/ "./src/actions/header.ts":
/*!*******************************!*\
  !*** ./src/actions/header.ts ***!
  \*******************************/
/*! exports provided: toggleMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMenu", function() { return toggleMenu; });
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-fsa */ "typescript-fsa");
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/actions/app.ts");

 //import { CommonState } from '../reducers/common';

const actionCreator = typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default()(); //
// ToggleMenu
//

const toggleMenu = () => (dispatch, getState) => {
  dispatch(_app__WEBPACK_IMPORTED_MODULE_1__["actions"].setApp({
    open_menu: !getState().app.open_menu
  }));

  if (getState().app.open_menu) {
    document.body.classList.add('open-menu');
  } else {
    document.body.classList.remove('open-menu');
  }
};

/***/ }),

/***/ "./src/actions/wp.ts":
/*!***************************!*\
  !*** ./src/actions/wp.ts ***!
  \***************************/
/*! exports provided: actions, getWpPostBySlug, getWpPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWpPostBySlug", function() { return getWpPostBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWpPosts", function() { return getWpPosts; });
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-fsa */ "typescript-fsa");
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



//import { Dispatch } from 'redux';
//import { CommonState } from '../reducers/common';

/*
 * Action Setting
 */
const axios = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: 'https://wp.horiguchi-seni.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});
const actionCreator = typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default()(); //
// Actions
//

const actions = {
  setWp: actionCreator('SET_WP'),
  setWpPost: actionCreator('SET_WP_POST'),
  setWpPosts: actionCreator('SET_WP_POSTS'),
  setWpPostsHeaders: actionCreator('SET_WP_POSTS_HEADERS')
}; //
// Get Post By Slug
//

const getWpPostBySlug = slug => {
  return (dispatch, getState) => {
    axios.get(`/wp-json/wp/v2/posts/?_embed&slug=${slug}`).then(({
      status,
      data
    }) => {
      console.log(data[0]);

      if (status === 200 && data.length) {
        dispatch(actions.setWpPost(data[0]));
      }
    }).catch(({
      response
    }) => {});
  };
}; //
// Get Posts
//

const getWpPosts = () => {
  return (dispatch, getState) => {
    let url = '/wp-json/wp/v2/posts/?_embed';
    const search = location.search;
    const parseSearch = Object(query_string__WEBPACK_IMPORTED_MODULE_1__["parse"])(search);

    if (parseSearch.page) {
      url += '&' + Object(query_string__WEBPACK_IMPORTED_MODULE_1__["stringify"])(parseSearch);
    }

    dispatch(actions.setWp({
      isLoading: true,
      isError: false
    }));
    axios.get(url).then(res => {
      const {
        status,
        data,
        headers,
        config
      } = res;

      if (status === 200 && data.length) {
        dispatch(actions.setWpPostsHeaders(headers));
        dispatch(actions.setWpPosts(data));
      }
    }).catch(res => {
      dispatch(actions.setWp({
        isError: true
      }));
    }).finally(() => {
      setTimeout(() => {
        dispatch(actions.setWp({
          isLoading: false
        }));
      }, 500);
    });
  };
};

/***/ }),

/***/ "./src/components/icons/brand.tsx":
/*!****************************************!*\
  !*** ./src/components/icons/brand.tsx ***!
  \****************************************/
/*! exports provided: IconBrand, BrandBoxIcon, BrandIconBase, BrandIcon, BrandIcon3Base, BrandIcon3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBrand", function() { return IconBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandBoxIcon", function() { return BrandBoxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandIconBase", function() { return BrandIconBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandIcon", function() { return BrandIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandIcon3Base", function() { return BrandIcon3Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandIcon3", function() { return BrandIcon3; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/src/components/icons/brand.tsx";


const IconBrand = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 152.32 44",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    y: "32",
    width: "38.08",
    height: "12",
    fill: "#da4741",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "76.16",
    y: "32",
    width: "38.08",
    height: "12",
    fill: "#b3b0a2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "38.08",
    y: "32",
    width: "38.08",
    height: "12",
    fill: "#2c353f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "114.24",
    y: "32",
    width: "38.08",
    height: "12",
    fill: "#dd7c37",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M11.24,10c0,4.28-.53,10.3-4.22,13.86A10.31,10.31,0,0,0,4.74,22a11.67,11.67,0,0,0,3.1-5.79c-2.31,1.16-4.74,2.31-6.76,3.28L0,16.37c.82-.28,1.82-.67,3-1.1V9H.54V6.1H3V.36H5.76V6.1H7.81V9h-2v5.15l1.82-.77L8,15.21A31.28,31.28,0,0,0,8.4,9.94V.85H23.26V8.43h-12Zm12.3,6.48v7.38H20.87V22.9H13.81v1H11.19V16.44h2.62v3.92H16V15.57H11.86V9.78h2.38v3.41H16V8.86h2.64v4.33h2V9.78h2.49v5.79H18.67v4.79h2.2V16.44ZM11.24,3.59v2.1h9.12V3.59Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M47.85,2.54V23.38H44.49v-2H30.91v2.08h-3.2V2.54ZM44.49,18.21V5.63H30.91V18.21Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M54.43,15.37a26.72,26.72,0,0,1-1.26,6.55,15.68,15.68,0,0,0-2.07-1,19.84,19.84,0,0,0,1-5.94ZM75.12,12a24.34,24.34,0,0,1-2.92,6.55c.28,1.44.62,2.26,1,2.28s.56-1.12.69-3a8.2,8.2,0,0,0,1.77,1.54C75.05,23.13,74,24,73.1,24c-1.21,0-2-1.15-2.67-3.13a17.82,17.82,0,0,1-3.4,3A10.43,10.43,0,0,0,65.16,22a12.7,12.7,0,0,0,1.54-1.1c-2.46.59-4.9,1.15-6.87,1.59L59.09,20l-.85.28a28.68,28.68,0,0,0-1.18-4.76l2-.62a31.65,31.65,0,0,1,1.25,4.66l-.53.18c.56-.07,1.2-.2,1.89-.3V16.73l-1.43.38a17.76,17.76,0,0,0-.36-3.2l-1.74.74a12.43,12.43,0,0,0-.29-1.36l-.84.08V24H54.53V13.6l-3.1.26-.26-2.67,1.67-.07c.38-.57.77-1.21,1.18-1.87a22.92,22.92,0,0,0-2.69-3.38l1.25-2.16c.18.16.34.34.51.52A29,29,0,0,0,54.5.05l2.56.82C56.3,2.59,55.43,4.56,54.68,6a10.07,10.07,0,0,1,.69.87,40.23,40.23,0,0,0,1.8-3.74l2.38,1c-.87,1.51-1.9,3.23-2.92,4.81l1.69-.64A25.21,25.21,0,0,1,59.7,11.5L61,11.14a21.88,21.88,0,0,1,.69,2.79V9.61H59.19V7.22h3.66V4.82H60V2.54h2.81V0h2.79V2.54h2.77V4.82H65.64v2.4H69C68.9,5,68.87,2.61,68.85.08h2.43V1.84l1.92-.76a15.89,15.89,0,0,1,2.18,4.4l-2.33.95a16.22,16.22,0,0,0-1.77-4c0,1.67,0,3.31,0,4.84h4V9.61H71.41c.07,1.69.15,3.27.28,4.66a21.62,21.62,0,0,0,1-2.9Zm-18-1.08q-.35-.81-.69-1.59c-.36.59-.74,1.16-1.1,1.69Zm6.63,8.17.93-.15V9.61h-.93Zm5.43-7.58c-.05-.61-.07-1.25-.1-1.89H66.67V14.8c.31-1.25.59-2.69.74-3.76Zm-.61,7.61a16.93,16.93,0,0,0,1.2-1.46c-.25-1.54-.41-3.33-.53-5.33-.57,1.66-1.13,3.56-1.62,4.79l-.92-.31v1.74l1.79-.35Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M80.32,15.42A23.44,23.44,0,0,1,78.81,22,12.44,12.44,0,0,0,76.58,21,18.87,18.87,0,0,0,77.89,15ZM101,22.77H91.08V24H88.26V9.53A15.48,15.48,0,0,1,87.08,11a17.92,17.92,0,0,0-1.66-1.82,20.91,20.91,0,0,1,1.82,4.56L85,14.75c-.08-.43-.23-.94-.39-1.51l-1.28.1V24H80.68V13.55l-3.56.28-.31-2.64,1.85-.1c.38-.46.76-1,1.15-1.51A24.18,24.18,0,0,0,76.89,6l1.48-2.05c.18.18.39.36.59.54A31,31,0,0,0,80.81.05L83.45,1a58.48,58.48,0,0,1-2.9,5.23,11.33,11.33,0,0,1,.82,1,42.06,42.06,0,0,0,2.31-4.15L86.16,4.2C84.75,6.35,83,8.89,81.4,10.94l2.22-.13c-.25-.56-.53-1.13-.81-1.64L85,8.27l.28.49A25.1,25.1,0,0,0,90,0l2.9.77C92.33,2.15,91.69,3.61,91,5.05h3A27,27,0,0,0,95.69.36l3.17.69c-.64,1.36-1.3,2.79-2,4h3.74V7.71h-4V10h3.27v2.64H96.64V15H100v2.64H96.64v2.49H101ZM85.78,14.91a21,21,0,0,1,1.38,4.79l-2.31.74a21.6,21.6,0,0,0-1.25-4.89Zm5.3-7.2V10h2.84V7.71Zm2.84,4.94H91.08V15h2.84Zm-2.84,7.46h2.84V17.62H91.08Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M126.3,19.11v3.07H103V19.11h9.76V5.87H104.4V2.69h20.46V5.87h-8.61V19.11Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M144.2,18.11a22.86,22.86,0,0,0,8.12,2.79,14.49,14.49,0,0,0-2,2.77,22,22,0,0,1-8.61-4.33V24h-3V19.49a24.32,24.32,0,0,1-8.59,4.15,13.83,13.83,0,0,0-1.94-2.53,26.92,26.92,0,0,0,8.09-3h-7.35V15.6h9.79V14.47h-7.38v-2.2h7.38V11.12H130V8.73h4.86a10.63,10.63,0,0,0-.87-2l.31-.06H129V4.2h3.43A23,23,0,0,0,130.8,1l2.61-.89a19,19,0,0,1,2,3.61l-1.25.46h2.33V0h2.84V4.2h1.9V0H144V4.2h2.28l-.92-.28A20.35,20.35,0,0,0,147,.2l3.2.77c-.72,1.18-1.41,2.33-2,3.23h3.33V6.68h-4.82c-.41.75-.82,1.44-1.2,2.05h5v2.39h-8.89v1.15h7.69v2.2h-7.69V15.6h10v2.51Zm-7-11.43a12.5,12.5,0,0,1,.87,2l-.43.07h4.79c.3-.61.61-1.35.89-2.05Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }));
};
const BrandBoxIcon = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 240 240",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M69,61.43h3.85V85H69V80.38H35.12V85H31.29V61.43h3.83V77h15V57.51H33V38.56h3.68V54.24H50.15V32.76H28.67v9.55A121.28,121.28,0,0,1,26.79,65a81.65,81.65,0,0,1-6,18.67L18,81a69.2,69.2,0,0,0,4.41-12.82A149.18,149.18,0,0,1,.73,77.36L0,73.84q5.15-1.62,10-3.51V37.17H.24V33.82H10V14.54h3.92V33.82h9v3.35h-9V68.62q4.74-2,9.4-4.5a132,132,0,0,0,1.8-23.6V15.27H72.87V32.76H54V54.24H67.47V38.56h3.76V57.51H54V77H69ZM28.83,18.62V29.41h40V18.62Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M87.65,18.46H151V83.81h-4.16V78.34H91.74v5.47H87.65Zm4.09,56.37h55.14V22.06H91.74Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M180.94,35.78l3.35-.9a151.25,151.25,0,0,1,5,19.61l-3.35.65c-.38-2-.65-3.38-.82-4.09l-7.35.49V85.36h-3.67V51.79l-11.19.82-.17-3.52,4.17-.24q1.63-2.37,4.74-7.27-4.9-9.72-8.5-16.09l2.53-2.86c.27.49.7,1.26,1.27,2.33s1,1.86,1.27,2.4q4.32-8.16,7.27-14.86L178.81,14q-3.67,8.16-8.57,17.15,1.31,2.46,3.59,7,5.55-9.24,9.81-17.89l3.1,1.71a224.39,224.39,0,0,1-15.36,26.55l12.91-.82Q182.58,40.6,180.94,35.78ZM163.05,80a132,132,0,0,0,3.76-23l3.35.32a122,122,0,0,1-3.76,23.45Zm24.18-3.84-3.43.41q-.66-9.47-2.13-19.6l3.27-.66Q186.65,66.9,187.23,76.13Zm32-64.2h3.84q0,13,.74,23.28H238.2v3.43H224.07A213.59,213.59,0,0,0,226.93,61,77.93,77.93,0,0,0,234,43l3.19,1.39q-3.6,13.16-9.15,21.81a74.09,74.09,0,0,0,2.09,7.47A31.59,31.59,0,0,0,232,78.26c.52.92.94,1.44,1.27,1.55q2.21,0,3.59-16.42l3.19,1a84.15,84.15,0,0,1-1.64,12.42c-.7,3-1.42,5-2.16,6a3.25,3.25,0,0,1-2.57,1.39c-1.36,0-2.79-1.19-4.29-3.55a41.55,41.55,0,0,1-4.21-10.42,59.42,59.42,0,0,1-16.91,14.29l-2-2.85a58.8,58.8,0,0,0,11.11-8.17,133.24,133.24,0,0,1-31.37,9.47l-.33-3.51a114.48,114.48,0,0,0,11.52-2.53V38.64H187V35.21h14.79V24.26H188.94V20.91h12.83V11.52h3.92v9.39h11.44v3.35H205.69v11H220Q219.25,22.7,219.25,11.93ZM189.52,46.4l3.18-.66a223.88,223.88,0,0,1,3.19,22.31l-3.19.49A214.38,214.38,0,0,0,189.52,46.4Zm11.35,29.41c1.8-.49,3.81-1.15,6-2V38.47h-6Zm23.12-10a176.63,176.63,0,0,1-3.84-27.12h-9.47v33.9q3.75-1.4,6.69-2.7l.41,3.19A56,56,0,0,0,224,65.76Zm-12.34.57a112.31,112.31,0,0,0,3.92-21.65l3.19.25A109.56,109.56,0,0,1,214.92,67ZM226,16.91,229,15A134.41,134.41,0,0,1,238,30l-3.11,1.63A145.74,145.74,0,0,0,226,16.91Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.91,179.47l3.43-1A17.37,17.37,0,0,1,25,180.2c.25.77.43,1.28.53,1.56q8.58-11.35,12.83-27.7l3.84.74a110.6,110.6,0,0,1-3.68,11.44H54.73A75.93,75.93,0,0,0,60,154.06l3.76.74a75.69,75.69,0,0,1-4.82,11.44h15v3.59H58v14H72.45v3.43H58v14.62H72.45v3.43H58v14.95H75.4v3.51h-38v4.74h-4V176.94A82.2,82.2,0,0,1,28.1,185l-2.29-2.12a130.11,130.11,0,0,1,4.09,15.27l-3.43.74c-.22-1-.6-2.7-1.15-5l-8.41.57v33.82H13V194.74l-12.42.82-.16-3.51,5.14-.33q2.63-3.58,4.5-6.29-5.15-9.56-9.48-17l2.61-2.94c.66,1.09,1.69,2.89,3.11,5.39q3.92-6.85,8-15.52l3.43,1.55q-4.17,8.82-9.4,17.73c1.85,3.38,3.19,5.83,4,7.35q6.14-9.39,11-18.79l3.27,1.64a220.22,220.22,0,0,1-16.34,26.63l14.13-.9Q22.71,184.37,20.91,179.47ZM.73,222.93a124.68,124.68,0,0,0,4-23l3.59.33a122.52,122.52,0,0,1-4.08,23.44Zm28-2.13-3.67.33Q24,209.78,22.3,200.06l3.51-.58A214.35,214.35,0,0,1,28.75,220.8Zm25.41-37v-14H37.41v14Zm0,18V187.23H37.41v14.62Zm0,3.43H37.41v14.95H54.16Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M87.24,161.74h64.21v3.76H121.39v53.26H153.9v3.76H84.79v-3.76H117.3V165.5H87.24Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M234.93,205v3.35H206q11.19,8.16,31.85,14.37L236.32,226q-22-7-33.24-15.85v18.14H199V210.18Q187.8,219,165.75,226l-1.56-3.27q20.67-6.19,31.86-14.37H167.13V205H199v-7.68H171.06v-3.27H199v-7.51H168v-3.27h20.91q-2.94-7.35-5.64-12.91h-16.9V167h12.82a104.51,104.51,0,0,0-5.8-9.07l3.27-1.63a98,98,0,0,1,6.7,10.7h8.41V155.21h3.68V167h11.27V155.21h3.68V167h8.57a112.94,112.94,0,0,0,6.54-10.62l3.35,1.31a81.33,81.33,0,0,1-5.55,9.31h12.49v3.43H219a78.53,78.53,0,0,1-6,12.91h21.16v3.27h-31v7.51H231v3.27H203.08V205Zm-26.3-21.73a75.18,75.18,0,0,0,6.29-12.91H187.39A135.58,135.58,0,0,1,193,183.31Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }));
};
const BrandIconBase = ({
  className
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 151.56 24",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M36.69,10a.82.82,0,0,1-.58-1.4.78.78,0,0,1,.58-.26h.86a.15.15,0,0,0,.16-.17V4.67A1,1,0,0,1,39.47,4a1,1,0,0,1,.31.72V8.12c0,.11,0,.17.15.17h.57a.82.82,0,0,1,.59.26.8.8,0,0,1,0,1.16.84.84,0,0,1-.59.24h-.57q-.15,0-.15.18v6.08q0,.15.15.12c.42-.15.81-.29,1.16-.43h0l0,0a.22.22,0,0,0,.17-.2,32.9,32.9,0,0,0,.41-5.88V4.91a1.07,1.07,0,0,1,.33-.78,1,1,0,0,1,.77-.34h9.62a1,1,0,0,1,.77.34,1.06,1.06,0,0,1,.32.78V7.63a1.06,1.06,0,0,1-.32.78,1,1,0,0,1-.77.33h-2.7a.14.14,0,0,0-.16.16v3.91a.15.15,0,0,0,.16.17h1.33c.12,0,.18-.06.18-.17V10.72A.95.95,0,0,1,52.88,10a.94.94,0,0,1,.27.68v2.77a1.1,1.1,0,0,1-.32.78,1,1,0,0,1-.77.34H49.75a.14.14,0,0,0-.16.15V18a.14.14,0,0,0,.16.15h1.68a.14.14,0,0,0,.16-.15v-1.8a.92.92,0,0,1,.28-.69,1,1,0,0,1,1.39,0,.92.92,0,0,1,.28.69v3.68a1,1,0,0,1-1,1h-.11a.85.85,0,0,1-.86-.86c0-.08,0-.11-.12-.11H45.76c-.09,0-.14,0-.14.11a.85.85,0,0,1-.24.61.79.79,0,0,1-.6.25h-.13a.9.9,0,0,1-.69-.28,1,1,0,0,1-.27-.69V16.21a1,1,0,0,1,.27-.69.91.91,0,0,1,.69-.29.94.94,0,0,1,.69.29.92.92,0,0,1,.28.69V18q0,.15.18.15h1.66q.18,0,.18-.15V14.76q0-.15-.18-.15H45.23a1,1,0,0,1-.78-.34,1.07,1.07,0,0,1-.33-.78V10.7a.92.92,0,0,1,.94-.94.89.89,0,0,1,.64.27.93.93,0,0,1,.28.67v2.11a.15.15,0,0,0,.17.17h1.31c.12,0,.18-.06.18-.17V8.9c0-.11-.06-.16-.18-.16H43.71c-.12,0-.18,0-.18.16v2.19a27.81,27.81,0,0,1-.36,4.82A15.76,15.76,0,0,1,42,19.75a.68.68,0,0,1-.53.39.65.65,0,0,1-.63-.24,1.53,1.53,0,0,1-.21-1.74.87.87,0,0,0,.05-.12.59.59,0,0,1,0-.13.08.08,0,0,0-.1-.1c-1.43.54-2.66,1-3.68,1.23a.76.76,0,0,1-.64-.11.79.79,0,0,1-.35-.55.9.9,0,0,1,.15-.68,1,1,0,0,1,.59-.41c.19-.06.5-.14.92-.24.09,0,.14-.08.14-.21V10.13c0-.12-.06-.18-.16-.18Zm7-4.32V6.94q0,.18.15.18h7.49a.16.16,0,0,0,.18-.18V5.63c0-.12-.06-.17-.18-.17H43.84C43.74,5.46,43.69,5.51,43.69,5.63Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M57.63,20.55a1,1,0,0,1-.74-.31,1,1,0,0,1-.32-.75V5.63a1.07,1.07,0,0,1,.33-.78,1,1,0,0,1,.77-.33H71.2a1.13,1.13,0,0,1,1.11,1.11V19.49a1.06,1.06,0,0,1-1.07,1.06h-.06a1,1,0,0,1-1-1,.13.13,0,0,0-.15-.15H58.86c-.09,0-.14.05-.14.15a1,1,0,0,1-.3.73,1,1,0,0,1-.73.29Zm1.09-14v11c0,.12.06.18.16.18H70c.11,0,.17-.06.17-.18v-11A.15.15,0,0,0,70,6.34H58.88C58.78,6.34,58.72,6.39,58.72,6.51Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M75.42,19.81a.81.81,0,0,1-.48-.32.67.67,0,0,1-.12-.54c.26-1.44.44-2.77.54-4a.74.74,0,0,1,.26-.5.73.73,0,0,1,.52-.17.8.8,0,0,1,.51.27.74.74,0,0,1,.18.54,41.69,41.69,0,0,1-.55,4.14.71.71,0,0,1-.86.59ZM92.71,15.6a1.08,1.08,0,0,1,.72,1.16c-.25,2.63-.84,3.95-1.78,3.95s-1.76-.79-2.27-2.37c0,0,0-.06-.08-.08a.09.09,0,0,0-.09,0,17,17,0,0,1-2,1.7,1.07,1.07,0,0,1-.84.2,1.14,1.14,0,0,1-.74-.45l-.3-.35a.19.19,0,0,0-.25-.08,26,26,0,0,1-3.62,1,.67.67,0,0,1-.62-.16.87.87,0,0,1-.32-.59,1,1,0,0,1,.2-.65.93.93,0,0,1,.59-.36l1.15-.26a.21.21,0,0,0,.2-.21V16.66c0-.09-.06-.12-.16-.1a.83.83,0,0,1-.68-.15.88.88,0,0,1-.34-.61c-.1-.91-.19-1.6-.25-2.07,0-.12-.09-.17-.2-.14a.62.62,0,0,1-.49-.09.66.66,0,0,1-.29-.42c0-.05,0-.08-.12-.08l-1,.08c-.11,0-.16.06-.16.18V20a.89.89,0,0,1-.28.67.93.93,0,0,1-.66.27.87.87,0,0,1-.64-.27A.89.89,0,0,1,77.1,20V13.39c0-.1-.06-.15-.17-.15l-1.16.08a.79.79,0,0,1-.6-.22.87.87,0,0,1-.28-.59.8.8,0,0,1,.23-.6,1,1,0,0,1,.59-.3h.06a.21.21,0,0,0,.22-.13c.17-.25.41-.62.72-1.12a.2.2,0,0,0,0-.27c-.81-1.26-1.28-2-1.43-2.23a1.49,1.49,0,0,1,0-1.7L75.34,6a.51.51,0,0,1,.46-.25.5.5,0,0,1,.46.25.06.06,0,0,0,.12,0c.48-1,.8-1.72,1-2.11a.81.81,0,0,1,.47-.47.84.84,0,0,1,.66,0,.8.8,0,0,1,.46.46.84.84,0,0,1,0,.66c-.51,1.12-1,2.13-1.48,3.05a.25.25,0,0,0,0,.29l.15.23c.07.11.12.19.16.24s.11.07.17,0c.53-.91,1-1.71,1.33-2.41a.79.79,0,0,1,.48-.4.84.84,0,0,1,.62.07.81.81,0,0,1,.4.51.92.92,0,0,1-.07.65C80.42,7.28,80,8,79.47,9a.05.05,0,0,0,0,.07.05.05,0,0,0,.08,0,1,1,0,0,1,1,.2s.07,0,.08-.08V9.13a.78.78,0,0,1,.26-.58.8.8,0,0,1,.58-.26h2a.15.15,0,0,0,.17-.17V6.65c0-.12-.06-.18-.17-.18H82.09a.8.8,0,1,1,0-1.6h1.37c.11,0,.17-.06.17-.18V4a.94.94,0,0,1,.3-.7,1,1,0,0,1,1.4,0,.94.94,0,0,1,.3.7v.68c0,.12.06.18.17.18H87a.77.77,0,0,1,.56.23.8.8,0,0,1,0,1.14.77.77,0,0,1-.56.23H85.8c-.11,0-.17.06-.17.18V8.12a.15.15,0,0,0,.17.17h2.27c.11,0,.16-.06.16-.17,0-1.23-.06-2.57-.06-4a1,1,0,0,1,1-1,.93.93,0,0,1,.68.28.9.9,0,0,1,.29.68v.08s0,0,0,0,.07,0,.09,0l.06,0a1.05,1.05,0,0,1,.83-.11,1,1,0,0,1,.66.53c.48.92.79,1.55.93,1.87a.83.83,0,0,1,0,.69.89.89,0,0,1-.44.51.84.84,0,0,1-.66,0,.78.78,0,0,1-.49-.45c-.31-.65-.63-1.29-1-1.91l0,0s0,0,0,0c0,.31,0,.77,0,1.39s0,1.07,0,1.37c0,.11.06.17.18.17h2a.8.8,0,0,1,.59.26.78.78,0,0,1,0,1.16.82.82,0,0,1-.59.24H90.42c-.11,0-.16.06-.16.18.07,1.41.13,2.47.2,3.19a0,0,0,0,0,0,0h.05c.33-.73.6-1.36.8-1.88a.72.72,0,0,1,.44-.46.7.7,0,0,1,.63,0,.94.94,0,0,1,.48.5.87.87,0,0,1,0,.69,21.32,21.32,0,0,1-2,4,.3.3,0,0,0-.06.29c.19,1.24.38,1.86.55,1.86s.36-.76.51-2.27a.62.62,0,0,1,.29-.48A.59.59,0,0,1,92.71,15.6ZM79.64,11.36c.11,0,.15-.06.12-.19-.17-.63-.32-1.17-.47-1.63,0-.1-.08-.12-.13,0-.36.62-.73,1.22-1.12,1.82a.06.06,0,0,0,0,.09.11.11,0,0,0,.09.05Zm.63,7.57a.66.66,0,0,1-.46-.15.57.57,0,0,1-.22-.44c0-.76-.14-1.9-.3-3.44a.77.77,0,0,1,.14-.48.58.58,0,0,1,.43-.26.65.65,0,0,1,.47.1.53.53,0,0,1,.23.42c.15,1.28.26,2.45.34,3.5a.71.71,0,0,1-.17.5A.67.67,0,0,1,80.27,18.93Zm2.39-3.56V10.13a.16.16,0,0,0-.18-.18h-1a.92.92,0,0,1-.39-.09.06.06,0,0,0-.08,0,0,0,0,0,0,0,.05c.09.3.22.77.38,1.39,0,.09.09.14.23.14a.54.54,0,0,1,.38.14.51.51,0,0,1,.19.35c.19,1.14.35,2.29.47,3.44Zm2.19,2.09V10c0-.12-.06-.17-.16-.17h-.25c-.12,0-.18.05-.18.17v7.61c0,.1,0,.14.16.11l.27-.07A.22.22,0,0,0,84.85,17.46Zm3.91-1.29a.32.32,0,0,0,.07-.29,55.23,55.23,0,0,1-.52-5.75.16.16,0,0,0-.18-.18H86.62c-.11,0-.17.06-.17.18v4.69a0,0,0,0,0,0,0,0,0,0,0,0,0,0c.23-1.17.4-2.25.51-3.22a.53.53,0,0,1,.2-.39.64.64,0,0,1,.83.07.55.55,0,0,1,.14.43,30,30,0,0,1-.61,3.8.79.79,0,0,1-.36.51.74.74,0,0,1-.61.11c-.1,0-.14,0-.14.1v.62a.11.11,0,0,0,.06.1s.08,0,.11,0a.72.72,0,0,0,.24-.1,1,1,0,0,1,.23-.09.42.42,0,0,1,.43,0,.4.4,0,0,1,.22.38l0,0h0C88.24,16.76,88.56,16.42,88.76,16.17Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M96,19.67a.79.79,0,0,1-.61.14.76.76,0,0,1-.52-.34.81.81,0,0,1-.13-.62c.21-1.12.38-2.41.51-3.85a.74.74,0,0,1,.28-.55.82.82,0,0,1,.6-.18.78.78,0,0,1,.56.31.82.82,0,0,1,.18.61c-.12,1.36-.29,2.68-.53,4A.79.79,0,0,1,96,19.67Zm.42-8.23c.05-.07.12-.17.2-.3s.14-.24.19-.31a.2.2,0,0,0,0-.27c-.65-1-1.22-2-1.72-2.72a1.46,1.46,0,0,1,0-1.68.61.61,0,0,1,.54-.3.57.57,0,0,1,.54.28l0,.08a.28.28,0,0,0,0,.08q.08.11.15,0c.46-.93.82-1.7,1.08-2.33a.94.94,0,0,1,.5-.48.82.82,0,0,1,.67,0,.88.88,0,0,1,.45,1.17C98.55,5.79,98,6.9,97.42,8a.22.22,0,0,0,0,.27c0,.07.09.17.17.3l.18.31c.06.09.12.1.17,0,.47-.78,1-1.75,1.61-2.9a.8.8,0,0,1,.51-.44.86.86,0,0,1,.68.07.81.81,0,0,1,.42.5.84.84,0,0,1-.05.66Q100.54,7.92,99.9,9c0,.06,0,.09.08.1l.14,0a1,1,0,0,1,1.15.37.08.08,0,0,0,.09,0s0,0,.07-.05,0,0,0,0a.11.11,0,0,0,0-.05,26.3,26.3,0,0,0,2.1-5.48,1,1,0,0,1,.45-.64,1.06,1.06,0,0,1,.78-.18.89.89,0,0,1,.62.39.83.83,0,0,1,.14.73c-.14.56-.27,1-.37,1.34,0,.11,0,.16.14.16h2.4a.21.21,0,0,0,.22-.16c.21-.57.39-1.12.56-1.66a1.13,1.13,0,0,1,.47-.64,1.1,1.1,0,0,1,.79-.18.83.83,0,0,1,.6.39.81.81,0,0,1,.1.71c-.13.44-.29.9-.47,1.38,0,.11,0,.16.1.16h1.62a.86.86,0,0,1,.63.26.83.83,0,0,1,.25.62.85.85,0,0,1-.88.88h-2c-.11,0-.16.06-.16.18V9.68c0,.12,0,.18.16.18h1.74a.82.82,0,0,1,.58.24.77.77,0,0,1,.26.58.89.89,0,0,1-.84.84h-1.74c-.11,0-.16.06-.16.17v2.15c0,.12,0,.18.16.18h1.74a.82.82,0,0,1,.58.24.78.78,0,0,1,0,1.16.82.82,0,0,1-.58.24h-1.74c-.11,0-.16.06-.16.18v2.21c0,.11,0,.17.16.17H112a.86.86,0,0,1,.61.25.78.78,0,0,1,.25.59.85.85,0,0,1-.86.86h-7.17a.13.13,0,0,0-.14.14.93.93,0,0,1-.27.66.91.91,0,0,1-.67.28h-.08a1,1,0,0,1-.73-.3,1,1,0,0,1-.3-.74V11.15a.21.21,0,0,0-.16-.22l-.55-.21-.15-.08a.08.08,0,0,0-.08,0s0,0,0,0q.47,1.89.51,2.13a.73.73,0,0,1-.11.59.86.86,0,0,1-.52.37.7.7,0,0,1-.58-.1.82.82,0,0,1-.36-.51v0a.08.08,0,0,1,0,0,.13.13,0,0,0-.15-.12l-1,.08c-.1,0-.16.06-.16.18V19.9a1,1,0,0,1-.3.71,1,1,0,0,1-.71.29,1,1,0,0,1-1-1V13.37c0-.1,0-.15-.16-.15l-1.5.1A.8.8,0,0,1,95,13.1a.86.86,0,0,1,0-1.2.9.9,0,0,1,.6-.29l.53,0A.32.32,0,0,0,96.38,11.44Zm2.13-.14c-.06.09,0,.14.06.14l1.47-.1c.11,0,.16-.06.13-.17s-.13-.52-.24-.89l-.21-.72c0-.09-.06-.1-.11,0C99.37,9.93,99,10.52,98.51,11.3Zm2.58,8a.81.81,0,0,1-.6-.2.84.84,0,0,1-.3-.56c0-.3,0-.65-.09-1s-.09-.82-.13-1.3-.08-.82-.11-1a.78.78,0,0,1,.18-.6.77.77,0,0,1,.55-.32.82.82,0,0,1,.59.16.71.71,0,0,1,.3.53c.16,1.34.28,2.5.38,3.46a.82.82,0,0,1-.2.62A.81.81,0,0,1,101.09,19.32Zm3.62-11.73V9.68a.16.16,0,0,0,.18.18h2.54c.12,0,.17-.06.17-.18V7.59c0-.12,0-.18-.17-.18h-2.54A.16.16,0,0,0,104.71,7.59Zm0,4.1v2.15a.16.16,0,0,0,.18.18h2.54c.12,0,.17-.06.17-.18V11.69a.15.15,0,0,0-.17-.17h-2.54C104.77,11.52,104.71,11.58,104.71,11.69Zm0,4.15v2.21c0,.11.06.17.18.17h2.54a.15.15,0,0,0,.17-.17V15.84c0-.12,0-.18-.17-.18h-2.54A.16.16,0,0,0,104.71,15.84Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M115.64,19.63a.89.89,0,0,1-.67-.28.94.94,0,0,1-.29-.68A.88.88,0,0,1,115,18a.93.93,0,0,1,.67-.28h6.18c.12,0,.17-.05.17-.17V6.65c0-.12,0-.18-.17-.18h-5.59a1,1,0,0,1-.68-.27.88.88,0,0,1-.28-.67.91.91,0,0,1,.28-.67.93.93,0,0,1,.68-.28H130a.93.93,0,0,1,.68.28.91.91,0,0,1,.28.67.88.88,0,0,1-.28.67,1,1,0,0,1-.68.27h-5.59a.16.16,0,0,0-.18.18V17.56c0,.12.06.17.18.17h6.18a1,1,0,0,1,.67.28.88.88,0,0,1,.29.66.94.94,0,0,1-.29.68.91.91,0,0,1-.67.28Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M135.45,20.35a1,1,0,0,1-.77,0,1.16,1.16,0,0,1-.58-.51.68.68,0,0,1,0-.65.76.76,0,0,1,.48-.43,31.33,31.33,0,0,0,5.75-2.11.07.07,0,0,0,0-.05,0,0,0,0,0,0,0h-5a.78.78,0,0,1-.57-.24.85.85,0,0,1-.23-.58.79.79,0,0,1,.8-.8h6.26c.11,0,.17-.06.17-.18V14a.15.15,0,0,0-.17-.16h-5.42a.76.76,0,1,1,0-1.52h5.42c.11,0,.17-.05.17-.16v-.74c0-.12-.06-.18-.17-.18h-6.08a.75.75,0,0,1-.56-.22.8.8,0,0,1,0-1.12.75.75,0,0,1,.56-.22h3.14c.12,0,.15,0,.1-.16-.17-.43-.43-1.07-.8-1.93a.23.23,0,0,0-.23-.16h-2.57a.78.78,0,0,1-.57-.24.79.79,0,0,1-.25-.58.81.81,0,0,1,.25-.59.75.75,0,0,1,.57-.25h1.28a.1.1,0,0,0,.08,0,.06.06,0,0,0,0-.09q-.41-.72-.45-.78a.74.74,0,0,1-.07-.66.73.73,0,0,1,.45-.47,1,1,0,0,1,.76,0,1,1,0,0,1,.58.46c.25.39.53.88.85,1.46a.23.23,0,0,0,.25.16h1c.1,0,.15,0,.15-.16V4.11a.94.94,0,0,1,.29-.68.89.89,0,0,1,.67-.28.93.93,0,0,1,.68.28,1,1,0,0,1,.28.68V5.63c0,.11.06.16.17.16h1.41c.12,0,.18,0,.18-.16V4.11a1,1,0,0,1,1-1,.87.87,0,0,1,.66.28,1,1,0,0,1,.28.68V5.63c0,.11.05.16.17.16h1.12a.27.27,0,0,0,.25-.14c.14-.23.41-.71.8-1.43a1,1,0,0,1,.55-.49,1.05,1.05,0,0,1,.74,0,.71.71,0,0,1,.49.45.73.73,0,0,1,0,.66c0,.11-.21.39-.47.84a.08.08,0,0,0,0,.09.11.11,0,0,0,.09,0h1.21A.77.77,0,0,1,151,6a.84.84,0,0,1,.24.59.82.82,0,0,1-.24.58.8.8,0,0,1-.58.24H148a.27.27,0,0,0-.24.18c-.29.77-.58,1.42-.84,2-.05.08,0,.12.1.12h3.11a.78.78,0,1,1,0,1.56H144a.16.16,0,0,0-.18.18v.74c0,.11.06.16.18.16h5.42a.73.73,0,0,1,.53.22.75.75,0,0,1,0,1.08.73.73,0,0,1-.53.22H144c-.12,0-.18.06-.18.16v.74a.16.16,0,0,0,.18.18h6.26a.77.77,0,0,1,.56.23.78.78,0,0,1,.24.57.82.82,0,0,1-.24.58.74.74,0,0,1-.56.24h-5a.07.07,0,0,0,0,.06A29.58,29.58,0,0,0,151,18.75a.76.76,0,0,1,.48.43.68.68,0,0,1,0,.65,1.09,1.09,0,0,1-.58.52,1.08,1.08,0,0,1-.77,0A27.27,27.27,0,0,1,144,17.66c-.08-.06-.12,0-.12.07v2.1a1,1,0,0,1-.32.76,1.06,1.06,0,0,1-1.5,0,1,1,0,0,1-.33-.76v-2.1a.09.09,0,0,0-.06-.08.06.06,0,0,0-.09,0A27.62,27.62,0,0,1,135.45,20.35ZM141,9.7h3.46a.28.28,0,0,0,.25-.16,14.08,14.08,0,0,0,.9-1.93c0-.11,0-.16-.11-.16h-5.4a.1.1,0,0,0-.09.06.17.17,0,0,0,0,.12c.37.86.63,1.5.78,1.93A.22.22,0,0,0,141,9.7Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    className: "cls-2",
    points: "28.87 0 21.25 24 24.25 24 31.87 0 28.87 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    className: "cls-2",
    points: "18.25 0 10.62 24 13.62 24 21.25 0 18.25 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    className: "cls-2",
    points: "7.62 0 0 24 3 24 10.62 0 7.62 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }));
};
const BrandIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(BrandIconBase)`
  .cls-1 {
    fill: #2f3640;
  }
  .cls-2 {
    fill: #e84118;
  }
`;
const BrandIcon3Base = ({
  className
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 200 40",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M46.22,17.27a1,1,0,0,1-.77-.33,1,1,0,0,1-.33-.76,1.11,1.11,0,0,1,.33-.79,1.05,1.05,0,0,1,.77-.34h1.15c.13,0,.2-.07.2-.23V10.23a1.28,1.28,0,0,1,.41-1,1.41,1.41,0,0,1,2,0,1.28,1.28,0,0,1,.41,1v4.59c0,.16.07.23.21.23h.75a1.16,1.16,0,0,1,1.12,1.13,1,1,0,0,1-.34.76,1.07,1.07,0,0,1-.78.33h-.75q-.21,0-.21.24v8.1c0,.14.07.19.21.16.55-.19,1.07-.38,1.53-.57h0l0,0c.12,0,.2-.1.24-.26a45.36,45.36,0,0,0,.54-7.85V10.54a1.48,1.48,0,0,1,.43-1,1.41,1.41,0,0,1,1-.44H67.23a1.41,1.41,0,0,1,1,.44,1.44,1.44,0,0,1,.43,1v3.63a1.42,1.42,0,0,1-.43,1,1.37,1.37,0,0,1-1,.44h-3.6a.19.19,0,0,0-.21.21v5.22c0,.15.07.23.21.23h1.78a.21.21,0,0,0,.23-.23V18.29A1.3,1.3,0,0,1,66.92,17a1.17,1.17,0,0,1,.88.38,1.22,1.22,0,0,1,.37.9V22a1.42,1.42,0,0,1-.43,1,1.38,1.38,0,0,1-1,.45H63.63c-.14,0-.21.06-.21.2V28a.19.19,0,0,0,.21.21h2.25a.18.18,0,0,0,.2-.21v-2.4a1.31,1.31,0,0,1,2.61,0v4.9a1.3,1.3,0,0,1-1.3,1.31h-.16a1.16,1.16,0,0,1-1.15-1.15.14.14,0,0,0-.15-.16H58.32c-.13,0-.19.06-.19.16a1.17,1.17,0,0,1-.32.81,1.1,1.1,0,0,1-.8.34h-.18a1.21,1.21,0,0,1-.91-.38,1.26,1.26,0,0,1-.37-.93v-4.9a1.25,1.25,0,0,1,.37-.92,1.21,1.21,0,0,1,.91-.38,1.26,1.26,0,0,1,.92.38,1.22,1.22,0,0,1,.38.92V28q0,.21.24.21h2.21q.24,0,.24-.21V23.68c0-.14-.08-.2-.24-.2h-3A1.52,1.52,0,0,1,56.13,22V18.26a1.23,1.23,0,0,1,.36-.89,1.21,1.21,0,0,1,.89-.36,1.2,1.2,0,0,1,.86.36,1.23,1.23,0,0,1,.36.89v2.82a.21.21,0,0,0,.24.23h1.74a.21.21,0,0,0,.24-.23V15.86q0-.21-.24-.21h-5q-.24,0-.24.21v2.92a36.93,36.93,0,0,1-.48,6.43,20.38,20.38,0,0,1-1.63,5.12.93.93,0,0,1-1.54.21,2,2,0,0,1-.28-2.32,1.44,1.44,0,0,0,.06-.17l.07-.17a.08.08,0,0,0,0-.1.07.07,0,0,0-.1,0q-2.88,1.07-4.9,1.64a1.08,1.08,0,0,1-.86-.15,1,1,0,0,1-.47-.73,1.21,1.21,0,0,1,.2-.92,1.37,1.37,0,0,1,.79-.54l1.22-.32c.12,0,.18-.11.18-.28V17.51c0-.16-.07-.24-.2-.24Zm9.33-5.76v1.75c0,.15.07.23.21.23h10a.21.21,0,0,0,.23-.23V11.51a.21.21,0,0,0-.23-.24h-10Q55.55,11.27,55.55,11.51Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M74.14,31.4A1.43,1.43,0,0,1,72.73,30V11.51a1.42,1.42,0,0,1,.43-1,1.38,1.38,0,0,1,1-.45h18a1.54,1.54,0,0,1,1.49,1.49V30a1.35,1.35,0,0,1-.42,1,1.39,1.39,0,0,1-1,.42h-.07A1.33,1.33,0,0,1,90.85,30a.18.18,0,0,0-.21-.2H75.78c-.12,0-.18.07-.18.2a1.32,1.32,0,0,1-.4,1,1.37,1.37,0,0,1-1,.39ZM75.6,12.68v14.6q0,.24.21.24H90.62a.21.21,0,0,0,.23-.24V12.68a.21.21,0,0,0-.23-.23H75.81C75.67,12.45,75.6,12.53,75.6,12.68Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M97.86,30.41a1,1,0,0,1-.64-.42.92.92,0,0,1-.17-.73,52.93,52.93,0,0,0,.73-5.34,1.06,1.06,0,0,1,.34-.67,1,1,0,0,1,.71-.22,1.07,1.07,0,0,1,.68.35,1,1,0,0,1,.23.72c-.17,2-.42,3.84-.73,5.53a1,1,0,0,1-.4.64A1,1,0,0,1,97.86,30.41Zm23-5.61a1.43,1.43,0,0,1,1,1.54q-.5,5.27-2.37,5.27t-3-3.16a.18.18,0,0,0-.11-.1.11.11,0,0,0-.13,0,23.34,23.34,0,0,1-2.66,2.26,1.46,1.46,0,0,1-1.12.27,1.57,1.57,0,0,1-1-.6l-.39-.47a.26.26,0,0,0-.34-.11,34,34,0,0,1-4.82,1.36.93.93,0,0,1-.84-.21,1.16,1.16,0,0,1-.41-.78,1.31,1.31,0,0,1,.26-.88,1.28,1.28,0,0,1,.78-.48c.76-.16,1.28-.27,1.54-.34a.27.27,0,0,0,.26-.28V26.21c0-.12-.07-.16-.21-.13a1,1,0,0,1-.9-.21,1.14,1.14,0,0,1-.46-.8c-.13-1.22-.25-2.14-.33-2.77a.21.21,0,0,0-.27-.18.85.85,0,0,1-.65-.12.81.81,0,0,1-.39-.56.14.14,0,0,0-.15-.1l-1.36.1q-.21,0-.21.24v8.94a1.14,1.14,0,0,1-.38.88,1.19,1.19,0,0,1-.87.37,1.15,1.15,0,0,1-.86-.37,1.2,1.2,0,0,1-.37-.88V21.86c0-.14-.07-.21-.23-.21l-1.54.1a1.05,1.05,0,0,1-.81-.28,1.14,1.14,0,0,1-.36-.78,1,1,0,0,1,.3-.81,1.22,1.22,0,0,1,.79-.39h.08a.28.28,0,0,0,.29-.19c.22-.33.55-.82,1-1.48a.29.29,0,0,0,0-.37l-1.9-3a2,2,0,0,1,0-2.27l.11-.15a.72.72,0,0,1,1.22,0,.1.1,0,0,0,.08,0,.09.09,0,0,0,.08,0c.64-1.36,1.07-2.3,1.28-2.82a1.11,1.11,0,0,1,.62-.62,1.06,1.06,0,0,1,.89,0,1,1,0,0,1,.61.61,1.1,1.1,0,0,1,0,.87c-.68,1.5-1.34,2.85-2,4.07a.39.39,0,0,0,0,.39l.21.31a1.62,1.62,0,0,0,.21.31c.06.11.14.1.23,0,.69-1.22,1.29-2.29,1.77-3.21a1,1,0,0,1,.64-.53,1.06,1.06,0,0,1,.82.09,1.08,1.08,0,0,1,.54.68,1.28,1.28,0,0,1-.09.86c-.35.66-.89,1.63-1.62,2.92a.07.07,0,0,0,0,.1.08.08,0,0,0,.1,0,1.42,1.42,0,0,1,1.33.26s.09,0,.1-.11v-.07a1.16,1.16,0,0,1,1.12-1.13h2.64a.2.2,0,0,0,.23-.23v-2a.21.21,0,0,0-.23-.23h-1.83a1,1,0,0,1-.75-.31,1,1,0,0,1-.32-.76,1,1,0,0,1,.32-.75,1,1,0,0,1,.75-.32h1.83a.21.21,0,0,0,.23-.23V9.35a1.28,1.28,0,0,1,.39-.94,1.29,1.29,0,0,1,.94-.39,1.33,1.33,0,0,1,1.33,1.33v.91a.21.21,0,0,0,.24.23h1.56a1.08,1.08,0,0,1,1.07,1.07,1.07,1.07,0,0,1-.31.76,1,1,0,0,1-.76.31h-1.56a.21.21,0,0,0-.24.23v2c0,.16.08.23.24.23h3c.14,0,.21-.07.21-.23,0-1.63-.08-3.42-.08-5.37a1.28,1.28,0,0,1,.38-.93,1.25,1.25,0,0,1,.92-.37,1.28,1.28,0,0,1,.92.37,1.24,1.24,0,0,1,.39.9v.11a.09.09,0,0,0,.06.08h.12l.08,0a1.4,1.4,0,0,1,1.11-.16,1.34,1.34,0,0,1,.87.71c.64,1.23,1.06,2.07,1.25,2.5a1.22,1.22,0,0,1-.55,1.59,1.08,1.08,0,0,1-.88,0,1,1,0,0,1-.65-.6c-.42-.87-.85-1.72-1.28-2.55a.09.09,0,0,0-.07,0,0,0,0,0,0,0,.05c0,.42,0,1,0,1.85s0,1.43,0,1.83c0,.16.07.23.23.23h2.61a1.11,1.11,0,0,1,.78.34,1.08,1.08,0,0,1,.34.79,1,1,0,0,1-.34.76,1.1,1.1,0,0,1-.78.33h-2.53q-.21,0-.21.24c.09,1.87.17,3.29.26,4.24,0,0,0,.06,0,.06a.06.06,0,0,0,.06,0c.46-1,.81-1.81,1.07-2.5a1,1,0,0,1,.59-.61,1,1,0,0,1,.85,0,1.31,1.31,0,0,1,.64.67,1.18,1.18,0,0,1,0,.92,27.44,27.44,0,0,1-2.71,5.37.43.43,0,0,0-.08.4c.26,1.65.5,2.47.73,2.47s.49-1,.68-3a.83.83,0,0,1,.39-.64A.76.76,0,0,1,120.91,24.8Zm-17.42-5.65c.14,0,.19-.09.16-.26-.23-.84-.43-1.56-.63-2.17,0-.14-.11-.15-.18,0-.47.82-1,1.63-1.48,2.43a.08.08,0,0,0,0,.11.13.13,0,0,0,.12.07Zm.84,10.09a.85.85,0,0,1-.61-.2.75.75,0,0,1-.3-.59c-.06-1-.19-2.53-.4-4.58a1,1,0,0,1,.19-.64.79.79,0,0,1,.57-.35.83.83,0,0,1,.63.14.71.71,0,0,1,.31.56c.19,1.7.34,3.26.44,4.67a.87.87,0,0,1-.22.66A.85.85,0,0,1,104.33,29.24Zm3.18-4.75v-7a.21.21,0,0,0-.24-.24h-1.33a1.14,1.14,0,0,1-.52-.13.09.09,0,0,0-.1,0s0,0,0,.08c.12.4.29,1,.5,1.85,0,.12.12.18.31.18a.79.79,0,0,1,.51.18.69.69,0,0,1,.25.47c.26,1.53.47,3.06.62,4.59Zm2.92,2.79V17.37c0-.15-.07-.23-.21-.23h-.34a.2.2,0,0,0-.23.23V27.52c0,.14.07.19.2.15l.37-.1A.29.29,0,0,0,110.43,27.28Zm5.21-1.72a.42.42,0,0,0,.11-.39,72.66,72.66,0,0,1-.71-7.66.21.21,0,0,0-.23-.24h-2c-.16,0-.23.08-.23.24v6.25s0,0,0,0a0,0,0,0,0,0,0c.31-1.56.54-3,.68-4.3a.65.65,0,0,1,.27-.51.8.8,0,0,1,.56-.17.82.82,0,0,1,.55.26.74.74,0,0,1,.18.58,41,41,0,0,1-.81,5.05,1.12,1.12,0,0,1-.48.7,1,1,0,0,1-.82.14c-.12,0-.18,0-.18.13v.83a.14.14,0,0,0,.07.13.16.16,0,0,0,.16,0,1.91,1.91,0,0,0,.31-.13,1.93,1.93,0,0,1,.32-.13.58.58,0,0,1,.57,0,.55.55,0,0,1,.29.51.08.08,0,0,0,0,0s0,0,0,0A15.85,15.85,0,0,0,115.64,25.56Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M125.25,30.23a1.09,1.09,0,0,1-.82.18,1,1,0,0,1-.69-.46,1.08,1.08,0,0,1-.17-.82c.28-1.49.5-3.2.67-5.13a1,1,0,0,1,.38-.73,1.06,1.06,0,0,1,.8-.24,1,1,0,0,1,.74.41,1.09,1.09,0,0,1,.25.82c-.16,1.8-.39,3.56-.7,5.26A1.1,1.1,0,0,1,125.25,30.23Zm.56-11a3.11,3.11,0,0,0,.26-.4,3.37,3.37,0,0,1,.26-.41.27.27,0,0,0,0-.36c-.87-1.39-1.63-2.6-2.29-3.63a1.92,1.92,0,0,1,0-2.24.84.84,0,0,1,.72-.4.78.78,0,0,1,.71.38s0,.05.07.1a.72.72,0,0,0,.07.11c.06.1.13.1.2,0,.61-1.24,1.09-2.27,1.44-3.11a1.29,1.29,0,0,1,.66-.64,1.13,1.13,0,0,1,.9,0,1.09,1.09,0,0,1,.63.65,1.13,1.13,0,0,1,0,.92q-1,2.27-2.19,4.45a.31.31,0,0,0,0,.37l.23.4c.11.18.18.32.24.41s.16.13.23,0c.63-1,1.34-2.33,2.14-3.86a1,1,0,0,1,.68-.58,1.12,1.12,0,0,1,.91.09,1.08,1.08,0,0,1,.56.66,1.16,1.16,0,0,1-.07.88c-.52,1-1.06,2-1.64,3,0,.07,0,.11.11.13l.18,0a1.37,1.37,0,0,1,1.54.49.1.1,0,0,0,.11,0,.14.14,0,0,0,.1-.06.11.11,0,0,1,0-.07.11.11,0,0,0,0-.06,34.61,34.61,0,0,0,2.79-7.3,1.33,1.33,0,0,1,.6-.86A1.46,1.46,0,0,1,137,8a1.18,1.18,0,0,1,.83.52,1.16,1.16,0,0,1,.19,1c-.2.75-.36,1.34-.5,1.8q0,.21.18.21h3.21a.3.3,0,0,0,.29-.21c.27-.77.53-1.51.75-2.22a1.56,1.56,0,0,1,.63-.86,1.41,1.41,0,0,1,1-.23,1.1,1.1,0,0,1,.81.52,1.08,1.08,0,0,1,.13.94c-.17.59-.38,1.2-.63,1.85,0,.14,0,.21.13.21h2.17a1.14,1.14,0,0,1,1.17,1.17,1.16,1.16,0,0,1-1.17,1.17h-2.66q-.21,0-.21.24v2.79c0,.15.07.23.21.23h2.32a1.08,1.08,0,0,1,.78.33,1,1,0,0,1,.34.77,1.07,1.07,0,0,1-.34.78,1.09,1.09,0,0,1-.78.34h-2.32c-.14,0-.21.07-.21.23v2.87c0,.15.07.23.21.23h2.32a1.08,1.08,0,0,1,.78.33,1,1,0,0,1,.34.77,1,1,0,0,1-.34.77,1.11,1.11,0,0,1-.78.32h-2.32q-.21,0-.21.24v2.94q0,.24.21.24h3.08a1.13,1.13,0,0,1,.8.32,1.07,1.07,0,0,1,.34.8,1.16,1.16,0,0,1-1.14,1.15H137.1a.17.17,0,0,0-.19.18,1.22,1.22,0,0,1-.36.87,1.19,1.19,0,0,1-.89.38h-.1a1.37,1.37,0,0,1-1.38-1.38V18.86a.3.3,0,0,0-.21-.29l-.73-.28a.66.66,0,0,1-.21-.11.17.17,0,0,0-.1,0s-.05,0,0,.07c.42,1.68.64,2.63.68,2.84a.94.94,0,0,1-.15.79,1.08,1.08,0,0,1-.69.48,1,1,0,0,1-.78-.13,1.06,1.06,0,0,1-.47-.67v0s0,0,0-.05a.18.18,0,0,0-.21-.16l-1.33.11c-.14,0-.21.07-.21.23v8.89a1.25,1.25,0,0,1-.4.94,1.34,1.34,0,0,1-1,.39,1.27,1.27,0,0,1-.93-.39,1.25,1.25,0,0,1-.4-.94V21.83c0-.14-.06-.21-.2-.21l-2,.13a1.05,1.05,0,0,1-.81-.28,1.06,1.06,0,0,1-.36-.78,1.07,1.07,0,0,1,.3-.83,1.1,1.1,0,0,1,.79-.37l.7-.06A.43.43,0,0,0,125.81,19.25Zm2.84-.18c-.09.12-.06.18.08.18l2-.13c.16,0,.22-.08.19-.23-.07-.3-.18-.69-.33-1.19s-.24-.81-.27-.95-.09-.14-.16-.05C129.8,17.24,129.31,18,128.65,19.07Zm3.44,10.69a1.11,1.11,0,0,1-1.2-1c0-.4-.08-.86-.13-1.38s-.11-1.1-.17-1.73-.11-1.1-.14-1.4a1.1,1.1,0,0,1,1-1.22,1.08,1.08,0,0,1,.8.2,1,1,0,0,1,.4.71c.21,1.79.38,3.33.5,4.61a1.06,1.06,0,0,1-.26.82A1,1,0,0,1,132.09,29.76Zm4.82-15.64v2.79a.21.21,0,0,0,.24.23h3.39a.2.2,0,0,0,.23-.23V14.12c0-.16-.07-.24-.23-.24h-3.39A.21.21,0,0,0,136.91,14.12Zm0,5.47v2.87a.21.21,0,0,0,.24.23h3.39a.2.2,0,0,0,.23-.23V19.59c0-.16-.07-.23-.23-.23h-3.39C137,19.36,136.91,19.43,136.91,19.59Zm0,5.53v2.94a.21.21,0,0,0,.24.24h3.39c.16,0,.23-.08.23-.24V25.12c0-.16-.07-.24-.23-.24h-3.39A.21.21,0,0,0,136.91,25.12Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M151.49,30.18a1.23,1.23,0,0,1-.9-.38,1.25,1.25,0,0,1-.38-.9,1.19,1.19,0,0,1,.38-.89,1.25,1.25,0,0,1,.9-.36h8.24a.21.21,0,0,0,.23-.24V12.86a.21.21,0,0,0-.23-.23h-7.46a1.25,1.25,0,0,1-.9-.36,1.21,1.21,0,0,1-.38-.89,1.3,1.3,0,0,1,1.28-1.28h18.3a1.3,1.3,0,0,1,1.28,1.28,1.21,1.21,0,0,1-.38.89,1.25,1.25,0,0,1-.9.36h-7.45a.21.21,0,0,0-.24.23V27.41a.21.21,0,0,0,.24.24h8.23a1.25,1.25,0,0,1,.9.36,1.19,1.19,0,0,1,.38.89,1.25,1.25,0,0,1-.38.9,1.23,1.23,0,0,1-.9.38Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M177.9,31.14a1.39,1.39,0,0,1-1,0,1.48,1.48,0,0,1-.78-.67.91.91,0,0,1,0-.86,1,1,0,0,1,.64-.58,41.37,41.37,0,0,0,7.66-2.81.09.09,0,0,0,0-.07,0,0,0,0,0,0,0h-6.68a1,1,0,0,1-.75-.32,1.09,1.09,0,0,1-.32-.77,1,1,0,0,1,.32-.76,1,1,0,0,1,.75-.31H186a.21.21,0,0,0,.24-.24v-1q0-.21-.24-.21h-7.22a1,1,0,0,1-.71-.3.94.94,0,0,1-.3-.71,1,1,0,0,1,.3-.72,1,1,0,0,1,.71-.3H186q.24,0,.24-.21v-1A.21.21,0,0,0,186,19h-8.1a1,1,0,1,1,0-2.09h4.19c.16,0,.2-.07.13-.21-.22-.57-.58-1.43-1.07-2.58a.3.3,0,0,0-.31-.21h-3.41a1,1,0,0,1-.77-.32,1.08,1.08,0,0,1,0-1.55,1,1,0,0,1,.77-.34h1.69a.13.13,0,0,0,.12-.07.08.08,0,0,0,0-.11l-.6-1a1,1,0,0,1-.11-.87,1.06,1.06,0,0,1,.6-.64,1.43,1.43,0,0,1,1,0,1.34,1.34,0,0,1,.78.61c.33.53.7,1.18,1.12,2a.33.33,0,0,0,.34.21h1.36c.14,0,.2-.07.2-.21v-2a1.23,1.23,0,0,1,.38-.9,1.26,1.26,0,0,1,1.8,0,1.23,1.23,0,0,1,.38.9v2c0,.14.08.21.23.21h1.88q.24,0,.24-.21v-2a1.28,1.28,0,0,1,1.27-1.28,1.16,1.16,0,0,1,.89.38,1.25,1.25,0,0,1,.36.9v2q0,.21.24.21h1.48a.36.36,0,0,0,.34-.18c.2-.32.55-.95,1.07-1.91a1.35,1.35,0,0,1,.73-.66,1.41,1.41,0,0,1,1,0,1,1,0,0,1,.66.6,1,1,0,0,1-.06.88c-.07.14-.27.52-.62,1.13a.08.08,0,0,0,0,.11.13.13,0,0,0,.12.07h1.62a1,1,0,0,1,.77.34,1.1,1.1,0,0,1,0,1.55,1.05,1.05,0,0,1-.77.32h-3.31a.34.34,0,0,0-.32.24c-.4,1-.77,1.89-1.12,2.61-.07.1,0,.15.13.15h4.15a1,1,0,1,1,0,2.09h-8.11a.2.2,0,0,0-.23.23v1c0,.14.07.21.23.21h7.22a1,1,0,0,1,1,1,.94.94,0,0,1-.3.71,1,1,0,0,1-.72.3h-7.22c-.16,0-.23.07-.23.21v1c0,.16.07.24.23.24h8.34A1.06,1.06,0,0,1,198.75,25a1.08,1.08,0,0,1-.31.77,1,1,0,0,1-.76.32H191a.08.08,0,0,0,0,.08A39.53,39.53,0,0,0,198.65,29a1,1,0,0,1,.64.58.93.93,0,0,1,0,.86,1.44,1.44,0,0,1-.77.69,1.46,1.46,0,0,1-1,0,36.77,36.77,0,0,1-8.19-3.6c-.1-.07-.15,0-.15.11v2.79a1.38,1.38,0,0,1-.43,1,1.42,1.42,0,0,1-1,.42,1.39,1.39,0,0,1-1-.42,1.34,1.34,0,0,1-.43-1V27.65a.13.13,0,0,0-.08-.12.1.1,0,0,0-.13,0A36.63,36.63,0,0,1,177.9,31.14Zm7.45-14.21H190a.39.39,0,0,0,.34-.21,23.58,23.58,0,0,0,1.2-2.58c0-.14,0-.21-.16-.21h-7.2A.12.12,0,0,0,184,14a.23.23,0,0,0,0,.16q.73,1.72,1,2.58A.27.27,0,0,0,185.35,16.93Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-2",
    d: "M3.62,29.61a.31.31,0,0,0,.09.22.29.29,0,0,0,.21.09l-.27-.45A.32.32,0,0,0,3.62,29.61Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-2",
    d: "M36.33,29.92a.33.33,0,0,0,.2-.09.28.28,0,0,0,.1-.22.23.23,0,0,0,0-.14C36.51,29.62,36.42,29.77,36.33,29.92Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-2",
    d: "M3.93,29.29c.52,0,.85-.12,1-.35a4,4,0,0,0,.28-1.44c0-.14,0-.25,0-.32V10.33a.32.32,0,0,1,.1-.23.33.33,0,0,1,.23-.1.32.32,0,0,1,.22.1.35.35,0,0,1,.09.23v11c.67-1.1,1.9-1.65,3.7-1.65a8,8,0,0,1,1.13.07,3.78,3.78,0,0,1,.92.21,6,6,0,0,1,.72.32,1.81,1.81,0,0,1,.55.44,5.18,5.18,0,0,1,.4.51,2.23,2.23,0,0,1,.27.62c.07.25.13.47.17.67a4.15,4.15,0,0,1,.1.73c0,.3,0,.55,0,.77v.8c0,.27,0,.63,0,1.1s0,.79,0,1a4.72,4.72,0,0,0,.27,1.84,1.06,1.06,0,0,0,1.08.6l.09,0,.09,0a1.94,1.94,0,0,0,.68-.11,1.36,1.36,0,0,0,.45-.25l.32-.31a1.43,1.43,0,0,1,.42-.26,1.64,1.64,0,0,1,.62-.11,2.38,2.38,0,0,1,.73.11,2.6,2.6,0,0,1,.58.26l.49.31a2.68,2.68,0,0,0,.59.25,2.55,2.55,0,0,0,.74.11,4.54,4.54,0,0,0,2.72-.66A2,2,0,0,0,24.57,27V26.9a.9.9,0,0,0-.43-.74A3.65,3.65,0,0,0,23,25.64c-.45-.13-1-.26-1.52-.37s-1.11-.25-1.67-.39a10.91,10.91,0,0,1-1.52-.47,3,3,0,0,1-1.12-.73,1.46,1.46,0,0,1-.43-1.05,2.59,2.59,0,0,1,1.06-2.15A5,5,0,0,1,21,19.64a6.83,6.83,0,0,1,1.86.22,3,3,0,0,1,1.25.63,3,3,0,0,1,.72.9,3.69,3.69,0,0,1,.37,1.12v.06a.28.28,0,0,1-.1.23.32.32,0,0,1-.23.09.26.26,0,0,1-.22-.14,2.81,2.81,0,0,1-.15-.37,4.2,4.2,0,0,0-.16-.51,2.12,2.12,0,0,0-.32-.56,2.36,2.36,0,0,0-.57-.51,3,3,0,0,0-1-.37A7.05,7.05,0,0,0,21,20.29a4.47,4.47,0,0,0-2.7.66,2,2,0,0,0-.87,1.68,1.09,1.09,0,0,0,.57.92,4.48,4.48,0,0,0,1.45.57l1.88.43c.68.15,1.3.32,1.89.48a3.64,3.64,0,0,1,1.44.74A1.51,1.51,0,0,1,25.22,27V27a.4.4,0,0,1,0,.17,2.77,2.77,0,0,1-.06.45,2.82,2.82,0,0,0-.06.47,1.06,1.06,0,0,0,.43,1,1.85,1.85,0,0,0,.93.28.28.28,0,0,1,.18-.06A1.76,1.76,0,0,0,28,28.8a2.66,2.66,0,0,0,.56-1.62V10.33a.35.35,0,0,1,.09-.23.32.32,0,0,1,.22-.1.34.34,0,0,1,.23.1.35.35,0,0,1,.09.23v13.9l6.9-4.53a.29.29,0,0,1,.16-.06.31.31,0,0,1,.23.11.36.36,0,0,1,.1.24.29.29,0,0,1-.14.25l-6.94,4.54q.59.42,1.35,1.08l1.37,1.21c.41.37.85.73,1.31,1.08A6.54,6.54,0,0,0,35,29a3.22,3.22,0,0,0,1.34.31.32.32,0,0,1,.23.09.24.24,0,0,1,.06.09,19,19,0,1,0-32.94,0,.47.47,0,0,1,.06-.09A.31.31,0,0,1,3.93,29.29Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-2",
    d: "M34.81,29.62a6.55,6.55,0,0,1-1.48-.85c-.48-.36-.93-.72-1.35-1.09l-1.4-1.24a15.08,15.08,0,0,0-1.35-1.08v1.85c-.15,1.71-.92,2.6-2.32,2.7a.42.42,0,0,1-.28.09,2.66,2.66,0,0,1-1.3-.32,1.57,1.57,0,0,1-.77-1A4.61,4.61,0,0,1,21,29.93a3.42,3.42,0,0,1-1-.16,3,3,0,0,1-.74-.36,3.07,3.07,0,0,0-.63-.35,1.72,1.72,0,0,0-.73-.16,1,1,0,0,0-.55.16,2,2,0,0,0-.41.35,1.5,1.5,0,0,1-.56.36,2.73,2.73,0,0,1-1,.16l-.09,0-.09,0a1.93,1.93,0,0,1-.87-.18,1.54,1.54,0,0,1-.59-.46,2.41,2.41,0,0,1-.34-.72,4.38,4.38,0,0,1-.16-.85,9.49,9.49,0,0,1,0-1c0-.22,0-.55,0-1s0-.76,0-1A10.65,10.65,0,0,0,13,22.22a2.43,2.43,0,0,0-1.72-1.72,6.15,6.15,0,0,0-1.73-.21A5.28,5.28,0,0,0,8,20.5,3.28,3.28,0,0,0,6.93,21a2.45,2.45,0,0,0-.63.79,3.8,3.8,0,0,0-.33.92,8.41,8.41,0,0,0-.11,1v3.5c0,.06,0,.15,0,.28s0,.44,0,.56,0,.29-.08.5a1.58,1.58,0,0,1-.14.46,3,3,0,0,1-.21.37.83.83,0,0,1-.32.3,1.71,1.71,0,0,1-.47.17,2.49,2.49,0,0,1-.64.08h0a19,19,0,0,0,32.41,0h0A4,4,0,0,1,34.81,29.62Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-2",
    d: "M15.5,29.61a.33.33,0,0,0-.09-.23.27.27,0,0,0-.14-.07.24.24,0,0,0-.13.07.3.3,0,0,0-.1.23.28.28,0,0,0,.1.22.35.35,0,0,0,.13.08.39.39,0,0,0,.14-.08A.31.31,0,0,0,15.5,29.61Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-2",
    d: "M26.35,29.61a.31.31,0,0,0,.09.22.34.34,0,0,0,.23.1l.24,0a.3.3,0,0,0,.09-.23c0-.21-.13-.32-.37-.32h-.14l0,0A.33.33,0,0,0,26.35,29.61Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }));
};
const BrandIcon3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(BrandIcon3Base)`
  .cls-1 {
    fill: #2f3640;
  }
  .cls-2 {
    fill: none;
    stroke: #2f3640;
    stroke-miterlimit: 10;
  }
`;

/***/ }),

/***/ "./src/components/recent_entries/item.tsx":
/*!************************************************!*\
  !*** ./src/components/recent_entries/item.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/src/components/recent_entries/item.tsx";


const RecentPostItem = ({
  title,
  created,
  category,
  link = '/news'
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "recent-entry-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: link,
    className: "recent-entry-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "recent-entry-meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, created, "\u30FB", category), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "recent-entry-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RecentPostItem);

/***/ }),

/***/ "./src/components/recent_entries/list.tsx":
/*!************************************************!*\
  !*** ./src/components/recent_entries/list.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ "./src/components/recent_entries/item.tsx");

var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/src/components/recent_entries/list.tsx";



const RecentEntries = () => {
  const [posts] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
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
  }]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "recent-entries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "recent-entry-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, posts.map((post, index) => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, post, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RecentEntries);

/***/ }),

/***/ "./src/components/shares/footer.tsx":
/*!******************************************!*\
  !*** ./src/components/shares/footer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/brand */ "./src/components/icons/brand.tsx");
var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/src/components/shares/footer.tsx";



/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "global-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Company"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "footer-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "\u5800\u53E3\u7E4A\u7DAD\u5DE5\u696D\u306B\u3064\u3044\u3066"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "\u65BD\u8A2D\u3068\u8A2D\u5099"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "\u4F1A\u793E\u60C5\u5831"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "\u304A\u77E5\u3089\u305B"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "footer-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "\u7E2B\u88FD\u30FB\u8CA9\u58F2"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u8CA9\u58F2"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "\u30EA\u30CD\u30F3\u30B5\u30D7\u30E9\u30A4"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_brand__WEBPACK_IMPORTED_MODULE_2__["BrandIconBase"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("address", {
    className: "footer-address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "\u3012950-2052 \u65B0\u6F5F\u770C\u65B0\u6F5F\u5E02\u897F\u533A\u5BFA\u5C3E2-19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:025-269-2591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "025-269-2591")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "\xA9 Horiguchi, Inc."));
});

/***/ }),

/***/ "./src/components/shares/header.tsx":
/*!******************************************!*\
  !*** ./src/components/shares/header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/brand */ "./src/components/icons/brand.tsx");
var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/horiguchi-seni.com/src/components/shares/header.tsx";




const Header = ({
  toggleMenu
}) => {
  const headerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (headerRef.current) {
      headerRef.current.classList.add('in');
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header",
    ref: headerRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_brand__WEBPACK_IMPORTED_MODULE_2__["BrandIconBase"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "global-nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "global-nav",
    role: "menubar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav-menu",
    role: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    role: "menuitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "\u30B5\u30FC\u30D3\u30B9"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    role: "menuitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/facility",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "\u65BD\u8A2D\u3068\u8A2D\u5099"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    role: "menuitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "\u304A\u77E5\u3089\u305B"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    role: "menuitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "\u4F1A\u793E\u60C5\u5831"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "contact",
    role: "menuitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "\u304A\u554F\u3044\u5408\u308F\u305B")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-trigger",
    onClick: e => {
      e.preventDefault();
      toggleMenu();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-trgger-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/containers/header.ts":
/*!**********************************!*\
  !*** ./src/containers/header.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shares_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/shares/header */ "./src/components/shares/header.tsx");
/* harmony import */ var _actions_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/header */ "./src/actions/header.ts");




//
// Map State To Props
//
const mapStateToProps = state => {
  return state.app;
}; //
// Map Dispatch To Props
//


const mapDispatchToProps = dispatch => ({
  toggleMenu: () => {
    dispatch(Object(_actions_header__WEBPACK_IMPORTED_MODULE_2__["toggleMenu"])());
  }
}); //
// Connect
//


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_shares_header__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/reducers/app.ts":
/*!*****************************!*\
  !*** ./src/reducers/app.ts ***!
  \*****************************/
/*! exports provided: initialState, appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typescript-fsa-reducers */ "typescript-fsa-reducers");
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/app */ "./src/actions/app.ts");



const initialState = {
  open_menu: false,
  windows: {
    scrollTop: 0,
    windowWidth: 0,
    windowHeight: 0,
    vw: 0,
    vh: 0
  }
};
const appReducer = Object(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1__["reducerWithInitialState"])(initialState).case(_actions_app__WEBPACK_IMPORTED_MODULE_2__["actions"].setApp, (state, data) => {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, data);
});

/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/reducers/app.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/reducers/service.ts");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wp_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wp_posts */ "./src/reducers/wp_posts.ts");
/* harmony import */ var _wp_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wp/post */ "./src/reducers/wp/post.ts");






const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  app: _app__WEBPACK_IMPORTED_MODULE_1__["appReducer"],
  service: _service__WEBPACK_IMPORTED_MODULE_2__["serviceReducer"],
  form: redux_form__WEBPACK_IMPORTED_MODULE_3__["reducer"],
  wpPosts: _wp_posts__WEBPACK_IMPORTED_MODULE_4__["WpPostsReducer"],
  wpPost: _wp_post__WEBPACK_IMPORTED_MODULE_5__["WpPostReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./src/reducers/service.ts":
/*!*********************************!*\
  !*** ./src/reducers/service.ts ***!
  \*********************************/
/*! exports provided: initialState, serviceReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceReducer", function() { return serviceReducer; });
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-fsa-reducers */ "typescript-fsa-reducers");
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  list: [{
    image_src: 'http://horiguchi-seni.com/static/images/service/iron.jpg',
    title: 'クリーニング付リース',
    summary: 'ユニフォームのクリーニング付きリース',
    label_en: 'Cleaning&Lease',
    label_ja: 'クリーニング付リースについて',
    link: '/service/cleaning-lease'
  }, {
    image_src: 'http://horiguchi-seni.com/static/images/service/machine-quilting.jpg',
    title: '縫製・販売',
    summary: '生地・デザインの選定からユニフォームを縫製販売',
    label_en: 'Sewing & Sales',
    label_ja: '縫製・販売について',
    link: '/service/sewing'
  }, {
    image_src: 'http://horiguchi-seni.com/static/images/service/name.jpg',
    title: 'ユニフォーム販売',
    summary: 'メーカー品のユニフォームをにて特別価格にて販売',
    label_en: 'Sales',
    label_ja: '販売について',
    link: '/service/sales'
  }]
};
const serviceReducer = Object(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_0__["reducerWithInitialState"])(initialState);

/***/ }),

/***/ "./src/reducers/wp/post.ts":
/*!*********************************!*\
  !*** ./src/reducers/wp/post.ts ***!
  \*********************************/
/*! exports provided: WpPostReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpPostReducer", function() { return WpPostReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typescript-fsa-reducers */ "typescript-fsa-reducers");
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_wp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/wp */ "./src/actions/wp.ts");



const initialState = {
  isLoading: false,
  isError: false,
  data: null
};
const WpPostReducer = Object(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1__["reducerWithInitialState"])(initialState).case(_actions_wp__WEBPACK_IMPORTED_MODULE_2__["actions"].setWp, (state, data) => {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, data);
}).case(_actions_wp__WEBPACK_IMPORTED_MODULE_2__["actions"].setWpPost, (state, data) => {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    data: data
  });
});

/***/ }),

/***/ "./src/reducers/wp_posts.ts":
/*!**********************************!*\
  !*** ./src/reducers/wp_posts.ts ***!
  \**********************************/
/*! exports provided: WpPostsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpPostsReducer", function() { return WpPostsReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typescript-fsa-reducers */ "typescript-fsa-reducers");
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_wp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/wp */ "./src/actions/wp.ts");



const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  headers: {
    'x-wp-total': 0,
    'x-wp-totalpages': 0
  }
};
const WpPostsReducer = Object(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1__["reducerWithInitialState"])(initialState).case(_actions_wp__WEBPACK_IMPORTED_MODULE_2__["actions"].setWp, (state, data) => {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, data);
}).case(_actions_wp__WEBPACK_IMPORTED_MODULE_2__["actions"].setWpPosts, (state, data) => {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    data: data
  });
}).case(_actions_wp__WEBPACK_IMPORTED_MODULE_2__["actions"].setWpPostsHeaders, (state, data) => {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    headers: data
  });
});

/***/ }),

/***/ "./src/styles/common.scss":
/*!********************************!*\
  !*** ./src/styles/common.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "typescript-fsa":
/*!*********************************!*\
  !*** external "typescript-fsa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typescript-fsa");

/***/ }),

/***/ "typescript-fsa-reducers":
/*!******************************************!*\
  !*** external "typescript-fsa-reducers" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typescript-fsa-reducers");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map