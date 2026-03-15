const User = require("../model/user.model.js")
const bcrypt = require("bcrypt")
const sendWelcomeEmail = require("../middleware/email.js")
const jwt = require("jsonwebtoken")



const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN || "1h",
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

const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)

        const code = user.createVerificationCode()
        await user.save({ validateBeforeSave: false })

        const url = `https://travlio-tours.onrender.com/api/auth/register/verify/${code}`;




        sendWelcomeEmail(user.email, user.name, url).catch((err) => {
            console.error("[Email Error]", err.message)
        })


        // Respond immediately — don't make the user wait for the email
        res.status(200).json({
            success: true,
            message: "User created successfully. Please check your email to verify your account."
        })

        // Send email in the background after response is sent
       

    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Duplicate user detected" });
        }
        next(error)
    }
}


const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        // The password field has 'select: false' in the schema, so we must explicitly select it
        const user = await User.findOne({ email }).select("+password")

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        // Compare the submitted password with the hashed password
        const isPasswordValid = await user.comparePassword(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" })
        }

        if (!user.isVerified) {
            return res.status(403).json({ message: "Please verify your email address before logging in." })
        }

        // Remove password from the user object before sending it to the client
        req.user = user;

        // createSendToken automatically sends the response, so we return it directly instead of calling res.status(200).json first
        return createSendToken(user, 200, res)
    } catch (error) {
        next(error)
    }
}


const verifyEmail = async (req, res, next) => {
    try {
        const { code } = req.params;

        const user = await User.findOne({ verificationCode: code });
        if (!user) {
            return res.status(400).json({ message: "Invalid or expired verification code" });
        }

        user.isVerified = true;
        user.verificationCode = undefined;
        await user.save({ validateBeforeSave: false });

        res.redirect(`https://travlio-tours.onrender.com/verify-success`);
    } catch (error) {
        next(error);
    }
}

module.exports = { createUser, login, verifyEmail }
