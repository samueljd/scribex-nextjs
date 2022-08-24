"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePreviewTextInGrafts = exports.embedSequencesInMainGrafts = exports.embedSequencesInGrafts = exports.embedPreviewTextInGrafts = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var embedPreviewTextInGrafts = function embedPreviewTextInGrafts(_ref) {
  var htmlPerf = _ref.htmlPerf,
      sequenceId = _ref.sequenceId;
  var parser = new DOMParser();
  var html = htmlPerf.sequencesHtml[sequenceId];
  var dom = parser.parseFromString(html, "text/html");

  var grafts = _toConsumableArray(dom.getElementsByClassName("graft"));

  grafts.forEach(function (graft) {
    var target = graft.dataset.target;
    var targetHtml = htmlPerf.sequencesHtml[target];
    var div = document.createElement("div");
    div.innerHTML = targetHtml;
    var previewText = div.textContent.trim();
    graft.dataset.previewtext = previewText;
  });
  var _html = dom.getElementsByTagName('section')[0].outerHTML;
  return _html;
};

exports.embedPreviewTextInGrafts = embedPreviewTextInGrafts;

var removePreviewTextInGrafts = function removePreviewTextInGrafts(_ref2) {
  var htmlPerf = _ref2.htmlPerf,
      sequenceId = _ref2.sequenceId;
  var parser = new DOMParser();
  var html = htmlPerf.sequencesHtml[sequenceId];
  var dom = parser.parseFromString(html, "text/html");

  var grafts = _toConsumableArray(dom.getElementsByClassName("graft"));

  grafts.forEach(function (graft) {
    delete graft.dataset.previewtext;
  });
  var _htmlSequence = dom.getElementsByTagName('section')[0].outerHTML;

  var _htmlPerf = structuredClone(htmlPerf);

  _htmlPerf.sequencesHtml[sequenceId] = _htmlSequence;
  return _htmlPerf;
};

exports.removePreviewTextInGrafts = removePreviewTextInGrafts;

var embedSequencesInGrafts = function embedSequencesInGrafts(_ref3) {
  var perfHtml = _ref3.perfHtml,
      sequenceId = _ref3.sequenceId;
  var parser = new DOMParser();
  var html = perfHtml.sequencesHtml[sequenceId];
  var dom = parser.parseFromString(html, "text/html");

  var grafts = _toConsumableArray(dom.getElementsByClassName("graft"));

  grafts.forEach(function (graft) {
    var target = graft.dataset.target;
    var embededSequencesHtml = embedSequencesInGrafts({
      perfHtml: perfHtml,
      sequenceId: target
    });
    graft.innerHTML = embededSequencesHtml;
  });
  var _html = dom.getElementsByTagName('section')[0].outerHTML;
  return _html;
};

exports.embedSequencesInGrafts = embedSequencesInGrafts;

var embedSequencesInMainGrafts = function embedSequencesInMainGrafts(_ref4) {
  var perfHtml = _ref4.perfHtml;
  var mainSequenceId = perfHtml.mainSequenceId;
  var embeddedSequencesInMainGrafts = embedSequencesInGrafts({
    perfHtml: perfHtml,
    sequenceId: mainSequenceId
  });
  console.log("embedSequencesInMainGrafts", mainSequenceId, embeddedSequencesInMainGrafts);
  return embeddedSequencesInMainGrafts;
};

exports.embedSequencesInMainGrafts = embedSequencesInMainGrafts;