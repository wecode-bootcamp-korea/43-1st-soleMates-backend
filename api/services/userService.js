const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { userDao } = require("../models");
const checkValidation = require("../utils/check-validation");

const signUp = async (email, password, name) => {
  if (await userDao.checkSignedEmail(email)) {
    const error = new Error("Already_Exist_Email");
    error.statusCode = 400;
    throw error;
  }

  await checkValidation.checkValidationEmail(email);
  await checkValidation.checkValidationPassword(password);

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = await userDao.createUser(email, hashedPassword, name);

  return user;
};

const signIn = async (email, password) => {
  const userInfo = await userDao.getUserByEmail(email);
  const hashedPassword = userInfo.password;

  if (!userInfo) {
    const error = new Error("EMAIL_NOT_FOUND");
    error.statusCode = 404;
    throw error;
  }
  const checkHash = await bcrypt.compare(password, hashedPassword);
  if (!checkHash) {
    const error = new Error("WRONG_PASSWORD");
    error.statusCode = 400;
    throw error;
  }

  const userId = userInfo.id;
  const token = await jwt.sign({ id: userId }, process.env.SECRET_KEY);

  return token;
};

module.exports = {
  signUp,
  signIn,
};
