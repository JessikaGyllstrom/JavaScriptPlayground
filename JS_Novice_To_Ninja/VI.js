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