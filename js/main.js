/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/_faq.js":
/*!***********************************!*\
  !*** ./src/js/components/_faq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var accordionItems = document.querySelectorAll(".faq__elem");
if (accordionItems.length) {
  accordionItems.forEach(function (itemAccordion) {
    var accordionTitle = itemAccordion.querySelector(".faq__title-box");
    var accordionContent = itemAccordion.querySelector(".faq__content");
    accordionTitle.addEventListener("click", function () {
      if (!itemAccordion.classList.contains("faq__elem--active")) {
        var accordionItemsActive = document.querySelectorAll(".faq__elem--active");
        accordionItemsActive.forEach(function (itemAccordionActive) {
          var accordionContent = itemAccordionActive.querySelector(".faq__content");
          itemAccordionActive.classList.remove("faq__elem--active");
        });
        itemAccordion.classList.add("faq__elem--active");
      } else {
        itemAccordion.classList.remove("faq__elem--active");
      }
    });
  });
}

/***/ }),

/***/ "./src/js/components/_map.js":
/*!***********************************!*\
  !*** ./src/js/components/_map.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var currentMarker = null;
  ymaps.ready(init);
  function init() {
    var map = new ymaps.Map("map", {
        center: [56.107564, 47.280965],
        zoom: 15,
        controls: [],
        behaviors: []
      }),
      markerDesktop = new ymaps.Placemark([56.107564, 47.280965], {}, {
        iconLayout: 'default#image',
        iconImageHref: './images/section-map/map-marker-desktop.png',
        iconImageSize: [446, 120],
        iconImageOffset: [-47, -120]
      }),
      markerMobile = new ymaps.Placemark([56.107564, 47.280965], {}, {
        iconLayout: 'default#image',
        iconImageHref: './images/section-map/map-marker-mobile.png',
        iconImageSize: [390, 185],
        iconImageOffset: [-195, -85]
      });
    map.behaviors.disable(['scrollZoom']);
    addPlaceMark(map, markerDesktop, markerMobile);
    window.addEventListener('resize', function () {
      addPlaceMark(map, markerDesktop, markerMobile);
    });
  }
  var addPlaceMark = function addPlaceMark(map, markerDesktop, markerMobile) {
    if (window.innerWidth < 1024) {
      if (currentMarker !== 'mobile') {
        currentMarker = 'mobile';
        map.geoObjects.remove(markerDesktop);
        map.geoObjects.add(markerMobile);
        map.setCenter([56.109423, 47.280965]);
      }
    } else {
      if (currentMarker !== 'desktop') {
        currentMarker = 'desktop';
        map.geoObjects.remove(markerMobile);
        map.geoObjects.add(markerDesktop);
        map.setCenter([56.107564, 47.280965]);
      }
    }
  };
});

/***/ }),

/***/ "./src/js/components/_menu-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/components/_menu-scroll.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(['.mobile-menu__nav-link', '.header__nav-link']).forEach(function (a) {
    a.addEventListener('click', function (event) {
      event.preventDefault();
      var hash = event.target.getAttribute('href');
      var scrollTarget = document.querySelector(hash);
      var headerHeight = document.querySelector('.header').scrollHeight;
      console.log(scrollTarget.offsetTop - headerHeight);
      window.scrollTo({
        top: scrollTarget.offsetTop - headerHeight,
        left: 0,
        behavior: "smooth"
      });
    });
  });
});

/***/ }),

/***/ "./src/js/components/_mobile-menu.js":
/*!*******************************************!*\
  !*** ./src/js/components/_mobile-menu.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var headerMenuButton = document.querySelector('.header__menu-btn');
  headerMenuButton.addEventListener('click', function () {
    headerMenuButton.classList.toggle('header__menu-btn--active');
  });
  var mobileMenuBtn = document.querySelector('.header__menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
      if (document.body.classList.contains('mobile-menu-opening') || document.body.classList.contains('mobile-menu-opened')) {
        closeMobileMenu();
      } else {
        document.body.classList.add('mobile-menu-opening');
        document.body.style.overflow = 'hidden';
        setTimeout(function () {
          document.body.classList.add('mobile-menu-opened');
        });
      }
    });
  }
  var closeMobileMenu = function closeMobileMenu() {
    document.body.classList.remove('mobile-menu-opened');
    headerMenuButton.classList.remove('header__menu-btn--active');
    setTimeout(function () {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-opening');
    }, 300);
  };
  var closeMenuList = document.querySelectorAll('.mobile-menu__close');
  closeMenuList.forEach(function (closeMenu) {
    closeMenu.addEventListener('click', function () {
      return closeMobileMenu();
    });
  });
});

/***/ }),

