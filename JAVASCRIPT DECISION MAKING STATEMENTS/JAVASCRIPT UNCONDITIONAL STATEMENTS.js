/*

Unconditional Statements

An unconditional statement in JavaScript is that statement in which the flow of execution jumps to another part of code without carrying out any conditional test. It is also called unconditional execution in JavaScript.

JavaScript supports three types of unconditional statements. They are as follows:

Break statement     ---     A break statement in JavaScript that breaks out a
                             loop or switch statement. It simply tells the browser to exit the code block and move on the next line of code (if any) after the block.

Continue statement  ---     Continue statement in JavaScript is a similar to the
                             break statement. It breaks the current iteration of loop and transfers control to the restart of the loop with a new iteration.

Return statement    ---     The return statement stops the execution of a 
                            function and returns a value.



*/



// sample break statement  -- using for loop

for(let i=1;i<=10;i++){
    if(i==5){
        break;
    }
    console.log(i)

}