const EmployeeDetails = require("../models/employeeDetailsModel");

const getSingleEmployee = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send("ID is a required field");
  }
  try {
    const employee = await EmployeeDetails.findById(id);
    if (!employee) {
      return res.status(400).send("Failed to find the employee");
    }
    res.status(200).send(employee);
  } catch (error) {
    res.status(400).send("Encountered an error:", error);
  }
};

module.exports = { getSingleEmployee };
