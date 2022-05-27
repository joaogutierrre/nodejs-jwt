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
 
  jwt.sign({
    usr: usr
  }, "secretkey", (err, token) => {
    res.json({
      token,
    });
  });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403)
  }
}

app.listen(3000, (req, res) => {
  console.log("Server runnin on port 3000");
});