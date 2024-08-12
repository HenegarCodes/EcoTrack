const express = require('express');
const router = express.Router();
const { createProduct, getProducts, getProductById } = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

console.log("protect:", protect); // Should log a function, not undefined
console.log("admin:", admin);     // Should log a function, not undefined

// Routes for products
router.route('/')
    .post(createProduct) // Only admin can create products
    .get(getProducts); // Anyone can get the list of products

router.route('/:id')
    .get(getProductById); // Anyone can get a product by ID

module.exports = router;
