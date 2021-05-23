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
/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. 
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

const deleteOne = ( string, bool ) =>  bool === true ? string.slice(1) : string.substr(0, string.length - 1) ;

const testExercise4 = ( testing ) => {

    console.log( testing("I love coding", true) ); // =>
    console.log( testing("I am from faraway", false) ); // =>
}
/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

const onlyLetters = ( string ) =>  {
    
    let newString =""
    let letter
    
    for (letter of string)
        if(!letter.match(/[0-9]/g)) 
            newString += letter
    
    return newString
};

const testExercise5 = ( testing ) => {

    console.log( testing("4 kids are playing 4 games coding") ); // =>
    console.log( testing("I have 4 dogs") ); // =>
}
/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

const isThisAnEmail = ( string ) =>  string.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? true : false

const testExercise6 = ( testing ) => {
    
    console.log( testing("this.is@anemail.com") ); // =>
    console.log( testing("I have 4 dogs") ); // =>
}
/* Ex.7
    Write a function called "whatDayIsIt" that should return the current day of the week.
*/

const whatDayIsIt = ( ) => {
    var day;
    switch (new Date().getDay()) {
        case 0:day = "Sunday";   break;
        case 1:day = "Monday";   break;
        case 2:day = "Tuesday";  break;
        case 3:day = "Wednesday";break;
        case 4:day = "Thursday"; break;
        case 5:day = "Friday";   break;
        case 6:day = "Saturday";
    }
    return day
}

const testExercise7 = ( testing ) => {

    console.log( testing() ); // =>
}
/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

const rollTheDices = ( numbers ) => {
    
    let values = []
    let sum = 0
    for(let i=0; i < numbers; i++){
        let roll = dice()
        values.push(roll)
        sum += roll
    }
    return {sum, values}
}

const testExercise8 = ( testing ) => {

    console.log( testing(1) ); // =>
    console.log( testing(2) ); // =>
    console.log( testing(3) ); // =>
    console.log( testing(4) ); // =>
    console.log( testing(5) ); // =>
    console.log( testing(6) ); // =>
}
/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

const howManyDays = ( date, month, year ) => {

    let yourDate = new Date(year, month -1 , date).getTime();
    let today    = new Date().getTime();

    let daysPast = (today - yourDate)/(1000*3600*24);
    
    return Math.floor(daysPast,4)
}

const testExercise9 = ( testing ) => {
    let d = new Date()
    console.log( testing( d.getDate(), d.getMonth() + 1 , d.getFullYear() ) ); // =>
    console.log( testing( 24, 5, 2021 ) ); // =>
    console.log( testing( 23, 5, 2021 ) ); // =>
    console.log( testing( 23, 6, 2020 ) ); // =>

}
/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
const isTodayMyBirthday = ( date, month, year ) => {

    let d = new Date();
    if( date === d.getDate() &&  month === 1 + d.getMonth() )
        return true
    else
        return false
}

const testExercise10 = ( testing ) => {

    let d = new Date()
    console.log( testing( d.getDate(), d.getMonth() + 1 ) ); // => true
    console.log( testing( 24, 5 )                         ); // => false
    console.log( testing( 23, 5 )                         ); // => true
    console.log( testing( 23, 6 )                         ); // => false
}

// JS Arrays // Objs
// NOTE: movies array is defined inside data/movies.js and imported at the top of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

const movie =
{
    Title : "The Lord of the Rings: The Fellowship of the Ring",
    Year  : "2001",
    imdbID: "tt0120737",
    Type  : "movie",
    Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
}

const deleteProp = ( object, property ) => {
    delete object[property]; 
    return object 
}

const testExercise11 = ( testing ) => {

    console.log( testing( movie, "Title") ); // 
}
/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

const olderMovie = ( listOfMovies,  ) => {
    listOfMovies.sort(function(a, b){return a.Year - b.Year});
    return listOfMovies[0].Title
}

