const { picture } = require("caniuse-lite/data/features");

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

 //Exponential Notation
 /*Numbers can also be represented in exponential notation, 
 which is shorthand for "multiply by 10 to the power of"...*/

 console.log(1e6); //1000000
 // means 1 multiplied by 10 to the power 6 (a million)

 console.log(2E3); //2000
 // 2 multiplied by 10^3 (two thousand)

 console.log(2.5e-3); //0.0025
// means 2.5 multiplied by 10 to the power -3

// the toExponential() returns the number as a string in exponential notation.
console.log(5..toExponential());  //5e+0

//The toFixed() method rounds a number to a fixed number of decimal places:
const PI = 3.1415926;
console.log(PI); //3.1415926
PI.toFixed(3);
console.log(PI); //3.141
// Note that the value is returned as a string, rather than a number.

/* The toPrecision() methos rounds a number to a fixed number of significant
figures that is returned as a string */
console.log(325678..toPrecision(2)); // "3.3e+5"

console.log(2.459.toPrecision(2)); // "2.5"

//Arithmetic Operations
console.log(23%6); // the remainder: 5

let points = 1;
points += 5;
console.log(points);//6
points -= 5; 
console.log(points);//1
points *= 10; 
console.log(points);//10
points /= 2; 
console.log(points);//5
points %= 7;//changes the value of points to the remainder it its current
//value is divided by 7 
console.log(points);//5

// increment a value by 1:
points ++;
console.log(points);//6

/*Both operations increase the value of the points variable by 1, 
but points++ will return the original value then increase it by 1, 
whereas ++points will increase the value by 1, then return the new value:*/

let number = 1; 
number ++;//will return 1 THEN increase number
++ number;//will increase number THEN return it

/* Infinity is a special error value in JavaScript that is used to represent 
any number that is too big for the language to deal with. The biggest number 
that JavaScript can handle is 1.7976931348623157e+308:*/

/* NaN is an error value that is short for "Not a Number". 
It is used when an operation is attempted and the result isn’t numerical, 
like if you try to multiply a string by a number, for example: */
console.log("hello" * 5); //NaN

/* You can check if a value is a number that can be used by using the 
Number.isFinite() method. This will return true if the value is a number 
that isn’t Infinity, -Infinity or NaN:*/

Number.isFinite(1/0);//false
Number.isFinite(-Infinity);//false
Number.isFinite(NaN);//false
Number.isFinite(42);//true

/*Type coercion happens when the operands of an operator are of different types. 
In this case, JavaScript will attempt to convert one operand to an equivalent 
value of the other operand’s type. For example, if you try to multiply a 
string and a number together, JavaScript will attempt to coerce the string 
into a number: */
let multi = '2' * 8; 
console.log(multi);// 16

/*JavaScript is known as a weakly typed or loosely typed language. 
This means that you don’t need to explicitly specify what data-type a variable 
is when you declare it. This can lead to unexpected behavior and hard to find 
bugs in code, particularly when type-coercion takes place in the background.*/

/*The best way to change a string to a number is to use the Number method. 
This will convert the string form of a number into an actual number: */
Number('23');
//if the string cannot be converted into a number, NaN is returned
Number('hello');//NaN

/* The preferred way of changing a number to a string is to use the 
String function:*/
String(3);//"3"
//another option is to use the toString() method
10..toString;//'10'

// parsing numbers
/* There is also a useful function called parseInt() that can be 
used to convert a string representation of a numerical value back into a number. */
parseInt('1010', 2);//converts from binary back to decimal
parseInt('omg', 36);//31912


//UNDEFINED 
//Undefined is the value given to variables that have not been assigned a value.

//NULL
//Null means “no value”. It can be thought of as a placeholder that 
//JavaScript uses to say "there should be a value here, but there isn’t at the moment."

console.log(10+null);//10 Null behaves like zero
console.log(10+undefined);// NaN undefined is not a number
//null is coerced to be 0, making the sum possible, whereas undefined is 
//coerced to NaN, making the sum impossible to perform

//FALSY VALUES
//only 9 values are always false  & these are known as falsy values
console.log(Boolean("")); //false: double quoted empty string literal
console.log(Boolean('')); // false: single quoted empty sting literal
console.log(Boolean(``)); // false :: empty template literal
console.log(Boolean(0)); // false
console.log(Boolean(-0));// false
console.log(Boolean(NaN));// false
console.log(Boolean(false));// false
console.log(Boolean(null));// false
console.log(Boolean(undefined));// false

