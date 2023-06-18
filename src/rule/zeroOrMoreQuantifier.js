"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import QuantifierBNFNode from "../node/bnf/quantifier";
import QuantifierRuleDefinition from "../definition/quantifierRule";

import { zeroOrMoreQuantifierRuleName } from "../ruleNames";

const { asterisk } = specialSymbols;

export default class ZeroOrMoreQuantifierRule extends Rule {
  static fromNothing() {
    const name = zeroOrMoreQuantifierRuleName,  ///
          specialSymbol = asterisk, ///
          zeroOrMoreQuantifierRuleDefinition = QuantifierRuleDefinition.fromSpecialSymbol(specialSymbol),
          ambiguous = false,
          definitions = [
            zeroOrMoreQuantifierRuleDefinition
          ],
          NonTerminalNode = QuantifierBNFNode, ///
          zeroOrMoreQuantifierRule = new ZeroOrMoreQuantifierRule(name, ambiguous, definitions, NonTerminalNode);

    return zeroOrMoreQuantifierRule;
  }
}
