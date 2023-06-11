const EmployeeDetails = require("../models/employeeDetailsModel");
const jwt = require("jsonwebtoken");

const createEmployeeDetails = async (req, res) => {
  const { fullName, role, salary, email, imageUrl } = req.body;
  if (!fullName || !role || !salary || !email) {
    return res.status(400).send("Mandatory fields must be filled");
  }
  try {
    const employeeDetails = new EmployeeDetails({
      fullName,
      role,
      salary,
      email,
      imageUrl,
      user: req.userEmail,
    });
    if (!employeeDetails) {
      return res.status(400).send("Failed to create user schema");
    }
    await employeeDetails.save();
    res.send(employeeDetails);
  } catch (error) {
    res.send(error, "Failed to create employee details");
  }
};

module.exports = { createEmployeeDetails };
