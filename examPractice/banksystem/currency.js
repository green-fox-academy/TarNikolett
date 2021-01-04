class Currency {
    code;
    centralBankName;
    value; 

    constructor (code, centralBankName, value){
        this.code = code;
        this.centralBankName = centralBankName;
        this.value = value;
    }
}

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

class bank {
    bankAccountList = [
        new bankAccount ( 'David' , 1000),
        new bankAccount ( 'Cody' , 2000)
    ];

    createAccount( bankAccount )  {
        this.bankAccountList.push(bankAccount);
    }

    getAllMoney (){
       let sum = [];
         for ( let i = 0; i < this.bankAccountList.length; i++){
            sum.push(this.bankAccountList[i].currency);
        } 
        return sum.reduce( (a , b) => a + b, 0)
    }
};
let USADollar = new Currency ( 'USD' , 'Federal Reserve System' , 300 );
let HUFForint = new Currency ( 'HUF' , 'Hungarian National Bank' , 350);
console.log(HUFForint, USADollar);

 let NikiBankAccount = new bankAccount ( 'Niki' , 3500);
console.log(NikiBankAccount);
NikiBankAccount.deposit(200);
console.log(NikiBankAccount);
NikiBankAccount.withdraw(1995, 200);
console.log(NikiBankAccount);

let trial = new bank ();
console.log(trial);
trial.createAccount(NikiBankAccount);
console.log(trial);
console.log(trial.getAllMoney());