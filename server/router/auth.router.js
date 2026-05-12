const express = require("express")
const jwt = require("jsonwebtoken")
const { createUser, login, logOut, getMe, autoLogin, updateProfile, protect } = require("../controller/auth.controller.js")
const router = express.Router()
const passport = require("../utils/passport.js")

const getClientUrl = (req) => {
    if (process.env.CLIENT_URL) return process.env.CLIENT_URL;
    const protocol = req.headers["x-forwarded-proto"] || req.protocol || "http";
    return `${protocol}://${req.get("host")}`;
};
router.post("/signup", createUser)
router.post("/login", login)
router.post("/logout", logOut)
router.get("/me", getMe)
router.get("/auto-login", autoLogin)
router.patch("/update-profile", protect, updateProfile)
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"], session: false }))

router.get("/google/callback", (req, res, next) => {
    const clientUrl = getClientUrl(req);
    passport.authenticate("google", { failureRedirect: `${clientUrl}/signin`, session: false })(req, res, next);
}, (req, res) => {
    try {
        const clientUrl = getClientUrl(req);
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

        const redirectUrl = `${clientUrl}/`;

        res.redirect(redirectUrl);
    } catch (error) {
        console.error("Google Callback Error:", error);
        res.status(500).json({ message: "Internal Server Error during Google Auth" });
    }
})
module.exports = router