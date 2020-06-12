const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

const User = require('../../models/User');

//@route POST
//@desc check and verify a JWT token and returns the details of the user
//@access public
router.post('/getauthuser', (req, res) => {

    const token = req.headers.jwt_token;

    try {
        const decoded = jwt.verify(token, config.get('jwt_secret_key'));        
        User.findOne({
            email : decoded.email
        }).then(user => {
            if (!user) {
                return res.status(400).send({
                    message: 'User does not exsists'
                });
            }else{               
                return res.status(200).send({
                    user : user
                })
            }
        })
    } catch (err) {
        return res.status(401).send({
            message: 'invalid token'
        });
    }


    
});


//@route POST
//@desc get jwt token for a paricular login
//@access public
router.post('/getauth', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        const u = user;
        if (!user) {
            return res.status(400).send({
                message: 'User does not exsists'
            });
        }

        bcrypt.compare(req.body.password, user.password)
            .then(isMatch => {
                if (!isMatch) {
                    return res.status(400).send({
                        message: 'Invalid Credentials'
                    });
                }

                jwt.sign({
                    email: u.email,
                    userId: u.userId,
                    userType: u.userType,
                    id: u._id
                }, config.get('jwt_secret_key'), {
                        expiresIn: 3600
                    }, (err, token) => {

                        if (err) throw err
                        
                        return res.status(200).send({
                            data: true,
                            message: 'valid user',
                            token: token,
                            userId:u.userId,
                            userType:u.userType,
                            confirm : u.confirmed
                        })
                    });
            })
    })
});

module.exports = router;
