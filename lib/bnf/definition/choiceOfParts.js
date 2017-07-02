'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    RuleNamePart = require('../part/ruleName'),
    GroupOfPartsPart = require('../part/groupOfParts'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    TerminalSymbolPart = require('../part/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    verticalBar = specialSymbols.verticalBar,
    openBracket = specialSymbols.openBracket,
    closeBracket = specialSymbols.closeBracket;

var ChoiceOfPartsDefinition = function (_Definition) {
  _inherits(ChoiceOfPartsDefinition, _Definition);

  function ChoiceOfPartsDefinition() {
    _classCallCheck(this, ChoiceOfPartsDefinition);

    var partRuleName = 'part',
        verticalBarTerminalSymbolContent = verticalBar,
        openBracketTerminalSymbolContent = openBracket,
        closeBracketTerminalSymbolContent = closeBracket,
        partRuleNamePart = new RuleNamePart(partRuleName),
        verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent),
        openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
        closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
        verticalBarTerminalSymbolThenPartRuleNameParts = [verticalBarTerminalSymbolPart, partRuleNamePart],
        groupOfPartsPart = new GroupOfPartsPart(verticalBarTerminalSymbolThenPartRuleNameParts),
        oneOrMoreGroupOfPartsPart = new OneOrMorePartsPart(groupOfPartsPart),
        parts = [openBracketTerminalSymbolPart, partRuleNamePart, oneOrMoreGroupOfPartsPart, closeBracketTerminalSymbolPart];

    return _possibleConstructorReturn(this, (ChoiceOfPartsDefinition.__proto__ || Object.getPrototypeOf(ChoiceOfPartsDefinition)).call(this, parts));
  }

  return ChoiceOfPartsDefinition;
}(Definition);

module.exports = ChoiceOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiR3JvdXBPZlBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJ2ZXJ0aWNhbEJhciIsIm9wZW5CcmFja2V0IiwiY2xvc2VCcmFja2V0IiwiQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24iLCJwYXJ0UnVsZU5hbWUiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFJ1bGVOYW1lUGFydCIsInZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xQYXJ0Iiwib3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlblBhcnRSdWxlTmFtZVBhcnRzIiwiZ3JvdXBPZlBhcnRzUGFydCIsIm9uZU9yTW9yZUdyb3VwT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGFBQWFELFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01FLGVBQWVGLFFBQVEsa0JBQVIsQ0FEckI7QUFBQSxJQUVNRyxtQkFBbUJILFFBQVEsc0JBQVIsQ0FGekI7QUFBQSxJQUdNSSxxQkFBcUJKLFFBQVEsd0JBQVIsQ0FIM0I7QUFBQSxJQUlNSyxxQkFBcUJMLFFBQVEsd0JBQVIsQ0FKM0I7O0FBTU0sSUFBRU0sUUFBRixHQUFlUCxNQUFmLENBQUVPLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsV0FGRixHQUU2Q0QsY0FGN0MsQ0FFRUMsV0FGRjtBQUFBLElBRWVDLFdBRmYsR0FFNkNGLGNBRjdDLENBRWVFLFdBRmY7QUFBQSxJQUU0QkMsWUFGNUIsR0FFNkNILGNBRjdDLENBRTRCRyxZQUY1Qjs7SUFJQUMsdUI7OztBQUNKLHFDQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxNQUFyQjtBQUFBLFFBQ01DLG1DQUFtQ0wsV0FEekM7QUFBQSxRQUVNTSxtQ0FBbUNMLFdBRnpDO0FBQUEsUUFHTU0sb0NBQW9DTCxZQUgxQztBQUFBLFFBSU1NLG1CQUFtQixJQUFJZCxZQUFKLENBQWlCVSxZQUFqQixDQUp6QjtBQUFBLFFBS01LLGdDQUFnQyxJQUFJWixrQkFBSixDQUF1QlEsZ0NBQXZCLENBTHRDO0FBQUEsUUFNTUssZ0NBQWdDLElBQUliLGtCQUFKLENBQXVCUyxnQ0FBdkIsQ0FOdEM7QUFBQSxRQU9NSyxpQ0FBaUMsSUFBSWQsa0JBQUosQ0FBdUJVLGlDQUF2QixDQVB2QztBQUFBLFFBUU1LLGlEQUFpRCxDQUMvQ0gsNkJBRCtDLEVBRS9DRCxnQkFGK0MsQ0FSdkQ7QUFBQSxRQVlNSyxtQkFBbUIsSUFBSWxCLGdCQUFKLENBQXFCaUIsOENBQXJCLENBWnpCO0FBQUEsUUFhTUUsNEJBQTRCLElBQUlsQixrQkFBSixDQUF1QmlCLGdCQUF2QixDQWJsQztBQUFBLFFBY01FLFFBQVEsQ0FDTkwsNkJBRE0sRUFFTkYsZ0JBRk0sRUFHTk0seUJBSE0sRUFJTkgsOEJBSk0sQ0FkZDs7QUFEWSw2SUFzQk5JLEtBdEJNO0FBdUJiOzs7RUF4Qm1DdEIsVTs7QUEyQnRDdUIsT0FBT0MsT0FBUCxHQUFpQmQsdUJBQWpCIiwiZmlsZSI6ImNob2ljZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ydWxlTmFtZScpLFxuICAgICAgR3JvdXBPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvZ3JvdXBPZlBhcnRzJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyB2ZXJ0aWNhbEJhciwgb3BlbkJyYWNrZXQsIGNsb3NlQnJhY2tldCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIENob2ljZU9mUGFydHNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlTmFtZSA9ICdwYXJ0JyxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHZlcnRpY2FsQmFyLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gb3BlbkJyYWNrZXQsXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gY2xvc2VCcmFja2V0LFxuICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlblBhcnRSdWxlTmFtZVBhcnRzID0gW1xuICAgICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBncm91cE9mUGFydHNQYXJ0ID0gbmV3IEdyb3VwT2ZQYXJ0c1BhcnQodmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFRoZW5QYXJ0UnVsZU5hbWVQYXJ0cyksXG4gICAgICAgICAgb25lT3JNb3JlR3JvdXBPZlBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQoZ3JvdXBPZlBhcnRzUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBvbmVPck1vcmVHcm91cE9mUGFydHNQYXJ0LFxuICAgICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENob2ljZU9mUGFydHNEZWZpbml0aW9uO1xuIl19