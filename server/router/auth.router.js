const express = require("express")
const jwt = require("jsonwebtoken")
const { createUser, login, logOut, getMe, autoLogin, updateProfile, protect } = require("../controller/auth.controller.js")
const router = express.Router()
const passport = require("../utils/passport.js")
router.post("/signup", createUser)
router.post("/login", login)
router.post("/logout", logOut)
router.get("/me", getMe)
router.get("/auto-login", autoLogin)
router.patch("/update-profile", protect, updateProfile)
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }))

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "http://localhost:5173/login", session: false }), (req, res) => {
    // Generate JWT token
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    });

    const cookieMaxAgeDays = Number(process.env.COOKIE_EXPIRES_IN || 7);

    res.cookie("lt", token, {
        maxAge: cookieMaxAgeDays * 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "lax",
    });

    res.redirect("http://localhost:5173/")
})
module.exports = router