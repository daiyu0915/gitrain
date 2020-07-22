"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _ResultCard = _interopRequireDefault(require("@/components/ResultCard"));

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

// import Loading from "@/components/Loading";
var styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  action: {
    textAlign: "center",
    margin: "16px auto"
  }
};

var Result = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Result, _React$Component);

  var _super = _createSuper(Result);

  function Result(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Result);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "init", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(type, name) {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios["default"].get("https://api.github.com/users/".concat(name));

              case 2:
                res = _context.sent;

                _this.setState((0, _defineProperty2["default"])({}, type, _objectSpread(_objectSpread({}, res.data), {}, {
                  score: res.data.public_repos,
                  loading: false
                })));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    _this.state = {
      player1: {
        name: props.player1,
        score: 0,
        loading: true
      },
      player2: {
        name: props.player2,
        score: 0,
        loading: true
      }
    };
    return _this;
  }

  (0, _createClass2["default"])(Result, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _this$props, player1, player2;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props = this.props, player1 = _this$props.player1, player2 = _this$props.player2;
                this.init("player1", player1);
                this.init("player2", player2);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    //   reset = () => {
    //     this.setState({
    //         player1:'',
    //         player2:''
    //     })
    //     window.location.hash='#/battle'
    // };
    value: function render() {
      var onReset = this.props.onReset;
      var _this$state = this.state,
          player1 = _this$state.player1,
          player2 = _this$state.player2; // if (player1.loading || player2.loading) {
      //   return <Loading />;
      // }

      if (player1.score > player2.score) {
        player1.role = "Winner";
        player2.role = "Loser";
      } else {
        player1.role = "Loser";
        player2.role = "Winner";
      }

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.container
      }, /*#__PURE__*/_react["default"].createElement(_ResultCard["default"], {
        player: player1,
        type: player1.role
      }), /*#__PURE__*/_react["default"].createElement(_ResultCard["default"], {
        player: player2,
        type: player2.role
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.action
      }, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: onReset,
        type: "button"
      }, "RESET")));
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

  reactHotLoader.register(styles, "styles", "D:\\pric\\zgit\\gitrain\\src\\components\\battle\\Result.js");
  reactHotLoader.register(Result, "Result", "D:\\pric\\zgit\\gitrain\\src\\components\\battle\\Result.js");
  reactHotLoader.register(_default, "default", "D:\\pric\\zgit\\gitrain\\src\\components\\battle\\Result.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();