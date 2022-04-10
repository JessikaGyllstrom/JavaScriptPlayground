// the .map() method executes a callback function on each element
// in an array. It returns the a new array made up of the return
// values from the callback function
const finalParticipants = [
    "Taylor", "Don", "Donald", "Natasha", "Bobby"
];
const announcements = finalParticipants.map(member => {
    return member + " joined the contest.";
})
console.log(announcements);

var student = {
    name: "Sheldon",
    score: 100,
    grade: "A"
}
delete student.score
student.grade = "F";
console.log(student);

// the shorthand property name syntax allows creating objects 
// without explicitly specifying the property name 
const activity = "surfing";
const beach = {activity};
console.log(beach); // activity: "surfing"

const oddNumbers = [1,3,5,7];
const evenNumbers = oddNumbers.map(number => {
    return number * 2
});
console.log(evenNumbers);