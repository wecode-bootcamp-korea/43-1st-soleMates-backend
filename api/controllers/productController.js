const { productService } = require("../services");
const { catchAsync } = require("../utils/error");

const ALLproductList = catchAsync(async (req, res) => {
  const all = await productService.ALLproductList();

  return res.status(200).json({ data: all });
});

const productList = catchAsync(async (req, res) => {
  const { categoryname, size, color } = req.query;

  const list = await productService.productList(categoryname, size, color);

  return res.status(200).json({
    data: list,
  });
});

module.exports = {
  ALLproductList,
  productList,
};
