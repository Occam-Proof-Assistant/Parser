"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import NoWhitespaceNode from "../../../common/node/terminal/noWhitespace";

const { NO_WHITESPACE } = specialSymbols;

class NoWhitespacePart extends TerminalPart {
  parse(configuration) {
    let noWhitespaceNode = null;

    const savedIndex = configuration.getSavedIndex(),
          nextToken = configuration.getNextToken(),
          token = nextToken; ///

    if (token !== null) {
      const tokenWhitespaceToken = token.isWhitespaceToken();

      if (!tokenWhitespaceToken) {
        noWhitespaceNode = NoWhitespaceNode.fromNothing();
      }
    }

    configuration.backtrack(savedIndex);

    return noWhitespaceNode;
  }

  asString() {
    const string = NO_WHITESPACE; ///

    return string;
  }

  clone() { return super.clone(NoWhitespacePart); }
}

module.exports = NoWhitespacePart;
