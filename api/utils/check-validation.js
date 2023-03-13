const checkValidationEmail = (email) => {
  const emailRegex = new RegExp(/[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-z]{2,3}$/);
  if (!emailRegex.test(email)) {
    const error = new Error("INVALID_EMAIL");
    error.statusCode = 400;
    throw error;
  }
};

const checkValidationPassword = (password) => {
  const passwordRegex = new RegExp(
    /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
  );
  if (!passwordRegex.test(password)) {
    const error = Error("INVALID_PASSWORD");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  checkValidationEmail,
  checkValidationPassword,
};
