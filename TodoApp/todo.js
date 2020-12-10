/* Adott a megnyitott terminál a projekt könyvtáron belül
Amikor elindítom az alkalmazást argumentum nélkül
Akkor ki kell nyomtatnia az applikáció "használati utasítását"
 */

import minimist from 'minimist';

function todo (){
    console.log( 
        `Parancssori argumentumok: \n-l   Kilistázza a feladatokat \n-a  Új feladatot ad hozzá \n-r  Eltávolít egy feladatot \n-c  Teljesít egy feladatot`
    )
};

/*
## Tennivalok kilistazasa
**Adott** a megnyitott terminál a projekt könyvtáron belül
*És* a fájl, ahol tároljuk a tennivalókat
*Adj* hozzá egy tennivalót a fájlhoz ezzel a leírással: Kutyát sétáltatni
*Adj* hozzá egy tennivalót a fájlhoz ezzel a leírással: Tejet venni
*Adj* hozzá egy tennivalót a fájlhoz ezzel a leírással: Megcsinálni a leckét
**Amikor** az applikációt az *-l* argumentummal futtatjuk
**Akkor** nyomtassa ki a konzolra a tennivalókat a fájlból, ahol tároljuk őket
*És* adjon eléjük sorszámot
*/

import * as fs from 'fs';

let args = minimist(process.argv);

function listOfThings (args){
        if ( args === '-l'){
            console.log( fs.readFileSync('todos.txt').toString());
        }
    
};

listOfThings('-l');