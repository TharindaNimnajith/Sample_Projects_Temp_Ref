const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    userid: {
        type: Number,
        //required: true,
        default: -1
    },
    username: {
        type: String,
        //required: true
        default: ''
    },
    contact:{
        type: Number,
        //required: true
        default:-1
    },
    email:{
        type: String,
        //required: true
        default: ''
    },
    password:{
        type: String,
        //required: true
        default: ''
    }
    /*isDeleted: {
        type: Boolean,
        default: false
    }*/
},{
    timestamp:true,
});

userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

const userDetails = mongoose.model('userDetails', userSchema);

module.exports = userDetails;