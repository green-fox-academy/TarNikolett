//  Hozz létre egy függvény, ami kap egy számot és egy számokból álló tömböt
//  paraméterekként Majd visszadja azoknak a számoknak az indexét a tömbből,
//  ahol a elsőként kapott számjegy megtalálható a számban. Ha az elsőként
//  kapott számjegy nem található meg egyik számban sem, adjon vissza egy üres
//  tömböt


function subint(num, arr) {
    let indexArray = [];
    let splittedArray = [];
    for (let i = 0; i < arr.length; i++) {
        splittedArray = arr[i].toString().split('');
        if (splittedArray.includes(num.toString())) {
            indexArray.push(i)
        }
    }
    return indexArray;
}


// Példa
console.log(subint(1, [1, 11, 34, 52, 61]));
// ezt kéne kiírnia: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// ezt kéne kiírnia: '[]'