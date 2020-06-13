const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let userdetails = new Schema({
    firstName :{
        type :String,
        required: true
    },
    lastName :{
        type :String,
        required: true
    },
    phoneNumber :{
        type: String,
        required: true
    },
    gender :{
        type :String,
        required: true
    },
    email :{
        type: String,
        required: true
    },
    password :{
        type :String,
        required: true
    },
    dob :{
        type :String,
        required: true
    },
    male: {
        type :Number,
        required: true
    },
    female: {
        type :Number,
        required: true
    },
    image :{
        type :Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('userdetails',userdetails);

