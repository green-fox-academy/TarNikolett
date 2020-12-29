'use strict:'

let map = {
    Tojás: 200,
    Tej: 200,
    Hal: 400,
    Alma: 150,
    Kenyér: 50,
    Csirke: 550
};

// Mennyibe kerül a hal?
console.log('Hal: ' + map.Hal);

// Melyik a legdrágább termék?
let values = Object.values(map);
console.log('értékek: ' + values);

let mostExpensive = Math.max(...values);
console.log('legdrágább: ' + mostExpensive);

// Mi a termékek átlag ára?
let average = values.reduce((a, b) => (a + b)) / values.length;
console.log('átlag ár: ' + average);


// Hány termék ára van 300 alatt?
let cheaperThan300 = 0;
for (let i = 0; i < values.length; i++) {
    if (values[i] < 300) {
        cheaperThan300++
    }
};
console.log('300-nál olcsóbb: ' + cheaperThan300);

// Van-e olyan termék, melyet pontosan 125Ft-ért tudunk megvenni?

function priceCheck() {
    for (let j = 0; j < values.length; j++) {
        if (values[j] === 125) {
            return true;
        }
        else {
            return false;
        }
    }
};
console.log(priceCheck());

// Melyik a legolcsóbb termék?
let cheapest = Math.min(...values);
console.log( 'legolcsóbb: ' + cheapest);