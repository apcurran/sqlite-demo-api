"use strict";

const router = require("express").Router();

const booksController = require("../controllers/books-controller");

router.get("/", booksController.getBooks);

router.post("/", booksController.postBook);

module.exports = router;
