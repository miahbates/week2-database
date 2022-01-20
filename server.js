const express = require("express");
const server = express();
const home = require("./routes/home.js");

const staticHandler = express.static("public");

server.use(staticHandler);

server.get("/", home.homePage);

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});