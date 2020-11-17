// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Fordítsd meg a bejárás sorrendjét, kezdd a végéről!
// - beéptett metódussal
// - egy átmeneti arrayt létrehozva, és egy ciklus segítségével
// Logold ki a konzolra a megfordított numbers tömb mindegyik elemét
'use strict';

// beepitett metodussal

/*
let numbers = [3, 4, 5, 6, 7];
let reverseNumbers = numbers.reverse();

console.log(reverseNumbers);

*/


//atmeneti array + ciklus

let numbers = [3, 4, 5, 6, 7];
let reverseNumberList = [];

for (let i = 0; i <= numbers.length -1; i++){
        reverseNumberList.push(numbers[numbers.length-1-i]);
    };
console.log(reverseNumberList);