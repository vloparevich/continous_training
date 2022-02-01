const { timeStamp, Console } = require('console');
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      console.log('THIS ID', this.id);
      if (this.id) {
        const existingProductIndex = products.findIndex(
          (prod) => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    });
  }

  static deleteProduct(id) {
    getProductsFromFile((products) => {
      if (id) {
        const existingProductIndex = products.findIndex(
          (prod) => prod.id === id
        );
        const updatedProds = [...products];
        updatedProds.splice(existingProductIndex, 1);
        fs.writeFile(p, JSON.stringify(updatedProds), (err) => {
          if (!err) {
          }
        });
      }
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => {
        console.log(typeof p.id, typeof id);
        console.log(p.id, id);
        if (p.id === id) {
          console.log('returning');
          return p;
        }
      });
      cb(product);
    });
  }
};
