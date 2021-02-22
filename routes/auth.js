const express = require("express");
const router = express.Router();
const { validate, generateToken } = require('../helper/auth');
const bcrypt = require('bcrypt');
const { findOne } = require('../service/employee');

router.post('/', async (req, res) => {
    try {
        let result = await validate(req.body);
        if(result.error) {
            return res.status(400).send({ error: result.error.details[0].message});
        }

        let data = await findOne(req.body.login).catch( (e) => 
            res.status(500).send(e)
        );

        if(data.length > 0) {
            console.log(data);
            let isValid = await bcrypt.compare(req.body.password, data[0].password);
            if(isValid) {
                let auth = generateToken(req.body.login);
                res.send({ authToken: auth });
            } else {
                res.status(403).send({ message: 'Login failed...!'});
            }
        }
    } catch (ex) {
        return res.status(500).send(ex);
    }
});

module.exports = router;