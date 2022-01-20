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
      list += `<li><div class="card"><span class="toHide">${user.first_name}</span><span>${user.facts}</span></div></li>`;
    });

    const html = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Display</title>
      </head>
      <body>
        <h1>Cohort facts</h1>
        <ul>${list}</ul>
      </body>
      <script>
      const hideItems = document.querySelectorAll(".toHide");

      hideItems.forEach((item) =>
        item.addEventListener("click", (event) => {
          event.target.style.display = "none";
        })
      );
      
      </script>
      </html>`;

    response.send(html);
  });
}

module.exports = { displayFacts };
