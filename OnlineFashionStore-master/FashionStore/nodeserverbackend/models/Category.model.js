const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let category = new Schema({
    categoryName :{
        type :String,
        required: true
    },
    categoryCode :{
        type :String,
        required: true
    }
});

module.exports = mongoose.model('Category',category);
