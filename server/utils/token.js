const jwt = require("jsonwebtoken")

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    });
};

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieMaxAgeDays = Number(process.env.COOKIE_EXPIRES_IN || 7);

    res.cookie("lt", token, {
        maxAge: cookieMaxAgeDays * 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "lax",
    });

    user.password = undefined;

    return res.status(statusCode).json({
        status: "success",
        token,
        data: {
            user,
        },
    });
};

module.exports = {
    signToken,
    createSendToken
}