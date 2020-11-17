// - Hozz létre egy `typo` nevű változót, legyen az értéke `Csincsill`
// - Írj egy `appendAFunc` nevű függvényt, ami kap egy string paramétert és
//   hozzácsatol egy 'a' karaktert a string végéhez, majd visszatér az így
//   kapott teljes stringel
// - Írd ki az `appendAFunc(typo)` eredményét  a konzolra

'use strict';

/*let typo = 'Csincsill';

function appendAFunc(word){
    return word + 'a'
}
console.log(appendAFunc(typo));
*/

//vaaagy
let typo = 'Csincsill';

function appendAFunc(abc){
    let addA = 'a';
    return abc.concat(addA)
}
console.log(appendAFunc(typo));

// vaaagy
// let appendAFunc = typo => typo + 'a';
// console.log(appendAFunc(typo));