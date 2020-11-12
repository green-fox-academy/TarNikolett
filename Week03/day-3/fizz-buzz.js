// Írj egy programot, ami 1-től 100-ig kiíratja a számokat.
// De a 3 többszörösei esetén a "Fizz" szót írja ki a szám helyett
// és az 5 többszöröseinél pedig a "Buzz" szót írja ki a szám helyett.
// Ha a szám a 3-nak és 5-nek is többszöröse,
// akkor a "FizzBuzz" szót írja ki a szám helyett

'use strict';

for (let a = 1; a <= 100; a++) {
    if
        (a % 3 == 0 && a % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if (a % 5 == 0) {
        console.log('Buzz');
    }
    else if (a % 3 == 0) {
        console.log('Fizz');
    }
    else {
        console.log(a);
    }
}