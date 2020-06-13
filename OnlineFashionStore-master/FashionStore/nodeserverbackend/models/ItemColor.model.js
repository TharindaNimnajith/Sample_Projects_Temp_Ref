const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let itemcolors = new Schema({
    itemCode :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Item",
        required : true
    }],
    itemColorId :{
        type :String
    },
    itemSize :{
        type :String
    },
    itemColor :{
        type :String
    },
    // image :{
    //     type :String,
    //     data :Buffer
    // },
    image :{
        type :Buffer,
        contentType: String

    },
    quantity :{
        type :Number
    },
    price :{
        type :Number
    }


});

module.exports = mongoose.model('itemcolors',itemcolors);
