/*
JavaScript variables can belong to the local or global scope.

Global variables can be made local (private) with closures.

Closure is most important feature of js

as it supports nested functions

as when creating multiple functions inside function the functions
inside function can use the local variable or global variables
and also if there are more values are needed as arguments in nested
functions then it will preserve the function values over time


*/


// sample

function outer(x){
    function inner(y){
        return x+y;
    }
    return inner;
}
const outerreturn = outer(10);  // x value will be taken
// the value will be preserve throught the program execution until all arguments are not passed
console.log(outerreturn()) // return Not-a-Number (NaN)
console.log(outerreturn(2)) // now y value will be taken and function will complete its code

