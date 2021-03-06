// in computer science a cue is an abstract data structure 
// where items are kept in order
// new items can be added to the back of the cue
// old items can be taken off from the front of the cue
function nextInLine(arr, item) {
    arr.push(item);
    //moves the first item and returns it
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));//1,2,3,4,5
console.log(nextInLine(testArr, 6));//1
console.log("After: " + JSON.stringify(testArr));//2,3,4,5,6 

// equa == attempts to convert the both values to compare to a common type
console.log(3 == '3'); //true
console.log("3" == 3); //true


// strict equal === does not attempt to convert the values
console.log(3 === '3'); //false
console.log("3" === 3); //false

//switch statement
function caseInSwitch(val) {
    var answer = "";

    switch(val) {
        case 1: 
            answer = "alpha";
            break;
        case 2: 
            answer = "beta";
            break;
        case 3: 
            answer = "gamma"
            break;
    }
    return answer;
}
caseInSwitch(1);//alpha

var testObj = {
    12: "Namath",
    16: "Montana", 
    19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
console.log(playerNumber);//16
console.log(testObj[playerNumber]);//montana
console.log(testObj[12]);

var ourDog = {
    "name" : "camper",
    "age" : 4
};
ourDog.name = "Happy Camper";
console.log(ourDog.name);

//array with two objects: 
var myMusic = [
    {
        "artist": "Kvelertak",
        "song": "1985"
    },
    {
        "artist": "Machine Head",
        "song": "halo"
    }
];
//accessing nested objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passanger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContentent = myStorage.car.inside["glove box"];
console.log(gloveBoxContentent);

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulips",
            "dandelion"
        ]
    },
    {
        type: "trees", 
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var secondTree = myPlants[1].list[1];
console.log(secondTree); //pine

