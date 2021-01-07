export default class CandyShop {
    sugar = 0;
    income = 0;
    inventory = [];
    sugarUnitPrice = 600;

    constructor(amountOfSugar) {
        this.sugar = amountOfSugar;
    }

    createCandy(candy) {
        let sugarNeeded = candy.getSugar();
        if (this.sugar < sugarNeeded) {
            throw new Error(`Nincs elég cukor`)
        }
        this.inventory.push(candy);
        this.sugar -= sugarNeeded;
    }

    raisePrice(amount) {
        this.inventory.forEach((Candy) => {
            Candy.incraisePrice(amount);
        })
    }

    sell(amountShouldBeSold) {
        const amountCanBeSold = this.inventory.length;
        let amountToBeSold = 0;
        if (amountCanBeSold >= amountShouldBeSold) {
            amountToBeSold = amountShouldBeSold;
        }
        else {
            amountToBeSold = amountCanBeSold;
        }
        for (let i = 0; i < amountToBeSold; i++) {
            this.income += this.inventory[0].getPrice();
            this.inventory = this.inventory.shift();
        }
    }
    
    buySugar(amountInKG) {
        let priceOfSugar = amountInKG * this.sugarUnitPrice;
        if (this.income < priceOfSugar) {
            throw new Error(`Don't have enough money`)
        };
        this.sugar += amountInKG * 1000;
        this.income -= priceOfSugar;
    }

    toString() {
        let output = '';
        let hardCandyCount = 0;
        let lollipopCount = 0;
        this.inventory.forEach( (candy) => {
            if (candy instanceof Lollipop) {
                lollipopCount++;
            }
            else if (candy instanceof HardCandy) {
                hardCandyCount++;
            }
        });

        output += ` Készlet: ${hardCandyCount} cukorka, ${lollipopCount} nyalóka, Bevétel: ${this.income} Ft, Cukor: ${this.sugar} gramm`;
        return output;
    }
}




