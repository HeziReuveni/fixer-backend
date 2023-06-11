const express = require("express");
const router = express.Router();
const { getSingleEmployee } = require("../controllers/getSingleEmployee");

router.post("/get-single-employee", getSingleEmployee);

module.exports = router;
