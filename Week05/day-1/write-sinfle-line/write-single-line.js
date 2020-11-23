// Készíts egy függvényt, ami képes megváltoztatni egy fájl tartalmát
// Írja bele a Te nevedet egy sorban.
// A fájl neve 'my-file-txt' legyen.
// Ha a program nem tud írni a fájlba,
// Írja ki a következő hibaüzenetet: 'Unable to write file: my-file.txt'

'use strict:'

function changeContent (filename) {
    try {
        const fs = require('fs');
        fs.writeFileSync(filename, 'Tar Nikolett')
    }
    catch {
        console.log('Unable to write file: my-file.txt')
    }
}
changeContent('my-file.txt');