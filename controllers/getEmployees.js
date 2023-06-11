const EmployeeDetails = require("../models/employeeDetailsModel");

const getEmployees = async (req, res) => {
  const userEmail = req.userEmail;
  try {
    const employees = await EmployeeDetails.find({ user: userEmail }).sort({
      createdAt: -1,
    });
    if (!employees) {
      return res.status(400).send("Not Found employee in Data Base");
    }
    res.status(200).send(employees);
  } catch (error) {
    res.status(400).send(error, "No employees found");
  }
};

module.exports = { getEmployees };
