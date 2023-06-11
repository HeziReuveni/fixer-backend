const express = require("express");
const router = express.Router();
const {
  createEmployeeDetails,
} = require("../controllers/createEmployeeDetails");
const { authentication } = require("../utils/authentication");

router.post("/create-user-employees", authentication, createEmployeeDetails);

module.exports = router;
