'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnitDefinition = require('../definition/unit'),
    Production = require('../../common/production');

var UnitDefinitionProduction = function (_Production) {
  _inherits(UnitDefinitionProduction, _Production);

  function UnitDefinitionProduction() {
    _classCallCheck(this, UnitDefinitionProduction);

    return _possibleConstructorReturn(this, (UnitDefinitionProduction.__proto__ || Object.getPrototypeOf(UnitDefinitionProduction)).apply(this, arguments));
  }

  _createClass(UnitDefinitionProduction, [{
    key: 'getUnitDefinitionProductionName',
    value: function getUnitDefinitionProductionName() {
      var definitions = this.getDefinitions(),
          firstDefinition = first(definitions),
          unitDefinition = firstDefinition,
          ///
      unitDefinitionProductionName = unitDefinition.getProductionName();

      return unitDefinitionProductionName;
    }
  }, {
    key: 'isFoundByProductionNames',
    value: function isFoundByProductionNames(firstProductionName, secondProductionName) {
      var name = this.getName(),
          unitDefinitionProductionName = this.getUnitDefinitionProductionName(),
          found = name === firstProductionName && unitDefinitionProductionName === secondProductionName; ///

      return found;
    }
  }], [{
    key: 'fromNameAndUnitDefinition',
    value: function fromNameAndUnitDefinition(name, unitDefinition) {
      var definitions = [unitDefinition],
          Node = null,
          unitDefinitionProduction = new UnitDefinitionProduction(name, definitions, Node);

      return unitDefinitionProduction;
    }
  }, {
    key: 'fromNameAndUnitDefinitionProductionName',
    value: function fromNameAndUnitDefinitionProductionName(name, unitDefinitionProductionName) {
      var productionName = unitDefinitionProductionName,
          ///
      unitDefinition = UnitDefinition.fromProductionName(productionName),
          unitDefinitionProduction = UnitDefinitionProduction.fromNameAndUnitDefinition(name, unitDefinition);

      return unitDefinitionProduction;
    }
  }]);

  return UnitDefinitionProduction;
}(Production);

