'use strict';

// Írj egy programot, ami kiszámítja 1-től egy megadott számig
// a számok összegét és átlagát
//
// Például:
// Megadott szám: 5
// Kimenet: Összeg: 15, átlag: 3

let number = 5; 
let sum = 0;

for ( let i = 0; i < number; i++){
    sum = sum + (i + 1);    
}

let average = sum / number;
console.log( sum , average );