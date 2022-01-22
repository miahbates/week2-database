const db = require("../database/connection.js");

function displayFacts(request, response) {
  const select_userInfo = /*sql*/ `
    SELECT facts, first_name 
    FROM user_facts INNER JOIN users 
    ON user_facts.user_id = users.id;
  `;

  db.query(select_userInfo).then((result) => {
    let list = "";
    const dbResponse = result.rows;
    dbResponse.forEach((user) => {
      list += `<li><div class="container"><div class="card"><div class="front">${user.facts}</div><div class="back">${user.first_name}</div></div></div></li>`;
    });

    const html = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@500&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="./display.css">
        <title>Display</title>
      </head>
      <body>
        <h1>Fun Facts</h1>
        <p>Can you guess who said that? Hover over the fact to find out!</p>
        <a href="/">Return to Home Page</a>
        <ul>${list}</ul>
      </body>
    </html>`;

    response.send(html);
  });
}

module.exports = { displayFacts };
