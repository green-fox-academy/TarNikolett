/*
Készíts egy createPalindrome nevű függvényt, kövesd az eddig használt nyelvi stílus útmutatót.
A függvények bemeneten fogad egy stringet, készít belőle egy palindrómát és visszaadja azt.
*/

function createPalindrome ( str ){
        return str + str.split('').reverse().join('').toString()
};

console.log( createPalindrome ('greenfox') );
console.log( createPalindrome ('123') );
