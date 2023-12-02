/*
asynchronous operations or asynchronous programming --      

asynchronous programming allows a program to work on multiple tasks simultaneously instead of completing one task before moving on to the next one. This can make the program get more things done in a shorter amount of time.

Async-Await , setTimeout()  keywords are used while handling asynchronous programming which is advance of promise


*/


// sample synchronous code

console.log(1)
console.log(2)
console.log(3)

// sample asynchronous code

// using setTimeout method
console.log(1);
setTimeout(() => {
    console.log(2);
}, 1000);
console.log(3);