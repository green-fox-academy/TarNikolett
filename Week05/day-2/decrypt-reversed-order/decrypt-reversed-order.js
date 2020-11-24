// Készíts egy függvényt, ami dekódolja a reversed-order.txt tartalmát

'use strict:'

const fs = require('fs');

function reversedOrder (FileName){
    let reversedFile = fs.readFileSync(FileName).toString().split('\n').reverse();
    console.log(reversedFile);
}

reversedOrder('reversed-order.txt');