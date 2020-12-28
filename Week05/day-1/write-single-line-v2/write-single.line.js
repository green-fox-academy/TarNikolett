// Készíts egy függvényt, ami képes megváltoztatni egy fájl tartalmát
// Írja bele a Te nevedet egy sorban.
// A fájl neve 'my-file-txt' legyen.
// Ha a program nem tud írni a fájlba,
// Írja ki a következő hibaüzenetet: 'Unable to write file: my-file.txt'

const fs = require('fs');

function changeContent ( fileName){
    try { 
        fs.writeFileSync( fileName , ' Tar Nikolett' );
    }
    catch (err){
        console.log ( 'Unable to write file: my-file.txt' );
    }
};
changeContent ( 'my-file.txt' )