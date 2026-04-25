const Message = require("../model/message.model")
const sendMail = require("../utils/sendMessage")


const sendMessage = async (req, res) => {
    try {

        const newMessage = new Message({ user: req.user.id, ...req.body })
        await newMessage.save()
        await sendMail(newMessage.email, newMessage.subject, newMessage.message)
        res.status(201).json({ success: true, message: "Message sent successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

module.exports = sendMessage