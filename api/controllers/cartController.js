const { cartService } = require("../services");
const { catchAsync } = require("../utils/error");

const createCart = catchAsync(async (req, res) => {
  const userId = req.user;
  const { productId, quantity, price } = req.body;

  if (!userId || !productId || !quantity || !price) {
    const error = new Error("KEY_ERROR");
    error.statuscode = 400;
    throw error;
  }
  await cartService.createCart(userId, productId, quantity, price);
  return res.status(201).json({ message: `SUCCESSFULLY_CREATE_CART` });
});

const getCart = catchAsync(async (req, res) => {
  const userId = req.user;

  const cartData = await cartService.getCart(userId);
  return res.status(200).json({ cartData });
});

module.exports = {
  createCart,
  getCart,
};
