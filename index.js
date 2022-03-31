const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hi theredsdff</h1>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listing on port: ${port}`));
