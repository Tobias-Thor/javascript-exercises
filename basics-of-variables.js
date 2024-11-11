/* Basics of VARIABLES in JavaScript */ 
//=======================================================================================/

// 1. Vad är en variabel? Förklara kort hur en variabel används i JavaScript.

// 2. Vad är skillnaden mellan let, const och var? Förklara och ge exempel.

/* 3. Vilket av följande syntax är det korrekta sättet att deklarera en variabel där vi kan ändra
värdet? */
let myName = 'Alice';
const myName = 'Alice';
var myName = 'Alice';

/* 2. Which of the following syntax is the correct way to declare a variable 
where we cannot change the value? */
let myName = 'Alice';
const myName = 'Alice'; // This one, const is a constant.
var myName = 'Alice';

// 3. What happens if you try to declare a variable twice with const in the same block?
const age = 30;
const age = 40;
// You get an error message: 
// "Uncaught SyntaxError: Identifier 'age' has already been declared"

/* 4. Declare three variables to hold your age, name and if you are a student. Use let
or const. Print out a short comment about every line in the code.
Example: */
/* let age = 25; // Your age.
let name = 'Sara'; // Your name.
let isStudent = false; // Are you a student? true or false. */
let yourAge = 41;
console.log('My age is ' + (yourAge));
let myName = 'Tobias'
console.log('My name is ' + (myName));
let isStudent = true;
// Oh, look how nice, a template literal below with backticks in all it's glory.
console.log(`Yes, it's ${isStudent} I am a student.`) 

/* 5. Create a variable that holds the value of your age and use console.log() to print
it in the console.
Example:
let age = 25;
console.log(age); */
let myAge = 41;
console.log(myAge);

// 6. What will the following code show in console.log()?
let z;
console.log(z);
// Answer: undefined.

// 7. Oh noes! Number 7 is missing.

// 8. Change the value of the variable (city) and log it in console.log.
// let city = 'Stockholm';
// Change the name of the city to Gothenburg.
let city = 'Gothenburg'
console.log(city);

