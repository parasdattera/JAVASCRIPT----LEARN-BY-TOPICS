/*

Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:

let myFunction = (a, b) => a * b;

*/

// sample

let firstfunction=(x,y) => console.log(z=x+y);
const secondfunction=(x,y) => console.log(z=x+y);

firstfunction(2,4);
secondfunction(4,5)



//Before Arrow Function:
hello = function() {
  return "Hello World!";
}

console.log(hello())

//With Arrow Function:
hello = () => {
  return "Hello World!";
}

console.log(hello())
