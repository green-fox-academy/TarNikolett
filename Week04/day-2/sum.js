// - Írj egy `sum` nevű függvényt, ami visszaadja (return) az egész számok
//   összegét nullától a megadott paraméterig

'use strict';

function sum(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result
};
console.log(sum(10));