/* Készíts egy sum függvényt az osztályodban, amely bemeneti paraméterként számokból álló tömböt vár.
A függvény adja össze a lista elemeit és térjen vissza az összeggel.
Kövesd az alábbi lépéseket:
Hozz létre egy új tesztesetet!
Példányosítsd az osztályodat!
Hozz létre egy számokból álló tömböt!
Használd a t.equal() függvényt az általad létrehozott sum függvény tesztelésére!
Futtasd le a tesztet!
Készíts további teszteket, ahol ezekkel a paraméterekkel teszteld:
üres tömb
egy elemű tömb
több elemű tömb
null
szöveges tömb
Futtasd le a teszteket!
Javítsd a kódodat ha szükséges! */


export class Sum {
    sumNumbers(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    };
};
