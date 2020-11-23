// Írj egy függvényt, ami fogad egy fájlnevet stringként,
// majd visszadja a fájlban található sorok számát.
// Ha nem tudja megnyitni a fájlt adjon vissza nullát és
// ne jelezzen semmilyen hibát.

function printRowNumberOfFile(filename) {
    try{
    const fs = require('fs');
    let contentOfFile = fs.readFileSync(filename);
    contentOfFile = contentOfFile.toString();
    let rowNumberOfFile = contentOfFile.split('\n');
    console.log(rowNumberOfFile.length);
    }
    catch {
        return 0;
    }
}

printRowNumberOfFile('text.txt');