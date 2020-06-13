const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let order = new Schema({
    orderId:{
        type: Number,
        required: true
    },
    userId :{
        type :String,
        required: true
    },
    itemTotal:{
        type: Number,
        required: true
    },
    itemName:{
        type: String,
        required: true
    },
    itemId:{
        type: String,
        required: true
    },
    oderTime:{
        type: String,
        required: true
    },
    itemPrice:{
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Order',order);

