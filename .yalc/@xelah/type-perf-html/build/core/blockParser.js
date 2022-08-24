"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blockParser;

function blockParser(content) {
  var div = document.createElement("div");
  div.innerHTML = content;
  var blocks = Array.from(div.children, function (block) {
    return block.outerHTML;
  });
  return blocks;
}