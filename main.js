/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 208
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#game {
	max-width: 900px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	font-family: Arial, Helvetica, sans-serif;
	padding: 20px;
}

/* ================= HEADER ================= */

#status-bar {
	font-size: 18px;
	font-weight: 700;
}

#turn-indicator {
	padding: 12px 16px;
	border-radius: 6px;
	color: #fff;
}

#turn-indicator.player-turn {
	background-color: #2ecc71;
}

#turn-indicator.computer-turn {
	background-color: #f39c12;
}

#turn-indicator.placement {
	background-color: #3498db;
}

#turn-indicator.game-over {
	background-color: #e74c3c;
}

/* ================= BOARDS ================= */

#boards {
	display: flex;
	gap: 60px;
}

.board-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
}

.board-wrapper h3 {
	margin: 0;
	font-size: 14px;
	opacity: 0.7;
}

.board {
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-template-rows: repeat(10, 1fr);
	width: 300px;
	height: 300px;
	border: 2px solid #333;
	background-color: #ccc;
	gap: 1px;
}

/* ================ CONTROLS ================ */

#controls {
	display: flex;
	gap: 10px;
	justify-content: center;
}

#controls button {
	padding: 12px 16px;
	min-width: 140px;
	border: none;
	border-radius: 6px;
	background-color: #222;
	color: #fff;
	cursor: pointer;
}

#controls button:hover {
	background-color: #444;
}

/* ================= CELLS ================= */

.cell {
	width: 100%;
	height: 100%;
	background-color: #fff;
	position: relative;
}

.cell.preview {
	background-color: #0096ff59;
}

.cell.hoverable:hover {
	background-color: #0096ff4d;
	cursor: pointer;
}

.cell.ship {
	background-color: #808080;
}

.cell.hit {
	background-color: #ff4d4d;
}

.cell.miss {
	background-color: #bcdff5;
}

/* sunk */

.cell.sunk::before,
.cell.sunk::after {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 80%;
	height: 2px;
	background-color: #000;
	transform-origin: center;
}

.cell.sunk::before {
	transform: translate(-50%, -50%) rotate(45deg);
}

.cell.sunk::after {
	transform: translate(-50%, -50%) rotate(-45deg);
}

/* ================= WINNER ================= */

#winner-banner {
	position: fixed;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -30%);
	padding: 16px 28px;
	background-color: #000;
	color: #fff;
	border-radius: 10px;
	font-size: 22px;
	font-weight: 700;
	box-shadow: 0 0 30px #00000080;
	z-index: 1000;
}

