'use strict';

const Definition = require('../definition'),
      OptionalPartPart = require('../part/optionalPart'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      ProductionNamePart = require('../../common/part/productionName');

class DefinitionDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          verticalSpaceProductionName = 'verticalSpace',
          partProductionNamePart = new ProductionNamePart(partProductionName),
          verticalSpaceProductionNamePart = new ProductionNamePart(verticalSpaceProductionName),
          oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(partProductionNamePart),
          optionalVerticalSpaceProductionNamePartPart = new OptionalPartPart(verticalSpaceProductionNamePart),
          parts = [
            oneOrMorePartProductionNamePartsPart,
            optionalVerticalSpaceProductionNamePartPart
          ];

    super(parts)
  }
}

module.exports = DefinitionDefinition;
