const express=require("express")
const authRoutes=require("../backend/routes/auth.routes")
const profileRoutes=require("./routes/profile.routes")
const connectDB = require("./config/db")
const cors=require("cors")
require("dotenv").config()
const cookieParser=require("cookie-parser")

const app=express()
connectDB()
app.use(cors({
    origin:"https://auth-task-duqb.vercel.app",
    credentials:true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use(cookieParser())
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
//phle parser rakhna  or call karna baad me routes
app.use("/api/auth",authRoutes)
app.use("/api",profileRoutes)
const Port=process.env.PORT


app.listen(Port,()=>{
console.log(`server is running on port number ${Port}`)
})