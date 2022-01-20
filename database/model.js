// bunch function with SWL how to send info to the db
const db = require("./connection.js");
// const sendFacts = require("../routes/home");

function sendFacts(firstName, cohort, facts) {
  // *SQL*
  const query = "INSERT INTO users(first_name, cohort) VALUES($1, $2)";
  const query2 = "INSERT INTO user_facts(facts) VALUES($1)";
  const values = [firstName, cohort];
  const values2 = [facts];

  db.query(query, values, (err, res) => {
    console.log(err, res);
  });

  db.query(query2, values2, (err, res) => {
    console.log(err, res);
  });
}

// return db.query("SELECT * FROM users").then((result) => result.rows);

// enter the input name and cohort into the users table.

// enter fact into user_facts table

// stack overflow to enter multiple things.
// BEGIN;
// INSERT INTO users (username, password)
//   VALUES('test', 'test');
// INSERT INTO profiles (userid, bio, homepage)
//   VALUES(LAST_INSERT_ID(),'Hello world!', 'http://www.stackoverflow.com');
// COMMIT;

module.exports = { sendFacts };