/***/ "./src/js/components/_modals.js":
/*!**************************************!*\
  !*** ./src/js/components/_modals.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  // Open modal window
  var modalLinks = document.querySelectorAll('[data-modal]');
  modalLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var modal = document.querySelector(".modal--".concat(e.target.dataset.modal));
      if (!modal) {
        console.log("Modal .modal--".concat(e.target.dataset.modal, " does not exist!"));
        return;
      }
      document.body.style.overflow = 'hidden';
      modal.classList.add('modal--show');
      setTimeout(function () {
        modal.classList.add('modal--backdrop');
      }, 50, modal);
      setTimeout(function () {
        modal.classList.add('modal--shown');
      }, 300, modal);
      return false;
    });
  });

  // Close modal window
  function closeModal() {
    var modal = document.querySelector('.modal--shown');
    modal.classList.remove('modal--shown');
    setTimeout(function () {
      modal.classList.remove('modal--backdrop');
    }, 150, modal);
    setTimeout(function () {
      modal.classList.remove('modal--show');
      document.body.style.overflow = '';
    }, 350, modal);
  }
  var closeButtons = document.querySelectorAll('.js-modal-close');
  closeButtons.forEach(function (button) {
    button.addEventListener('click', closeModal);
  });

  // Close on backdrop click
  var modalList = document.querySelectorAll('.modal');
  if (modalList) {
    modalList.forEach(function (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target.classList.contains('modal')) {
          closeModal();
        }
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/_phone-mask.js":
/*!******************************************!*\
  !*** ./src/js/components/_phone-mask.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var phoneInputList = document.querySelectorAll('input[type="tel"]');
  if (phoneInputList.length) {
    phoneInputList.forEach(function (phoneInput) {
      Object(imask__WEBPACK_IMPORTED_MODULE_0__["default"])(phoneInput, {
        mask: '+{7} 000 000 00 00'
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/_slider.js":
/*!**************************************!*\
  !*** ./src/js/components/_slider.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


document.addEventListener('DOMContentLoaded', function () {
  var sliderList = document.querySelectorAll('.slider');
  if (!sliderList.length) return;
  sliderList.forEach(function (slider) {
    new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider.querySelector('.swiper'), {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"]],
      slidesPerView: 1,
      spaceBetween: 15,
      grabCursor: true,
      initialSlide: Math.floor(slider.querySelectorAll('.slider__slide').length / 2),
      centeredSlides: true,
      pagination: {
        el: slider.querySelector('.slider__pagination'),
        type: 'bullets',
        bulletClass: 'slider__bullet',
        bulletActiveClass: 'slider__bullet--active'
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  });
});

/***/ }),

/***/ "./src/js/helpers/check-webp-support.js":
/*!**********************************************!*\
  !*** ./src/js/helpers/check-webp-support.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function checkWebpSupport() {
  var img = new Image();
  img.onload = function () {
    if (img.width > 0 && img.height > 0) {
      document.body.classList.add("webp-support");
    } else {
      document.body.classList.add("no-webp-support");
    }
  };
  img.onerror = function () {
    document.body.classList.add("no-webp-support");
  };
  img.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
})();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_check_webp_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/check-webp-support */ "./src/js/helpers/check-webp-support.js");
/* harmony import */ var _helpers_check_webp_support__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helpers_check_webp_support__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_menu_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_menu-scroll */ "./src/js/components/_menu-scroll.js");
/* harmony import */ var _components_menu_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_menu_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_mobile-menu */ "./src/js/components/_mobile-menu.js");
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_mobile_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/_modals */ "./src/js/components/_modals.js");
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_modals__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_phone_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_phone-mask */ "./src/js/components/_phone-mask.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/_slider */ "./src/js/components/_slider.js");
/* harmony import */ var _components_faq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/_faq */ "./src/js/components/_faq.js");
/* harmony import */ var _components_faq__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_faq__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/_map */ "./src/js/components/_map.js");
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_map__WEBPACK_IMPORTED_MODULE_8__);










/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=main.js.map