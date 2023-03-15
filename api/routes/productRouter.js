const express = require("express");
const { productController } = require("../controllers");

const router = express.Router();

router.get("/all", productController.allProductList);

router.get("", productController.productList);

module.exports = router;
