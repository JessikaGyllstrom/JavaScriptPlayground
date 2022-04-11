// the .map() method executes a callback function on each element
// in an array. It returns the a new array made up of the return
// values from the callback function
const finalParticipants = [
    "Taylor", "Don", "Donald", "Natasha", "Bobby"
];
const announcements = finalParticipants.map(member => {
    return member + " joined the contest.";
})
console.log(announcements);

var student = {
    name: "Sheldon",
    score: 100,
    grade: "A"
}
delete student.score
student.grade = "F";
console.log(student);

// the shorthand property name syntax allows creating objects 
// without explicitly specifying the property name 
const activity = "surfing";
const beach = {activity};
console.log(beach); // activity: "surfing"

const oddNumbers = [1,3,5,7];
const evenNumbers = oddNumbers.map(number => {
    return number * 2
});
console.log(evenNumbers);

/* The JSON.parse() method parses a JSON string, 
constructing the JavaScript value or object described by the string.
An optional reviver function can be provided to perform a 
transformation on the resulting object before it is returned.
*/

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true


//nested for loop
for(let outer = 0; outer < 2; outer += 1) {
    for(let inner = 0; inner < 3; inner += 1) {
        console.log(`${outer}` + "-" + `${inner}` );
    }
}
/* output:
0-0
0-1
0-2
1-0
1-1
1-2
*/ 

// ternary operator 
// condition ? statement-if-true : statement-if-false;
function checkEqual(a, b) {
    return a === b ? true : false;    
}
checkEqual(1,2);

//multiple ternary operators
function chechSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(chechSign(0));//zero
console.log(chechSign(2)); //positive
console.log(chechSign(-2)); //negative

/*  var vs. let
// you cant declare the let more than once
// try to only use let and const when you declare variables
// add "use strict" at start of code
You can use strict mode in all your programs. 
It helps you to write cleaner code, like preventing you from 
using undeclared variables.
*/
//let is only accessed in the scope its declared 

/*
const is like let
Variables defined with const cannot be Redeclared.
Variables defined with const cannot be Reassigned.
Variables defined with const have Block Scope.
LET: 
The scope of a let variable is block scope.
It can be declared without initialization.
CONST: 
The scope of a const variable is block scope.
It cannot be declared without initialization.
*/
const CONSTANT = "CONSTANT";
//CONSTANT = "new constant"; //ERRROR
console.log(CONSTANT);

let lett = "lett";
lett = "new lett"; //"new lett"
console.log(lett);

//ALWAYS USE CONST IF YOU KNOW THAT THE VALUE SHOULD NEVER BE CHANGED
//USE CAPITAL LETTERS

const s = [5, 7, 2];
function editInPlace(arr) {
    // ERROR s = [2, 5, 7];
    s[0] = 2; // this is OK!

    return s;
}
console.log(editInPlace(s));

//object.freeze will prevent data mutation
function freezeObj() {
    'use strict';
    const MATH_CONSTANT = {
        PI: 3.14
    };
    try {
        MATH_CONSTANT.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANT.PI;
}
const PI = freezeObject();
console.log(PI); // 99

function freezeObject() {
    'use strict';
    const MATH_CONSTANTS = {
        PII: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PII = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PII;
}
const PII = freezeObject();
console.log(PII); // TypeError: Cannot assign to read only property 

// this is an anonymous function (no name) :
var magic = function() {
    return new Date();
}
console.log(magic()); //2022-04-11T09:43:03.245Z
// whenever you have an anonymous function you can convert 
// it into an arrow-function
var magic = () => {
    return new Date();
}
// if you only return one value you can simplify it even more:
var magic = () => new Date();

//arrow-functions with parameters
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(myConcat([1, 2], [3, 4, 5]));

//BETTER WRITTEN:
var myCon = (arr1, arr2) => arr1.concat(arr2);

console.log(myCon([1, 2], [3, 4, 5]));

const letters = ["y", "x", "a", "p", "b"];
letters.sort();
console.log(letters);

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0)
    .map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// Return an array of all values in ages[] that are 18 or over:

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);

// Multiply all the values in an array with 10:
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

const increment = (function () {
    // if a value isnt given it will set to 1
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));

// the rest operator allows you to create a function that takes a 
// variable number of arguments
const sum = (function() {
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3));
//the rest-operator ... allows you to pass in any number of args
const summ = (function() {
    return function summ(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(summ(1, 2, 3, 4, 5, 6));