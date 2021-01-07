export default class bank {
    bankAccountList = [];

    createAccount(bankAccount) {
        this.bankAccountList.push(bankAccount);
    }

    getAllMoney() {
        let sum = [];
        for (let i = 0; i < this.bankAccountList.length; i++) {
            sum.push(this.bankAccountList[i].currency);
        }
        return sum.reduce((a, b) => a + b, 0)
    }
};

/* Bank
A bankot a hozzá tartozó bankszámlák (BankAccount) listája jellemzi.

Van számla létrehozás (createAccount) metódusa, amelynek az egyetlen paramétere a bankszámla (BankAccount típusú), és

hozzáadja a bankszámlát a listához
Van tőke lekérdezés (getAllMoney) metódusa, amely

visszatér az összes bankszámlán található pénz összegével (függetlenül a valuta pénznemétől) */