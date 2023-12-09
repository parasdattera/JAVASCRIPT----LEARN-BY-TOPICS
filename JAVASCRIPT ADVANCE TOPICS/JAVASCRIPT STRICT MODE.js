/*

"use strict"; Defines that JavaScript code should be executed in "strict mode".

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

With strict mode, you can not, for example, use undeclared variables.

means while declaring variable we need to define the type

also without using strict mode javascript cannot find the syntax and semantics errors 
such as using same name variable so thats why strict mode is very useful while working on big projects

*/

// "use strict";
// x = 3.14;       // This will cause an error because x is not declared


// sample -- using same name variable without strict mode will not give any error but produce wrong calculations
// function test(a,b,b){
//     console.log(a +b +b);
// }

// test(1,2,3)


// below code will give error that you are using same name variable
"use strict";
function test1(a,b,b){
    console.log(a +b +b);
}

test1(1,2,3)