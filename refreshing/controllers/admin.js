const Product = require('../models/product');

exports.addProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect('/products');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!Boolean(editMode)) {
    return res.redirect('/');
  }

  const { id } = req.params;
  Product.findById(id, (product) => {
    if (!product) {
      console.log('product was not found');
      return res.redirect('/');
    }

    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product,
    });
  });
};

exports.postEditProducts = (req, res, next) => {
  const { title, imageUrl, price, description, productId } = req.body;
  const updatedProduct = new Product(
    productId,
    title,
    imageUrl,
    description,
    price
  );
  console.log({ updatedProduct });
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.postDeleteProduct = (req, res, next) => {
  const { productId } = req.body;
  console.log('to delete', productId);
  Product.deleteProduct(productId, () => {
    res.redirect('/admin/products');
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/admin/cart',
    pageTitle: 'Your Cart',
    docTitle: 'Carteeeee',
  });
};
