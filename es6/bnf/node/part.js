'use strict';

const lexers = require('occam-lexers');

const bnfUtilities = require('../../utilities/bnf'),
      partUtilities = require('../../utilities/part'),
      arrayUtilities = require('../../utilities/array'),
      NonTerminalNode = require('../../common/node/nonTerminal'),
      OptionalPartPart = require('../part/nonTerminal/optionalPart'),
      GroupOfPartsPart = require('../part/nonTerminal/groupOfParts'),
      ChoiceOfPartsPart = require('../part/nonTerminal/choiceOfParts'),
      OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
      ZeroOrMorePartsPart = require('../part/nonTerminal/zeroOrMoreParts');

const { first, last } = arrayUtilities,
      { specialSymbols } = lexers,
      { isPartRuleNamePart } = partUtilities,
      { plus, asterisk, questionMark, exclamationMark } = specialSymbols,
      { isNodeQuantifiersNode, isNodeNoWhitespaceNode, quantifiersFromQuantifiersNode } = bnfUtilities;

class PartNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    let part = null;

    const childNodes = this.getChildNodes(),
          nodes = childNodes.slice(), ///
          quantifiers = quantifiersFromNodes(nodes),
          firstNodeNoWhitespaceNode = isFirstNodeNoWhitespaceNode(nodes);

    if (firstNodeNoWhitespaceNode) {
      nodes.shift();

      noWhitespace = true;
    }

    const nodesLength = nodes.length;
    
    if (nodesLength === 1) {
      const firstNode = first(nodes),
            node = firstNode;  ///

      part = partFromNode(node, noWhitespace);
    } else {
      part = partFromNodes(nodes);
    }
    
    part = partFromPartAndQuantifiers(part, quantifiers);

    return part;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(PartNode, ruleName, childNodes); }
}

module.exports = PartNode;

function quantifiersFromNodes(nodes) {
  let  quantifiers = [];

  const lastNode = last(nodes),
        lastNodeQuantifiersNode = isNodeQuantifiersNode(lastNode);

  if (lastNodeQuantifiersNode) {
    const quantifiersNode = lastNode;  ///

    quantifiers = quantifiersFromQuantifiersNode(quantifiersNode);
  }

  return quantifiers;
}

function isFirstNodeNoWhitespaceNode(nodes) {
  const firstNode = first(nodes),
        firstNodeNoWhitespaceNode = isNodeNoWhitespaceNode(firstNode);

  return firstNodeNoWhitespaceNode;
}

function partFromNode(node, noWhitespace) {
  const part = node.generatePart(noWhitespace);

  return part;
}

function partFromNodes(nodes) {
  let part = null;

  const choiceOfPartsPart = ChoiceOfPartsPart.fromNodes(nodes);

  if (choiceOfPartsPart !== null) {
    part = choiceOfPartsPart; ///
  } else {
    const groupOfPartsPart = GroupOfPartsPart.fromNodes(nodes);

    if (groupOfPartsPart !== null) {
      part = groupOfPartsPart;  ///
    }
  }

  return part;
}

function partFromPartAndQuantifiers(part, quantifiers) {
  const quantifiersLength = quantifiers.length;

  if (quantifiersLength > 0) {
    const quantifier = quantifiers.shift();

    if (quantifier === exclamationMark) {
      const partRuleNamePart = isPartRuleNamePart(part);

      if (partRuleNamePart) {
        const ruleNamePart = part,  ///
              lookAhead = true;

        ruleNamePart.setLookAhead(lookAhead);
      }
    } else {
      const sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifier(part, quantifier);

      part = sequenceOfPartsPart; ///
    }

    part = partFromPartAndQuantifiers(part, quantifiers);
  }

  return part;
}

function sequenceOfPartsPartFromPartAndQuantifier(part, quantifier) {
  let sequenceOfPartsPart;

  switch (quantifier) {
    case questionMark :
      const optionalPartPart = new OptionalPartPart(part);

      sequenceOfPartsPart = optionalPartPart; ///
      break;

    case plus :
      const oneOrMorePartsPart = new OneOrMorePartsPart(part);

      sequenceOfPartsPart = oneOrMorePartsPart; ///
      break;

    case asterisk :
      const zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

      sequenceOfPartsPart = zeroOrMorePartsPart;  ///
      break;
  }

  return sequenceOfPartsPart;
}
