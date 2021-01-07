export default class Candy {
    price = 0;
    sugar = 0;
    
    constructor(price, sugar) {
        this.price = price;
        this.sugar = sugar
    }

    getSugar(){
        return this.sugar;
    }

    getPrice(){
        return this.price;
    }

    incraisePrice (price){
        this.price += price;
    }
}