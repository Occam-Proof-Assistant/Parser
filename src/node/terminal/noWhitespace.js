"use strict";

import TerminalNode from "../terminal";
import NoWhitespaceNodeParseTree from "../../parseTree/noWhitespaceNode";

import { EMPTY_STRING } from "../../constants";

export default class NoWhitespaceNode extends TerminalNode {
  getType() {
    const type = null;  ///

    return type;
  }

  getContent() {
    const content = EMPTY_STRING;

    return content;
  }

  isNoWhitespaceNode() {
    const noWhitespaceNode = true;

    return noWhitespaceNode;
  }

  asParseTree(tokens) {
    const noWhitespaceNodeParseTree = NoWhitespaceNodeParseTree.fromNothing(),
          parseTree = noWhitespaceNodeParseTree;  ///

    return parseTree;
  }

  match(node) {
    let matches = false;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            terminalNodeNoWhitespaceNode = terminalNode.isNoWhitespaceNode();

      if (terminalNodeNoWhitespaceNode) {
        matches = true;
      }
    }

    return matches;
  }

  clone() {
    const noWhitespaceNode = NoWhitespaceNode.fromNothing();

    return noWhitespaceNode;
  }

  static fromNothing() {
    const significantToken = null,
          noWhitespaceNode = TerminalNode.fromSignificantToken(NoWhitespaceNode, significantToken);

    return noWhitespaceNode;
  }
}
