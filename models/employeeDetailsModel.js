const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const employeeSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    user: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const EmployeeDetails = mongoose.model("EmployeeDetails", employeeSchema);
module.exports = EmployeeDetails;
