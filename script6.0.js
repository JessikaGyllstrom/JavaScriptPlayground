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
