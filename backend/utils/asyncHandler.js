const asyncHandler = (reqfunction) => {
  return (req, res, next) => {
    Promise.resolve(reqfunction(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;
