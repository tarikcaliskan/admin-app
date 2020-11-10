webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SideItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideItem */ "./components/SideItem.js");

var _jsxFileName = "/Users/tarik/Desktop/admin-app/components/Sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Sidebar() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "flex-none w-full md:w-auto 2xl:w-1/2 lg:max-w-xs pb-5 md:pb-0 bg-white text-gray-900 shadow-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex justify-between lg:justify-center py-5 px-5 border-b-2 border-gray-300 items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "text-blue-600 font-semibold text-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, "Admin Dashboard"), __jsx("div", {
    className: "block lg:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }, __jsx("button", {
    className: "flex items-center focus:outline-none",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "w-6 h-6 hover:text-blue-600",
    src: "./assets/icons/menu.svg",
    alt: "Hamburger menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 8
    }
  })))), __jsx("div", {
    className: "ml-6 ".concat(isOpen),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex items-center justift-center mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  }, __jsx("img", {
    className: "h-12 w-12 rounded-full",
    src: "./assets/img/worker.svg",
    alt: "Avatar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "text-gray-800 font-medium text-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 8
    }
  }, "John Doe"), __jsx("p", {
    className: "text-gray-600 text-sm font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 8
    }
  }, "john.doe@example.com"))), __jsx("div", {
    className: "mt-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 6
    }
  }, __jsx(_SideItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Dashboard",
    icon: "dashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(_SideItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Tasks",
    icon: "tasks",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx(_SideItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Email",
    icon: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx(_SideItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Contacts",
    icon: "contacts",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx(_SideItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Chat",
    icon: "chat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(_SideItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Deals",
    icon: "deals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "mt-8 -ml-8 border border-gray-300",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx(_SideItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Settings",
    icon: "Settings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.32ce9ec85b5b2f2a80c1.hot-update.js.map