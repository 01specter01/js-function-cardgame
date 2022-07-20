//Aufgabe 2 (Passwort Generator)
//Implementiere eine Funktion mit dem Namen createPassword welche ein zufällig erzeugtes Passwort zurückgibt.
//Die Funktion gibt einen string zurück
//Die Funktion erhält 4 Parameter

//1. length, eine number, gibt die Länge des Passworts an
//2. useSmallLetters, ein boolean, gibt an ob das Passwort kleine Buchstaben von a-z enthalten soll
//3. useCapitalLetters, ein boolean, gibt an ob das Passwort große Buchstaben von A-Z enthalten soll
//4. useSpecialCharacters, ein boolean, gibt an ob das Passwort Sonderzeichen wie @ ! $ % & \* enthalten soll.

function createPassword(
    length,
    useSmallLetters,
    useCapitalLetters,
    useSpecialCharacters
) {
    console.log(`---------------Q2----------------`);
    if (
        length >= 8 &&
        useSmallLetters === true &&
        useCapitalLetters === true &&
        useSpecialCharacters === true
    )
        return `${typeof length} and ${typeof useSmallLetters} and ${typeof useCapitalLetters} and ${typeof useSpecialCharacters}`;
}
console.log(createPassword(createPassword.length, "hallo", "Hi", "$%"));
