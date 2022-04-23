// OBJECTS
/*
SUMMARY 
* objects are collection of key-value pairs placed inside {}
* objects have properties that can be any JS value
if its a function, its known as a method
* An objects properties and methods can be accessed using either
dot notation or aquare bracket notation
* objects are mutable, which means their properties and
methods can be changed or removed
* objects can be used as aparameters to functions, which
allows arguments to be entered in any order, or omitted
* nested object can be created by placing objects inside objects
* JSON is a portable data format that uses JS object literals
to exchange information
* The Math object gives access to a number of mathematical constants
* The Math object can be used to perform mathematical calculations
* The Date object can be used to create dage objects
* Once you've created a Date object, you can use the getter
methods to access information about the date
* Once you have created a Date object, setter methods can be used
to change information about that date 
* The Regex object can be used to create regular expressions


An object in JavaScript is a self-contained set of related
 values and functions. They act as a collection of named 
 properties that map to any JavaScript value such as 
 strings, numbers, booleans, arrays and functions. 
 If a property’s value is a function, it is known as a 
 method.
 */

 const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};
/*
Each property is a key-value pair, separated by commas. 
In the example, the first property is called name and its 
value is Superman, while the fly() property is a method, 
as its value is a function, signified by the parentheses 
placed after it.
*/
//assigning properties
console.log(superman.name);//superman
console.log(superman["real" + " " + "name"] )// the property is built
// clark kent


/*
Computed Properties
The ability to create objects with computed property keys 
was introduced in ES6. This means that JavaScript code can 
be placed inside square brackets and the property key will 
be the return value of that code. This can be seen in the 
example below where the + operator is used to concatenate 
the strings catch andphrase:
*/
const hulk = { name: 'Hulk', ['catch' + 'Phrase']: 'Hulk Smash!' };

// A new property can be added to an object using a symbol 
// as a key if the square bracket notation is used:

// The new Symbol date type can also be used as a computed property key:

const firstname = Symbol('firstname');
const supergirl = { [firstname]: 'Supergirl'}
//You can access the property using the square bracket notation:
console.log(supergirl[firstname]);
//A new property can be added to an object using a symbol as a key 
// if the square bracket notation is used:
const realNAme = Symbol('real name');
supergirl[realNAme] = "Kara Danvers";
console.log(supergirl[realNAme]); // Kara Danvers

//SYMBOLS
/*
Symbols are new primitive type introduced in ES6. 
Symbols are completely unique identifiers. 
Just like their primitive counterparts 
(Number, String, Boolean), they can be created using 
the factory function Symbol() which returns a Symbol.
*/
const symbol = Symbol('description')
/* Every time you call the factory function, 
a new and unique symbol is created. 
The optional string-valued parameter is a descriptive 
string that is shown when printing the symbol.*/

Symbol() === Symbol(); // false

Symbol('test') === Symbol('test'); // false
const test = Symbol('test');

const obj = {};
obj.test = 'hello';
obj[test] = 'world';

obj.test; // 'hello'
obj[test]; // 'world'
// Since no two symbols are ever equal, you can't access 
// a symbol property unless you have access to the symbol. 
// This makes symbols convenient for creating hidden values 
// that can only be accessed within a certain function.
function addSymbol(obj) {
    const sym = Symbol('test');
    obj[sym] = 'my hidden value';
  
    return obj;
}
 
const object = addSymbol({});
// No way to access obj[sym] here, unless you explicitly look
// into `Object.getOwnPropertySymbols()`.

/*
Symbols are also excluded from JSON.stringify() output, which makes them ideal for storing program-only data that end users shouldn't see.
*/

/*
Calling Methods
To call an object’s method we can also use dot or bracket 
notation. Calling a method is the same as invoking a function, 
so parentheses need to be placed after the method name:
*/

console.log(superman.fly()); // up up and away
//checking if properties or methods exist
console.log('city' in superman);//false
//alternatively you could see if the property or method
// doesnt return undefined
console.log(superman.city !== undefined); //fasle
//another way is to use tje hasOwnProperty() method
console.log(superman.hasOwnProperty('city')); // false

