const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let commentUser = new Schema({
    userName :{
        type :String,
        required: true
    },

});

module.exports = mongoose.model('commentUser',commentUser);

