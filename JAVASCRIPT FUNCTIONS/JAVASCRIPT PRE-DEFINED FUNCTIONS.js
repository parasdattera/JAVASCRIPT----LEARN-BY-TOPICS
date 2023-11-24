/*
There are hundreds of predefined functions built into JavaScript to perform a variety of tasks. Some of the important predefined functions are as follows:

alert(): This function displays an alert dialog box on the browser.

confirm(): This function displays a confirmation dialog box and asks the user to choose one from two options.

prompt(): The prompt() function displays a prompt dialog box on the browser and prompts the user to enter input.

write(): The write() function used to write something on the document.

Date(): This function used to get the current date and time.

select(): The select() function used to select the pointed object.

parselnt(numString): This function converts a string into an integer.

parseFIoat(numString, radix): This function converts a string into floating point number.

sqrt(number): This function used to get the square root of any number.

pow(number): It used to get the power of an integer.

*/

// using index.html file for demonstrating all functions


// alert
alert("this is alert function!")

// confirm

let text;
if(confirm("This is confirm function Press ok button or cancel !")==true){
    text="you pressed ok!";
}
else{
    text="you cancelled!";
}

// prompt

function myFunction() {
    let person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }


// write

document.write("Hello world!")


// date

const d = new Date();
document.getElementById("demodate").innerHTML = d;

// select -- used to selects all the text in a area 

function selectText(){
    document.getElementById('selectedText').select();
}



// parselnt

let MyName = "20"
document.write(parseInt(MyName))
document.write("<br>")

// parseFloat

let MyName2 = "20.567"
document.write(parseFloat(MyName2))
document.write("<br>")


// sqrt 

let numberA = Math.sqrt(4);
document.write(numberA)
document.write("<br>")

//pow

let numberB= Math.pow(2,4);
document.write(numberB)