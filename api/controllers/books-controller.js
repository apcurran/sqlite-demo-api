"use strict";

const { db } = require("../../db/index");

/** @type {import("express").RequestHandler} */
function getBooks(req, res, next) {
    db.all(`
        SELECT *
        FROM book;
    `, function (err, rows) {
        if (err) {
            next(err);
        }

        res.status(200).json(rows);
    });
}

/** @type {import("express").RequestHandler} */
function getBook(req, res, next) {
    const { bookId } = req.params;
    db.get(`
        SELECT *
        FROM book
        WHERE book_id = ?;
    `, bookId, function (err, row) {
        if (err) {
            next(err);
        }

        res.status(200).json(row);
    });
}

/** @type {import("express").RequestHandler} */
function postBook(req, res, next) {
    const {
        title,
        year,
        pages,
        genre,
        authorFirstName,
        authorLastName,
    } = req.body;

    db.serialize(function () {
        // query for authorId
        db.get(`
            SELECT author_id
            FROM author
            WHERE first_name = ? AND last_name = ?;
        `, [authorFirstName, authorLastName], function (err, row) {
            if (err) {
                next(err);
            }

            const { author_id } = row;
            // query for creating a new book entry
            db.run(`
                INSERT INTO book
                    (title, year, pages, genre, author_id)
                VALUES
                    (?, ?, ?, ?, ?);
            `, [title, year, pages, genre, author_id], function (err) {
                if (err) {
                    next(err);
                }

                res.status(200).json({ msg: "Book added." });
            });
        });
    });
}

/** @type {import("express").RequestHandler} */
function deleteBook(req, res, next) {
    const { bookId } = req.params;
    db.run(`
        DELETE
        FROM book
        WHERE book_id = ?;
    `, bookId, function (err) {
        if (err) {
            next(err);
        }

        res.status(200).json({ msg: "Book deleted." });
    });
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    deleteBook,
};
