const express = require("express");
const { reviewController } = require("../controllers");
const { checkToken } = require("../middlewares/auth");

const router = express.Router();

router.get("/product/:productId", reviewController.getReviewList);
router.post("", checkToken, reviewController.createReview);

module.exports = router;
