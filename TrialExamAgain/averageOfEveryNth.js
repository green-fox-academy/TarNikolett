/*
Készíts egy averageOfEveryNth nevű függvényt, ami két paramétert kér:
- egy numbers nevű tömböt pozitív integer-ekkel,
- egy n nevű pozitív integer-t.
A metódusnak azt az átlagot kell kiszámolnia,
amely a tömb minden n-edik eleméből származik és
vissza kell vele térnie.

Példák:
averageOfEveryNth([2, 4, 10, 34, 3, 16, 3, 21], 3);
Amivel vissza kellene térnie: 13, mert 10 és 16 átlaga 13.
averageOfEveryNth([2, 4, 10, 34, 3, 16, 3, 21], 2);
Amivel vissza kellene térnie: 18.75`, mert 4, 34, 16, 21 átlaga 18.75.
averageOfEveryNth([2, 4, 10, 34, 3, 16, 3, 21], 10);
Amivel vissza kellene térnie: 0, mert nincs érvényes elem.
A függvény paramétereket direkt nem tettük a példakódba,
a te feladatod, hogy megadd a függvény paramétereket
*/

function averageOfEveryNth(array, number) {
    let allNthNumber = [];
    if (array.length < number){
        return 0;
     }
    for (let i = 1; i < array.length + 1; i++) {
        
        if (i % number === 0) {
            allNthNumber.push(array[i - 1]);
        }
    }
    let sumNumber = allNthNumber.reduce((a, b) => a + b);
    let solution = sumNumber / allNthNumber.length;
    console.log(solution);
};


//console.log ( averageOfEveryNth([2, 4, 10, 34, 3, 16, 3, 21], 3) );
//console.log ( averageOfEveryNth([2, 4, 10, 34, 3, 16, 3, 21], 2) );
//console.log ( averageOfEveryNth([2, 4, 10, 34, 3, 16, 3, 21], 10) );