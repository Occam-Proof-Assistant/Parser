"use strict";

import TerminalNodeParseTree from "../parseTree/terminalNode";

export default class TerminalNode {
  constructor(significantToken) {
    this.significantToken = significantToken;
  }

  getSignificantToken() {
    return this.significantToken;
  }

  getFirstSignificantToken() {
    const firstSignificantToken = this.significantToken;  ///

    return firstSignificantToken;
  }

  getLastSignificantToken() {
    const lastSignificantToken = this.significantToken;  ///

    return lastSignificantToken;
  }

  isNoWhitespaceNode() {
    const noWhitespaceNode = false;

    return noWhitespaceNode;
  }

  isEpsilonNode() {
    const epsilonNode = false;

    return epsilonNode;
  }

  isTerminalNode() {
    const terminalNode = true;
    
    return terminalNode;
  }

  isNonTerminalNode() {
    const nonTerminalNode = false;

    return nonTerminalNode;
  }

  getType() { return this.significantToken.getType(); }

  getContent() { return this.significantToken.getContent(); }

  isEqualTo(node) {
    let equalTo = false;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            nodeSignificantToken = terminalNode.getSignificantToken();

      if (nodeSignificantToken === this.significantToken) {
        equalTo = true;
      }
    }

    return equalTo;
  }

  setSignificantToken(significantToken) {
    this.significantToken = significantToken;
  }

  asParseTree(tokens, abridged = false) {
    const terminalNode = this,  ///
          terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNodeTokensAndAbridged(terminalNode, tokens, abridged),
          parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }

  match(node) {
    let matches = false;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            terminalNodeEpsilonNode = terminalNode.isEpsilonNode(),
            terminalNodeNoWhitespaceNode = terminalNode.isNoWhitespaceNode();

      if (!terminalNodeEpsilonNode && !terminalNodeNoWhitespaceNode) {
        const significantToken = terminalNode.getSignificantToken();

        matches = this.significantToken.match(significantToken);
      }
    }

    return matches;
  }

  static fromSignificantToken(Class, significantToken) {
    if (significantToken === undefined) {
      significantToken = Class; ///

      Class = TerminalNode; ///
    }

    const terminalNode = new Class(significantToken);
    
    return terminalNode;
  }
}
