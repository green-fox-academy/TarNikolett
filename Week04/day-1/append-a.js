// Hozz létre egy `animals` változót az alábbi tartalommal:
// `['koal', 'pand', 'zebr']`
// Minden elemhez fűzz hozzá egy "a" betűt
// Próbálj meg beépített metódust használni ciklus helyett!

'use strict';
let animals = ['koal', 'pand', 'zebr'];
let addA= animals.map(function(animal){
  return animal.concat('a')
});
console.log(addA);
