"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

require("./components/popular/git.css");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var Loading = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Loading, _React$Component);

  var _super = _createSuper(Loading);

  function Loading() {
    (0, _classCallCheck2["default"])(this, Loading);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Loading, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "load"
      }, "loading...");
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Loading;
}(_react["default"].Component);

var LazyLd = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2["default"])(LazyLd, _React$Component2);

  var _super2 = _createSuper(LazyLd);

  function LazyLd() {
    var _this;

    (0, _classCallCheck2["default"])(this, LazyLd);
    _this = _super2.call(this);
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
          'width': this.props.width + 'px',
          'height': this.props.height + 'px'
        },
        src: this.props.src,
        alt: "no"
      }) : /*#__PURE__*/_react["default"].createElement("img", {
        style: {
          'width': this.props.width + 'px',
          'height': this.props.height + 'px'
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

var Content = /*#__PURE__*/function (_React$Component3) {
  (0, _inherits2["default"])(Content, _React$Component3);

  var _super3 = _createSuper(Content);

  function Content(props) {
    var _this3;

    (0, _classCallCheck2["default"])(this, Content);
    _this3 = _super3.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "search", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var GetQueryString, q, url, res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              GetQueryString = function _GetQueryString(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配

                var context = "";
                if (r != null) context = r[2];
                reg = null;
                r = null;
                return context === null || context === "" || context === "undefined" ? "" : context;
              };

              console.log(GetQueryString("q"));
              q = GetQueryString("q");
              url = "https://api.github.com/search/repositories?q=stars:>1+language:".concat(q, "&sort=stars&order=desc&type=Repositories");
              console.log('url', url);

              _this3.setState({
                loading: true
              });

              _context.prev = 6;
              _context.next = 9;
              return _axios["default"].get(url);

            case 9:
              res = _context.sent;
              console.log('res', res.data);

              _this3.setState({
                items: res.data.items
              });

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](6);
              console.log('error', _context.t0);

            case 17:
              _this3.setState({
                loading: false
              });

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 14]]);
    })));
    _this3.state = {
      loading: false,
      items: []
    };
    return _this3;
  }

  (0, _createClass2["default"])(Content, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.search();
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      var cards = this.state.items.slice(0, 10).map(function (item, key) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "card"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "it",
          key: item.id
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "num"
        }, "#", key + 1), /*#__PURE__*/_react["default"].createElement("div", {
          className: "img"
        }, /*#__PURE__*/_react["default"].createElement(LazyLd, {
          width: 150,
          height: 150,
          src: item.owner.avatar_url
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "name"
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: item.html_url
        }, item.name)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "desc"
        }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-user",
          id: "u"
        }), /*#__PURE__*/_react["default"].createElement("a", {
          href: item.owner.html_url
        }, item.name)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-star",
          id: "s"
        }), /*#__PURE__*/_react["default"].createElement("span", null, item.stargazers_count, "  stars")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-code-fork",
          id: "c"
        }), /*#__PURE__*/_react["default"].createElement("span", null, item.forks_count, " forks")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-exclamation-triangle",
          id: "t"
        }), /*#__PURE__*/_react["default"].createElement("span", null, item.open_issues_count, "  open_issues")))));
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "content"
      }, loading ? /*#__PURE__*/_react["default"].createElement(Loading, null) : cards);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Content;
}(_react["default"].Component);

var _default = Content;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, "Loading", "D:\\pric\\zgith\\src\\components\\popular\\Content.js");
  reactHotLoader.register(LazyLd, "LazyLd", "D:\\pric\\zgith\\src\\components\\popular\\Content.js");
  reactHotLoader.register(Content, "Content", "D:\\pric\\zgith\\src\\components\\popular\\Content.js");
  reactHotLoader.register(_default, "default", "D:\\pric\\zgith\\src\\components\\popular\\Content.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();