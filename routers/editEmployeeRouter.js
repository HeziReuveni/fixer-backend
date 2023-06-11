const express = require("express");
const router = express.Router();
const { editEmployee } = require("../controllers/editEmployee");

router.post("/edit-employee", editEmployee);

module.exports = router;
