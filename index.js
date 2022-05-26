const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Server is working",
  });
});

app.post("/api/login", (req, res) => {
  const usr = {
    id: 1,
    name: "John",
    email: "john@email.com",
  };

  jwt.sign({ usr: usr }, "secretkey", (err, token) => {
    res.json({
      token,
    });
  });
});

app.listen(3000, (req, res) => {
  console.log("Server runnin on port 3000");
});
