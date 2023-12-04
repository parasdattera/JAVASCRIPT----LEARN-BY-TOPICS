/*


A string in JavaScript is a sequence of Unicode characters. It is simply an array of characters. Each character takes 16 bits.

Each character in the string has its position or index. We can access it by its index.

The indexing of a string, like that of an array, is zero-based. The index of the first character of a string is zero.

A string is enclosed within a pair of double or single quotation marks. Both are valid ways to represent a string in JavaScript.




There are two ways to create string in JavaScript. They are as follows:

By string literal ---
                        let stringname="string value";

By string object (using new keyword and String() constructor) ---

                        stringObjectName = new String(string);


*/


// sample By string literal 

let firstName = "Paras";
console.log(firstName)

// sample by By string object (using new keyword and String() constructor) 

let secondName = new String("Dattera");
console.log(secondName)


/*

JavaScript String Methods/Properties --

length -- property
toLowerCase()
toUpperCase()
includes()
startsWith()
endsWith()
search()
match()
indexOf()
lastlndexOf()
replace()
trim()
charAt()
charCodeAt()
fromCharCode()
concat()
split()
repeat()
slice()
substr()
substring()
toString()
valueOf()

 */


// length property

var a = "    JavaScript is a Great is a Language      ";
var lenght_of_a = a.length;
console.log(lenght_of_a);

// toLowerCase and toUpperCase

var b=a.toLocaleLowerCase()
console.log(b)
var c = a.toUpperCase()
console.log(c)

// includes -- used to search word case sensitive


console.log(a.includes("Great"))
console.log(a.includes("is a f"))

// startsWith and endsWith

console.log(a.startsWith("Java"))
console.log(a.endsWith("Languaged"))

// search -- returns index for the searched word/char

console.log(a.search("G"))

// match -- returns array of all words matching from searched string
// need to use regular expressions
console.log(a.match(/is a/g));


// indexOf and lastIndexOf

console.log(a.indexOf("is"))// returns index from starting
console.log(a.lastIndexOf("is"))// returns index from last

// replace

var a = a.replace("JavaScript","PHP");//without using regex it will only replace one similar word from starting index
console.log(a);
var a = a.replace(/is a/g,"are");
console.log(a);

// trim

console.log(a.trim()); // remove extra spaces from staring index and ending index


// charAt

console.log(a.charAt(5))// returns character at index 5

// charCodeAt -- retuns ASCII code

console.log(a.charCodeAt(1)) // ASCII code for space is 32
console.log(a.charCodeAt(5)) // ASCII code for H is 72

// fromCharCode -- returns single word from its ASCII code

console.log(String.fromCharCode(72))

// concat -- for concatination two or more strings

var string1= "Hello, "
var string2= "How are you today."
console.log(string1.concat(string2))
var string3= "I am fine"
console.log(string1.concat(string2,string3))

// split -- returns array spliting them

console.log(a.split("      "))
console.log(a.split("e"))

// repeat

console.log(a.repeat(2))

// slice

console.log(a.slice(6)) // slice and returns string from 6 index to last index

console.log(a.slice(5,8)) // returns index from 5 to 8-1 index

// substr is deprecated now only substring is used

console.log(a.substring(5,8)) // returns same like slice

// toString

var str1 = 50
var str2 = 100
var str3 = str1.toString()+str2.toString()
console.log(str3)

// valueOf -- returns value oƒ string object

console.log(a.valueOf())