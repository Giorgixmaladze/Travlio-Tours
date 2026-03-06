const express = require("express")
const { createUser, login, verifyEmail } = require("../controller/auth.controller.js")
const router = express.Router()

router.post("/signup", createUser)
router.post("/login", login)
router.get("/register/verify/:code", verifyEmail) // Note: The email URL built in controller sends to host/users/register/verify/code but auth routes are typically prefixed with /api/auth. I will map it here.

module.exports = router