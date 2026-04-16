const express=require("express")
const authRoutes=require("../backend/routes/auth.routes")
const profileRoutes=require("./routes/profile.routes")
const connectDB = require("./config/db")
const cors=require("cors")
require("dotenv").config()
const cookieParser=require("cookie-parser")

const app=express()
connectDB()
app.use(express.json())
app.use(cookieParser())
app.set("view engine", "ejs")
const allowedOrigin=[
    'http://localhost:5173', // Keep this for local testing
  'https://auth-task-duqb.vercel.app' // ADD YOUR VERCEL URL HERE
]
app.use(cors({
    origin:allowedOrigin,
    credentials:true
}))
app.use(express.urlencoded({extended:true}))
//phle parser rakhna  or call karna baad me routes
app.use("/api/auth",authRoutes)
app.use("/api",profileRoutes)
const Port=process.env.PORT


app.listen(Port,()=>{
console.log(`server is running on port number ${Port}`)
})