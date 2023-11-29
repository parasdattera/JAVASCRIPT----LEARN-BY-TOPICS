let fullName = "Paras Dattera";
let age = 23;

// traditional way of creating object from variable

var obj = {
    fullName : fullName,
    age : age
};

console.log(obj)

// new way of creating object literals

var newobj = {
    fullName,
    age
}

console.log(newobj)

// using variable as property name

let n = "FirstName"

let obj1 = {
    [n] : "Paras"
};

console.log(obj1)

// sample usage of using variable as property name

let a= "Student";

var StudentObject = {
    [a + "Name"] : "Paras Dattera",
    Course : "Btech",
    Detail : function(){
        return `${this.StudentName} is student of ${this.Course}`
    }
};

console.log(StudentObject.Detail())

// object literal with new function syntax -- without using function keyword


var StudentObjectNew = {
    [a + "Name"] : "Paras Dattera",
    Course : "Btech",
    Detail(){
        return `${this.StudentName} is student of ${this.Course}`
    }
};

// new way of calling object function
console.log(StudentObjectNew['Detail']())
