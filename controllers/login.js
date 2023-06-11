const UserDetails = require("../models/userDetailsModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET_TOKEN, { expiresIn: "3d" });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("these are mandatory fields");
  }

  try {
    const user = await UserDetails.findOne({ email });
    if (!user) {
      res.status(400).send("User are does not exist");
    }
    const isProper = await bcrypt.compare(password, user.password);
    if (!isProper) {
      res.status(400).send("the password is not valid");
    }
    const token = createToken(user.email);
    res.status(200).send(token);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login };
