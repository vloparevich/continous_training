const express = require('express');
const router = express.Router();
const path = require('path');

const adminController = require('../controllers/admin');

router.get('/add-product', adminController.addProduct);

router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:id', adminController.getEditProduct);

router.get('/cart', adminController.getCart);

router.get('/products', adminController.getProducts);

router.post('/edit-product', adminController.postEditProducts);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
