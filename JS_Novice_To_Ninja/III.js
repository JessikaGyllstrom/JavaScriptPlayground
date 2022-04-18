const { C } = require("caniuse-lite/data/agents");
const cssConicGradients = require("caniuse-lite/data/features/css-conic-gradients");
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

//To find the length of an array, we can use the length property:
avengers.length;

//The length property can be used as part of the index 
// to find the last item in an array 
avengers[avengers.length - 1];
//The length property is mutable, meaning you can manually change it:
avengers.length = 2;
// if you make the array bigger the extra slots will be
//filled with undefined
avengers.length = 10;
console.log(avengers); //[ 'captain america', 'iron man', <8 empty items> ]

//Pop, Push, Shift, and Unshift

// to remove the last item from an array: pop() method
const fruits = ['bananas', 'apples', 'melon', 'pear']
fruits.pop();//removes pear
console.log(fruits);//[ 'bananas', 'apples', 'melon' ]

//to remove the first item: shift() method
fruits.shift();
console.log(fruits);//[ 'apples', 'melon' ]

//to append a new value at the end of the array
fruits.push("Kiwi");
console.log(fruits);//[ 'apples', 'melon', 'Kiwi' ]

//to append a new value at the beginning of an array: unshift();
fruits.unshift('strawberry');
console.log(fruits);//[ 'strawberry', 'apples', 'melon', 'Kiwi' ]

//merging arrays
// the concat() method can be used to merge an array with one or more arrays
let monsters = ['frankenstein', 'dracula', 'wolfman'];
monsters.concat(["hulk", "black widow"]);
console.log(monsters); //[ 'frankenstein', 'dracula', 'wolfman' ]

/* Note that this does not change the avengers array, 
it simply creates another array combining the two arrays. 
You can use assignment to update the avengers array to this new array: */
monsters = monsters.concat(["mummy", "creatue"]);
console.log(monsters); //[ 'frankenstein', 'dracula', 'wolfman', 'mummy', 'creatue' ]

// An alternative is to use the new spread operator that was added to ES6. The spread operator is three dots
monsters = [... monsters,  ...["bride", "invisible man"]];
console.log(monsters); // console.log(monsters);

//The join() method can be used to turn the array into a string that comprises all
// the items in the array, separated by commas:
monsters.join();
console.log(monsters); 


// You can choose a separator other than a comma by placing it inside the parentheses.
// Let’s try using an ampersand:

monsters.join('&');
console.log(monsters); 

/* SLICE 
The slice() method creates a subarray; effectively chopping 
out a slice of an original array */
console.log(monsters.slice(0, 4));//[ 'frankenstein', 'dracula', 'wolfman', 'mummy' ]
// Note that this operation is non-destructive ― no items are actually removed from the array

/* The splice() method removes items from an array then inserts new items in their place.*/
/*
The first number in the parentheses tells us the index at which to start the splice. 
In the example we started at index 3, which is the fourth item in the array (Hulk). 
The second number tells us how many items to remove from the array. 
In the example, this was just one item.*/
monsters.splice(0, 1, 'Scarlet Witch');
console.log(monsters); 
/*
'Scarlet Witch',
'dracula',
'wolfman',
'mummy',
'creatue',
'bride',
'invisible man'
*/
/* The splice() method can also be used to insert values into an array 
at a specific index without removing any items, by indicating that zero 
items are to be removed: */ 
monsters.splice(0, 0, 'Frankenstein');
console.log(monsters); 
/*
'Frankenstein',
  'Scarlet Witch',
  'dracula',
  'wolfman',
  'mummy',
  'creatue',
  'bride',
  'invisible man'
*/

