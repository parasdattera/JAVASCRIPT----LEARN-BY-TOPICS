/*
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:

    1. When an event occurs (when a user clicks a button)
    2. When it is invoked (called) from JavaScript code
    3. Automatically (self invoked)

*/

function firstfunction(){  // simple function without parameters
    console.log("printing first function")
}

firstfunction()

function secondfunction(a,b){ // function with parameters
    c=a+b;
    console.log(c);
}

secondfunction(3,4)

function thirdfunction(a=0,b=0){ // function with default parameters
    c=2*(a+b);
    console.log(c);
}

thirdfunction(3)

// second way of defining function using const,let,var keyword but in this case let and const do not hoist as undefined to the top of their block scope.
const printme=function() {
    console.log("printing..");
}
printme()
let printme2=function(){
    console.log("printing2..")
}
printme2()
var printme3=function(){
    console.log("printing3...")
}
printme3()




//                function with rest parameters 
//  rest parameters -     ...paremeter_name 
//a function can only have one rest parameter and it should be last parameter in the parameter list like (a,b,c,...d)
// a rest parameter can take infinite arguments and store them in an array

function fourthfunctino(a,...b){
    console.log(a + ","+b);       
}

fourthfunctino(1,2,3,4,5,6)


