/*
*   This is the file where all the address for @API calls are are wrote
*   although the end address of the API call will be in the specified routes
*   e.g. : '/' or '/:id'
*   @Author: Rocky
*/

const express = require('express');
/**logger and global error handler */
const logger = require('../middleware/logger');
const error = require('../middleware/error');
const cors = require('cors');
const register = require('../routes/register');
const employee = require('../routes/employee');
const auth = require('../routes/auth');

module.exports = function (app) {
    app.use(express.json({limit: '50mb'})); // it allows to read json data
    /* ************ Middleware Logger API ************** */
    app.use(logger);
    app.use(cors());
    /* ************ User API ************** */
    app.use('/api/register', register);
    app.use('/api/employee', employee);
    app.use('/api/auth', auth);
    /* ************ Middleware Global Error API ************** */
    app.use(error);
}