const router = require('express').Router();
const path = require('path');
const productsController = require('../controllers/products');

router.get('/', productsController.getProducts);

module.exports = router;
