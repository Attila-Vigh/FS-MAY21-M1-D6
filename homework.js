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

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random =  Math.floor(Math.random() * 20)

const testExerciseC = () => {
    console.log("random:", random); // =>
}

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = 
{
    name: "Michel", 
    surname: "Nostradamus", 
    age: 518
}

const testExerciseD = () => {
    console.log("me:", me); // =>
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age

const testExerciseE = () => {
    console.log("me:", me); // =>
}
/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills = 
    [
        "html",
        "css",
        "JavaScript",
        "Git",
    ]

const testExerciseF = () => {
    console.log("me:", me); // =>
}

const testAllExercise = () => {

    // testExerciseA()
    // testExerciseB()
    // testExerciseC()
    // testExerciseD()
    // testExerciseE() 
    testExerciseF() 
};
testAllExercise()