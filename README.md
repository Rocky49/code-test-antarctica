# Introduction 
This is my code test project for Antarctica.

# Getting Started
deployed on aws instance
1. download this project and do an *npm i && node index.js* or nodemon if you have it installed globally.
2.	Node version: 12.18.* (it is packed with npm)
4.	Framework used: Express
5.  Database: MS SQL Server 2019 ( I've used mssql npm package instead of sequelize, **reason**: I love db drivers that gives the flexibilty to create custom query, I know ORM is the standard but I think this gives use more control on our data and also we can refactor it to make it part of the external layer that follows Onion Architecture *https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html* ).

import aws_code_test.postman_collection.json to test the endpoint

**Note**: If you face issue while *npm i* with bcrypt do this *npm install --save bcryptjs && npm uninstall --save bcrypt*

# sortBy and sortType
sortType: [1, 0] , sortBy: [fname, lname, orgName, empId, emailId]

# folder structure

1. config<br/>
     |-config-dev.js<br/>
1. helper<br/>
     |-auth.js<br/>
     |-logger.js<br/>
     |-register.js<br/>
middleware<br/>
     |-auth.js<br/>
     |-error.js(works when try catch is not defined)<br/>
     |-logger.js(logs route on dev and add other default headers)<br/>
routes<br/>
     |-auth.js (login)<br/>
     |-employee.js (user list)<br/>
     |-register.js<br/>
service<br/>
     |-employee.js<br/>
startup<br/>
     |-routes.js<br/>
     |-logging.js<br/>
     |-config.js<br/>
.env (all const value like port, JWT_secret)<br/>
.gitignore<br/>
index.js(entry point)<br/>