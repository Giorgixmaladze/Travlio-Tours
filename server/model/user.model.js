const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters"],
        select: false
    },
    role: {
        type: String,
        enum: ["user", "admin"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: String,
        select: false
    }
})


userSchema.pre("save", async function () {

    if (!this.isModified("password")) return;


    this.password = await bcrypt.hash(this.password, 12);
});
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password)
}

userSchema.methods.createVerificationCode = function () {
    const code = crypto.randomBytes(12).toString("hex");
    this.verificationCode = code;
    return code;
};

const User = mongoose.model("User", userSchema)
module.exports = User
