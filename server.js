/** @format */

const express = require("express");
const connectDB = require("./config/connectDB");
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const app = express();
//connect db
connectDB();
app.get("/", (req, res) => res.send("hello lawde"));
//use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on ${port}`));
