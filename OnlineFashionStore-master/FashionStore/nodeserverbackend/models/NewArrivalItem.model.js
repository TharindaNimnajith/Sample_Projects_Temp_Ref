const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let newArraivalItem = new Schema({

    itemCode :[{
        type :mongoose.Schema.Types.ObjectId,
        ref : "Item",
        required : true
    }]
});

module.exports = mongoose.model('NewArraivalItem',newArraivalItem);
