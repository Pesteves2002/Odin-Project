const http = require("http");
const axios = require("axios");

require("dotenv").config();

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, World!</h1>");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

axios
  .get("https://example.com/todos")
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

axios
  .post("https://whatever.com/todos", {
    todo: "Buy the milk",
  })
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

axios
  .put("https://whatever.com/todos", {
    todo: "Buy the milk",
  })
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

axios
  .delete("https://whatever.com/todos", {
    todo: "Buy the milk",
  })
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
