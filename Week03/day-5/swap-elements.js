// Hozz létre egy `names` változót az alábbi tartalommal:
// `["Arthur", "Boe", "Chloe"]`
// Cseréld fel a names első és harmadik elemét!
// Logold ki az eredményt a konzolra!

'use strict';

let names = ["Arthur", "Boe", "Chloe"];
let temporaryVar = names[0];

names [0] = names[2];
names[2] = temporaryVar;
console.log(names);