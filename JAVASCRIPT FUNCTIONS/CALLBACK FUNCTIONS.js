/*
In JavaScript, functions are objects. Can we pass objects to functions as parameters? Yes.

So, we can also pass functions as parameters to other functions and call them inside the outer functions.

*/
let a =100;
let b=200;

function print(callback) {      // taking function as argument
    callback();  // and we can just call the function as per need
}


//calling print function
print(
    function callback(){
        console.log("Hello World")
        console.log(c=a+b)
        
    }
)

function named(){
    console.log("named function")
}

print(named);