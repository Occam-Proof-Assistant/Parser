'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var NonTerminalPart = require('../../part/nonTerminal'),
    bnfUtilities = require('../../../utilities/bnf'),
    arrayUtilities = require('../../../utilities/array');

var array = necessary.array,
    second = array.second;

var ChoiceOfPartsPart = function (_NonTerminalPart) {
  _inherits(ChoiceOfPartsPart, _NonTerminalPart);

  function ChoiceOfPartsPart(parts) {
    _classCallCheck(this, ChoiceOfPartsPart);

    var _this = _possibleConstructorReturn(this, (ChoiceOfPartsPart.__proto__ || Object.getPrototypeOf(ChoiceOfPartsPart)).call(this));

    _this.parts = parts;
    return _this;
  }

  _createClass(ChoiceOfPartsPart, [{
    key: 'getParts',
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = false; ///

      var nodes = null;

      this.parts.some(function (part) {
        var partNodeOrNodes = part.parse(configuration, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = partNodeOrNodes;
        }

        return partParsed;
      });

      return nodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.toString();

        if (partsString === null) {
          partsString = partString;
        } else {
          partsString = partsString + ' | ' + partString;
        }

        return partsString;
      }, null),
          string = '( ' + partsString + ' )';

      return string;
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes) {
      var choiceOfPartsPart = null;

      nodes = arrayUtilities.discardLastThenFirst(nodes);

      var secondNode = second(nodes),
          secondNodeChoiceNode = bnfUtilities.isNodeChoiceNode(secondNode);

      if (secondNodeChoiceNode) {
        nodes = arrayUtilities.discardOdd(nodes);

        var noWhitespace = false,
            parts = nodes.map(function (node) {
          var part = node.generatePart(noWhitespace);

          return part;
        });

        choiceOfPartsPart = new ChoiceOfPartsPart(parts);
      }

      return choiceOfPartsPart;
    }
  }]);

  return ChoiceOfPartsPart;
}(NonTerminalPart);

