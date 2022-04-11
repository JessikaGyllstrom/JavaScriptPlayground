// destructuring with the rest-operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    // skip the first two values 
    const [ , , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // 3, 4, 5,  6, 7, 8, 9, 10
console.log(source); // 1, 2, 3, 4,  5, 6, 7, 8, 9, 10

// destructuring to pass an object as a functions parameter
const stats = {
    max: 56.78,
    standard_deviation: 4.34, 
    median: 34.54, 
    mode: 23.87, 
    min: -0.75, 
    average: 35.85
};
const half = (function() {
    // the max & min from the stats object is passed in as parameters
    return function half({ max, min }) {
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));