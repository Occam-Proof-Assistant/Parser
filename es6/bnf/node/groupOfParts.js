'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class GroupOfPartsNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, GroupOfPartsNode); }
}

module.exports = GroupOfPartsNode;
