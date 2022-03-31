const express = require("express");
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP } = require("./config/config");

const app = express();

const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}/?authSource=admin`

const connectWithRetry = () => {
  mongoose.connect(mongoUrl)
  .then(() => console.log("Succesfully connected to DB")).catch(e => {
    console.log(e)
    setTimeout(connectWithRetry, 5000)
  })
  
}

connectWithRetry()

app.get("/", (req, res) => {
  res.send("<h2>Hi theredsdff</h1>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listing on port: ${port}`));
