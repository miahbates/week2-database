const express = require("express");
//initialise db object
const db = require("./database/connection.js");
const server = express();
const home = require("./routes/home.js");
const display = require("./routes/display.js");
const errorPage = require("./routes/404");
const staticHandler = express.static("public");

server.use(staticHandler);

server.get("/", home.homePage);

server.get("/display_facts", display.displayFacts);

server.use(errorPage.error);

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
