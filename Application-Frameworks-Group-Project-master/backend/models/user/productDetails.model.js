const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productDetails = new Schema({
    prodId: { type: Number, required: true},
    nickname: { type: String, required: true},
    comments: { type: String, required: true, minlength: 5 },
    ratings: {type: Number, required: true, minlength: 1}
}, {
    timestamps: true,
});

const ProductDetails = mongoose.model('ProductDetails', productDetails);

module.exports = ProductDetails;