/*
We saw earlier that we can use the delete operator 
to remove an item from an array. Unfortunately, this leaves 
a value of undefined in its place. If you want to
remove a value completely, you can use the splice() method 
with a length of 1 and without specifying any values to add:*/
//thos will remove the item att index 2
monsters.splice(2,1);
console.log(monsters); 
/*
  'Frankenstein',
  'Scarlet Witch',
  'wolfman',
  'mummy',
  'creatue',
  'bride',
  'invisible man'
*/
//We can reverse the order of an array using the reverse() method:
monsters.reverse();
console.log(monsters); 
/*   
  'invisible man',
  'bride',
  'creatue',
  'mummy',
  'wolfman',
  'Scarlet Witch',
  'Frankenstein'
*/
// We can sort the order of an array using the sort() method:
let actors = ['Tom Hardy', 'Jason Mamoa', 'Brad Pitt'];
actors.sort();
console.log(actors); // [ 'Brad Pitt', 'Jason Mamoa', 'Tom Hardy' ]

//Finding if a Value is in an Array
console.log(actors.indexOf('Jason Mamoa')); //
//includes() method. This returns a boolean value depending on whether 
// the array contains a particular element or not:
console.log(actors.includes('Brad Pitt'));//true
console.log(actors.includes('Thor'));//false

//You can even have an array of arrays, known as a multidimensional array. 
const coordinates = [[1,3],[4,2]];

/*
To access the values in a multidimensional array, 
we use two indices: one to refer to the item’s place 
in the outer array, and one to refer to its place in the 
inner array: */
console.log(coordinates[0][0]); // The first value of the first array
// 1
console.log(coordinates[1][0]); // The first value of the second array
// 4
console.log(coordinates[0][1]); // The second value of the first array
//3

/* The spread operator that we met earlier can be used to flatten 
multi-dimensional arrays. Flattening an array involves removing 
all nested arrays so all the values are on the same level in the array */
const summer = ['Jun', 'Jul', 'Aug'];
const winter = ['Dec', 'Jan', 'Feb'];
const nested = [ summer, winter ];
const flat = [...summer, ...winter];
console.log(flat); // [ 'Jun', 'Jul', 'Aug', 'Dec', 'Jan', 'Feb' ]

/* A set is a data structure that represents a collection
 of unique values, so it cannot include any duplicate values.*/
 const list = new Set();
 list.add(1);
 list.add(2);
 list.add(3).add(4);
 console.log(list); //Set(4) { 1, 2, 3, 4 }

 // If you try to add a value that is already contained in the set, then the operation is simply ignored:
list.add(1);

//Multiple values can be added to a set in one go by placing them inside an array that is provided as an argument:
list.add([5,6,7]);
console.log(list); //Set(5) { 1, 2, 3, 4, [ 5, 6, 7 ] }

const moreNumbers = new Set([7,7,7,7,7,8,8,8,9,9]);
console.log(moreNumbers);

//If a string is used as the argument then each character will be added as a separate element, with any repeated characters ignored:
const letters = new Set('hello');
console.log(letters); //Set(4) { 'h', 'e', 'l', 'o' }

//If you want to add separate words, you need to use the add() method:
const words = new Set().add('the').add('quick').add('brown').add('fox');
console.log(words); //Set(4) { 'the', 'quick', 'brown', 'fox' }



const arrays = new Set().add([1]).add([1]);
console.log(arrays); // Set(2) { [ 1 ], [ 1 ] }


//The number of values in a set can be found using the size() method:
const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
console.log(jla.size);// 3

// The has() method can be used to check if a value is in a set. This returns a
// boolean value of true or false:
console.log(jla.has('Superman')); // true
console.log(jla.has('Green Lantern')); // false

// Removing Values From Sets
/* The delete() method can be used to remove a value 
from a set. This returns a boolean value of true if the value
 was removed from the set, or false if the value wasn’t in the 
 set and couldn’t be removed: */
console.log(jla.delete('Superman')); //true
console.log(jla.delete('Flash')); //false
//The clear() method can be used to remove all values from a set:

//Converting Sets to Arrays
//A set can be converted into an array by placing the set, along with the spread operator directly inside an array literal.
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
console.log(shoppingSet);
//then we convert it to an array
const shoppingArray = [...shoppingSet];
console.log(shoppingArray); // [ 'Apples', 'Bananas', 'Beans' ]

//It's also possible to use the Array.from() method to convert a set into an array.
const shoppingArr = Array.from(shoppingSet);
console.log(shoppingArr);

