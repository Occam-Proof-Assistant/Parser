# Parsers

The Occam proof assistant's parsers.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Examples](#examples)
- [Features](#features)
- [Building](#building)
- [Resources](#resources)
- [Contact](#contact)

## Introduction

There are three parsers in all:


* An [extended BNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) parser.
* A basic parser, for illustrative purposes, and for developing new grammars.
* The main parser, namely the parser for the extended BNF part of Occam's vernacular, called Florence.

All parsers share common patterns and functionality. The last two parse content according to productions defined in a variant of extended BNF. The extended BNF parser on the other hand has its productions hard-coded,  in line with the following grammar: 

      productions              ::=  production+ ;
      
      production               ::=  productionName "::=" definitions ";" ;
      
      definitions              ::=  definition ( "|" definition )* ;
      
      definition               ::=  part+ ;
      
      noWhitespacePart         ::=  "<NO_WHITESPACE>" part ;
    
      optionalPart             ::=  part<NO_WHITESPACE>"?" ;
                              
      zeroOrMoreParts          ::=  part<NO_WHITESPACE>"*" ;
                              
      oneOrMoreParts           ::=  part<NO_WHITESPACE>"+" ;
      
      groupOfParts             ::=  "(" part+ ")" ;
      
      choiceOfParts            ::=  "(" part ( "|" part )+ ")" ;
    
      part                     ::=  noWhitespacePart
                    
                                 |  optionalPart  
                    
                                 |  zeroOrMoreParts  
                    
                                 |  oneOrMoreParts  
                    
                                 |  groupOfParts  
                               
                                 |  choiceOfParts  
                               
                                 |  productionName  
                    
                                 |  regularExpression 
                    
                                 |  significantTokenType 
    
                                 |  terminalSymbol
                              
                                 |  endOfLine
                    
                                 |  epsilon
    
                                 |  wildcard
                                  
                                 ;
    
      productionName           ::=  [name] ;
    
      regularExpression        ::=  [regularExpression] ;
      
      significantTokenType     ::=  [type] ;
    
      terminalSymbol           ::=  [string] ;
      
      endOfLine                ::=  "<END_OF_LINE>" ;
      
      epsilon                  ::=  "ε" ;
    
      wildcard                 ::=  "." ;

This grammar is itself written in the variant of extended BNF it describes, as is usual.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-parsers

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone git@github.com:occam-proof-assistant/Parsers.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Examples

There are three examples, one for each parser. To view them, open the `index.html` file in the `examples` directory. Each example shows a representation of the parse tree, which is useful for writing and debugging grammars.

### Extended BNF example

Both the lexical grammar and extended BNF grammar textareas are read-only. The content textarea initially shows the extended BNF parser's own grammar and so the example demonstrates, initially at least, that the extended BNF parser can parse its own grammar. Other grammars can be substituted into the content textarea, the two obvious candidates being those for the basic and Florence parsers. 

### Basic example

Both the lexical and BNF grammars as well as the content can be changed. Here is the parse tree produced by the basic parser corresponding to the expression `1+(2/3)`, given the grammar in the introduction:

                           expression(1-1)                                                                              
                                  |                                                                                     
             -------------------------------------------                                                                
             |                                         |                                                                
         term(1-1)                             expression~(1-1)                                                         
             |                                         |                                                                
    naturalNumber(1-1)        --------------------------------------------------                                        
             |                |                                                |                                        
      1[terminal](1)    operator(1-1)                                   expression(1-1)                                 
                              |                                                |                                        
                       +[terminal](1)        ---------------------------------------------------------------------      
                                             |                             |                                     |      
                                      ([terminal](1)                expression(1-1)                       )[terminal](1)
                                                                           |                                            
                                                              ---------------------------                               
                                                              |                         |                               
                                                          term(1-1)             expression~(1-1)                        
                                                              |                         |                               
                                                     naturalNumber(1-1)        ------------------                       
                                                              |                |                |                       
                                                       2[terminal](1)    operator(1-1)   expression(1-1)                
                                                                               |                |                       
                                                                        /[terminal](1)      term(1-1)                   
                                                                                                |                       
                                                                                       naturalNumber(1-1)               
                                                                                                |                       
                                                                                         3[terminal](1)                 

### Florence example

This uses the [extended BNF grammar part](https://raw.githubusercontent.com/occam-proof-assistant/Parsers/master/es6/florence/grammar.js) of Occam's vernacular, called Florence. The following inference rule and proof from propositional logic should parse, for example:



## Features

### Operators

- `*` zero or more
- `+` one or more
- `?` optional

These bind tightly to symbols and can therefore be re-used as terminal symbols in their own right. Recall the grammar in the introduction, which re-uses `*` and `+` as terminal symbols.

### Regular expressions

A regular expression is distinguished by the usual leading and trailing forward slashes:

    /\d+/
    
### Matching significant token types

This can be done with a symbol that is identical to the significant token type in question, contained within square brackets:

    label                ::= [unassigned]

### Matching end of line tokens

This can be done with the `<END_OF_LINE>` special symbol:

    verticalSpace        ::=   <END_OF_LINE>+

The `<END_OF_LINE>` special symbol will bind more tightly to the symbol to its right than any operator.

### Matching no whitespace

This can be done with the `<NO_WHITESPACE>` special symbol:

    parenthesisedLabels  ::=   '('<NO_WHITESPACE>labels<NO_WHITESPACE>')'

The `<NO_WHITESPACE>` special symbol will also bind more tightly to the symbol to its right than any operator.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Resources

* [Gate Lectures on Compiler Design by Ravindrababu Ravula](https://www.youtube.com/watch?v=Qkwj65l_96I&list=PLEbnTDJUr_IcPtUXFy2b1sGRPsLFMghhS)
* [Eliminating left-recursion: three steps by Hudson Turner](http://www.d.umn.edu/~hudson/5641/l11m.pdf)
* [Notes on Formal Language Theory and Parsing by James Power](http://www.cs.nuim.ie/~jpower/Courses/Previous/parsing)
* [Eliminating ambiguity in context free grammars by Rasmus Ejlers Møgelberg](http://itu.dk/people/mogel/SPLC2012/lectures/eliminatingAmbiguity.pdf)
* [BNF and EBNF: What are they and how do they work? by Lars Marius Garshol](http://www.garshol.priv.no/download/text/bnf.html#id2.3.)
* [Compiler Theory: Syntax Analysis - Elimination of left recursion by Marc Moreno Maza](http://www.csd.uwo.ca/~moreno/CS447/Lectures/Syntax.html/node8.html)

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
