const EmployeeDetails = require("../models/employeeDetailsModel");

const editEmployee = async (req, res) => {
  const { id, fullName, email, role, salary } = req.body;
  if (!id) {
    return res.status(400).send("Id not Found");
  }
  try {
    const employee = await EmployeeDetails.findByIdAndUpdate(id, {
      fullName,
      email,
      role,
      salary,
    });
    if (!employee) {
      return res.status(400).send("Failed to update employee");
    }
    res.status(200).send(employee);
  } catch (error) {
    res.status(400).send("The operation failed");
  }
};

module.exports = { editEmployee };
