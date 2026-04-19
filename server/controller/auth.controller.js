const User = require("../model/user.model.js")
const bcrypt = require("bcrypt")
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

const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)

        return createSendToken(user, 201, res)

    } catch (error) {
        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0];
            return res.status(400).json({ 
                success: false,
                message: `${field === 'email' ? 'Email' : 'User Name'} is already taken. Please use another one.` 
            });
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

        // Remove password from the user object before sending it to the client
        req.user = user;

        // createSendToken automatically sends the response, so we return it directly instead of calling res.status(200).json first
        return createSendToken(user, 200, res)
    } catch (error) {
        next(error)
    }
}

const logOut = (req, res, next) => {
    res.clearCookie('lt', {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "lax",
    })

    res.json("logged out !")
}

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

const updateProfile = async (req, res, next) =>{
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
