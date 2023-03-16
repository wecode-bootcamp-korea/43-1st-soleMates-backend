const express = require("express");
const userRouter = require("./userRouter");
const cartRouter = require("./cartRouter");
const productRouter = require("./productRouter");
const reviewRouter = require("./reviewRouter");

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/carts", cartRouter);
router.use("/reviews", reviewRouter);

module.exports = router;
