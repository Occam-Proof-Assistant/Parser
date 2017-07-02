'use strict';

const bnf = require('./bnf'),
      Rule = require('./rule'),
      Definition = require('./definition'),
      CommonParser = require('../common/parser'),
      PartRule = require('./rule/part'),
      RuleRule = require('./rule/rule'),
      RulesRule = require('./rule/rules'),
      EpsilonRule = require('./rule/epsilon'),
      WildcardRule = require('./rule/wildcard'),
      RuleNameRule = require('./rule/ruleName'),
      EndOfLineRule = require('./rule/endOfLine'),
      DefinitionRule = require('./rule/definition'),
      DefinitionsRule = require('./rule/definitions'),
      TerminalSymbolRule = require('./rule/terminalSymbol'),
      RegularExpressionRule = require('./rule/regularExpression'),
      RightRecursivePartRule = require('./rule/rightRecursivePart'),
      SignificantTokenTypeRule = require('./rule/significantTokenType');

class BNFParser extends CommonParser {
  static generateRules(node, mappings = {}) {
    const rules = (node !== null) ?
                     node.generateRules(Rule, Definition, mappings) :
                       [];

    return rules;
  }

  static fromNothing() {
    const partRule = new PartRule(),
          ruleRule = new RuleRule(),
          rulesRule = new RulesRule(),
          epsilonRule = new EpsilonRule(),
          wildcardRule = new WildcardRule(),
          ruleNameRule = new RuleNameRule(),
          endOfLineRule = new EndOfLineRule(),
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          regularExpressionRule = new RegularExpressionRule(),
          rightRecursivePartRule = new RightRecursivePartRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();

    let rules = [
      rulesRule,
      ruleRule,
      definitionsRule,
      definitionRule,
      partRule,
      ruleNameRule,
      regularExpressionRule,
      significantTokenTypeRule,
      terminalSymbolRule,
      endOfLineRule,
      epsilonRule,
      wildcardRule,
      rightRecursivePartRule
    ];

    const bnfParser = new BNFParser(rules);
    
    return bnfParser;
  }
}

module.exports = BNFParser;

BNFParser.bnf = bnf;
