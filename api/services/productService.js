const { productDao } = require("../models");
const allProductList = async () => {
  return await productDao.allProductList();
};

const productList = async (categoryname, size, color) => {
  return productDao.productList(categoryname, size, color);
};

module.exports = {
  allProductList,
  productList,
};
