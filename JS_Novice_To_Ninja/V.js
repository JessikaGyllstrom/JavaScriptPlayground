//FUNCTIONS

/* 
SUMMARY
* functions are first class objects that behave the same way as the other values
* function literals can be defined useing the function declaration, 
or by creating a function expression by assifninf an anonymous function to a variable
* all functions return a value. If it is not explicitly stated the function
will return undefined
* a parameter is a value that is written in the parentheses of a function
declaration and can be used like a variable inside the functions body
* an argument is a value that is provided to a function when its invoked
* the arguments variable is an array-like object that allows
access to each argument provided to the function using index notation
* the rest operator can be used to access multiple arguments in an array
* default arguments can be supplied to a function by assigning them to the parameters
* arrow functions are a shorthand notation thatcan be used to write anonymous functions
* Function declarations can be invoked before they are defined because they are hoisted 
to the top of the scope, but function expressions cannot be invoked until after they 
are defined.
* A callback is a function that is provided as an argument to another function.
*/


/* In JavaScript, functions are considered to be first-class 
objects. This means they behave in the same way as all the 
other primitive data types and objects in the language. 
They can be be assigned to variables, stored in arrays 
and can even be returned by another functions.*/

const { S } = require("caniuse-lite/data/agents");

function hello(){
    console.log('Hello World!');
}

// Another way of defining a function literal is to create 
// a function expression. This assigns an anonymous function 
// to a variable:
const goodbye = function(){
    console.log('Goodbye World!');
};
/*
The function in this example is known as an anonymous function 
because it doesn't have a name; it is simply created, 
then assigned to the variable goodbye. Alternatively, 
we can create a named function expression instead: */
const goodb = function bye(){
    console.log('Goodbye World!');
};
// All functions have a read-only property called name, 
// which can be accessed like so:
console.log(hello.name);// helo

//Anonymous functions have an empty string as their 
// name property in most browsers, although some versions 
// of Internet Explorer use undefined.
/*
Keep Your Code DRY
Don???t Repeat Yourself,1 or DRY, is a principle of programming 
that specifies that every part of a program should only be 
written once. This avoids duplication and means there???s no 
need to keep multiple pieces of code up to date and in sync. */
goodb();

//returning values
function howdy(){
    return 'Howdy World!';
}
const message = howdy();
console.log(message); //Howdy World!

/*
Parameters and arguments are terms that are often used 
interchangeably to represent values provided for the 
function as an input. There is a subtle difference though:
any parameters a function needs are set when the function 
is defined. When a function is invoked, it is provided with arguments. 
*/
function square(x){
    return x*x;
}
console.log(square(4.5));//20.25

function mean(a,b,c){
    return (a+b+c)/3;
}
console.log(mean(1, 3, 6));//3.3333333333333335

/* 
If a parameter is not provided as an argument when 
the function is invoked, the function will still be 
invoked, but the parameter will be given a value of 
undefined. If we try to invoke the mean function with 
only two arguments, we can see that it returns NaN 
because the function cannot do the required operation 
with undefined:
*/
console.log(mean(1,2)); //NaN

/*
Every function has a special variable called arguments. 
This is an array-like object that contains every argument 
passed to the function when it is invoked. We can create 
a simple function called arguments() that will return the 
arguments object so we can see what it contains: */

function arguments(){
    return arguments;
}
console.log(arguments('hello', NaN)); //[Arguments] { '0': 'hello', '1': NaN }
console.log(arguments(1,2,3,4,5)); //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

/*As you can see, the arguments object that is returned 
contains every value that was entered. These can then be
accessed using an index notation like we did with arrays,
so the first argument would be accessed using arguments[0]. */
// A much better option is to use the rest operator. */


function rest(...args){
    for(arg of args){
        console.log(arg);
    }
}
//[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

function mean(...values) {
    let total = 0;
    for(const value of values) {
        total += value;
        }
    return total/values.length;
}
console.log(mean(2,8,13,11,4,2));

/*
Default Parameters
ES6 introduced a convenient way to specify default parameters 
for a function. These are values that will be used by the 
function if no arguments are provided
when it is invoked. */
function hello(name='World') {
    console.log(`Hello ${name}!`)
}
hello();//'Hello World!'

hello('universe');// Hello universe!

/* Default parameters should always come after non-default
 parameters, otherwise default values will always have to 
 be entered anyway. Consider the following function for 
 calculating a discounted price in a store: */

/*
This function takes two arguments: the price of an item 
and the percentage discount to be applied. The store???s most
common discount is 10%, so this is provided as a default 
value. This means that the amount argument can be omitted
in most cases and a 10% discount will still be applied:
If a different discount is applied, the amount 
can be provided:
This will fail to work, however, if the parameters are
reversed:
Now if we try to use the function with just one argument,
the function won???t work, because price has not been set: */

