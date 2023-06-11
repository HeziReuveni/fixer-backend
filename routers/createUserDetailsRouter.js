const express = require("express");
const router = express.Router();
const { createDetails } = require("../controllers/createUserDetails");

router.post("/create-user", createDetails);

module.exports = router;
