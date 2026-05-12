const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });


  
const sendMail = async (from, subject, text) => {
    await transporter.sendMail({
        from: from,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: text
    })
}


module.exports = sendMail