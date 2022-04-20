// OBJECTS
/*
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