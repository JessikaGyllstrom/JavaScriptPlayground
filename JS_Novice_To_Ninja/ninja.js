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
console.log("Hey".repeat(3));