const express = require("express");
const userRouter = require("./userRouter");
const cartRouter = require("./cartRouter");

const router = express.Router();

const userRouter = require("./userRouter");
const productRouter = require("./productRouter");

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/carts", cartRouter);

module.exports = router;
