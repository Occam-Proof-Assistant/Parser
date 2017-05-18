'use strict';

const grammar = `

    document                                                      ::=   header? verticalSpace? body?
                                              
                                              
                                              
    header                                                        ::=   includeDirective+
    
    includeDirective                                              ::=   'include'<NO_WHITESPACE>'('<NO_WHITESPACE>[string]<NO_WHITESPACE>')' <END_OF_LINE>
                                              
        
                                              
    body                                                          ::=   part+  
        
    part                                                          ::=   type(s)Declaration
    
                                                                    |   typedConstructor(s)Declaration 
                                                        
                                                                    |   (typed)Variable(s)Declaration
                                                        
                                                                    |   (qualified)Metavariable(s)Declaration

                                                                    |   rule 
                                                        
                                                                    |   axiom
                                                         
                                                                    |   theorem 
                                                        
                                                                    |   lemma 
                                                        
                                                                    |   verticalSpace 
                                                        
                                                                    |   error
                                                        
                                                        
                                                        
    type(s)Declaration                                            ::=   typesDeclaration | typeDeclaration 
    
    typedConstructor(s)Declaration                                ::=   typedConstructorsDeclaration | typedConstructorDeclaration 
    
    (typed)Variable(s)Declaration                                 ::=   (typed)VariableDeclaration | (typed)VariablesDeclaration
    
    (qualified)Metavariable(s)Declaration                         ::=   (qualified)MetavariablesDeclaration | (qualified)MetavariableDeclaration

    rule                                                          ::=   'Rule' parenthesisedLabelList? <END_OF_LINE> premise(s)? conclusion proof?
    
    axiom                                                         ::=   'Axiom' parenthesisedLabelList? <END_OF_LINE> premise(s)? conclusion
    
    theorem                                                       ::=   'Theorem' parenthesisedLabelList? <END_OF_LINE> premise(s)? conclusion proof?
        
    lemma                                                         ::=   'Lemma' parenthesisedLabelList? <END_OF_LINE> premise(s)? conclusion proof?



    typesDeclaration                                              ::=   'Types' typeList
    
    typeDeclaration                                               ::=   'Type' type
    
    typeList                                                      ::=   type<NO_WHITESPACE>commaThenType*
    
    commaThenType                                                 ::=   ','<NO_WHITESPACE>type
    
    type                                                          ::=   typeName

    typeName                                                      ::=   [unassigned]

    
    
    typedConstructorsDeclaration                                  ::=   'Constructors' typedConstructorList
    
    typedConstructorDeclaration                                   ::=   'Constructor' typedConstructor

    typedConstructorList                                          ::=   typedConstructor<NO_WHITESPACE>commaThenTypedConstructor*
    
    commaThenTypedConstructor                                     ::=   ','<NO_WHITESPACE>typedConstructor
    
    typedConstructor                                              ::=   constructor<NO_WHITESPACE>':'<NO_WHITESPACE>type
    
    constructor                                                   ::=   constructorName<NO_WHITESPACE>parenthesisedTypeList?
    
    parenthesisedTypeList                                         ::=   '('<NO_WHITESPACE>typeList<NO_WHITESPACE>')'

    constructorName                                               ::=   [unassigned]



    (typed)VariablesDeclaration                                   ::=   'Variables' (typed)VariableList
    
    (typed)VariableDeclaration                                    ::=   'Variable' (typed)Variable

    (typed)VariableList                                           ::=   (typed)Variable<NO_WHITESPACE>commaThen(typed)Variable*
    
    commaThen(typed)Variable                                      ::=   ','<NO_WHITESPACE>(typed)Variable
    
    (typed)Variable                                               ::=   typedVariable | variable
    
    typedVariable                                                 ::=   variable<NO_WHITESPACE>':'<NO_WHITESPACE>type
    
    variable                                                      ::=   variableName
    
    variableName                                                  ::=   [unassigned]
    
    
    
    (qualified)MetavariablesDeclaration                           ::=   'Metavariables' (qualified)MetavariableList
    
    (qualified)MetavariableDeclaration                            ::=   'Metavariable' (qualified)Metavariable
    
    (qualified)MetavariableList                                   ::=   (qualified)Metavariable<NO_WHITESPACE>commaThen(qualified)Metavariable+

    commaThen(qualified)Metavariable                              ::=   ','<NO_WHITESPACE>(qualified)Metavariable

    (qualified)Metavariable                                       ::=   qualifiedMetavariable | metavariable
    
    qualifiedMetavariable                                         ::=   metavariable<NO_WHITESPACE>parenthesisedType?

    metavariable                                                  ::=   metavariableName

    parenthesisedType                                             ::=   '('<NO_WHITESPACE>type<NO_WHITESPACE>')'
    
    metavariableName                                              ::=   [unassigned]
    
    

    parenthesisedLabelList                                        ::=   '('<NO_WHITESPACE>labelList<NO_WHITESPACE>')'
    
    labelList                                                     ::=   label<NO_WHITESPACE>commaThenLabel*
    
    commaThenLabel                                                ::=   ','<NO_WHITESPACE>label
    
    
    
    premise(s)                                                    ::=   premise | premises
    
    premise                                                       ::=   'Premise' <END_OF_LINE> unjustifiedStatementOrUnknown
    
    premises                                                      ::=   'Premises' <END_OF_LINE> unjustifiedStatementOrUnknown unjustifiedStatementOrUnknown+
    
    conclusion                                                    ::=   'Conclusion' <END_OF_LINE> (un)justifiedStatementOrUnknown
    


    proof                                                         ::=   'Proof' <END_OF_LINE> (abridged)ProofDerivation
    
    (abridged)ProofDerivation                                     ::=   proofDerivation | abridgedProofDerivation
    
    abridgedProofDerivation                                       ::=   (un)justifiedStatementOrUnknown
    
    proofDerivation                                               ::=   derivation therefore
    
    derivation                                                    ::=   subDerivation+    
    
    therefore                                                     ::=   'Therefore' <END_OF_LINE> (un)justifiedStatementOrUnknown
    
    subDerivation                                                 ::=   subLemma | (un)justifiedStatementOrUnknown
    
    
    
    subLemma                                                      ::=   suppose then? hence unjustifiedStatementOrUnknown? verticalSpace?    
    
    suppose                                                       ::=   'Suppose' <END_OF_LINE> unjustifiedStatementOrUnknown+
    
    then                                                          ::=   'Then' <END_OF_LINE> derivation
    
    hence                                                         ::=   'Hence' <END_OF_LINE> (un)justifiedStatementOrUnknown
    
    
    
    (un)justifiedStatementOrUnknown                               ::=   justifiedStatement | unjustifiedStatement | unknown
    
    unjustifiedStatementOrUnknown                                 ::=   unjustifiedStatement | unknown
    
    unjustifiedStatement                                          ::=   statement <END_OF_LINE>
    
    justifiedStatement                                            ::=   statement justification <END_OF_LINE>
      
    justification                                                 ::=   byOrFrom label
     
    byOrFrom                                                      ::=   'by' | 'from'
     
    

    unknown                                                       ::=   unassignedOrSpecial+ <END_OF_LINE>

    unassignedOrSpecial                                           ::=   [unassigned] | [special]



    statement                                                     ::=   typeAssertion | equality    
    
    
    
    typeAssertion                                                 ::=   expression ':' type
    
    equality                                                      ::=   expression '=' expression

    
    
    expression                                                    ::=   term
    
    

    term                                                          ::=   compoundTerm | variableName | constructorName
    
    compoundTerm                                                  ::=   constructorName<NO_WHITESPACE>'('<NO_WHITESPACE>termList<NO_WHITESPACE>')'
    
    termList                                                      ::=   term<NO_WHITESPACE>commaThenTerm*
    
    commaThenTerm                                                 ::=   ','<NO_WHITESPACE>term
    
    

    label                                                         ::=   [unassigned]
    
    

    verticalSpace                                                 ::=   <END_OF_LINE>+
    
    
    
    error                                                         ::=   *
    
`;

module.exports = grammar;
