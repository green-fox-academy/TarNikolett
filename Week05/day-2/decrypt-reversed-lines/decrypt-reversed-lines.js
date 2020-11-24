// Készíts egy függvény, ami dekódolja a reversed-lines.txt tartalmát

'use strict:'

const fs = require('fs');

function reversedLines(fileName) {
    fileName = fs.readFileSync(fileName).toString();
    let reversedLinesFile = fileName.split('\n');
    let finalRows = reversedLinesFile.map(function(row){
         return row.split('').reverse().join('');
    })
    {
    console.log(finalRows);
    }
};
reversedLines('reversed-lines.txt');