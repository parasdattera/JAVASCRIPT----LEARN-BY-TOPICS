/*
function calling itself one or more times is called as recursion

while using recursion there should be base condition by which
it will stop execution of program otherwise memory stack will filled
completely and you will get errors.

*/

let a=10
function fetchwater(count){
    if (count===0){
    console.log("NO more water left!");
    return;
    }
    console.log('fetching water...')
    fetchwater(count-1);
 
}

fetchwater(5); 