const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let stockPrice = new Schema({
    stockDetails :[{
        type :mongoose.Schema.Types.ObjectId,
        ref : "Stock",
        required : true
    }],
    itemColorId :[{
        type :mongoose.Schema.Types.ObjectId,
        ref : "itemcolors",
        required : true
    }],
    buyingPrice :{
        type :Number,
        required: true
    },
    sellingPrice :{
        type :Number,
        required: true
    },
    quantity :{
        type: Number,
        required: true
    },
    discount :{
        type: Number,
        required: true
    },
    totalPrice :{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('StockPrice',stockPrice);
