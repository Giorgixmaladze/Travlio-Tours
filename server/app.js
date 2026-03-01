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
const path = require("path")
app.use(cors({
    origin: "https://travlio-tours.onrender.com",
    credentials: true
}))
app.use(express.json())
app.use("/api/tours", toursRouter)
app.use("/api/reviews", reviewsRouter)
app.use("/api/staff", staffRouter)

app.use("/api/auth", authRouter)

dns.setServers(["8.8.8.8", "8.8.4.4"])
app.use(express.static(path.join(__dirname, "dist")))
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

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


