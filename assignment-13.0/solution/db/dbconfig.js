/**
 * dbconfig.js
 */
"use strict";

var AWS = require("aws-sdk");

const ddb = new AWS.DynamoDB.DocumentClient({
    "accessKeyId": {accessKey},
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "region": "us-east-1",
    "secretAccessKey" : {secretKey}
});

module.exports = ddb;
