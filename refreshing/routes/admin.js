const express = require('express');
const router = express.Router();
const path = require('path');

const adminController = require('../controllers/admin');

router.get('/add-product', adminController.addProduct);

router.post('/add-product', adminController.postAddProduct);

router.get('/cart', adminController.getCart);

router.get('/products', adminController.getProducts);

module.exports = router;
