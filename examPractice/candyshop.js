class Candy {
    price;
    amountOfSugar;
    constructor (price, amountOfSugar){
        this.price = price;
        this.amountOfSugar = amountOfSugar
    }
}

let Lollipop = new Candy ( '$2' , '60 grams');
let HardCandy = new Candy ( '$4' , '80 grams');
console.log(Lollipop, HardCandy);

class CandyShop {
    sugar;
    income;
    inventory;
}