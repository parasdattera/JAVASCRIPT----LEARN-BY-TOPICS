// 1st way -- use export keyword before any variable, function , class or anything

// export let message = "ES6 MOdules";

// export function user(name){
//     console.log(`hello ${name}`)
// }

// export class test{
//     constructor(){
//         console.log("constructor method")
//     }
// }

// 2nd way -- after all class, function , variable , any code declaration at the end of file we can just use  -->         export{class_name, function_name , or_anything}


// let message = "ES6 MOdules";

// function user(name){
//     console.log(`hello ${name}`)
// }

// class test{
//     constructor(){
//         console.log("constructor method")
//     }
// }

// export {message,user,test}

// module default function --  when you want that one file have one and only function which is default function that you might want to import then default keyword is used while creating the function

// export default function(){
//     console.log("default function invoked..")
// }

// we can also use other function with default function

// let message = "ES6 Modules";

// function user(name){
//     return `Hello ${name}`;
// }

// export {message,user};


// aggregate modules -- used to use multiple modules in file

function user(){
    return `Hello`
}

export {user};