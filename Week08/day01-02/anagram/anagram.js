/* Írj egy függvényt, amely paraméterként két Stringet vár, és egy booleannel tér vissza az alapján, hogy a két szó anagramma-e vagy sem!
Írj rá teszteket! */

export function anagramma(param1, param2) {
    let param1Array = param1.split('').sort().toString().toLowerCase();
    let param2Array = param2.split('').sort().toString().toLowerCase();
    if (param1Array == param2Array) {
        return true
    }
    return false
}
console.log(anagramma('alma', 'Amla'));

