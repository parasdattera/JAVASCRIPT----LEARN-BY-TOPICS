/*

in promise we need to create resolve and reject function everytime we create it so thats the main reason for using async function it returns promise and we can just use then or catch for handling promise without creating resove and reject function

An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.

*/

// samle -- async

// async function test(){
//     return "Test is working" ;
// }

// test().then((result)=>{
//     console.log(result)

// }).catch((error)=>{
//     console.log(error)
// })


/*

await method is work only with async function it is used to give asynchronous nature to async function , to use it we just need to use this in any line of code in inside of the async function , by using this when we calling that async function only the code till await method and the line where it is used will get executed after that function will be paused and return to the next line where the function was called and execute the rest of the program and once all done it will presume the paused function and continue till another await method or last code of function and it goes on and on

*/


// sample without await -- without await all code inside function will be get executed

// async function test1(){
//     console.log("1")
//     console.log("2")
//     console.log("3")
//     console.log("4")
// }

// test1().then(()=>{
//     console.log("Executtion completed.")
// }).catch(()=>{
//     console.log("Execution failed.")
// })


// sample same code with await -- with await all code inside function will be get executed based on where await is used , 



// async function test1(){
//     console.log("1");
//     await console.log("2");
//     console.log("3");
//     console.log("4");
// }

// test1();
// console.log("5");


// real life sample -- we can use async await in real life programs while working with apis as getting data from server can take time so to cover that amount of time and processes we use async and await 


// sample -- getting data from api/url/local file

async function test2(){
    console.log("2"); // 3 execution
    const response = await fetch("data.json"); // 4 execution
    console.log("2") // 8 execution
    const students = await response.json(); // 9 execution
    return students; // 10 execution
}

console.log("1"); // 1 execution
let a = test2(); // 2 execution - async function will be called
console.log("3"); // 5 execution

console.log(a);  // 6 execution -- print the result of async function

console.log("4"); // 7 execution 