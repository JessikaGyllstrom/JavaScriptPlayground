const { x } = require("caniuse-lite/dist/lib/supported");

const myArray = [];
console.log(typeof([])); //object
// initializing an array 
const heroes = [];
// assigning 
heroes[0] = "wonderwoman";
heroes[1] = "flash";

const avengers = ['captain america', 'iron man', 'thor', 'hulk'];

//This array contains a variety different data types, 
//as well as an empty array object:
const mixedArray = [ null, 1, [], 'two', true ];

//removing values from an array
delete avengers[3]; //returns true if it was possible
/*
Watch out for this as it can even trip up experienced 
programmers. The value that was in position 3 ('Hulk') 
has been deleted from the array, but the space that it 
occupied is still there and contains a value of undefined. 
This means the array still has the same number of elements, 
and the position can still be referenced as an index, 
but it will just return undefined: */

const cats = ['bengal', 'ragdoll', 'siamese'];
delete cats[2];
console.log(cats); //[ 'bengal', 'ragdoll', <1 empty item> ]


//Destructuring Arrays: the concept of taking values out of 
// an array and presenting them as individual values
// Destructuring allows us to assign multiple values 
// at the same time
let [p,q] = [1,2];
console.log(p);//1
console.log(q);//2

//Destructuring also gives us a neat way of 
//swapping the value of two variables
[p,q] = [q,p];
console.log(p);//1
console.log(q);//2

