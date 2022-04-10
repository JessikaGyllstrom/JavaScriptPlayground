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