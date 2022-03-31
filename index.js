const express = require("express");
const mongoose = require("mongoose")

const app = express();

mongoose.connect("mongodb://mizan:mizan@mongo:27017/?authSource=admin")
.then(() => console.log("Succesfully connected to DB")).catch(e => console.log(e))

app.get("/", (req, res) => {
  res.send("<h2>Hi theredsdff</h1>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listing on port: ${port}`));
