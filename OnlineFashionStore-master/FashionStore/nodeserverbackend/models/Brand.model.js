const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let brand = new Schema({
    brandCode :{
        type :String,
        required: true
    },
    brandName :{
        type :String,
        required: true
    },
    sellingDiscount :{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Brand',brand);
