/** @format */

const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
//connect db
connectDB();
app.get("/", (req, res) => res.send("hello lawde"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on ${port}`));
