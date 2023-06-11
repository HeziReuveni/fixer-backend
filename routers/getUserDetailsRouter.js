const express = require("express");
const router = express.Router();
const { getUserDetails } = require("../controllers/getUserDetails");
const { authentication } = require("../utils/authentication");

router.get("/get-user-details", authentication, getUserDetails);

module.exports = router;
