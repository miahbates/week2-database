# [Founders and Coders](https://www.foundersandcoders.com/) (appenticeship) 

## Who said that❓

*Co-authored with [Adam](https://github.com/adam8-9), [Milly](https://github.com/millipede-cpu) and [Oli](https://github.com/duckRabbitPy).*

Our idea is to create a database app where people can post their own random questions or facts about themselves to the home page. The names of who posted a fact will be able to be revealed on another page.

_[Deployed version here!](https://whosaidthat4.herokuapp.com/)_

## Team members
- Adam - Scrum Facilitator.
- Miah - DevOps.
- Oli - Quality Assurance.
- Milly - User Experience.

## How to install 🛠️
- Git clone `https://github.com/miahbates/microblog`
- Run command `npm install` in terminal.
- Start sever run command `npm run dev`.
- Run cypress testing run command `npm run test`.
- Or can access locally on _[localhost:3333](http://localhost:3333/)_

## User Stories :busts_in_silhouette:
### Core
- [x] As a user, I want to: submit information to your site for anyone to see
- [x] As a user, I want to: come back to your site later and see what I posted is still there
- [x] A form for users to submit data
- [x] A page showing all the data
- [x] Semantic form elements with correctly associated labels
- [x] A Postgres database hosted on Heroku
- [x] A schema describing your database in your README
- [x] Tests for server routes and database access
- [x] Not process user input as SQL commands
- [x] Hidden environment variables (i.e. not on GitHub)
### Stretch :seedling:
- [ ] A way to view filtered/sorted data, instead of just all of it
- [ ] GitHub Actions CI setup to run your tests when you push

## Features: 🌟
* Able to add a fact.
* Able to view other members facts and reveal who said them.
* Easily naviagte between pages.
* Deployed on heroku.

## Learning 🌱
* We can design and document a database schema.
- We can normalize our data to reduce duplication.
- We can create a relational database.
- We can create tables within the database.
- We can link a record in one table to a record in another.
- We can link a record in one table to multiple records in another.
- We can link multiple records in one table to multiple records in another.
- We can deploy a PSQL database locally on our own machine.
- We can deploy a PSQL database to a live server.   
- We can set up separate environments for production and testing.
- We can use PSQL to manage Postgres from the command line.
- We can create, read update and delete from our database using SQL queries.
- We can sort and filter data using SQL queries.
- We can use joins to access related data in different tables.
- We can use query parameters to avoid SQL-injection vulnerabilities.
- We can handle database errors on our server without crashing.
- We can follow a consistent pattern for naming our folders, files and variables.

## Improvements and future ideas ✨
- Add validation to form to allow only number input for cohort.
- When submiting fact, redirect to page wit all facts.
- Improve css hover to ensure only 1 card is revealed.
- Delete facts.
