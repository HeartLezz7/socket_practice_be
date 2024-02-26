const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);

app.use(express.json());
app.use(cors());

app.get("", (req, res) => {
  console.log("test socket");
  res.json({ mesage: "test01" });
});

module.exports = server;
