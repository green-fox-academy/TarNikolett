/* 
A kiadásainkat egy számokat tartalmazó listával fogjuk reprezentálni.

Készíts egy listát az alábbi elemekkel:

500, 1000, 1250, 175, 800 és 120
Készíts egy alkalmazást, mely megoldja az alábbi problémákat:
*/

'use strict';

let list = [500, 1000, 1250, 175, 800, 120];

// Mennyit költöttünk?
let sumList = list.reduce(( number1, number2) => ( number1 + number2));
console.log(sumList);

// Melyik volt a legnagyobb kiadásunk?
console.log(Math.max( ...list ));

// Melyik volt a legkisebb kiadásunk?
console.log(Math.min( ...list ));

// Mennyi volt az átlag kiadásunk?
console.log ( sumList / list.length);
