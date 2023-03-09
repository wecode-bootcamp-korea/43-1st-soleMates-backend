const { userService } = require("../services");
const { catchAsync } = require("../utils/error");

const signUp = catchAsync(async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;

    throw error;
  }

  await userService.signUp(email, password, name);

  return res.status(201).json({ message: "SUCCESS_SIGNUP" });
});

module.exports = {
  signUp,
};
