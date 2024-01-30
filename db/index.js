"use strict";

const sqlite3 = require("sqlite3").verbose();
const path = require("path");
// always keep this db file within the db folder (use path.join() method)
const db = new sqlite3.Database(path.join(__dirname, "books_db.db"));

module.exports = { db };
