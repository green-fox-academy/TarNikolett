// Írj egy olyan függvényt, ami megtalálja egy tömb legnagyobb elemét rekurziót használva.

let numbers = [3, 8, 2, 4, 5, 1];

function getTheBiggestNumber(array) {
    if (array.length === 1) {
        return array;
    }
    array.splice(array.indexOf(Math.min(...array)),1);
    let newArray = array;
    return getTheBiggestNumber(newArray);
}
console.log(getTheBiggestNumber(numbers));