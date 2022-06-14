module.exports = app => {
    const account = require("../controllers/account_controller.js");
    var router = require("express").Router();

    //create account
    router.post("/", account.create);
    router.post("/createNote", account.createNote);
    router.get('/:username', account.findOne);
    router.get('/:information/:id', account.findAccount);
    app.use("/api/account", router);
}