'use strict:'
//Készíts egy asszociatív tömböt (Map) ahol a kulcsok (keys) és az értékek (values) szöveges típusúak!
//Töltsd bele a következő kulcs-érték párokat:

let objektum = {
    '978-1-60309-452-8': 'A Letter To Jo' ,
    '978-1-60309-459-7': 'Lupus',
    '978-1-60309-444-3': 'Red Panda And Moon Bear',
    '978-1-60309-461-0' : 'The Lab' 
}
//Írasd ki az összes kulcs-érték párt a következő formátumban:
 Object.keys(objektum).forEach(key => {
 console.log(  objektum[key] +'(ISBN: ' + key + ')');
});

//Távolítsd el azt a kulcs-érték párt, melynek a kulcsa 978-1-60309-444-3!
delete objektum['978-1-60309-444-3'];
console.log(objektum);

//Távolítsd el azt a kulcs-érték párt, melynek az értéke The Lab!
let theLabValues = Object.values(objektum);
console.log(theLabValues);

console.log(theLabValues.indexOf('The Lab'));

let theLabKey = Object.keys(objektum);
console.log(theLabKey);
console.log(theLabKey[theLabValues.indexOf('The Lab')]);
delete objektum[theLabKey[theLabValues.indexOf('The Lab')]];
console.log(objektum);

//Add hozzá az alábbi kulcs-érték párokat a Map-hez:
// Kulcs (Key)	Érték (Value)
//978-1-60309-450-4	They Called Us Enemy
//978-1-60309-453-5	Why Did We Trust Him?
objektum['978-1-60309-450-4']='They Called Us Enemy';
objektum['978-1-60309-453-5']='Why Did We Trust Him?'
console.log(objektum);

//Írasd ki, van-e érték társítva a 478-0-61159-424-8-as kulcshoz, vagy sem!
console.log(objektum.hasOwnProperty('478-0-61159-424-8'));

//Írasd ki a 978-1-60309-453-5- as kulcshoz tartozó értéket!
console.log(objektum['978-1-60309-453-5']);