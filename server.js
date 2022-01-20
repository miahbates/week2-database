const express = require("express");
//initialise db object
const db = require("./database/connection.js");
const server = express();
const home = require("./routes/home.js");

const staticHandler = express.static("public");

server.use(staticHandler);

server.get("/", home.homePage);

const fakeUsers = [
  {
    firstname: "Gregor",
    fact: "I once won a tea drinking competition",
    cohort: "Fac17",
  },
  { firstname: "Reuben", fact: "I once met Madonna", cohort: "Fac19" },
];

server.get("/display_facts", (request, response) => {
  const select_userInfo = /*sql*/ `
    SELECT facts, first_name 
    FROM user_facts INNER JOIN users 
    ON user_facts.user_id = users.id;
  `;

  db.query(select_userInfo).then((result) => {
    let list = "";
    const dbResponse = result.rows;
    dbResponse.forEach((user) => {
      list += `<li>${user.first_name}: ${user.facts}</li>`;
    });

    const html = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <h1>Cohort facts</h1>
        <ul>${list}</ul>
      </body>
      </html>`;

    response.send(html);
  });
});

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
