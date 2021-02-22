
const jwt = require('jsonwebtoken');
const debug = require('debug')('jwtlog');
const fs = require('fs');

const decodedValidToken = (accessToken) => {
    try {
    return jwt.verify(accessToken, process.env.JWT_SECRET);
    }
    catch(ex) {
        return 'unauthorized';
    }
  }


module.exports = function auth(req, res, next) {
    const authorizationHeader = req.headers.authorization;
    if(!authorizationHeader) {
        return res.status(401).send({message: 'you are not authorize to make this call. Call again later :)'})
    } else {
        const decodedToken = (decodedValidToken(authorizationHeader.replace('Bearer ','')));
        debug('code debugging call:');
        debug(decodedToken);
        if(decodedToken === 'unauthorized') {
            return res.status(401).send({message: 'you are not authorize to make this call. Call again later :)'})
        } else {
            req.user = decodedToken.email;
            next();
        }
    }
}