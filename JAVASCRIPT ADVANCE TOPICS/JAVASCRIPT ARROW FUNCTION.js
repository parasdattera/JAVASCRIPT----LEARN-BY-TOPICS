/*
Arrow function {()=>} is concise way of writing JavaScript functions in shorter way



() => {
  statements
}

(param1, paramN) => {
  statements
}

*/

// sample

const myfunction = ()=>{
    console.log("hellow world!")
}

myfunction();

// sample other way in sinle line

let welcome = (name,age) => `Welcome ${name} - ${age}`;
console.log(welcome("Paras Dattera",23))

// if parameter is only one then 

let welcome2 = name =>`Welcome ${name}`;
console.log(welcome2("Paras Dattera"))