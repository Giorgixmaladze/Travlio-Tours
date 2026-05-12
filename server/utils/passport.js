const passport = require("passport");

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require("../model/user.model")

const googleCallbackUrl =
    process.env.GOOGLE_CALLBACK_URL || "/api/auth/google/callback";

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: googleCallbackUrl,
   
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            const email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : "";
            const user = await User.findOne({email: email})
            if(user){
                return done(null, user)
            }
            
            const displayName = profile.displayName || profile.name?.givenName || "User";
            const firstName = displayName.split(" ")[0] || "User";
            const lastName = displayName.split(" ")[1] || "Name";
            const userName = displayName.replace(/\s+/g, '') + "_" + Math.floor(Math.random() * 10000);

            const newUser = await User.create({
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                email: email,
                password: Math.random().toString(36).slice(-8) + "Google1!", 
                phone: "Not Provided",
                role: "user",
                joinDate: new Date().toISOString().split("T")[0],
                location: "Not Provided"
            })
            return done(null, newUser)
        } catch (error) {
            console.error("Passport Google Strategy Error:", error);
            return done(error, null);
        }
    }
))


module.exports = passport