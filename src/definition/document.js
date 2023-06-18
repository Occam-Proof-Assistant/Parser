"use strict";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import ChoiceOfPartsPart from "../part/nonTerminal/choiceOfParts";
import OneOrMorePartsPart from "../part/nonTerminal/oneOrMoreParts";

import { ruleRuleName, errorRuleName } from "../ruleNames";

export default class DocumentDefinition extends Definition {
  static fromNothing() {
    const ruleRuleNamePart = new RuleNamePart(ruleRuleName),
          errorRuleNamePart = new RuleNamePart(errorRuleName),
          ruleRuleNameAndErrorRuleNameParts = [
            ruleRuleNamePart,
            errorRuleNamePart
          ],
          choiceOfRuleRuleNameAndErrorRuleNamePartsPart = new ChoiceOfPartsPart(ruleRuleNameAndErrorRuleNameParts),
          oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = new OneOrMorePartsPart(choiceOfRuleRuleNameAndErrorRuleNamePartsPart),
          parts = [
            oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart
          ],
          precedence = null,
          documentDefinition = new DocumentDefinition(parts, precedence);

    return documentDefinition;
  }
}
