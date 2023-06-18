"use strict";

import Rule from "../rule";
import RuleBNFNode from "../node/bnf/rule";
import RuleDefinition from "../definition/rule";

import { ruleRuleName } from "../ruleNames";

export default class RuleRule extends Rule {
  static fromNothing() {
    const ruleDefinition = RuleDefinition.fromNothing(),
          name = ruleRuleName,  ///
          ambiguous = false,
          definitions = [
            ruleDefinition
          ],
          NonTerminalNode = RuleBNFNode,
          ruleRule = new RuleRule(name, ambiguous, definitions, NonTerminalNode);

    return ruleRule;
  }
}
