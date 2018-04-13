module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/stores/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__ = __webpack_require__("material-ui/Table");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Paper__ = __webpack_require__("material-ui/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Paper__);
var _jsxFileName = '/home/aqeel/typenext/pages/stores/index.tsx';




var styles = function styles(theme) {
    return {
        root: {
            width: '50%',
            marginTop: theme.spacing.unit * 3,
            overflowX: 'auto'
        },
        table: {
            minWidth: 700
        }
    };
};
var id = 0;
function createData(name, type, products, orders, revenue) {
    id += 1;
    return { id: id, name: name, type: type, products: products, orders: orders, revenue: revenue };
}
var data = [createData('orange', 'BookStore', 125, 24, 9999), createData('Lego', 'Sporting Goods', 145, 23, 1000), createData('TD Groups', 'Art Supllier', 455, 21, 9890), createData('Sony', 'Department store', 37, 11, 4783), createData('Lenovo', 'Harware Store', 160, 49, 34449)];
;
function SimpleTable(props) {
    var classes = props.classes;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_material_ui_Paper___default.a,
        { className: classes.root, __source: {
                fileName: _jsxFileName,
                lineNumber: 30
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_material_ui_Table___default.a,
            { className: classes.table, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableHead"],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableRow"],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableCell"],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 34
                            }
                        },
                        'Stores'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableCell"],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 35
                            }
                        },
                        'Type'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableCell"],
                        { numeric: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 36
                            }
                        },
                        'No. of Products'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableCell"],
                        { numeric: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                            }
                        },
                        'Orders'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableCell"],
                        { numeric: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            }
                        },
                        'Revenue'
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableBody"],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                },
                data.map(function (n) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableRow"],
                        { key: n.id, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableCell"],
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 44
                                }
                            },
                            n.name
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableCell"],
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 45
                                }
                            },
                            n.type
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableCell"],
                            { numeric: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 46
                                }
                            },
                            n.products
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableCell"],
                            { numeric: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 47
                                }
                            },
                            n.orders
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__["TableCell"],
                            { numeric: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 48
                                }
                            },
                            n.revenue
                        )
                    );
                })
            )
        )
    );
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(SimpleTable));

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/stores/index.tsx");


/***/ }),

/***/ "material-ui/Paper":
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),

/***/ "material-ui/Table":
/***/ (function(module, exports) {

module.exports = require("material-ui/Table");

/***/ }),

/***/ "material-ui/styles":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=stores.js.map