// Írj egy függvényt, ami átmásolja egy fájl tartalmát egy másikba
// A két fájl nevét paraméterként kapja meg
// És visszaad egy boolean értéket, attól függően,
// hogy sikeres volt-e a másolás

'use strict: '

const fs = require('fs');

function copyContent(fileName1, fileName2) {
    try {
        fileName2 = fs.copyFileSync(fileName1, fileName2);

        return true
    }
    catch {
        return false
    }
}
console.log(copyContent('text.txt', 'text2.txt'));