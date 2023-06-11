const express = require("express");
const router = express.Router();
const { getEmployees } = require("../controllers/getEmployees");
const { authentication } = require("../utils/authentication");

router.get("/get-employees", authentication, getEmployees);

module.exports = router;
