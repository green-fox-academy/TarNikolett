// Írj egy programot, ami rajzol
// egy ilyen háromszöget:
//
// *
// **
// ***
// ****
//
// A háromszögnek annyi sora legyen, mint amennyi a lineCount értéke

'use strict';

const lineCount = 4;
let symbol = '*';

for (let a = 1; a <= 4; a++) {
    if (a <= 1) {
        console.log(symbol);
    }
    else {
        console.log(symbol += "*")
    }
}