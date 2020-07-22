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

require("@/styles/battle.css");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var Instructions = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Instructions, _React$Component);

  var _super = _createSuper(Instructions);

  function Instructions() {
    (0, _classCallCheck2["default"])(this, Instructions);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Instructions, [{
    key: "render",
    value: function render() {
      var style = {
        col1: {
          fontSize: "20px",
          textAlign: "center",
          margin: "8px 16px"
        },
        icon1: {
          backgroundColor: "#eee",
          fontSize: "120px",
          padding: "32px",
          color: "rgba(255,191,116)"
        },
        col2: {
          fontSize: "20px",
          textAlign: "center",
          margin: "8px 16px"
        },
        icon2: {
          backgroundColor: "#eee",
          fontSize: "120px",
          padding: "32px",
          color: "gray"
        },
        col3: {
          fontSize: "20px",
          textAlign: "center",
          margin: "8px 16px"
        },
        icon3: {
          backgroundColor: "#eee",
          fontSize: "120px",
          padding: "32px",
          color: " gold"
        }
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "instuction"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "text-center"
      }, "Instructions")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: style.col1
      }, "Enter two Github"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-users",
        style: style.icon1
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-2"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: style.col2
      }, "Battle"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-fighter-jet",
        style: style.icon2
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: style.col3
      }, "See the winner"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-trophy",
        style: style.icon3
      })))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Instructions;
}(_react["default"].Component);

var _default = Instructions;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Instructions, "Instructions", "D:\\pric\\zgit\\gitrain\\src\\components\\battle\\Instructions.js");
  reactHotLoader.register(_default, "default", "D:\\pric\\zgit\\gitrain\\src\\components\\battle\\Instructions.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();