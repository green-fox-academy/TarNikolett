import minimist from 'minimist';
import * as fs from 'fs';
import { type } from 'os';

function writeArgs() {
    console.log(
        `Parancssori argumentumok:
        -l  Kilistázza a feladatokat
        -a  Új feladatot ad hozzá
        -r  Eltávolít egy feladatot
        -c  Teljesít egy feladatot`
    )
};
writeArgs();

let args = minimist(process.argv);
let listOfThing = fs.readFileSync('todos.txt').toString().split('\n');

function toDo() {
    if (args.l === true) {
        if (listOfThing != '') {
            for (let i = 0; i < listOfThing.length; i++) {
                console.log(i + 1 + ' ' + listOfThing[i]);
            }
        }
        if (listOfThing == '') {
            console.log('Nincs mára tennivalód! :)')
        }
    } else if (typeof args.a == 'string') {
        addThingsToDo()
    }
    try {
        if (args.a && typeof args.a !== 'string') {
            throw Error('Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!')
        }
        if (args.r == true) {
            throw Error('Nem lehetséges az eltávolítás: nem adott meg indexet!')
        }
        if (args.r && typeof args.r !== 'number') {
            throw Error('Nem lehetséges az eltávolítás: a megadott index nem szám!')
        }
        if (args.r > listOfThing.length) {
            throw Error('Nem lehetséges az eltávolítás: túlindexelési probléma adódott!');
        }
        if (args.keys !== 'l', 'a', 'r', 'c') {
            throw Error('Nem támogatott argumentum! Nyomtassa ki az applikáció "használati utasítását".')
        }
    }
    catch (err) {
        console.log(err.message);
    }
};
toDo();

function addThingsToDo() {
    fs.appendFileSync('todos.txt', '\n' + (args.a))
};

// ## Tennivalo eltavolitasa
/* **Adott** a megnyitott terminál a projekt könyvtáron belül
*És* a fájl, ahol tároljuk a tennivalókat
*És* a fájlban 2 vagy több tennivaló van elmentve
**Amikor** az applikációt az -r 2 argumentummal futtatjuk
**Akkor** az app távolítsa el a második tennivalónkat a fájlból */

function removeThingsToDo() {
    let donetodo = listOfThing.splice(args.r - 1, 1);
    fs.writeFileSync('todos.txt', listOfThing.toString());
}; 