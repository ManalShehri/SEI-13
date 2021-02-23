// What number's bigger?
// Write an if statement that tests two number (numOne and numTwo), and prints the biggest number
let numOne = 7;
let numTwo = 10;

if (numOne > numTwo) {
    console.log(numOne + " is bigger");
} else {
    console.log(numTwo + " is bigger");
}
// Driving Age
// Store the user age
// If age is less than 18, print "Sorry, you can't drive yet"
// If the age is equal to or over 18, print "Drive away!"
// Bonus: If the user can't drive yet, tell them how many years they will have to wait. E.g. "Sorry, you have 4 years to wait until you can drive"
let age = 13;


if (age >= 18) {
    console.log("Drive away!")
} else {
    console.log("Sorry, you can't drive");
    console.log("You have to wait for " + 18 - age + " years to drive.")
}
// The World Translator
// Write an if statement that writes Hello World in different languages (i.e. if the language is English, print "Hello World", if the language is Arabic write something "مرحبا بالعالم", if the language is French write something romantic)

let language = "Italy";


if (language === "English") {
    console.log("Hello World!");
} else if (language === "Arabic") {
    console.log("مرحباً بالعالم!");
} else if (language === "Italy") {
    console.log("Ciao mondo");
}


// The Grade Assigner
// Write an if statement that gives users a score (A, B, C, D, or F) based on the test results


let grade = 45;
if (grade > 90) {
    console.log("A");
} else if (grade < 90 && grade > 80) {
    console.log("B");
} else if (grade < 80 && grade > 70) {
    console.log("C");
} else if (grade < 70 && grade > 60) {
    console.log("D")
} else if (grade < 60) {
    console.log("F");
}
// ir Conditioning
// Store the current temperature, whether the A/C is functional, and what the desired temperature is.
// If the airconditioner is functional and the current temperature is above the the desired temperature... print "Turn on the A/C Please"
// If the airconditioner is non-functional and the current temperature is above the the desired temperature... print "Fix the A/C now! It's hot!"
// If the airconditioner is non-functional and the current temperature is below the the desired temperature... print "Fix the A/C whenever you have the chance... It's cool..."


let temp = 25;
let ac = true;
let desiredTemp = 19;
// Ibrahim solotion ^_^
if (ac === true && temp > desiredTemp) {
    console.log("Please turn on the A/C!");
} else if (ac === false && temp > desiredTemp) {
    console.log("Please fix your A/C!");
} else if (ac === false && temp < desiredTemp) {
    console.log("Please fix the A/C whenever you have the chance... it's cold...")
}

// Write an if statement that gives a user the nickname of their score, based on par.

//   Score	      Nickname
// <= par - 2	"Eagle"
// par - 1	    "Birdie
// par       	"Par"
// par + 1   	"Bogey"
// par + 2	    "Double Bogey"
// >= par + 3	"Not sure"

let par = 3
let score = 5
if (par - 2 >= score) {
    console.log("Eagle")
} else if (par - 1 === score) {
    console.log("Birdie")
} else if (par === score) {
    console.log("Par")
}
else if (par + 1 === score) {
    console.log("Bogey")
}
else if (par + 2 === score) {
    console.log("Double Bogey")
} else if (par + 2 === score) {
    console.log("Not sure")

} else {
    console.log("somthing wrong ")
}



// Serge Says
// Store a user message
// Print 'Sure.' if you ask a question (e.g. the message ends in ?).
// Print 'Woah, chill out!' if you yell (e.g. your message is in all capitals).
// Print 'Fine. Be that way!' if you don't say anything (e.g. your message is empty).
// Print 'Whatever.' to anything else.
// Bonus: If the message is all spaces, also print "Fine. Be that way!"


// you will use hare a new stuff ^_* 
let message = " "
console.log(message)
if (message[message.length - 1] === "?") {
    console.log("Sure")
} else if (message === "") {
    console.log("Fine. Be that way!")
} else if (message == " ") {
    console.log("Fine. Be that way!!!!!")
} else if (message === message.toUpperCase()) {
    console.log("Woah, chill out!'")
}
else {
    console.log("'Whatever.'")
}

// The Pluralizer
// Write an if statement that works with a noun and a number. Make the noun plural if necessary!! Make this as accurate as possible (e.g. use the rules described here)

// Normal nouns are made plural simply by adding an s. Because normal nouns are very numerous, this is a very limited list.

let noune = "artichoke"
let number = 4
if (number > 1) {
    console.log(noune + "s")
} else {
    console.log(noune)
}
// The Rest
// Implement a Rock, Paper, Scissors single game
// Implement a Rock, Paper, Scissors best of three game
// Anything else you can think of!

let player1 = "Rock"
let player2 = "Paper"

if ((player2 == "Rock" && player1 == "Paper") || (player1 == "Rock" && player2 == "Scissors") || (player1 == "Scissors" && player2 == "Paper")) {
    console.log("player 1 is win")
} else {
    if (player1 == player2) { console.log("Tie") }
    else { console.log("player2 is win")  }
}
