const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Server is working",
  });
});

app.listen(3000, (req, res) => {
  console.log("Server runnin on port 3000");
});
