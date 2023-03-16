const { reviewService } = require("../services");
const { catchAsync } = require("../utils/error");

const reviewList = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const list = await reviewService.reviewList(productId);

  return res.status(200).json({ data: list });
});

const createReview = catchAsync(async (req, res) => {
  const userId = req.user;
  const { productId, comment, rating } = req.body;

  if (!userId || !productId || !comment || !rating) {
    const error = new Error("KEY ERROR");
    error.statuscode = 400;
    throw error;
  }
  await reviewService.createReview(userId, productId, comment, rating);
  return res.status(201).json({ message: `SUCCESSFULLY_CREATE_REVIEW` });
});

module.exports = {
  reviewList,
  createReview,
};
