class Candy {
    price;
    gramsOfSugar;

    constructor(price, gramsOfSugar) {
        this.price = price;
        this.gramsOfSugar = gramsOfSugar
    }
}

class CandyShop {
    sugar = 0;
    income = 0;
    inventory = [];

    constructor(amountOfSugar) {
        this.sugar = amountOfSugar;
    }

    createCandy(Candy) {
        if (this.sugar < Candy.gramsOfSugar || this.amountOfSugar <= 0) {
            throw new Error(`Amount of sugar can't be 0!`)
        }
        else {
            this.inventory.push(Candy);
            this.sugar -= Candy.gramsOfSugar;
        }
    }

    raisePrice(amount) {
        for (let i = 0; i < this.inventory.length; i++) {
            return this.inventory[i].price += amount;
        }
    }

    sell(sellAmount) {
        if (sellAmount > this.inventory.length) {
            sellAmount = this.inventory.length;
        }
        for (let i = 0; i < sellAmount; i++) {
            this.income += this.inventory[i].price;
        }
        this.inventory = this.inventory.slice(sellAmount)
    }

    buySugar (amount){
        if ( this.income < 0){
            throw new Error (`Don't have enough money`)
        }   
        amount /* kg */= 1000 * amount; /* gram */
        let priceOfSugar= 600;
        this.sugar += amount; /* gram */
        this.income -= (priceOfSugar * amount) / 1000; /* kg */
         
    }

    toString (){
        let numbersOfLollipop = 0; 
        let numbersOfHardCandy = 0;
        for ( let i = 0; i < this.inventory.length; i++){
            if ( this.inventory[i].price == 600){
                numbersOfLollipop ++
            }
            else {
                numbersOfHardCandy ++
            }
        }
        return `HardCandy: ${numbersOfHardCandy}, Lollipop: ${numbersOfLollipop}, Sugar: ${this.sugar} grams, Income: ${this.income} Ft,`
    }
}

let Lollipop = new Candy(600, 60);
let HardCandy = new Candy(1200, 80);
let shop = new CandyShop(20000);
shop.createCandy(Lollipop);
shop.createCandy(HardCandy);
shop.createCandy(Lollipop);
shop.createCandy(HardCandy);
shop.createCandy(Lollipop);
shop.createCandy(HardCandy);
shop.sell(2);
console.log(shop);
shop.buySugar(1);
console.log(shop.toString());

