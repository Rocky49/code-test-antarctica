const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');

function generateToken(email) {
    return jwt.sign(email, process.env.JWT_SECRET);
}

function validate(obj) {
    const schema = Joi.object({
        login: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    return schema.validate(obj);
}

module.exports.generateToken = generateToken;
module.exports.validate = validate;