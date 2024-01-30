"use strict";

const path = require("path");

const sqlite3 = require("sqlite3").verbose();
// always keep this db file within the db folder (use path.join() method)
const db = new sqlite3.Database(path.join(__dirname, "books_db.db"));

module.exports = { db };
