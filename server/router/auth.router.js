const express = require("express")
const { createUser, login, verifyEmail, testEmail } = require("../controller/auth.controller.js")
const router = express.Router()

router.post("/signup", createUser)
router.post("/login", login)
router.get("/register/verify/:code", verifyEmail)

module.exports = router