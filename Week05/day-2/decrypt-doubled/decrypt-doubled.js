// Készíts egy függvényt, ami dekódolja a duplicated-chars.txt tartalmát

'use strict: '


/*
első gondolat:

const fs = require('fs');

function duplicatedFile(fileName) {
    let newFile = fs.readFileSync(fileName).toString();
    let letters = newFile.split('')
    console.log(letters);
    for (i = 0; i < letters.length; i++) {
        letters.splice(i+1, 1 )
    }
    console.log(letters);
}
duplicatedFile('duplicated-chars.txt');
*/

const fs = require('fs');

function duplicatedFile(fileName) {
    fileName = fs.readFileSync(fileName).toString();
    fileName = fileName.split('')
    console.log(fileName);
    for (i = 0; i < fileName.length; i++) {
        fileName.splice(i+1, 1 )
    }
    console.log(fileName);
}
duplicatedFile('duplicated-chars.txt');

