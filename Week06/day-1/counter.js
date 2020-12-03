/* Készíts egy Counter osztályt
Legyen egy number tulajdonsága
Példányosításkor tudjuk ezt az értéket megadni, de alapból legyen 0
Tudjunk hozzáadni (add(number)), ami megnöveli a számláló értékét a paraméterül kapott számmal
Vagy tudjunk hozzáadni (add()) paraméter nélkül is, ami megnöveli eggyel a számláló értékét
És tudjuk string-ként kiolvasni az aktuális értéket a get() metódussal
Végül tudjuk beállítani a kezdeti értéket a reset() metódussal
Használj export Counter-t a file-od végén
Próbáld ki, hogy minden teszt jól működik-e
Töltsd le a counter.test.js file-t, és helyezd a megoldásod mellé
A mappádból futtasd a npm install tape @types/tape --save-dev parancsot (ahol már van egy package-lock.json file-od)
Futtasd a tesztfile-t a node counter.test.hu.js paranccsal */

class Counter {
    number = 0;
    
    constructor (number){
        this.number = number;
    }

    add(x) {
        number = x + number;
    }

    add(){
        number++
    }

    get(){
        /* const fs = require('fs');
        fs.toString(number); */
        number.toString();
    }
}
