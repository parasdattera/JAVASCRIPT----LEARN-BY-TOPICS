/*

OBJECT in js is an entity(having properties and method) with a state and behavior 

example 

1. car -- car has properties/characteristics like name,manufacturer
          car has method/functions like music,brake
          car has state like car is running or parked
          car has behavior like start,stop,accelerate


object values are wriiten as  --  

{

    key:value pairs,
    key:value pairs,
    ...
    ...
}

key = only string value without ""
value = any data type


ways to create an object -- 

1. By object literal--
                        var obj={
                            key1:"value1"
                        };

2. By creating an instance of Object directly (using new keyword)--
                        var obj=new Object();

3. By using an object constructor (using function,this,new keyword)--
                        function obj_constructor(obj){
                            this.obj=obj;
                        }
                        var obj=new obj_constructor(value);






*/


// sample -- creating object by object literal


var a ={
    name:'Honda city',
    manufacture:'Honda',
    fuelCapacity:'40l',
    isAutomatic:true
};


let b ={
    name:'Swift',
    manufacture:'Maruti Suzuki',
    fuelcapacity:'30l',
    isAutomatic:false
};

// console.log(a)
// console.log(b)

// sample -- creating object By creating an instance of Object directly (using new keyword)



var car= new Object();
car.name="Swift";
car.manufacture="Maruti Suzuki"
// console.log(car);


// sample -- creating object By using an object constructor (using function,this,new keyword)

function car_object(name,manufacture){
    this.name=name,
    this.manufacture=manufacture
}
var car= new car_object("Swift","Maruti Suzuki")
// console.log(car)



/*

Accessing data
We can use either dot notation or square bracket notation to access object properties or
alter values.
Format for dot notation: objectName.propertyName.
Format for dot notation: objectName.propertyName.
Format for the square bracket notation: objectName['propertyName'].


Deleting data

we can delete data i.e.. key value pair by using delete keyword

delete objectname.keyname

*/



/*
object methods

Object.values() -- get all values only
Object.keys() -- get all keys only
Object.freeze() -- it will freeze object it will be unchangable
                    Changing a frozen object is impossible.
                    prevents the addition and deletion of properties.
Object.seal() -- it will stop add/remove of data into objects but existing object data can be change

*/


function Laptop_object(name,manufacture,processor,graphics_card){
    this.name=name,
    this.manufacture=manufacture,
    this.processor=processor,
    this.graphics_card=graphics_card
}
var Dell_Laptop= new Laptop_object("Dell","Dell Inc","intel and amd","nvidia and amd radeon")
// console.log(Object.values(Dell_Laptop))
// console.log(Object.keys(Dell_Laptop))





/*
for iteration in objects data we can use for loop

Syntax
for (key in object) {
// code block to be executed
}
*/

for (var a in Dell_Laptop){
    console.log(Dell_Laptop[a])
}