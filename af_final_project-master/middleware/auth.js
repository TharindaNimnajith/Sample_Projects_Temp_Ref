const config = require('config');
const jwt = require('jsonwebtoken');


/*
 * Authenticate user. Having a valid token is enough.
 * Does not check for user level
 */ 
function auth(req,res,next){


    const token = req.headers.jwt_token;
    if(!token){
        res.status(401).json({
            message : 'No token found auth denied'
        });
    }
    try {
        res.user = jwt.verify(token, config.get('jwt_secret_key'));
        next();
    } catch (error) {
      
        res.status(400).json({
            message : 'Token is not valid'
        })
    }
}

module.exports = auth;
