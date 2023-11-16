/*
there are three ways to declare variables in Javascript var, let, and const.

The key differences among the three variable declarations with var, let and const keywords are:

Variable reassignment -- while declaring variable with const keyword we 
                        cannot reassign variable with new value

Variable scope --All JavaScript variables declared with var keyword are
                         called function scoped variables because they have function scope.
                         The function scoped variables declared outside the function are accessible globally to the script (i.e. throughout the script).
                         Similarly, when the function scoped variables are declared inside the function, they are accessible throughout the function, but not outside the function.

                         All variables that are declared by using the let keyword are called block scoped variables. When block-scoped variables are declared outside the functions, they can be accessed globally.

                         When a variable is declared with const keyword whose value cannot be reassigned then it is called constant variable or read-only variable.
                         
                         Constant variables are also block scoped variables that follow the same scoping rules as variables that are using let keyword.


Variable hoisting -- Variable hoisting is that variable that can be
                         accessed before it is declared but not the value will be accessed only they will accessed as they are only declared this is js functionality 
                         
                         All variables that are declared with the var keyword, are hoisted. It means that variables declared with var keyword are hoisted to the top of block scope, where they are defined and can be accessed before the declaration.in case of function it will work properly but in case of variable it will take values as undefined

                         All the variables created with let keyword are not subject to variable hoisting. It means that accessing a variable declaration with let keyword before assignment will throw ReferenceError.

                         All variables declared with const keyword are not hoisted. 

Variable redeclaration -- When a variable is declared with the same name
                         that is already declared somewhere in the script, it is called variable redeclaration.

                         Using var keyword, we can declare a variable with the same name that is already declared using var keyword in the same scope.
                         
                         Redeclaring a variable using var will overwrite the variable of the same name in the same scope but not overwrite in the outer scope.

                         Redeclaring a variable using let keyword that is already declared using let keyword in the same scope, will throw TypeError exception. Consider the below example code.

                         Redeclaring a variable using const keyword that is already declared using const keyword in the same scope will also throw TypeError exception.



*/

// const a=100
// console.log(a)
// a=0// this will give error at runtime
// console.log(a)

// console.log(typeof(a))
// var a =10;



greet() // greet function will work here
function greet(){
    console.log("hello , good morning!")
}
