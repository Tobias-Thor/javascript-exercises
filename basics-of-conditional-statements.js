/* BASICS OF CONDITIONAL STATEMENTS IN JavaScript */
/* ====================================================================================== */

/* if…else */

/* 1. What is printed out by the following code? */
let condition = true
if( condition ) {
console.log('True')
} else {
console.log('False')
}
// True is printed out.

/* 2. What happens when the code runs? */
let length = 122
if( length >= 130 ) {
console.log('Du får åka Balder!')
}
// undefined

/* 3. Rebuild the code above so that the length is greater than 130. */
let length = 131
if( length >= 130 ) {
console.log('Du får åka Balder!')
}
// Du får åka Balder! is printed out. (Result in Swedish)

/* 4. Finish the program, so that it prints out the right season 
instead of question-marks. */

/* Try to expand the program so that it also can tell if 
the season is spring (mars, april, maj). */
let month = 10
if( month >= 9 && month <= 11 ) {
console.log('Årstiden är: ???') // Årstiden är: ???
}

// Changed version
let month = 10
if( month >= 9 && month <= 11 ) {
console.log('Årstiden är: Oktober') // Årstiden är: Oktober
}

// Changed version 2
// Results are in Swedish
let month = 10;

if (month >= 3 && month <= 5) {
    console.log('Det är vår'); // The season is spring (vår)
} else if (month >= 6 && month <= 8) {
    console.log('Det är sommar'); // The season is summer (sommar)
} else if (month >= 9 && month <= 11) {
    console.log('Det är höst'); // The season ia autumn (höst)
} else if (month === 12 || month === 1 || month === 2) {
    console.log('Det är vinter'); // The season is winter (vinter)
} else {
    console.log('Ogiltig månad'); // For handling of incorrect (ogiltig) month
}
// Det är höst is printed out
