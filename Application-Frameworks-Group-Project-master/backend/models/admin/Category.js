const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    categoryname: {
        type: String,
        default: ''
    }
});

const categoryDetails = mongoose.model('categoryDetails', CategorySchema);

module.exports = categoryDetails;