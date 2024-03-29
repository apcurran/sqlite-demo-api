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
        }

        res.status(200).json(rows);
    });
}

/** @type {import("express").RequestHandler} */
function getAuthor(req, res, next) {
    const { authorId } = req.params;
    const sql = `
        SELECT *
        FROM author
        WHERE author_id = ?;
    `;
    db.get(sql, authorId, function (err, row) {
        if (err) {
            next(err);
        }

        res.status(200).json(row);
    });
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
        }

        res.status(201).json({ msg: "Author added." });
    });
}

/** @type {import("express").RequestHandler} */
function deleteAuthor(req, res, next) {
    const { authorId } = req.params;
    const sql = `
        DELETE
        FROM author
        WHERE author_id = ?;
    `;
    db.run(sql, authorId, function (err) {
        if (err) {
            next(err);
        }

        res.status(200).json({ msg: "Author deleted." });
    });
}

module.exports = {
    getAuthors,
    getAuthor,
    postAuthor,
    deleteAuthor,
};
