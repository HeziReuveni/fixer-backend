const EmployeeDetails = require("../models/employeeDetailsModel");

const deleteEmployee = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send("Id is a required field");
  }
  try {
    const employee = await EmployeeDetails.findByIdAndDelete(id);
    if (!employee) {
      return res.status(400).send("Failed to delete the employee");
    }
    res.status(200).send("The employee was successfully deleted");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteEmployee };
