"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

require("@/styles/git.css");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var Menu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Menu, _React$Component);

  var _super = _createSuper(Menu);

  function Menu() {
    (0, _classCallCheck2["default"])(this, Menu);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Menu, [{
    key: "render",
    value: function render() {
      var links = [{
        title: "All",
        query: ""
      }, {
        title: "JavaScript",
        query: "javascript"
      }, {
        title: "Ruby",
        query: "ruby"
      }, {
        title: "Java",
        query: "java"
      }, {
        title: "CSS",
        query: "css"
      }, {
        title: "Python",
        query: "python"
      }];
      var r = window.location.search.split("=").slice(1).toString();
      console.log(r);
      var list = links.map(function (item, key) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: key
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: "/?q=".concat(item.query),
          style: {
            color: r === item.query ? "red" : "black"
          }
        }, item.title));
      });
      return /*#__PURE__*/_react["default"].createElement("ul", {
        id: "headbar"
      }, list);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Menu;
}(_react["default"].Component);

var _default = Menu;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Menu, "Menu", "D:\\pric\\zgit\\gitrain\\src\\components\\popular\\Menu.js");
  reactHotLoader.register(_default, "default", "D:\\pric\\zgit\\gitrain\\src\\components\\popular\\Menu.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();