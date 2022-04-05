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


//change a value 
car.make = "saab";