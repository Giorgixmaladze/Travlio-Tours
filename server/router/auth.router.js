const express = require("express")
const { createUser, login, logOut, getMe, autoLogin, updateProfile, protect } = require("../controller/auth.controller.js")
const router = express.Router()

router.post("/signup", createUser)
router.post("/login", login)
router.post("/logout", logOut)
router.get("/me", getMe)
router.get("/auto-login", autoLogin)
router.patch("/update-profile", protect, updateProfile)
router.get("/register/verify/:code", verifyEmail)
module.exports = router