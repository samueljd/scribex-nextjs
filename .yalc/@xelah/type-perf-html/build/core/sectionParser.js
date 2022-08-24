"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sectionParser;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function sectionParser(_ref) {
  var nodes = _ref.nodes;
  return function () {
    var sections = [];
    var queue = [];
    Array.from(nodes.sequence().children, function (block) {
      var type = block.dataset.type;
      var isBlock = type !== "graft";

      if (isBlock) {
        var _block$firstChild, _block$firstChild$dat;

        var isChapter = ((_block$firstChild = block.firstChild) === null || _block$firstChild === void 0 ? void 0 : (_block$firstChild$dat = _block$firstChild.dataset) === null || _block$firstChild$dat === void 0 ? void 0 : _block$firstChild$dat.subtype) === "chapter";

        if (isChapter) {
          // remove last grafts preceding chapter
          var checkLastInQueue = true;
          var headerQueue = [];

          while (checkLastInQueue) {
            if (queue.length > 0) {
              var last = queue.pop();
              var isGraft = last.dataset.type === "graft";

              var isTitle = _toConsumableArray(last.classList).includes("title");

              var isIntro = _toConsumableArray(last.classList).includes("introduction");

              if (isGraft && !isTitle && !isIntro) {
                headerQueue = [].concat(_toConsumableArray(headerQueue), [last]);
              } else {
                queue = [].concat(_toConsumableArray(queue), [last]);
                checkLastInQueue = false;
              }
            } else {
              checkLastInQueue = false;
            }
          }

          ;
          sections = [].concat(_toConsumableArray(sections), [queue]);
          queue = _toConsumableArray(headerQueue.reverse());
        }

        ;
      }

      ;
      queue = [].concat(_toConsumableArray(queue), [block]);
      return true;
    });
    sections = [].concat(_toConsumableArray(sections), [queue]);
    queue = [];
    return sections.map(function (section) {
      return section.map(function (block) {
        return block.outerHTML;
      }).join('\n');
    });
  };
}

;