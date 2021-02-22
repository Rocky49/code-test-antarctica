const express = require("express");
const router = express.Router();
const { validate } = require('../helper/register');
const bcrypt = require('bcrypt');
const { save, findOne } = require('../service/employee');

router.post('/', async (req, res) => {
    try {
        let result = await validate(req.body);
        if(result.error) {
            return res.status(400).send({ error: result.error.details[0].message});
        }
        let data = await findOne(req.body.emailId);
        if(data.length > 0) {
            res.status(400).send({ error: 'User already registered.'});
        }
        req.body.password = await bcrypt.hash(req.body.password, 10);
        let response = await save(req.body);
        res.send({ message: "User registered."});
    } catch (ex) {
        return res.status(500).send(ex);
    }
});

module.exports = router;