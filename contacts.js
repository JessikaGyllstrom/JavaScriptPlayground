var contacts = [
    {
        "firsName": "Chibby",
        "lastName": "Cheesecake",
        "number": "1",
        "likes": ["food", "treats"]
    },
    {
        "firsName": "professor",
        "lastName": "fluff",
        "number": "2",
        "likes": ["sleep", "sleep"]
    },
    {
        "firsName": "Toshi",
        "lastName": "shogun",
        "number": "3",
        "likes": ["cats", "treats"]
    },
];
function lookUpProfile(name, prop) {
    // iterate through contacts
    for(var i = 0; i < contacts.length; i++) {
        // if contact is in list
        if(contacts[i].firsName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "no such contact";

}
var data = lookUpProfile("Chibby", "likes");//food, treats
var data = lookUpProfile("Nisse", "likes"); // no such contact
console.log(data);

/*
The Math.random() function returns a floating-point, 
pseudo-random number in the range 0 to less than 1 
(inclusive of 0, but not 1) with approximately uniform 
distribution over that range — which you can then scale 
to your desired range. 
*/

//random fractions
function randomFraction() {
    return Math.random();
}
console.log(randomFraction()); //0.7202126227478971

// The Math.floor() function returns the largest integer 
// less than or equal to a given number.
function randomWholeNum() {
    //a random number between 0 and 9
    return Math.floor(Math.random()*10);
}
console.log(randomWholeNum());