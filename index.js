const express = require("express");
const app = express();
var cors = require("cors");
const chefs = require("./data/chef.json");
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("reciba server is running ");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const pId = req.params.id;
  const selectItems = chefs.find((n) => n.id === pId);
  console.log(selectItems);
  res.send(selectItems);
  console.log(pId);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
