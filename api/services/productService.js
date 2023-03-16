const { productDao } = require("../models");
const getAllProductList = async () => {
  return await productDao.getAllProductList();
};

const getProductList = async (categoryname, size, color) => {
  return productDao.getProductList(categoryname, size, color);
};

const getProductDetailById = async (productId) => {
  return productDao.getProductDetailById(productId);
};

module.exports = {
  getAllProductList,
  getProductList,
  getProductDetailById,
};
