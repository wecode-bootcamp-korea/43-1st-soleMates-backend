const { productService } = require("../services");
const { catchAsync } = require("../utils/error");

const productList = catchAsync(async (req, res) => {
  const { categoryId, size, color } = req.query;

  const list = await productService.productList(categoryId, size, color);

  return res.status(200).json({
    data: list,
  });
});

module.exports = {
  productList,
};
