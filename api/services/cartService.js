const { cartDao } = require("../models");

const createCart = async (userId, productId, quantity, price) => {
  return cartDao.createCart(userId, productId, quantity, price);
};

const deleteCart = async (userId, cartId) => {
  return await cartDao.deleteCart(userId, cartId);
};

const updateCart = async (userId, cartId, quantity, price) => {
  return cartDao.updateCart(userId, cartId, quantity, price);
};

const getCart = async (userId) => {
  const cart = await cartDao.getCart(userId);
  return cart;
};

module.exports = {
  createCart,
  deleteCart,
  updateCart,
  getCart,
};
