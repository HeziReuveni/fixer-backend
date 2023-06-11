const express = require("express");
const router = express.Router();
const { deleteEmployee } = require("../controllers/deleteEmployee");

router.post("/delete-employee", deleteEmployee);

module.exports = router;
