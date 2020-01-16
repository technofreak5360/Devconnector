/** @format */

const mongoose = require("mongoose");
URI =
  "mongodb+srv://technofreak:techno5360@cluster0-jekrf.mongodb.net/test?retryWrites=true&w=majority";
const connectDB = async () => {
  await mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to databse"))
    .catch(err => console.log(err));
};
module.exports = connectDB;
