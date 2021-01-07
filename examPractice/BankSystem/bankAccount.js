export default class bankAccount {
    name;
    pinCode = 1995;
    currency;

    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
    }

    deposit(value) {
        if (value >= 0) {
            return this.currency += value;
        }
        else {
            return 'not positive value'
        }
    }

    withdraw(pinCode, amount) {
        if (pinCode = this.pinCode && this.currency > amount) {
            return this.currency -= amount;
        }
        else {
            return 0
        }
    }
}