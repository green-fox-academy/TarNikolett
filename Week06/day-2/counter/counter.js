/* Készíts egy Counter osztályt
Legyen egy number tulajdonsága
Példányosításkor tudjuk ezt az értéket megadni, de ha nem adunk meg, akkor az alapérték legyen 0
Tudjunk hozzáadni (add(number)), ami megnöveli a számláló értékét a paraméterül kapott számmal
Vagy tudjunk hozzáadni (add()) paraméter nélkül is, ami megnöveli eggyel a számláló értékét
Tudjuk kiolvasni az aktuális értéket a get() metódussal
Végül tudjuk beállítani a kezdeti értéket a reset() metódussal */

export default class Counter {
    number = 0;
    constructor(number) {
        this.number = number;
        this.originNumber = number;
    }

    add(n) {
        if (!n) {
            return this.number = this.number + 1;
        }
        return this.number = this.number + n;
    }

    get() {
        return this.number;
    }

    reset() {
        return this.number = this.originNumber;
    }
}