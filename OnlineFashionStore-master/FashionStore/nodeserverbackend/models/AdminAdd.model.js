const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let adminDetails = new Schema({
    Name :{
        type :String,
        required: true
    },
    Email :{
        type :String,
        required: true
    },
    position :{
        type: String,
        required: true
    },
    password :{
        type :String,
        required: true
    }
});

module.exports = mongoose.model('AdminDetail',adminDetails);

