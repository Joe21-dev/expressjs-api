const customMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // continue to next middleware/route
};

module.exports = customMiddleware;
