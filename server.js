"use strict";

const express = require("express");

const { db } = require("./db/index");

const app = express();

app.use(express.json());

// general server error handler
app.use((err, req, res, next) => {
    console.error(err);
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port, ${process.env.PORT}`);
});
