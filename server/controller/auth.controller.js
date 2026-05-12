const User = require("../model/user.model.js")
const { createSendToken } = require("../utils/token.js")
const jwt = require("jsonwebtoken")

// signup controller

const createUser = async (req, res, next) => {
    try {
        const { firstName, lastName, userName, email, password, phone, location } = req.body
        const user = await User.create({
            firstName,
            lastName,
            userName,
            email,
            password,
            phone,
            location,
            role: "user"
        })
        return createSendToken(user, 201, res)
    } catch (error) {
        next(error)
    }
}


// login controller
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
        req.user = user;

       
        return createSendToken(user, 200, res)
    } catch (error) {
        next(error)
    }
}
// logout controller
const logOut = (req, res, next) => {
    res.clearCookie('lt', {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "lax",
    })

    res.json("logged out !")
}

//controller for profile details
const getMe = async (req, res, next) => {
    try {
        const token = req.cookies.lt;
        if (!token) {
            return res.status(401).json({ message: "Not logged in" });
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: "User no longer exists" });
        }

        res.status(200).json({
            status: "success",
            data: { user }
        });
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}


// controller for auto login
const autoLogin = async (req, res, next) => {
    try {
        const token = req.cookies.lt;
        if (!token) {
            return res.status(401).json({ message: "Not logged in" });
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        user.password = undefined;

        return res.status(200).json({
            status: "success",
            data: {
                user,
            },
        });
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

// controller for profile edit
const updateProfile = async (req, res, next) => {
    try {

        const allowedUpdates = ['userName', 'location', 'phone'];
        const updateData = {};
        for (const key of Object.keys(req.body)) {
            if (allowedUpdates.includes(key)) {
                updateData[key] = req.body[key];
            }
        }

        const user = await User.findOneAndUpdate(
            { _id: req.user.id },
            updateData,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: "success",
            data: {
                user,
            },
        });
    } catch (error) {
        next(error)
    }
}





// Middleware to protect routes and ensure the user is authenticated
const protect = async (req, res, next) => {
    try {
        const token = req.cookies.lt;
        if (!token) {
            return res.status(401).json({ message: "Not logged in" });
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: "User no longer exists" });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = { createUser, login, logOut, getMe, autoLogin, protect, updateProfile }