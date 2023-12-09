/*

Regular functions return only one, single value (or nothing).

Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease.

To create a generator, we need a special syntax construct: function*, or function *function_name -- so-called “generator function”.

sample // 

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

or


function *generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

*/

// a normal function sample

// function test(){
//     console.log('First Message');
//     console.log('First Message');
// }

// test();

// in normal function we dont have control of function whether which line we need to execute all line of code will execute once function is called. thats why generator and yield are used

// function with generators

// function *test1(){
//     console.log('First Message');
//     console.log('Second Message');
// }

// test1() // calling a generator function will not execute all lines of code inside a function

// running code of generator function using next()

// let a = test1()
// console.log(a.next()); // it will execute all line of code until any line of code with yield


// generator function with yield

// function *test2(){
//     console.log('First Message');
//     yield 'Second Message';
//     console.log('Third Message');
//     yield 'Fourth Message';

// }

// let b = test2();
// console.log(b.next()); // it will execute function code till any line of code with yield and to execute furhther code of function we need to again use next


// to directly get the value of yield

// console.log(b.next().value);


// sending and getting yield values

// function *test3(){
//     let result = yield;
//     console.log(`Result : ${result}`);
// }

// let g = test3();
// g.next();
// g.next(500); // setting yield value 



// multiple array values 

// function *test4(){
//     let yArray = [yield,yield,yield];
//     console.log(`Result : ${yArray}`);
// }

// let h = test4();
// h.next();
// h.next(500); // setting yield value 
// h.next(600);
// h.next(700);



// multiple data types

// function *test5(){
//     let yArray = [yield,yield,yield];
//     console.log(`Result : ${yArray}`);
// }

// let h = test5();
// h.next();
// h.next("PHP"); // setting yield value 
// h.next("PYTHON");
// h.next("Java");

// arrays with single values also


// function *test6(){
//     yield 1;
//     yield ["Node" , "Angular","React"];
// }

// let h = test6();
// console.log(h.next());
// console.log(h.next());

// yield with * --- *yield -- it makes all elements of an array to act as single



function *test7(){
    yield 1;
    yield* ["Node" , "Angular","React"];
}

let h = test7();
console.log(h.next());
console.log(h.next());
console.log(h.next());
console.log(h.next());

