/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_dev/js/classes/Core.js":
/*!*********************************!*\
  !*** ./_dev/js/classes/Core.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _site_HeaderOnScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site/HeaderOnScroll */ "./_dev/js/classes/site/HeaderOnScroll.js");
/* harmony import */ var _site_MenuSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site/MenuSidebar */ "./_dev/js/classes/site/MenuSidebar.js");
/* harmony import */ var _sections_AreaSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/AreaSupport */ "./_dev/js/classes/sections/AreaSupport.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Core = function Core() {
  _classCallCheck(this, Core);

  new _site_HeaderOnScroll__WEBPACK_IMPORTED_MODULE_0__["default"]();
  new _site_MenuSidebar__WEBPACK_IMPORTED_MODULE_1__["default"]();
  new _sections_AreaSupport__WEBPACK_IMPORTED_MODULE_2__["default"]();
};

new Core();

/***/ }),

/***/ "./_dev/js/classes/sections/AreaSupport.js":
/*!*************************************************!*\
  !*** ./_dev/js/classes/sections/AreaSupport.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AreaSupport; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AreaSupport =
/*#__PURE__*/
function () {
  function AreaSupport() {
    _classCallCheck(this, AreaSupport);

    if (!this.setVars()) return;
    this.setEvents();
  }

  _createClass(AreaSupport, [{
    key: "setVars",
    value: function setVars() {
      this.settings = {
        main: 'data-area-support',
        open: 'data-area-support-open',
        close: 'data-area-support-close',
        item: 'data-area-support-item'
      };
      this.areasSupport = document.querySelectorAll("[".concat(this.settings.main, "]"));
      if (!this.areasSupport) return;
      return true;
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;

      this.areasSupport.forEach(function (elWrapper) {
        elWrapper.querySelector("[".concat(_this.settings.open, "]")).addEventListener('click', function () {
          _this.toggleActive(elWrapper);
        });
        elWrapper.querySelector("[".concat(_this.settings.close, "]")).addEventListener('click', function () {
          _this.toggleActive(elWrapper);
        });
      });
    }
  }, {
    key: "toggleActive",
    value: function toggleActive(elWrapper) {
      elWrapper.querySelector("[".concat(this.settings.item, "]")).toggleClass('active');
    }
  }]);

  return AreaSupport;
}();



/***/ }),

/***/ "./_dev/js/classes/site/HeaderOnScroll.js":
/*!************************************************!*\
  !*** ./_dev/js/classes/site/HeaderOnScroll.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderOnScroll; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HeaderOnScroll =
/*#__PURE__*/
function () {
  function HeaderOnScroll() {
    _classCallCheck(this, HeaderOnScroll);

    if (!this.setVars()) return;
    this.setEvents();
  }

  _createClass(HeaderOnScroll, [{
    key: "setVars",
    value: function setVars() {
      this.scrollHeader = document.querySelector('[data-header-onScroll]');
      if (!this.scrollHeader) return;
      this.setHeader();
      return true;
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;

      window.addEventListener('scroll', function () {
        _this.setHeader();
      });
    }
  }, {
    key: "setHeader",
    value: function setHeader() {
      var st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > 50) {
        this.scrollHeader.addClass('active');
      } else {
        this.scrollHeader.removeClass('active');
      }
    }
  }]);

  return HeaderOnScroll;
}();



/***/ }),

/***/ "./_dev/js/classes/site/MenuSidebar.js":
/*!*********************************************!*\
  !*** ./_dev/js/classes/site/MenuSidebar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuSidebar; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MenuSidebar =
/*#__PURE__*/
function () {
  function MenuSidebar() {
    _classCallCheck(this, MenuSidebar);

    if (!this.setVars()) return;
    this.setEvents();
  }

  _createClass(MenuSidebar, [{
    key: "setVars",
    value: function setVars() {
      this.settings = {
        main: 'data-menu',
        button: 'data-menu-button',
        menu: 'data-menu-wrapper',
        dark: 'data-dark'
      };
      this.menu = document.querySelector("[".concat(this.settings.main, "]"));
      if (!this.menu) return;
      return true;
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;

      var menu = document.querySelector("[".concat(this.settings.menu, "]"));
      this.menu.querySelector("[".concat(this.settings.button, "]")).addEventListener('click', function (e) {
        e.stopPropagation();

        _this.showMenu(menu);

        menu.addEventListener('click', function (e) {
          e.stopPropagation();
        });
      });
      window.addEventListener('click', function () {
        if (menu.hasClass('active')) {
          _this.hideMenu(menu);
        }
      });
    }
  }, {
    key: "showMenu",
    value: function showMenu(menu) {
      console.log(menu);
      menu.addClass('active');
      document.querySelector("[".concat(this.settings.dark, "]")).addClass('active');
      document.querySelector("body").addClass('over-hidden');
    }
  }, {
    key: "hideMenu",
    value: function hideMenu(menu) {
      menu.removeClass('active');
      document.querySelector("[".concat(this.settings.dark, "]")).removeClass('active');
      document.querySelector("body").removeClass('over-hidden');
    }
  }]);

  return MenuSidebar;
}();



/***/ }),

/***/ "./_dev/js/vendors/helpers/classes.js":
/*!********************************************!*\
  !*** ./_dev/js/vendors/helpers/classes.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Example of use is at the bottom of file */
Element.prototype.hasClass = function hasClass(className) {
  if (this.classList) {
    return this.classList.contains(className);
  }

  return !!this.className.match(new RegExp("(\\s|^)".concat(className, "(\\s|$)")));
};

Element.prototype.addClass = function addClass(className) {
  if (this.hasClass(className)) return;

  if (this.classList) {
    this.classList.add(className);
  } else {
    this.className += " ".concat(className);
  }
};

NodeList.prototype.addClass = function addClass(className) {
  var length = this.length;

  for (var i = 0; i < length; i++) {
    this[i].addClass(className);
  }
};

Element.prototype.removeClass = function removeClass(className) {
  if (!this.hasClass(className)) return;

  if (this.classList) {
    this.classList.remove(className);
  } else {
    var reg = new RegExp("(\\s|^)".concat(className, "(\\s|$)"));
    this.className = this.className.replace(reg, ' ');
  }
};

NodeList.prototype.removeClass = function removeClass(className) {
  var length = this.length;

  for (var i = 0; i < length; i++) {
    this[i].removeClass(className);
  }
};

Element.prototype.toggleClass = function toggleClass(className) {
  if (!this.hasClass(className)) {
    this.addClass(className);
  } else {
    this.removeClass(className);
  }
};

NodeList.prototype.toggleClass = function toggleClass(className) {
  var length = this.length;

  for (var i = 0; i < length; i++) {
    this[i].toggleClass(className);
  }
};

HTMLCollection.prototype.addClass = NodeList.prototype.addClass;
HTMLCollection.prototype.removeClass = NodeList.prototype.removeClass;
HTMLCollection.prototype.toggleClass = NodeList.prototype.toggleClass;
/*

  Example:

    document.body.addClass('myCustomClass')
    document.body.hasClass('myCustomClass')
    document.body.removeClass('myCustomClass')

*/

/***/ }),

/***/ "./_dev/js/vendors/helpers/events.js":
/*!*******************************************!*\
  !*** ./_dev/js/vendors/helpers/events.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Example of use is at the bottom of file */
Element.prototype.addEvent = function addEvent(name, fn) {
  if (name === undefined) return;
  this.events = this.events || {};

  this.events.name = function (e) {
    fn(e.detail);
  };

  this.addEventListener(name, this.events.name);
};

Element.prototype.triggerEvent = function triggerEvent(name, data) {
  if (name === undefined) return;
  this.dispatchEvent(new CustomEvent(name, {
    detail: data
  }));
};

Element.prototype.removeEvent = function removeEvent(name) {
  if (name === undefined) return;
  this.removeEventListener(name, this.events.name);
  delete this.events.name;
};

HTMLCollection.prototype.addEvent = NodeList.prototype.addEvent;
HTMLCollection.prototype.triggerEvent = NodeList.prototype.triggerEvent;
HTMLCollection.prototype.removeEvent = NodeList.prototype.removeEvent;
document.addEvent = Element.prototype.addEvent.bind(document);
window.addEvent = Element.prototype.addEvent.bind(window);
document.triggerEvent = Element.prototype.triggerEvent.bind(document);
window.triggerEvent = Element.prototype.triggerEvent.bind(window);
document.removeEvent = Element.prototype.removeEvent.bind(document);
window.removeEvent = Element.prototype.removeEvent.bind(window);
/*

  Example:

    window.addEvent('myCustomEvent', (e) => {
      console.log(e.test)
      window.removeEvent('myCustomEvent')
    })

    window.triggerEvent('myCustomEvent', { test: 'Example' })

*/

/***/ }),

