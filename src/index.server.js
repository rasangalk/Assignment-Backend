const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// environment variable
env.config();

// mongodb connection
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.4ew9zi7.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database connected");
  });

app.use(bodyParser());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
