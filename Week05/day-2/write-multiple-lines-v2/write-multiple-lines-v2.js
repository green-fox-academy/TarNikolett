// Készíts egy függvényt, ami 3 paramétert vár: egy elérési utat, egy szót
// és egy számot. Tudjon írni fájlba.
// Az elérési út legyen egy string, ami leírja az írandó fájl helyét.
// A szó szintén legyen string és kerüljön be a fájlba egyenként külön sorba.
// A szám paraméter jelöli, hogy hány sora legyen a fájnak.
// Ha a szó 'alma' és a szám 5, akkor 5 sort írjon a fájlba
// és minden sorban az legyen írva: 'alma'.
// Ha a függvény nem tud írni a fájlba, ne dobjon semmilyen hibaüzenetet.

function writeMultipleLines ( filePath, word, num){
    const fs = require('fs');
    try { 
        for ( let i = 1; i <= num ; i++){
        fs.appendFileSync( filePath, word + '\n')
        }
    }
    catch {
        return 0;
    }
};
console.log ( writeMultipleLines ( 'my-file.txt', 'alma', '5') );