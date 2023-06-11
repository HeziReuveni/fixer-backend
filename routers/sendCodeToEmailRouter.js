const express = require("express");
const router = express.Router();
const { sendCodeToEmail } = require("../controllers/sendCodeToEmail");

router.post("/send-email", sendCodeToEmail);

module.exports = router;
