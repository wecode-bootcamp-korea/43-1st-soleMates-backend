const { productDao } = require("../models");
const ALLproductList = async () => {
  return await productDao.ALLproductList();
};

const productList = async (categoryname, size, color) => {
  return productDao.productList(categoryname, size, color);
};

module.exports = {
  ALLproductList,
  productList,
};
