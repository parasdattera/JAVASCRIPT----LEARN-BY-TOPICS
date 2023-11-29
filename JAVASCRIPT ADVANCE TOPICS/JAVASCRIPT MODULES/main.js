// 1st way of importing 

// import { message , user, test } from "./library.js";

// console.log(message);
// console.log(user("Paras Dattera"));

// document.body.innerHTML= message;

// let a = new test();


// 2nd way of importing -- by using alias names

// import { message as m, user as u, test as t } from "./library.js";

// console.log(m);
// console.log(u("Paras Dattera"));
// let a = new t

// 3rd way of importing -- importing all classes , functions, anything by using * , use with or without alias name

// import * as all from "./library.js";

// console.log(all.message);
// console.log(all.user("Paras Dattera"));
// let a = new all.test();

// importing default function from module

// import { default as de} from "./library.js" // traditional way

// import defaultfunction from "./library.js" // new way


// defaultfunction();

// importing other function also to use with default function

// import {message,user} from "./library.js"

// console.log(message)
// console.log(user())




// aggregate modules -- used to use multiple modules in file in this we will import function from library.js file but throught bridge.js file -- by using export keyword

import { user } from "./bridge.js"


console.log(user());