//Az idézet mentésekor lemezhiba történt. Kérlek, javítsd ki!
//Az "always takes longer than" szövegrészletnek az "It" és a "you" között kell szerepelnie,
//tehát helyesen: Hofstadter's Law: It always takes longer than you expect,
//even when you take into account Hofstadter's Law.
//Használd a quote változó darabjait (a szöveg újra definiálása helyett).

'use strict:'

let quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.";

//let index = quote.indexOf('It') -> 18

let part1 = quote.slice(0,20);
let part2 = quote.slice(21)

let correctQuote = part1.concat(' always takes longer than ' , part2);

console.log(correctQuote);