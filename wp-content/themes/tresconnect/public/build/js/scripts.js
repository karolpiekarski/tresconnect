!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(23),n(24),n(25),e.exports=n(26)},function(e,t){Array.prototype.find||(Array.prototype.find=function(e){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,n=Object(this),o=n.length>>>0,r=arguments[1],i=0;i<o;i++)if(t=n[i],e.call(r,t,i,n))return t})},function(e,t){Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null==this)throw new TypeError('"this" ma wartość null lub undefined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predykat musi być funkcją");for(var o=arguments[1],r=0;r<n;){var i=t[r];if(e.call(o,i,r,t))return r;r++}return-1}})},function(e,t){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;var r,i,a=0|t,c=Math.max(a>=0?a:o-Math.abs(a),0);for(;c<o;){if((r=n[c])===(i=e)||"number"==typeof r&&"number"==typeof i&&isNaN(r)&&isNaN(i))return!0;c++}return!1}})},function(e,t){},function(e,t){Array.of||(Array.of=function(){return Array.prototype.slice.call(arguments)})},function(e,t){[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("after")||Object.defineProperty(e,"after",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))})),this.parentNode.insertBefore(t,this.nextSibling)}})}))},function(e,t){[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("before")||Object.defineProperty(e,"before",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))})),this.parentNode.insertBefore(t,this)}})}))},function(e,t){[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})}))},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){var e,t=this.parentNode,o=arguments.length;if(t)for(o||t.removeChild(this);o--;)"object"!==n(e=arguments[o])?e=this.ownerDocument.createTextNode(e):e.parentNode&&e.parentNode.removeChild(e),o?t.insertBefore(this.previousSibling,e):t.replaceChild(e,this)}Element.prototype.replaceWith||(Element.prototype.replaceWith=o),CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=o),DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=o)},function(e,t){!function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}()},function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})},function(e,t){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)})},function(e,t){"function"!=typeof Object.assign&&(Object.assign=function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),o=1;o<arguments.length;o++){var r=arguments[o];if(null!=r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n})},function(e,t){Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),n=t.length,o=new Array(n);n--;)o[n]=[t[n],e[t[n]]];return o})},function(e,t){Object.is||(Object.is=function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t})},function(e,t){[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach((function(e){e.hasOwnProperty("append")||Object.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))})),this.appendChild(t)}})}))},function(e,t){[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach((function(e){e.hasOwnProperty("prepend")||Object.defineProperty(e,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))})),this.insertBefore(t,this.firstChild)}})}))},function(e,t,n){(function(o,r){var i,a,c;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}c=function(){"use strict";function e(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}var t=setTimeout;function n(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function a(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,i._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void u(t.promise,e)}c(t.promise,o)}else(1===e._state?c:u)(t.promise,e._value)}))):e._deferreds.push(t)}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===s(t)||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void l(e);if("function"==typeof n)return void p((o=n,r=t,function(){o.apply(r,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){u(e,t)}var o,r}function u(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&i._immediateFn((function(){e._handled||i._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function p(e,t){var n=!1;try{e((function(e){n||(n=!0,c(t,e))}),(function(e){n||(n=!0,u(t,e))}))}catch(e){if(n)return;n=!0,u(t,e)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var o=new this.constructor(n);return a(this,new f(e,t,o)),o},i.prototype.finally=e,i.all=function(e){return new i((function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var r=o.length;function i(e,a){try{if(a&&("object"===s(a)||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,(function(t){i(e,t)}),n)}o[e]=a,0==--r&&t(o)}catch(e){n(e)}}for(var a=0;a<o.length;a++)i(a,o[a])}))},i.resolve=function(e){return e&&"object"===s(e)&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,n){n(e)}))},i.race=function(e){return new i((function(t,n){for(var o=0,r=e.length;o<r;o++)e[o].then(t,n)}))},i._immediateFn="function"==typeof o&&function(e){o(e)}||function(e){t(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console};var d=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();"Promise"in d?d.Promise.prototype.finally||(d.Promise.prototype.finally=e):d.Promise=i},"object"===s(t)&&void 0!==e?c():void 0===(a="function"==typeof(i=c)?i.call(t,n,t,e):i)||(e.exports=a)}).call(this,n(20).setImmediate,n(0))},function(e,t,n){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(21),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var o,r,i,a,c,s=1,u={},l=!1,f=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick((function(){h(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){h(e.data)},o=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(r=f.documentElement,o=function(e){var t=f.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):o=function(e){setTimeout(h,0,e)}:(a="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),o=function(t){e.postMessage(a+t,"*")}),p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return u[s]=r,o(s),s++},p.clearImmediate=d}function d(e){delete u[e]}function h(e){if(l)setTimeout(h,0,e);else{var t=u[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{d(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(22))},function(e,t){var n,o,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var s,u=[],l=!1,f=-1;function p(){l&&s&&(l=!1,s.length?u=s.concat(u):f=-1,u.length&&d())}function d(){if(!l){var e=c(p);l=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t){Element.prototype.hasClass=function(e){return this.classList?this.classList.contains(e):!!this.className.match(new RegExp("(\\s|^)".concat(e,"(\\s|$)")))},Element.prototype.addClass=function(e){this.hasClass(e)||(this.classList?this.classList.add(e):this.className+=" ".concat(e))},NodeList.prototype.addClass=function(e){for(var t=this.length,n=0;n<t;n++)this[n].addClass(e)},Element.prototype.removeClass=function(e){if(this.hasClass(e))if(this.classList)this.classList.remove(e);else{var t=new RegExp("(\\s|^)".concat(e,"(\\s|$)"));this.className=this.className.replace(t," ")}},NodeList.prototype.removeClass=function(e){for(var t=this.length,n=0;n<t;n++)this[n].removeClass(e)},Element.prototype.toggleClass=function(e){this.hasClass(e)?this.removeClass(e):this.addClass(e)},NodeList.prototype.toggleClass=function(e){for(var t=this.length,n=0;n<t;n++)this[n].toggleClass(e)},HTMLCollection.prototype.addClass=NodeList.prototype.addClass,HTMLCollection.prototype.removeClass=NodeList.prototype.removeClass,HTMLCollection.prototype.toggleClass=NodeList.prototype.toggleClass},function(e,t){Element.prototype.addEvent=function(e,t){void 0!==e&&(this.events=this.events||{},this.events.name=function(e){t(e.detail)},this.addEventListener(e,this.events.name))},Element.prototype.triggerEvent=function(e,t){void 0!==e&&this.dispatchEvent(new CustomEvent(e,{detail:t}))},Element.prototype.removeEvent=function(e){void 0!==e&&(this.removeEventListener(e,this.events.name),delete this.events.name)},HTMLCollection.prototype.addEvent=NodeList.prototype.addEvent,HTMLCollection.prototype.triggerEvent=NodeList.prototype.triggerEvent,HTMLCollection.prototype.removeEvent=NodeList.prototype.removeEvent,document.addEvent=Element.prototype.addEvent.bind(document),window.addEvent=Element.prototype.addEvent.bind(window),document.triggerEvent=Element.prototype.triggerEvent.bind(document),window.triggerEvent=Element.prototype.triggerEvent.bind(window),document.removeEvent=Element.prototype.removeEvent.bind(document),window.removeEvent=Element.prototype.removeEvent.bind(window)},function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t);var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setVars()&&this.setEvents()}var t,n,r;return t=e,(n=[{key:"setVars",value:function(){if(this.scrollHeader=document.querySelector("[data-header-onScroll]"),this.scrollHeader)return this.setHeader(),!0}},{key:"setEvents",value:function(){var e=this;window.addEventListener("scroll",(function(){e.setHeader()}))}},{key:"setHeader",value:function(){(window.pageYOffset||document.documentElement.scrollTop)>50?this.scrollHeader.addClass("active"):this.scrollHeader.removeClass("active")}}])&&o(t.prototype,n),r&&o(t,r),e}();function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setVars()&&this.setEvents()}var t,n,o;return t=e,(n=[{key:"setVars",value:function(){if(this.settings={main:"data-menu",button:"data-menu-button",menu:"data-menu-wrapper",dark:"data-dark"},this.menu=document.querySelector("[".concat(this.settings.main,"]")),this.menu)return!0}},{key:"setEvents",value:function(){var e=this,t=document.querySelector("[".concat(this.settings.menu,"]"));this.menu.querySelector("[".concat(this.settings.button,"]")).addEventListener("click",(function(n){n.stopPropagation(),e.showMenu(t),t.addEventListener("click",(function(e){e.stopPropagation()}))})),window.addEventListener("click",(function(){t.hasClass("active")&&e.hideMenu(t)}))}},{key:"showMenu",value:function(e){e.addClass("active"),document.querySelector("[".concat(this.settings.dark,"]")).addClass("active"),document.querySelector("body").addClass("over-hidden")}},{key:"hideMenu",value:function(e){e.removeClass("active"),document.querySelector("[".concat(this.settings.dark,"]")).removeClass("active"),document.querySelector("body").removeClass("over-hidden")}}])&&i(t.prototype,n),o&&i(t,o),e}();function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setVars()&&this.setEvents()}var t,n,o;return t=e,(n=[{key:"setVars",value:function(){if(this.settings={main:"data-area-support",open:"data-area-support-open",close:"data-area-support-close",item:"data-area-support-item"},this.areasSupport=document.querySelectorAll("[".concat(this.settings.main,"]")),this.areasSupport)return!0}},{key:"setEvents",value:function(){var e=this;this.areasSupport.forEach((function(t){t.querySelector("[".concat(e.settings.open,"]")).addEventListener("click",(function(){e.toggleActive(t)})),t.querySelector("[".concat(e.settings.close,"]")).addEventListener("click",(function(){e.toggleActive(t)}))}))}},{key:"toggleActive",value:function(e){e.querySelector("[".concat(this.settings.item,"]")).toggleClass("active")}}])&&c(t.prototype,n),o&&c(t,o),e}();new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),new r,new a,new s,AOS.init()}},function(e,t){}]);