"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _reactInfiniteScroller = _interopRequireDefault(require("react-infinite-scroller"));

var _LazyLd = _interopRequireDefault(require("@/components/popular/LazyLd"));

var _Loading = _interopRequireDefault(require("@/components/popular/Loading"));

require("font-awesome/css/font-awesome.min.css");

require("font-awesome/less/font-awesome.less");

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

// class Loading extends React.Component {
//     render() {
//       return <div className="load">
//         loading...
//         </div>;
//     }
//   }
var Content = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Content, _React$Component);

  var _super = _createSuper(Content);

  function Content(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Content);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "search", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var clear,
          page,
          q,
          url,
          res,
          _args = arguments;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              clear = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
              // 另一种获取地址方法
              // function GetQueryString(name) {
              //   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
              //   var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
              //   var context = "";
              //   if (r != null)
              //     context = r[2];
              //   reg = null;
              //   r = null;
              //   return context === null || context === "" || context === "undefined" ? "" : context;
              // }
              // console.log(GetQueryString("q"));
              page = clear ? 1 : _this.state.page;
              q = window.location.search.split("=").slice(1).toString();
              console.log(q);
              url = "https://api.github.com/search/repositories?q=stars:>1+language:".concat(q, "&sort=stars&order=desc&type=Repositories&page=").concat(page);
              console.log("url", url);

              _this.setState({
                loading: true
              }); //
              //   try {
              //     const res = await axios.get(url)
              //     console.log('res', res.data)
              //     this.setState({
              //       items: res.data.items
              //     })
              //   } catch (e) {
              //     console.log('error', e)
              //   }
              //   this.setState({ loading: false });
              // }


              if (clear) {
                _this.setState({
                  items: []
                });
              }

              _context.prev = 8;
              _context.next = 11;
              return _axios["default"].get(url);

            case 11:
              res = _context.sent;
              console.log("res", res.data);

              _this.setState(function (state) {
                return {
                  items: clear ? res.data.items : [].concat((0, _toConsumableArray2["default"])(state.items), (0, _toConsumableArray2["default"])(res.data.items)),
                  page: clear ? 1 : state.page + 1
                };
              });

              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](8);
              console.log("error", _context.t0);

              _this.setState({
                end: true
              });

            case 20:
              _this.setState({
                loading: false
              });

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 16]]);
    })));
    _this.state = {
      loading: false,
      end: false,
      page: 1,
      items: []
    };
    return _this;
  }

  (0, _createClass2["default"])(Content, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.search();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.query !== prevProps.query) {
        this.search(true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          loading = _this$state.loading,
          end = _this$state.end;
      var cards = this.state.items.map(function (item, key) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "card col-lg-3 col-md-3 col-sm-6 col-6"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "it",
          key: item.id
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "num"
        }, "#", key + 1), /*#__PURE__*/_react["default"].createElement("div", {
          className: "img"
        }, /*#__PURE__*/_react["default"].createElement(_LazyLd["default"], {
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
        }), /*#__PURE__*/_react["default"].createElement("span", null, item.stargazers_count, " stars")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-code-fork",
          id: "c"
        }), /*#__PURE__*/_react["default"].createElement("span", null, item.forks_count, " forks")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-exclamation-triangle",
          id: "t"
        }), /*#__PURE__*/_react["default"].createElement("span", null, item.open_issues_count, " open_issues")))));
      });
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactInfiniteScroller["default"], {
        initialLoad: false,
        loadMore: function loadMore() {
          return _this2.search(false);
        },
        hasMore: !loading || end,
        loader: null
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "content"
      }, cards), loading && /*#__PURE__*/_react["default"].createElement(_Loading["default"], null)));
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

  reactHotLoader.register(Content, "Content", "D:\\pric\\zgit\\gitrain\\src\\components\\popular\\Content.js");
  reactHotLoader.register(_default, "default", "D:\\pric\\zgit\\gitrain\\src\\components\\popular\\Content.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();