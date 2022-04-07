//Comparison operators
//Always return a boolean value
//Nan does not compare, DONT EVER COMPARE NAN TO NAN...like this =P ...

console.log(NaN == NaN);//FALSE

console.log(10 + "10"); // = "1010", 10 is changed into a string

null == undefined; //true
null === undefined; //false, checks if the datatype is the same

10 == "10"; //true, you can turn an integer into a string, but a string into an integer
10 === "10";//false, checks if the datatype is the same

//IS NOT EQUAL
null != null; //false
null != undefined; //false
10 != 100; //true
10 != "10"; //false, 10 is changed into a string
10 !== "10"; //true
null !== undefined; //true

var classRegister = ["Yoda", "Anakin", "Chewbacca"];

for(var i = 0; i < classRegister.length; i ++ )
 {
    console.log(classRegister[i]);
}
//FOR IN LOOP
for(var index in classRegister) {
    console.log("For in loop " + classRegister[index]);
}
/*you should use let instead of var if possible
let allows you to declare variables that are limited 
to the scope of a block statement, or expression on which it is used, 
unlike the var keyword, which declares a variable globally, or locally 
to an entire function regardless of block scope

The Document Object Model (DOM) is a programming interface for web documents. 
It represents the page so that programs can change the document structure, 
style, and content. The DOM represents the document as nodes and objects; 
that way, programming languages can interact with the page.*/