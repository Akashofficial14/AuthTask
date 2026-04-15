const jwt=require("jsonwebtoken")
const userModel = require("../models/user.model")
const authMiddleware=async(req,res,next)=>{
    try {
        let token=req.cookies.token
        if(!token) return res.status(401).json({
            message:"token not found"
        })
        let decode=jwt.verify(token,process.env.JWT_TOKEN)
        if(!decode) return res.status(401).json({
            message:"Invalid token"
        })
        let userData=await userModel.findById(decode.id)
        req.user=userData
        next()
    } catch (error) {
        return res.status(500).json({
            message:"internal server error",
            success:false,
            error
        })
    }
}
module.exports=authMiddleware