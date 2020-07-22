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

var _reactRouterDom = require("react-router-dom");

var _battle = _interopRequireDefault(require("@/styles/battle.less"));

require("@/styles/index.less");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var Player = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Player, _React$Component);

  var _super = _createSuper(Player);

  function Player(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Player);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClick", function () {
      var inputValue = _this.state.inputValue;

      _this.setState({
        player1: inputValue
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClick2", function () {
      var inputValue2 = _this.state.inputValue2;

      _this.setState({
        player2: inputValue2
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      _this.setState({
        disabled: !(e.target.value.length > 0)
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange2", function (e) {
      _this.setState({
        disabled2: !(e.target.value.length > 0)
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onBlur1", function (e) {
      _this.setState({
        inputValue: e.target.value
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onBlur2", function (e) {
      _this.setState({
        inputValue2: e.target.value
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onKeyDown", function (e) {
      // console.log("键盘",e.nativeEvent)
      if (e.nativeEvent.code === "Enter") {
        _this.setState({
          player1: e.target.value
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onKeyDown2", function (e) {
      // console.log("键盘",e.nativeEvent)
      if (e.nativeEvent.code === "Enter") {
        _this.setState({
          player2: e.target.value
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cancel", function (player) {
      var _this$setState;

      _this.setState((_this$setState = {}, (0, _defineProperty2["default"])(_this$setState, player, ""), (0, _defineProperty2["default"])(_this$setState, "disabled", true), (0, _defineProperty2["default"])(_this$setState, "disabled2", true), _this$setState));
    });
    _this.state = {
      player1: "",
      player2: "",
      disabled: true,
      disabled2: true,
      inputValue: "",
      inputValue2: ""
    };
    return _this;
  }

  (0, _createClass2["default"])(Player, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          handleKeyDown = _this$props.handleKeyDown,
          startBattle = _this$props.startBattle;
      var _this$state = this.state,
          disabled = _this$state.disabled,
          disabled2 = _this$state.disabled2,
          player1 = _this$state.player1,
          player2 = _this$state.player2;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "text-center"
      }, "Players"), /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].playerBox
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].play
      }, /*#__PURE__*/_react["default"].createElement("h3", null, "Player 1"), player1 ? /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].selected
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].info
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].imgbox
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "https://github.com/".concat(player1, ".png?size=200"),
        alt: "",
        className: _battle["default"].playerimg
      })), /*#__PURE__*/_react["default"].createElement("span", null, player1)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
        role: "button",
        tabIndex: "0",
        className: "fa-stack fa-lg",
        onKeyDown: handleKeyDown,
        onClick: function onClick() {
          return _this2.cancel("player1");
        },
        onKeyPress: this.handleKeyDown
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-window-close"
      })))) : /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].emptyBox
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "user",
        type: "text",
        placeholder: "github user",
        className: _battle["default"].emptyIn,
        onChange: this.handleChange,
        onBlur: this.onBlur1,
        onKeyDown: this.onKeyDown
      }), /*#__PURE__*/_react["default"].createElement("button", {
        disabled: disabled,
        type: "button",
        className: disabled === true ? _battle["default"].submitBtn : _battle["default"].dis,
        onClick: this.onClick
      }, "submit"))), /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].play
      }, /*#__PURE__*/_react["default"].createElement("h3", null, "Player 2"), player2 ? /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].selected
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].info
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].imgbox
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "https://github.com/".concat(player2, ".png?size=250"),
        alt: "",
        className: _battle["default"].playerimg
      })), /*#__PURE__*/_react["default"].createElement("span", null, player2)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
        role: "button",
        tabIndex: "0",
        className: "fa-stack fa-lg",
        onKeyDown: handleKeyDown,
        onClick: function onClick() {
          return _this2.cancel("player2");
        }
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-window-close"
      })))) : /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].emptyBox
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: "github user",
        className: _battle["default"].emptyIn,
        onChange: this.handleChange2,
        onBlur: this.onBlur2,
        onKeyDown: this.onKeyDown2
      }), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        disabled: disabled2,
        className: disabled2 === true ? _battle["default"].submitBtn : _battle["default"].dis,
        onClick: this.onClick2
      }, "submit")))), /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].start_battle
      }, player1 && player2 ? /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].startBattle
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
        exact: true,
        to: {
          search: "player1=".concat(player1, "&player2=").concat(player2)
        },
        onClick: function onClick() {
          return startBattle(player1, player2);
        },
        className: _battle["default"].startBattle1 // style={{paddingTop:'30px'}}

      }, "\u63D0\u4EA4")) : "")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Player;
}(_react["default"].Component);

var _default = Player;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Player, "Player", "D:\\pric\\zgit\\gitrain\\src\\components\\battle\\Players.js");
  reactHotLoader.register(_default, "default", "D:\\pric\\zgit\\gitrain\\src\\components\\battle\\Players.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();