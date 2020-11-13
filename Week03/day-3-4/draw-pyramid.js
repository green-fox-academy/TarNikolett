// Írj egy programot, ami
// ilyen piramist rajzol:
//
//
//    *
//   ***
//  *****
// *******
//
// A piramisnak annyi sora legyen, mint amennyi a lineCount értéke

'use strict';

const lineCount = 4;

let char ='*';
let space = ' ';
let spaceCount = lineCount - 1;

for (let i =0; i < lineCount; i++){
    console.log(space.repeat(spaceCount)+ char);
    spaceCount--;
    char= char + '**';
}
