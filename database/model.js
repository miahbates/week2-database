// bunch function with SWL how to send info to the db
const db = require("./connection.js");
// const sendFacts = require("../routes/home");

function sendFacts(firstName, cohort, facts) {
  // *SQL*
  const query1 =
    "INSERT INTO users(first_name, cohort) VALUES($1, $2) RETURNING id";

  const query2 = "INSERT INTO user_facts(user_id, facts) VALUES($1, $2)";

  const userInfo = [firstName, cohort];

  db.query(query1, userInfo).then((queryRes) => {
    const id = queryRes.rows[0].id;
    const userFact = [id, facts];
    db.query(query2, userFact);
  });
}

module.exports = { sendFacts };
