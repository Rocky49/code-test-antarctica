const winston = require('winston');
require('express-async-errors');

module.exports = function () { 
    winston.exceptions.handle(
        new winston.transports.File({
            filename: 'unhandledException.log'
        }));


    process.on('unhandledRejection', (ex) => {
        winston.error(ex.message);
        process.exit(1);
    })

    winston.add(new winston.transports.File({ filename: 'logfile.log' }));
}