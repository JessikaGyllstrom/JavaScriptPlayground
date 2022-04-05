console.log("hello world");

//arguments that are passed into the function
console.log(makeCoffee(2, 20));

// parameters : sugar, milk 
function makeCoffee(sugar, milk) {
    var instructions = "Boil water, ";
    instructions += "pour into cup, ";
    instructions += "add coffee, ";
    instructions += "add " + sugar + "spoons of sugar, ";
    instructions += "add " + milk + "% milk.";

    return instructions
}
