// Hozz létre egy `numbers` változót az alábbi tartalommal: `[1, 2, 3, 8, 5, 6]`
// Változtasd meg a 8-as számot 4-essé a map metódussal
// Logold ki a 4. elemet

'use strict';

let numbers = [1, 2, 3, 8, 5, 6];
let newNumbers = numbers.map(function (num) {
    if (num === 8) {
        return 4
    }
    else {
        return num
    };
})
console.log(newNumbers);
console.log(newNumbers[3]);


/*
let newNumbers = numbers.map(function (num) {
    return num * 2
})

console.log(newNumbers);
*/


/*
function myFunction(num) {
    if (num === 8){
   console.log (4);
}
else {
    console.log(num);
}};
myFunction(2)
*/
