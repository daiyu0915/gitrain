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

var styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "4px",
    padding: "32px 32px",
    backgroundColor: "#ddd",
    margin: "16px 128px"
  },
  avatar: {
    width: "200px",
    height: "200px"
  }
};

var ResultCard = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ResultCard, _React$Component);

  var _super = _createSuper(ResultCard);

  function ResultCard() {
    (0, _classCallCheck2["default"])(this, ResultCard);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ResultCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          player = _this$props.player;
      if (!player) return null;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.card
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "text-center"
      }, type), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
        src: player.avatar_url,
        alt: "",
        style: styles.avatar
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/_react["default"].createElement("h3", null, "Scores: ", player.public_repos), /*#__PURE__*/_react["default"].createElement("h2", {
        className: "text-primary"
      }, player.name)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-location-arrow"
      }), " ", player.location), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-group"
      }), " ", player.followers), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-user-plus"
      }), " ", player.following), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-code"
      }), " ", player.public_repos));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return ResultCard;
}(_react["default"].Component);

var _default = ResultCard;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "D:\\pric\\zgit\\gitrain\\src\\components\\battle\\ResultCard.js");
  reactHotLoader.register(ResultCard, "ResultCard", "D:\\pric\\zgit\\gitrain\\src\\components\\battle\\ResultCard.js");
  reactHotLoader.register(_default, "default", "D:\\pric\\zgit\\gitrain\\src\\components\\battle\\ResultCard.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();