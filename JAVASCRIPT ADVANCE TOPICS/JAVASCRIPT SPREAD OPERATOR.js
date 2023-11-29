/*
it is opposit to the rest operator
it takes array as input having indefinite values
and takes every single values inside the array for calculations
it is same as rest operator -->   
         ...parameter_name

but it is not used when declaring function,it is used when calling function

*/

function sum(name,...args){
    let sum=0;
    for(let i in args){
        sum=sum+args[i]
    }
    console.log(sum);
}
arr = [10,20,30]

sum("paras dattera",...arr)

