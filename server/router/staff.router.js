const express = require("express");
const router = express.Router();
const { getStaff } = require("../controller/staff.controller");

router.get("/", getStaff);

module.exports = router;