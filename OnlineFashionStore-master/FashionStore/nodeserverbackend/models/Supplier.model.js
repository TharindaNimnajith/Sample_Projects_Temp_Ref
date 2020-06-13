const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let supplier = new Schema({
    companyName :{
        type :String,
        required: true
    },
    companyWebsite :{
        type :String,
        required: true
    },
    description :{
        type: String,
        required: true
    },
    firstName :{
        type :String,
        required: true
    },
    lastName :{
        type: String,
        required: true
    },
    companyNumber :{
        type :String,
        required: true
    },
    mobileNumber :{
        type: String,
        required: true
    },
    email :{
        type :String,
        required: true
    },
    fax :{
        type :String,
        required: true
    },
    address1 :{
        type: String,
        required: true
    },
    address2 :{
        type :String,
        required: true
    },
    city :{
        type: String,
        required: true
    },
    country :{
        type :String,
        required: true
    },
    state :{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Supplier',supplier);

