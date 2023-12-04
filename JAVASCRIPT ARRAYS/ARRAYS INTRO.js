/*

An array in JavaScript is an ordered set of data (or values) represented by a single variable name.

In JavaScript, an array is basically a user-defined object that represents a collection of different data type of elements.

Array uses a single variable name to store more than one value. These values are stored in indexed locations within an array.

We use an array when we want to store a group or list of related data in a single, easily managed location. For example, a list of names, books, favorite colors, courses, or prices is stored in an array.

Types of Arrays in JavaScript   ---

We must keep in mind that JavaScript is a loosely typed language. It means that elements of an array can be of different types. We can store different data types of elements in an array, even objects.

Basically, there are five types of arrays in JavaScript. They are:

String arrays
Number arrays
Boolean arrays
Object arrays (including null arrays because null is an object)
Mixed arrays


There are three ways to create an array in JavaScript. They are:

1. By array literal ---
                        var arrayname = [value0, value1, value2, value3, ..... valueN];
2. By creating instance of Array directly (using new keyword) ---
                        let arrayname = new Array();

3. Using an Array constructor (using new keyword) ---
                        let arrayname = new Array(elements);




Acessing Array Elements in JavaScript --

                let varname = arrayname[indexNumber];


Array Length Property -- 
                        let length = arrayname.length;

*/



// sample creating an array by array literal

// var arr = [10,20,30,40,50];

// sample --  accessing it by for loop


// var sum = 0;
// document.write("<ul>");
// for(var a=0;a<=4;a++){
//     document.write("<li>"+arr[a]+"</li>")
//     sum=sum+arr[a];
// }
// document.write("</ul>");
// document.write("Total is : "+sum)

// sample -- creating an array of different data types

// var arr1 = ["Paras","Sarah","Johny","Danny",20,30,40,null,true]

// document.write("<ul>");
// for(var a = 0;a<9;a++){
//     document.write("<li>"+arr1[a]+"</li>");
// }
// document.write("</ul>");


// sample array by creating instance of Array directly (using new keyword)

// var arr2 = new Array(); // empty array if we declare it like this Array(4) means only 4 values can be store
// arr2[0]=10;
// arr2[1]=20;
// arr2[2]=true;

// for(var a=0;a<=4;a++){
//     document.write("<li>"+arr2[a]+"</li>")
// }
// document.write("</ul>");


// document.write("<br>");
// sample array getting value from user

// var arr3 = new Array(4);
// for(var a = 0;a<4;a++){
//     arr3[a] = prompt("Enter the value : ");
// }

// for(var a=0;a<4;a++){
//     document.write("<li>"+arr3[a]+"</li>")
// }
// document.write("</ul>");


// arrays modify and delete elements

var arr4 = ["Harry",18,"Male","BCA"];
// modify elements using its index value

arr4[1]="Potter"
document.write(arr4)
document.write("<br>")
arr4[2]="Female"
document.write(arr4)

// delete elements using delete keyword but it remove its data with undefined value

document.write("<br>")
delete arr4[1]
document.write(arr4)
