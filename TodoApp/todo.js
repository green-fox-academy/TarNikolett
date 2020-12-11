//## Használat megjelenítése 

import minimist from 'minimist';
import * as fs from 'fs';

function writeArgs() {
    console.log(
        `Parancssori argumentumok:
        -l  Kilistázza a feladatokat
        -a  Új feladatot ad hozzá
        -r  Eltávolít egy feladatot
        -c  Teljesít egy feladatot`
    )
};

let args = minimist(process.argv);

function toDo() {
    let listOfThing = fs.readFileSync('todos.txt').toString().split('\n');
    if (args.l === true) {
        //## Tennivalok kilistazasa

        if (listOfThing != '') {
            writeThingsToDo()
        }
        //## Ures lista

        if (listOfThing == '') {
            console.log('Nincs mára tennivalód! :)')
        }
    }
    //## Uj tennivalo hozzaadasa

    else if (args.a != false) {
        addThingsToDo()
    }
};

toDo();

function writeThingsToDo() {
let listOfThing = fs.readFileSync('todos.txt').toString().split('\n');
    for (let i = 0; i < listOfThing.length; i++) {
        console.log(i + 1 + ' ' + listOfThing[i]);
    };
};

function addThingsToDo() {
    fs.appendFileSync('todos.txt', '\n' + (args.a))
};