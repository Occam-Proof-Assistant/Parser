"use strict";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../../common/node/terminal";

export default class SignificantTokenTypePart extends TerminalPart {
  constructor(significantTokenType) {
    super();
    
    this.significantTokenType = significantTokenType;
  }

  parse(context) {
    let terminalNode = null;
    
    const savedIndex = context.getSavedIndex(),
		      nextSignificantToken = context.getNextSignificantToken(),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const significantTokenType = significantToken.getType(),
            parsed = (significantTokenType === this.significantTokenType);

      if (parsed) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }
    }

    if (terminalNode === null) {
      context.backtrack(savedIndex);
    }

    return terminalNode;
  }

  asString() {
    const string = `[${this.significantTokenType}]`;
    
    return string;
  }

  clone() { return super.clone(SignificantTokenTypePart, this.significantTokenType); }
}