const testExercise12 = ( testing ) => {

    console.log( testing( movies) ); // => Lord of the Flies
}
/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

const countMovies = ( movies ) => movies.length

const testExercise13 = ( testing ) => {

    console.log( testing( movies) ); // => Lord of the Flies
}
/* Ex.14
    Write a function called "   onlyTheTitles" which creates an array with just the    titles of the movies provided in the array at the end of the file.
*/
const onlyTheTitles = ( movies ) => {
    const movieTitles = []
    for (const movie of movies) {
        movieTitles.push(movie.Title)
    }
    return movieTitles
}

const testExercise14 = ( testing ) => {

    console.log( testing( movies) ); // => Lord of the Flies
}
/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
const onlyInThisMillennium = ( movies ) => {
    const onlyInThisMillennium = []
    for (const movie of movies) {
        if( movie.Year >= 2000)
            onlyInThisMillennium.push(movie)
    }
    return onlyInThisMillennium
}

const testExercise15 = ( testing ) => {

    console.log( testing( movies) ); // => Lord of the Flies
}
/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
const getMovieById = ( id ) => {
    for (const movie of movies) {
        if( movie.imdbID === id)
            return movie
    }
}

const testExercise16 = ( testing ) => {

    console.log( testing( "tt4154796" ) ); // => Avengers: Endgame
    console.log( testing( "tt1731697" ) ); // => The Lords of Salem
    console.log( testing( "tt0167261" ) ); // => The Lord of the Rings: The Two Towers
}
/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

const sumAllTheYears = ( movies ) => {
    sum = 0
    for (const movie of movies) {
        sum +=  parseInt(movie.Year)
    }
    return sum
}

const testExercise17 = ( testing ) => {

    console.log( testing( movies ) ); // => 
}
/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the  title.
*/

const searchByTitle = ( string ) => {
    const newMoives = []
    for (const movie of movies) {
        if(movie.Title.includes(string))
            newMoives.push(movie)
    }
    return newMoives
}

const testExercise18 = ( testing ) => {

    console.log( testing( "Lord" ) ); // => 
    console.log( testing( "Tarzan" ) ); // => 
    console.log( testing( "Dogtown" ) ); // => 
}
    
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

const searchAndDivide = ( string ) => {
    const match = []
    const unmatch = []
    for (const movie of movies) {
        if(movie.Title.includes(string))
            match.push(movie)
        else
            unmatch.push(movie)
    }
    return { match, unmatch}
}

const testExercise19 = ( testing ) => {

    console.log( testing( "Lord" ) ); // => 
    console.log( testing( "Tarzan" ) ); // => 
    console.log( testing( "Dogtown" ) ); // => 
}
/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

const removeIndex = ( movies, number ) => {
    const match = []
    let moviesLength = movies.length

    for (let i=0; i< moviesLength; i++) {
        if( i !== number)
            match.push(movies[i])
    }
    return match
}

const testExercise20 = ( testing ) => {
console.log("---------------------------------");
    console.log( testing( movies, 0 ) ); // => 
    console.log( testing( movies, 1 ) ); // => 
    console.log( testing( movies, 2 ) ); // => 
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
        testExercise2(whoIsBigger) 
        testExercise3(splitMe) 
        testExercise4(deleteOne) 
        testExercise5(onlyLetters) 
        testExercise7(whatDayIsIt) 
        testExercise8(rollTheDices) 
        testExercise9(howManyDays)
        testExercise10(isTodayMyBirthday)
        testExercise11(deleteProp)
        testExercise12(olderMovie)
        testExercise13(countMovies)
        testExercise14(onlyTheTitles)
        testExercise15(onlyInThisMillennium)
        testExercise16(getMovieById)
        testExercise17(sumAllTheYears)
        testExercise18(searchByTitle)
        testExercise19(searchAndDivide)
    */
    testExercise20(removeIndex)
};

testAllExercise()