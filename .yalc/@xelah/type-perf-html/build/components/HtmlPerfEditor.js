"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HtmlPerfEditor;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useDeepCompare = require("use-deep-compare");

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _nestPerf = require("../core/nestPerf");

var _getType = require("../core/getType");

var _SectionHeading = _interopRequireDefault(require("./SectionHeading"));

var _RecursiveBlock = _interopRequireDefault(require("./RecursiveBlock"));

var _HtmlSequenceEditor = _interopRequireDefault(require("./HtmlSequenceEditor"));

var _excluded = ["htmlPerf", "onHtmlPerf", "sequenceIds", "addSequenceId", "options", "components", "handlers", "setFootNote"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function HtmlPerfEditor(_ref) {
  var htmlPerf = _ref.htmlPerf,
      onHtmlPerf = _ref.onHtmlPerf,
      sequenceIds = _ref.sequenceIds,
      addSequenceId = _ref.addSequenceId,
      options = _ref.options,
      _components = _ref.components,
      handlers = _ref.handlers,
      setFootNote = _ref.setFootNote,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      sectionIndices = _useState2[0],
      setSectionIndices = _useState2[1];

  var sequenceId = sequenceIds.at(-1);

  var components = _objectSpread({
    sectionHeading: _SectionHeading.default
  }, _components);

  var htmlSequence = (0, _useDeepCompare.useDeepCompareMemo)(function () {
    return (0, _nestPerf.embedPreviewTextInGrafts)({
      htmlPerf: htmlPerf,
      sequenceId: sequenceId
    });
  }, [htmlPerf, sequenceId]);
  var sequenceType = (0, _react.useMemo)(function () {
    return (0, _getType.getTypeFromSequenceHtml)({
      htmlSequence: htmlSequence
    });
  }, [htmlSequence]);
  var sectionIndex = (0, _useDeepCompare.useDeepCompareMemo)(function () {
    return sectionIndices[sequenceId] || 0;
  }, [sectionIndices, sequenceId]); // eslint-disable-next-line no-unused-vars

  var onSectionClick = (0, _useDeepCompare.useDeepCompareCallback)(function (_ref2) {
    var _content = _ref2.content,
        index = _ref2.index;

    var _sectionIndices = _objectSpread({}, sectionIndices);

    _sectionIndices[sequenceId] = index;
    setSectionIndices(_sectionIndices);
  }, [setSectionIndices, sectionIndices]); // eslint-disable-next-line no-unused-vars

  var onBlockClick = (0, _react.useCallback)(function (_ref3) {
    var _element$dataset;

    var _content = _ref3.content,
        element = _ref3.element;

    var _sequenceId = element === null || element === void 0 ? void 0 : (_element$dataset = element.dataset) === null || _element$dataset === void 0 ? void 0 : _element$dataset.target;

    _sequenceId ? setFootNote(_sequenceId) : setFootNote(null);
  }, [setFootNote]);
  var onHtmlSequence = (0, _useDeepCompare.useDeepCompareCallback)(function (_htmlSequence) {
    var sequenceChanged = htmlSequence !== _htmlSequence;

    if (sequenceChanged) {
      var _htmlPerf = structuredClone(htmlPerf);

      _htmlPerf.sequencesHtml[sequenceId] = _htmlSequence;
      var perfChanged = !(0, _lodash.default)(htmlPerf, _htmlPerf);

      if (perfChanged) {
        var htmlPerfNoPreviewText = (0, _nestPerf.removePreviewTextInGrafts)({
          htmlPerf: _htmlPerf,
          sequenceId: sequenceId
        });
        onHtmlPerf(htmlPerfNoPreviewText, {
          sequenceId: sequenceId,
          htmlSequence: _htmlSequence
        });
      }

      ;
    }

    ;
  }, [htmlPerf, onHtmlPerf, htmlSequence, sequenceId]);

  var _props = _objectSpread({
    htmlSequence: htmlSequence,
    onHtmlSequence: onHtmlSequence,
    components: _objectSpread(_objectSpread({}, components), {}, {
      sectionHeading: function sectionHeading(__props) {
        return components.sectionHeading(_objectSpread({
          type: sequenceType
        }, __props));
      },
      block: function block(__props) {
        return (0, _RecursiveBlock.default)(_objectSpread({
          htmlPerf: htmlPerf,
          onHtmlPerf: onHtmlPerf,
          sequenceIds: sequenceIds,
          addSequenceId: addSequenceId,
          setFootNote: setFootNote
        }, __props));
      }
    }),
    options: options,
    handlers: _objectSpread(_objectSpread({}, handlers), {}, {
      onSectionClick: onSectionClick,
      onBlockClick: onBlockClick
    }),
    decorators: {},
    sectionIndex: sectionIndex
  }, props);

  return /*#__PURE__*/_react.default.createElement(_HtmlSequenceEditor.default, _props);
}

;
HtmlPerfEditor.propTypes = {
  /** Text to be edited whether file, section or block */
  htmlPerf: _propTypes.default.object.isRequired,

  /** Function triggered on edit, returns (htmlPerf, { sequenceId, htmlSequence }) */
  onHtmlPerf: _propTypes.default.func,

  /** Options for the editor */
  options: _propTypes.default.shape({
    /** Parse content by sections using sectionParser */
    sectionable: _propTypes.default.bool,

    /** Parse content by blocks using blockParser */
    blockable: _propTypes.default.bool,

    /** Editable? */
    editable: _propTypes.default.bool,

    /** Preview? */
    preview: _propTypes.default.bool
  }),

  /** Components to wrap all sections of the document */
  components: _propTypes.default.shape({
    /** Component to wrap all sections of the document */
    document: _propTypes.default.func,

    /** Component to be the section wrapper */
    section: _propTypes.default.func,

    /** Component to wrap the first line of a section */
    sectionHeading: _propTypes.default.func,

    /** Component to be the section body */
    sectionBody: _propTypes.default.func,

    /** Component to be the block editor */
    block: _propTypes.default.func
  }),

  /** Functions to parse the content into sections and blocks */
  parsers: _propTypes.default.shape({
    /** Function to parse the content into sections */
    section: _propTypes.default.func,

    /** Function to parse the content into blocks */
    block: _propTypes.default.func
  }),

  /** Strings to join the blocks to content */
  joiners: _propTypes.default.shape({
    /** String to join the sections to content */
    section: _propTypes.default.string,

    /** String to join the blocks to content */
    block: _propTypes.default.string
  }),

  /** Object of replacers for html/css decoration of content, done at block level */
  decorators: _propTypes.default.object,

  /** Callback handlers such as block and section click */
  handlers: _propTypes.default.shape({
    /** Callback triggered on Section Heading click, provides section content and index. */
    onSectionClick: _propTypes.default.func,

    /** Callback triggered on Block click, provides block content and index. */
    onBlockClick: _propTypes.default.func
  }),

  /** Index of section to be show, for app to manage state. -1 to show all. */
  sectionIndex: _propTypes.default.number,

  /** Flag to enable logging  */
  verbose: _propTypes.default.bool
};
HtmlPerfEditor.defaultProps = {
  sequenceIds: []
};