"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import RuleNamePart from "../part/nonTerminal/ruleName";
import OptionalPartPart from "../part/nonTerminal/optionalPart";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

import { nameRuleName, definitionsRuleName, ambiguousModifierRuleName } from "../ruleNames";

const { separator, terminator } = specialSymbols;

export default class RuleDefinition extends Definition {
  static fromNothing() {
    const separatorTerminalSymbolContent = separator,
          terminatorTerminalSymbolContent = terminator,
          ambiguousModifierRuleNamePart = new RuleNamePart(ambiguousModifierRuleName),
          nameRuleNamePart = new RuleNamePart(nameRuleName),
          optionalAmbiguousRuleNamePartPart = new OptionalPartPart(ambiguousModifierRuleNamePart),
          separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent),
          definitionsRuleNamePart = new RuleNamePart(definitionsRuleName),
          terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent),
          parts = [
            nameRuleNamePart,
            optionalAmbiguousRuleNamePartPart,
            separatorTerminalSymbolPart,
            definitionsRuleNamePart,
            terminatorTerminalSymbolPart
          ],
          precedence = null,
          ruleDefinition = new RuleDefinition(parts, precedence);

    return ruleDefinition;
  }
}