/***/ "./_dev/js/vendors/polyfills/Array/find.js":
/*!*************************************************!*\
  !*** ./_dev/js/vendors/polyfills/Array/find.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }

    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }

    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];

      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }

    return undefined;
  };
}

/***/ }),

/***/ "./_dev/js/vendors/polyfills/Array/findIndex.js":
/*!******************************************************!*\
  !*** ./_dev/js/vendors/polyfills/Array/findIndex.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" ma wartość null lub undefined');
      }

      var o = Object(this); // 2. Niech len będzie ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. Jeśli IsCallable(predicate) jest fałszem, rzuć wyjątek TypeError.

      if (typeof predicate !== 'function') {
        throw new TypeError('predykat musi być funkcją');
      } // 4. Jeśli thisArg został podany, niech T będzie thisArg; w przeciwnym wypadku, niech T będzie undefined.


      var thisArg = arguments[1]; // 5. Let k be 0.

      var k = 0; // 6. Powtarzaj, dopóki k < len

      while (k < len) {
        // a. Niech Pk będzie ! ToString(k).
        // b. Niech kValue będzie ? Get(O, Pk).
        // c. Niech testResult będzie ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. Jeśli testResult jest prawdą, zwróć k.
        var kValue = o[k];

        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        } // e. Zwiększ wartość k o 1.


        k++;
      } // 7. Return -1.


      return -1;
    }
  });
}

/***/ }),

/***/ "./_dev/js/vendors/polyfills/Array/includes.js":
/*!*****************************************************!*\
  !*** ./_dev/js/vendors/polyfills/Array/includes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function value(valueToFind, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      } // 1. Let O be ? ToObject(this value).


      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. If len is 0, return false.

      if (len === 0) {
        return false;
      } // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)


      var n = fromIndex | 0; // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.

      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      } // 7. Repeat, while k < len


      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(valueToFind, elementK) is true, return true.
        if (sameValueZero(o[k], valueToFind)) {
          return true;
        } // c. Increase k by 1. 


        k++;
      } // 8. Return false


      return false;
    }
  });
}

/***/ }),

/***/ "./_dev/js/vendors/polyfills/Array/keys.js":
/*!*************************************************!*\
  !*** ./_dev/js/vendors/polyfills/Array/keys.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./_dev/js/vendors/polyfills/Array/of.js":
/*!***********************************************!*\
  !*** ./_dev/js/vendors/polyfills/Array/of.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Array.of) {
  Array.of = function () {
    return Array.prototype.slice.call(arguments);
  };
}

/***/ }),

/***/ "./_dev/js/vendors/polyfills/ChildNode/after.js":
/*!******************************************************!*\
  !*** ./_dev/js/vendors/polyfills/ChildNode/after.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/after()/after().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('after')) {
      return;
    }

    Object.defineProperty(item, 'after', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function after() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.parentNode.insertBefore(docFrag, this.nextSibling);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/***/ }),

/***/ "./_dev/js/vendors/polyfills/ChildNode/before.js":
/*!*******************************************************!*\
  !*** ./_dev/js/vendors/polyfills/ChildNode/before.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/before()/before().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('before')) {
      return;
    }

    Object.defineProperty(item, 'before', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function before() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.parentNode.insertBefore(docFrag, this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/***/ }),

/***/ "./_dev/js/vendors/polyfills/ChildNode/remove.js":
/*!*******************************************************!*\
  !*** ./_dev/js/vendors/polyfills/ChildNode/remove.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }

    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        if (this.parentNode !== null) this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/***/ }),

/***/ "./_dev/js/vendors/polyfills/ChildNode/replaceWith.js":
/*!************************************************************!*\
  !*** ./_dev/js/vendors/polyfills/ChildNode/replaceWith.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ReplaceWithPolyfill() {
  'use-strict'; // For safari, and IE > 10

  var parent = this.parentNode,
      i = arguments.length,
      currentNode;
  if (!parent) return;
  if (!i) // if there are no arguments
    parent.removeChild(this);

  while (i--) {
    // i-- decrements i and returns the value of i before the decrement
    currentNode = arguments[i];

    if (_typeof(currentNode) !== 'object') {
      currentNode = this.ownerDocument.createTextNode(currentNode);
    } else if (currentNode.parentNode) {
      currentNode.parentNode.removeChild(currentNode);
    } // the value of "i" below is after the decrement


    if (!i) // if currentNode is the first argument (currentNode === arguments[0])
      parent.replaceChild(currentNode, this);else // if currentNode isn't the first
      parent.insertBefore(this.previousSibling, currentNode);
  }
}

if (!Element.prototype.replaceWith) Element.prototype.replaceWith = ReplaceWithPolyfill;
if (!CharacterData.prototype.replaceWith) CharacterData.prototype.replaceWith = ReplaceWithPolyfill;
if (!DocumentType.prototype.replaceWith) DocumentType.prototype.replaceWith = ReplaceWithPolyfill;

/***/ }),

/***/ "./_dev/js/vendors/polyfills/CustomEvent.js":
/*!**************************************************!*\
  !*** ./_dev/js/vendors/polyfills/CustomEvent.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

/***/ }),

/***/ "./_dev/js/vendors/polyfills/Element/closest.js":
/*!******************************************************!*\
  !*** ./_dev/js/vendors/polyfills/Element/closest.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}

/***/ }),

/***/ "./_dev/js/vendors/polyfills/NodeList/forEach.js":
/*!*******************************************************!*\
  !*** ./_dev/js/vendors/polyfills/NodeList/forEach.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/***/ }),

/***/ "./_dev/js/vendors/polyfills/Object/assign.js":
/*!****************************************************!*\
  !*** ./_dev/js/vendors/polyfills/Object/assign.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.assign != 'function') {
  Object.assign = function (target, varArgs) {
    // .length of function is 2
    'use strict';

    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}

/***/ }),

/***/ "./_dev/js/vendors/polyfills/Object/entries.js":
/*!*****************************************************!*\
  !*** ./_dev/js/vendors/polyfills/Object/entries.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Object.entries) Object.entries = function (obj) {
  var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array

  while (i--) {
    resArray[i] = [ownProps[i], obj[ownProps[i]]];
  }

  return resArray;
};

/***/ }),

/***/ "./_dev/js/vendors/polyfills/Object/is.js":
/*!************************************************!*\
  !*** ./_dev/js/vendors/polyfills/Object/is.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Object.is) {
  Object.is = function (x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  };
}

/***/ }),

/***/ "./_dev/js/vendors/polyfills/ParentNode/append.js":
/*!********************************************************!*\
  !*** ./_dev/js/vendors/polyfills/ParentNode/append.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('append')) {
      return;
    }

    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.appendChild(docFrag);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

/***/ }),

/***/ "./_dev/js/vendors/polyfills/ParentNode/prepend.js":
/*!*********************************************************!*\
  !*** ./_dev/js/vendors/polyfills/ParentNode/prepend.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) {
      return;
    }

    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.insertBefore(docFrag, this.firstChild);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

/***/ }),

