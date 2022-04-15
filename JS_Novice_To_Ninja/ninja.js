let score = 0; //can be changed
const firstName = "Alexa"; //wont change
// to see the value of a variable:
console.log(typeof firstName);
//declare and assign multiple variables:
let x = 3, y = 5, z = 4;
/* if the variable references a non-primitive data type, 
such as an array, function or object, then using constant will not 
make it immutable. This means the underlying data inside the object CAN
change (known as mutating the object):
*/
const named = { 
    value: "Alexa" //an object
}
named.value = "Siri";  //changes the value
console.log(named.value); // "Siri"
// try to avoid using VAR
/* Variables that start with an underscore generally refer to 
private properties and methods, so it’s best to not follow this 
convention for your own variable names.
The $ character is also used by the popular jQuery library, 
so using this in your variable names may also cause problems.*/
const nam = "Alexa";
console.log(nam.length);//5
// if you want to know which character is at a certain point: charAt()
console.log(nam.charAt(1));//"l" (because index start at 0)
// if you want to find where a certain character/substring appears in a string 
// we can use the indexOf()
console.log(nam.indexOf("A"));//0
console.log(nam.indexOf("l"));//1
// if we want to know if a string contains a certain character: includes() method
console.log(nam.includes("a")); //true
console.log(nam.includes("z")); //false
//check if a string starts with a certain character:
console.log(nam.startsWith("A")); //true
console.log(nam.endsWith("z")); //false
//concatenate two or more strings together:
"Javascript".concat("Ninja"); //JavascriptNinja
console.log("Hello".concat(" ", "World", "!")); //Hello World! 
// the trim() method will remove any whitespace from the beginning and end
// of the string
let hello = "     Hello World     ".trim();
console.log(hello); //"Hello"
// the repeat() method will repeat a string
console.log("Hey ".repeat(3)); // Hey hey hey
/* Template literals are a special types of string that were introduced in ES6. 
Template literals use the backtick character, ` , to deliminate the string, 
as shown in the example below: 
This has the advantage of being able to use both types of quote mark within 
the string: */
let templateLiterals = `She said, "It's Me!"`;
console.log(templateLiterals);
/*They also allow interpolation of JavaScript code. This means that a JavaScript 
expression can be inserted inside a string and the result will be displayed, 
as can be seen in the examples below: */
const namn = `Siri`;
/* Template literals can also contain line breaks, which are all converted into 
a Line Feed (\n):*/
console.log("This \n ends \n the line");
//output:
//this 
//ends 
//the line

/* Template literals can be thought of as super-powered strings as they behave 
in the same way as normal string literals, but with the extra power of string 
interpolation. For this reason, it is not uncommon to see backticks used to 
create all strings in ES6 code.*/

//SYMBOLS
/* They can be used to create unique values, 
which helps to avoid any naming collisions.*/
const uniqueID = Symbol();
// it is recommmended to add a description of the symbol inside the parentheses
const uniqueId = Symbol('this is a unique ID');
// because symbols are primitive values the typeof of returns the type of the symbol
console.log(typeof(uniqueID));//symbol
//it is possible for two variables to point to the same symbol if the for() method
// is used when the symbol is created:
const A = Symbol.for('shared symbol');
const B = Symbol.for('shared symbol');
/* The main use-case for symbols is as object property keys, which. 
The uniqueness of symbols, mean that it’s impossible for the names of 
any properties to clash with each other if they are symbols.*/

//numbers 
// check if a number is an integer
Number.isInteger(42);//true
Number.isInteger(3.142); //false
/* If a number starts with a 0x, it is considered to be in
 hexadecimal (base 16) notation: */
 console.log(0xAF); // 175
 //A represents 10, F represents 15
 /* If a number starts with a zero, followed by the
letter o, then it is considered to be in octal (base 8) notation:*/
console.log(0o47); //39
// 4 eights and 7 units

console.log(0b1010); //10
 // 1 eight, 0 fours, 1 two and 0 units)