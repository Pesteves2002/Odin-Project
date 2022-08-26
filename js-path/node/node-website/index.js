const express = require("express");
const path = require("path");
const app = express();

const myLogger = function (req, res, next) {
  console.log("Request IP: " + req.ip);
  console.log("Request Method: " + req.method);
  console.log("Request date: " + new Date());

  next(); // THIS IS IMPORTANT!
};

app.use(myLogger);

const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/about.html"));
});
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "/contact-me.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/404.html"));
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
