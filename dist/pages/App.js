"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("font-awesome/less/font-awesome.less");

var _Popular = _interopRequireDefault(require("@/pages/Popular.js"));

require("./git.css");

var _Battle = _interopRequireDefault(require("@/pages/Battle.js"));

var _reactRouterDom = require("react-router-dom");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

function App() {
  var style = {
    link: {
      marginLeft: "20px"
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.HashRouter, null, /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '18px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/popular",
    style: {
      color: 'red'
    }
  }, "Popular"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/battle",
    style: style.link
  }, "Battle")), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/popular",
    component: _Popular["default"]
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/battle",
    component: _Battle["default"]
  }))));
} // 导出根组件


var _default = App;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "D:\\pric\\zgith\\src\\pages\\App.js");
  reactHotLoader.register(_default, "default", "D:\\pric\\zgith\\src\\pages\\App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();