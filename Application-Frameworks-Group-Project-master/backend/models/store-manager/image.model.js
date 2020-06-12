const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// creating a schema for images
const imageSchema = new Schema({
    img: { data: Buffer, contentType: String},
    imgId: { type: Number, required: true, unique: true }
}, {
    timestamps: true
});

// creating a model for images
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;