const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const app = express()
const toursRouter = require("./router/tours.router")
const cors = require("cors")
const dns = require("dns")
const reviewsRouter = require("./router/reviews.router")
const staffRouter = require("./router/staff.router")
const authRouter = require("./router/auth.router")

app.use(cors({
    origin: ["http://localhost:5174", "https://travlio-tours.onrender.com"],
    credentials: true
}))
app.use(express.json())
app.use("/api/tours", toursRouter)
app.use("/api/reviews", reviewsRouter)
app.use("/api/staff", staffRouter)

app.use("/api/auth", authRouter)

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


