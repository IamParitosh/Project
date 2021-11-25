const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());

//Route Import

const product = require("./routes/productRoute");
const userRoute =require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", userRoute);

// Middleware for Errors

app.use(errorMiddleware);

module.exports = app;