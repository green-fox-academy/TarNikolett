// Adott egy nem negatív egész szám n,
// térj vissza a számjegyei összegével rekurzívan
// (ciklusok nélkül).
//// Tipp:
//// A 10-zel való osztásnál (% = maradékos osztást használva)
// a maradékot kapod
// (pl.: 126 % 10 = 6)
//// A 10-zel való osztásnál (/) maradék nélküli eredményt kapsz
// (pl.: 126 / 10 = 12).

function sumOfDigit (number){
    if (number === 0){
        return 0;
    }
   return number % 10 + sumOfDigit( Math.floor( number / 10 ));
}

console.log(sumOfDigit(345));