require("dotenv").config();
require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "./client/build");
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));

app.get("/users", (req, res) => {
  res.send("ok");
});

app.use("*", (req, res) => {
  res.status(500).send("route is not found");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
