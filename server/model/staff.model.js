const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
    name: String,
    role: String,
    specialty: String,
    bio: String,
    image: String,
    social: {
        instagram: String,
        linkedin: String,
        twitter: String,
    }
});

module.exports = mongoose.model("Staff", staffSchema);