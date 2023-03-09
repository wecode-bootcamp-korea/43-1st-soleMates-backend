const checkValidationEmail = (email) => {
  const emailRegex = new RegExp(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  );
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