.hidden {
	display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,gBAAgB;CAChB,cAAc;CACd,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;CACT,yCAAyC;CACzC,aAAa;AACd;;AAEA,+CAA+C;;AAE/C;CACC,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,kBAAkB;CAClB,WAAW;AACZ;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;AAC1B;;AAEA,+CAA+C;;AAE/C;CACC,aAAa;CACb,SAAS;AACV;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,SAAS;CACT,eAAe;CACf,YAAY;AACb;;AAEA;CACC,aAAa;CACb,sCAAsC;CACtC,mCAAmC;CACnC,YAAY;CACZ,aAAa;CACb,sBAAsB;CACtB,sBAAsB;CACtB,QAAQ;AACT;;AAEA,+CAA+C;;AAE/C;CACC,aAAa;CACb,SAAS;CACT,uBAAuB;AACxB;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,YAAY;CACZ,kBAAkB;CAClB,sBAAsB;CACtB,WAAW;CACX,eAAe;AAChB;;AAEA;CACC,sBAAsB;AACvB;;AAEA,8CAA8C;;AAE9C;CACC,WAAW;CACX,YAAY;CACZ,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,2BAA2B;CAC3B,eAAe;AAChB;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;AAC1B;;AAEA,SAAS;;AAET;;CAEC,WAAW;CACX,kBAAkB;CAClB,QAAQ;CACR,SAAS;CACT,UAAU;CACV,WAAW;CACX,sBAAsB;CACtB,wBAAwB;AACzB;;AAEA;CACC,8CAA8C;AAC/C;;AAEA;CACC,+CAA+C;AAChD;;AAEA,+CAA+C;;AAE/C;CACC,eAAe;CACf,QAAQ;CACR,SAAS;CACT,gCAAgC;CAChC,kBAAkB;CAClB,sBAAsB;CACtB,WAAW;CACX,mBAAmB;CACnB,eAAe;CACf,gBAAgB;CAChB,8BAA8B;CAC9B,aAAa;AACd;;AAEA;CACC,aAAa;AACd","sourcesContent":["#game {\n\tmax-width: 900px;\n\tmargin: 0 auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 20px;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tpadding: 20px;\n}\n\n/* ================= HEADER ================= */\n\n#status-bar {\n\tfont-size: 18px;\n\tfont-weight: 700;\n}\n\n#turn-indicator {\n\tpadding: 12px 16px;\n\tborder-radius: 6px;\n\tcolor: #fff;\n}\n\n#turn-indicator.player-turn {\n\tbackground-color: #2ecc71;\n}\n\n#turn-indicator.computer-turn {\n\tbackground-color: #f39c12;\n}\n\n#turn-indicator.placement {\n\tbackground-color: #3498db;\n}\n\n#turn-indicator.game-over {\n\tbackground-color: #e74c3c;\n}\n\n/* ================= BOARDS ================= */\n\n#boards {\n\tdisplay: flex;\n\tgap: 60px;\n}\n\n.board-wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n}\n\n.board-wrapper h3 {\n\tmargin: 0;\n\tfont-size: 14px;\n\topacity: 0.7;\n}\n\n.board {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, 1fr);\n\tgrid-template-rows: repeat(10, 1fr);\n\twidth: 300px;\n\theight: 300px;\n\tborder: 2px solid #333;\n\tbackground-color: #ccc;\n\tgap: 1px;\n}\n\n/* ================ CONTROLS ================ */\n\n#controls {\n\tdisplay: flex;\n\tgap: 10px;\n\tjustify-content: center;\n}\n\n#controls button {\n\tpadding: 12px 16px;\n\tmin-width: 140px;\n\tborder: none;\n\tborder-radius: 6px;\n\tbackground-color: #222;\n\tcolor: #fff;\n\tcursor: pointer;\n}\n\n#controls button:hover {\n\tbackground-color: #444;\n}\n\n/* ================= CELLS ================= */\n\n.cell {\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: #fff;\n\tposition: relative;\n}\n\n.cell.preview {\n\tbackground-color: #0096ff59;\n}\n\n.cell.hoverable:hover {\n\tbackground-color: #0096ff4d;\n\tcursor: pointer;\n}\n\n.cell.ship {\n\tbackground-color: #808080;\n}\n\n.cell.hit {\n\tbackground-color: #ff4d4d;\n}\n\n.cell.miss {\n\tbackground-color: #bcdff5;\n}\n\n/* sunk */\n\n.cell.sunk::before,\n.cell.sunk::after {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\twidth: 80%;\n\theight: 2px;\n\tbackground-color: #000;\n\ttransform-origin: center;\n}\n\n.cell.sunk::before {\n\ttransform: translate(-50%, -50%) rotate(45deg);\n}\n\n.cell.sunk::after {\n\ttransform: translate(-50%, -50%) rotate(-45deg);\n}\n\n/* ================= WINNER ================= */\n\n#winner-banner {\n\tposition: fixed;\n\ttop: 30%;\n\tleft: 50%;\n\ttransform: translate(-50%, -30%);\n\tpadding: 16px 28px;\n\tbackground-color: #000;\n\tcolor: #fff;\n\tborder-radius: 10px;\n\tfont-size: 22px;\n\tfont-weight: 700;\n\tbox-shadow: 0 0 30px #00000080;\n\tz-index: 1000;\n}\n\n.hidden {\n\tdisplay: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 314
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ 354
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ 72
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ 659
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ 540
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ 56
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ 825
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ 113
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(208);
;// ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const src_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// ./src/Gameboard.js
class Gameboard {
	constructor(size = 10) {
		this.size = size;
		this.grid = this.createGrid(size);
		this.ships = [];
	}

	createGrid(size) {
		const grid = [];

		for (let y = 0; y < size; y++) {
			const row = [];

			for (let x = 0; x < size; x++) {
				row.push({
					ship: null,
					revealed: false,
				});
			}

			grid.push(row);
		}

		return grid;
	}

	placeShip(ship, x, y, direction = "horizontal") {
		const coords = this.#validatePlacement(ship.length, x, y, direction);
		ship.coordinates = coords;

		this.ships.push(ship);

		for (const [cx, cy] of coords) {
			this.grid[cy][cx].ship = ship;
		}
	}

	hasShipAt(x, y) {
		return this.grid[y][x].ship !== null;
	}

	receiveAttack(x, y) {
		if (x < 0 || y < 0 || x >= this.size || y >= this.size) {
			throw new Error("Attack is out of bounds");
		}

		const targetCell = this.grid[y][x];

		if (targetCell.revealed) {
			return { status: "invalid", sunk: false };
		} else {
			targetCell.revealed = true;

			if (targetCell.ship) {
				targetCell.ship.hit();

				if (targetCell.ship.isSunk()) {
					this.revealSunkShip(targetCell.ship);
					return { status: "hit", sunk: true };
				}

				return { status: "hit", sunk: false };
			} else {
				return { status: "miss", sunk: false };
			}
		}
	}

	revealSunkShip(ship) {
		const coords = ship.coordinates;

		for (const [x, y] of coords) {
			for (let dy = -1; dy <= 1; dy++) {
				for (let dx = -1; dx <= 1; dx++) {
					const nx = x + dx;
					const ny = y + dy;

					if (nx < 0 || ny < 0 || nx >= this.size || ny >= this.size) continue;

					if (!this.grid[ny][nx].revealed) {
						this.grid[ny][nx].revealed = true;
					}
				}
			}
		}
	}

	allShipsSunk() {
		if (this.ships.length === 0) return false;

		return this.ships.every((ship) => ship.isSunk());
	}

	#validatePlacement(shipLength, x, y, direction) {
		if (
			x < 0 ||
			y < 0 ||
			(direction === "horizontal" && x + shipLength > this.size) ||
			(direction === "vertical" && y + shipLength > this.size)
		) {
			throw new Error("Ship is out of bounds");
		}

		const coords = this.#getShipCoordinates(shipLength, x, y, direction);

		for (const [cx, cy] of coords) {
			if (this.grid[cy][cx].ship) {
				throw new Error("Cell is occupied");
			}

			if (this.#isAdjacentOccupied(cx, cy)) {
				throw new Error("Too close to existing ship");
			}
		}

		return coords;
	}

	#getShipCoordinates(shipLength, x, y, direction) {
		const coords = [];

		for (let i = 0; i < shipLength; i++) {
			const cx = direction === "horizontal" ? x + i : x;
			const cy = direction === "vertical" ? y + i : y;

			coords.push([cx, cy]);
		}

		return coords;
	}

	#isAdjacentOccupied(x, y) {
		for (let dy = -1; dy <= 1; dy++) {
			for (let dx = -1; dx <= 1; dx++) {
				//skip the center cell
				if (dx === 0 && dy === 0) continue;

				const nx = x + dx;
				const ny = y + dy;

				// skip out-of-bounds cells
				if (nx < 0 || ny < 0 || nx >= this.size || ny >= this.size) {
					continue;
				}

				// check adjacent cells for a ship
				if (this.grid[ny][nx].ship) {
					return true;
				}
			}
		}

		return false;
	}
}

