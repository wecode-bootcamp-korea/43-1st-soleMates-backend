const { cartDao } = require("../models");

const createCart = async (userId, productId, quantity, price) => {
  await cartDao.createCart(userId, productId, quantity, price);
};

module.exports = {
  createCart,
};
