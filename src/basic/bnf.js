"use strict";

const bnf = `

        term  ::=  "1"

                   (

                     ( "+" "2" "/" )   (4)

                     |

                     "+"               (0)

                   )

                   term

                |  "2" "/" "3"         (1)

                |  "3"                 (3)

                ;
   
`;

export default bnf;
