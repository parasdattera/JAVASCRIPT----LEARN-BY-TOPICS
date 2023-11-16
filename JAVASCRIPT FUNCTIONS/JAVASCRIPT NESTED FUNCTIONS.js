/*
nested functions means functions inside the function 

js support nested functions and function which is inside the function 

can only access by the function in which it is present
*/

// sample

function outer(){
    console.log("outer function invoked!")
    function inner(){
        console.log("inner function invoked!")
    }
    inner()
}

outer()