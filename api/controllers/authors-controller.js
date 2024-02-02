"use strict";

const { db } = require("../../db/index");

/** @type {import("express").RequestHandler} */
function getAuthors(req, res, next) {
    const sql = `
        SELECT *
        FROM author;
    `;
    db.all(sql, function (err, rows) {
        if (err) {
            next(err);

            res.status(500).json({ error: "Something went wrong." });
        }

        res.status(200).json(rows);
    });
}

/** @type {import("express").RequestHandler} */
function getAuthor(req, res, next) {

}

/** @type {import("express").RequestHandler} */
function postAuthor(req, res, next) {
    const { firstName, lastName } = req.body;
    const sql = `
            INSERT INTO author
                (first_name, last_name)
            VALUES
                (?, ?);
        `;
    const params = [firstName, lastName];
    db.run(sql, params, function (err) {
        if (err) {
            next(err);

            res.status(500).json({ error: "Something went wrong." });
        }

        res.status(201).json({ msg: "Author added." });
    });
}

/** @type {import("express").RequestHandler} */
function deleteAuthor(req, res, next) {

}

module.exports = {
    getAuthors,
    getAuthor,
    postAuthor,
    deleteAuthor,
};
