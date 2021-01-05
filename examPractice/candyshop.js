class Candy {
    price;
    amountOfSugar;

    constructor(price, amountOfSugar) {
        this.price = price;
        this.amountOfSugar = amountOfSugar
    }
}

class CandyShop {
    sugar;
    income;
    inventory = [];

    constructor(amountOfSugar) {
        this.amountOfSugar = amountOfSugar;
    }

    createCandy(Candy) {
        if (Candy.amountOfSugar <= 0) {
            throw new Error (`Amount of sugar can't be 0!`)
        }
        else {
            this.inventory.push(Candy)
            // reduce the sugar amount by the amount needed to create the candies ??? 
        }
    }

    raisePrice(amount) {
        for (let i = 0; i < this.inventory.length; i++) {
            return this.inventory[i].price += amount;
        }
    }
}

let Lollipop = new Candy( 2, 60);
let HardCandy = new Candy( 4, 80);
console.log(Lollipop, HardCandy);
let trial = new CandyShop (40);
trial.createCandy(Lollipop);
trial.raisePrice(10);
console.log(trial.inventory);