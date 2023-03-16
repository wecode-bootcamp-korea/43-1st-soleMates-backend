const { reviewDao } = require("../models");

const getReviewList = async (productId) => {
  return reviewDao.getReviewList(productId);
};

const createReview = async (userId, productId, comment, rating) => {
  const checkOrderId = await reviewDao.checkOrderId(userId, productId);

  if (!checkOrderId) {
    const error = new Error("Unauthorized");
    error.statuscode = 401;
    throw error;
  }

  return reviewDao.createReview(
    userId,
    productId,
    comment,
    rating,
    checkOrderId.id
  );
};

module.exports = {
  getReviewList,
  createReview,
};
