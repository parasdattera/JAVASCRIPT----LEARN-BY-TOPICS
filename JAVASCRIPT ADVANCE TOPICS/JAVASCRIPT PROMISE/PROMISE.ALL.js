/*
The Promise.all() method is actually a method of the Promise object (which is also an object under JavaScript used to handle all the asynchronous operations), that takes an array of promises(an iterable) as input. It returns a single Promise that resolves when all of the promises passed as an iterable, which have resolved, or when the iterable contains no promises. In a simple way, if any of the passed-in promises reject, the Promise.all() method asynchronously rejects the value of the promise that has already been rejected, whether or not the other promises have been resolved. 


Syntax: 

Promise.all( iterable )
*/

// sample

let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("The first promise is resolved");
        resolve(10);
    }, 1 * 1000);
});


let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("The second promise is rejected");
        reject("failed");
    }, 2 * 1000);
});


let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("The third promise is resolved");
        resolve(30);
    }, 3 * 1000);
});

var total = 0;
Promise.all([p1,p2,p3]).then((result)=>{

    for(var i in result) {total = total+result[i];}

    console.log(`results : ${result}`);
    console.log(`total: ${total}`)
}).catch((error)=>{
    console.log(`error : ${error}`)
});


// as one of the promise is rejected so only promise function is working and after that then function is not working instead catch function is working