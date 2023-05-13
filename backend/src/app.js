const express = require("express");
const ErrorHandler = require("./middlewares/error");
const customer=require("./routes/customerRoute")
const app = express();

app.use(express.json());
app.use("/api",customer)

app.use(ErrorHandler);
module.exports = app;