;// ./src/Player.js


class Player {
	static TYPES = {
		HUMAN: "human",
		COMPUTER: "computer",
	};

	constructor(type) {
		if (!Object.values(Player.TYPES).includes(type)) {
			throw new Error(`Invalid player type: ${type}`);
		}

		this.type = type;
		this.board = new Gameboard();
	}

	attack(enemyBoard, x, y) {
		return enemyBoard.receiveAttack(x, y);
	}

	getRandomAttackTarget() {
		const x = Math.floor(Math.random() * this.board.size);
		const y = Math.floor(Math.random() * this.board.size);

		return [x, y];
	}
}

;// ./src/Ship.js
class Ship {
	constructor(length) {
		this.length = length;
		this.hits = 0;
	}

	hit() {
		this.hits++;
	}

	isSunk() {
		return this.hits >= this.length;
	}
}

;// ./src/GameController.js



class GameController {
	constructor() {
		this.placementFleet = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

		this.phase = "idle";
	}

	startSetup() {
		this.player1 = new Player("human");
		this.player2 = new Player("computer");

		this.phase = "placement";

		this.currentShipIndex = 0;
		this.currentDirection = "horizontal";

		this.currentPlayer = this.player1;

		this.autoPlaceShips(this.player2);

		this.aiState = {
			huntMoves: this.#generateAllMoves(),
			mode: "hunt",
			originHit: null,
			lastHit: null,
			direction: null,
			directionStep: null,
		};
	}

