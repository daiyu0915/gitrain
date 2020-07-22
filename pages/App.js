"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _root = require("react-hot-loader/root");

var _react = _interopRequireDefault(require("react"));

require("font-awesome/less/font-awesome.less");

var _reactRouterDom = require("react-router-dom");

var _loadable = _interopRequireDefault(require("@/pages/Battle/loadable"));

var _Popular = _interopRequireDefault(require("@/pages/Popular"));

require("@/styles/git.css");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// import { extends } from '../../.eslintrc';
var Bat = (0, _loadable["default"])(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2["default"])(require("./Battle/Combination"));
  });
});

function App() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.HashRouter, null, /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      display: "flex",
      fontSize: "18px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/popular",
    style: {
      color: "red"
    }
  }, "Popular"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/battle",
    style: {
      marginLeft: "18px"
    }
  }, "Battle")), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    component: _Popular["default"],
    exact: true
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/popular",
    component: _Popular["default"]
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/battle",
    component: Bat
  })))));
}

var _default = (0, _root.hot)(App);

var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Bat, "Bat", "D:\\pric\\zgit\\gitrain\\src\\pages\\App.js");
  reactHotLoader.register(App, "App", "D:\\pric\\zgit\\gitrain\\src\\pages\\App.js");
  reactHotLoader.register(_default, "default", "D:\\pric\\zgit\\gitrain\\src\\pages\\App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();