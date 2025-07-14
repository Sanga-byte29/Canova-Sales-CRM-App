const authMiddleware = (req, res, next) => {
  req.user = { id: 'dummyUserId' }; // Replace with JWT decoding in production
  next();
};

module.exports = { authMiddleware };