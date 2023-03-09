const bcrypt = require("bcrypt");

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

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userDao.createUser(email, hashedPassword, name);

  return user;
};

module.exports = {
  signUp,
};
