const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/products');

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

router.get('/cart', productsController.getCart);

module.exports = router;
