//LOGIC 

/* SUMMARY
Sets are ordered lists of non-duplicate values
Maps are ordered lists of key-value pairs

//Ternary operator
// as shorthand way of writing an if...else statement
// Syntax:
// condition ? (/code to tun if condition is true) : (code to run if condition is false)
const n = 5;
n%2 === 0 ? console.log('n is an even number') : console.log('n is an odd number'); //n is an odd number

// We could make the example even shorter by placing the ternary operator inside a template string:
console.log(`n is a ${(n%2 === 0)? 'even' : 'odd'} number`);

// NESTED FOR LOOPS
// You can place a loop inside another loop to create a nested loop. It will have an inner loop that will run all the way through before the next step of the outer loop occurs.
let j = 1;
for(let i=1 ; j<13 ; i++){
    for(let i=1 ; j<13 ; j++){
        console.log(`${j} multiplied by ${i} is ${i*j}`);
    }
}
/*
1 multiplied by 1 is 1
2 multiplied by 1 is 2
3 multiplied by 1 is 3
4 multiplied by 1 is 4
5 multiplied by 1 is 5
6 multiplied by 1 is 6
7 multiplied by 1 is 7
8 multiplied by 1 is 8
9 multiplied by 1 is 9
10 multiplied by 1 is 10
11 multiplied by 1 is 11
12 multiplied by 1 is 12
*/
// The outer loop counts up from i=1 to i=12. 
// For every iteration of the outer loop, the inner loop counts up from j=1 to j=12. This means that it starts in the first iteration with i = 1 and j = 1


for (let i = 0; i <= 2; i++) {
    console.log("- First level loop");
    for (let j = 0; j <= 3; j++) {
      console.log("-- Second level loop");
    }
}

//LOOPING OVER ARRAYS
const arr = [1, 2, 3, 4, 5, 6,]
for(let i=0, max=arr.length; i < max; i++){
    console.log(arr[i]);
}
//FOR OF LOOP
//This replaces all of the setup of a ‘for’ loop with a variable 
// (value in the example above) that represents the value of each 
// element in the array. Note that this variable needs to be declared 
// using const
for(const value of arr){
    console.log(value);
}

//LOOPING OVER SETS
const letters = new Set('hello');
for(const letter of letters) {
    console.log(letter);
}
/* 
h
e
l
o
*/
// Note that weak sets are non-enumerable, 
// so it’s not possible to loop over them in this way.

//LOOPING OVER MAPS
const romanNumerals = new Map(); romanNumerals.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
console.log(romanNumerals); //Map(5) { 1 => 'I', 2 => 'II', 3 => 'III', 4 => 'IV', 5 => 'V' }
for(const key of romanNumerals.keys()) {
    console.log(key); //1, 2, 3, 4, 5, 6
}

//There is also a values() method that lets us iterate over the values in a similar way:
for(const value of romanNumerals.values()) {
    console.log(value);
}
/* 
I
II
III
IV
V
*/

//If you want to access both the key and the value, you can use the entries() method:
for(const [key,value] of romanNumerals.entries()) {
    console.log(`${key} in Roman numerals is ${value}`);
}
/*
1 in Roman numerals is I
2 in Roman numerals is II
3 in Roman numerals is III
4 in Roman numerals is IV
5 in Roman numerals is V
*/
//Note that weak maps are also non-enumerable, so it isn’t possible to loop over them using any of the methods shown above.