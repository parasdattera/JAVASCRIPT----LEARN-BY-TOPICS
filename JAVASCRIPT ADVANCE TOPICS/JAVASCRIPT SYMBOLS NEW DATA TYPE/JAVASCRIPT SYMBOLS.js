/*

Symbol is a built-in object whose constructor returns a symbol also called a Symbol value or just a Symbol — that's guaranteed to be unique.


To create a new primitive Symbol, you write Symbol() with an optional string as its description:

*/

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

// above three variables are unique

console.log(sym2 ===sym3)

// printing values of symbols in console will return -- Symbol(value) 

console.log(sym1)
console.log(sym3)
console.log(sym2)

// data type of symbols

console.log(typeof sym1)

// we cannot directly use or access symbols in document so we need to use toString method to use it

alert(sym2.toString());
document.write(sym3.toString())

// to get access or use to the exact value of symbol we need to use description method of symbol

alert(sym2.description);
document.write(sym3.description)

// to use symbols inside objects just use square braces [] where you want to use it

let age = Symbol("age");
let user = {
    name:"Paras Dattera",
    class :"B.Tech",
    [age] : 23
};

console.log(user)
user[Symbol("email")] = "Paras123@gmail.com"
console.log(user)

// to access symbol values from object use []
console.log(user[age])

// remember-- using for loop to get access to all elements inside objects will skip all symbols values
for(let key in user){
    console.log(key)
}

// remembe-- using direct JSON.stringify for converting into json data will skip all symbols values and in order to convert a object that has symbols into json data we first need to convert the symbol value to string value using description