const express = require("express");
const router = express.Router();
const { sendPdfFile } = require("../controllers/sendPdfFileToEmail");

router.post("/save-pdf", sendPdfFile);

module.exports = router;
