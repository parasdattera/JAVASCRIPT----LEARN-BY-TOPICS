/*
for getting new array with some changes in existing array 

very useful when creating new array with some previous array with some changes in data
*/

var arr = [5,6,8,9];

var newarr = arr.map(test);
console.log(newarr)
function test(x){
    return x*10;
}

// sample with array of objects

var customerDetails = [
    {fname:"Paras",lname:"Dattera"},
    {fname:"Dipanshu",lname:"Batra"},
    {fname:"Nitin",lname:"Soni"},
    {fname:"Monika",lname:"Khanna"}
]

var newarr1 = customerDetails.map(test1);
console.log(newarr1)
function test1(x){
    return x.fname +" "+x.lname;
}