const { reviewDao } = require("../models");

const reviewList = async (productId) => {
  return reviewDao.reviewList(productId);
};

const createReview = async (userId, productId, comment, rating) => {
  return reviewDao.createReview(userId, productId, comment, rating);
};

module.exports = {
  reviewList,
  createReview,
};
