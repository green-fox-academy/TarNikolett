/*
Készíts egy threeSum nevű függvényt, ami

- egy integer (egész szám) tömböt (array) kér inputként,
- talál 3 különböző elemet
(az értékük megegyezhet, de az indexük különböző kell legyen)
a tömbben, megkeresi a 3 legkissebb elem összegét és
- visszatér a legkisebb összeggel integer-ként.
- -1-gyel tér vissza, ha a tömb mérete kisebb, mint 3.

Példák:

threeSum([1, 2, 3, 4, 5]);
Amivel vissza kellene térnie: 6, mert 1, 2 és 3
adja a legkisebb összeget.

threeSum([100, 450, 200, 5]);
Amivel vissza kellene térnie: 305, mert 100, 200 és 5
adja a legkisebb összeget.

threeSum([1, 2]);
Amivel vissza kellene térnie: -1 mert nincs 3 különböző szám a tömbben.

A függvény paramétereket direkt nem tettük a példakódba,
a te feladatod, hogy megadd a függvény paramétereket
*/

function threeSum(array) {
    if (array.length < 3) {
        return -1;
    }
    
    let threeMinimumNumber = [];
    let sum = 0;
    for (let i = 1; i <= 3; i++) {
        
        let minimumNumber = Math.min(...array);
        threeMinimumNumber.push(minimumNumber);
        let minimumNumberIndex = array.indexOf(minimumNumber);
        array.splice(minimumNumberIndex, 1);
    }
    sum = threeMinimumNumber.reduce((a , b) => (a + b));
    return sum;
};

console.log(threeSum([1, 2, 3, 4, 5]));
console.log(threeSum([100, 450, 200, 5]));
console.log(threeSum([1, 2]));