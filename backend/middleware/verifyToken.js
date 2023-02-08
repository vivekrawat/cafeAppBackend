const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['auth-token'];
  if (authHeader) {
    const token = authHeader;
    jwt.verify(token, process.env.JWT_SEC, (err, data) => {
      if (err) res.status(403).json("Token is not valid");
      req.data = data;
      next();
    });
  } else {
    return res.status(401).json("you are not authenticated");
  }
};



module.exports = {
  verifyToken
};
