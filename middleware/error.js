const winston = require('winston');
const logger = require('../helper/logger');


module.exports = function (err, req, res, next) {

    winston.error(err.message);
    logger.error(err.message);
    // error
    //warn
    //info
    //verbose
    //debug
    //silly
    // log the exception
    res.status(500).send({msg: 'something went wrong'});
}