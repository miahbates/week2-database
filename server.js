const express = require("express");
//initialise db object
const db = require("./database/connection.js");
const server = express();
const home = require("./routes/home.js");

const staticHandler = express.static("public");

server.use(staticHandler);

// add in body paser..
const bodyParser = express.urlencoded();

server.get("/", home.homePage);

// make a post request to log when form is submitted that posted console.logs

// server.post("/", (request, response) => {
//   console.log("posted");
// });

// won't get access to body without body parser
// server.post("/", home.addFact);

server.post("/", bodyParser, home.addFact);

const fakeUsers = [
  {
    firstname: "Gregor",
    fact: "I once won a tea drinking competition",
    cohort: "Fac17",
  },
  { firstname: "Reuben", fact: "I once met Madonna", cohort: "Fac19" },
];

server.get("/display_facts", (request, response) => {
  // const select_posts = /*sql*/ `
  //     SELECT blog_posts.text_content, users.username
  //     FROM blog_posts INNER JOIN users
  //     ON blog_posts.user_id = users.id
  //     ORDER BY blog_posts.id DESC
  //   `;
  // db.query(select_posts).then((result) => {
  //   const posts = result.rows;
  //   const postItems = posts.map((post) => {
  //     return /*html*/ `
  //         <li>
  //          <p>${post.text_content}</p>
  //          <p>${post.username}</p>
  //         </li>
  //       `;
  //   });
  //   response.send(`<ul>${postItems.join("")}</ul>`);
  // });

  console.log(db);

  let list = "";

  fakeUsers.forEach((user) => {
    list += `<li>${user.firstname}: ${user.cohort} - ${user.fact} </li>`;
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

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
