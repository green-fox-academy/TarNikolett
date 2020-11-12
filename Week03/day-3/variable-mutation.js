'use strict';

let a = 3;
// Növeld meg az "a" változó értékét 10-zel
a += 10;
console.log(a);

let b = 100;
// Csökkentsd a "b" változó értékeét 7-tel
b -= 7;
console.log(b);

let c = 44;
// A c értéke legyen dupla akkora
c *= 2
console.log(c);

let d = 125;
// Oszd el a d-t 5-tel
d /= 5;
console.log(d);

let e = 8;
// Emeld köbre az e változó értékét
e = Math.pow(e, 3);
console.log(e);

const f1 = 123;
const f2 = 345;
// Logikai (boolean) értékként írasd ki hogy f1 nagyobb-e f2-nél

if (f1 > f2) {
    console.log('f1 bigger than f2')
}
else {
    console.log('f1 not bigger than f2')
}

const g1 = 350;
const g2 = 200;
// Mondja meg a program, hogy g2 duplája nagyobb-e g1-nél (boolean)

if ((g2 * 2) > g1) {
    console.log('g2 duplája nagyobb mint g1')
}
else {
    console.log('g2 duplája nem nagyobb mint g1')
}

const h = 1357988018575474;
// Mondja meg a program, hogy osztható-e 11-el maradék nélkül?
// Írasd is ki logikai (boolean) értékként

if (h % 11 == 0) {
    console.log('h osztható 11-el')
}
else {
    console.log('h nem osztható 11-el')
}

const i1 = 10;
const i2 = 3;
// Mondja meg a program hogy i1 nagyobb-e i2 négyzeténél ÉS ugyanakkor kisebb-e i2 köbénél (boolean)

if (i1 > i2 * 2 && i1 < Math.pow(i2, 3)) {
    console.log('i1 nagyobb mint i2 négyzete és kisebb mint i2 köbe')
}
else {
    console.log('i1 nem nagyobb mint i2 négyzete és nem kisebb mint i2 köbe')
}

const j = 1521;
// Írasd ki, hogy j osztható-e 3-mal vagy 5-tel (boolean)

if (j % 3 == 0 || j % 5 == 0) {
    console.log('j oszható 3-mal és 5-tel')
}
else {
    console.log('j nem oszható 3-mal sem 5-tel')
}
