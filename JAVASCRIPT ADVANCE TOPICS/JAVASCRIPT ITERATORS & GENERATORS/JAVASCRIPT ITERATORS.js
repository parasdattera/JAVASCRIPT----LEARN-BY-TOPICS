/*

JavaScript Iterators

The iterator protocol defines how to produce a sequence of values from an object.

An object becomes an iterator when it implements a next() method.

The next() method must return an object with two properties:

value (the next value) -- value of iterating element

done (true or false) -- false means there is still more values left to iterate and true means iteration completed

can be used with objects , strings values

give advantages that we do not need to write complex foops statements and give power to do multiple tasks rather then using different types of loops
*/


var fruits = ["Apple","Orange","Grapes","Mango"];

let y = fruits[Symbol.iterator]();

// console.log(y.next());
// console.log(y.next());
// console.log(y.next());
// console.log(y.next());
// console.log(y.next()); // returns undefined in value and true in done which means iterations is completed

// to direct get value

// console.log(y.next().value);

// to direct get done

// console.log(y.next().done);

// for iterating all elements we can use simiple for or while loops

// let result = y.next();

// while(!result.done){ // iterater till done value become true
//     console.log(result.value);
//     result = y.next();

// }


// creating own iterator function

function numberIterator(arr){
    var nextnum = 0;
    return {
        next(){
            if(nextnum < arr.length){
                return{
                    value : arr[nextnum++],
                    done : false
                }
            }else{
                return{
                    done : true
            }
            
            }
        }
    }
}


let numbers= [100,200,300,]
let num = numberIterator(numbers);
console.log(num.next());
console.log(num.next());
console.log(num.next().value);
console.log(num.next());