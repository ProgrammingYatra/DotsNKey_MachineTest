const express = require("express");
const ErrorHandler = require("./middlewares/error");
const customer=require("./routes/customerRoute")
const app = express();
const cors=require("cors")

app.use(cors());
app.use(express.json());
app.use("/api",customer)

app.use(ErrorHandler);
module.exports = app;
