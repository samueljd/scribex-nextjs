"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HtmlSequenceEditor;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@xelah/core");

var _blockParser = _interopRequireDefault(require("../core/blockParser"));

var _sectionParser = _interopRequireDefault(require("../core/sectionParser"));

var _Document = _interopRequireDefault(require("./Document"));

var _SectionHeading = _interopRequireDefault(require("./SectionHeading"));

var _excluded = ["htmlSequence", "onHtmlSequence", "options", "components", "parsers", "joiners", "decorators", "handlers", "sectionIndex", "verbose"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DEFAULT_PROPS = {
  decorators: {
    chapter: [/\\c\s+(\d*)/g, '<span class="chapter">$1</span>'],
    verses: [/\\v\s+(\d*)/g, '<span class="verses">$1</span>']
  },
  joiners: {
    section: '',
    block: ''
  }
};

function HtmlSequenceEditor(_ref) {
  var htmlSequence = _ref.htmlSequence,
      _onHtmlSequence = _ref.onHtmlSequence,
      _options = _ref.options,
      _components = _ref.components,
      _parsers = _ref.parsers,
      _joiners = _ref.joiners,
      _decorators = _ref.decorators,
      handlers = _ref.handlers,
      sectionIndex = _ref.sectionIndex,
      _ref$verbose = _ref.verbose,
      verbose = _ref$verbose === void 0 ? false : _ref$verbose,
      props = _objectWithoutProperties(_ref, _excluded);

  var decorators = _objectSpread(_objectSpread({}, DEFAULT_PROPS.decorators), _decorators);

  var joiners = _objectSpread(_objectSpread({}, DEFAULT_PROPS.joiners), _joiners);

  (0, _react.useEffect)(function () {
    if (verbose) console.log('PerfEditor First Render');
    return function () {
      if (verbose) console.log('PerfEditor Unmount');
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var parser = new DOMParser();
  var doc = parser.parseFromString(htmlSequence, 'text/html'); // parse the full htmlSequence by nodes for rendering

  var nodes = {
    sequence: function sequence() {
      return doc.getElementsByTagName('section')[0];
    }
  };

  var options = _objectSpread({
    returnHtml: true
  }, _options);

  var parsers = _objectSpread({
    section: (0, _sectionParser.default)({
      nodes: nodes
    }),
    block: _blockParser.default
  }, _parsers);

  var components = _objectSpread({
    document: function document(props) {
      return (0, _Document.default)(_objectSpread({
        nodes: nodes,
        verbose: verbose
      }, props));
    },
    sectionHeading: _SectionHeading.default
  }, _components);

  var onHtmlSequence = function onHtmlSequence(_htmlSequence) {
    nodes.sequence().innerHTML = _htmlSequence;

    _onHtmlSequence(nodes.sequence().outerHTML);
  };

  var _props = _objectSpread({
    content: nodes.sequence().innerHTML,
    onContent: onHtmlSequence,
    options: options,
    components: components,
    parsers: parsers,
    joiners: joiners,
    decorators: decorators,
    handlers: handlers,
    sectionIndex: sectionIndex,
    verbose: verbose
  }, props);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "perf",
    key: "1"
  }, /*#__PURE__*/_react.default.createElement(_core.EditableContent, _extends({
    key: "1"
  }, _props)));
}

;
HtmlSequenceEditor.propTypes = {
  /** Text to be edited whether file, section or block */
  htmlSequence: _propTypes.default.string.isRequired,

  /** Function triggered on edit */
  onHtmlSequence: _propTypes.default.func,

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
HtmlSequenceEditor.defaultProps = DEFAULT_PROPS;