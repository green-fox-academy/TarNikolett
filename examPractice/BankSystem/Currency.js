export default class Currency {
    code;
    centralBankName;
    value;
    constructor(code, centralBankName, value) {
        this.code = code;
        this.centralBankName = centralBankName;
        this.value = value;
    }
}