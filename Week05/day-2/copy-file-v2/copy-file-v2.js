// Írj egy függvényt, ami átmásolja egy fájl tartalmát egy másikba
// A két fájl nevét paraméterként kapja meg
// És visszaad egy boolean értéket, attól függően,
// hogy sikeres volt-e a másolás

function copyFileContent ( file1, file2){
    const fs = require('fs');
    try {
        let fileContent = fs.readFileSync( file1 ).toString();
        fs.writeFileSync( file2, fileContent)
        return true;
    }
    catch {
        return false;
    }
};

console.log( copyFileContent ( 'text1.txt' , 'text2.txt') );