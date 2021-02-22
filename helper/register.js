const Joi = require('@hapi/joi');

async function validate(obj) {
    const schema = Joi.object({
        fname: Joi.string().required(),
        lname: Joi.string().required(),
        emailId: Joi.string().email().required(),
        password: Joi.string().required(),
        orgName: Joi.string().required(),
    });

    return schema.validate(obj);
}

module.exports.validate = validate;