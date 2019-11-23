'use strict';

const TerminalPart = require('../../part/terminal'),
      TerminalNode = require('../../../common/node/terminal');

class SignificantTokenTypePart extends TerminalPart {
  constructor(significantTokenType) {
    super();
    
    this.significantTokenType = significantTokenType;
  }

  parse(configuration) {
    let terminalNode = null;
    
    const savedIndex = configuration.getSavedIndex(),
		      nextSignificantToken = configuration.getNextSignificantToken(),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const significantTokenType = significantToken.getType(),
            parsed = (significantTokenType === this.significantTokenType);

      if (parsed) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }
    }

    if (terminalNode === null) {
      configuration.backtrack(savedIndex);
    }

    return terminalNode;
  }

  asString() {
    const string = `[${this.significantTokenType}]`;
    
    return string;
  }

  clone() { return super.clone(SignificantTokenTypePart, this.significantTokenType); }
}

module.exports = SignificantTokenTypePart;
