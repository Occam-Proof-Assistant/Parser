"use strict";

import Rule from "../rule";
import DocumentBNFNode from "../node/bnf/document";
import DocumentDefinition from "../definition/document";

import { documentRuleName } from "../ruleNames";

export default class DocumentRule extends Rule {
  static fromNothing() {
    const documentDefinition = DocumentDefinition.fromNothing(),
          name = documentRuleName,  ///
          ambiguous = false,
          definitions = [
            documentDefinition
          ],
          NonTerminalNode = DocumentBNFNode,  ///
          documentRule = new DocumentRule(name, ambiguous, definitions, NonTerminalNode);

    return documentRule;
  }
}
