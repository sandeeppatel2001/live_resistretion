const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
let v = [];
app.get("/", (req, res) => {
  console.log("get request");
  res.send(v);
});

app.post("/", (req, res) => {
  console.log(req.body);
  v.push(req.body);
  res.send("accepted");
});
app.listen(3000, () => {
  console.log("app running at 3000");
});
