/*
JavaScript Arrays Methods -- 

sort()
pop()
push()
shift()
unshift()
concat()
join()
slice()
splice()
isArray()
indexOf()
lastlndexOf()
entries()
every()
filter()
find()
findlndex()
includes()
some()
forEach()
toString()
valueOf()
fill()

*/

// sort 
var a =["Sanjay"," Aman" , "Rehman", "Karan" ];
a.sort(); // albhabetically sorting 
console.log(a)

// reverse
// a.reverse()
// console.log(a)

// pop -- delete last element , push -- add into array at last
// a.pop();
// console.log(a)
// a.push("Paras")
// console.log(a)

// shift -- delete first element , unshift -- add into array at first
// a.shift();
// console.log(a)
// a.unshift("Salman")
// console.log(a)

// concat -- merging two array or string , join -- merge elements of array into one string element
var b = a.concat("Rahul","Vivek")
var c = ['Aman']
var d = c.concat(b)
console.log(c)
console.log(d)

// var e = d.join("-");
// console.log(e)


// slice -- get elements from array or slice elements from array

// var f = d.slice(0,5);
// console.log(f)

// splice -- add elements into in between elements in array or delete also
// console.log(d)
// d.splice(2,0,"Karan","Neha")
// console.log(d)
// d.splice(2,2)
// console.log(d)

// isArray -- to check if data type is array
// console.log(Array.isArray(d))
// g = 10
// console.log(Array.isArray(g))

// // indexOf -- for searching elements in array starting from first elements, lastIndexOf -- for searching elements in array starting from last elements -- both returns index
// console.log(d.indexOf("Aman"));
// console.log(d.indexOf("Neha",2)); // starting index from where to start searching
// console.log(d.lastIndexOf("Vivek",6));


// includes -- returns true if it find element in array , case sensitive
// console.log(d.includes("aman"))
// console.log(d.includes("Aman"))

// some -- used to check condition if any elements of array satisfy condition in function then returns true otherwise false , every -- is same as some but all elements should satisfy the condition to return true otherwise false

var ages = [10,20,30,18,22]
// console.log(ages.some(checkAdult)) // returns true as some of the element is above 18

function checkAdult(age){
    return age >=18
}

// console.log(ages.every(checkAdult)) // returns false as all elements are not greater then or equal to 18

// find -- returns first searched element into array
// console.log(ages.find(checkAdult))

// findIndex -- returns array of first searched element into array
// console.log(ages.findIndex(checkAdult))

// filter -- returns new array of searched element which follows condition of function
console.log(ages.filter(checkAdult));

// toString -- to convert array into string

var names = ["Rahul","Karan","Naman","Nisha"]
console.log(typeof(names))
var namesnew = names.toString()
console.log(namesnew)
console.log(typeof(namesnew))

// valueOf -- to get values of array
console.log(names.valueOf())

// fill -- to fill same element into array
names.fill("Ram")
console.log(names)

// forEach -- used for looping through elements into array

var firstName = ["Sanjay","Amandeep","Karan"]
firstName.forEach(function(value,index){
    console.log(value+" index is : "+index)
}) 