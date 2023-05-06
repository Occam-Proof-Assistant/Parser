"use strict";

import { specialSymbols } from "occam-lexers";

import NonTerminalPart from "../../part/nonTerminal";

import { push } from "../../utilities/array";
import { OneOrMorePartsPartType } from "../../partTypes";

const { plus } = specialSymbols;

export default class OneOrMorePartsPart extends NonTerminalPart {
  constructor(part) {
    const type = OneOrMorePartsPartType; ///

    super(type);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  asString() {
    const partString = this.part.asString(),
          string = `${partString}${plus}`;

    return string;
  }

  parse(nodes, state, callback) {
    let parsed;

    const part = this.getPart(),
          partNodes = [],
          savedIndex = state.getSavedIndex();

    parsed = parsePart(part, partNodes, state, callback);

    if (parsed) {
      push(nodes, partNodes);
    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

    return parsed;
  }
}

function parsePart(part, nodes, state, callback) {
  let parsed;

  if (callback !== null) {
    parsed = part.parse(nodes, state, () => {
      let parsed = callback();

      if (!parsed) {
        parsed = parsePart(part, nodes, state, callback);
      }

      return parsed;
    });
  } else {
    parsed = part.parse(nodes, state, callback);

    if (parsed) {
      parsePart(part, nodes, state, callback)
    }
  }

  return parsed;
}
