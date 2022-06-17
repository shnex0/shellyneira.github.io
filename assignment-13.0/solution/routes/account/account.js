/**
 * product.js
 */
"use strict";

const express = require("express");
const path = require("path");
const accountRouter = express.Router();
const accountController = require("../../controller/accountController");

accountRouter.get("/list", async (req, res, next) => {
    console.log(`Presenting list of accounts page`);
    const accounts = await accountController.getAccounts(req, res);
    console.log(accounts);
    res.locals = {accounts: accounts};
    res.render("account");
});

accountRouter.post("/new", async (req, res, next) => {
    const result = await accountController.addNewAccount(req, res);
    res.redirect(303, "/account/list");
});
module.exports = accountRouter;
