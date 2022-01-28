const Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productsCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      docTitle: 'Shop',
      hasProducts: products.length > 0,
      activeShop: true,
      productsCss: true,
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Cart',
    path: '/cart',
    docTitle: 'Cart',
  });
};
