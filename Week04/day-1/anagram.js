/* 
Készíts egy isAnagram nevű függvényt, kövesd az eddig használt nyelvi stílus útmutatót.
A függvények bemeneten fogadnia a kell két stringet és visszaadni egy logikai (boolean) értéket attól függően,
hogy a két string egymás anagrammája vagy sem. */

function isAnagram ( str1, str2){
    if (str1.split('').sort().join('') == str2.split('').sort().join('')){
        return true
    }
    else {
        return false
    }
};
console.log( isAnagram ( 'dog' , 'god'));
console.log( isAnagram ('green', 'fox'));