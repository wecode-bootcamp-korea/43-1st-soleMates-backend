const { cartDao } = require("../models");

const createCart = async (userId, productId, quantity, price) => {
  return cartDao.createCart(userId, productId, quantity, price);
};

const deleteCart = async (userId, cartId) => {
  return await cartDao.deleteCart(userId, cartId);
};

module.exports = {
  createCart,
  deleteCart,
};
