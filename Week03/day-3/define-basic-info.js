// Hozz létre pár dolgot változóként és utána írasd ki az értékeiket:
// - A neved karakterláncként (string)
// - Korod egész számként (integer)
// - Magasságod méterben törtszámként (float / double)
// - Házas vagy-e logikai értékként (boolean)

'use strict';

let myName = ('N' + 'i' + 'k' + 'i');
console.log('Nevem:' + myName);

let myAge = 25;
console.log('Korom :' + myAge);

let myHeight = 1.71;
console.log('Magasságom ' + myHeight);

let married = false;
if (married){
    console.log('Házas vagyok? -igen')
}
else {
    console.log('Házas vagyok? -nem')
}