'use strict';

const metastatement = `

     proofAssertion                       ::=   context "⊢" labelMetastatementPair ;
     
     contextDefinition                    ::=   context "=" ( context | labelMetastatementPair ) ( "," ( context | labelMetastatementPair ) )* ;

     labelMetastatementPair               ::=   label "::" metastatement ;

     subproof                             ::=   supposition "..." metastatement ;

     supposition                          ::=   "[" metastatement "]" ;



     metastatement                        ::=   proofAssertion
           
                                            |   contextDefinition
           
                                            |   subproof
                                            
                                            |   metavariable

                                            ;
      
`;

const statement = `

     typeAssertion                        ::=   expression ":" typeName ;

     equality                             ::=   expression "=" expression ;

     expression                           ::=   term ;



     statement                            ::=   typeAssertion 
                                                  
                                            |   equality 
                                                  
                                            |   expression
                                            
                                            ;

`;

const term = `

     term                                 ::=   compoundTerm 
     
                                            |   variable
                                            
                                            ;

`;

const defaultCustomGrammarBNFMap = {
  metastatement: metastatement,
  statement: statement,
  term: term
};

module.exports = defaultCustomGrammarBNFMap;
