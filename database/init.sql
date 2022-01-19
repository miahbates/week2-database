BEGIN;


DROP TABLE IF EXISTS users, user_facts CASCADE;

-- Create tables and define their columns

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  cohort VARCHAR(6)

);

CREATE TABLE user_facts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  facts TEXT
);

-- Insert some example data for us to test with

INSERT INTO users (first_name, cohort) VALUES
  ('Oli', 'FAC23'),
  ('Milly', 'FAC23'),
  ('Miah', 'FAC23'),
  ('Adam', 'FAC23'),
  ('Anna', 'FAC22')
;

INSERT INTO user_facts (facts, user_id) VALUES
  ('I am a secret millionaire', 1),
  ('I know kung fu', 2),
  ('I have never seen Friends', 3),
  ('I cannot ride a bike', 4),
  ('I still have my xmas tree up!', 5

;


COMMIT;