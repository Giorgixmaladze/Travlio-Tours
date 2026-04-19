const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"],
    },
    userName: {
        type: String,
        required: [true, "User Name is required"],
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
    phone: {
        type: String,
        required: [true, "Phone is required"],
    },
    role: {
        type: String,
        enum: ["user", "admin"]
    },
    joinDate: {
        type: String,
        default: new Date().toISOString().split("T")[0]
    },
    location: {
        type: String
    }
})


userSchema.pre("save", async function () {

    if (!this.isModified("password")) return;


    this.password = await bcrypt.hash(this.password, 12);
});
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password)
}


const User = mongoose.model("User", userSchema)
module.exports = User