function discount(price, amount=10) {
    return price*(100-amount)/100;
}
console.log(discount(20)) // standard discount of 10%, 18
console.log(discount(15, 20)) // standard discount of 20%

//ARROW FUNCTIONS
// These make declaring functions much more succinct by using less verbose syntax.
// Arrow functions can be identified by the arrow symbol, => that gives them their name. 
// The parameters come before the arrow and the main body of the function comes after. 
// Arrow functions are always anonymous, so if you want to refer to them, you must assign 
// them to a variable. For example, the square function we wrote earlier can be written like so:
const sq = x => x*x;
console.log(sq(5));//25
console.log(sq(15));//225

const add = (x,y) => x + y;
console.log(add(5,2));

/*
Function Hoisting
Hoisting is the JavaScript interpreter???s action of moving 
all variable and function declarations to the top of the 
current scope, regardless of where they are defined.
Functions that are defined using a function declaration 
are automatically hoisted, meaning they can be invoked 
before they have been defined. For example, in the 
following code the function hoist() can be invoked 
before it is actually defined: */

// function is invoked at the start of the code
hoist();
// ...
// ... lots more code here
// ...
// function definition is at the end of the code
function hoist(){
console.log('Hoist Me!');
}
/* This can be quite useful as it means that all 
function definitions can be placed together, possibly 
at the end of a program, rather than having to define 
every function before it is used. */

console.log(name); // will return undefined before ??? assignment
// variable is defined here
var name = 'Alexa';

//CALLBACKS
/* functions can also be given as a parameter to another function. 
A function that is passed as an argument to another is known 
as a callback. */
function sing(song) {
    console.log(`I'm singing along to ${song}`);
}
sing('Let It Go'); //I'm singing along to Let It Go


/*
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished */

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
// callback function
function callMe() {
    console.log('I am callback function');
}
// passing function as an argument
greet('Peter', callMe);

//Sorting Arrays With A Callback
//Here???s an example of a numerically function that can be 
//used as a callback to sort numbers:
/*
This simply subtracts the two numbers that are being 
compared, giving a result that is either negative 
(if b is bigger than a), zero 
(if a and b are the same value), or positive 
(if a is bigger than b).*/
function numerically(a,b) {
    return a-b;
}
console.log([1,3,12,5,23,18,7].sort(numerically));
/*
   1,  3,  5, 7,
  12, 18, 23
  */

const colors = ['Red', 'Green', 'Blue']
for(let i = 0, max = colors.length ; i < max ; i++ ) {
    console.log(`Color at position ${i} is ${colors[i]}`);
}
/*
Color at position 0 is Red
Color at position 1 is Green
Color at position 2 is Blue
*/
colors.forEach( (color,index) =>
    console.log(`Color at position ${index}  is ${color}`) );
/*
Color at position 0  is Red
Color at position 1  is Green
Color at position 2  is Blue
*/
const cats = ['siamese', 'ragdoll', 'bengal', 'maine coon'];

for(let i = 0, max = cats.length ; i < max ; i++ ) {
    console.log(`Cat at index ${i} is ${cats[i]}`);
}
/*
Cat at index 0 is siamese
Cat at index 1 is ragdoll
Cat at index 2 is bengal
Cat at index 3 is maine coon
*/
cats.forEach ((cats, index) =>
console.log(`cat at place ${index} is ${cats}`) );
/*
cat at place 0 is siamese
cat at place 1 is ragdoll
cat at place 2 is bengal
cat at place 3 is maine coon
*/

/* map()
The map() method is very similar to the forEach() method. 
It also iterates over an array, and takes a callback 
function as a parameter that is invoked on each item 
in the array. */
console.log([1,2,3].map( square ));
console.log([1,2,3].map( x => 2 * x));
/*
Reduce()
The reduce() method is another method that iterates 
over each value in the array, but this time it 
cumulatively combines each result to return just a 
single value. The callback function is used to describe 
how to combine each value of the array with the running 
total. */

const sentence = 'The quick brown fox jumped over the lazy dog';
// The sentence can be converted into an array using the split() method:
let sentArray = sentence.split();
console.log(sentArray); // [ 'The quick brown fox jumped over the lazy dog' ]
// calculate the total number of letters in the sentence
//const total = sentArray.reduce( (acc,sentArray) => acc + sentArray.length,0 );
//console.log(total);//44
/*
Filter()
The filter() method returns a new array that only contains 
items from the original array that return true when passed 
to the callback. For example, we can filter an array of 
numbers to just the even numbers using the following code: */

const numbers = [ 2, 7, 6, 5, 11, 23, 12 ]
 console.log(numbers.filter(x => x%2 === 0 )); // this returns true if the number is even
// 2, 6, 12

