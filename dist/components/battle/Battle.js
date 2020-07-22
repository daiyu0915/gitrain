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

var _Instructions = _interopRequireDefault(require("@/components/battle/Instructions"));

var _Players = _interopRequireDefault(require("@/components/battle/Players"));

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

var Battle = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Battle, _React$Component);

  var _super = _createSuper(Battle);

  function Battle() {
    (0, _classCallCheck2["default"])(this, Battle);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Battle, [{
    key: "render",
    value: function render() {
      var startBattle = this.props.startBattle;
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "battle"
      }, /*#__PURE__*/_react["default"].createElement(_Instructions["default"], null), /*#__PURE__*/_react["default"].createElement(_Players["default"], {
        startBattle: startBattle
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
  return Battle;
}(_react["default"].Component);

var _default = Battle;
var _default2 = _default; // import React from 'react';
// import Player from "@/components/battle/Players"
// import style from "@/styles/battle.less"
// export default class Battle extends React.Component {
//   render() {
//     const { startBattle } = this.props;
//     return (
//       <div className={style.battle}>
//         <div className={style.instrutions}>
//           <h2>Instrutions</h2>
//           <ul>
//             <li>
//               <h3>Enter Two Users</h3>
//               <div><i className="fa fa-user icons" style={{ color: "#e06c75" }} /></div>
//             </li>
//             <li>
//               <h3>Battle</h3>
//               <div><i className="fa fa-hand-o-right icons" style={{ color: "#ec981d" }} /></div>
//             </li>
//             <li>
//               <h3>See The Winner</h3>
//               <div><i className="fa fa-trophy icons" style={{ color: "#e06c75" }} /></div>
//             </li>
//           </ul>
//         </div>
//         <Player startBattle={startBattle} />
//       </div>
//     );
//   }
// }

exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Battle, "Battle", "D:\\pric\\zgit\\gitrain\\src\\components\\battle\\Battle.js");
  reactHotLoader.register(_default, "default", "D:\\pric\\zgit\\gitrain\\src\\components\\battle\\Battle.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();