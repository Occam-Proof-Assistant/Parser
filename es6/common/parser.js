'use strict';

const Context = require('./context'),
      arrayUtil = require('../util/array'),
      parserUtil = require('../util/parser');

class CommonParser {
  constructor(productions) {
    this.productions = productions;
  }

  getProductions() {
    return this.productions;
  }
  
  nodeFromLines(lines, production) {
    const tokens = parserUtil.tokensFromLines(lines),
          node = this.parse(tokens, production);
    
    return node;
  }

  parse(tokens, production = null) {
    let node = null;

    if (production === null) {
      const productionsLength = this.productions.length;

      if (productionsLength > 0) {
        const firstProduction = arrayUtil.first(this.productions);

        production = firstProduction; ///
      }
    }

    if (production !== null) {
      const context = new Context(tokens, this.productions),
            noWhitespace = false, ///
            nodeOrNodes = production.parse(context, noWhitespace);

      if (nodeOrNodes !== null) {
        node = (nodeOrNodes instanceof Array) ?
                 arrayUtil.first(nodeOrNodes) :
                   nodeOrNodes;
      }
    }

    return node;
  }
  
  toString() {
    const maximumProductionNameLength = this.productions.reduce(function(maximumProductionNameLength, production) {
            const productionName = production.getName(),
                  productionNameLength = productionName.length;
  
            maximumProductionNameLength = Math.max(maximumProductionNameLength, productionNameLength);
  
            return maximumProductionNameLength;
          }, 0),
          string = this.productions.reduce(function(string, production) {
            const productionString = production.toString(maximumProductionNameLength);
  
            string += productionString;
  
            return string;
          }, '');
    
    return string;
  }

  findProduction(productionName) {
    const productions = this.getProductions();

    return parserUtil.findProduction(productionName, productions);
  }
}

module.exports = CommonParser;
