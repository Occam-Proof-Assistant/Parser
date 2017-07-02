'use strict';

const arrayUtil = require('../util/array'),
      RuleNamePart = require('./part/ruleName');

class Definition {
  constructor(parts) {
    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  getFirstPart() {
    const firstPart = arrayUtil.first(this.parts);

    return firstPart;
  }

  getPartsLength() {
    const partsLength = this.parts.length;

    return partsLength;
  }

  getAllButFirstParts() {
    const allButFirstParts = this.parts.slice(1);

    return allButFirstParts;
  }

  isFirstPartRuleNamePart() {
    const firstPart = this.getFirstPart(),
          firstPartRuleNamePart = (firstPart instanceof RuleNamePart);

    return firstPartRuleNamePart;
  }

  parse(context, noWhitespace) {
    let nodes = [];

    const savedIndex = context.savedIndex(),
          everyPartParsed = this.parts.every(function(part) {
            const partNodeOrNodes = part.parse(context, noWhitespace),
                  partParsed = (partNodeOrNodes !== null);

            if (partParsed) {
              nodes = nodes.concat(partNodeOrNodes);

              noWhitespace = false;
            }

            return partParsed;
          });

    if (!everyPartParsed) {
      context.backtrack(savedIndex);

      nodes = null;
    }

    return nodes;
  }

  toString() {
    const partsString = this.parts.reduce(function(partsString, part) {
          const partString = part.toString();

          if (partsString === null) {
            partsString = partString;
          } else {
            partsString = `${partsString} ${partString}`;
          }

          return partsString;
        }, null),
        string = partsString; ///

    return string;
  }
}

module.exports = Definition;