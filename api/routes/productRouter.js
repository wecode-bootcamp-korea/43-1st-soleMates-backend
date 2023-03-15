const express = require("express");
const { productController } = require("../controllers");

const router = express.Router();

router.get("/all", productController.allProductList);

router.get("", productController.productList);

router.get("/detail/:productId", productController.getProductId);

module.exports = router;
