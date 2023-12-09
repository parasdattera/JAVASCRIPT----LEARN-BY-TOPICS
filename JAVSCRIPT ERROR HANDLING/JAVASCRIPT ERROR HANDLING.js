/*

JavaScript is a loosely-typed language. It does not give compile-time errors. So some times you will get a runtime error for accessing an undefined variable or calling undefined function etc.

try catch does not handle syntax errors.
only complie time errors


syntax --


try
{
    // code that may throw an error
}
catch(ex)
{
    // code to be executed if an error occurs
}
finally{
    // code to be executed regardless of an error occurs or not
}


*/


// sample  -- try catch

try
{
    var result  =  Sum(10, 20); // Sum is not defined yet
}
catch(ex)
{
    console.log(ex);
}



// sample  -- try catch finally

try
{
     var result  =  Sum(10, 20); // Sum is not defined yet
}
catch(ex)
{
    console.log(ex);
}
finally{
    console.log("Finally code ");
}



// throw -- for custom error

try
{
    throw "Error occurred";
}
catch(ex)
{
    console.log(ex);
}



// try catch error handling does work synchrnonously so setTimeout function will not work properly but we can use try catch inside setTimeout function

// sample -- using try catch inside setTimeout

setTimeout(()=>{
    try{
        blabla;
    }catch(er){
        console.log("Error has occurred.");
    }

},2000);



// error handling methods -- name , message , stack

// sample 

try{
    blabla;
}catch(er){
    console.log(er.name); // returns name of the error
    console.log(er.message); // returns message of the error
    console.log(er.stack); // complete info of error
}




