const UserCodes = require("../models/ValidationCodes");

const checkCode = async (req, res) => {
  const { userCode } = req.body;
  if (!userCode) {
    return res.status(400).send("The code is a mandatory field");
  }
  try {
    const optCode = await UserCodes.find({ opt: userCode });
    if (optCode.length === 0) {
      return res.status(400).send("The code is not in the database");
    }
    const optCodeId = optCode[0]._id;
    await UserCodes.findOneAndRemove(optCodeId);
    res.status(200).send("Verification passed successfully");
  } catch (error) {
    res.status(400).send("Error", error);
  }
};

module.exports = { checkCode };
