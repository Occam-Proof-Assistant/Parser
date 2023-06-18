"use strict";

import { types } from "occam-lexers";

import Rule from "../rule";
import TerminalSymbolBNFNode from "../node/bnf/terminalSymbol";
import SignificantTokenTypeDefinition from "../definition/significantTokenType";

import { terminalSymbolRuleName } from "../ruleNames";

const { stringLiteralType } = types;

export default class TerminalSymbolRule extends Rule {
  static fromNothing() {
    const significantTokenType = stringLiteralType,  ///
          stringLiteralSignificantTokenTypeDefinition = SignificantTokenTypeDefinition.fromSignificantTokenType(significantTokenType),
          name = terminalSymbolRuleName,  ///
          ambiguous = false,
          definitions = [
            stringLiteralSignificantTokenTypeDefinition
          ],
          NonTerminalNode = TerminalSymbolBNFNode,
          terminalSymbolRule = new TerminalSymbolRule(name, ambiguous, definitions, NonTerminalNode);

    return terminalSymbolRule;
  }
}
