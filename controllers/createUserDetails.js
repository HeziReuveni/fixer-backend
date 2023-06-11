const UserDetails = require("../models/userDetailsModel");
const jwt = require("jsonwebtoken");

const createToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET_TOKEN, { expiresIn: "3d" });
};

const createDetails = async (req, res) => {
  const { fullName, phoneNumber, password, email, idNumber, imgUrl } = req.body;

  if (!fullName || !phoneNumber || !password || !email || !idNumber) {
    return res.status(400).send("Mandatory fields must be filled");
  }

  try {
    const userExist = await UserDetails.findOne({ email });
    if (userExist) {
      return res.status(400).send("This username already exists");
    }

    const userDetails = new UserDetails({
      fullName,
      phoneNumber,
      password,
      email,
      idNumber,
      imgUrl,
    });
    if (!userDetails) {
      res.status(400).send("Failed to create user schema");
    }
    const token = createToken(userDetails.email);
    await userDetails.save();
    res.status(200).send(token);
  } catch (error) {
    res.send(error, "Failed to create details");
  }
};

module.exports = { createDetails };