/***/ "./_dev/js/vendors/polyfills/Promise.js":
/*!**********************************************!*\
  !*** ./_dev/js/vendors/polyfills/Promise.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  'use strict';
  /**
   * @this {Promise}
   */

  function finallyConstructor(callback) {
    var constructor = this.constructor;
    return this.then(function (value) {
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return constructor.resolve(callback()).then(function () {
        return constructor.reject(reason);
      });
    });
  } // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())


  var setTimeoutFunc = setTimeout;

  function noop() {} // Polyfill for Function.prototype.bind


  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }
  /**
   * @constructor
   * @param {Function} fn
   */


  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    /** @type {!number} */

    this._state = 0;
    /** @type {!boolean} */

    this._handled = false;
    /** @type {Promise|undefined} */

    this._value = undefined;
    /** @type {!Array<!Function>} */

    this._deferreds = [];
    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }

    if (self._state === 0) {
      self._deferreds.push(deferred);

      return;
    }

    self._handled = true;

    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;

      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }

      var ret;

      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }

      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');

      if (newValue && (_typeof(newValue) === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;

        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }

      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function () {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }

    self._deferreds = null;
  }
  /**
   * @constructor
   */


  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }
  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */


  function doResolve(fn, self) {
    var done = false;

    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    // @ts-ignore
    var prom = new this.constructor(noop);
    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.prototype['finally'] = finallyConstructor;

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (_typeof(val) === 'object' || typeof val === 'function')) {
            var then = val.then;

            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }

          args[i] = val;

          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && _typeof(value) === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  }; // Use polyfill for setImmediate for performance gains


  Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
    setImmediate(fn);
  } || function (fn) {
    setTimeoutFunc(fn, 0);
  };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };
  /** @suppress {undefinedVars} */


  var globalNS = function () {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') {
      return self;
    }

    if (typeof window !== 'undefined') {
      return window;
    }

    if (typeof global !== 'undefined') {
      return global;
    }

    throw new Error('unable to locate global object');
  }();

  if (!('Promise' in globalNS)) {
    globalNS['Promise'] = Promise;
  } else if (!globalNS.Promise.prototype['finally']) {
    globalNS.Promise.prototype['finally'] = finallyConstructor;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./_dev/scss/core.scss":
/*!*****************************!*\
  !*** ./_dev/scss/core.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./_dev/js/vendors/polyfills/Array/find.js ./_dev/js/vendors/polyfills/Array/findIndex.js ./_dev/js/vendors/polyfills/Array/includes.js ./_dev/js/vendors/polyfills/Array/keys.js ./_dev/js/vendors/polyfills/Array/of.js ./_dev/js/vendors/polyfills/ChildNode/after.js ./_dev/js/vendors/polyfills/ChildNode/before.js ./_dev/js/vendors/polyfills/ChildNode/remove.js ./_dev/js/vendors/polyfills/ChildNode/replaceWith.js ./_dev/js/vendors/polyfills/CustomEvent.js ./_dev/js/vendors/polyfills/Element/closest.js ./_dev/js/vendors/polyfills/NodeList/forEach.js ./_dev/js/vendors/polyfills/Object/assign.js ./_dev/js/vendors/polyfills/Object/entries.js ./_dev/js/vendors/polyfills/Object/is.js ./_dev/js/vendors/polyfills/ParentNode/append.js ./_dev/js/vendors/polyfills/ParentNode/prepend.js ./_dev/js/vendors/polyfills/Promise.js ./_dev/js/vendors/helpers/classes.js ./_dev/js/vendors/helpers/events.js ./_dev/js/classes/Core.js ./_dev/scss/core.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/Array/find.js */"./_dev/js/vendors/polyfills/Array/find.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/Array/findIndex.js */"./_dev/js/vendors/polyfills/Array/findIndex.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/Array/includes.js */"./_dev/js/vendors/polyfills/Array/includes.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/Array/keys.js */"./_dev/js/vendors/polyfills/Array/keys.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/Array/of.js */"./_dev/js/vendors/polyfills/Array/of.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/ChildNode/after.js */"./_dev/js/vendors/polyfills/ChildNode/after.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/ChildNode/before.js */"./_dev/js/vendors/polyfills/ChildNode/before.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/ChildNode/remove.js */"./_dev/js/vendors/polyfills/ChildNode/remove.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/ChildNode/replaceWith.js */"./_dev/js/vendors/polyfills/ChildNode/replaceWith.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/CustomEvent.js */"./_dev/js/vendors/polyfills/CustomEvent.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/Element/closest.js */"./_dev/js/vendors/polyfills/Element/closest.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/NodeList/forEach.js */"./_dev/js/vendors/polyfills/NodeList/forEach.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/Object/assign.js */"./_dev/js/vendors/polyfills/Object/assign.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/Object/entries.js */"./_dev/js/vendors/polyfills/Object/entries.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/Object/is.js */"./_dev/js/vendors/polyfills/Object/is.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/ParentNode/append.js */"./_dev/js/vendors/polyfills/ParentNode/append.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/ParentNode/prepend.js */"./_dev/js/vendors/polyfills/ParentNode/prepend.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/polyfills/Promise.js */"./_dev/js/vendors/polyfills/Promise.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/helpers/classes.js */"./_dev/js/vendors/helpers/classes.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/vendors/helpers/events.js */"./_dev/js/vendors/helpers/events.js");
__webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/js/classes/Core.js */"./_dev/js/classes/Core.js");
module.exports = __webpack_require__(/*! /Users/karol/Sites/tresconnect/cms/wp-content/themes/tresconnect/_dev/scss/core.scss */"./_dev/scss/core.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vX2Rldi9qcy9jbGFzc2VzL0NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vX2Rldi9qcy9jbGFzc2VzL3NlY3Rpb25zL0FyZWFTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL19kZXYvanMvY2xhc3Nlcy9zaXRlL0hlYWRlck9uU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL19kZXYvanMvY2xhc3Nlcy9zaXRlL01lbnVTaWRlYmFyLmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9oZWxwZXJzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vX2Rldi9qcy92ZW5kb3JzL2hlbHBlcnMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9wb2x5ZmlsbHMvQXJyYXkvZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L2pzL3ZlbmRvcnMvcG9seWZpbGxzL0FycmF5L2ZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L2pzL3ZlbmRvcnMvcG9seWZpbGxzL0FycmF5L2luY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9wb2x5ZmlsbHMvQXJyYXkvb2YuanMiLCJ3ZWJwYWNrOi8vLy4vX2Rldi9qcy92ZW5kb3JzL3BvbHlmaWxscy9DaGlsZE5vZGUvYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vX2Rldi9qcy92ZW5kb3JzL3BvbHlmaWxscy9DaGlsZE5vZGUvYmVmb3JlLmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9wb2x5ZmlsbHMvQ2hpbGROb2RlL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L2pzL3ZlbmRvcnMvcG9seWZpbGxzL0NoaWxkTm9kZS9yZXBsYWNlV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L2pzL3ZlbmRvcnMvcG9seWZpbGxzL0N1c3RvbUV2ZW50LmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9wb2x5ZmlsbHMvRWxlbWVudC9jbG9zZXN0LmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9wb2x5ZmlsbHMvTm9kZUxpc3QvZm9yRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L2pzL3ZlbmRvcnMvcG9seWZpbGxzL09iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vX2Rldi9qcy92ZW5kb3JzL3BvbHlmaWxscy9PYmplY3QvZW50cmllcy5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L2pzL3ZlbmRvcnMvcG9seWZpbGxzL09iamVjdC9pcy5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L2pzL3ZlbmRvcnMvcG9seWZpbGxzL1BhcmVudE5vZGUvYXBwZW5kLmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9wb2x5ZmlsbHMvUGFyZW50Tm9kZS9wcmVwZW5kLmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9wb2x5ZmlsbHMvUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L3Njc3MvY29yZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJDb3JlIiwiSGVhZGVyT25TY3JvbGwiLCJNZW51U2lkZWJhciIsIkFyZWFTdXBwb3J0Iiwic2V0VmFycyIsInNldEV2ZW50cyIsInNldHRpbmdzIiwibWFpbiIsIm9wZW4iLCJjbG9zZSIsIml0ZW0iLCJhcmVhc1N1cHBvcnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVBY3RpdmUiLCJ0b2dnbGVDbGFzcyIsInNjcm9sbEhlYWRlciIsInNldEhlYWRlciIsIndpbmRvdyIsInN0IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYnV0dG9uIiwibWVudSIsImRhcmsiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwic2hvd01lbnUiLCJoYXNDbGFzcyIsImhpZGVNZW51IiwiY29uc29sZSIsImxvZyIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm1hdGNoIiwiUmVnRXhwIiwiYWRkIiwiTm9kZUxpc3QiLCJsZW5ndGgiLCJpIiwicmVtb3ZlIiwicmVnIiwicmVwbGFjZSIsIkhUTUxDb2xsZWN0aW9uIiwiYWRkRXZlbnQiLCJuYW1lIiwiZm4iLCJ1bmRlZmluZWQiLCJldmVudHMiLCJkZXRhaWwiLCJ0cmlnZ2VyRXZlbnQiLCJkYXRhIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwicmVtb3ZlRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYmluZCIsIkFycmF5IiwiZmluZCIsInByZWRpY2F0ZSIsIlR5cGVFcnJvciIsImxpc3QiLCJPYmplY3QiLCJ0aGlzQXJnIiwiYXJndW1lbnRzIiwidmFsdWUiLCJjYWxsIiwiZmluZEluZGV4IiwiZGVmaW5lUHJvcGVydHkiLCJvIiwibGVuIiwiayIsImtWYWx1ZSIsImluY2x1ZGVzIiwidmFsdWVUb0ZpbmQiLCJmcm9tSW5kZXgiLCJuIiwiTWF0aCIsIm1heCIsImFicyIsInNhbWVWYWx1ZVplcm8iLCJ4IiwieSIsImlzTmFOIiwib2YiLCJzbGljZSIsImFyciIsImhhc093blByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiYWZ0ZXIiLCJhcmdBcnIiLCJkb2NGcmFnIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImFyZ0l0ZW0iLCJpc05vZGUiLCJOb2RlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIlN0cmluZyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsIkNoYXJhY3RlckRhdGEiLCJEb2N1bWVudFR5cGUiLCJiZWZvcmUiLCJyZW1vdmVDaGlsZCIsIlJlcGxhY2VXaXRoUG9seWZpbGwiLCJwYXJlbnQiLCJjdXJyZW50Tm9kZSIsIm93bmVyRG9jdW1lbnQiLCJyZXBsYWNlQ2hpbGQiLCJwcmV2aW91c1NpYmxpbmciLCJyZXBsYWNlV2l0aCIsImV2ZW50IiwicGFyYW1zIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJldnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIkV2ZW50IiwibWF0Y2hlcyIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwiY2xvc2VzdCIsInMiLCJlbCIsInBhcmVudEVsZW1lbnQiLCJub2RlVHlwZSIsImNhbGxiYWNrIiwiYXNzaWduIiwidGFyZ2V0IiwidmFyQXJncyIsInRvIiwiaW5kZXgiLCJuZXh0U291cmNlIiwibmV4dEtleSIsImVudHJpZXMiLCJvYmoiLCJvd25Qcm9wcyIsImtleXMiLCJyZXNBcnJheSIsImlzIiwiYXBwZW5kIiwiRG9jdW1lbnQiLCJEb2N1bWVudEZyYWdtZW50IiwicHJlcGVuZCIsImZpcnN0Q2hpbGQiLCJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImZpbmFsbHlDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwidGhlbiIsInJlc29sdmUiLCJyZWFzb24iLCJyZWplY3QiLCJzZXRUaW1lb3V0RnVuYyIsInNldFRpbWVvdXQiLCJub29wIiwiYXBwbHkiLCJQcm9taXNlIiwiX3N0YXRlIiwiX2hhbmRsZWQiLCJfdmFsdWUiLCJfZGVmZXJyZWRzIiwiZG9SZXNvbHZlIiwiaGFuZGxlIiwic2VsZiIsImRlZmVycmVkIiwicHVzaCIsIl9pbW1lZGlhdGVGbiIsImNiIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwicHJvbWlzZSIsInJldCIsIm5ld1ZhbHVlIiwiZmluYWxlIiwiX3VuaGFuZGxlZFJlamVjdGlvbkZuIiwiSGFuZGxlciIsImRvbmUiLCJleCIsInByb20iLCJhbGwiLCJhcmdzIiwicmVtYWluaW5nIiwicmVzIiwidmFsIiwicmFjZSIsInZhbHVlcyIsInNldEltbWVkaWF0ZSIsImVyciIsIndhcm4iLCJnbG9iYWxOUyIsIkVycm9yIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTs7SUFHTUEsSSxHQUNKLGdCQUFjO0FBQUE7O0FBQ1osTUFBSUMsNERBQUo7QUFDQSxNQUFJQyx5REFBSjtBQUNBLE1BQUlDLDZEQUFKO0FBQ0QsQzs7QUFHSCxJQUFJSCxJQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDYnFCRyxXOzs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxzQkFBc0IsRUFBRTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pMRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsbUJBQU8sQ0FBQyxpRUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6Ii9wdWJsaWMvYnVpbGQvanMvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgSGVhZGVyT25TY3JvbGwgZnJvbSBcIi4vc2l0ZS9IZWFkZXJPblNjcm9sbFwiO1xuaW1wb3J0IE1lbnVTaWRlYmFyIGZyb20gXCIuL3NpdGUvTWVudVNpZGViYXJcIjtcbmltcG9ydCBBcmVhU3VwcG9ydCBmcm9tIFwiLi9zZWN0aW9ucy9BcmVhU3VwcG9ydFwiO1xuXG5cbmNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBuZXcgSGVhZGVyT25TY3JvbGwoKTtcbiAgICBuZXcgTWVudVNpZGViYXIoKTtcbiAgICBuZXcgQXJlYVN1cHBvcnQoKTtcbiAgfVxufVxuXG5uZXcgQ29yZSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJlYVN1cHBvcnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIXRoaXMuc2V0VmFycygpKSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgfVxuICBcbiAgc2V0VmFycygpIHtcbiAgICBcbiAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgbWFpbjogJ2RhdGEtYXJlYS1zdXBwb3J0JyxcbiAgICAgIG9wZW46ICdkYXRhLWFyZWEtc3VwcG9ydC1vcGVuJyxcbiAgICAgIGNsb3NlOiAnZGF0YS1hcmVhLXN1cHBvcnQtY2xvc2UnLFxuICAgICAgaXRlbTogJ2RhdGEtYXJlYS1zdXBwb3J0LWl0ZW0nLFxuICAgIH07XG4gICAgXG4gICAgdGhpcy5hcmVhc1N1cHBvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHt0aGlzLnNldHRpbmdzLm1haW59XWApO1xuICAgIGlmICghdGhpcy5hcmVhc1N1cHBvcnQpIHJldHVybjtcbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgc2V0RXZlbnRzKCkge1xuICAgIHRoaXMuYXJlYXNTdXBwb3J0LmZvckVhY2goKGVsV3JhcHBlcikgPT4ge1xuICAgICAgZWxXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMuc2V0dGluZ3Mub3Blbn1dYCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKGVsV3JhcHBlcik7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgZWxXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMuc2V0dGluZ3MuY2xvc2V9XWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZUFjdGl2ZShlbFdyYXBwZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHRvZ2dsZUFjdGl2ZShlbFdyYXBwZXIpIHtcbiAgICBlbFdyYXBwZXIucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5zZXR0aW5ncy5pdGVtfV1gKS50b2dnbGVDbGFzcygnYWN0aXZlJylcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyT25TY3JvbGwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIXRoaXMuc2V0VmFycygpKSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgfVxuICBcbiAgc2V0VmFycygpIHtcbiAgICB0aGlzLnNjcm9sbEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWhlYWRlci1vblNjcm9sbF0nKTtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsSGVhZGVyKSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5zZXRIZWFkZXIoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgc2V0RXZlbnRzKCkge1xuICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldEhlYWRlcigpO1xuICAgIH0pO1xuICB9XG4gIFxuICBzZXRIZWFkZXIgKCkge1xuICAgIGNvbnN0IHN0ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgaWYgKHN0ID4gNTApIHtcbiAgICAgIHRoaXMuc2Nyb2xsSGVhZGVyLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY3JvbGxIZWFkZXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVNpZGViYXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIXRoaXMuc2V0VmFycygpKSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgfVxuICBcbiAgc2V0VmFycygpIHtcbiAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgbWFpbjogJ2RhdGEtbWVudScsXG4gICAgICBidXR0b246ICdkYXRhLW1lbnUtYnV0dG9uJyxcbiAgICAgIG1lbnU6ICdkYXRhLW1lbnUtd3JhcHBlcicsXG4gICAgICBkYXJrOiAnZGF0YS1kYXJrJyxcbiAgICB9O1xuICAgIFxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMuc2V0dGluZ3MubWFpbn1dYCk7XG4gICAgaWYgKCF0aGlzLm1lbnUpIHJldHVybjtcbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgc2V0RXZlbnRzKCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLnNldHRpbmdzLm1lbnV9XWApO1xuICAgIFxuICAgIHRoaXMubWVudS5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLnNldHRpbmdzLmJ1dHRvbn1dYCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgXG4gICAgICB0aGlzLnNob3dNZW51KG1lbnUpO1xuICAgICAgXG4gICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKG1lbnUuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHRoaXMuaGlkZU1lbnUobWVudSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBcbiAgc2hvd01lbnUgKG1lbnUpIHtcbiAgICBjb25zb2xlLmxvZyhtZW51KVxuICAgIG1lbnUuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMuc2V0dGluZ3MuZGFya31dYCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvZHlgKS5hZGRDbGFzcygnb3Zlci1oaWRkZW4nKTtcbiAgfVxuICBcbiAgaGlkZU1lbnUgKG1lbnUpIHtcbiAgICBtZW51LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLnNldHRpbmdzLmRhcmt9XWApLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBib2R5YCkucmVtb3ZlQ2xhc3MoJ292ZXItaGlkZGVuJyk7XG4gIH1cbiAgXG59XG4iLCIvKiBFeGFtcGxlIG9mIHVzZSBpcyBhdCB0aGUgYm90dG9tIG9mIGZpbGUgKi9cclxuXHJcbkVsZW1lbnQucHJvdG90eXBlLmhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XHJcblxyXG4gIGlmICh0aGlzLmNsYXNzTGlzdCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gISF0aGlzLmNsYXNzTmFtZS5tYXRjaChuZXcgUmVnRXhwKGAoXFxcXHN8Xikke2NsYXNzTmFtZX0oXFxcXHN8JClgKSk7XHJcblxyXG59O1xyXG5cclxuRWxlbWVudC5wcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcclxuXHJcbiAgaWYgKHRoaXMuaGFzQ2xhc3MoY2xhc3NOYW1lKSkgcmV0dXJuO1xyXG5cclxuICBpZiAodGhpcy5jbGFzc0xpc3QpIHtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLmNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfWA7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5hZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xyXG5cclxuICBjb25zdCB7IGxlbmd0aCB9ID0gdGhpcztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICB0aGlzW2ldLmFkZENsYXNzKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XHJcblxyXG4gIGlmICghdGhpcy5oYXNDbGFzcyhjbGFzc05hbWUpKSByZXR1cm47XHJcblxyXG4gIGlmICh0aGlzLmNsYXNzTGlzdCkge1xyXG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHJlZyAgICAgID0gbmV3IFJlZ0V4cChgKFxcXFxzfF4pJHtjbGFzc05hbWV9KFxcXFxzfCQpYCk7XHJcbiAgICB0aGlzLmNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lLnJlcGxhY2UocmVnLCAnICcpO1xyXG4gIH1cclxuXHJcbn07XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcclxuXHJcbiAgY29uc3QgeyBsZW5ndGggfSA9IHRoaXM7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgdGhpc1tpXS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbn07XHJcblxyXG5FbGVtZW50LnByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xyXG5cclxuICBpZiAoIXRoaXMuaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xyXG4gICAgdGhpcy5hZGRDbGFzcyhjbGFzc05hbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xyXG5cclxuICBjb25zdCB7IGxlbmd0aCB9ID0gdGhpcztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICB0aGlzW2ldLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbkhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5hZGRDbGFzcyAgICA9IE5vZGVMaXN0LnByb3RvdHlwZS5hZGRDbGFzcztcclxuSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLnJlbW92ZUNsYXNzID0gTm9kZUxpc3QucHJvdG90eXBlLnJlbW92ZUNsYXNzO1xyXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBOb2RlTGlzdC5wcm90b3R5cGUudG9nZ2xlQ2xhc3M7XHJcblxyXG4vKlxyXG5cclxuICBFeGFtcGxlOlxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYWRkQ2xhc3MoJ215Q3VzdG9tQ2xhc3MnKVxyXG4gICAgZG9jdW1lbnQuYm9keS5oYXNDbGFzcygnbXlDdXN0b21DbGFzcycpXHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNsYXNzKCdteUN1c3RvbUNsYXNzJylcclxuXHJcbiovXHJcbiIsIi8qIEV4YW1wbGUgb2YgdXNlIGlzIGF0IHRoZSBib3R0b20gb2YgZmlsZSAqL1xyXG5cclxuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiBhZGRFdmVudChuYW1lLCBmbikge1xyXG5cclxuICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gIHRoaXMuZXZlbnRzICAgICAgPSB0aGlzLmV2ZW50cyB8fCB7fTtcclxuICB0aGlzLmV2ZW50cy5uYW1lID0gKGUpID0+IHsgZm4oZS5kZXRhaWwpOyB9O1xyXG4gIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCB0aGlzLmV2ZW50cy5uYW1lKTtcclxuXHJcbn07XHJcblxyXG5FbGVtZW50LnByb3RvdHlwZS50cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbiB0cmlnZ2VyRXZlbnQobmFtZSwgZGF0YSkge1xyXG5cclxuICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xyXG4gICAgZGV0YWlsIDogZGF0YSxcclxuICB9KSk7XHJcblxyXG59O1xyXG5cclxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiByZW1vdmVFdmVudChuYW1lKSB7XHJcblxyXG4gIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHRoaXMuZXZlbnRzLm5hbWUpO1xyXG4gIGRlbGV0ZSB0aGlzLmV2ZW50cy5uYW1lO1xyXG5cclxufTtcclxuXHJcbkhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5hZGRFdmVudCAgICAgPSBOb2RlTGlzdC5wcm90b3R5cGUuYWRkRXZlbnQ7XHJcbkhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS50cmlnZ2VyRXZlbnQgPSBOb2RlTGlzdC5wcm90b3R5cGUudHJpZ2dlckV2ZW50O1xyXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUucmVtb3ZlRXZlbnQgID0gTm9kZUxpc3QucHJvdG90eXBlLnJlbW92ZUV2ZW50O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnQgICAgID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnQuYmluZChkb2N1bWVudCk7XHJcbndpbmRvdy5hZGRFdmVudCAgICAgICA9IEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50LmJpbmQod2luZG93KTtcclxuZG9jdW1lbnQudHJpZ2dlckV2ZW50ID0gRWxlbWVudC5wcm90b3R5cGUudHJpZ2dlckV2ZW50LmJpbmQoZG9jdW1lbnQpO1xyXG53aW5kb3cudHJpZ2dlckV2ZW50ICAgPSBFbGVtZW50LnByb3RvdHlwZS50cmlnZ2VyRXZlbnQuYmluZCh3aW5kb3cpO1xyXG5kb2N1bWVudC5yZW1vdmVFdmVudCAgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudC5iaW5kKGRvY3VtZW50KTtcclxud2luZG93LnJlbW92ZUV2ZW50ICAgID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnQuYmluZCh3aW5kb3cpO1xyXG5cclxuLypcclxuXHJcbiAgRXhhbXBsZTpcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnQoJ215Q3VzdG9tRXZlbnQnLCAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLnRlc3QpXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudCgnbXlDdXN0b21FdmVudCcpXHJcbiAgICB9KVxyXG5cclxuICAgIHdpbmRvdy50cmlnZ2VyRXZlbnQoJ215Q3VzdG9tRXZlbnQnLCB7IHRlc3Q6ICdFeGFtcGxlJyB9KVxyXG5cclxuKi9cclxuIiwiaWYgKCFBcnJheS5wcm90b3R5cGUuZmluZCkge1xyXG4gIEFycmF5LnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24ocHJlZGljYXRlKSB7XHJcbiAgICBpZiAodGhpcyA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LnByb3RvdHlwZS5maW5kIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xyXG4gICAgfVxyXG4gICAgdmFyIGxpc3QgPSBPYmplY3QodGhpcyk7XHJcbiAgICB2YXIgbGVuZ3RoID0gbGlzdC5sZW5ndGggPj4+IDA7XHJcbiAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcclxuICAgIHZhciB2YWx1ZTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhbHVlID0gbGlzdFtpXTtcclxuICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpLCBsaXN0KSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9O1xyXG59IiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxyXG5pZiAoIUFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgpIHtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnZmluZEluZGV4Jywge1xyXG4gICAgdmFsdWU6IGZ1bmN0aW9uKHByZWRpY2F0ZSkge1xyXG4gICAgIC8vIDEuIExldCBPIGJlID8gVG9PYmplY3QodGhpcyB2YWx1ZSkuXHJcbiAgICAgIGlmICh0aGlzID09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInRoaXNcIiBtYSB3YXJ0b8WbxIcgbnVsbCBsdWIgdW5kZWZpbmVkJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBvID0gT2JqZWN0KHRoaXMpO1xyXG5cclxuICAgICAgLy8gMi4gTmllY2ggbGVuIGLEmWR6aWUgPyBUb0xlbmd0aCg/IEdldChPLCBcImxlbmd0aFwiKSkuXHJcbiAgICAgIHZhciBsZW4gPSBvLmxlbmd0aCA+Pj4gMDtcclxuXHJcbiAgICAgIC8vIDMuIEplxZtsaSBJc0NhbGxhYmxlKHByZWRpY2F0ZSkgamVzdCBmYcWCc3plbSwgcnp1xIcgd3lqxIV0ZWsgVHlwZUVycm9yLlxyXG4gICAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ByZWR5a2F0IG11c2kgYnnEhyBmdW5rY2rEhScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyA0LiBKZcWbbGkgdGhpc0FyZyB6b3N0YcWCIHBvZGFueSwgbmllY2ggVCBixJlkemllIHRoaXNBcmc7IHcgcHJ6ZWNpd255bSB3eXBhZGt1LCBuaWVjaCBUIGLEmWR6aWUgdW5kZWZpbmVkLlxyXG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcclxuXHJcbiAgICAgIC8vIDUuIExldCBrIGJlIDAuXHJcbiAgICAgIHZhciBrID0gMDtcclxuXHJcbiAgICAgIC8vIDYuIFBvd3RhcnphaiwgZG9ww7NraSBrIDwgbGVuXHJcbiAgICAgIHdoaWxlIChrIDwgbGVuKSB7XHJcbiAgICAgICAgLy8gYS4gTmllY2ggUGsgYsSZZHppZSAhIFRvU3RyaW5nKGspLlxyXG4gICAgICAgIC8vIGIuIE5pZWNoIGtWYWx1ZSBixJlkemllID8gR2V0KE8sIFBrKS5cclxuICAgICAgICAvLyBjLiBOaWVjaCB0ZXN0UmVzdWx0IGLEmWR6aWUgVG9Cb29sZWFuKD8gQ2FsbChwcmVkaWNhdGUsIFQsIMKrIGtWYWx1ZSwgaywgTyDCuykpLlxyXG4gICAgICAgIC8vIGQuIEplxZtsaSB0ZXN0UmVzdWx0IGplc3QgcHJhd2TEhSwgendyw7PEhyBrLlxyXG4gICAgICAgIHZhciBrVmFsdWUgPSBvW2tdO1xyXG4gICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbCh0aGlzQXJnLCBrVmFsdWUsIGssIG8pKSB7XHJcbiAgICAgICAgICByZXR1cm4gaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZS4gWndpxJlrc3ogd2FydG/Fm8SHIGsgbyAxLlxyXG4gICAgICAgIGsrKztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gNy4gUmV0dXJuIC0xLlxyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcclxuaWYgKCFBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMpIHtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnaW5jbHVkZXMnLCB7XHJcbiAgICB2YWx1ZTogZnVuY3Rpb24odmFsdWVUb0ZpbmQsIGZyb21JbmRleCkge1xyXG5cclxuICAgICAgaWYgKHRoaXMgPT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widGhpc1wiIGlzIG51bGwgb3Igbm90IGRlZmluZWQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMS4gTGV0IE8gYmUgPyBUb09iamVjdCh0aGlzIHZhbHVlKS5cclxuICAgICAgdmFyIG8gPSBPYmplY3QodGhpcyk7XHJcblxyXG4gICAgICAvLyAyLiBMZXQgbGVuIGJlID8gVG9MZW5ndGgoPyBHZXQoTywgXCJsZW5ndGhcIikpLlxyXG4gICAgICB2YXIgbGVuID0gby5sZW5ndGggPj4+IDA7XHJcblxyXG4gICAgICAvLyAzLiBJZiBsZW4gaXMgMCwgcmV0dXJuIGZhbHNlLlxyXG4gICAgICBpZiAobGVuID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyA0LiBMZXQgbiBiZSA/IFRvSW50ZWdlcihmcm9tSW5kZXgpLlxyXG4gICAgICAvLyAgICAoSWYgZnJvbUluZGV4IGlzIHVuZGVmaW5lZCwgdGhpcyBzdGVwIHByb2R1Y2VzIHRoZSB2YWx1ZSAwLilcclxuICAgICAgdmFyIG4gPSBmcm9tSW5kZXggfCAwO1xyXG5cclxuICAgICAgLy8gNS4gSWYgbiDiiaUgMCwgdGhlblxyXG4gICAgICAvLyAgYS4gTGV0IGsgYmUgbi5cclxuICAgICAgLy8gNi4gRWxzZSBuIDwgMCxcclxuICAgICAgLy8gIGEuIExldCBrIGJlIGxlbiArIG4uXHJcbiAgICAgIC8vICBiLiBJZiBrIDwgMCwgbGV0IGsgYmUgMC5cclxuICAgICAgdmFyIGsgPSBNYXRoLm1heChuID49IDAgPyBuIDogbGVuIC0gTWF0aC5hYnMobiksIDApO1xyXG5cclxuICAgICAgZnVuY3Rpb24gc2FtZVZhbHVlWmVybyh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHggPT09IHkgfHwgKHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgeSA9PT0gJ251bWJlcicgJiYgaXNOYU4oeCkgJiYgaXNOYU4oeSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyA3LiBSZXBlYXQsIHdoaWxlIGsgPCBsZW5cclxuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcclxuICAgICAgICAvLyBhLiBMZXQgZWxlbWVudEsgYmUgdGhlIHJlc3VsdCBvZiA/IEdldChPLCAhIFRvU3RyaW5nKGspKS5cclxuICAgICAgICAvLyBiLiBJZiBTYW1lVmFsdWVaZXJvKHZhbHVlVG9GaW5kLCBlbGVtZW50SykgaXMgdHJ1ZSwgcmV0dXJuIHRydWUuXHJcbiAgICAgICAgaWYgKHNhbWVWYWx1ZVplcm8ob1trXSwgdmFsdWVUb0ZpbmQpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYy4gSW5jcmVhc2UgayBieSAxLiBcclxuICAgICAgICBrKys7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDguIFJldHVybiBmYWxzZVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iLCJpZiAoIUFycmF5Lm9mKSB7XHJcbiAgQXJyYXkub2YgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gIH07XHJcbn0iLCIvL2Zyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9qc2Vyei9qc19waWVjZS9ibG9iL21hc3Rlci9ET00vQ2hpbGROb2RlL2FmdGVyKCkvYWZ0ZXIoKS5tZFxyXG4oZnVuY3Rpb24gKGFycikge1xyXG4gIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgnYWZ0ZXInKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaXRlbSwgJ2FmdGVyJywge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWZ0ZXIoKSB7XHJcbiAgICAgICAgdmFyIGFyZ0FyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXHJcbiAgICAgICAgICBkb2NGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFyZ0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChhcmdJdGVtKSB7XHJcbiAgICAgICAgICB2YXIgaXNOb2RlID0gYXJnSXRlbSBpbnN0YW5jZW9mIE5vZGU7XHJcbiAgICAgICAgICBkb2NGcmFnLmFwcGVuZENoaWxkKGlzTm9kZSA/IGFyZ0l0ZW0gOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoYXJnSXRlbSkpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvY0ZyYWcsIHRoaXMubmV4dFNpYmxpbmcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufSkoW0VsZW1lbnQucHJvdG90eXBlLCBDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSwgRG9jdW1lbnRUeXBlLnByb3RvdHlwZV0pOyIsIi8vIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9qc2Vyei9qc19waWVjZS9ibG9iL21hc3Rlci9ET00vQ2hpbGROb2RlL2JlZm9yZSgpL2JlZm9yZSgpLm1kXHJcbihmdW5jdGlvbiAoYXJyKSB7XHJcbiAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KCdiZWZvcmUnKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaXRlbSwgJ2JlZm9yZScsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJlZm9yZSgpIHtcclxuICAgICAgICB2YXIgYXJnQXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcclxuICAgICAgICAgIGRvY0ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXJnQXJyLmZvckVhY2goZnVuY3Rpb24gKGFyZ0l0ZW0pIHtcclxuICAgICAgICAgIHZhciBpc05vZGUgPSBhcmdJdGVtIGluc3RhbmNlb2YgTm9kZTtcclxuICAgICAgICAgIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoaXNOb2RlID8gYXJnSXRlbSA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhhcmdJdGVtKSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jRnJhZywgdGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KShbRWxlbWVudC5wcm90b3R5cGUsIENoYXJhY3RlckRhdGEucHJvdG90eXBlLCBEb2N1bWVudFR5cGUucHJvdG90eXBlXSk7IiwiLy8gZnJvbTpodHRwczovL2dpdGh1Yi5jb20vanNlcnovanNfcGllY2UvYmxvYi9tYXN0ZXIvRE9NL0NoaWxkTm9kZS9yZW1vdmUoKS9yZW1vdmUoKS5tZFxyXG4oZnVuY3Rpb24gKGFycikge1xyXG4gIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgncmVtb3ZlJykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0ZW0sICdyZW1vdmUnLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPT0gbnVsbClcclxuICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKFtFbGVtZW50LnByb3RvdHlwZSwgQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUsIERvY3VtZW50VHlwZS5wcm90b3R5cGVdKTsiLCJmdW5jdGlvbiBSZXBsYWNlV2l0aFBvbHlmaWxsKCkge1xyXG4gICd1c2Utc3RyaWN0JzsgLy8gRm9yIHNhZmFyaSwgYW5kIElFID4gMTBcclxuICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlLCBpID0gYXJndW1lbnRzLmxlbmd0aCwgY3VycmVudE5vZGU7XHJcbiAgaWYgKCFwYXJlbnQpIHJldHVybjtcclxuICBpZiAoIWkpIC8vIGlmIHRoZXJlIGFyZSBubyBhcmd1bWVudHNcclxuICAgIHBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICB3aGlsZSAoaS0tKSB7IC8vIGktLSBkZWNyZW1lbnRzIGkgYW5kIHJldHVybnMgdGhlIHZhbHVlIG9mIGkgYmVmb3JlIHRoZSBkZWNyZW1lbnRcclxuICAgIGN1cnJlbnROb2RlID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKHR5cGVvZiBjdXJyZW50Tm9kZSAhPT0gJ29iamVjdCcpe1xyXG4gICAgICBjdXJyZW50Tm9kZSA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdXJyZW50Tm9kZSk7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnROb2RlLnBhcmVudE5vZGUpe1xyXG4gICAgICBjdXJyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGN1cnJlbnROb2RlKTtcclxuICAgIH1cclxuICAgIC8vIHRoZSB2YWx1ZSBvZiBcImlcIiBiZWxvdyBpcyBhZnRlciB0aGUgZGVjcmVtZW50XHJcbiAgICBpZiAoIWkpIC8vIGlmIGN1cnJlbnROb2RlIGlzIHRoZSBmaXJzdCBhcmd1bWVudCAoY3VycmVudE5vZGUgPT09IGFyZ3VtZW50c1swXSlcclxuICAgICAgcGFyZW50LnJlcGxhY2VDaGlsZChjdXJyZW50Tm9kZSwgdGhpcyk7XHJcbiAgICBlbHNlIC8vIGlmIGN1cnJlbnROb2RlIGlzbid0IHRoZSBmaXJzdFxyXG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMucHJldmlvdXNTaWJsaW5nLCBjdXJyZW50Tm9kZSk7XHJcbiAgfVxyXG59XHJcbmlmICghRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZVdpdGgpXHJcbiAgICBFbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlV2l0aCA9IFJlcGxhY2VXaXRoUG9seWZpbGw7XHJcbmlmICghQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUucmVwbGFjZVdpdGgpXHJcbiAgICBDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZS5yZXBsYWNlV2l0aCA9IFJlcGxhY2VXaXRoUG9seWZpbGw7XHJcbmlmICghRG9jdW1lbnRUeXBlLnByb3RvdHlwZS5yZXBsYWNlV2l0aCkgXHJcbiAgICBEb2N1bWVudFR5cGUucHJvdG90eXBlLnJlcGxhY2VXaXRoID0gUmVwbGFjZVdpdGhQb2x5ZmlsbDsiLCIoZnVuY3Rpb24gKCkge1xyXG5cclxuICBpZiAoIHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIiApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQgKCBldmVudCwgcGFyYW1zICkge1xyXG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IG51bGwgfTtcclxuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApO1xyXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudCggZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCApO1xyXG4gICAgcmV0dXJuIGV2dDtcclxuICAgfVxyXG5cclxuICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xyXG5cclxuICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcclxufSkoKTsiLCJpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcclxuICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcclxufVxyXG5cclxuaWYgKCFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0KSB7XHJcbiAgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uKHMpIHtcclxuICAgIHZhciBlbCA9IHRoaXM7XHJcblxyXG4gICAgZG8ge1xyXG4gICAgICBpZiAoZWwubWF0Y2hlcyhzKSkgcmV0dXJuIGVsO1xyXG4gICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQgfHwgZWwucGFyZW50Tm9kZTtcclxuICAgIH0gd2hpbGUgKGVsICE9PSBudWxsICYmIGVsLm5vZGVUeXBlID09PSAxKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH07XHJcbn0iLCJpZiAod2luZG93Lk5vZGVMaXN0ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xyXG4gICAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpIHtcclxuICAgICAgICB0aGlzQXJnID0gdGhpc0FyZyB8fCB3aW5kb3c7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpc1tpXSwgaSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSIsImlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XHJcbiAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCwgdmFyQXJncykgeyAvLyAubGVuZ3RoIG9mIGZ1bmN0aW9uIGlzIDJcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGlmICh0YXJnZXQgPT0gbnVsbCkgeyAvLyBUeXBlRXJyb3IgaWYgdW5kZWZpbmVkIG9yIG51bGxcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XHJcblxyXG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xyXG5cclxuICAgICAgaWYgKG5leHRTb3VyY2UgIT0gbnVsbCkgeyAvLyBTa2lwIG92ZXIgaWYgdW5kZWZpbmVkIG9yIG51bGxcclxuICAgICAgICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHRTb3VyY2UpIHtcclxuICAgICAgICAgIC8vIEF2b2lkIGJ1Z3Mgd2hlbiBoYXNPd25Qcm9wZXJ0eSBpcyBzaGFkb3dlZFxyXG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xyXG4gICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG87XHJcbiAgfTtcclxufSIsImlmICghT2JqZWN0LmVudHJpZXMpXHJcbiAgT2JqZWN0LmVudHJpZXMgPSBmdW5jdGlvbiggb2JqICl7XHJcbiAgICB2YXIgb3duUHJvcHMgPSBPYmplY3Qua2V5cyggb2JqICksXHJcbiAgICAgICAgaSA9IG93blByb3BzLmxlbmd0aCxcclxuICAgICAgICByZXNBcnJheSA9IG5ldyBBcnJheShpKTsgLy8gcHJlYWxsb2NhdGUgdGhlIEFycmF5XHJcbiAgICB3aGlsZSAoaS0tKVxyXG4gICAgICByZXNBcnJheVtpXSA9IFtvd25Qcm9wc1tpXSwgb2JqW293blByb3BzW2ldXV07XHJcblxyXG4gICAgcmV0dXJuIHJlc0FycmF5O1xyXG4gIH07IiwiaWYgKCFPYmplY3QuaXMpIHtcclxuICBPYmplY3QuaXMgPSBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXHJcbiAgICBpZiAoeCA9PT0geSkgeyAvLyBTdGVwcyAxLTUsIDctMTBcclxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcclxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cclxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcclxuICAgIH1cclxuICB9O1xyXG59IiwiLy8gU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vanNlcnovanNfcGllY2UvYmxvYi9tYXN0ZXIvRE9NL1BhcmVudE5vZGUvYXBwZW5kKCkvYXBwZW5kKCkubWRcclxuKGZ1bmN0aW9uIChhcnIpIHtcclxuICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ2FwcGVuZCcpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdGVtLCAnYXBwZW5kJywge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKCkge1xyXG4gICAgICAgIHZhciBhcmdBcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxyXG4gICAgICAgICAgZG9jRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBcclxuICAgICAgICBhcmdBcnIuZm9yRWFjaChmdW5jdGlvbiAoYXJnSXRlbSkge1xyXG4gICAgICAgICAgdmFyIGlzTm9kZSA9IGFyZ0l0ZW0gaW5zdGFuY2VvZiBOb2RlO1xyXG4gICAgICAgICAgZG9jRnJhZy5hcHBlbmRDaGlsZChpc05vZGUgPyBhcmdJdGVtIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKGFyZ0l0ZW0pKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChkb2NGcmFnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKFtFbGVtZW50LnByb3RvdHlwZSwgRG9jdW1lbnQucHJvdG90eXBlLCBEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZV0pOyIsIi8vIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2pzZXJ6L2pzX3BpZWNlL2Jsb2IvbWFzdGVyL0RPTS9QYXJlbnROb2RlL3ByZXBlbmQoKS9wcmVwZW5kKCkubWRcclxuKGZ1bmN0aW9uIChhcnIpIHtcclxuICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ3ByZXBlbmQnKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaXRlbSwgJ3ByZXBlbmQnLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVwZW5kKCkge1xyXG4gICAgICAgIHZhciBhcmdBcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxyXG4gICAgICAgICAgZG9jRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBcclxuICAgICAgICBhcmdBcnIuZm9yRWFjaChmdW5jdGlvbiAoYXJnSXRlbSkge1xyXG4gICAgICAgICAgdmFyIGlzTm9kZSA9IGFyZ0l0ZW0gaW5zdGFuY2VvZiBOb2RlO1xyXG4gICAgICAgICAgZG9jRnJhZy5hcHBlbmRDaGlsZChpc05vZGUgPyBhcmdJdGVtIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKGFyZ0l0ZW0pKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbnNlcnRCZWZvcmUoZG9jRnJhZywgdGhpcy5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKFtFbGVtZW50LnByb3RvdHlwZSwgRG9jdW1lbnQucHJvdG90eXBlLCBEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZV0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XHJcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcclxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxyXG4gIChmYWN0b3J5KCkpO1xyXG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBAdGhpcyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIGZpbmFsbHlDb25zdHJ1Y3RvcihjYWxsYmFjaykge1xyXG4gIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgcmV0dXJuIHRoaXMudGhlbihcclxuICAgIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBmdW5jdGlvbihyZWFzb24pIHtcclxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuXHJcbi8vIFN0b3JlIHNldFRpbWVvdXQgcmVmZXJlbmNlIHNvIHByb21pc2UtcG9seWZpbGwgd2lsbCBiZSB1bmFmZmVjdGVkIGJ5XHJcbi8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxyXG52YXIgc2V0VGltZW91dEZ1bmMgPSBzZXRUaW1lb3V0O1xyXG5cclxuZnVuY3Rpb24gbm9vcCgpIHt9XHJcblxyXG4vLyBQb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcclxuZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xyXG4gIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKi9cclxuZnVuY3Rpb24gUHJvbWlzZShmbikge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlKSlcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xyXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBUeXBlRXJyb3IoJ25vdCBhIGZ1bmN0aW9uJyk7XHJcbiAgLyoqIEB0eXBlIHshbnVtYmVyfSAqL1xyXG4gIHRoaXMuX3N0YXRlID0gMDtcclxuICAvKiogQHR5cGUgeyFib29sZWFufSAqL1xyXG4gIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcclxuICAvKiogQHR5cGUge1Byb21pc2V8dW5kZWZpbmVkfSAqL1xyXG4gIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xyXG4gIC8qKiBAdHlwZSB7IUFycmF5PCFGdW5jdGlvbj59ICovXHJcbiAgdGhpcy5fZGVmZXJyZWRzID0gW107XHJcblxyXG4gIGRvUmVzb2x2ZShmbiwgdGhpcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xyXG4gIHdoaWxlIChzZWxmLl9zdGF0ZSA9PT0gMykge1xyXG4gICAgc2VsZiA9IHNlbGYuX3ZhbHVlO1xyXG4gIH1cclxuICBpZiAoc2VsZi5fc3RhdGUgPT09IDApIHtcclxuICAgIHNlbGYuX2RlZmVycmVkcy5wdXNoKGRlZmVycmVkKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgc2VsZi5faGFuZGxlZCA9IHRydWU7XHJcbiAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY2IgPSBzZWxmLl9zdGF0ZSA9PT0gMSA/IGRlZmVycmVkLm9uRnVsZmlsbGVkIDogZGVmZXJyZWQub25SZWplY3RlZDtcclxuICAgIGlmIChjYiA9PT0gbnVsbCkge1xyXG4gICAgICAoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciByZXQ7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXQgPSBjYihzZWxmLl92YWx1ZSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJlamVjdChkZWZlcnJlZC5wcm9taXNlLCBlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmVzb2x2ZShkZWZlcnJlZC5wcm9taXNlLCByZXQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNvbHZlKHNlbGYsIG5ld1ZhbHVlKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByb21pc2UgUmVzb2x1dGlvbiBQcm9jZWR1cmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9taXNlcy1hcGx1cy9wcm9taXNlcy1zcGVjI3RoZS1wcm9taXNlLXJlc29sdXRpb24tcHJvY2VkdXJlXHJcbiAgICBpZiAobmV3VmFsdWUgPT09IHNlbGYpXHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJyk7XHJcbiAgICBpZiAoXHJcbiAgICAgIG5ld1ZhbHVlICYmXHJcbiAgICAgICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICkge1xyXG4gICAgICB2YXIgdGhlbiA9IG5ld1ZhbHVlLnRoZW47XHJcbiAgICAgIGlmIChuZXdWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICBzZWxmLl9zdGF0ZSA9IDM7XHJcbiAgICAgICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICBmaW5hbGUoc2VsZik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgZG9SZXNvbHZlKGJpbmQodGhlbiwgbmV3VmFsdWUpLCBzZWxmKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGYuX3N0YXRlID0gMTtcclxuICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICBmaW5hbGUoc2VsZik7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmVqZWN0KHNlbGYsIGUpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVqZWN0KHNlbGYsIG5ld1ZhbHVlKSB7XHJcbiAgc2VsZi5fc3RhdGUgPSAyO1xyXG4gIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XHJcbiAgZmluYWxlKHNlbGYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5hbGUoc2VsZikge1xyXG4gIGlmIChzZWxmLl9zdGF0ZSA9PT0gMiAmJiBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICBQcm9taXNlLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKCFzZWxmLl9oYW5kbGVkKSB7XHJcbiAgICAgICAgUHJvbWlzZS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4oc2VsZi5fdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIGhhbmRsZShzZWxmLCBzZWxmLl9kZWZlcnJlZHNbaV0pO1xyXG4gIH1cclxuICBzZWxmLl9kZWZlcnJlZHMgPSBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9taXNlKSB7XHJcbiAgdGhpcy5vbkZ1bGZpbGxlZCA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogbnVsbDtcclxuICB0aGlzLm9uUmVqZWN0ZWQgPSB0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVqZWN0ZWQgOiBudWxsO1xyXG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUYWtlIGEgcG90ZW50aWFsbHkgbWlzYmVoYXZpbmcgcmVzb2x2ZXIgZnVuY3Rpb24gYW5kIG1ha2Ugc3VyZVxyXG4gKiBvbkZ1bGZpbGxlZCBhbmQgb25SZWplY3RlZCBhcmUgb25seSBjYWxsZWQgb25jZS5cclxuICpcclxuICogTWFrZXMgbm8gZ3VhcmFudGVlcyBhYm91dCBhc3luY2hyb255LlxyXG4gKi9cclxuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XHJcbiAgdmFyIGRvbmUgPSBmYWxzZTtcclxuICB0cnkge1xyXG4gICAgZm4oXHJcbiAgICAgIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcclxuICAgICAgICBkb25lID0gdHJ1ZTtcclxuICAgICAgICByZXNvbHZlKHNlbGYsIHZhbHVlKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcclxuICAgICAgICBkb25lID0gdHJ1ZTtcclxuICAgICAgICByZWplY3Qoc2VsZiwgcmVhc29uKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChleCkge1xyXG4gICAgaWYgKGRvbmUpIHJldHVybjtcclxuICAgIGRvbmUgPSB0cnVlO1xyXG4gICAgcmVqZWN0KHNlbGYsIGV4KTtcclxuICB9XHJcbn1cclxuXHJcblByb21pc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24ob25SZWplY3RlZCkge1xyXG4gIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XHJcbn07XHJcblxyXG5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgdmFyIHByb20gPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihub29wKTtcclxuXHJcbiAgaGFuZGxlKHRoaXMsIG5ldyBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9tKSk7XHJcbiAgcmV0dXJuIHByb207XHJcbn07XHJcblxyXG5Qcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddID0gZmluYWxseUNvbnN0cnVjdG9yO1xyXG5cclxuUHJvbWlzZS5hbGwgPSBmdW5jdGlvbihhcnIpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICBpZiAoIWFyciB8fCB0eXBlb2YgYXJyLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXknKTtcclxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcclxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xyXG4gICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlcyhpLCB2YWwpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xyXG4gICAgICAgICAgdmFyIHRoZW4gPSB2YWwudGhlbjtcclxuICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGVuLmNhbGwoXHJcbiAgICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgcmVzKGksIHZhbCk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICByZWplY3RcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcmdzW2ldID0gdmFsO1xyXG4gICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xyXG4gICAgICAgICAgcmVzb2x2ZShhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgcmVqZWN0KGV4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICByZXMoaSwgYXJnc1tpXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5Qcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQcm9taXNlKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5Qcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgcmVqZWN0KHZhbHVlKTtcclxuICB9KTtcclxufTtcclxuXHJcblByb21pc2UucmFjZSA9IGZ1bmN0aW9uKHZhbHVlcykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgdmFsdWVzW2ldLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbi8vIFVzZSBwb2x5ZmlsbCBmb3Igc2V0SW1tZWRpYXRlIGZvciBwZXJmb3JtYW5jZSBnYWluc1xyXG5Qcm9taXNlLl9pbW1lZGlhdGVGbiA9XHJcbiAgKHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicgJiZcclxuICAgIGZ1bmN0aW9uKGZuKSB7XHJcbiAgICAgIHNldEltbWVkaWF0ZShmbik7XHJcbiAgICB9KSB8fFxyXG4gIGZ1bmN0aW9uKGZuKSB7XHJcbiAgICBzZXRUaW1lb3V0RnVuYyhmbiwgMCk7XHJcbiAgfTtcclxuXHJcblByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuID0gZnVuY3Rpb24gX3VuaGFuZGxlZFJlamVjdGlvbkZuKGVycikge1xyXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZSkge1xyXG4gICAgY29uc29sZS53YXJuKCdQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246JywgZXJyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqIEBzdXBwcmVzcyB7dW5kZWZpbmVkVmFyc30gKi9cclxudmFyIGdsb2JhbE5TID0gKGZ1bmN0aW9uKCkge1xyXG4gIC8vIHRoZSBvbmx5IHJlbGlhYmxlIG1lYW5zIHRvIGdldCB0aGUgZ2xvYmFsIG9iamVjdCBpc1xyXG4gIC8vIGBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpYFxyXG4gIC8vIEhvd2V2ZXIsIHRoaXMgY2F1c2VzIENTUCB2aW9sYXRpb25zIGluIENocm9tZSBhcHBzLlxyXG4gIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBzZWxmO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiB3aW5kb3c7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIGdsb2JhbDtcclxuICB9XHJcbiAgdGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QnKTtcclxufSkoKTtcclxuXHJcbmlmICghKCdQcm9taXNlJyBpbiBnbG9iYWxOUykpIHtcclxuICBnbG9iYWxOU1snUHJvbWlzZSddID0gUHJvbWlzZTtcclxufSBlbHNlIGlmICghZ2xvYmFsTlMuUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSkge1xyXG4gIGdsb2JhbE5TLlByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10gPSBmaW5hbGx5Q29uc3RydWN0b3I7XHJcbn1cclxuXHJcbn0pKSk7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9