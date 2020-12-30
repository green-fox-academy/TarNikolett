// Hozz létre egy függvényt, ami kap egy számokból álló listát paraméterként
// Visszad egy számokból álló listát, ahol minden szám pontosan egyszer szerepel

function unique(arr) {
    let sortArray = arr.sort();
    for ( let i = 0; i < sortArray.length; i++){
        if (sortArray[i] == sortArray[i + 1]){
            sortArray.splice(i, 1)
        }
    }
    return sortArray
}
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//ezt kéne kiírnia: `[1, 11, 34, 52, 61]`