const express = require("express")
const dotenv = require("dotenv") 
dotenv.config()
const mongoose = require("mongoose")
const app = express()
const toursRouter = require("./router/tours.router")
const cors = require("cors")
const dns = require("dns")

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use("/api/tours", toursRouter)

dns.setServers(["8.8.8.8", "8.8.4.4"])

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB")

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })


