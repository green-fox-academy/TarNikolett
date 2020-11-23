// Írj egy programot, ami megnyit egy 'my-file.txt' nevű fájlt
// majd kiír minden sort a fájlból.
// Ha a program nem tud olvasni a fájlból (pl.: mert nem létezik),
// akkor írja ki, hogy: 'Unable to read file: my-file.txt'

'use strict:'

function printTextContent(filename) {
    try {
        const fs = require('fs');
        let fileContent = fs.readFileSync(filename);
        console.log(fileContent.toString());
    }
    catch {
        console.log('Unable to read file: my-file.txt');
    }
}
printTextContent('my-file.txt');