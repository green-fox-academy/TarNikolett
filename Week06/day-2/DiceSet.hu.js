'use strict';
class DiceSet {
    constructor() {
        this.numOfDices = 6;
    }

    roll() {
        this.dice = [];
        for (let i = 0; i < this.numOfDices; i++) {
            this.dice.push(Math.floor(Math.random() * 6 + 1));
        }
        return this.dice;
    }

    reroll(index) {
        if (index === undefined) {
            for (let i = 0; i < this.numOfDices; i++) {
                this.dice[i] = Math.floor(Math.random() * 6 + 1);
            }
        } else {
            this.dice[index] = Math.floor(Math.random() * 6 + 1);
        }
    }

    getCurrent(index) {
        if (index === undefined) {
            return this.dice;
        } else {
            return this.dice[index];
        }
    }
}

// Van egy `DiceSet` osztályod, benne egy 6 elemű dobókocka lista
// A roll() metódussal tudsz dobni
// A getCurrent() metódussal nézheted meg az aktuális dobási eredményt
// A reroll() metódussal újra dobhatsz
// A feladatod addig dobni, amíg mind a 6 kockával 6-ost nem dobsz

let diceSet = new DiceSet();

let rollRound = diceSet.roll();

for (let i = 0; i < rollRound.length; i++){
    while ( rollRound[i] !== 6){
        diceSet.reroll(i);
        rollRound = diceSet.getCurrent();
    }
};

console.log(rollRound);
 