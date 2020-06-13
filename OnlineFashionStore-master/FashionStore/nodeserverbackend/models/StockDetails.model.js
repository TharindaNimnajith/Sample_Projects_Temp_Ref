const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let stock = new Schema({
    supplier :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Supplier",
        required : true
    }],

    startDate :{
        type: Date,
        required: true
    },
    endDate :{
        type: Date,
        required: true
    },
    fullTotalPrice :{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Stock',stock);
