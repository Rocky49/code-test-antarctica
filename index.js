// import statements
const express = require('express');
const app = express();
const winston = require('winston');
require('dotenv').config()

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/config')();

// // for devlopment.
// const port = process.env.PORT || 4000;

// for production
const port = process.env.PORT || 9095;
// winston.info(`Port ${port}`);
app.listen(port, () => {
    winston.info(`Listening on port ${port}`);
    console.log(`listening on port ${port}`);
});