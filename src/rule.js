"use strict";

import { specialSymbols } from "occam-lexers";

import { EMPTY_STRING } from "./constants";
import { paddingFromPaddingLength } from "./utilities/string";

const { exclamationMark } = specialSymbols;

export default class Rule {
  constructor(name, ambiguous, definitions, NonTerminalNode) {
    this.name = name;
    this.ambiguous = ambiguous;
    this.definitions = definitions;
    this.NonTerminalNode = NonTerminalNode;
  }

  getName() {
    return this.name;
  }

  isAmbiguous() {
    return this.ambiguous;
  }

  getDefinitions() {
    return this.definitions;
  }

  getNonTerminalNode() {
    return this.NonTerminalNode;
  }

  parse(nodes, state, callback, callAhead) {
    let parsed = false;

    const savedPrecedence = state.getSavedPrecedence();

    this.definitions.some((definition) => {
      const ruleName = this.name, ///
            childNodes = [],
            nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);

      Object.assign(childNodes, {
        ruleName
      });

      const node = nonTerminalNode, ///
            precedence = definition.getPrecedence();

      nodes.push(node);

      state.setPrecedence(precedence);

      parsed = definition.parse(childNodes, state, () => {
        let parsed;

        const precedence = state.getPrecedence();

        nonTerminalNode.setPrecedence(precedence);

        nonTerminalNode.rewrite();

        parsed = true;

        if (parsed) {
          const empty = nonTerminalNode.isEmpty();

          if (empty) {
            parsed = false;
          }
        }

        if (parsed) {
          const unprecedented = nonTerminalNode.isUnprecedented();

          if (unprecedented) {
            parsed = false;
          }
        }

        if (parsed) {
          if (callAhead !== null) {
            state.resetPrecedence(savedPrecedence);

            parsed = callAhead();
          }
        }

        if (!parsed) {
          nonTerminalNode.unrewrite();
        }

        return parsed;
      }, callAhead);

      if (!parsed) {
        nodes.pop();
      }

      if (parsed) {
        return true;
      }
    });

    if (callAhead === null) {
      state.resetPrecedence(savedPrecedence);
    }

    return parsed;
  }

  asString(maximumRuleNameLength, multiLine = true) {
    const definitionsLength = this.definitions.length;

    multiLine = multiLine && (definitionsLength > 1);  ///

    const maximumPadding = paddingFromPaddingLength(maximumRuleNameLength),
          definitionsString = this.definitions.reduce((definitionsString, definition) => {
            const definitionString = definition.asString();

            if (definitionsString === EMPTY_STRING) {
              definitionsString = definitionString; ///
            } else {
              definitionsString = multiLine ?
                                   `${definitionsString}

${maximumPadding}   | ${definitionString}` :
                                     `${definitionsString} | ${definitionString}`;
            }

            return definitionsString;
          }, EMPTY_STRING),
          ruleName = this.name, ///
          ruleNameLength = ruleName.length,
          ambiguousString = this.ambiguous ?
                              exclamationMark :
                                EMPTY_STRING,
          ambiguousStringLength = ambiguousString.length,
          paddingLength = maximumRuleNameLength - ruleNameLength - ambiguousStringLength,
          padding = paddingFromPaddingLength(paddingLength);

    const semicolonString = multiLine ?
                             `

${maximumPadding}   ;` :
                               " ;",
          string = `

${this.name}${ambiguousString}${padding} ::= ${definitionsString}${semicolonString}`;

    return string;
  }

  static fromNameAmbiguousDefinitionsAndNonTerminalNode(Class, name, ambiguous, definitions, NonTerminalNode) {
    if (NonTerminalNode === undefined) {
      NonTerminalNode = definitions;  ///

      definitions = ambiguous;  ///

      ambiguous = name; ///

      name = Class; ///

      Class = Rule; ///
    }

    const rule = new Class(name, ambiguous, definitions, NonTerminalNode);

    return rule;
  }
}
