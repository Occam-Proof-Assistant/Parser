'use strict';

const grammar = `

 expression               ::=  expression '+' term | term

 term                     ::=  naturalNumber

 naturalNumber            ::=  /\\d+/


`;

module.exports = grammar;

/*

 A ::= A 'a' | B 'b' | 'd'

 B ::= C 'c'

 C ::= A 'e' | B 'f'




 A ::= B | 'a'

 B ::= C | 'b' 'c'

 C ::= 'd' 'e' | A








 A ::= B | 'a'

 B ::= C 'b' | 'c'

 C ::= d | A 'e'






 S ::= X 'b' | Y

 Y ::= X | 'a'

 X ::= S | 'c'





 A1 ::= A2 'a' | 'b'

 A2 ::= A1 'c' | 'd'






 expression               ::=  term operatorThenTerm*
  
  operatorThenTerm         ::=  operator term
  
  operator                 ::=  '+' | '-' | '*' | '/'
  
  term                     ::=  naturalNumber | parenthesizedExpression
  
  naturalNumber            ::=  /\\d+/
  
  parenthesizedExpression  ::=  '(' expression ')'

*/
