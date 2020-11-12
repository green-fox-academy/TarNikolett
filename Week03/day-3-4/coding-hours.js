// Egy átlagos Green Fox hallgató 6 órát kódol naponta
// Egy félév hosszúsága 17 hét
//
// Írd ki, hány órát tölt kódolással egy hallgató egy félév során,
// ha a hallgató csak hétköznap kódol

'use strict';

console.log(17 * 5);
const halfYearWorkDays = 85;
console.log("A student during a semester spends " + halfYearWorkDays * 6 + " hours with coding!");

// Írd ki, hogy a félév hány százalékát tölti a hallgató kódolással
// ha az átlagos heti munkaidő 52 óra

const wholeTime = 17 * 7 * 24;
const hoursSpentWithCoding = 52 * 17;
const percentage = (hoursSpentWithCoding / (wholeTime / 100)).toFixed(2);
console.log(`A student during a semester spends ${percentage}% of his time with coding!`);
