const router = require('express').Router();
let userDetail = require('../../models/admin/userDetails.models');
let UserSession = require('../../models/admin/UserSession');

const nodemailer = require('nodemailer');

/**
 * In here
 * getting all store manager details
 * */
router.route('/').get((req, res) => {
    userDetail.find()
        .then(userDetails => res.json(userDetails))
        .catch(err => res.status(400).json('Error: '+err));
});

/**
 * In here
 * get all store manager details
 * according to a relevant store manager id
 * */
router.route('/:id').get((req, res) => {
    userDetail.findById(req.params.id)
        .then(userDetails => res.json(userDetails))
        .catch(err => res.status(400).json('Error: '+err));
});


/**
 * In here
 * adding new store manager
 * checking the user id and email when adding a new store manager
 * if above two parameters have used previously
 * error message is shown
 * store manager will not add
 * if above two parameters have not used previously
 * store manager will be added successfully
 * when creating store manager account
 * An email will be sent automatically to the relevant store manager
 * */
router.route('/add').post((req, res) => {

    const userid = Number(req.body.userid);
    const username = req.body.username;
    const contact = Number(req.body.contact);
    let email = req.body.email;
    const password = req.body.password;

    if (!userid){
        return res.send({
            success: false,
            message: 'User ID can not be blank.'
        });
    }
    if (!username){
        return res.send({
            success: false,
            message: 'User Name can not be blank.'
        });
    }
    if (!email){
        return res.send({
            success: false,
            message: 'Email can not be blank.'
        });
    }
    if (!contact){
        return res.send({
            success: false,
            message: 'Contact Number can not be blank.'
        });
    }
    if (!password){
        return res.send({
            success: false,
            message: 'Password can not be blank.'
        });
    }



    email = email.toLowerCase();

    userDetail.find({
        email: email
    },(err, previousUsers) =>{
        if(err){
            return res.send({
                success: false,
                message: 'Error: Server error'
            });

        }
        else if(previousUsers.length > 0){

            console.log('account exist');
            return res.send({
                success: false,
                message: 'Account already exist.'
            });
        }
        else{
            userDetail.find({
                userid: userid
            },(err, previousID) => {
                if(err){
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                else if(previousID.length > 0){
                    console.log('account exist');
                    return res.send({
                        success: false,
                        message: 'User ID already exist.'
                    });
                }
                else{
                    const newUserDetails = new userDetail({
                        userid,
                        username,
                        contact,
                        email,
                        password,
                    });
                    newUserDetails.save((err, user) => {
                        let transporter = nodemailer.createTransport({
                            host: 'smtp.gmail.com',
                            port: 587,
                            secure: false,
                            auth: {
                                user: 'myc8783@gmail.com',
                                pass: '#company1#'
                            }
                        });
                        let mailOptions = {
                            to: req.body.email,
                            subject: 'Your fashion store login password',
                            text: 'login password: '+req.body.password
                        };
                        // send mail with defined transport object
                        transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                return console.log(error);
                            }
                            console.log("ggggggg");
                        });
                        if(err){
                            return res.send({
                                success: false,
                                message: 'Error: Server error'
                            });
                        }
                        return res.send({
                            success: true,
                            message: 'new user added.'
                        });
                    });
                }
            });

        }
    });
});




/**
 * In here
 * store manager details are updated
 * store manager details are updated according to the id of the store manager
 * if email address is updated to a new one
 * checking whether the email is added previously
 * if it is not added then updating store manager
 * if it is added previously then not updating store manager and showing an error message
 * */
