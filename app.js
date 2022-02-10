const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("I am home page, man!!")
});

app.listen(5000, () => {
  console.log("Hey, man, Wazzapp");
});


