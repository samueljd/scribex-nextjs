"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RecursiveBlock;

var _react = _interopRequireWildcard(require("react"));

var _getTarget = require("../core/getTarget");

var _HtmlPerfEditor = _interopRequireDefault(require("./HtmlPerfEditor"));

var _excluded = ["htmlPerf", "onHtmlPerf", "sequenceIds", "addSequenceId", "options", "content", "style", "contentEditable", "index", "verbose", "setFootNote"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RecursiveBlock(_ref) {
  var htmlPerf = _ref.htmlPerf,
      onHtmlPerf = _ref.onHtmlPerf,
      sequenceIds = _ref.sequenceIds,
      addSequenceId = _ref.addSequenceId,
      options = _ref.options,
      content = _ref.content,
      style = _ref.style,
      contentEditable = _ref.contentEditable,
      index = _ref.index,
      verbose = _ref.verbose,
      setFootNote = _ref.setFootNote,
      props = _objectWithoutProperties(_ref, _excluded);

  (0, _react.useEffect)(function () {
    if (verbose) console.log("Block: Mount/First Render", index);
    return function () {
      if (verbose) console.log("Block: UnMount/Destroyed", index);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var component;
  var editable = !!content.match(/data-type="paragraph"/);

  if (editable) {
    component = /*#__PURE__*/_react.default.createElement("div", _extends({
      contentEditable: contentEditable
    }, props));
  }

  if (!editable) {
    var sequenceId = (0, _getTarget.getTarget)({
      content: content
    });

    if (sequenceId && !options.preview) {
      var _props = {
        sequenceIds: [].concat(_toConsumableArray(sequenceIds), [sequenceId]),
        addSequenceId: addSequenceId,
        htmlPerf: htmlPerf,
        onHtmlPerf: onHtmlPerf
      };
      component = /*#__PURE__*/_react.default.createElement(_HtmlPerfEditor.default, _props);
    }

    component || (component = /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
      contentEditable: false
    })));
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, component);
}