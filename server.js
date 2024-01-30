"use strict";

const express = require("express");

const { db } = require("./db/index");

const app = express();

// general server error handler
app.use((err, req, res, next) => {
    console.error(err);
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port, ${process.env.PORT}`);
});
