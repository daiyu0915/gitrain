"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Battle = _interopRequireDefault(require("@/pages/Battle/Battle"));

var _Result = _interopRequireDefault(require("@/pages/Battle/Result"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var Combination = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Combination, _React$Component);

  var _super = _createSuper(Combination);

  function Combination(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Combination);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "componentDidMount", function () {
      if (window.location.hash !== "#/battle") {
        console.log("刷新啊啊啊啊啊");
        var myhref = window.location.href.split("?")[1].split("&");
        console.log("href", window.location.href.split("?")[1].split("&"));
        var play1 = myhref[0].split("=")[1];
        var play2 = myhref[1].split("=")[1];
        console.log(play1, play2);

        _this.setState({
          player1: play1,
          player2: play2
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "startBattle", function (p1, p2) {
      console.log("battle了");

      _this.setState({
        player1: p1,
        player2: p2
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "reset", function () {
      _this.setState({
        player1: "",
        player2: ""
      });

      window.location.hash = "#/battle";
    });
    _this.state = {
      player1: "",
      player2: ""
    };
    return _this;
  }

  (0, _createClass2["default"])(Combination, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          player1 = _this$state.player1,
          player2 = _this$state.player2;

      if (player1 && player2) {
        return /*#__PURE__*/_react["default"].createElement(_Result["default"], {
          player1: player1,
          player2: player2,
          reset: this.reset
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_Battle["default"], {
        startBattle: this.startBattle
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Combination;
}(_react["default"].Component);

var _default = Combination;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Combination, "Combination", "D:\\pric\\zgit\\gitrain\\src\\pages\\Battle\\Combination.js");
  reactHotLoader.register(_default, "default", "D:\\pric\\zgit\\gitrain\\src\\pages\\Battle\\Combination.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();