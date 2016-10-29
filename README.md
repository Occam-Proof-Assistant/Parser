# Parser

The Occam proof assistant's parser.

Reads a variant of extended [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) and parses streams of tokens provided by Occam's [lexers](https://github.com/occam-proof-assistant/Lexers) accordingly. The following, taken from the basic example, shows the some of the extended BNF that it can read:

      expr                       ::= term operatorThenTerm*

      operatorThenTerm           ::= operator term

      operator                   ::= + | - | * | /

      term                       ::= naturalNumber

                                   | parenthesizedExpr

      naturalNumber              ::= /\\d+/

      parenthesizedExpr          ::= ( expr )

Note that grouping is not allowed. You cannot do this:

      expr                       ::= term (operator term)*

You have to do this:

      expr                       ::= term operatorThenTerm*

      operatorThenTerm           ::= operator term

One reason for this is to keep both the BNF parser and the BNF lexer from the Lexers project as simple as possible. The other reason is that terminal symbols aren't quoted, and therefore the `(` and `)` characters aren't reserved. By not quoting terminal symbols the BNF becomes easier to read and write, although a regular expression pattern defining the terminal symbols must be provided to the parser in order to allow it to distinguish terminal symbols in the absence of quotes.

## Resources

* [Gate lectures by Ravindrababu Ravula on Compiler Design](https://www.youtube.com/watch?v=Qkwj65l_96I&list=PLEbnTDJUr_IcPtUXFy2b1sGRPsLFMghhS)
* [Introduction to Grammar and Parsing using the Recursive Descent Parser algorithm ACT talk by Eric Nielsen](https://www.youtube.com/watch?v=9jSSSE2FuLU)
* [Eliminating ambiguity in context free grammars by Rasmus Ejlers Møgelberg](http://itu.dk/people/mogel/SPLC2012/lectures/eliminatingAmbiguity.pdf)
* [BNF and EBNF: What are they and how do they work? by Lars Marius Garshol](http://www.garshol.priv.no/download/text/bnf.html#id2.3.)
* [The Gallina specification language](https://coq.inria.fr/refman/Reference-Manual003.html)

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com
