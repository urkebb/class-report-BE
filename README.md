# Prerequisites

Make sure you have installed Node which you can find [here](https://nodejs.org/en/download/), this project using version 14.15.3,
After that just run `npm install` to install all the packages.

## Description

- Backend part uses NodeJS and Express.
- CSV file, that is given for this project, is imported into a MongoDB so we can write queries and retrieve information from a real database.
- Database is deployed on MongoDB Atlas so you have access from anywhere, and no additional steps are required.
- Here we have main folders:
  1. controllers - They care about the logic, every controller gets the request, retrieve information from a database and sends answer back.
  2. middlewares - Here we only needed a middleware for a global error handling.
  3. models - Here we define the structure of the document
  4. routes - Here we define routes and every route calls specific controller
- Also eslint is added here, and his duty is to keep code uniform and clean, you don't have to execute any command, it will warn you when you are writing code.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
