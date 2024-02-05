"use strict";

const express = require("express");

// const { db } = require("./db/index");
const authorsRouter = require("./api/routes/authors-router");

const app = express();

app.use(express.json());

// API routers
app.use("/api/authors", authorsRouter);

// general server error handler
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({ error: "Something went wrong." });
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port, ${process.env.PORT}`);
});
