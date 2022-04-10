var myArray = [];
var i = 0;
while(i < 5 ) {
    myArray.push(i);
    i++;
}
console.log(myArray);

var ourArray= [];

for (var i = 0; i < 10; i++) {
    ourArray.push(i + " =) ");
}
console.log(ourArray);

var evenNumbersArray= [];

for (var i = 0; i < 10; i += 2) {
    evenNumbersArray.push(i);
}
console.log(evenNumbersArray);

var oddNumbersArray= [];

for (var i = 1; i < 10; i += 2) {
    oddNumbersArray.push(i);
}
console.log(oddNumbersArray);

//count backwards
var backArray = [];

for (var i = 10; i > 0; i -= 1) {
    backArray.push(i);
}
console.log(backArray);

// iterate array 
var numArray = [1,2,3,4,5,6,7,8,9,10];
var total = 0;
for (var i = 0; i < numArray.length; i ++) {
    total += numArray[i];
}
console.log(total); //55