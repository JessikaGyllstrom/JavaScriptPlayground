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
console.log(supergirl[realNAme]);