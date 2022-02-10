const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("I am home page, man!!")
});

port = process.env.port || 5000
app.listen(port, () => {
  console.log("Hey, man, Wazzapp");
});