module.exports = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJOb25UZXJtaW5hbFBhcnQiLCJibmZVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImFycmF5Iiwic2Vjb25kIiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub2RlcyIsInNvbWUiLCJwYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0UGFyc2VkIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwidG9TdHJpbmciLCJzdHJpbmciLCJjaG9pY2VPZlBhcnRzUGFydCIsImRpc2NhcmRMYXN0VGhlbkZpcnN0Iiwic2Vjb25kTm9kZSIsInNlY29uZE5vZGVDaG9pY2VOb2RlIiwiaXNOb2RlQ2hvaWNlTm9kZSIsImRpc2NhcmRPZGQiLCJtYXAiLCJub2RlIiwiZ2VuZXJhdGVQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsa0JBQWtCRCxRQUFRLHdCQUFSLENBQXhCO0FBQUEsSUFDTUUsZUFBZUYsUUFBUSx3QkFBUixDQURyQjtBQUFBLElBRU1HLGlCQUFpQkgsUUFBUSwwQkFBUixDQUZ2Qjs7QUFJTSxJQUFFSSxLQUFGLEdBQVlMLFNBQVosQ0FBRUssS0FBRjtBQUFBLElBQ0VDLE1BREYsR0FDYUQsS0FEYixDQUNFQyxNQURGOztJQUdBQyxpQjs7O0FBQ0osNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFHakIsVUFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBSGlCO0FBSWxCOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzswQkFFS0MsYSxFQUFlQyxZLEVBQWM7QUFDakNBLHFCQUFlLEtBQWYsQ0FEaUMsQ0FDWDs7QUFFdEIsVUFBSUMsUUFBUSxJQUFaOztBQUVBLFdBQUtILEtBQUwsQ0FBV0ksSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDN0IsWUFBTUMsa0JBQWtCRCxLQUFLRSxLQUFMLENBQVdOLGFBQVgsRUFBMEJDLFlBQTFCLENBQXhCO0FBQUEsWUFDTU0sYUFBY0Ysb0JBQW9CLElBRHhDOztBQUdBLFlBQUlFLFVBQUosRUFBZ0I7QUFDZEwsa0JBQVFHLGVBQVI7QUFDRDs7QUFFRCxlQUFPRSxVQUFQO0FBQ0QsT0FURDs7QUFXQSxhQUFPTCxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1NLGNBQWMsS0FBS1QsS0FBTCxDQUFXVSxNQUFYLENBQWtCLFVBQVNELFdBQVQsRUFBc0JKLElBQXRCLEVBQTRCO0FBQzFELFlBQU1NLGFBQWFOLEtBQUtPLFFBQUwsRUFBbkI7O0FBRUEsWUFBSUgsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCQSx3QkFBY0UsVUFBZDtBQUNELFNBRkQsTUFFTztBQUNMRix3QkFBaUJBLFdBQWpCLFdBQWtDRSxVQUFsQztBQUNEOztBQUVELGVBQU9GLFdBQVA7QUFDRCxPQVZhLEVBVVgsSUFWVyxDQUFwQjtBQUFBLFVBV01JLGdCQUFjSixXQUFkLE9BWE47O0FBYUEsYUFBT0ksTUFBUDtBQUNEOzs7OEJBRWdCVixLLEVBQU87QUFDdEIsVUFBSVcsb0JBQW9CLElBQXhCOztBQUVBWCxjQUFRUCxlQUFlbUIsb0JBQWYsQ0FBb0NaLEtBQXBDLENBQVI7O0FBRUEsVUFBTWEsYUFBYWxCLE9BQU9LLEtBQVAsQ0FBbkI7QUFBQSxVQUNNYyx1QkFBdUJ0QixhQUFhdUIsZ0JBQWIsQ0FBOEJGLFVBQTlCLENBRDdCOztBQUdBLFVBQUlDLG9CQUFKLEVBQTBCO0FBQ3hCZCxnQkFBUVAsZUFBZXVCLFVBQWYsQ0FBMEJoQixLQUExQixDQUFSOztBQUVBLFlBQU1ELGVBQWUsS0FBckI7QUFBQSxZQUNNRixRQUFRRyxNQUFNaUIsR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUMvQixjQUFNaEIsT0FBT2dCLEtBQUtDLFlBQUwsQ0FBa0JwQixZQUFsQixDQUFiOztBQUVBLGlCQUFPRyxJQUFQO0FBQ0QsU0FKTyxDQURkOztBQU9BUyw0QkFBb0IsSUFBSWYsaUJBQUosQ0FBc0JDLEtBQXRCLENBQXBCO0FBQ0Q7O0FBRUQsYUFBT2MsaUJBQVA7QUFDRDs7OztFQXJFNkJwQixlOztBQXdFaEM2QixPQUFPQyxPQUFQLEdBQWlCekIsaUJBQWpCIiwiZmlsZSI6ImNob2ljZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyksXG4gICAgICBibmZVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYm5mJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHNlY29uZCB9ID0gYXJyYXk7XG5cbmNsYXNzIENob2ljZU9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICBzdXBlcigpO1xuICAgIFxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBmYWxzZTsgLy8vXG4gICAgXG4gICAgbGV0IG5vZGVzID0gbnVsbDtcbiAgICBcbiAgICB0aGlzLnBhcnRzLnNvbWUoZnVuY3Rpb24ocGFydCkge1xuICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IHBhcnROb2RlT3JOb2RlcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnRQYXJzZWQ7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQudG9TdHJpbmcoKTtcbiAgICBcbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSB8ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgbGV0IGNob2ljZU9mUGFydHNQYXJ0ID0gbnVsbDtcbiAgICBcbiAgICBub2RlcyA9IGFycmF5VXRpbGl0aWVzLmRpc2NhcmRMYXN0VGhlbkZpcnN0KG5vZGVzKTtcbiAgICBcbiAgICBjb25zdCBzZWNvbmROb2RlID0gc2Vjb25kKG5vZGVzKSxcbiAgICAgICAgICBzZWNvbmROb2RlQ2hvaWNlTm9kZSA9IGJuZlV0aWxpdGllcy5pc05vZGVDaG9pY2VOb2RlKHNlY29uZE5vZGUpO1xuICAgIFxuICAgIGlmIChzZWNvbmROb2RlQ2hvaWNlTm9kZSkge1xuICAgICAgbm9kZXMgPSBhcnJheVV0aWxpdGllcy5kaXNjYXJkT2RkKG5vZGVzKTtcblxuICAgICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChub1doaXRlc3BhY2UpO1xuICBcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuICAgIH0gICAgXG4gICAgXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hvaWNlT2ZQYXJ0c1BhcnQ7XG4iXX0=