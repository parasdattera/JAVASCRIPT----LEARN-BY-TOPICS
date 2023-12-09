/*

types of loops

while loop
do/while loop
for loop
forEach
for/in loop
for/of loop
map()

*/

// while loop

let a=10
while(a>0){
    console.log("Hello world "+a );
    a--;
}

// do while

var b= 5;
do{
    console.log(b);
    b--;
}while(b>0);

// for 
for (let i = 1; i < 5; i++) {
    console.log("*")
}

// forEach -- used with array 

d = ["Paras","Dattera"]
d.forEach(function(value,index){
    console.log(value+" "+index)

})

// for/in -- used with objects

var e = {
    fname:"Paras",
    lname:"Dattera",
    age:23,
    email:"parasdattera@gmail.com"
};

for(var key in e){
    console.log(key + " : "+e[key] )
}


/* for/of  -- syntax

for (variable of iterable) {
  // code block to be executed
}

*/

// sample

const cars = ["BMW","Volvo","Mini"]

let text ="";
for (let x of cars){
    text+=x +"\n";
}
console.log(text);


/* map() function is used for iterating in arrays 

*/

var arr = [1,2,3,4,5,6,7];

var newarr = arr.map(test);

console.log(newarr);

function test(x){
    return x * 10;

}