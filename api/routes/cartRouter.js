const express = require("express");

const { cartController } = require("../controllers");
const { checkToken } = require("../middlewares/auth");

const router = express.Router();

router.post("", checkToken, cartController.createCart);
router.get("", checkToken, cartController.getCart);

module.exports = router;
