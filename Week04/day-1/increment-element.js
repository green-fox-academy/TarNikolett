// Hozz létre egy `numbers` változót az alábbi tartalommal:
// `[1, 2, 3, 4, 5]`
// Növeld meg a harmadik elem értékét!
// Logold ki a harmadik elemet a konzolra!

'use strict';

let numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.map(function (num, index) {
    if (index === 2) {
        return num + 2
    }
    else {
        return num
    }
});
console.log(newNumbers[2]);