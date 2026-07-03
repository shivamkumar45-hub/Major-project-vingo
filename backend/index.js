
dotenv.config()
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routtes.js"
import cors from "cors"

const app=express()
const port=process.env.PORT||5000
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.listen(port, () => {
  connectDB()
  console.log(`Server is running on port ${port}`)
})