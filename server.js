const express = require("express");
const server = express();
const home = require("./routes/home.js");

server.get("/", home.homePage);

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});