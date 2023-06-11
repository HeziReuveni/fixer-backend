const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
require("./db/mongoose");
const port = process.env.PORT || 4000;

const createEmployeeDetails = require("./routers/createEmployeeDetailsRouter");
const createUserDetails = require("./routers/createUserDetailsRouter");
const getSingleEmployee = require("./routers/getSingleEmployeeRouter");
const sendCodeToEmail = require("./routers/sendCodeToEmailRouter");
const sendPdfFile = require("./routers/sendPdfFileToEmailRouter");
const deleteEmployee = require("./routers/deleteEmployeeRouter");
const getUserDetails = require("./routers/getUserDetailsRouter");
const getEmployees = require("./routers/getEmployeesRouter");
const editEmployee = require("./routers/editEmployeeRouter");
const sendSmsToClient = require("./routers/sendSmsRouter");
const checkOptCode = require("./routers/checkOptRouter");
const login = require("./routers/loginRouter");

app.use(createEmployeeDetails);
app.use(getSingleEmployee);
app.use(createUserDetails);
app.use(sendCodeToEmail);
app.use(sendSmsToClient);
app.use(getUserDetails);
app.use(deleteEmployee);
app.use(checkOptCode);
app.use(getEmployees);
app.use(editEmployee);
app.use(sendPdfFile);
app.use(login);

// app.use(express.static("build"));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(port, () => {
  console.log(`Server connected port`, port);
});
