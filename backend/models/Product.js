const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    barcode: {
        type: String,
        unique: true,
        required: true,
    },
    category: {
        type: String,
        enum: ['food', 'electronics', 'clothing', 'household', 'other'],
        required: true,
    },
    carbonFootprint: {
        type: Number, // Carbon footprint value in kg CO2e
        required: true,
    },
    manufacturer: {
        type: String,
    },
    countryOfOrigin: {
        type: String,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
