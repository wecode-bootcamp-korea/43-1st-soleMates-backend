const jwt = require("jsonwebtoken");
const userDao = require("../models/userDao");

const checkToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      const error = new Error("NOT_EXIST_TOKEN");
      throw error;
    }
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);

    const user = await userDao.checkSignedUserId(decoded.id);

    if (!user) {
      const error = new Error("INVALID_TOKEN");
      error.statusCode = 400;
      throw error;
    }
    req.user = decoded.id;

    next();
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

module.exports = {
  checkToken,
};
