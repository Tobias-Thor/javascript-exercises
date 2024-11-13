/* Datatyper */

/* 1. Är följande if sats true eller false? */
let a = 1;
let b = '1';
if(a == b) // true or false
console.log(a == b); // true is printed out

/* 2. Vilket av följande tecken visar ett kodblock? */
[] // A
() // B
{} // C // ANSWER: THESE TWO, THE CURLY BRACES (IN SWEDISH: BLOCKPARANTESER)

/* 3. Vilket av följande syntax är det korrekta sättet att skriva strängar? */
"Hello World" // A
'Hello World' // B
`Hello World` // C

/* ANSWER... */
/* All three options, A, B, and C, are correct ways to write strings in 
JavaScript. However, each has a specific use case: */

/* 1. Double quotes ("Hello World") – Standard string syntax. 
Commonly used and functionally similar to single quotes. */

/* 2. Single quotes ('Hello World') – Also standard string 
syntax, interchangeable with double quotes. */

/* 3. Backticks (\Hello World``) – Used for template literals.
 Backticks allow for more advanced string features like: */
// Embedding expressions using ${expression}.
// Multi-line strings without special characters.

// Code example of template literals:
let name = "Alice";
console.log(`Hello, ${name}!`); // Outputs: Hello, Alice!

/* Summary: A, B, and C are all correct, but backticks 
are useful for dynamic or multi-line strings. */

/* 4. Vad kommer stå i console.log()? */
let greeting = 'Goodbye world!';
{
greeting = 'Hello World';
}
console.log(greeting);
// ANSWER: Hello World is printed out

/* What ChatGPT said: 

" The output will indeed be "Hello World". Here’s why:""

"In this code, there’s a block scope created by the 
curly braces { ... }, but the variable greeting is 
not declared as a new variable within the block 
(e.g., with let, const, or var). Therefore, when 
you assign 'Hello World' to greeting within the 
block, you are modifying the original greeting 
variable declared outside the block."

"Here's a step-by-step breakdown:
-Declare greeting with 'Goodbye world!' outside the block.
-Inside the block, greeting = 'Hello World' reassigns the 
existing greeting variable to 'Hello World'.
-When console.log(greeting) is called, it outputs 
"Hello World" because greeting was modified within 
the block.
-If you had redeclared greeting with let inside the block, 
it would have been scoped only to that block, and the outer 
greeting would remain unchanged."

/* 5. Vilka datatyper är följande uttryck? Använd typeof i 
konsolen för att kontrollera ditt svar. */
5 // number
‘Pannkaka’ // string
5 && 8 // number
true // boolean
null // object
undefined // undefined
NaN // number (funnily enough as it stands for Not a Number)
false || true // boolean
true && false || false && true // boolean
'two' < 'three' // boolean
1.01 // number
"1000" / 10 // NaN
!!5 // boolean
17.000000000000000000001 == 17 // boolean (false)
1 + 2 * 3 + 4 * 5 + 6 // number ('number6206') 
123.4 - '' // NaN
2 < 3 // boolean (false)
Pannkaka // undefined
5 || 8 // number
typeof (typeof true) // string
19 // number

/* 6. Hur tar man reda på vad en variabel har för datatyp? */

/* ANSWER: To find out the datatype of a variable in JavaScript, 
you can use the typeof operator. This operator returns a string 
indicating the type of the value. */

// Code example:
let myVar = 42;
console.log(typeof myVar); // "number"

let myString = "Hello!";
console.log(typeof myString); // "string"

let myBoolean = true;
console.log(typeof myBoolean); // "boolean"

let myObject = { name: "Alice" };
console.log(typeof myObject); // "object"

/* What ChatGPT said: */

/* Usage */
// typeof variableName will tell you the type of variableName.
// This method works for primitives 
// (like number, string, boolean, undefined, and symbol) 
// and non-primitives (like object and function).

/* Special Cases */
/* null: Although null represents an empty or non-existent value, 
typeof null returns "object". This is a quirk in JavaScript. */
/* Arrays: typeof will return "object" for arrays, so you might 
use Array.isArray(myArray) to specifically check for arrays. */

/* 7. Skapa olika variabler och ge dem namn som age, name,  
isStudent, etc. Tilldela varje variabel ett värde. Lägg 
till kommentarer i din kod med // för att förklara 
vad varje variabel och rad gör och vilken datatyp den 
innehåller. */
// Example: 
// let age = 25;

// Integer that represents a person's age (datatype: Number)
let age = 41;
console.log(age);

// String that represents a person's name (datatype: String)
let name = "Tobias";
console.log(name);

// Boolean that indicates whether the person is a student or not (datatype: Boolean)
let isStudent = true;
console.log(isStudent);

// Number that represents a person's height in meters (datatype: Number)
let height = 1.75;
console.log(height);

// String that represents a person's favorite color (datatype: String)
let favoriteColor = "green";
console.log(favoriteColor);

/* Undefined variable for a person's middle name, which has not been 
assigned a value (datatype: Undefined) */
let middleName;
console.log(middleName);

// Null value to indicate that the person does not have a pet (datatype: Null)
let pet = null;
console.log(pet);

// Array to hold a list of hobbies (datatype: Object, specifically an Array)
let hobbies = ["reading", "IT", "nature"];
console.log(hobbies)

// Object to hold details about the person's address (datatype: Object)
let address = {
  street: "Gatuvägen 9",
  city: "Statsstaden",
  country: "Sweden"
};
console.log(address);

// Function to greet the person (datatype: Function)
let greet = function() {
  return "Hello, " + name + "!";
};
console.log(greet);

// Symbol for a unique identifier (datatype: Symbol)
let id = Symbol("id");

/* 8. Skapa en strängvariabel med ditt namn och skriv ut den med console.log() */
let myName = 'Tobias'
console.log(myName);

/* 9. Vilka datatyper finns det i JS? Svara i form av en array. */
let datatypes = ['Number', 'BigInt', 'String', 'Boolean', 'Undefined', 'Null', 'Symbol', 'Object']
console.log(datatypes);

/* 10. Gör följande:
● Skapa variabeln my_num och tilldela den ett nummer.
● Skapa variabeln my_bool och tilldela den en boolean.
● Skapa variabeln my_str och tilldela den en sträng. */

let my_num = 99;
let my_bool = false;
let my_str = 'I am learning.'
console.log(my_num, my_bool, my_str);

/* 💡Level-up */

/* 1. Skriv ett program som frågar vad användaren heter och skriver ut "Välkommen
<NN>!" där <NN> är användarens namn. */

/* Tips: använd console.log för att skriva ut och prompt för att hämta input från
användaren. Se till att spara namnet i en variabel. */

/* 2. Skriv ett program som frågar användaren efter två tal och sparar dem i variabler.
Sedan ska det skriva ut talens summa, differens och produkt. */

/* 3. Skriv ett program som frågar användaren efter ett tal. Programmet ska skriva ut
talet avrundat till ett heltal. Extra utmaning: skriv ut talet avrundat till en 
decimal i stället. */
