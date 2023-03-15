const { productDao } = require("../models");
const allProductList = async () => {
  return await productDao.allProductList();
};

const productList = async (categoryname, size, color) => {
  return productDao.productList(categoryname, size, color);
};

const getProductId = async (productId) => {
  return productDao.getProductId(productId);
};

module.exports = {
  allProductList,
  productList,
  getProductId,
};
