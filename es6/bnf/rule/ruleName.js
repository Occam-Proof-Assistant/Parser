'use strict';

const Rule = require('../rule'),
      RuleNameNode = require('../node/ruleName'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

class RuleNameRule extends Rule {
  constructor() {
    const nameSignificantTokenType = 'name',
          nameSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(nameSignificantTokenType),
          name = 'ruleName',
          definitions = [
            nameSignificantTokenTypeDefinition
          ],
          Node = RuleNameNode;
    
    super(name, definitions, Node)
  }
}

module.exports = RuleNameRule;