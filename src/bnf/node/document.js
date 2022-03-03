"use strict";

import NonTerminalNode from"../../node/nonTerminal";

import { RuleRuleName } from "../../ruleNames";

export default class DocumentBNFNode extends NonTerminalNode {
  generateRules(Rule) {
    const childNodes = this.getChildNodes(),
          ruleNodes = childNodes.reduce((ruleNodes, childNode) => {
            const childNodeNonTerminalNode = childNode.isNonTerminalNode();

            if (childNodeNonTerminalNode) {
              const nonTerminalNode = childNode,  ///
                    ruleName = childNode.getRuleName(),
                    ruleNameRuleRuleName = (ruleName === RuleRuleName),
                    nonTerminalNodeRuleNode = ruleNameRuleRuleName;  ///

              if (nonTerminalNodeRuleNode) {
                const ruleNode = nonTerminalNode; ///

                ruleNodes.push(ruleNode);
              }
            }

            return ruleNodes;
          }, []),
          rules = ruleNodes.map((ruleNode) => {
            const rule = ruleNode.generateRule(Rule);
            
            return rule;
          });
    
    return rules;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(DocumentBNFNode, ruleName, childNodes); }
}
