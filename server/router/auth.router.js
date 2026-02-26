const express = require("express")
const {createUser} = require("../controller/auth.controller.js")
const router = express.Router()

router.post("/signup",createUser)

module.exports = router