const express = require("express");
const router = express.Router();
const { checkCode } = require("../controllers/checkOptCode.js");

router.post("/check-code", checkCode);

module.exports = router;
