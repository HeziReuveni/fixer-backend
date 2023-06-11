const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Codes = new Schema({
  opt: {
    type: String,
    required: true,
  },
});

const UserCodes = mongoose.model("UserCodes", Codes);
module.exports = UserCodes;
