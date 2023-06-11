const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  const token = req.headers.authorization.replace("Bearer ", "");
  if (!token) {
    return res.status(400).send("Unauthorized");
  }
  try {
    const isVerified = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.userEmail = isVerified.email;
    next();
  } catch (error) {
    return res.status(404).send("Forbidden");
  }
};

module.exports = { authentication };
