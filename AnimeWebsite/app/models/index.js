const dbConfig = require("../config/db_config.js");
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.account = require("./accounts_content.js")(mongoose);
module.exports = db;