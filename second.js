//Aufgabe 2 (Passwort Generator)
//Implementiere eine Funktion mit dem Namen createPassword welche ein zufällig erzeugtes Passwort zurückgibt.
//Die Funktion gibt einen string zurück
//Die Funktion erhält 4 Parameter

//1. length, eine number, gibt die Länge des Passworts an
//2. useSmallLetters, ein boolean, gibt an ob das Passwort kleine Buchstaben von a-z enthalten soll
//3. useCapitalLetters, ein boolean, gibt an ob das Passwort große Buchstaben von A-Z enthalten soll
//4. useSpecialCharacters, ein boolean, gibt an ob das Passwort Sonderzeichen wie @ ! $ % & \* enthalten soll.

// function createPassword(
//     length,
//     useSmallLetters,
//     useCapitalLetters,
//     useSpecialCharacters
// ) {
//     console.log(`---------------Q2----------------`);
//     if (
//         length >= 8 &&
//         useSmallLetters === true &&
//         useCapitalLetters === true &&
//         useSpecialCharacters === true
//     )
//         return `${typeof length} and ${typeof useSmallLetters} and ${typeof useCapitalLetters} and ${typeof useSpecialCharacters}`;
// }
// console.log(createPassword(9, "hallo", "Hi", "$%"));

// let arr = [`A,B,C,D,E,F,G,a,b,c,d,e,f,g,!,@,$,%,&`];
// let result = " ";

// function getRandom() {
//     result = Math.floor(Math.random() * 20);
//     if (result !== "string") {
//         console.log(true);
//         return arr[result];
//     } else {
//     }
//     console.log(false);
//     return false;
// }

// console.log(getRandom());

function createPassword(length) {
    console.log(`---------------Q2----------------`);
    let result = "";
    let characters = "Almnopq@";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    console.log(true);
    return result;
}
/////////////////////
//__________ERSTELLEN 4 FUNCTIONS LENGTH ALS ERSTE, JEWEILS 3 CHARACTERS ERSTELLEN RANDOM UND AM SCHLUSS ZUSAMMENFÜGEN DAS ALLE 3 CARACTERVARIANTEN VERFÜGT UND LENGTH ZB AUF 9 EINGEHALTEN IST!!!!!!!!!!!!!!!!
/////////////////
console.log(createPassword(8));

 function createPassword(length) {
     let arrayOfElements
     for(let i = 0; cre)
     console.log(`---------------Q2----------------`);
 }
 console.log(createPassword(8));
