const UserDetails = require("../models/userDetailsModel");

const getUserDetails = async (req, res) => {
  const userEmail = req.userEmail;
  try {
    const userDetails = await UserDetails.find({ email: userEmail });
    if (!userDetails) {
      return res.status(400).send("User are do not exist");
    }
    res.status(200).send(userDetails);
  } catch (error) {
    res.status(400).send("Error", error);
  }
};

module.exports = { getUserDetails };
