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

const deleteCart = catchAsync(async (req, res) => {
  const userId = req.user;
  const { cartId } = req.query;

  if (!userId || !cartId) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }
  await cartService.deleteCart(userId, cartId);
  return res.status(204).send();
});

const updateCart = catchAsync(async (req, res) => {
  const userId = req.user;
  const { cartId, quantity, price } = req.body;

  if (!userId || !cartId || !quantity || !price) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }
  const cartData = await cartService.updateCart(
    userId,
    cartId,
    quantity,
    price
  );
  return res
    .status(201)
    .json({ message: "SUCCESSFULLY_UPDATE_CART", cartData });
});

const getCart = catchAsync(async (req, res) => {
  const userId = req.user;

  const cartData = await cartService.getCart(userId);
  return res.status(200).json({ cartData });
});

module.exports = {
  createCart,
  deleteCart,
  updateCart,
  getCart,
};
