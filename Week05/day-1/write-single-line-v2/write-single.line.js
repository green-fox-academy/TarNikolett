// Készíts egy függvényt, ami képes megváltoztatni egy fájl tartalmát
// Írja bele a Te nevedet egy sorban.
// A fájl neve 'my-file-txt' legyen.
// Ha a program nem tud írni a fájlba,
// Írja ki a következő hibaüzenetet: 'Unable to write file: my-file.txt'

const fs = require('fs');

function changeContent ( fileName){
    try{
        if (fs.existsSync( fileName)){
            fs.writeFileSync( fileName , ' Tar Nikolett' );
        }

        else {
            throw  Error ( 'Unable to write file: my-file.txt' );
        }
    }
    catch ( err ){
        console.log(err.message)
    }
};
changeContent ( 'my-file.txt' )