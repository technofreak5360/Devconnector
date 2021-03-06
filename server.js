/** @format */

const express = require("express");
const connectDB = require("./config/connectDB");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const passport = require("passport");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const app = express();
//bodyParser midware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//connect db
connectDB();
// passport midware
app.use(passport.initialize());
//passport config
require("./config/passport")(passport);
//use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on ${port}`));
