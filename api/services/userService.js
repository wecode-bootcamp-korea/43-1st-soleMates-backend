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
  try {
    const userInfo = await userDao.getUserByEmail(email);
    const hashedPassword = await userInfo.password;

    if (!hashedPassword) {
      const error = new Error("EMAIL_NOT_FOUND");
      error.statusCode = 404;
      throw error;
    }
    const checkHash = bcrypt.compare(password, hashedPassword);
    if (!checkHash) {
      const error = new Error("WRONG_PASSWORD");
      error.statusCode = 400;
      throw error;
    }
    const userId = await userInfo.id;
    const token = jwt.sign({ id: userId }, process.env.SECRET_KEY);

    return token;
  } catch (error) {
    console.log(error);
    throw new Error("FAILED_TO_LOGIN");
  }
};

module.exports = {
  signUp,
  signIn,
};
