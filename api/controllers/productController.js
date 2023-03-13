const { productService } = require("../services");
const { catchAsync } = require("../utils/error");

const productList = catchAsync(async (req, res) => {
  const { categoryId, size, color } = req.query;
  try {
    const list = await productService.productList(categoryId, size, color);
    res.status(200).json({
      data: list,
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
});

module.exports = {
  productList,
};
