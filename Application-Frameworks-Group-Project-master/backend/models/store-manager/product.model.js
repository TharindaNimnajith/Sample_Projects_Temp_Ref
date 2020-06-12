const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// creating a schema for products
const productSchema = new Schema({
    category: { type: String, required: true},
    prodId: { type: Number, required: true},
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number }
}, {
    timestamps: true
});

// creating a model for products
const Product = mongoose.model('Product', productSchema);

module.exports = Product;