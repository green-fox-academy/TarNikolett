'use strict:'

//Készíts egy tömböt ('TombA') mely tartalmazza a következő értékeket:
// Alma, Avokádó, Áfonya, Durian, Mangó
let TombA = ['Alma', 'Avokádó', 'Áfonya', 'Durian', 'Mangó'];
console.log(TombA);

// Készíts egy új tömböt TombB névvel amely a TombA értékeit tartalmazza!
let TombB = [...TombA];
console.log(TombB);

//Írattasd ki, hogy a TombA tartalmazza-e a Durian-t vagy sem!
console.log(TombB.includes('Durian'));

//Távolítsd el a Durian-t a TombB-ből!

let index = TombB.indexOf('Durian');
console.log(index); //3
let removed1 = TombB.splice(3, 1);
console.log(TombB);

//Add hozzá a Kivi-t a TombA 4. eleme után!
let removed = TombA.splice(4, 0, 'Kivi')
console.log(TombA)

//Hasonlítsd össze TombA és TombB méretét!

//Keresd meg az Avokádó indexét a TombA-ban!
console.log(TombA.indexOf('Avokádó'));

//Keresd meg az Durian indexét a TombB-ban!
console.log(TombB.indexOf('Durian'));

//Add hozzá a TombB-hez a Dinnye-t és a Pomelo-t egyszerre!
TombB.push('Dinnye' , 'Pomelo');
console.log(TombB);

//Írasd ki a TombA 3. elemét!
console.log(TombA[2]);