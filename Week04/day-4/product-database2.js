'use strict:'

let map = {
    Tojás: 200,
    Tej: 200,
    Hal: 400,
    Alma: 150,
    Kenyér: 50,
    Csirke: 550
};

// Mely termékek kerülnek kevesebbe mint 201? (csak a név)

let values = Object.values(map);
console.log('értékek: ' + values);
let keys = Object.keys(map);
console.log('kulcsok: ' + keys);

for ( let i = 0; i < values.length; i++){
    if ( values[i] < 201){
        console.log(keys[i]);
    }
};

//Mely termékek kerülnek többe mint 150? (név és ár)
for ( let j = 0; j < values.length; j++){
    if ( values[j] > 150){
        console.log( keys[j] + ' : ' + values[j] );
    }
};