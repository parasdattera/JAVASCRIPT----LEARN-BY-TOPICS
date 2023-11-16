/*

Types of Operators in JavaScript

In JavaScript programming language, operators are classified into eight different categories:

Arithmetic Operators -- (+,-,*,/,%)
Assignment Operators -- (a=10,a+=10,a-=10,x*=10,x/=10,x%=10)
Comparison (Relational) Operators -- (==,!=,>,<,>=,<=,===,!==)
Logical Operators -- AND(&&) OR(||) NOT(!)
Bitwise Operators -- bitwise AND &, OR |, XOR ^, NOT ~)
Conditional Operators -- conditional_expression ? Value1 : Value2

                            console.log(student_marks>=40?"passed":"failed")
String Operators -- (+, +=) -- used to concatenate strings
Special Operators -- 
                    (?:) -- Conditional Operator returns value based on
                             the condition. It is like if-else
                      ,  -- Comma Operator allows multiple expressions 
                            to be evaluated as single statement.
                    delete -- Delete Operator deletes a property from 
                            the object.
                    in  -- In Operator checks if object has the given 
                            property
                    instanceof -- checks if the object is an instance 
                            of given type
                    new -- creates an instance(object)
                    typeof -- checks the type of object
                    void -- it discards the expression's return value
                    yield -- checks what is returned in a generator by 
                            the generator's iterator


Operator sub-types 

Unary -- takes only single operands
            (+,-,++,--,delete,void,typeof,~,!)
Binary -- takes two operands -- All arithmetic operators are binary 
                                operators.

Ternary -- takes three operands --
                                In JavaScript, there is one operator that falls under this category – the conditional operator



*/


// student_marks=5
// console.log(student_marks>=40?"passed":"failed")


let x = +"20";
console.log(x)