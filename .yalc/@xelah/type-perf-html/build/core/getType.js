"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTypeFromSequenceHtml = exports.getTypeFromPerf = void 0;

var getTypeFromPerf = function getTypeFromPerf(_ref) {
  var perfHtml = _ref.perfHtml,
      sequenceId = _ref.sequenceId;
  var htmlSequence = perfHtml === null || perfHtml === void 0 ? void 0 : perfHtml.sequencesHtml[sequenceId];
  var type = getTypeFromSequenceHtml({
    htmlSequence: htmlSequence
  });

  if (type === 'main') {
    var _ref2 = (perfHtml === null || perfHtml === void 0 ? void 0 : perfHtml.headers) || {},
        h = _ref2.h,
        toc = _ref2.toc,
        toc2 = _ref2.toc2;

    type = toc || toc2 || h;
  }

  ;
  return type;
};

exports.getTypeFromPerf = getTypeFromPerf;

var getTypeFromSequenceHtml = function getTypeFromSequenceHtml(_ref3) {
  var htmlSequence = _ref3.htmlSequence;
  var type = htmlSequence === null || htmlSequence === void 0 ? void 0 : htmlSequence.match(/data-type="(\w+)"/);
  type && (type = type[1]);
  return type;
};

exports.getTypeFromSequenceHtml = getTypeFromSequenceHtml;