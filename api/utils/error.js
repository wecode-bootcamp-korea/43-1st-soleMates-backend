const catchAsync = (func) => {
  return (req, res, next) => {
    func(req, res).catch((error) => next(error));
  };
};

const globalErrorHandler = (error, req, res, next) => {
  console.error(error.stack);

  error.statusCode = error.statusCode || 500;

  return res.status(error.statusCode).json({ message: error.message });
};

module.exports = {
  catchAsync,
  globalErrorHandler,
};
