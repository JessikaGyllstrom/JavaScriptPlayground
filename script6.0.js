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

