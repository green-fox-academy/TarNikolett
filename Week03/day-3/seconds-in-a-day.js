'use strict';

const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;
// Írj egy programot, ami kiszámítja, hogy hány másodperc
// van még hátra a napból úgy, hogy az aktuális időt a fenti változókkal
// lehet beállítani

let remainingHours = 24 - currentHours;
let remainingMinutes = 60 - currentMinutes;
let remainingSeconds = 60 - currentSeconds;

let sumSeconds = remainingHours * 3600 + remainingMinutes * 60 +  remainingSeconds;
console.log(sumSeconds);