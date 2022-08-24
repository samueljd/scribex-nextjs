"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useEditorStateReducer;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function useEditorStateReducer(_ref) {
  var props = _extends({}, _ref);

  var initialState = _objectSpread({
    sequenceIds: [],
    sectionable: true,
    blockable: true,
    editable: true,
    preview: false,
    verbose: false
  }, props);

  var _useState = (0, _react.useState)(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var setSectionable = (0, _react.useCallback)(function (sectionable) {
    setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        sectionable: sectionable
      });
    });
  }, []);
  var setBlockable = (0, _react.useCallback)(function (blockable) {
    setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        blockable: blockable
      });
    });
  }, []);
  var setEditable = (0, _react.useCallback)(function (editable) {
    setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        editable: editable
      });
    });
  }, []);
  var setPreview = (0, _react.useCallback)(function (preview) {
    setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        preview: preview
      });
    });
  }, []);
  var setToggles = (0, _react.useCallback)(function (toggles) {
    setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), toggles);
    });
  }, []);
  var setSequenceIds = (0, _react.useCallback)(function (sequenceIds) {
    setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        sequenceIds: sequenceIds
      });
    });
  }, []);
  var addSequenceId = (0, _react.useCallback)(function (_sequenceId) {
    setSequenceIds([].concat(_toConsumableArray(state.sequenceIds), [_sequenceId]));
  }, [state.sequenceIds, setSequenceIds]);
  var actions = {
    setSectionable: setSectionable,
    setBlockable: setBlockable,
    setEditable: setEditable,
    setPreview: setPreview,
    setToggles: setToggles,
    setSequenceIds: setSequenceIds,
    addSequenceId: addSequenceId
  };
  return {
    state: state,
    actions: actions
  };
}

;
useEditorStateReducer.propTypes = {
  sequenceIds: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  sectionable: _propTypes.default.bool,
  blockable: _propTypes.default.bool,
  editable: _propTypes.default.bool,
  preview: _propTypes.default.bool,
  verbose: _propTypes.default.bool
};