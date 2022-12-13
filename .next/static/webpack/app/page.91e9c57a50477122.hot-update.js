"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./app/SwrPage.tsx":
/*!*************************!*\
  !*** ./app/SwrPage.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_fetchHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/fetchHooks */ \"./api/fetchHooks.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.ts\");\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header/Header */ \"./components/Header/Header.tsx\");\n/* harmony import */ var _components_Grid_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Grid/Grid */ \"./components/Grid/Grid.tsx\");\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Card/Card */ \"./components/Card/Card.tsx\");\n/* harmony import */ var _components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Spinner/Spinner */ \"./components/Spinner/Spinner.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n// Fetch hook\n\n// Config\n\n// Components\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [query, setQuery] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const { data , isLoading , error  } = (0,_api_fetchHooks__WEBPACK_IMPORTED_MODULE_3__.useFetchMoviesSwr)(query);\n    console.error(data);\n    const handleScroll = (e)=>{\n        const { scrollTop , clientHeight , scrollHeight  } = e.currentTarget;\n        if (scrollHeight - scrollTop === clientHeight) ()=>{};\n    };\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Oh noooooooo something went wrong!\"\n    }, void 0, false, {\n        fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n        lineNumber: 28,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"main-element relative h-screen overflow-y-scroll\",\n        onScroll: handleScroll,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                setQuery: setQuery\n            }, void 0, false, {\n                fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Grid_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                className: \"p-4 max-w-7xl m-auto\",\n                title: query ? \"Search Results: \".concat(data === null || data === void 0 ? void 0 : data[0].results.total_results) : \"Popular Movies\",\n                children: data && (data === null || data === void 0 ? void 0 : data.length) > 0 ? data.map((page)=>page.results.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\".concat(movie.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cursor-pointer hover:opacity-80 duration-300\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    imgUrl: movie.poster_path ? _config__WEBPACK_IMPORTED_MODULE_4__.IMAGE_BASE_URL + _config__WEBPACK_IMPORTED_MODULE_4__.POSTER_SIZE + movie.poster_path : \"/no_image.jpg\",\n                                    title: movie.original_title\n                                }, void 0, false, {\n                                    fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 19\n                            }, undefined)\n                        }, movie.id, false, {\n                            fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, undefined))) : null\n            }, void 0, false, {\n                fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n                lineNumber: 63,\n                columnNumber: 20\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"iT+lQpY39If7lDy2xmMVVxBtPKo=\", false, function() {\n    return [\n        _api_fetchHooks__WEBPACK_IMPORTED_MODULE_3__.useFetchMoviesSwr\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvU3dyUGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRTBCO0FBQ0c7QUFDN0IsYUFBYTtBQUN5RDtBQUN0RSxTQUFTO0FBQytDO0FBQ3hELGFBQWE7QUFDb0M7QUFFTjtBQUNBO0FBQ1M7QUFFcEQsTUFBTVMsV0FBVyxJQUFNOztJQUNyQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1gscURBQWMsQ0FBQztJQUV6QyxNQUFNLEVBQUVhLEtBQUksRUFBRUMsVUFBUyxFQUFFQyxNQUFLLEVBQUUsR0FBR2Isa0VBQWlCQSxDQUFDUTtJQUNyRE0sUUFBUUQsS0FBSyxDQUFDRjtJQUVkLE1BQU1JLGVBQWUsQ0FBQ0MsSUFBa0M7UUFDdEQsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLGFBQVksRUFBRUMsYUFBWSxFQUFFLEdBQUdILEVBQUVJLGFBQWE7UUFFakUsSUFBSUQsZUFBZUYsY0FBY0MsY0FBYyxJQUFNLENBQUM7SUFDeEQ7SUFFQSxJQUFJTCxPQUFPLHFCQUFPLDhEQUFDUTtrQkFBSTs7Ozs7O0lBRXZCLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFVO1FBQ1ZDLFVBQVVUOzswQkFFViw4REFBQ1osaUVBQU1BO2dCQUFDTSxVQUFVQTs7Ozs7OzBCQUNsQiw4REFBQ0wsNkRBQUlBO2dCQUNIbUIsV0FBVTtnQkFDVkUsT0FDRWpCLFFBQ0ksbUJBQW1ELE9BQWhDRyxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLElBQU0sQ0FBQyxFQUFFLENBQUNlLE9BQU8sQ0FBQ0MsYUFBYSxJQUNsRCxnQkFBZ0I7MEJBR3JCaEIsUUFBUUEsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNaUIsTUFBTSxJQUFHLElBQ3BCakIsS0FBS2tCLEdBQUcsQ0FBQyxDQUFDQyxPQUNSQSxLQUFLSixPQUFPLENBQUNHLEdBQUcsQ0FBQyxDQUFDRSxzQkFDaEIsOERBQUNoQyxrREFBSUE7NEJBQWdCaUMsTUFBTSxJQUFhLE9BQVRELE1BQU1FLEVBQUU7c0NBQ3JDLDRFQUFDWjtnQ0FBSUUsV0FBVTswQ0FDYiw0RUFBQ2xCLDZEQUFJQTtvQ0FDSDZCLFFBQ0VILE1BQU1JLFdBQVcsR0FDYmxDLG1EQUFjQSxHQUFHQyxnREFBV0EsR0FBRzZCLE1BQU1JLFdBQVcsR0FDaEQsZUFBZTtvQ0FFckJWLE9BQU9NLE1BQU1LLGNBQWM7Ozs7Ozs7Ozs7OzJCQVJ0QkwsTUFBTUUsRUFBRTs7OzswQ0FjdkIsSUFBSTs7Ozs7O1lBRVRyQiwwQkFBWSw4REFBQ04sbUVBQU9BOzs7OzRCQUFNLElBQUk7Ozs7Ozs7QUFHckM7R0FsRE1DOztRQUcrQlAsOERBQWlCQTs7O0tBSGhETztBQW9ETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvU3dyUGFnZS50c3g/NjhhOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gRmV0Y2ggaG9va1xuaW1wb3J0IHsgdXNlRmV0Y2hNb3ZpZXMsIHVzZUZldGNoTW92aWVzU3dyIH0gZnJvbSAnLi4vYXBpL2ZldGNoSG9va3MnO1xuLy8gQ29uZmlnXG5pbXBvcnQgeyBJTUFHRV9CQVNFX1VSTCwgUE9TVEVSX1NJWkUgfSBmcm9tICcuLi9jb25maWcnO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInO1xuXG5pbXBvcnQgR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0dyaWQvR3JpZCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQvQ2FyZCc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9jb21wb25lbnRzL1NwaW5uZXIvU3Bpbm5lcic7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcblxuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgZXJyb3IgfSA9IHVzZUZldGNoTW92aWVzU3dyKHF1ZXJ5KTtcbiAgY29uc29sZS5lcnJvcihkYXRhKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoZTogUmVhY3QuVUlFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IHNjcm9sbFRvcCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQgfSA9IGUuY3VycmVudFRhcmdldDtcblxuICAgIGlmIChzY3JvbGxIZWlnaHQgLSBzY3JvbGxUb3AgPT09IGNsaWVudEhlaWdodCkgKCkgPT4ge307XG4gIH07XG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5PaCBub29vb29vb28gc29tZXRoaW5nIHdlbnQgd3JvbmchPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW5cbiAgICAgIGNsYXNzTmFtZT1cIm1haW4tZWxlbWVudCByZWxhdGl2ZSBoLXNjcmVlbiBvdmVyZmxvdy15LXNjcm9sbFwiXG4gICAgICBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfVxuICAgID5cbiAgICAgIDxIZWFkZXIgc2V0UXVlcnk9e3NldFF1ZXJ5fSAvPlxuICAgICAgPEdyaWRcbiAgICAgICAgY2xhc3NOYW1lPVwicC00IG1heC13LTd4bCBtLWF1dG9cIlxuICAgICAgICB0aXRsZT17XG4gICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgID8gYFNlYXJjaCBSZXN1bHRzOiAke2RhdGE/LlswXS5yZXN1bHRzLnRvdGFsX3Jlc3VsdHN9YFxuICAgICAgICAgICAgOiAnUG9wdWxhciBNb3ZpZXMnXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAge2RhdGEgJiYgZGF0YT8ubGVuZ3RoID4gMFxuICAgICAgICAgID8gZGF0YS5tYXAoKHBhZ2UpID0+XG4gICAgICAgICAgICAgIHBhZ2UucmVzdWx0cy5tYXAoKG1vdmllKSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXttb3ZpZS5pZH0gaHJlZj17YC8ke21vdmllLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTgwIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIGltZ1VybD17XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZS5wb3N0ZXJfcGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IElNQUdFX0JBU0VfVVJMICsgUE9TVEVSX1NJWkUgKyBtb3ZpZS5wb3N0ZXJfcGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcvbm9faW1hZ2UuanBnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17bW92aWUub3JpZ2luYWxfdGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgPC9HcmlkPlxuICAgICAge2lzTG9hZGluZyA/IDxTcGlubmVyIC8+IDogbnVsbH1cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VGZXRjaE1vdmllc1N3ciIsIklNQUdFX0JBU0VfVVJMIiwiUE9TVEVSX1NJWkUiLCJIZWFkZXIiLCJHcmlkIiwiQ2FyZCIsIlNwaW5uZXIiLCJIb21lUGFnZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ1c2VTdGF0ZSIsImRhdGEiLCJpc0xvYWRpbmciLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVTY3JvbGwiLCJlIiwic2Nyb2xsVG9wIiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiY3VycmVudFRhcmdldCIsImRpdiIsIm1haW4iLCJjbGFzc05hbWUiLCJvblNjcm9sbCIsInRpdGxlIiwicmVzdWx0cyIsInRvdGFsX3Jlc3VsdHMiLCJsZW5ndGgiLCJtYXAiLCJwYWdlIiwibW92aWUiLCJocmVmIiwiaWQiLCJpbWdVcmwiLCJwb3N0ZXJfcGF0aCIsIm9yaWdpbmFsX3RpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/SwrPage.tsx\n"));

/***/ })

});