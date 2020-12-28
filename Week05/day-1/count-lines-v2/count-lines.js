// Írj egy függvényt, ami fogad egy fájlnevet stringként,
// majd visszadja a fájlban található sorok számát.
// Ha nem tudja megnyitni a fájlt adjon vissza nullát és
// ne jelezzen semmilyen hibát.

const fs = require ('fs');

function countLines ( fileName ){
    try {
        let fileContent = fs.readFileSync( fileName ).toString();
        let numberOfLines = fileContent.split('\n');
        return numberOfLines.length;
    }
    catch {
        return 0;
    }
}

console.log ( countLines ('my-file.txt') ) ;