	/* =========================
	   PLACEMENT LOGIC
	========================= */

	autoPlaceShips(player, startFromIndex = 0) {
		const ships = this.placementFleet;

		for (let i = startFromIndex; i < ships.length; i++) {
			let placed = false;

			for (let attempts = 0; attempts < 100 && !placed; attempts++) {
				const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
				const x = Math.floor(Math.random() * 10);
				const y = Math.floor(Math.random() * 10);

				try {
					player.board.placeShip(new Ship(ships[i]), x, y, direction);
					placed = true;
				} catch {}
			}

			if (!placed) {
				throw new Error("Failed to place ships");
			}
		}

		return { status: "ok" };
	}

	getNextShipLength() {
		return this.placementFleet[this.currentShipIndex];
	}

	placeNextShip(x, y) {
		if (this.phase !== "placement") return { status: "invalid" };

		try {
			const ship = new Ship(this.getNextShipLength());

			this.player1.board.placeShip(ship, x, y, this.currentDirection);
			this.currentShipIndex++;

			if (this.isPlacementComplete(this.player1)) {
				this.tryStartBattle();
			}

			return { status: "ok" };
		} catch (e) {
			return { status: "invalid", error: e.message };
		}
	}

	isPlacementComplete(player) {
		return player.board.ships.length >= this.placementFleet.length;
	}

	toggleDirection() {
		this.currentDirection =
			this.currentDirection === "horizontal" ? "vertical" : "horizontal";
	}

	/* =========================
	   BATTLE START
	========================= */

	tryStartBattle() {
		if (
			this.isPlacementComplete(this.player1) &&
			this.isPlacementComplete(this.player2)
		) {
			this.phase = "battle";
			this.currentPlayer = this.player1;
		}
	}

	/* =========================
	   TURN SYSTEM
	========================= */

	playTurn(x, y) {
		if (this.phase !== "battle") {
			return {
				status: "invalid",
				winner: null,
			};
		}

		return this.#resolveTurn(x, y);
	}

	/* =========================
	   AI LOGIC
	========================= */

	playComputerTurn() {
		let state = this.aiState;

		const [x, y] = this.getComputerMove();

		const result = this.#resolveTurn(x, y);

		this.#updateAI(x, y, result.status, result.sunk);

		return result;
	}

	isComputerTurn() {
		return this.currentPlayer.type === "computer";
	}

	getComputerMove() {
		const state = this.aiState;

		if (state.mode === "hunt") {
			return state.huntMoves.pop();
		}

		if (state.mode === "target") {
			if (state.direction) {
				return this.#getDirectionalMove();
			}

			const move = state.neighbors.pop();
			if (move) return move;
		}
	}

	#generateAllMoves() {
		const moves = [];

		for (let y = 0; y < 10; y++) {
			for (let x = 0; x < 10; x++) {
				moves.push([x, y]);
			}
		}

		for (let i = moves.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[moves[i], moves[j]] = [moves[j], moves[i]];
		}

