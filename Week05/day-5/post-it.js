/*
Készíts egy PostIt osztályt, aminek a következők a tagváltozói:
    backgroundColor
    text
    textColor
Készíts néhány példa post-it objektumot:
egy narancssárgát kék szöveggel: "Egy, megerett a meggy"
egy rózsaszínt fekete szöveggel: "Ketto, csipkebokor vesszo"
egy sárgát zöld szöveggel: "1 liter tej!"
*/

'use strict:'

class PostIt {
    backgroundColor;
    text;
    textColor;
    constructor(backgroundColor, text, textColor){
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
};
const firstAnswer = new PostIt('orange','Egy, megerett a meggy','blue');
const secondAnswer = new PostIt('pink', 'Ketto, csipkebokor vesszo', 'black');
const thirdAnswer = new PostIt ('yellow', '1 liter tej!', 'green');
console.log(firstAnswer, secondAnswer, thirdAnswer);
