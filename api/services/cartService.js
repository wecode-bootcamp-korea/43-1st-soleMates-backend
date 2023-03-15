const { cartDao } = require("../models");

const createCart = async (userId, productId, quantity, price) => {
  return cartDao.createCart(userId, productId, quantity, price);
};

const updateCart = async (userId, cartId, quantity, price) => {
  return cartDao.updateCart(userId, cartId, quantity, price);
};

module.exports = {
  createCart,
  updateCart,
};
