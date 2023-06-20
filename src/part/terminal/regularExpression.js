"use strict";

import { arrayUtilities } from "necessary";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

const { first } = arrayUtilities;

export default class RegularExpressionPart extends TerminalPart {
  constructor(regularExpression) {
    super();

    this.regularExpression = regularExpression;
  }

  parse(nodes, state, callback, precedence) {
    let parsed;

    let terminalNode = null;
    
    const savedIndex = state.getSavedIndex(),
		      nextSignificantToken = state.getNextSignificantToken(),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const content = significantToken.getContent(),
            matches = content.match(this.regularExpression);

      if (matches !== null) {
        const firstMatch = first(matches);

        if (firstMatch === content) {
          terminalNode = TerminalNode.fromPrecedenceAndSignificantToken(precedence, significantToken);
        }
      }
    }

    parsed = (terminalNode !== null);

    if (parsed) {
      nodes.push(terminalNode);

      if (callback !== null) {
        parsed = callback(precedence);

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
    const regularExpressionString = this.regularExpression.toString(),
		      string = regularExpressionString; ///

    return string;
  }

  static fromRegularExpression(regularExpression) {
    const regularExpressionPart = new RegularExpressionPart(regularExpression);

    return regularExpressionPart;
  }
}
