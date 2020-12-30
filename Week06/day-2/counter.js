/* Készíts egy Counter osztályt
Legyen egy number tulajdonsága
Példányosításkor tudjuk ezt az értéket megadni, de ha nem adunk meg, akkor az alapérték legyen 0
Tudjunk hozzáadni (add(number)), ami megnöveli a számláló értékét a paraméterül kapott számmal
Vagy tudjunk hozzáadni (add()) paraméter nélkül is, ami megnöveli eggyel a számláló értékét
Tudjuk kiolvasni az aktuális értéket a get() metódussal
Végül tudjuk beállítani a kezdeti értéket a reset() metódussal */

export class Counter {
    number = 0;
    constructor(number) {
        this.number = number;
    }

    add(n) {
        if (n === undefined) {
            return (this.number + 1);
        }
        return (this.number + n);
    }

    get() {
        return this.number;
    }
}
console.log(new Counter(2).add());
console.log(new Counter(2).add(5));
console.log(new Counter(3).get());

