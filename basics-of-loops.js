/* BASICS OF JavaScript LOOPS */

/* Classic For loops */

/* 1. Skapa en loop som itererar 1000 varv. För varje iteration ska du
console.log() vilket varv du är på.  */
/* I den här koden:
Använder vi en for-loop som startar från 1 och går upp till och med 1000.
console.log() loggar "Varv:" följt av värdet av i, vilket representerar 
det nuvarande varvet. */

for (let i = 1; i <= 1000; i++) {
    console.log("laps", i);
}

/* Absolut! Här är några alternativa lösningar för att skapa en 
nedräkning från 100 till 0, med var och en loggad till console.log(), 
som bygger vidare på det du redan har. Vi kan experimentera med olika
tekniker för att uppnå samma resultat.

1. Använda Array.fill och map
Du kan fylla en array med en längd på 101 och använda map för att 
skapa siffror från 100 ner till 0: */

Array(101).fill().map((_, index) => 100 - index).forEach(num => {
    console.log("laps", num);
});

/* 2. Rekursion
Genom att använda en rekursiv funktion kan vi också skapa en nedräkning:
Funktionen countdown anropar sig själv och minskar n med 1 tills n är mindre än 0. */
function countdown(n) {
    if (n < 0) return;
    console.log("laps", n);
    countdown (n - 1);
}

countdown (100);

/* 3. reduce på en Array */
Array.from({length: 101 }, (_, index) => 100 - index).reduce((_, num) => {
    console.log("laps", num);
}, 0);

/* 4. Använda setInterval för att skapa en tidsfördröjd nedräkning
Med setInterval kan vi logga varje värde med ett intervall, vilket
 också ger en gradvis nedräkning: */

let i = 100;
const interval = setInterval(() => {
    console.log("laps", i);
    i--;
    if (i < 0) {
        clearInterval(interval);
    }
}, 100); // 100 ms intervall

/* 5. forEach med Object.keys
Skapa en array baserad på Object.keys och använd forEach 
för att logga nedräkningen: */
Object.keys(Array.from({ length: 101 })).forEach(index => {
    console.log("laps", 100 - index);
});

/* 2. Skapa en loop som räknar ner från 100 till 0. För varje varv ska du
console.log() vilket varv du är på. */

for (let i = 100; i >= 0; i--) {
    console.log("laps", i);
}

/* Alternative solution with a while-loop */

// while-loopen körs så länge i är större än eller lika med 0.
// Efter varje iteration minskas i med 1.

let i = 100;
while (i >= 0) {
    console.log("laps:", i);
    i--;
}

/* Alternative solution with a do-while-loop */

let i = 100;
do {
    console.log("laps", i);
    i--;
} while (i >= 0);

/* Alternative solution with a for...of and an Array */

// Här skapas först en array (countdown) med siffrorna från 100 till 0.
// for...of-loopen itererar över varje element i arrayen och loggar det aktuella värdet.

const countdown = Array.from({ length: 101 }, (_, index) => 100 - index)
               // Array.from({ length: 101 }) (index => 100 - index); WRONG
for (const num of countdown) {
    console.log("laps", num);
}

/* Alternative solution with forEach and Array */
Array.from({ length: 101 }, (_, index) => 100 - index).forEach(num => {
    console.log("laps", num);    
});

/* let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple']; */

/* 3. Loopa ut ovanstående array med en for-loop. För varje varv ska du
console.log() innehållet ( frukten ). */

/* for-loopen börjar på index 0 och fortsätter tills den når slutet av arrayen (fruits.length).
fruits[i] loggar varje frukt i arrayen baserat på det aktuella indexet.
Detta kommer att logga alla frukterna i arrayen en efter en. */

let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/* let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

 4. Loopa ut ovanstående array med console.log(). Sätt vilket index varje frukt
har framför. Ex. 0. apple, 1. orange osv. */

/* i är indexet för varje element i arrayen, så i + ". " + fruits[i] 
loggar både indexet och frukten.
Exempelvis kommer första iterationen att logga 0. 
apple, andra iterationen 1. orange, och så vidare. */
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

for (let i = 0; i < fruits.length; i++) {
    console.log(i + ". " + fruits[i]);
}

/* For of loops */

/* let things = ['hammer', 'nails', 'ruler', 'screwdriver',
    'screws', 'saw'];
    
6. Loopa ut ovanstående array och console.log() varje pryl. */

/* for...of-loopen går igenom varje element i arrayen things och tilldelar varje element till variabeln thing under varje iteration.
console.log(thing) skriver ut varje pryl från arrayen på en ny rad. */
let tools = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

for (let tool of tools) {
    console.log(tool);
}

/* ForEach loops */

/* let things = ['hammer', 'nails', 'ruler', 'screwdriver',
    'screws', 'saw'];
    
7. Loopa ut ovanstående array och console.log() varje pryl.

/* För att använda forEach för att iterera genom arrayen och logga varje pryl, kan du göra så här:

javascript
Kopiera kod
let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

things.forEach(thing => {
    console.log(thing);
});
Förklaring:
forEach är en metod som körs på varje element i arrayen.
thing är det aktuella elementet i varje iteration.
console.log(thing) loggar varje pryl från arrayen till konsolen.
Denna lösning ger samma resultat som en for eller for...of-loop, 
men använder istället en funktionell metod för att iterera genom 
arrayen. */

let tools = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
tools.forEach(tool => {
    console.log(tool);
});


/* let things = ['hammer', 'nails', 'ruler', 'screwdriver',
    'screws', 'saw'];
    
    8. Loopa ut ovanstående array och console.log() varje pryl samt vilken position i
    arrayen den har. */


/* While loops */
    
/* 1. Skapa en while-loop som kör 1000 varv. console.log() ut varje varv. */
// let i = 0; startar räknaren på 0.
// while (i < 1000) fortsätter loopen så länge i är mindre än 1000.
// console.log(i); loggar det aktuella värdet på i.
// i++; ökar värdet av i med 1 för varje iteration.
// Denna kod kommer att logga varje värde från 0 till 999 i konsolen.

let i = 0;
while (i < 1000) {
    console.log(i);
    i++;
}


/* 2. Kör programmet nedan. Vad skrivs ut? Ändra sedan så att programmet lägger
ihop talen 1 till 10 i stället. */
    
/* Vad skrivs ut:
x börjar på 1, och loopen körs så länge x är mindre än eller lika med 4.
På varje iteration adderas värdet av x till y.
När x är 5, slutar loopen. */
/* Beräkningarna: */
// Första iterationen: y = 0 + 1 = 1
// Andra iterationen: y = 1 + 2 = 3
// Tredje iterationen: y = 3 + 3 = 6
// Fjärde iterationen: y = 6 + 4 = 10
// Så resultatet som skrivs ut blir: y är: 10.
let x = 1, y = 0;
while (x <= 4) {
    y = y + x;
    x = x + 1;
}
console.log('y är:', y); // y är 10

/* För att lägga ihop talen från 1 till 10 kan du ändra startvärdet
på x och ändra villkoret i loopen: */
//Loopen kör nu från x = 1 till x = 10.
// Talen adderas och resultatet blir summan av alla tal från 1 till 10:
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55.
// Så den nya utskriften blir: y är: 55.
let x = 1, y = 0;
while (x <= 10) {
    y = y + x;
    x = x + 1;
}
console.log('y är:', y); // y är 55



