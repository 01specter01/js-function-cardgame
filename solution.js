// Aufgabe 1 (Karte ziehen)
// Implementiere eine Funktion mit dem Namen getCard welche eine zufällige Karte aus dem Array cards entfernt und als String zurückgibt. Wenn man die Funktion getCard 52 mal aufgerufen hat soll sie zurück geben “Der Stapel ist leer”.
// Nutze folgenden Code:
// const cards = [“2 Pik”,“3 Pik”,“4 Pik”,“5 Pik”,“6 Pik”, “7 Pik”, “8 Pik”, “9 Pik”, “10 Pik”, “Bube Pik”, “Dame Pik”, “König Pik”, “Ass Pik”, “2 Kreuz”,“3 Kreuz”,“4 Kreuz”,“5 PKreuzik”,“6 Kreuz”, “7 Kreuz”, “8 Kreuz”, “9 Kreuz”, “10 Kreuz”, “Bube Kreuz”, “Dame Kreuz”, “König Kreuz”, “Ass Kreuz”, “2 Karo”,“3 Karo”,“4 Karo”,“5 Karo”,“6 Karo”, “7 Karo”, “8 Karo”, “9 Karo”, “10 Karo”, “Bube Karo”, “Dame Karo”, “König Karo”, “Ass Karo”, “2 Herz”,“3 Herz”,“4 Herz”,“5 Herz”,“6 Herz”, “7 Herz”, “8 Herz”, “9 Herz”, “10 Herz”, “Bube Herz”, “Dame Herz”, “König Herz”, “Ass Herz”]

function getCard() {
    console.log(`---------------Q1----------------`);
    const cards = [
        "2 Pik",
        "3 Pik",
        "4 Pik",
        "5 Pik",
        "6 Pik",
        "7 Pik",
        "8 Pik",
        "9 Pik",
        "10 Pik",
        "Bube Pik",
        "Dame Pik",
        "König Pik",
        "Ass Pik",
        "2 Kreuz",
        "3 Kreuz",
        "4 Kreuz",
        "5 PKreuzik",
        "6 Kreuz",
        "7 Kreuz",
        "8 Kreuz",
        "9 Kreuz",
        "10 Kreuz",
        "Bube Kreuz",
        "Dame Kreuz",
        "König Kreuz",
        "Ass Kreuz",
        "2 Karo",
        "3 Karo",
        "4 Karo",
        "5 Karo",
        "6 Karo",
        "7 Karo",
        "8 Karo",
        "9 Karo",
        "10 Karo",
        "Bube Karo",
        "Dame Karo",
        "König Karo",
        "Ass Karo",
        "2 Herz",
        "3 Herz",
        "4 Herz",
        "5 Herz",
        "6 Herz",
        "7 Herz",
        "8 Herz",
        "9 Herz",
        "10 Herz",
        "Bube Herz",
        "Dame Herz",
        "König Herz",
        "Ass Herz",
    ];
    return cards.splice(1, 1);
}
console.log(getCard());
// Bonus:
// Implementiere eine Funktion mit dem Namen shuffleCards welche die Karten im Array cards mischt.
function getRandom() {
    return Math.floor(Math.random() * 53);
}
console.log(getRandom());
