const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let comment = new Schema({
    rates :{
        type :Number,
        required: true
    },
    comment :{
        type :String,
        required: true
    },
    // userId :{
    //     type :String,
    //     required: true
    // },
    userId :[{
        type :mongoose.Schema.Types.ObjectId,
        ref : "userdetails",
        required : true
    }],
    itemCode :[{
        type :mongoose.Schema.Types.ObjectId,
        ref : "Item",
        required : true
    }]
});

module.exports = mongoose.model('comment',comment);

