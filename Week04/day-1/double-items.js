// Hozz létre egy `drinks` változót az alábbi tartalommal:
// `['Gin', 'Whiskey', 'Wine', 'Beer']`
// Duplázd meg a stringeket (szöveges elemeket)!
// Használj beépített metódust a ciklusok helyett!
// Logold ki az eredményt!
// A várt eredmény: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

'use strict';
let drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];
let doubleDrinks = drinks.map(function(drink, index){
    return drink.concat(drinks[index]) 
});
console.log(doubleDrinks);