		return moves;
	}

	#getDirectionalMove() {
		const state = this.aiState;
		let x;
		let y;

		if (state.direction === "horizontal") {
			x = state.lastHit.x + state.directionStep;
			y = state.lastHit.y;
		} else {
			x = state.lastHit.x;
			y = state.lastHit.y + state.directionStep;
		}

		if (x < 0 || x >= 10 || y < 0 || y >= 10) {
			state.directionStep *= -1;
			state.lastHit = state.originHit;

			return this.#getDirectionalMove();
		}

		return [x, y];
	}

	#updateAI(x, y, status, sunk) {
		const state = this.aiState;

		if (sunk) {
			state.mode = "hunt";
			state.originHit = null;
			state.lastHit = null;
			return;
		}

		if (status === "hit") {
			state.lastHit = { x, y };

			//Already targeting, determine direction
			if (state.mode === "target" && !state.direction) {
				if (state.lastHit.x === state.originHit.x) {
					state.direction = "vertical";
					state.directionStep = state.lastHit.y > state.originHit.y ? 1 : -1;
				} else if (state.lastHit.y === state.originHit.y) {
					state.direction = "horizontal";
					state.directionStep = state.lastHit.x > state.originHit.x ? 1 : -1;
				}
			}

			//First hit, switch to target mode
			else if (state.mode === "hunt") {
				state.mode = "target";
				state.originHit = { x, y };
				state.direction = null;
				state.neighbors = this.#getNeighbors(x, y);
			}
		}

		if (status === "miss" || status === "invalid") {
			if (state.mode === "target") {
				if (state.direction) {
					state.lastHit = state.originHit;
					state.directionStep *= -1;
				}
			}
		}
	}

	#getNeighbors(x, y) {
		return [
			[x + 1, y],
			[x - 1, y],
			[x, y + 1],
			[x, y - 1],
		].filter(([x, y]) => x >= 0 && x < 10 && y >= 0 && y < 10);
	}

	#resolveTurn(x, y) {
		const enemy =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;

		const result = this.currentPlayer.attack(enemy.board, x, y);

		const winner = this.#checkWinner();
		if (winner) {
			this.phase = "gameover";
			return {
				status: result.status,
				sunk: result.sunk,
				winner,
			};
		}

		if (result.status === "miss") {
			this.#switchTurn();
		}

		return {
			status: result.status,
			sunk: result.sunk,
			winner: null,
		};
	}

	#switchTurn() {
		this.currentPlayer =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;
	}

	#checkWinner() {
		if (this.player1.board.allShipsSunk()) {
			return this.player2;
		}

		if (this.player2.board.allShipsSunk()) {
			return this.player1;
		}

		return null;
	}
}

;// ./src/UIController.js
class UIController {
	constructor(game) {
		this.game = game;

		this.hoverX = null;
		this.hoverY = null;
		this.previewCells = [];

		this.boardsEl = document.querySelector("#boards");
		this.bannerEl = document.querySelector("#winner-banner");
		this.playerBoardEl = document.querySelector("#player-board");
		this.enemyBoardEl = document.querySelector("#enemy-board");

		this.startGameBtn = document.querySelector("#start-game-btn");
		this.autoPlaceBtn = document.querySelector("#auto-place-btn");
		this.rotateBtn = document.querySelector("#rotate-btn");

		/* =========================
		   SETUP
		========================= */

		this.startGameBtn.addEventListener("click", () => {
			this.game.startSetup();
			this.bannerEl.textContent = "";
			this.bannerEl.classList.add("hidden");
			this.render();
		});

		this.autoPlaceBtn.addEventListener("click", () => {
			this.game.autoPlaceShips(this.game.player1, this.game.currentShipIndex);
			this.game.tryStartBattle();
			this.render();
		});

		this.rotateBtn.addEventListener("click", () => {
			this.game.toggleDirection();
			this.render();
		});
		window.addEventListener("keydown", (e) => {
			if (e.key === "r") {
				this.game.toggleDirection();
				this.render();
			}
		});

		/* =========================
		   BOARD EVENTS
		========================= */

		this.playerBoardEl.addEventListener("click", (e) =>
			this.handlePlayerBoardClick(e),
		);

		this.enemyBoardEl.addEventListener("click", (e) =>
			this.handleEnemyBoardClick(e),
		);

		this.playerBoardEl.addEventListener("mousemove", (e) => {
			this.handleHover(e);
		});
		this.playerBoardEl.addEventListener("mouseleave", () => {
			this.handleLeave();
		});
	}

	/* =========================
	   INPUT HANDLERS
	========================= */

	handlePlayerBoardClick(e) {
		if (this.game.phase !== "placement") return;

		const cell = e.target.closest(".cell");
		if (!cell) return;

		const x = Number(cell.dataset.x);
		const y = Number(cell.dataset.y);

		const result = this.game.placeNextShip(x, y);

		if (result.status === "ok") {
			this.game.tryStartBattle();
			this.render();
		}
	}

	async handleEnemyBoardClick(e) {
		if (this.game.phase !== "battle") return;

		const cell = e.target.closest(".cell");
		if (!cell) return;

		const x = Number(cell.dataset.x);
		const y = Number(cell.dataset.y);

		let result = this.game.playTurn(x, y);

		if (result.status === "invalid") return;

		this.render();

		if (result.winner) {
			this.showWinner(result.winner.type);
			return;
		}

		while (this.game.isComputerTurn()) {
			await this.delay(400);

			result = this.game.playComputerTurn();

			if (result.status === "invalid") continue;

			this.render();

			if (result.winner) {
				this.showWinner(result.winner.type);
				return;
			}
		}
	}

