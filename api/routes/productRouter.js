const express = require("express");
const { productController } = require("../controllers");

const router = express.Router();

router.get("/all", productController.getAllProductList);

router.get("", productController.getProductList);

router.get("/detail/:productId", productController.getProductDetailById);

module.exports = router;