// Finding all the Properties of an Object
for(const key in superman) {
    console.log(key + ": " + superman[key]);
} 
/*
allies: Batman,Supergirl,Superboy
fly: fly() {
        return 'Up, up and away!';
}
*/

/*
The Object.keys() method will return an array of all 
the keys of any object that is provided as an argument. 
We can then iterate over this array to access all the 
keys of an object:
*/
for(const key of Object.keys(superman)) {
    console.log(key);
}
/*
name
real name
height
weight
hero
villain
allies
fly
*/

/*the Object.values() that works in the same way, 
but returns an array of all the object’s value:*/
for(const value of Object.values(superman)) {
    console.log(value);
}
/*
[ 'Batman', 'Supergirl', 'Superboy' ]
[Function: fly] 
*/

/*
Object.entries() is also part of ES2017 and returns 
an array of key-value pairs. These key-value pairs 
are returned in arrays, but they can be destructured 
and accessed individually using the following notation: */
for(const [key,value] of Object.entries(superman)) {
    console.log(`${key}: ${value}`);
}
/*
[ 'Batman', 'Supergirl', 'Superboy' ]
[Function: fly]
name: Superman
real name: Clark Kent
height: 75
weight: 235
hero: true
villain: false
allies: Batman,Supergirl,Superboy
fly: fly() {
        return 'Up, up and away!';
    }
*/

//Adding Properties
superman.city = 'Metropolis';

//Changing Properties
superman['real name'] = 'Kal-El';

//removing properties
delete superman.fly 

//Nested Objects
const jla = {
    superman: { realName: 'Clark Kent' },
    batman: { realName: 'Bruce Wayne' },
    wonderWoman: { realName: 'Diana Prince' },
    flash: { realName: 'Barry Allen' },
    aquaman: { realName: 'Arthur Curry' },
};
// The values in nested objects can be accessed by 
// referencing each property name in order using 
// either dot or bracket notation:
jla.wonderWoman.realName// "Diana Prince"
jla['flash']['realName']// "Barry Allen"


/*
Objects Are Copied By Reference
An important concept to get your head around is that 
objects are assigned by reference. This means that if 
a variable is assigned to an object that already 
exists, it will simply point to the exact same space 
in memory. So any changes made using either reference 
will affect the same object.
*/

/* In the example below, we create a new object called
 thor to represent The Mighty Thor and make a copy of 
 it called cloneThor: */
const thor = { name: 'Thor'
// more properties here
};
const cloneThor = thor;

/* The variable cloneThor now has all the same properties 
as the thor object. The problem is, we haven't created a 
new object that is a copy of thor; the variables cloneThor 
and thor both reference exactly the same object!
We can see this, if we make a change to the 
name property of cloneThor: */

cloneThor.name = "Clor";
console.log(thor.name); //clor
/* 
Changing the name property of cloneThor has resulted 
in the name property of thor changing as well. This
happens because the variables thor and cloneThor
both point to the same object in memory. Any changes 
made to either variable will affect the other.
This doesn’t happen when primitive values are used 
instead of objects, as can be seen in the example 
below: */
a = 1; 
b = a;
// At this point, both a and b will have a value of 1,
// but if the value of b is changed, it won’t affect 
// the value of a:
b = 2;
// check the value of a hasn't changed
console.log(a); //1

// Objects as Parameters to Functions

