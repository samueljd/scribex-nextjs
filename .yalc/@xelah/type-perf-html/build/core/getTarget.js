"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTarget = void 0;

var getTarget = function getTarget(_ref) {
  var _div$firstChild;

  var content = _ref.content;
  var div = document.createElement("div");
  div.innerHTML = content;

  var _ref2 = ((_div$firstChild = div.firstChild) === null || _div$firstChild === void 0 ? void 0 : _div$firstChild.dataset) || {},
      target = _ref2.target;

  return target;
};

exports.getTarget = getTarget;