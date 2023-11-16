/*
A variable in JavaScript is a container that can hold a value such as a number, some text string, an element in the DOM, a function, an object, or anything.

In other words, a variable is a kind of data (or information) container where we can store data into the container and then refer to this data by simply naming the container.



In simple words, we use JavaScript variables to store values or expressions. For example, a numeric variable can store a single number, a string, just a sequence of characters.



*/


// sample of declaring and initializing and finalizing varialbe and using them 


// by using var keyword

var x;  // declaring variable without any value then it will be created as undefined data type variable
console.log(x)
x=50    // initializing variable with an integer value now it will be initialized with data type as number
console.log(typeof(x))
x="hello world"      // changing variable to a string value now it will be changed with data type as string
console.log(typeof(x))
console.log(x[6])  // we can use index value to get string character


// redeclaring same variable(means by using same name) it will not going to change its original value unless new value is not initialized with it