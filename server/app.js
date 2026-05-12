const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

const toursRouter = require("./router/tours.router")
const dns = require("dns")
const reviewsRouter = require("./router/reviews.router")
const staffRouter = require("./router/staff.router")
const authRouter = require("./router/auth.router")
const path = require("path")
const cookieParser = require("cookie-parser")
const router = require("./router/book.router")
const BlogRouter = require("./router/blog.router")

const allowedOrigins = [
    "https://travlio-tours-1.onrender.com",
    "http://localhost:5173",
    "http://localhost:5174"
]

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
}))
app.options(/.*/, cors());     // allow all routes to use cors

app.use(express.json())
app.use(cookieParser())
app.use("/api/tours", toursRouter)
app.use("/api/reviews", reviewsRouter)
app.use("/api/staff", staffRouter)
app.use("/api/auth", authRouter)
app.use("/api/book", router)
app.use("/api/blogs", BlogRouter)

dns.setServers(["8.8.8.8", "8.8.4.4"])
app.use(express.static(path.join(__dirname, "../client/dist")))
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// SPA fallback (Express 5 / path-to-regexp v6 doesn't accept "*" string routes)
app.get(/^\/(?!api(?:\/|$)|uploads(?:\/|$)).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})

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


