// Készíts egy függvényt, ami kap egy számot,
// majd elosztja ezzel a számmal a tízet és
// kiírja az eredményt.
// Ha a bemeneti paraméter 0, azt írja ki, hogy 'hiba'

'use strict:'

function divide (num) {
    if (num === 0) {
        throw Error('hiba');
    }
    let dividedNumber = 10 / num;
    console.log(dividedNumber);
}

divide(0);