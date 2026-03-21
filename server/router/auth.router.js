const express = require("express")
const { createUser, login, logOut, getMe, autoLogin } = require("../controller/auth.controller.js")
const router = express.Router()

router.post("/signup", createUser)
router.post("/login", login)
router.post("/logout", logOut)
router.get("/me", getMe)
router.get("/auto-login", autoLogin)

module.exports = router