router.route('/update').put((req, res) => {

    const userid = Number(req.body.userid);
    const username = req.body.username;
    const contact = Number(req.body.contact);
    let email = req.body.email;
    const password = req.body.password;

    if (!userid){
        return res.send({
            success: false,
            message: 'User ID can not be blank.'
        });
    }
    if (!username){
        return res.send({
            success: false,
            message: 'User Name can not be blank.'
        });
    }
    if (!email){
        return res.send({
            success: false,
            message: 'Email can not be blank.'
        });
    }
    if (!contact){
        return res.send({
            success: false,
            message: 'Contact Number can not be blank.'
        });
    }
    if (!password){
        return res.send({
            success: false,
            message: 'Password can not be blank.'
        });
    }

    console.log('here');

    userDetail.find({
        userid: userid
    },(err, updateUsers) =>{

        if(err){
            console.log('amanda');
            return res.send({
                success: false,
                message: 'Error: Server error'
            });

        }
        else if(updateUsers.length === 0){
            return res.send({
                success: false,
                message: 'User not found.'
            });

        }
        email = email.toLowerCase();

        const updateUser = updateUsers[0];

        userDetail.find({
            email: email,
        },(err, previousUsers) =>{
            console.log(userid);
            if(err){
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });

            }
            else if (previousUsers.length === 0){
                updateUser.userid = userid;
                updateUser.username = username;
                updateUser.contact = contact;
                updateUser.email = email;
                updateUser.password = password;

                console.log(updateUser.username);

                updateUser.save((err, user) => {
                    if(err){
                        return res.send({
                            success: false,
                            message: 'Error: Server error'
                        });
                    }
                    return res.send({
                        success: true,
                        message: 'User updated.'
                    });
                })
            }
            else if (!(previousUsers[0].userid === userid)){
                if(previousUsers.length > 0){
                    console.log('account exist');
                    return res.send({
                        success: false,
                        message: 'Account already exist.'
                    });

                }
            }
            else{
                updateUser.userid = userid;
                updateUser.username = username;
                updateUser.contact = contact;
                updateUser.email = email;
                updateUser.password = password;

                updateUser.save((err, user) => {
                    if(err){
                        return res.send({
                            success: false,
                            message: 'Error: Server error'
                        });
                    }
                    return res.send({
                        success: true,
                        message: 'User updated.'
                    });
                })
            }

        });
    });

});

/**
 * In here
 * deleting a store manager according to a relevant id
 * */
router.route('/delete').post((req, res) => {

    const userid = Number(req.body.userid);

    if (!userid){
        return res.send({
            success: false,
            message: 'User ID can not be blank.'
        });
    }

    console.log('here');

    userDetail.find({
        userid: userid
    },(err, deleteUsers) =>{
        if(err){

            return res.send({
                success: false,
                message: 'Error: Server error'
            });

        }
        else if(deleteUsers.length === 0){
            return res.send({
                success: false,
                message: 'User not found.'
            });

        }
        else{
            const id = deleteUsers[0]._id;
            userDetail.findByIdAndDelete(id)
                .then(() => {
                    return res.send({
                        success: true,
                        message: 'User deleted.'
                    });
                })
                .catch(err => res.status(400).json('Error: ' + err));

        }

    });

});

/**
 * In here
 * sign in store manager to the site
 * when sign in
 * getting the email and password of the store manager
 * checking the given email and password
 * if they are not valid
 * display an error message
 * if they are valid
 * successfully sign in the store manager
 * name of the store manager, time and date that store manager has logged in to the system are stored in data base
 * */
router.route('/signin').post((req, res) => {

    let email = req.body.email;
    const password = req.body.password;

    if (!email){
        return res.send({
            success: false,
            message: 'Email can not be blank.'
        });
    }
    if (!password){
        return res.send({
            success: false,
            message: 'Password can not be blank.'
        });
    }

    email = email.toLowerCase();
    userDetail.find({
        email: email
    },(err, users) => {
        if (err){
            console.log('err 2:', err);
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        if (users.length !== 1){
            return res.send({
                success: false,
                message: 'Invalid User Email'
            });
        }

        const user = users[0];

        console.log(user.password);
        console.log(password);

        if (!(user.password === password)){
            return res.send({
                success: false,
                message: 'Invalid password'
            });
        }

        const userSession = new UserSession();
        userSession.username = user.username;

        userSession.save((err, doc) => {
            console.log(userSession.username);
            if (err){
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            return res.send({
                success: true,
                message: 'Valid sign in',

            });
        });
    });

});

/**
 * In here
 * admin logged in to the system
 * if the username and password respectively equal to the admin and admin123
 * successfully logged into the site
 * if the given username and password is not equal to the above mentioned values
 * display an error message and not logged into the site
 * */
router.route('/admin').post((req, res) => {

    const name = req.body.name;
    const password = req.body.password;

    console.log("dddd");

    if (!name){
        return res.send({
            success: false,
            message: 'UserName can not be blank.'
        });
    }
    if (!password){
        return res.send({
            success: false,
            message: 'Password can not be blank.'
        });
    }

    const username = "admin"
    const pass = "admin123"
    if (name === username && password === pass){
        return res.send({
            success: true,
            message: 'Login successful.'
        });
    }
    else{
        return res.send({
            success: false,
            message: 'username or password is un matching.'
        });
    }

});


module.exports = router;