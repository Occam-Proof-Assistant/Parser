"use strict";

import Rule from "../rule";
import DefinitionsBNFNode from "../node/bnf/definitions";
import DefinitionsDefinition from "../definition/definitions";

import { definitionsRuleName } from "../ruleNames";

export default class DefinitionsRule extends Rule {
  static fromNothing() {
    const definitionsDefinition = DefinitionsDefinition.fromNothing(),
          name = definitionsRuleName, ///
          ambiguous = false,
          definitions = [
            definitionsDefinition
          ],
          NonTerminalNode = DefinitionsBNFNode, ///
          definitionsRule = new DefinitionsRule(name, ambiguous, definitions, NonTerminalNode);

    return definitionsRule;
  }
}
