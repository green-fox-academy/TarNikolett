/*
Készíts egy függvényt, amely egy string-et kér paraméterként és
ellenőrzi, hogy a . írásjelek után az első betűk nagybetűk-e és
egy booleannel (logikai értékkel) tér vissza.

Példák:

grammarCheck("Ez egy jó példa. Ez egy jó példa.");
Amivel vissza kellene térnie: true
grammarCheck("ez még mindig egy jó példa. Hiszen a második mondat nagybetűvel kezdődik.");
Amivel vissza kellene térnie: true
grammarCheck("Ez egy rossz példa. itt nincs nagybetű.");
Amivel vissza kellene térnie: false
A függvény paramétereket direkt nem tettük a példakódba,
a te feladatod, hogy megadd a függvény paramétereket
*/

function grammarCheck(string) {
    let splittedString = string.split('. ');
    for (let i = 1; i < splittedString.length; i++) {
        let letters = splittedString[i].split('');
        if (letters[0] == letters[0].toUpperCase()){
           return true ;
        }
        else {
            return false;
        }
    }
};

console.log( grammarCheck("Ez egy jó példa. Ez egy jó példa."));
console.log( grammarCheck("ez még mindig egy jó példa. Hiszen a második mondat nagybetűvel kezdődik.") );
console.log( grammarCheck("Ez egy rossz példa. itt nincs nagybetű.") );