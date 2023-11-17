/*

by definition pure function is a function which produces same output for same input

and for impure function it is reverse

*/

function saygreeting(name){   // output is completely predictable and depend on input and same as input
    return `Hello ${name}`;
}
console.log(saygreeting('Paras'));


// impure function has some variable which is outside of the function which will not produce the same output always and input and output is not predictable


let greeting="hola";

function asaygreeting(name){   // output is not predictable as it depend on variable that is outside of the scope of the function which anyone can change and can cause change in the output
    return `${greeting} ${name}`;
}
console.log(asaygreeting("Paras"));
