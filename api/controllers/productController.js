const { productService } = require("../services");
const { catchAsync } = require("../utils/error");

const getAllProductList = catchAsync(async (req, res) => {
  const all = await productService.getAllProductList();

  return res.status(200).json({ data: all });
});

const getProductList = catchAsync(async (req, res) => {
  const { categoryname, size, color } = req.query;

  const list = await productService.getProductList(categoryname, size, color);

  return res.status(200).json({
    data: list,
  });
});

const getProductDetailById = catchAsync(async (req, res) => {
  const { productId } = req.params;

  const detail = await productService.getProductDetailById(productId);

  return res.status(200).json({
    data: detail,
  });
});

module.exports = {
  getAllProductList,
  getProductList,
  getProductDetailById,
};
