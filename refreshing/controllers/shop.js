const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
      docTitle: 'Shop',
    });
  });
};

exports.getProductDetails = (req, res, next) => {
  const { id } = req.params;
  Product.findById(id, (product) => {
    console.log(product);
    res.render('shop/product-details', {
      product: product,
      path: '/products',
      pageTitle: product.title,
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout',
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Order',
  });
};

exports.getCart = (req, res, next) => {
  Cart.getProductsFromCart((cart) => {
    Product.fetchAll((products) => {
      const prodsInCart = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cart.products.find((prod) => prod.id === product.id)) {
          prodsInCart.push({ productData: product, qty: cartProductData.qty });
        }
        console.log({ cartProductData });
      }

      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: prodsInCart,
      });
    });
  });
};

exports.postDeleteItemFromCart = (req, res, next) => {
  const { productId } = req.body;
  Product.findById(productId, (product) => {
    Cart.deleteProductFromCart(productId, product.price);
    res.redirect('/cart');
  });
};

exports.addToCart = (req, res, next) => {
  const { productId } = req.body;
  Product.findById(productId, (product) => {
    Cart.addProduct(productId, product.price);
  });
  res.redirect('/cart');
};
