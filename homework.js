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
/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

me.skills.pop()

const testExerciseG = () => {
    console.log("me:", me); // =>
}

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

const dice = () => Math.floor(Math.random() * 5) + 1;

const testExercise1 = () => {
    console.log("dice:", dice()); // =>
}
/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBiggerInsideString = (a,b) => a>b ? `${a} is bigger than ${b}` : b>a ? `${b} is bigger than ${a}` : `${a} and ${b} are equal.`
const whoIsBigger             = (a,b) => a>b ? a : b>a ? b : `${a} and ${b} are equal.`

const testExercise2 = (testing) => {
    console.log("whoIsBigger:", testing(2, 1)); // =>
    console.log("whoIsBigger:", testing(1, 2)); // =>
    console.log("whoIsBigger:", testing(0, 2)); // =>
    console.log("whoIsBigger:", testing(1, 0)); // =>
    console.log("whoIsBigger:", testing(-1, 2)); // =>
    console.log("whoIsBigger:", testing(2, 2)); // =>
    console.log("whoIsBigger:", testing(1.2, 0.5)); // =>
    console.log("whoIsBigger:", testing(2, 2.2)); // =>
    console.log("whoIsBigger:", testing("2", 2)); // => ! This is interesting
    console.log("whoIsBigger:", testing("1", 2)); // => ! This is interesting
}
/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

const splitMe = ( string ) => string.split(" ")

const testExercise3 = (testing) => {

    console.log( testing("I love coding") ); // =>
    console.log( testing("I am from faraway.") ); // =>
}
const testAllExercise = () => {
    /**
        testExerciseA()
        testExerciseB()
        testExerciseC()
        testExerciseD()
        testExerciseE() 
        testExerciseF() 
        testExerciseG() 
        testExercise1() 
        testExercise2(whoIsBiggerInsideString) 
        testExercise3(whoIsBigger) 
        */
       testExercise3(splitMe) 
};


testAllExercise()