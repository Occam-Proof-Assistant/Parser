"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  margin-bottom: 0;\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RuleNameInput = /*#__PURE__*/function (_Input) {
  _inherits(RuleNameInput, _Input);

  function RuleNameInput() {
    _classCallCheck(this, RuleNameInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameInput).apply(this, arguments));
  }

  _createClass(RuleNameInput, [{
    key: "getRuleName",
    value: function getRuleName() {
      var value = this.getValue(),
          ruleName = value; ///

      return ruleName;
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getRuleName = this.getRuleName.bind(this);
      return {
        getRuleName: getRuleName,
        setRuleName: setRuleName
      };
    }
  }]);

  return RuleNameInput;
}(_easy.Input);

_defineProperty(RuleNameInput, "tagName", "textarea");

_defineProperty(RuleNameInput, "defaultProperties", {
  className: "ruleName",
  spellCheck: "false"
});

var _default = (0, _easyWithStyle["default"])(RuleNameInput)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGVOYW1lSW5wdXQiLCJ2YWx1ZSIsImdldFZhbHVlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImJpbmQiLCJzZXRSdWxlTmFtZSIsIklucHV0IiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGE7Ozs7Ozs7Ozs7O2tDQUNVO0FBQ1osVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFFBQVEsR0FBR0YsS0FEakIsQ0FEWSxDQUVZOztBQUV4QixhQUFPRSxRQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLFdBQVcsR0FBRyxLQUFLQSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFwQjtBQUVBLGFBQVE7QUFDTkQsUUFBQUEsV0FBVyxFQUFYQSxXQURNO0FBRU5FLFFBQUFBLFdBQVcsRUFBWEE7QUFGTSxPQUFSO0FBSUQ7Ozs7RUFmeUJDLFc7O2dCQUF0QlAsYSxhQWlCYSxVOztnQkFqQmJBLGEsdUJBbUJ1QjtBQUN6QlEsRUFBQUEsU0FBUyxFQUFFLFVBRGM7QUFFekJDLEVBQUFBLFVBQVUsRUFBRTtBQUZhLEM7O2VBTWQsK0JBQVVULGFBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIFJ1bGVOYW1lSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRSdWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UnVsZU5hbWUsXG4gICAgICBzZXRSdWxlTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInRleHRhcmVhXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJydWxlTmFtZVwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUnVsZU5hbWVJbnB1dClgXG5cbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgXG5gO1xuIl19