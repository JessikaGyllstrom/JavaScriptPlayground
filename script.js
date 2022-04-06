console.log("hello world");

//arguments that are passed into the function
console.log(makeCoffee(2, 20));

// parameters : sugar, milk 
function makeCoffee(sugar, milk) {
    var instructions = "Boil water, ";
    instructions += "pour into cup, ";
    instructions += "add coffee, ";
    instructions += "add " + sugar + " spoons of sugar, ";
    instructions += "add " + milk + "% milk.";

    return instructions
}
/* 
color is called keyname, red is called keyvalue
keyname and keyvalue together is called property
a function inside an object us called method
{ 
    color: "red";
    speed: 156;
}

//arrays are list objects
[
    //elements
    0: "apple";
    1: "orange";
]
*/

//create an object & a reference to it
var car = {
    color : "red",
    speed : 156, 
    drive : function() {return "drive";}
};
//create an array and a reference to it
var shoppinglist = [
    "Apple",
    "Orange",
    "Pear"
]
console.log(car);
console.log(shoppinglist);

//objects can contain objects
var car = {
    //member of the object
    make : "volvo",
    //member of the object
    speed : 165,
    //member of the object

    engine : {
        size : 2.0,
        make : "bmw",
        fuel : "petrol",
        pistons : ["piston1", "piston2", "piston3"]
    },

    //method inside object
    drive : function() {return "drive!!";},
};
var array = [
    //member of the array
    "string",
    //member of the array
    100,
    //array inside the array
    ["embedded", 200],
    //object inside array
    {car : "ford"},

    //function inside array, NOTE! you cant name the function 
    function() {return "drive now!!";}
]
//Member access: .
console.log(car.make);
console.log(car.engine.fuel);
//invoke the drive-method
console.log(car.drive());
console.log(car["drive"]());
//access values in array/objects (computed member access)
console.log(car.engine.pistons[0]);
console.log(array[2]);
console.log(car["engine"]["pistons"][1]);
//run the function inside the array
console.log(array[4]());

//MODIFYING MEMBERS OF AN OBJECT
//change a value 
car.make = "saab";
//create a new key
car.model = "v60";
//create a new method inside an object
car.stop = function() {return "stop";};
//remove members
delete car.color;
//this funtion returns 'true' if it could be removed
//delete methods
delete car.stop;

//MODIFYING MEMBERS OF AN ARRAY
//delete first element in array
array.shift();
console.log(array[0]);
//delete element in array (the last)
console.log(array[3]);
array.pop();
console.log(array[3]);
//add element at the beginning of array
array.unshift ("newstring", 20, 30);
console.log(array[0]);
//add element at the end of array
array.push("endstring", 300, 600);
console.log(array[6]);
//remove element at given position
//remove from index 2, delete 2 elements
array.splice(2, 2);
//add element at given position
array.splice(1, 0, "added string", "splice", 400);
console.log(array[1]);

function name() {
    var fullname = "Jessika Gyllström";

    // the variavle "name" will temporarely store "fullname" while concatfunction is executed, 
    //then it will be deleted
    function concat(name) {
        return "Miss. " + name;
    }
    return concat(fullname);
}
console.log(name());