/*
asynchronous operations or asynchronous programming --      

asynchronous programming allows a program to work on multiple tasks simultaneously instead of completing one task before moving on to the next one. This can make the program get more things done in a shorter amount of time.

In JavaScript, a promise is a good way to
handle asynchronous operations. It is used
to find out if the asynchronous operation is
successfully completed or not.

A promise may have one of three states.

* Pending
* Fulfilled
* Rejected


Creating a Promise --

To create a promise object, we use the Promise() constructor.


The Promise() constructor takes a function as an argument. The function also
accepts two functions resolve() and reject().
If the promise returns successfully, the resolve() function is called. And, if an
error occurs, the reject() function is called.

Using / calling a promise --

1. then() method
The then() method is used with the callback when the promise is successfully fulfilled or resolved.

2. The catch() method
The catch() method is used with the callback when the promise is rejected or if an error occurs.

3. The finally() method
The finally() method gets executed when the promise is either resolved successfully or rejected.

*/



// sample -- creating promise


const Ticket = new Promise(function (resolve,reject){
    const isBoarded = true;
    if(isBoarded){
        resolve("You are  in the flight .")
    }else{
        reject("Your flight has been cancelled")
    }
})

// using promise

Ticket.then((data)=>{
    console.log('wohoo',data);
}).catch((data)=>{
    console.log("oh no",data)
}).finally(()=>{
    console.log("thanks.")
});

// this above promise is synchronous in nature