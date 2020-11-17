'use strict';
// - Készíts egy `factorio` nevű függvényt, ami visszaadja 
//   a bemeneti paraméter faktoriálisát

function factorio (num){
    let result = 1;
    for ( let i=1; i <= num; i++){
        result *= i
    }
 return result
}
console.log(factorio(10));