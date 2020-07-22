"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _battle = _interopRequireDefault(require("@/pages/Battle/battle.less"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var Result = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Result, _React$Component);

  var _super = _createSuper(Result);

  function Result(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Result);
    _this = _super.call(this, props);
    _this.state = {
      error: "",
      player1: {
        loading: true
      },
      player2: {
        loading: true
      }
    };
    return _this;
  }

  (0, _createClass2["default"])(Result, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _this2 = this;

        var _this$props, player1, player2;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, player1 = _this$props.player1, player2 = _this$props.player2;
                console.log("这里的值", player1, player2);
                _context.next = 4;
                return _axios["default"].get("https://api.github.com/users/".concat(player1)).then(function (res) {
                  _this2.setState({
                    player1: _objectSpread(_objectSpread({}, res.data), {}, {
                      loading: false
                    })
                  });
                })["catch"](function (err) {
                  console.log("这里的错误", err);

                  _this2.setState({
                    error: err.response.statusText
                  });
                });

              case 4:
                _context.next = 6;
                return _axios["default"].get("https://api.github.com/users/".concat(player2)).then(function (res) {
                  _this2.setState({
                    player2: _objectSpread(_objectSpread({}, res.data), {}, {
                      loading: false
                    })
                  });
                })["catch"](function (err) {
                  console.log("这里的错误", err);

                  _this2.setState({
                    error: err.response.statusText
                  });
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var reset = this.props.reset;
      var _this$state = this.state,
          player1 = _this$state.player1,
          player2 = _this$state.player2,
          error = _this$state.error;

      if (player1.loading || player2.loading) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: _battle["default"].tac
        }, error || "loading...");
      } // console.log("render时候",player1,player2)


      if (player1.public_repos > player2.public_repos) {
        player1.role = "winner";
        player2.role = "loser";
      } else if (player1.public_repos < player2.public_repos) {
        player1.role = "loser";
        player2.role = "winner";
      } else if (player1.public_repos === player2.public_repos) {
        player1.role = "drew";
        player2.role = "drew";
      }

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].result
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].card
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: _battle["default"].tac
      }, player1.role), /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].imgDiv
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "https://github.com/".concat(player1.name, ".png?size=200"),
        alt: player1.name
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
        className: _battle["default"].tac
      }, "Scores: ", player1.public_repos), /*#__PURE__*/_react["default"].createElement("h2", {
        className: _battle["default"].proname
      }, this.props.player1))), /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].card
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: _battle["default"].tac
      }, player2.role), /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].imgDiv
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "https://github.com/".concat(player2.name, ".png?size=200"),
        alt: player2.name
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
        className: _battle["default"].tac
      }, "Scores: ", player2.public_repos), /*#__PURE__*/_react["default"].createElement("h2", {
        className: _battle["default"].proname
      }, this.props.player2)))), /*#__PURE__*/_react["default"].createElement("div", {
        className: _battle["default"].resetBtn
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: reset
      }, "reset")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Result;
}(_react["default"].Component);

var _default = Result;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Result, "Result", "D:\\pric\\zgit\\gitrain\\src\\pages\\Battle\\Result.js");
  reactHotLoader.register(_default, "default", "D:\\pric\\zgit\\gitrain\\src\\pages\\Battle\\Result.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();