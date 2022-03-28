"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _modifier = _interopRequireDefault(require("../node/bnf/modifier"));
var _ambiguousModifierRule = _interopRequireDefault(require("../definition/ambiguousModifierRule"));
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
var AmbiguousModifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(AmbiguousModifierRule, Rule);
    var _super = _createSuper(AmbiguousModifierRule);
    function AmbiguousModifierRule() {
        _classCallCheck(this, AmbiguousModifierRule);
        var name = _ruleNames.AmbiguousModifierRuleName, ambiguousModifierRuleDefinition = new _ambiguousModifierRule.default(), ambiguous = false, definitions = [
            ambiguousModifierRuleDefinition
        ], Node = _modifier.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return AmbiguousModifierRule;
}(_rule.default);
exports.default = AmbiguousModifierRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2FtYmlndW91c01vZGlmaWVyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IE1vZGlmaWVyQk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvbW9kaWZpZXJcIjtcbmltcG9ydCBBbWJpZ3VvdXNNb2RpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2FtYmlndW91c01vZGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBBbWJpZ3VvdXNNb2RpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbWJpZ3VvdXNNb2RpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IEFtYmlndW91c01vZGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgYW1iaWd1b3VzTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBBbWJpZ3VvdXNNb2RpZmllclJ1bGVEZWZpbml0aW9uKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBhbWJpZ3VvdXNNb2RpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTW9kaWZpZXJCTkZOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQW1iaWd1b3VzTW9kaWZpZXJSdWxlIiwibmFtZSIsIkFtYmlndW91c01vZGlmaWVyUnVsZU5hbWUiLCJhbWJpZ3VvdXNNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwiQW1iaWd1b3VzTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9kZSIsIk1vZGlmaWVyQk5GTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFaUIsSUFBQSxLQUFTLGtDQUFULFNBQVMsRUFBQTtBQUNFLElBQUEsU0FBc0Isa0NBQXRCLHNCQUFzQixFQUFBO0FBQ04sSUFBQSxzQkFBcUMsa0NBQXJDLHFDQUFxQyxFQUFBO0FBRXZDLElBQUEsVUFBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O0tBTnhEOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBUWUsSUFBQSxBQUFNQSxxQkFBcUIsaUJDUnZDLEFEUVk7MENBUmY7O2FBUXFCQSxxQkFBcUI7b0RBUjFDO1FBVUksSUFBTUMsSUFBSSxHQUFHQyxVQUF5QiwwQkFBQSxFQUNoQ0MsK0JBQStCLEdBQUcsSUFBSUMsc0JBQStCLFVBQUUsRUFDdkVDLFNBQVMsR0FBRyxLQUFLLEVBQ2pCQyxXQUFXLEdBQUc7WUFDWkgsK0JBQStCO1NBQ2hDLEVBQ0RJLElBQUksR0FBR0MsU0FBZSxRQUFBLEFBQUM7aUNBRXZCUCxJQUFJLEVBQUVJLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxJQUFJOzs7Q0FFM0MsQ0Faa0RFLEtBQUksU0FZdEQ7a0JBWm9CVCxxQkFBcUIsQUFSMUMifQ==