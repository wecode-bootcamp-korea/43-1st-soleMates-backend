const express = require("express");

const { cartController } = require("../controllers");
const { checkToken } = require("../middlewares/auth");

const router = express.Router();

router.post("", checkToken, cartController.createCart);

router.delete("", checkToken, cartController.deleteCart);

module.exports = router;
