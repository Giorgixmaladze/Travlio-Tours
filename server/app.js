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
const cookieParser = require("cookie-parser")
const router = require("./router/book.router")
const BlogRouter = require("./router/blog.router")

const allowedOrigins = [
    "https://travlio-tours.onrender.com",
    "http://localhost:5173",
    "http://localhost:5174"
]

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/tours", toursRouter)
app.use("/api/reviews", reviewsRouter)
app.use("/api/staff", staffRouter)
app.use("/api/auth", authRouter)
app.use("/api/book", router)
app.use("/api/blogs", BlogRouter)

dns.setServers(["8.8.8.8", "8.8.4.4"])
app.use(express.static(path.join(__dirname, "dist")))
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});


app.use("/uploads", express.static(path.join(__dirname, "uploads")))

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


