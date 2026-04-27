const express = require("express");
const MessageRouter = express.Router();
const sendMessage = require("../controller/message.controller");


MessageRouter.post("/send-message", sendMessage)

module.exports = MessageRouter