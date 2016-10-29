'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EndOfLinePart = require('./endOfLine'),
    ProductionNamePart = require('./productionName'),
    TerminalSymbolPart = require('./terminalSymbol'),
    SignificantTokenTypePart = require('./significantTokenType');

var SequenceOfPartsPart = function () {
  function SequenceOfPartsPart(terminalPart, productionName, noWhitespace) {
    _classCallCheck(this, SequenceOfPartsPart);

    this.terminalPart = terminalPart;
    this.productionName = productionName;
    this.noWhitespace = noWhitespace;
  }

  _createClass(SequenceOfPartsPart, [{
    key: 'getNoWhitespace',
    value: function getNoWhitespace() {
      return this.noWhitespace;
    }
  }, {
    key: 'terminalPartOrProduction',
    value: function terminalPartOrProduction(productions) {
      var terminalPartOrProduction = this.terminalPart !== null ? this.terminalPart : ProductionNamePart.findProduction(this.productionName, productions);

      return terminalPartOrProduction;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace, regExp, Class) {
      var part = null,
          matches = symbol.match(regExp);

      if (matches !== null) {
        var secondMatch = second(matches);

        symbol = secondMatch; ///

        var terminalPart = SignificantTokenTypePart.fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) || TerminalSymbolPart.fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) || EndOfLinePart.fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace),
            productionName = symbol;

        part = new Class(terminalPart, productionName, noWhitespace);
      }

      return part;
    }
  }]);

  return SequenceOfPartsPart;
}();

module.exports = SequenceOfPartsPart;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJFbmRPZkxpbmVQYXJ0IiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlNpZ25pZmljYW50VG9rZW5UeXBlUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJwcm9kdWN0aW9uTmFtZSIsIm5vV2hpdGVzcGFjZSIsInByb2R1Y3Rpb25zIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJyZWdFeHAiLCJDbGFzcyIsInBhcnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsImZyb21TeW1ib2wiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxnQkFBZ0JDLFFBQVEsYUFBUixDQUFwQjtBQUFBLElBQ0lDLHFCQUFxQkQsUUFBUSxrQkFBUixDQUR6QjtBQUFBLElBRUlFLHFCQUFxQkYsUUFBUSxrQkFBUixDQUZ6QjtBQUFBLElBR0lHLDJCQUEyQkgsUUFBUSx3QkFBUixDQUgvQjs7SUFLTUksbUI7QUFDSiwrQkFBWUMsWUFBWixFQUEwQkMsY0FBMUIsRUFBMENDLFlBQTFDLEVBQXdEO0FBQUE7O0FBQ3RELFNBQUtGLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtBLFlBQVo7QUFDRDs7OzZDQUV3QkMsVyxFQUFhO0FBQ3BDLFVBQUlDLDJCQUE0QixLQUFLSixZQUFMLEtBQXNCLElBQXZCLEdBQ0csS0FBS0EsWUFEUixHQUVLSixtQkFBbUJTLGNBQW5CLENBQWtDLEtBQUtKLGNBQXZDLEVBQXVERSxXQUF2RCxDQUZwQzs7QUFJQSxhQUFPQyx3QkFBUDtBQUNEOzs7K0JBRWlCRSxNLEVBQVFDLHFCLEVBQXVCQyxxQixFQUF1Qk4sWSxFQUFjTyxNLEVBQVFDLEssRUFBTztBQUNuRyxVQUFJQyxPQUFPLElBQVg7QUFBQSxVQUNJQyxVQUFVTixPQUFPTyxLQUFQLENBQWFKLE1BQWIsQ0FEZDs7QUFHQSxVQUFJRyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlFLGNBQWNDLE9BQU9ILE9BQVAsQ0FBbEI7O0FBRUFOLGlCQUFTUSxXQUFULENBSG9CLENBR0U7O0FBRXRCLFlBQUlkLGVBQWVGLHlCQUF5QmtCLFVBQXpCLENBQW9DVixNQUFwQyxFQUE0Q0MscUJBQTVDLEVBQW1FQyxxQkFBbkUsRUFBMEZOLFlBQTFGLEtBQ0VMLG1CQUFtQm1CLFVBQW5CLENBQThCVixNQUE5QixFQUFzQ0MscUJBQXRDLEVBQTZEQyxxQkFBN0QsRUFBb0ZOLFlBQXBGLENBREYsSUFFSVIsY0FBY3NCLFVBQWQsQ0FBeUJWLE1BQXpCLEVBQWlDQyxxQkFBakMsRUFBd0RDLHFCQUF4RCxFQUErRU4sWUFBL0UsQ0FGdkI7QUFBQSxZQUdJRCxpQkFBaUJLLE1BSHJCOztBQUtBSyxlQUFPLElBQUlELEtBQUosQ0FBVVYsWUFBVixFQUF3QkMsY0FBeEIsRUFBd0NDLFlBQXhDLENBQVA7QUFDRDs7QUFFRCxhQUFPUyxJQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCbkIsbUJBQWpCOztBQUVBLFNBQVNnQixNQUFULENBQWdCSSxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InNlcXVlbmNlT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEVuZE9mTGluZVBhcnQgPSByZXF1aXJlKCcuL2VuZE9mTGluZScpLFxuICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbk5hbWUnKSxcbiAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gcmVxdWlyZSgnLi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IodGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy50ZXJtaW5hbFBhcnQgPSB0ZXJtaW5hbFBhcnQ7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBnZXROb1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uKHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiA9ICh0aGlzLnRlcm1pbmFsUGFydCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlcm1pbmFsUGFydCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMucHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UsIHJlZ0V4cCwgQ2xhc3MpIHtcbiAgICB2YXIgcGFydCA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2gocmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIHN5bWJvbCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgICAgdmFyIHRlcm1pbmFsUGFydCA9IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5kT2ZMaW5lUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBzeW1ib2w7XG5cbiAgICAgIHBhcnQgPSBuZXcgQ2xhc3ModGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==