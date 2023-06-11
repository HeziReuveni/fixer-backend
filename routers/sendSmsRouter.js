const express = require("express");
const router = express.Router();
const { sendSms } = require("../controllers/sendSmsToMobile");

router.post("/send-sms", sendSms);

module.exports = router;
