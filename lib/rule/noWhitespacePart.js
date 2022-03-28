"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _noWhitespacePart = _interopRequireDefault(require("../node/bnf/noWhitespacePart"));
var _noWhitespacePart1 = _interopRequireDefault(require("../definition/noWhitespacePart"));
var _ruleNames = require("../ruleNames");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var NoWhitespacePartRule = /*#__PURE__*/ function(Rule) {
    _inherits(NoWhitespacePartRule, Rule);
    var _super = _createSuper(NoWhitespacePartRule);
    function NoWhitespacePartRule() {
        _classCallCheck(this, NoWhitespacePartRule);
        var noWhitespacePartDefinition = new _noWhitespacePart1.default(), name = _ruleNames.NoWhitespacePartRuleName, ambiguous = false, definitions = [
            noWhitespacePartDefinition
        ], Node = _noWhitespacePart.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return NoWhitespacePartRule;
}(_rule.default);
exports.default = NoWhitespacePartRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL25vV2hpdGVzcGFjZVBhcnQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydEJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL25vV2hpdGVzcGFjZVBhcnRcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9ub1doaXRlc3BhY2VQYXJ0XCI7XG5cbmltcG9ydCB7IE5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9XaGl0ZXNwYWNlUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24gPSBuZXcgTm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gTm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb1doaXRlc3BhY2VQYXJ0Qk5GTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsIk5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uIiwibmFtZSIsIk5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9kZSIsIk5vV2hpdGVzcGFjZVBhcnRCTkZOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVpQixJQUFBLEtBQVMsa0NBQVQsU0FBUyxFQUFBO0FBQ1UsSUFBQSxpQkFBOEIsa0NBQTlCLDhCQUE4QixFQUFBO0FBQzNCLElBQUEsa0JBQWdDLGtDQUFoQyxnQ0FBZ0MsRUFBQTtBQUU5QixJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7Ozs7Ozs7Ozs7Ozs7OztLQU52RDs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQVFlLElBQUEsQUFBTUEsb0JBQW9CLGlCQ1J0QyxBRFFZO3lDQVJmOzthQVFxQkEsb0JBQW9CO21EQVJ6QztRQVVJLElBQU1DLDBCQUEwQixHQUFHLElBQUlDLGtCQUEwQixVQUFFLEVBQzdEQyxJQUFJLEdBQUdDLFVBQXdCLHlCQUFBLEVBQy9CQyxTQUFTLEdBQUcsS0FBSyxFQUNqQkMsV0FBVyxHQUFHO1lBQ1pMLDBCQUEwQjtTQUMzQixFQUNETSxJQUFJLEdBQUdDLGlCQUF1QixRQUFBLEFBQUM7aUNBRS9CTCxJQUFJLEVBQUVFLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxJQUFJOzs7Q0FFM0MsQ0FaaURFLEtBQUksU0FZckQ7a0JBWm9CVCxvQkFBb0IsQUFSekMifQ==