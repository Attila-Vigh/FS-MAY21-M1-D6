const movies = require('./data/movies');

// JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = "First test"

const testExerciseA = () => {
    console.log(test);
}

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10 + 20

const testExerciseB = () => {
    console.log("sum:", sum); // => 30
}
const testAllExercise = () => {

    // testExerciseA()
    testExerciseB()
};
testAllExercise()