//declare a variable 
//any datatype
//will be accessed in the whole program
var myName = "Jessika"
//will be accessed within the scope its created
let ourName = "freecodecamp";
//can never be changed
const pi = 3.14;
//declaring a variable
var a;
//declaring and assigning
var b = 2;
//increment
myVar++;
//remainder, gives the remainder of a division
//often used to find out if a number is even or not
var remainder = 11 % 3;

a = a + 12;
//can also be written:
a += 12;

a = a - 12;
//can also be written:
a -= 12;

a = a * 5;
//can also be written:
a *= 5;

a = a / 5;
//can also be written:
a /= 5;

b = 9 + b;
//can also be written:
b += 9;

//when a string contains a quote, use escape-character or ''
var myStr = "I am a \"quote\" ";
var myStr = 'I am a "quote" ';

var awsome = "awsome";
var str = "free code camp is ";
str += awsome;

var firstName = "Ada";
firstLetter = firstName[0];

//strings are immutable
var myStr = "Jello world";
//you cant change an individual letter like this:
myStr[0] = "H";
//this is OK:
myStr = "Hello World";

var ourArray = ["John, 23"]
//nested array/multidimensional array
var myArray = [["Bulls", 23], ["Jessi", 10] ];

var ourArray = [50, 60, 70];
var myData = myArray[0];//50

//modify array data
var ourArray = [50, 60, 70];
ourArray[1] = 45; //50, 45, 70
//modify multidimensional array data
var  myArray = [[1,2,3], [4,5,6],[7,8,9]];
var myData = myArray[2][1];
console.log(myData);//8

//push to append data to the end of an array
//push()
var ourArray = ["Simpson", "J", "cat"];
ourArray.push(["happy", "Joy"]);

//remove an item from an array with pop()
var ourArray = [1,2,3];
var removeFromArray = ourArray.pop();
//removeFromArray now equals 3 and ourArray is 1,2
var myArray = [["John", 23], ["cat", 2]];
var removeFromMyArray = myArray.pop();
//myArray = John, 23

//shift is like pop only it removes at the start instead
var ourArray = ["stimpson", "j", "cat"];
var removedFromOurArray = ourArray.shift();
//ourArray is now "j", "cat"

//unshift is like push only it adds element at the start instead
var ourArray = ["stimpson", "j", "cat"];
ourArray.shift("Happy");
//ourArray now equals "happy", "stimpson", "j", "cat"

// parameters are variables that act as place holders for the values
// that are to be input to a function when it is called
function ourFunctionWithArgs(a, b); {
    console.log(a-b);
}
ourFunctionWithArgs(10,5); //output is 5

//local variables are only accessed within the scope its declared in
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);//5
}
myLocalScope();//5
console.log();//reference error