/*
By combining this use of the spread operator with the ability 
to pass an array to the new Set() constructor, we now have a 
convenient way to create a copy of an array with any duplicate 
values removed: 
*/
const duplicate = [3, 1, 4, 1, 5, 9, 2, 6 ,5,3,5,9]; //[ 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9 ]
const nonDuplicate = [...new Set(duplicate)];// [ 3, 1, 4, 5, 9, 2, 6 ]

console.log(nonDuplicate);//  3, 1, 4, 5, 9, 2, 6

/* weak sets
When objects are added to sets, they will be stored there 
as long as the set exists, even if the original reference 
 the object is removed. The technical term for this is the 
 object is prevented from being garbage-collected, which 
 can cause a memory leak. This can be seen in the following 
 example:
 */
let array = [1,2,3];
const strong = new Set().add(array);

array = null; // remove the reference to the original
console.log(array);//null
console.log(strong);//[ 1, 2, 3 ] 
//The array still exists inside the set and we can get the
// original value of array back using the spread operator:
array = [...strong][0];
console.log(array);//[ 1, 2, 3 ] 

/*
A memory leak occurs when a program retains references 
to values that can no longer be accessed in its memory. 
This means that memory is being used to store values that 
are no longer required by the program, effectively wasting 
system resources.
Memory leaks can cause problems by gradually reducing the 
overall memory available, which can cause the program, 
or even the entire system, to run more slowly.
Most modern programming language, including JavaScript,
employ various dynamic memory management techniques such 
as garbage collection, which is the process of automatically
removing items from memory that are no longer required
 by the program. Some languages, such as C++, require 
 the programmer to manually manage memory by removing 
 items from memory once they are finished with.
 Weak sets avoid this situation by garbage collecting 
 any references to a “dead object” that’s had its original 
 reference removed.*/

 const weak = new WeakSet();

 /* MAPS
 Maps were another data structure introduced in the ES6 specification. They are a convenient way of keeping a list of key and value pairs, and are similar to “hashes”, or“hash tables” or “dictionaries” in other programming languages.
const array = [1,2,3];
weak.add(array);
<< WeakSet {}
weak.has(array);
<< true
weak.delete(array);
<< true
weak.has(array);
<< false

 At first glance, maps appear to be similar to JavaScript objects (covered in Chapter 5), but they have some noticeable differences:
Objects are limited to using strings for key values, whereas maps can use any data type as a key.
There is no efficient way to find the number of key-value pairs an object has, whereas this is easy to do with maps using the size property.
Objects have methods that can be called (see Chapter 5) and prototypes that can be used to create a chain of inheritance (see Chapter 12), whereas maps are solely focused on the storage and retrieval of key-value pairs.
The value of an object’s properties can be accessed directly, whereas maps restrict you to using the get() method to retrieve any values.
*/

//creating maps
const romanNumberals = new Map();
// the set() method can be used to add a key and value pair to a map
romanNumberals.set(1, 'I');
console.log(romanNumberals); // Map(1) { 1 => 'I' }
romanNumberals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V')

// Map methods 
// A map is a bit like a dictionary where you can look up 
// a value based on the key. To look up a value, we can 
// use the get() method:

romanNumberals.get(0); // Map(1) { 1 => 'I' }

// The has() method can be used to check if a particular 
// key is in a map. This returns a boolean value of true 
// or false:
console.log(romanNumberals.has(5));//true
console.log(romanNumberals.has(25));//false
// Removing Entries From Maps
// The delete() method can be used to remove a key and value 
// pair from a map. This returns a boolean value of true if 
// the value was removed or false if it wasn’t in the map. 
// To delete a specific value, you need to specify the key in parentheses:
console.log(romanNumberals.delete(1)); 
console.log(romanNumberals); //Map(4) { 2 => 'II', 3 => 'III', 4 => 'IV', 5 => 'V' }
//the clear() method will remove all key and value pairs from a map
romanNumberals.clear();
console.log(romanNumberals); //Map(0) {}

//CONVERTING MAPS TO ARRAYS 
/* Maps can be converted into a nested array of key-value pairs in a similar way to sets;
 using either the spread operator: */