function greet({greeting,name,age}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`; }

console.log(greet({ greeting: `What's up dude`, age: 10, name: `Bart` }));
// What's up dude! My name is Bart and I am 10 years old.


function greet({greeting='Hello',name,age=18}) {
    return `${greeting}! My name is ${name} and I am ${age} years old`;
}
console.log(greet({ name: 'Lisa', age: 8 }));

//THIS
/*
The keyword this refers to the object that it is within. It can be used inside methods to gain access to the object’s properties.
To demonstrate using this, we’ll create a dice object that has a sides property and a roll() method that returns a number between 1 and the number of sides.
Here’s the code to create our dice object: */
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
/*
This object has a sides property and a roll() method. 
Inside the roll() method we use this.sides to refer 
to the value of the object’s sides property.
We also use the random() and floor() methods of 
the Math object to return a number between 1 and the 
number of sides. */
console.log(dice.roll());


// JSON
/* JavaScript Object Notation, or JSON1, 
was invented by Douglas Crockford in 2001. It is an 
extremely popular lightweight data-storage format 
that is used by a large number of services for data 
serialization and configuration. It is often used 
to exchange information between web services

JSON is a string representation of the object literal notation that we have just seen. There are, however, a couple of key differences:
1. Property names must be double-quoted
2. Permitted values are double-quoted strings, numbers, true, false, null, arrays
and objects
3. Functions are not permitted values

The parse() method takes a string of data in JSON format and returns a JavaScript object:

The stringify() method does the opposite, taking a JavaScript object and returning a string 
of JSON data.

You can also add a space argument that will add new lines between each key-
value pair, which is useful when displaying the results in a browser:

JSON.stringify(wonderWoman, null, " ");
 <<  '{\n "name": "Wonder Woman",\n "real name": "Diana
➥ Prince",\n "height": 72,\n "weight": 165,\n "hero": true,\n ➥ "villain": 
false,\n "allies": [\n "Wonder Girl",\n "Donna ➥ Troy",\n "Superman"\n ]\n}'

*/
/* 
The Math object is a built-in object that has several properties representing 
mathematical constants, as well as methods that carry out a number of common 
mathematical operations. All the properties and methods of the Math object are 
immutable and unable to be changed. */
/* Mathematical Methods
The Math object also has several methods to carry out a variety of useful 
mathematical operations.
The Math.abs() method returns the absolute value of a number. 
So if the number is positive, it will remain the same, and if it’s negative, 
it will become positive:
*/
console.log(Math.abs(3));// 3
console.log(Math.abs(-3));// 3
/*Rounding Methods
The Math.ceil() method will round a number up to the next integer, 
or remain the same if it is already an integer:*/
console.log(Math.ceil(4.2));//5
console.log(Math.ceil(8));//8
console.log(Math.ceil(-4.2));//-4
/* The Math.floor() method will round a number down to the next integer, 
or remain the same if it is already an integer: */
console.log(Math.floor(4.2));//4
console.log(Math.floor(8));//8
console.log(Math.floor(-4.2));//-5
/*The Math.round() method will round a number to the nearest integer:*/
console.log(Math.round(4.5));//5
console.log(Math.round(4.499));//4
console.log(Math.round(4.2));//4
/*The Math.trunc() method that returns the integer-part of a number 
– that is, it gets truncated at the decimal point: */
//POWERS AND ROOTS
/* The Math.pow() method will raise any number (the first argument) 
to the power of another number (the second argument): */
console.log(Math.pow(3,2)); // 3 * 3 = 9
console.log(Math.pow(5, 2));// 5 * 5 = 25 

/*The Math.sqrt() method returns the positive square root of a number:*/
console.log(Math.sqrt(121)); // 11
console.log(Math.sqrt(2)); // 1.4142135623730951

/* The Math.cbrt() method returns the cube root of numbers:*/
console.log(Math.cbrt(8)); // 2
console.log(Math.cbrt(-1000)); // -10 

/* The Math.hypot() method was also introduced in ES6. 
It returns the square root of the sum of the squares of all its 
arguments. This can be used to calculate the hypotenuse of a 
right-angled triangle: */ 
console.log(Math.hypot(3,4)); // 5
console.log(Math.hypot(2, 3, 6)); // 7


/* Logarithmic Methods
The Math.log() method returns the natural logarithm of a number:*/
console.log(Math.log(1));//0

/* Maximum & Minimum Methods
The Math.max() method returns the maximum number from its arguments:  */
console.log(Math.max(1,2,3))//3
//And the Math.min() method unsurprisingly returns the minimum number from the given arguments:
console.log(Math.min(1,2,3))//1
/* Random numbers */
console.log(Math.random());//0.14763073243530034
//The following code generates a random integer between 0 and 5 (it will never be 6, 
// because it always rounds down):
console.log(Math.floor(6 * Math.random())); // 2 
/* The Date Object */
const today = new Date();
console.log(today); //2022-04-23T20:55:47.919Z
