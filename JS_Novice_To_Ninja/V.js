//FUNCTIONS
/* In JavaScript, functions are considered to be first-class 
objects. This means they behave in the same way as all the 
other primitive data types and objects in the language. 
They can be be assigned to variables, stored in arrays 
and can even be returned by another functions.*/

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
Don’t Repeat Yourself,1 or DRY, is a principle of programming 
that specifies that every part of a program should only be 
written once. This avoids duplication and means there’s no 
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