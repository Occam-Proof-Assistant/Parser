'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal'),
      WildcardPart = require('../part/terminal/wildcard');

class WildcardNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const wildcardPart = new WildcardPart(noWhitespace);

    return wildcardPart;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(WildcardNode, ruleName, childNodes); }
}

module.exports = WildcardNode;
