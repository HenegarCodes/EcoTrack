const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');

const createProduct = asyncHandler(async (req, res) => {
    const { name, barcode, category, carbonFootprint, manufacturer, countryOfOrigin } = req.body;

    const product = new Product({
        name,
        barcode,
        category,
        carbonFootprint,
        manufacturer,
        countryOfOrigin,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).throw(new Error('Product not found'));
    }
});

module.exports = {
    createProduct,
    getProducts,
    getProductById,
};
