/*
Készíts egy függvényt, amely három string-et (karakterláncot) kér paraméterként
és egy string-gel tér vissza. Az első string (`text`) az a szöveg, amit a
függvénynek meg kell majd változtatnia. A második string (`originalWord`)
lesz az, amit minden előfordulása során a harmadik string-re (`newWord`)
kell megváltoztatni, majd a függvénynek az eredménnyel visszatérnie.
Fontos, hogy nem használhatod egyik beépített helyettesítő függvényt sem!
Példa:
censor("A kedvenc gyümölcsöm a(z) alma", "alma", "banán");
Amivel vissza kellene térnie: `"A kedvenc gyümölcsöm a(z) banán"`.
A függvény paramétereket direkt nem tettük a példakódba,
a te feladatod, hogy megadd a függvény paramétereket
*/

function censor(text, originalWord, newWord) {
    let splittedText = text.split(' ');
    //console.log(splittedText);
    for (let i = 0; i < splittedText.length + 1; i++) {
        if (splittedText[i] == originalWord) {
            //console.log(splittedText[i])
            splittedText[i] = newWord;
            //console.log(splittedText[i]);
        }
    }
    let changedSentence = splittedText.join(' ');
    console.log(changedSentence);
};

censor("A kedvenc gyümölcsöm a(z) alma", "alma", "banán");