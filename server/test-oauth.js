require("dotenv").config();
const nodemailer = require("nodemailer");

console.log("=== Testing OAuth2 Gmail ===");
console.log("User:", process.env.EMAIL_ADDRESS);
console.log("Client ID:", process.env.GMAIL_CLIENT_ID ? "SET" : "NOT SET");
console.log("Client Secret:", process.env.GMAIL_CLIENT_SECRET ? "SET" : "NOT SET");
console.log("Refresh Token:", process.env.GMAIL_REFRESH_TOKEN ? "SET" : "NOT SET");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL_ADDRESS,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    },
});

async function run() {
    try {
        console.log("Verifying connection...");
        await transporter.verify();
        console.log("✅ Connection OK");

        console.log("Sending test email...");
        const info = await transporter.sendMail({
            from: process.env.EMAIL_ADDRESS,
            to: process.env.EMAIL_ADDRESS,
            subject: "OAuth2 Test Email",
            text: "Testing OAuth2 configuration."
        });
        console.log("✅ Sent! ID:", info.messageId);
    } catch (err) {
        console.error("❌ Error:", err);
    }
}

run();
