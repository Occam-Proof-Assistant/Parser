'use strict';

const cycles = require('../grammar/cycles'),
      leftRecursion = require('../grammar/leftRecursion'),
      bnf = require('./bnf'),
      Rule = require('./rule'),
      Definition = require('./definition'),
      CommonParser = require('../common/parser'),
      PartRule = require('./rule/part.old'),
      RuleRule = require('./rule/rule'),
      RulesRule = require('./rule/rules'),
      RuleNameRule = require('./rule/ruleName'),
      EpsilonRule = require('./rule/epsilon'),
      WildcardRule = require('./rule/wildcard'),
      EndOfLineRule = require('./rule/endOfLine'),
      DefinitionRule = require('./rule/definition'),
      DefinitionsRule = require('./rule/definitions'),
      GroupOfPartsRule = require('./rule/groupOfParts'),
      ChoiceOfPartsRule = require('./rule/choiceOfParts'),
      OptionalPartRule = require('./rule/optionalPart'),
      ZeroOrMorePartsRule = require('./rule/zeroOrMoreParts'),
      OneOrMorePartsRule = require('./rule/oneOrMoreParts'),
      TerminalSymbolRule = require('./rule/terminalSymbol'),
      NoWhitespacePartRule = require('./rule/noWhitespacePart'),
      RegularExpressionRule = require('./rule/regularExpression'),
      SignificantTokenTypeRule = require('./rule/significantTokenType'),
      RightRecursivePartRule = require('./rule/rightRecursivePart');

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
          ruleNameRule = new RuleNameRule(),
          epsilonRule = new EpsilonRule(),
          wildcardRule = new WildcardRule(),
          endOfLineRule = new EndOfLineRule(),
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          groupOfPartsRule = new GroupOfPartsRule(),
          choiceOfPartsRule = new ChoiceOfPartsRule(),
          optionalPartRule = new OptionalPartRule(),
          zeroOrMorePartsRule = new ZeroOrMorePartsRule(),
          oneOrMorePartsRule = new OneOrMorePartsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          noWhitespacePartRule = new NoWhitespacePartRule(),
          regularExpressionRule = new RegularExpressionRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule(),
          rightRecursivePartRule = new RightRecursivePartRule();

    let rules = [
      rulesRule,
      ruleRule,
      definitionsRule,
      definitionRule,
      noWhitespacePartRule,
      optionalPartRule,
      zeroOrMorePartsRule,
      oneOrMorePartsRule,
      groupOfPartsRule,
      choiceOfPartsRule,
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

    rules = cycles.eliminate(rules);  ///

    rules = leftRecursion.eliminate(rules);  ///

    const bnfParser = new BNFParser(rules);
    
    return bnfParser;
  }
}

module.exports = BNFParser;

BNFParser.bnf = bnf;
