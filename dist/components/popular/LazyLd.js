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

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var LazyLd = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LazyLd, _React$Component);

  var _super = _createSuper(LazyLd);

  function LazyLd() {
    var _this;

    (0, _classCallCheck2["default"])(this, LazyLd);
    _this = _super.call(this);
    _this.state = {
      done: false
    };
    return _this;
  }

  (0, _createClass2["default"])(LazyLd, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      // 创建一个虚拟图片
      var img = new Image(); // 发出请求，请求图片

      img.src = this.props.src; // 当图片加载完毕

      img.onload = function () {
        _this2.setState({
          done: true
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, this.state.done ? /*#__PURE__*/_react["default"].createElement("img", {
        style: {
          width: "150px",
          height: "150px"
        },
        src: this.props.src,
        alt: "no"
      }) : /*#__PURE__*/_react["default"].createElement("img", {
        style: {
          width: "150px",
          height: "150px"
        },
        src: "https://img.devrant.com/devrant/rant/r_228415_fDWmt.gif",
        alt: "no"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return LazyLd;
}(_react["default"].Component);

var _default = LazyLd;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LazyLd, "LazyLd", "D:\\pric\\zgit\\gitrain\\src\\components\\popular\\LazyLd.js");
  reactHotLoader.register(_default, "default", "D:\\pric\\zgit\\gitrain\\src\\components\\popular\\LazyLd.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();