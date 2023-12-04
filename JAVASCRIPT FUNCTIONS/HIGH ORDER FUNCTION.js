/*

HOF -- regular or normal function that takes one or more function as argument and or returns a function 

requirements:-
It takes one or more functions as argument or function return another function even without taking any argument

It may return a function

*/

// sample


function getcapture(camera){ // function taking argument which is another function
    return camera();  
}

getcapture(function(){
    console.log("cannon")
})


function returnFn(){ // creating anonymous function
    return function(){
        console.log('returning')
    }
}

const fu=returnFn();

fu();


