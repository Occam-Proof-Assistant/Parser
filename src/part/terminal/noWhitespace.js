"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import NoWhitespaceNode from "../../node/terminal/noWhitespace";

const { NO_WHITESPACE } = specialSymbols;

export default class NoWhitespacePart extends TerminalPart {
  isNoWhitespacePart() {
    const noWhitespacePart = true;

    return noWhitespacePart;
  }

  parse(nodes, state, callback) {
    let parsed;

    let noWhitespaceNode = null;

    const savedIndex = state.getSavedIndex(),
          nextTokenWhitespaceToken = state.isNextTokenWhitespaceToken();

    if (!nextTokenWhitespaceToken) {
      noWhitespaceNode = NoWhitespaceNode.fromNothing();
    }

    parsed = (noWhitespaceNode !== null)

    if (parsed) {
      nodes.push(noWhitespaceNode);

      if (callback !== null) {
        parsed = callback();

        if (!parsed) {
          nodes.pop();
        }
      }
    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

    return parsed;
  }

  asString() {
    const string = NO_WHITESPACE; ///

    return string;
  }

  clone() { return super.clone(NoWhitespacePart); }
}