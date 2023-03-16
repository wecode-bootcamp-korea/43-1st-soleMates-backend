const { cartDao } = require("../models");

const createCart = async (userId, productId, quantity, price) => {
  return cartDao.createCart(userId, productId, quantity, price);
};

const getCart = async (userId) => {
  const cart = await cartDao.getCart(userId);
  return cart;
};

module.exports = {
  createCart,
  getCart,
};