module.exports = UnitDefinitionProduction;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdERlZmluaXRpb24uanMiXSwibmFtZXMiOlsiVW5pdERlZmluaXRpb24iLCJyZXF1aXJlIiwiUHJvZHVjdGlvbiIsIlVuaXREZWZpbml0aW9uUHJvZHVjdGlvbiIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJmaXJzdERlZmluaXRpb24iLCJmaXJzdCIsInVuaXREZWZpbml0aW9uIiwidW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwiZmlyc3RQcm9kdWN0aW9uTmFtZSIsInNlY29uZFByb2R1Y3Rpb25OYW1lIiwibmFtZSIsImdldE5hbWUiLCJnZXRVbml0RGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lIiwiZm91bmQiLCJOb2RlIiwidW5pdERlZmluaXRpb25Qcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tUHJvZHVjdGlvbk5hbWUiLCJmcm9tTmFtZUFuZFVuaXREZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSxvQkFBUixDQUF2QjtBQUFBLElBQ01DLGFBQWFELFFBQVEseUJBQVIsQ0FEbkI7O0lBR01FLHdCOzs7Ozs7Ozs7OztzREFDOEI7QUFDaEMsVUFBTUMsY0FBYyxLQUFLQyxjQUFMLEVBQXBCO0FBQUEsVUFDTUMsa0JBQWtCQyxNQUFNSCxXQUFOLENBRHhCO0FBQUEsVUFFTUksaUJBQWlCRixlQUZ2QjtBQUFBLFVBRXdDO0FBQ2xDRyxxQ0FBK0JELGVBQWVFLGlCQUFmLEVBSHJDOztBQUtBLGFBQU9ELDRCQUFQO0FBQ0Q7Ozs2Q0FFd0JFLG1CLEVBQXFCQyxvQixFQUFzQjtBQUNsRSxVQUFNQyxPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLFVBQ01MLCtCQUErQixLQUFLTSwrQkFBTCxFQURyQztBQUFBLFVBRU1DLFFBQVVILFNBQVNGLG1CQUFWLElBQW1DRixpQ0FBaUNHLG9CQUZuRixDQURrRSxDQUcwQzs7QUFFNUcsYUFBT0ksS0FBUDtBQUNEOzs7OENBRWdDSCxJLEVBQU1MLGMsRUFBZ0I7QUFDckQsVUFBTUosY0FBYyxDQUNaSSxjQURZLENBQXBCO0FBQUEsVUFHTVMsT0FBTyxJQUhiO0FBQUEsVUFJTUMsMkJBQTJCLElBQUlmLHdCQUFKLENBQTZCVSxJQUE3QixFQUFtQ1QsV0FBbkMsRUFBZ0RhLElBQWhELENBSmpDOztBQU1BLGFBQU9DLHdCQUFQO0FBQ0Q7Ozs0REFFOENMLEksRUFBTUosNEIsRUFBOEI7QUFDakYsVUFBTVUsaUJBQWlCViw0QkFBdkI7QUFBQSxVQUFzRDtBQUNoREQsdUJBQWlCUixlQUFlb0Isa0JBQWYsQ0FBa0NELGNBQWxDLENBRHZCO0FBQUEsVUFFTUQsMkJBQTJCZix5QkFBeUJrQix5QkFBekIsQ0FBbURSLElBQW5ELEVBQXlETCxjQUF6RCxDQUZqQzs7QUFJQSxhQUFPVSx3QkFBUDtBQUNEOzs7O0VBbENvQ2hCLFU7O0FBcUN2Q29CLE9BQU9DLE9BQVAsR0FBaUJwQix3QkFBakI7O0FBRUEsU0FBU0ksS0FBVCxDQUFlaUIsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InVuaXREZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBVbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdW5pdCcpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wcm9kdWN0aW9uJykgO1xuXG5jbGFzcyBVbml0RGVmaW5pdGlvblByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgZ2V0VW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBmaXJzdERlZmluaXRpb24gPSBmaXJzdChkZWZpbml0aW9ucyksXG4gICAgICAgICAgdW5pdERlZmluaXRpb24gPSBmaXJzdERlZmluaXRpb24sIC8vL1xuICAgICAgICAgIHVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWUgPSB1bml0RGVmaW5pdGlvbi5nZXRQcm9kdWN0aW9uTmFtZSgpO1xuICAgIFxuICAgIHJldHVybiB1bml0RGVmaW5pdGlvblByb2R1Y3Rpb25OYW1lO1xuICB9XG5cbiAgaXNGb3VuZEJ5UHJvZHVjdGlvbk5hbWVzKGZpcnN0UHJvZHVjdGlvbk5hbWUsIHNlY29uZFByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWUgPSB0aGlzLmdldFVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICBmb3VuZCA9ICgobmFtZSA9PT0gZmlyc3RQcm9kdWN0aW9uTmFtZSkgJiYgKHVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWUgPT09IHNlY29uZFByb2R1Y3Rpb25OYW1lKSk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTmFtZUFuZFVuaXREZWZpbml0aW9uKG5hbWUsIHVuaXREZWZpbml0aW9uKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICB1bml0RGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IG51bGwsXG4gICAgICAgICAgdW5pdERlZmluaXRpb25Qcm9kdWN0aW9uID0gbmV3IFVuaXREZWZpbml0aW9uUHJvZHVjdGlvbihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG4gICAgXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uUHJvZHVjdGlvbjsgICAgICAgICAgXG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTmFtZUFuZFVuaXREZWZpbml0aW9uUHJvZHVjdGlvbk5hbWUobmFtZSwgdW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdW5pdERlZmluaXRpb25Qcm9kdWN0aW9uTmFtZSwgIC8vL1xuICAgICAgICAgIHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbVByb2R1Y3Rpb25OYW1lKHByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvblByb2R1Y3Rpb24gPSBVbml0RGVmaW5pdGlvblByb2R1Y3Rpb24uZnJvbU5hbWVBbmRVbml0RGVmaW5pdGlvbihuYW1lLCB1bml0RGVmaW5pdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXREZWZpbml0aW9uUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=