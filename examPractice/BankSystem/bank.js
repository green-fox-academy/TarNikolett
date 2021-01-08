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