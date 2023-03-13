const { productDao } = require("../models");

const productList = async (categoryId, size, color) => {
  return productDao.productList(categoryId, size, color);
};

module.exports = {
  productList,
};
