const { reviewDao } = require("../models");
const { catchAsync } = require("../utils/error");

const reviewList = async (productId) => {
  return reviewDao.reviewList(productId);
};

const createReview = catchAsync(async (userId, productId, comment, rating) => {
  const checkOrderId = reviewDao.checkOrderId(userId, productId);

  if (!checkOrderId) {
    const error = new Error("Unauthorized");
    error.statuscode = 401;
    throw error;
  } else {
    return reviewDao.createReview(userId, productId, comment, rating);
  }
});

module.exports = {
  reviewList,
  createReview,
};
