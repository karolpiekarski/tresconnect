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
  AOS.init();
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
          _this.removeActiveAll();

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
  }, {
    key: "removeActiveAll",
    value: function removeActiveAll() {
      var _this2 = this;

      this.areasSupport.forEach(function (elWrapper) {
        elWrapper.querySelector("[".concat(_this2.settings.item, "]")).removeClass('active');
      });
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
        close: 'data-menu-close',
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
      this.menu.querySelector("[".concat(this.settings.close, "]")).addEventListener('click', function () {
        if (menu.hasClass('active')) {
          _this.hideMenu(menu);
        }
      });
    }
  }, {
    key: "showMenu",
    value: function showMenu(menu) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vX2Rldi9qcy9jbGFzc2VzL0NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vX2Rldi9qcy9jbGFzc2VzL3NlY3Rpb25zL0FyZWFTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL19kZXYvanMvY2xhc3Nlcy9zaXRlL0hlYWRlck9uU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL19kZXYvanMvY2xhc3Nlcy9zaXRlL01lbnVTaWRlYmFyLmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9oZWxwZXJzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vX2Rldi9qcy92ZW5kb3JzL2hlbHBlcnMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9wb2x5ZmlsbHMvQXJyYXkvZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L2pzL3ZlbmRvcnMvcG9seWZpbGxzL0FycmF5L2ZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L2pzL3ZlbmRvcnMvcG9seWZpbGxzL0FycmF5L2luY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9wb2x5ZmlsbHMvQXJyYXkvb2YuanMiLCJ3ZWJwYWNrOi8vLy4vX2Rldi9qcy92ZW5kb3JzL3BvbHlmaWxscy9DaGlsZE5vZGUvYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vX2Rldi9qcy92ZW5kb3JzL3BvbHlmaWxscy9DaGlsZE5vZGUvYmVmb3JlLmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9wb2x5ZmlsbHMvQ2hpbGROb2RlL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L2pzL3ZlbmRvcnMvcG9seWZpbGxzL0NoaWxkTm9kZS9yZXBsYWNlV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L2pzL3ZlbmRvcnMvcG9seWZpbGxzL0N1c3RvbUV2ZW50LmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9wb2x5ZmlsbHMvRWxlbWVudC9jbG9zZXN0LmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9wb2x5ZmlsbHMvTm9kZUxpc3QvZm9yRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L2pzL3ZlbmRvcnMvcG9seWZpbGxzL09iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vX2Rldi9qcy92ZW5kb3JzL3BvbHlmaWxscy9PYmplY3QvZW50cmllcy5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L2pzL3ZlbmRvcnMvcG9seWZpbGxzL09iamVjdC9pcy5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L2pzL3ZlbmRvcnMvcG9seWZpbGxzL1BhcmVudE5vZGUvYXBwZW5kLmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9wb2x5ZmlsbHMvUGFyZW50Tm9kZS9wcmVwZW5kLmpzIiwid2VicGFjazovLy8uL19kZXYvanMvdmVuZG9ycy9wb2x5ZmlsbHMvUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9fZGV2L3Njc3MvY29yZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJDb3JlIiwiSGVhZGVyT25TY3JvbGwiLCJNZW51U2lkZWJhciIsIkFyZWFTdXBwb3J0IiwiQU9TIiwiaW5pdCIsInNldFZhcnMiLCJzZXRFdmVudHMiLCJzZXR0aW5ncyIsIm1haW4iLCJvcGVuIiwiY2xvc2UiLCJpdGVtIiwiYXJlYXNTdXBwb3J0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsV3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQWN0aXZlQWxsIiwidG9nZ2xlQWN0aXZlIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNjcm9sbEhlYWRlciIsInNldEhlYWRlciIsIndpbmRvdyIsInN0IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsImJ1dHRvbiIsIm1lbnUiLCJkYXJrIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInNob3dNZW51IiwiaGFzQ2xhc3MiLCJoaWRlTWVudSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm1hdGNoIiwiUmVnRXhwIiwiYWRkIiwiTm9kZUxpc3QiLCJsZW5ndGgiLCJpIiwicmVtb3ZlIiwicmVnIiwicmVwbGFjZSIsIkhUTUxDb2xsZWN0aW9uIiwiYWRkRXZlbnQiLCJuYW1lIiwiZm4iLCJ1bmRlZmluZWQiLCJldmVudHMiLCJkZXRhaWwiLCJ0cmlnZ2VyRXZlbnQiLCJkYXRhIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwicmVtb3ZlRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYmluZCIsIkFycmF5IiwiZmluZCIsInByZWRpY2F0ZSIsIlR5cGVFcnJvciIsImxpc3QiLCJPYmplY3QiLCJ0aGlzQXJnIiwiYXJndW1lbnRzIiwidmFsdWUiLCJjYWxsIiwiZmluZEluZGV4IiwiZGVmaW5lUHJvcGVydHkiLCJvIiwibGVuIiwiayIsImtWYWx1ZSIsImluY2x1ZGVzIiwidmFsdWVUb0ZpbmQiLCJmcm9tSW5kZXgiLCJuIiwiTWF0aCIsIm1heCIsImFicyIsInNhbWVWYWx1ZVplcm8iLCJ4IiwieSIsImlzTmFOIiwib2YiLCJzbGljZSIsImFyciIsImhhc093blByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiYWZ0ZXIiLCJhcmdBcnIiLCJkb2NGcmFnIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImFyZ0l0ZW0iLCJpc05vZGUiLCJOb2RlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIlN0cmluZyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsIkNoYXJhY3RlckRhdGEiLCJEb2N1bWVudFR5cGUiLCJiZWZvcmUiLCJyZW1vdmVDaGlsZCIsIlJlcGxhY2VXaXRoUG9seWZpbGwiLCJwYXJlbnQiLCJjdXJyZW50Tm9kZSIsIm93bmVyRG9jdW1lbnQiLCJyZXBsYWNlQ2hpbGQiLCJwcmV2aW91c1NpYmxpbmciLCJyZXBsYWNlV2l0aCIsImV2ZW50IiwicGFyYW1zIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJldnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIkV2ZW50IiwibWF0Y2hlcyIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwiY2xvc2VzdCIsInMiLCJlbCIsInBhcmVudEVsZW1lbnQiLCJub2RlVHlwZSIsImNhbGxiYWNrIiwiYXNzaWduIiwidGFyZ2V0IiwidmFyQXJncyIsInRvIiwiaW5kZXgiLCJuZXh0U291cmNlIiwibmV4dEtleSIsImVudHJpZXMiLCJvYmoiLCJvd25Qcm9wcyIsImtleXMiLCJyZXNBcnJheSIsImlzIiwiYXBwZW5kIiwiRG9jdW1lbnQiLCJEb2N1bWVudEZyYWdtZW50IiwicHJlcGVuZCIsImZpcnN0Q2hpbGQiLCJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImZpbmFsbHlDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwidGhlbiIsInJlc29sdmUiLCJyZWFzb24iLCJyZWplY3QiLCJzZXRUaW1lb3V0RnVuYyIsInNldFRpbWVvdXQiLCJub29wIiwiYXBwbHkiLCJQcm9taXNlIiwiX3N0YXRlIiwiX2hhbmRsZWQiLCJfdmFsdWUiLCJfZGVmZXJyZWRzIiwiZG9SZXNvbHZlIiwiaGFuZGxlIiwic2VsZiIsImRlZmVycmVkIiwicHVzaCIsIl9pbW1lZGlhdGVGbiIsImNiIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwicHJvbWlzZSIsInJldCIsIm5ld1ZhbHVlIiwiZmluYWxlIiwiX3VuaGFuZGxlZFJlamVjdGlvbkZuIiwiSGFuZGxlciIsImRvbmUiLCJleCIsInByb20iLCJhbGwiLCJhcmdzIiwicmVtYWluaW5nIiwicmVzIiwidmFsIiwicmFjZSIsInZhbHVlcyIsInNldEltbWVkaWF0ZSIsImVyciIsImNvbnNvbGUiLCJ3YXJuIiwiZ2xvYmFsTlMiLCJFcnJvciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7O0lBRU1BLEksR0FDSixnQkFBYztBQUFBOztBQUNaLE1BQUlDLDREQUFKO0FBQ0EsTUFBSUMseURBQUo7QUFDQSxNQUFJQyw2REFBSjtBQUVBQyxLQUFHLENBQUNDLElBQUo7QUFDRCxDOztB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cHVibGljL2J1aWxkL2pzL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEhlYWRlck9uU2Nyb2xsIGZyb20gXCIuL3NpdGUvSGVhZGVyT25TY3JvbGxcIjtcbmltcG9ydCBNZW51U2lkZWJhciBmcm9tIFwiLi9zaXRlL01lbnVTaWRlYmFyXCI7XG5pbXBvcnQgQXJlYVN1cHBvcnQgZnJvbSBcIi4vc2VjdGlvbnMvQXJlYVN1cHBvcnRcIjtcblxuY2xhc3MgQ29yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIG5ldyBIZWFkZXJPblNjcm9sbCgpO1xuICAgIG5ldyBNZW51U2lkZWJhcigpO1xuICAgIG5ldyBBcmVhU3VwcG9ydCgpO1xuICBcbiAgICBBT1MuaW5pdCgpO1xuICB9XG59XG5cbm5ldyBDb3JlKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcmVhU3VwcG9ydCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICghdGhpcy5zZXRWYXJzKCkpIHJldHVybjtcbiAgICBcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuICB9XG4gIFxuICBzZXRWYXJzKCkge1xuICAgIFxuICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICBtYWluOiAnZGF0YS1hcmVhLXN1cHBvcnQnLFxuICAgICAgb3BlbjogJ2RhdGEtYXJlYS1zdXBwb3J0LW9wZW4nLFxuICAgICAgY2xvc2U6ICdkYXRhLWFyZWEtc3VwcG9ydC1jbG9zZScsXG4gICAgICBpdGVtOiAnZGF0YS1hcmVhLXN1cHBvcnQtaXRlbScsXG4gICAgfTtcbiAgICBcbiAgICB0aGlzLmFyZWFzU3VwcG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske3RoaXMuc2V0dGluZ3MubWFpbn1dYCk7XG4gICAgaWYgKCF0aGlzLmFyZWFzU3VwcG9ydCkgcmV0dXJuO1xuICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICBzZXRFdmVudHMoKSB7XG4gICAgdGhpcy5hcmVhc1N1cHBvcnQuZm9yRWFjaCgoZWxXcmFwcGVyKSA9PiB7XG4gICAgICBlbFdyYXBwZXIucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5zZXR0aW5ncy5vcGVufV1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVBY3RpdmVBbGwoKTtcbiAgICAgICAgdGhpcy50b2dnbGVBY3RpdmUoZWxXcmFwcGVyKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBlbFdyYXBwZXIucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5zZXR0aW5ncy5jbG9zZX1dYCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKGVsV3JhcHBlcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBcbiAgdG9nZ2xlQWN0aXZlKGVsV3JhcHBlcikge1xuICAgIGVsV3JhcHBlci5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLnNldHRpbmdzLml0ZW19XWApLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxuICB9XG4gIFxuICByZW1vdmVBY3RpdmVBbGwoKSB7XG4gICAgdGhpcy5hcmVhc1N1cHBvcnQuZm9yRWFjaCgoZWxXcmFwcGVyKSA9PiB7XG4gICAgICBlbFdyYXBwZXIucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5zZXR0aW5ncy5pdGVtfV1gKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyT25TY3JvbGwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIXRoaXMuc2V0VmFycygpKSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgfVxuICBcbiAgc2V0VmFycygpIHtcbiAgICB0aGlzLnNjcm9sbEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWhlYWRlci1vblNjcm9sbF0nKTtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsSGVhZGVyKSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5zZXRIZWFkZXIoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgc2V0RXZlbnRzKCkge1xuICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldEhlYWRlcigpO1xuICAgIH0pO1xuICB9XG4gIFxuICBzZXRIZWFkZXIgKCkge1xuICAgIGNvbnN0IHN0ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgaWYgKHN0ID4gNTApIHtcbiAgICAgIHRoaXMuc2Nyb2xsSGVhZGVyLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY3JvbGxIZWFkZXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVNpZGViYXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIXRoaXMuc2V0VmFycygpKSByZXR1cm47XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuICB9XG5cbiAgc2V0VmFycygpIHtcbiAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgbWFpbjogJ2RhdGEtbWVudScsXG4gICAgICBidXR0b246ICdkYXRhLW1lbnUtYnV0dG9uJyxcbiAgICAgIGNsb3NlOiAnZGF0YS1tZW51LWNsb3NlJyxcbiAgICAgIG1lbnU6ICdkYXRhLW1lbnUtd3JhcHBlcicsXG4gICAgICBkYXJrOiAnZGF0YS1kYXJrJyxcbiAgICB9O1xuXG4gICAgdGhpcy5tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5zZXR0aW5ncy5tYWlufV1gKTtcbiAgICBpZiAoIXRoaXMubWVudSkgcmV0dXJuO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMuc2V0dGluZ3MubWVudX1dYCk7XG5cbiAgICB0aGlzLm1lbnUucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5zZXR0aW5ncy5idXR0b259XWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHRoaXMuc2hvd01lbnUobWVudSk7XG5cbiAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSlcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChtZW51Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICB0aGlzLmhpZGVNZW51KG1lbnUpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLm1lbnUucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5zZXR0aW5ncy5jbG9zZX1dYCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAobWVudS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgdGhpcy5oaWRlTWVudShtZW51KTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd01lbnUobWVudSkge1xuICAgIG1lbnUuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMuc2V0dGluZ3MuZGFya31dYCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvZHlgKS5hZGRDbGFzcygnb3Zlci1oaWRkZW4nKTtcbiAgfVxuXG4gIGhpZGVNZW51KG1lbnUpIHtcbiAgICBtZW51LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLnNldHRpbmdzLmRhcmt9XWApLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBib2R5YCkucmVtb3ZlQ2xhc3MoJ292ZXItaGlkZGVuJyk7XG4gIH1cblxufSIsIi8qIEV4YW1wbGUgb2YgdXNlIGlzIGF0IHRoZSBib3R0b20gb2YgZmlsZSAqL1xyXG5cclxuRWxlbWVudC5wcm90b3R5cGUuaGFzQ2xhc3MgPSBmdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcclxuXHJcbiAgaWYgKHRoaXMuY2xhc3NMaXN0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAhIXRoaXMuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoYChcXFxcc3xeKSR7Y2xhc3NOYW1lfShcXFxcc3wkKWApKTtcclxuXHJcbn07XHJcblxyXG5FbGVtZW50LnByb3RvdHlwZS5hZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xyXG5cclxuICBpZiAodGhpcy5oYXNDbGFzcyhjbGFzc05hbWUpKSByZXR1cm47XHJcblxyXG4gIGlmICh0aGlzLmNsYXNzTGlzdCkge1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuY2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9YDtcclxuICB9XHJcblxyXG59O1xyXG5cclxuTm9kZUxpc3QucHJvdG90eXBlLmFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XHJcblxyXG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSB0aGlzO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIHRoaXNbaV0uYWRkQ2xhc3MoY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG59O1xyXG5cclxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcclxuXHJcbiAgaWYgKCF0aGlzLmhhc0NsYXNzKGNsYXNzTmFtZSkpIHJldHVybjtcclxuXHJcbiAgaWYgKHRoaXMuY2xhc3NMaXN0KSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcmVnICAgICAgPSBuZXcgUmVnRXhwKGAoXFxcXHN8Xikke2NsYXNzTmFtZX0oXFxcXHN8JClgKTtcclxuICAgIHRoaXMuY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUucmVwbGFjZShyZWcsICcgJyk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xyXG5cclxuICBjb25zdCB7IGxlbmd0aCB9ID0gdGhpcztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICB0aGlzW2ldLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbkVsZW1lbnQucHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XHJcblxyXG4gIGlmICghdGhpcy5oYXNDbGFzcyhjbGFzc05hbWUpKSB7XHJcbiAgICB0aGlzLmFkZENsYXNzKGNsYXNzTmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG59O1xyXG5cclxuTm9kZUxpc3QucHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XHJcblxyXG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSB0aGlzO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIHRoaXNbaV0udG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG59O1xyXG5cclxuSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmFkZENsYXNzICAgID0gTm9kZUxpc3QucHJvdG90eXBlLmFkZENsYXNzO1xyXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUucmVtb3ZlQ2xhc3MgPSBOb2RlTGlzdC5wcm90b3R5cGUucmVtb3ZlQ2xhc3M7XHJcbkhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS50b2dnbGVDbGFzcyA9IE5vZGVMaXN0LnByb3RvdHlwZS50b2dnbGVDbGFzcztcclxuXHJcbi8qXHJcblxyXG4gIEV4YW1wbGU6XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRDbGFzcygnbXlDdXN0b21DbGFzcycpXHJcbiAgICBkb2N1bWVudC5ib2R5Lmhhc0NsYXNzKCdteUN1c3RvbUNsYXNzJylcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2xhc3MoJ215Q3VzdG9tQ2xhc3MnKVxyXG5cclxuKi9cclxuIiwiLyogRXhhbXBsZSBvZiB1c2UgaXMgYXQgdGhlIGJvdHRvbSBvZiBmaWxlICovXHJcblxyXG5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uIGFkZEV2ZW50KG5hbWUsIGZuKSB7XHJcblxyXG4gIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgdGhpcy5ldmVudHMgICAgICA9IHRoaXMuZXZlbnRzIHx8IHt9O1xyXG4gIHRoaXMuZXZlbnRzLm5hbWUgPSAoZSkgPT4geyBmbihlLmRldGFpbCk7IH07XHJcbiAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG5hbWUsIHRoaXMuZXZlbnRzLm5hbWUpO1xyXG5cclxufTtcclxuXHJcbkVsZW1lbnQucHJvdG90eXBlLnRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uIHRyaWdnZXJFdmVudChuYW1lLCBkYXRhKSB7XHJcblxyXG4gIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7XHJcbiAgICBkZXRhaWwgOiBkYXRhLFxyXG4gIH0pKTtcclxuXHJcbn07XHJcblxyXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5hbWUpIHtcclxuXHJcbiAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgdGhpcy5ldmVudHMubmFtZSk7XHJcbiAgZGVsZXRlIHRoaXMuZXZlbnRzLm5hbWU7XHJcblxyXG59O1xyXG5cclxuSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmFkZEV2ZW50ICAgICA9IE5vZGVMaXN0LnByb3RvdHlwZS5hZGRFdmVudDtcclxuSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLnRyaWdnZXJFdmVudCA9IE5vZGVMaXN0LnByb3RvdHlwZS50cmlnZ2VyRXZlbnQ7XHJcbkhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVFdmVudCAgPSBOb2RlTGlzdC5wcm90b3R5cGUucmVtb3ZlRXZlbnQ7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudCAgICAgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudC5iaW5kKGRvY3VtZW50KTtcclxud2luZG93LmFkZEV2ZW50ICAgICAgID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnQuYmluZCh3aW5kb3cpO1xyXG5kb2N1bWVudC50cmlnZ2VyRXZlbnQgPSBFbGVtZW50LnByb3RvdHlwZS50cmlnZ2VyRXZlbnQuYmluZChkb2N1bWVudCk7XHJcbndpbmRvdy50cmlnZ2VyRXZlbnQgICA9IEVsZW1lbnQucHJvdG90eXBlLnRyaWdnZXJFdmVudC5iaW5kKHdpbmRvdyk7XHJcbmRvY3VtZW50LnJlbW92ZUV2ZW50ICA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50LmJpbmQoZG9jdW1lbnQpO1xyXG53aW5kb3cucmVtb3ZlRXZlbnQgICAgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudC5iaW5kKHdpbmRvdyk7XHJcblxyXG4vKlxyXG5cclxuICBFeGFtcGxlOlxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudCgnbXlDdXN0b21FdmVudCcsIChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUudGVzdClcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50KCdteUN1c3RvbUV2ZW50JylcclxuICAgIH0pXHJcblxyXG4gICAgd2luZG93LnRyaWdnZXJFdmVudCgnbXlDdXN0b21FdmVudCcsIHsgdGVzdDogJ0V4YW1wbGUnIH0pXHJcblxyXG4qL1xyXG4iLCJpZiAoIUFycmF5LnByb3RvdHlwZS5maW5kKSB7XHJcbiAgQXJyYXkucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbihwcmVkaWNhdGUpIHtcclxuICAgIGlmICh0aGlzID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkucHJvdG90eXBlLmZpbmQgY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwcmVkaWNhdGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICB2YXIgbGlzdCA9IE9iamVjdCh0aGlzKTtcclxuICAgIHZhciBsZW5ndGggPSBsaXN0Lmxlbmd0aCA+Pj4gMDtcclxuICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xyXG4gICAgdmFyIHZhbHVlO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFsdWUgPSBsaXN0W2ldO1xyXG4gICAgICBpZiAocHJlZGljYXRlLmNhbGwodGhpc0FyZywgdmFsdWUsIGksIGxpc3QpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH07XHJcbn0iLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XHJcbmlmICghQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCkge1xyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsICdmaW5kSW5kZXgnLCB7XHJcbiAgICB2YWx1ZTogZnVuY3Rpb24ocHJlZGljYXRlKSB7XHJcbiAgICAgLy8gMS4gTGV0IE8gYmUgPyBUb09iamVjdCh0aGlzIHZhbHVlKS5cclxuICAgICAgaWYgKHRoaXMgPT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widGhpc1wiIG1hIHdhcnRvxZvEhyBudWxsIGx1YiB1bmRlZmluZWQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIG8gPSBPYmplY3QodGhpcyk7XHJcblxyXG4gICAgICAvLyAyLiBOaWVjaCBsZW4gYsSZZHppZSA/IFRvTGVuZ3RoKD8gR2V0KE8sIFwibGVuZ3RoXCIpKS5cclxuICAgICAgdmFyIGxlbiA9IG8ubGVuZ3RoID4+PiAwO1xyXG5cclxuICAgICAgLy8gMy4gSmXFm2xpIElzQ2FsbGFibGUocHJlZGljYXRlKSBqZXN0IGZhxYJzemVtLCByenXEhyB3eWrEhXRlayBUeXBlRXJyb3IuXHJcbiAgICAgIGlmICh0eXBlb2YgcHJlZGljYXRlICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJlZHlrYXQgbXVzaSBiecSHIGZ1bmtjasSFJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDQuIEplxZtsaSB0aGlzQXJnIHpvc3RhxYIgcG9kYW55LCBuaWVjaCBUIGLEmWR6aWUgdGhpc0FyZzsgdyBwcnplY2l3bnltIHd5cGFka3UsIG5pZWNoIFQgYsSZZHppZSB1bmRlZmluZWQuXHJcbiAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xyXG5cclxuICAgICAgLy8gNS4gTGV0IGsgYmUgMC5cclxuICAgICAgdmFyIGsgPSAwO1xyXG5cclxuICAgICAgLy8gNi4gUG93dGFyemFqLCBkb3DDs2tpIGsgPCBsZW5cclxuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcclxuICAgICAgICAvLyBhLiBOaWVjaCBQayBixJlkemllICEgVG9TdHJpbmcoaykuXHJcbiAgICAgICAgLy8gYi4gTmllY2gga1ZhbHVlIGLEmWR6aWUgPyBHZXQoTywgUGspLlxyXG4gICAgICAgIC8vIGMuIE5pZWNoIHRlc3RSZXN1bHQgYsSZZHppZSBUb0Jvb2xlYW4oPyBDYWxsKHByZWRpY2F0ZSwgVCwgwqsga1ZhbHVlLCBrLCBPIMK7KSkuXHJcbiAgICAgICAgLy8gZC4gSmXFm2xpIHRlc3RSZXN1bHQgamVzdCBwcmF3ZMSFLCB6d3LDs8SHIGsuXHJcbiAgICAgICAgdmFyIGtWYWx1ZSA9IG9ba107XHJcbiAgICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHRoaXNBcmcsIGtWYWx1ZSwgaywgbykpIHtcclxuICAgICAgICAgIHJldHVybiBrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlLiBad2nEmWtzeiB3YXJ0b8WbxIcgayBvIDEuXHJcbiAgICAgICAgaysrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyA3LiBSZXR1cm4gLTEuXHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICB9KTtcclxufSIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xyXG5pZiAoIUFycmF5LnByb3RvdHlwZS5pbmNsdWRlcykge1xyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsICdpbmNsdWRlcycsIHtcclxuICAgIHZhbHVlOiBmdW5jdGlvbih2YWx1ZVRvRmluZCwgZnJvbUluZGV4KSB7XHJcblxyXG4gICAgICBpZiAodGhpcyA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ0aGlzXCIgaXMgbnVsbCBvciBub3QgZGVmaW5lZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAxLiBMZXQgTyBiZSA/IFRvT2JqZWN0KHRoaXMgdmFsdWUpLlxyXG4gICAgICB2YXIgbyA9IE9iamVjdCh0aGlzKTtcclxuXHJcbiAgICAgIC8vIDIuIExldCBsZW4gYmUgPyBUb0xlbmd0aCg/IEdldChPLCBcImxlbmd0aFwiKSkuXHJcbiAgICAgIHZhciBsZW4gPSBvLmxlbmd0aCA+Pj4gMDtcclxuXHJcbiAgICAgIC8vIDMuIElmIGxlbiBpcyAwLCByZXR1cm4gZmFsc2UuXHJcbiAgICAgIGlmIChsZW4gPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDQuIExldCBuIGJlID8gVG9JbnRlZ2VyKGZyb21JbmRleCkuXHJcbiAgICAgIC8vICAgIChJZiBmcm9tSW5kZXggaXMgdW5kZWZpbmVkLCB0aGlzIHN0ZXAgcHJvZHVjZXMgdGhlIHZhbHVlIDAuKVxyXG4gICAgICB2YXIgbiA9IGZyb21JbmRleCB8IDA7XHJcblxyXG4gICAgICAvLyA1LiBJZiBuIOKJpSAwLCB0aGVuXHJcbiAgICAgIC8vICBhLiBMZXQgayBiZSBuLlxyXG4gICAgICAvLyA2LiBFbHNlIG4gPCAwLFxyXG4gICAgICAvLyAgYS4gTGV0IGsgYmUgbGVuICsgbi5cclxuICAgICAgLy8gIGIuIElmIGsgPCAwLCBsZXQgayBiZSAwLlxyXG4gICAgICB2YXIgayA9IE1hdGgubWF4KG4gPj0gMCA/IG4gOiBsZW4gLSBNYXRoLmFicyhuKSwgMCk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBzYW1lVmFsdWVaZXJvKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4geCA9PT0geSB8fCAodHlwZW9mIHggPT09ICdudW1iZXInICYmIHR5cGVvZiB5ID09PSAnbnVtYmVyJyAmJiBpc05hTih4KSAmJiBpc05hTih5KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDcuIFJlcGVhdCwgd2hpbGUgayA8IGxlblxyXG4gICAgICB3aGlsZSAoayA8IGxlbikge1xyXG4gICAgICAgIC8vIGEuIExldCBlbGVtZW50SyBiZSB0aGUgcmVzdWx0IG9mID8gR2V0KE8sICEgVG9TdHJpbmcoaykpLlxyXG4gICAgICAgIC8vIGIuIElmIFNhbWVWYWx1ZVplcm8odmFsdWVUb0ZpbmQsIGVsZW1lbnRLKSBpcyB0cnVlLCByZXR1cm4gdHJ1ZS5cclxuICAgICAgICBpZiAoc2FtZVZhbHVlWmVybyhvW2tdLCB2YWx1ZVRvRmluZCkpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjLiBJbmNyZWFzZSBrIGJ5IDEuIFxyXG4gICAgICAgIGsrKztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gOC4gUmV0dXJuIGZhbHNlXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxufSIsImlmICghQXJyYXkub2YpIHtcclxuICBBcnJheS5vZiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgfTtcclxufSIsIi8vZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2pzZXJ6L2pzX3BpZWNlL2Jsb2IvbWFzdGVyL0RPTS9DaGlsZE5vZGUvYWZ0ZXIoKS9hZnRlcigpLm1kXHJcbihmdW5jdGlvbiAoYXJyKSB7XHJcbiAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KCdhZnRlcicpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdGVtLCAnYWZ0ZXInLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZnRlcigpIHtcclxuICAgICAgICB2YXIgYXJnQXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcclxuICAgICAgICAgIGRvY0ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXJnQXJyLmZvckVhY2goZnVuY3Rpb24gKGFyZ0l0ZW0pIHtcclxuICAgICAgICAgIHZhciBpc05vZGUgPSBhcmdJdGVtIGluc3RhbmNlb2YgTm9kZTtcclxuICAgICAgICAgIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoaXNOb2RlID8gYXJnSXRlbSA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhhcmdJdGVtKSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jRnJhZywgdGhpcy5uZXh0U2libGluZyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KShbRWxlbWVudC5wcm90b3R5cGUsIENoYXJhY3RlckRhdGEucHJvdG90eXBlLCBEb2N1bWVudFR5cGUucHJvdG90eXBlXSk7IiwiLy8gZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2pzZXJ6L2pzX3BpZWNlL2Jsb2IvbWFzdGVyL0RPTS9DaGlsZE5vZGUvYmVmb3JlKCkvYmVmb3JlKCkubWRcclxuKGZ1bmN0aW9uIChhcnIpIHtcclxuICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ2JlZm9yZScpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdGVtLCAnYmVmb3JlJywge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYmVmb3JlKCkge1xyXG4gICAgICAgIHZhciBhcmdBcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxyXG4gICAgICAgICAgZG9jRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBcclxuICAgICAgICBhcmdBcnIuZm9yRWFjaChmdW5jdGlvbiAoYXJnSXRlbSkge1xyXG4gICAgICAgICAgdmFyIGlzTm9kZSA9IGFyZ0l0ZW0gaW5zdGFuY2VvZiBOb2RlO1xyXG4gICAgICAgICAgZG9jRnJhZy5hcHBlbmRDaGlsZChpc05vZGUgPyBhcmdJdGVtIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKGFyZ0l0ZW0pKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb2NGcmFnLCB0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKFtFbGVtZW50LnByb3RvdHlwZSwgQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUsIERvY3VtZW50VHlwZS5wcm90b3R5cGVdKTsiLCIvLyBmcm9tOmh0dHBzOi8vZ2l0aHViLmNvbS9qc2Vyei9qc19waWVjZS9ibG9iL21hc3Rlci9ET00vQ2hpbGROb2RlL3JlbW92ZSgpL3JlbW92ZSgpLm1kXHJcbihmdW5jdGlvbiAoYXJyKSB7XHJcbiAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KCdyZW1vdmUnKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaXRlbSwgJ3JlbW92ZScsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlICE9PSBudWxsKVxyXG4gICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufSkoW0VsZW1lbnQucHJvdG90eXBlLCBDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSwgRG9jdW1lbnRUeXBlLnByb3RvdHlwZV0pOyIsImZ1bmN0aW9uIFJlcGxhY2VXaXRoUG9seWZpbGwoKSB7XHJcbiAgJ3VzZS1zdHJpY3QnOyAvLyBGb3Igc2FmYXJpLCBhbmQgSUUgPiAxMFxyXG4gIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGUsIGkgPSBhcmd1bWVudHMubGVuZ3RoLCBjdXJyZW50Tm9kZTtcclxuICBpZiAoIXBhcmVudCkgcmV0dXJuO1xyXG4gIGlmICghaSkgLy8gaWYgdGhlcmUgYXJlIG5vIGFyZ3VtZW50c1xyXG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gIHdoaWxlIChpLS0pIHsgLy8gaS0tIGRlY3JlbWVudHMgaSBhbmQgcmV0dXJucyB0aGUgdmFsdWUgb2YgaSBiZWZvcmUgdGhlIGRlY3JlbWVudFxyXG4gICAgY3VycmVudE5vZGUgPSBhcmd1bWVudHNbaV07XHJcbiAgICBpZiAodHlwZW9mIGN1cnJlbnROb2RlICE9PSAnb2JqZWN0Jyl7XHJcbiAgICAgIGN1cnJlbnROb2RlID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGN1cnJlbnROb2RlKTtcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudE5vZGUucGFyZW50Tm9kZSl7XHJcbiAgICAgIGN1cnJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY3VycmVudE5vZGUpO1xyXG4gICAgfVxyXG4gICAgLy8gdGhlIHZhbHVlIG9mIFwiaVwiIGJlbG93IGlzIGFmdGVyIHRoZSBkZWNyZW1lbnRcclxuICAgIGlmICghaSkgLy8gaWYgY3VycmVudE5vZGUgaXMgdGhlIGZpcnN0IGFyZ3VtZW50IChjdXJyZW50Tm9kZSA9PT0gYXJndW1lbnRzWzBdKVxyXG4gICAgICBwYXJlbnQucmVwbGFjZUNoaWxkKGN1cnJlbnROb2RlLCB0aGlzKTtcclxuICAgIGVsc2UgLy8gaWYgY3VycmVudE5vZGUgaXNuJ3QgdGhlIGZpcnN0XHJcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUodGhpcy5wcmV2aW91c1NpYmxpbmcsIGN1cnJlbnROb2RlKTtcclxuICB9XHJcbn1cclxuaWYgKCFFbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlV2l0aClcclxuICAgIEVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VXaXRoID0gUmVwbGFjZVdpdGhQb2x5ZmlsbDtcclxuaWYgKCFDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZS5yZXBsYWNlV2l0aClcclxuICAgIENoYXJhY3RlckRhdGEucHJvdG90eXBlLnJlcGxhY2VXaXRoID0gUmVwbGFjZVdpdGhQb2x5ZmlsbDtcclxuaWYgKCFEb2N1bWVudFR5cGUucHJvdG90eXBlLnJlcGxhY2VXaXRoKSBcclxuICAgIERvY3VtZW50VHlwZS5wcm90b3R5cGUucmVwbGFjZVdpdGggPSBSZXBsYWNlV2l0aFBvbHlmaWxsOyIsIihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGlmICggdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBmdW5jdGlvbiBDdXN0b21FdmVudCAoIGV2ZW50LCBwYXJhbXMgKSB7XHJcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogbnVsbCB9O1xyXG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCAnQ3VzdG9tRXZlbnQnICk7XHJcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KCBldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsICk7XHJcbiAgICByZXR1cm4gZXZ0O1xyXG4gICB9XHJcblxyXG4gIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XHJcblxyXG4gIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xyXG59KSgpOyIsImlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xyXG4gIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xyXG59XHJcblxyXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QpIHtcclxuICBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24ocykge1xyXG4gICAgdmFyIGVsID0gdGhpcztcclxuXHJcbiAgICBkbyB7XHJcbiAgICAgIGlmIChlbC5tYXRjaGVzKHMpKSByZXR1cm4gZWw7XHJcbiAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudCB8fCBlbC5wYXJlbnROb2RlO1xyXG4gICAgfSB3aGlsZSAoZWwgIT09IG51bGwgJiYgZWwubm9kZVR5cGUgPT09IDEpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxufSIsImlmICh3aW5kb3cuTm9kZUxpc3QgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XHJcbiAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xyXG4gICAgICAgIHRoaXNBcmcgPSB0aGlzQXJnIHx8IHdpbmRvdztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzW2ldLCBpLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IiwiaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcclxuICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24odGFyZ2V0LCB2YXJBcmdzKSB7IC8vIC5sZW5ndGggb2YgZnVuY3Rpb24gaXMgMlxyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgaWYgKHRhcmdldCA9PSBudWxsKSB7IC8vIFR5cGVFcnJvciBpZiB1bmRlZmluZWQgb3IgbnVsbFxyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcclxuXHJcbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XHJcblxyXG4gICAgICBpZiAobmV4dFNvdXJjZSAhPSBudWxsKSB7IC8vIFNraXAgb3ZlciBpZiB1bmRlZmluZWQgb3IgbnVsbFxyXG4gICAgICAgIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dFNvdXJjZSkge1xyXG4gICAgICAgICAgLy8gQXZvaWQgYnVncyB3aGVuIGhhc093blByb3BlcnR5IGlzIHNoYWRvd2VkXHJcbiAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5leHRTb3VyY2UsIG5leHRLZXkpKSB7XHJcbiAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0bztcclxuICB9O1xyXG59IiwiaWYgKCFPYmplY3QuZW50cmllcylcclxuICBPYmplY3QuZW50cmllcyA9IGZ1bmN0aW9uKCBvYmogKXtcclxuICAgIHZhciBvd25Qcm9wcyA9IE9iamVjdC5rZXlzKCBvYmogKSxcclxuICAgICAgICBpID0gb3duUHJvcHMubGVuZ3RoLFxyXG4gICAgICAgIHJlc0FycmF5ID0gbmV3IEFycmF5KGkpOyAvLyBwcmVhbGxvY2F0ZSB0aGUgQXJyYXlcclxuICAgIHdoaWxlIChpLS0pXHJcbiAgICAgIHJlc0FycmF5W2ldID0gW293blByb3BzW2ldLCBvYmpbb3duUHJvcHNbaV1dXTtcclxuXHJcbiAgICByZXR1cm4gcmVzQXJyYXk7XHJcbiAgfTsiLCJpZiAoIU9iamVjdC5pcykge1xyXG4gIE9iamVjdC5pcyA9IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cclxuICAgIGlmICh4ID09PSB5KSB7IC8vIFN0ZXBzIDEtNSwgNy0xMFxyXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxyXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxyXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xyXG4gICAgfVxyXG4gIH07XHJcbn0iLCIvLyBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9qc2Vyei9qc19waWVjZS9ibG9iL21hc3Rlci9ET00vUGFyZW50Tm9kZS9hcHBlbmQoKS9hcHBlbmQoKS5tZFxyXG4oZnVuY3Rpb24gKGFycikge1xyXG4gIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgnYXBwZW5kJykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0ZW0sICdhcHBlbmQnLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoKSB7XHJcbiAgICAgICAgdmFyIGFyZ0FyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXHJcbiAgICAgICAgICBkb2NGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFyZ0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChhcmdJdGVtKSB7XHJcbiAgICAgICAgICB2YXIgaXNOb2RlID0gYXJnSXRlbSBpbnN0YW5jZW9mIE5vZGU7XHJcbiAgICAgICAgICBkb2NGcmFnLmFwcGVuZENoaWxkKGlzTm9kZSA/IGFyZ0l0ZW0gOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoYXJnSXRlbSkpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGRvY0ZyYWcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufSkoW0VsZW1lbnQucHJvdG90eXBlLCBEb2N1bWVudC5wcm90b3R5cGUsIERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlXSk7IiwiLy8gU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vanNlcnovanNfcGllY2UvYmxvYi9tYXN0ZXIvRE9NL1BhcmVudE5vZGUvcHJlcGVuZCgpL3ByZXBlbmQoKS5tZFxyXG4oZnVuY3Rpb24gKGFycikge1xyXG4gIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgncHJlcGVuZCcpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdGVtLCAncHJlcGVuZCcsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXBlbmQoKSB7XHJcbiAgICAgICAgdmFyIGFyZ0FyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXHJcbiAgICAgICAgICBkb2NGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFyZ0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChhcmdJdGVtKSB7XHJcbiAgICAgICAgICB2YXIgaXNOb2RlID0gYXJnSXRlbSBpbnN0YW5jZW9mIE5vZGU7XHJcbiAgICAgICAgICBkb2NGcmFnLmFwcGVuZENoaWxkKGlzTm9kZSA/IGFyZ0l0ZW0gOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoYXJnSXRlbSkpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmluc2VydEJlZm9yZShkb2NGcmFnLCB0aGlzLmZpcnN0Q2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufSkoW0VsZW1lbnQucHJvdG90eXBlLCBEb2N1bWVudC5wcm90b3R5cGUsIERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlXSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcclxuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxyXG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XHJcbiAgKGZhY3RvcnkoKSk7XHJcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIEB0aGlzIHtQcm9taXNlfVxyXG4gKi9cclxuZnVuY3Rpb24gZmluYWxseUNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XHJcbiAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICByZXR1cm4gdGhpcy50aGVuKFxyXG4gICAgZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZWplY3QocmVhc29uKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgKTtcclxufVxyXG5cclxuLy8gU3RvcmUgc2V0VGltZW91dCByZWZlcmVuY2Ugc28gcHJvbWlzZS1wb2x5ZmlsbCB3aWxsIGJlIHVuYWZmZWN0ZWQgYnlcclxuLy8gb3RoZXIgY29kZSBtb2RpZnlpbmcgc2V0VGltZW91dCAobGlrZSBzaW5vbi51c2VGYWtlVGltZXJzKCkpXHJcbnZhciBzZXRUaW1lb3V0RnVuYyA9IHNldFRpbWVvdXQ7XHJcblxyXG5mdW5jdGlvbiBub29wKCkge31cclxuXHJcbi8vIFBvbHlmaWxsIGZvciBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxyXG5mdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqL1xyXG5mdW5jdGlvbiBQcm9taXNlKGZuKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2UpKVxyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XHJcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcclxuICAvKiogQHR5cGUgeyFudW1iZXJ9ICovXHJcbiAgdGhpcy5fc3RhdGUgPSAwO1xyXG4gIC8qKiBAdHlwZSB7IWJvb2xlYW59ICovXHJcbiAgdGhpcy5faGFuZGxlZCA9IGZhbHNlO1xyXG4gIC8qKiBAdHlwZSB7UHJvbWlzZXx1bmRlZmluZWR9ICovXHJcbiAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgLyoqIEB0eXBlIHshQXJyYXk8IUZ1bmN0aW9uPn0gKi9cclxuICB0aGlzLl9kZWZlcnJlZHMgPSBbXTtcclxuXHJcbiAgZG9SZXNvbHZlKGZuLCB0aGlzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlKHNlbGYsIGRlZmVycmVkKSB7XHJcbiAgd2hpbGUgKHNlbGYuX3N0YXRlID09PSAzKSB7XHJcbiAgICBzZWxmID0gc2VsZi5fdmFsdWU7XHJcbiAgfVxyXG4gIGlmIChzZWxmLl9zdGF0ZSA9PT0gMCkge1xyXG4gICAgc2VsZi5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBzZWxmLl9oYW5kbGVkID0gdHJ1ZTtcclxuICBQcm9taXNlLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpIHtcclxuICAgIHZhciBjYiA9IHNlbGYuX3N0YXRlID09PSAxID8gZGVmZXJyZWQub25GdWxmaWxsZWQgOiBkZWZlcnJlZC5vblJlamVjdGVkO1xyXG4gICAgaWYgKGNiID09PSBudWxsKSB7XHJcbiAgICAgIChzZWxmLl9zdGF0ZSA9PT0gMSA/IHJlc29sdmUgOiByZWplY3QpKGRlZmVycmVkLnByb21pc2UsIHNlbGYuX3ZhbHVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHJldDtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldCA9IGNiKHNlbGYuX3ZhbHVlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmVqZWN0KGRlZmVycmVkLnByb21pc2UsIGUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXNvbHZlKGRlZmVycmVkLnByb21pc2UsIHJldCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcclxuICB0cnkge1xyXG4gICAgLy8gUHJvbWlzZSBSZXNvbHV0aW9uIFByb2NlZHVyZTogaHR0cHM6Ly9naXRodWIuY29tL3Byb21pc2VzLWFwbHVzL3Byb21pc2VzLXNwZWMjdGhlLXByb21pc2UtcmVzb2x1dGlvbi1wcm9jZWR1cmVcclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gc2VsZilcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi4nKTtcclxuICAgIGlmIChcclxuICAgICAgbmV3VmFsdWUgJiZcclxuICAgICAgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG5ld1ZhbHVlID09PSAnZnVuY3Rpb24nKVxyXG4gICAgKSB7XHJcbiAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcclxuICAgICAgaWYgKG5ld1ZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgIHNlbGYuX3N0YXRlID0gMztcclxuICAgICAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIGZpbmFsZShzZWxmKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBkb1Jlc29sdmUoYmluZCh0aGVuLCBuZXdWYWx1ZSksIHNlbGYpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZi5fc3RhdGUgPSAxO1xyXG4gICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgIGZpbmFsZShzZWxmKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZWplY3Qoc2VsZiwgZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWplY3Qoc2VsZiwgbmV3VmFsdWUpIHtcclxuICBzZWxmLl9zdGF0ZSA9IDI7XHJcbiAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcclxuICBmaW5hbGUoc2VsZik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmFsZShzZWxmKSB7XHJcbiAgaWYgKHNlbGYuX3N0YXRlID09PSAyICYmIHNlbGYuX2RlZmVycmVkcy5sZW5ndGggPT09IDApIHtcclxuICAgIFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoIXNlbGYuX2hhbmRsZWQpIHtcclxuICAgICAgICBQcm9taXNlLl91bmhhbmRsZWRSZWplY3Rpb25GbihzZWxmLl92YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGYuX2RlZmVycmVkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgaGFuZGxlKHNlbGYsIHNlbGYuX2RlZmVycmVkc1tpXSk7XHJcbiAgfVxyXG4gIHNlbGYuX2RlZmVycmVkcyA9IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb21pc2UpIHtcclxuICB0aGlzLm9uRnVsZmlsbGVkID0gdHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiBudWxsO1xyXG4gIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XHJcbiAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRha2UgYSBwb3RlbnRpYWxseSBtaXNiZWhhdmluZyByZXNvbHZlciBmdW5jdGlvbiBhbmQgbWFrZSBzdXJlXHJcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxyXG4gKlxyXG4gKiBNYWtlcyBubyBndWFyYW50ZWVzIGFib3V0IGFzeW5jaHJvbnkuXHJcbiAqL1xyXG5mdW5jdGlvbiBkb1Jlc29sdmUoZm4sIHNlbGYpIHtcclxuICB2YXIgZG9uZSA9IGZhbHNlO1xyXG4gIHRyeSB7XHJcbiAgICBmbihcclxuICAgICAgZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xyXG4gICAgICAgIGRvbmUgPSB0cnVlO1xyXG4gICAgICAgIHJlc29sdmUoc2VsZiwgdmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbihyZWFzb24pIHtcclxuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xyXG4gICAgICAgIGRvbmUgPSB0cnVlO1xyXG4gICAgICAgIHJlamVjdChzZWxmLCByZWFzb24pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICBpZiAoZG9uZSkgcmV0dXJuO1xyXG4gICAgZG9uZSA9IHRydWU7XHJcbiAgICByZWplY3Qoc2VsZiwgZXgpO1xyXG4gIH1cclxufVxyXG5cclxuUHJvbWlzZS5wcm90b3R5cGVbJ2NhdGNoJ10gPSBmdW5jdGlvbihvblJlamVjdGVkKSB7XHJcbiAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcclxufTtcclxuXHJcblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICB2YXIgcHJvbSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG5vb3ApO1xyXG5cclxuICBoYW5kbGUodGhpcywgbmV3IEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb20pKTtcclxuICByZXR1cm4gcHJvbTtcclxufTtcclxuXHJcblByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10gPSBmaW5hbGx5Q29uc3RydWN0b3I7XHJcblxyXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uKGFycikge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgIGlmICghYXJyIHx8IHR5cGVvZiBhcnIubGVuZ3RoID09PSAndW5kZWZpbmVkJylcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZS5hbGwgYWNjZXB0cyBhbiBhcnJheScpO1xyXG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpO1xyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzb2x2ZShbXSk7XHJcbiAgICB2YXIgcmVtYWluaW5nID0gYXJncy5sZW5ndGg7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICh2YWwgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpKSB7XHJcbiAgICAgICAgICB2YXIgdGhlbiA9IHZhbC50aGVuO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoZW4uY2FsbChcclxuICAgICAgICAgICAgICB2YWwsXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXMoaSwgdmFsKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHJlamVjdFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyZ3NbaV0gPSB2YWw7XHJcbiAgICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XHJcbiAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICByZWplY3QoZXgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHJlcyhpLCBhcmdzW2ldKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcblByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFByb21pc2UpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiAgICByZXNvbHZlKHZhbHVlKTtcclxuICB9KTtcclxufTtcclxuXHJcblByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICByZWplY3QodmFsdWUpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24odmFsdWVzKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICB2YWx1ZXNbaV0udGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gVXNlIHBvbHlmaWxsIGZvciBzZXRJbW1lZGlhdGUgZm9yIHBlcmZvcm1hbmNlIGdhaW5zXHJcblByb21pc2UuX2ltbWVkaWF0ZUZuID1cclxuICAodHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxyXG4gICAgZnVuY3Rpb24oZm4pIHtcclxuICAgICAgc2V0SW1tZWRpYXRlKGZuKTtcclxuICAgIH0pIHx8XHJcbiAgZnVuY3Rpb24oZm4pIHtcclxuICAgIHNldFRpbWVvdXRGdW5jKGZuLCAwKTtcclxuICB9O1xyXG5cclxuUHJvbWlzZS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4gPSBmdW5jdGlvbiBfdW5oYW5kbGVkUmVqZWN0aW9uRm4oZXJyKSB7XHJcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjonLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcclxuICB9XHJcbn07XHJcblxyXG4vKiogQHN1cHByZXNzIHt1bmRlZmluZWRWYXJzfSAqL1xyXG52YXIgZ2xvYmFsTlMgPSAoZnVuY3Rpb24oKSB7XHJcbiAgLy8gdGhlIG9ubHkgcmVsaWFibGUgbWVhbnMgdG8gZ2V0IHRoZSBnbG9iYWwgb2JqZWN0IGlzXHJcbiAgLy8gYEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClgXHJcbiAgLy8gSG93ZXZlciwgdGhpcyBjYXVzZXMgQ1NQIHZpb2xhdGlvbnMgaW4gQ2hyb21lIGFwcHMuXHJcbiAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIHNlbGY7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIHdpbmRvdztcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gZ2xvYmFsO1xyXG4gIH1cclxuICB0aHJvdyBuZXcgRXJyb3IoJ3VuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdCcpO1xyXG59KSgpO1xyXG5cclxuaWYgKCEoJ1Byb21pc2UnIGluIGdsb2JhbE5TKSkge1xyXG4gIGdsb2JhbE5TWydQcm9taXNlJ10gPSBQcm9taXNlO1xyXG59IGVsc2UgaWYgKCFnbG9iYWxOUy5Qcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddKSB7XHJcbiAgZ2xvYmFsTlMuUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSA9IGZpbmFsbHlDb25zdHJ1Y3RvcjtcclxufVxyXG5cclxufSkpKTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=