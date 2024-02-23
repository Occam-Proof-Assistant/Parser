"use strict";

import NonTerminalNode from"../../node/nonTerminal";

import { ruleRuleName } from "../../ruleNames";
import { nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class DocumentBNFNode extends NonTerminalNode {
  generateRules(Rule) {
    const childNodes = this.getChildNodes(),
          ruleBNFNodes = nodesFromChildNodesAndRuleName(childNodes, ruleRuleName),
          rules = ruleBNFNodes.map((ruleBNFNode) => {
            const rule = ruleBNFNode.generateRule(Rule);
            
            return rule;
          });
    
    return rules;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(DocumentBNFNode, ruleName, childNodes, ambiguous); }
}
