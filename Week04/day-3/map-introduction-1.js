//Asszociatív tömbökkel(Map) fogunk játszani. Nyugodtan használj bármilyen beépített függvényt, ahol lehetséges.

//Készíts egy üres objektumot, ahol a kulcsok(keys) számok, és az értékek(values) szöveg típusúak (string)!

let objektum = {

};

//Írasd ki hogy az objektum üres-e vagy sem!

if (Object.keys(objektum)){
    console.log( 'objektum is empty: ' + true)
}
else {
    console.log('objektum is empty: ' + false)
}

//Add hozzá az alábbi kulcs(key) érték(value) párokat az objektumhoz!
objektum[97] = 'a',
objektum[98] = 'b',
objektum[99] = 'c',
objektum[65] ='A',
objektum[66] = 'B',
objektum[67] = 'C'

//Írasd ki az összes kulcsot!

console.log(Object.keys(objektum));

//Írasd ki az összes értéket!

console.log(Object.values(objektum));

//Add hozzá a D értéket az 68-as kulccsal!

objektum[68] ='D';
console.log(objektum);

//Írasd ki hány kulcs érték pár van az objektumban!

console.log(Object.keys(objektum).length);

//Írasd ki a 99-es kulcshoz tartozó értéket!

console.log( 'value of 99: ' + (objektum[99]));

//Töröld ki azt a kulcs-érték párt, ahol a kulcs 97!

delete objektum[97];
console.log(objektum);

//Írasd ki van-e társítva érték a 100-as kulcshoz vagy sem!

console.log(objektum.hasOwnProperty(100));

//Távolítsd el az összes kulcs érték párt!
delete (objektum).length;
console.log(objektum);