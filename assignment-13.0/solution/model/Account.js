"use strict";

class Account{
    accountId = null;
    accountNo = null;
    customerName = null;
    accountType = null;

    constructor(accountId, accountNo, customerName, accountType) {
        this.accountId = accountId;
        this.accountNo = accountNo;
        this.customerName = customerName;
        this.accountType = accountType;
    }

    get accountId() { return this.accountId; }
    get customerName() { return this.customerName; }
    get balance() { return this.balance; }
}

module.exports = Account;