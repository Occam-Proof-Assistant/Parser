"use strict";

import { BasicLexer } from "occam-lexers";
import { BasicParser } from "../../index";  ///

import View from "../view";

export default class BasicView extends View {
  Lexer = class extends BasicLexer {
    static entries = entries;
  };

  Parser = class extends BasicParser {
    static bnf = bnf;
  };

  heading = "Basic parser example";

  initialContent = `X 
          
          c 
          d 
          
    EOL
    
    
   `; ///"(1+2)/3";

  static defaultProperties = {
    className: "basic"
  };
}

const entries = [

  { "bracket": "^(?:\\(|\\))" },

  { "special": "^(?:=>|EOL|EOF)" },

  { "unassigned": "^." }

];

const bnf = `

  unqualifiedStatement ::= "X" _statement! "EOL" ;

  _statement           ::=  ( dummy "d" ) ;

  dummy                 ::= .* ; 

`;
