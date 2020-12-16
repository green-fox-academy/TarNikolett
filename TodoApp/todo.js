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
//writeArgs();

let args = minimist(process.argv);
let listOfThing = fs.readFileSync('todos.txt').toString().split('\n');
let argsKeys = Object.keys(args);

let jsonContent = fs.readFileSync('todos.json').toString();
let jsonTodos = JSON.parse(jsonContent);
console.log(jsonTodos);

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
    }
    else if (typeof args.a == 'string') {
        addThingsToDo()
    }
    else if (args.r && typeof args.r == 'number') {
        removeThingsToDo()
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
        if (argsKeys.includes('a') || argsKeys.includes('l') || argsKeys.includes('r') || argsKeys.includes('c')) {
            return true
        }
        throw Error('Nem támogatott argumentum! Nyomtassa ki az applikáció "használati utasítását".')
    }
    catch (err) {
        console.log(err.message);
        }
};
toDo();

function addThingsToDo() {
    fs.appendFileSync('todos.txt', '\n' + (args.a))
};

function removeThingsToDo() {
    let donetodo = listOfThing.splice(args.r - 1, 1);
    fs.writeFileSync('todos.txt' , listOfThing.toString());
    console.log(donetodo);
    console.log(listOfThing);
};