"use strict";
const ddb = require('../dbconfig');
const crypto = require('crypto');

const accountDAO = (() => {

    const getAccounts = async () => {
        try{
            const parameters = {
                TableName: "account",
                Limit:8
            };

            const {Items} = await ddb.scan(parameters).promise();
            console.log("Database response: ", Items);
            return Items;

        } catch(error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    }

    const saveAccount = async (account) => {
        try{
            const parameters = {
                TableName: 'account',
                Item: {
                    'accountId': `${crypto.randomUUID()}`,
                    'accountNo': `${account.accountNo}`,
                    'customerName': `${account.customerName}`,
                    'accountType': `${account.accountType}`
                }
            };

            const result = await ddb.put(parameters).promise();
            console.log("Database response: ", result);
            return result;

        } catch(error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    }

    return {
        getAccounts: getAccounts,
        saveAccount: saveAccount
    }
})();

module.exports = accountDAO;