	handleHover(e) {
		if (this.game.phase !== "placement") return;

		const cell = e.target.closest(".cell");
		if (!cell) return;

		const x = Number(cell.dataset.x);
		const y = Number(cell.dataset.y);

		if (this.hoverX === x && this.hoverY === y) return;

		this.hoverX = x;
		this.hoverY = y;

		this.render();
	}

	handleLeave() {
		if (this.hoverX === null && this.hoverY === null) return;

		this.hoverX = null;
		this.hoverY = null;

		this.render();
	}

	/* =========================
	   RENDER
	========================= */

	render() {
		this.updateUIState();
		this.updateTurnIndicator();

		if (this.game.phase === "idle") return;

		this.renderBoard(this.game.player1.board, this.playerBoardEl, false);
		this.renderBoard(this.game.player2.board, this.enemyBoardEl, true);
	}

	renderBoard(board, container, isEnemy = false) {
		container.innerHTML = "";
		container.classList.add("board");

		const preview = isEnemy ? [] : this.getPreviewCells();

		board.grid.forEach((row, y) => {
			row.forEach((cell, x) => {
				const div = document.createElement("div");
				div.classList.add("cell");

				const key = `${x},${y}`;
				if (preview && preview.includes(key)) {
					div.classList.add("preview");
				}

				if (cell.ship && !isEnemy) {
					div.classList.add("ship");
				}

				if (cell.revealed) {
					if (cell.ship) {
						div.classList.add("hit");
						if (cell.ship.isSunk()) {
							div.classList.add("sunk");
						}
					} else {
						div.classList.add("miss");
					}
				}

				if (
					isEnemy &&
					this.game.currentPlayer.type === "human" &&
					!cell.revealed &&
					this.game.phase === "battle"
				) {
					div.classList.add("hoverable");
				}

				div.dataset.x = x;
				div.dataset.y = y;

				container.appendChild(div);
			});
		});
	}

	getPreviewCells() {
		if (this.hoverX === null || this.hoverY === null) return [];

		const length = this.game.getNextShipLength();
		const dir = this.game.currentDirection;

		const cells = [];

		for (let i = 0; i < length; i++) {
			const x = dir === "horizontal" ? this.hoverX + i : this.hoverX;
			const y = dir === "vertical" ? this.hoverY + i : this.hoverY;

			if (x >= 10 || y >= 10) return [];

			cells.push(`${x},${y}`);
		}

		return cells;
	}

	/* =========================
	   UI STATE
	========================= */

	updateUIState() {
		const isPlacement = this.game.phase === "placement";

		this.boardsEl.style.display = this.game.phase === "idle" ? "none" : "flex";
		this.autoPlaceBtn.style.display = isPlacement ? "block" : "none";
		this.rotateBtn.style.display = isPlacement ? "block" : "none";
	}

	updateTurnIndicator() {
		const indicator = document.querySelector("#turn-indicator");

		indicator.classList.remove(
			"player-turn",
			"computer-turn",
			"game-over",
			"placement",
		);

		switch (this.game.phase) {
			case "placement":
				indicator.textContent = "Place your ships";
				indicator.classList.add("placement");
				break;
			case "battle":
				if (this.game.currentPlayer.type === "human") {
					indicator.textContent = "Your turn";
					indicator.classList.add("player-turn");
				} else {
					indicator.textContent = "Computer thinking...";
					indicator.classList.add("computer-turn");
				}
				break;
			case "gameover":
				indicator.textContent = "Game Over";
				indicator.classList.add("game-over");
				break;
			default:
				indicator.textContent = "";
		}
	}

	/* =========================
	   UTIL
	========================= */

	delay(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	showWinner(type) {
		const formatted = type.charAt(0).toUpperCase() + type.slice(1);

		this.bannerEl.textContent = `${formatted} wins!`;
		this.bannerEl.classList.remove("hidden");
	}
}

;// ./src/index.js




const game = new GameController();
const ui = new UIController(game);

ui.render();

/******/ })()
;
//# sourceMappingURL=main.js.map