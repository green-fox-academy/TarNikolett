export class Currency {
    code;
    centralBankName;
    value; 

    constructor (code, centralBankName, value){
        this.code = code;
        this.centralBankName = centralBankName;
        this.value = value;
    }
}

let USADollar = new Currency ( 'USD' , 'Federal Reserve System' , 300 );
let HUFForint = new Currency ( 'HUF' , 'Hungarian National Bank' , 350);
// console.log(HUFForint, USADollar);

class bankAccount {
    name;
    pinCode = 1995;
    currency;

    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
    }

    deposit ( value ){
        if ( value >= 0 ){
            return this.currency += value;
        }
        else {
            return 'not positive value'
        }
    }

    withdraw (pinCode, amount){
        if ( pinCode = this.pinCode && this.currency > amount){
            return this.currency -= amount;
        }
        else {
            return 0
        }
    }
}
let NikiBankAccount = new bankAccount ( 'Niki' , 3500);
console.log(NikiBankAccount);
console.log(NikiBankAccount.deposit(200));
console.log(NikiBankAccount);
console.log(NikiBankAccount.withdraw(1995, 200));
console.log(NikiBankAccount);

class bank {
    
}


