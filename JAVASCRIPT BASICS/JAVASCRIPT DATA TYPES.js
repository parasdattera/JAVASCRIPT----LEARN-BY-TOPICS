/*
A data type in JavaScript specifies the specific type of value that a variable can store. In other words, a data type is simply a “kind” of value (i.e. data) stored in a variable.


Internally, a variable represents a memory location where data stores. Data is information that we store in computer programs.



What is Dynamic Data Types in JavaScript?

JavaScript is a dynamic and loosely typed, or duck typed language. It means that we do not need to specify the type of variable because JavaScript engine dynamically determines the data type of a variable based on its values.

*/

// var s=20
// var r=30
// var t = s+r
// console.log(t)

// variable created by let only accessed inside the block of code in which they are created 
// variable created by using var can be access

// function myfunction(){
//     var x =1;
//     let z=5;
//     {
//         let y =2; // only accessed in this block
//         var p=10 // this var will be accessed outside of the block as well
//         h=z+y+x
//         console.log(h)

//     }
//     console.log(p)
// }
// myfunction();




/*

Types of Data types in JavaScript

primitive data types
        Numbers
        Strings
        Booleans

Trivial data types (special data types)
        Null
        Undefined

referenced data types (non primitive data types)
        Objects
        Arrays
        Functions

 */






// sample primitive data types

var num=5
console.log(typeof(num))

var str="hello"
console.log(typeof(str))

var bool=true
console.log(typeof(bool))


// sample Trivial data types (special data types)

var a;
console.log(a)

var b=null
console.log(b)


// sample referenced data types (non primitive data types)

var myobj={} // empty object
console.log(typeof(myobj))

myobj={
    firstname:"paras",
    lastname:"dattera"
}
console.log(myobj.firstname+" "+myobj.lastname)


var arr=[]; // array are type of object in js 
console.log(typeof(arr))
arr=[1,2,5,3,6]
console.log(arr[0])


function sum(x,y){ // creating a function sum
    return x+y;
}

console.log(sum(2,3))