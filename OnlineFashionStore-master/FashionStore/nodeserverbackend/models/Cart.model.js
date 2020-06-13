const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let cart = new Schema({
    cartName :{
        type :String,
        required: true
    },
    cartPrice :{
        type :Number,
        required: true
    },
    quantity:{
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
    image :{
        type :Buffer,
        contentType: String

    },
    itemId:{
        type: String,
        required: true
    },
    itemDiscount:{
        type: Number,
        required: true
    },
    itemSize:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Cart',cart);

