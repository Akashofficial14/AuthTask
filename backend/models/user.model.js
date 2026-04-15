const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    city:{
        type:String,
        required:true,
    },
    mobileNumber:{
        type:Number,
        required:true,
        minLength:10,
        maxLength:10,
    },
    isVerified: {
        type: Boolean,
        default: false,
    }
},{
    timestamps:true,
})
//hashing the password
userSchema.pre("save", async function (next) {
    //agar password baad me modified kara hai ya phli baar set horha hai tab hi hash hoga
    if (!this.isModified("password")) return next();
    try {
        this.password = await bcrypt.hash(this.password, 10)
        next()
    } catch (error) {
        console.log("error while bcrypting password", error)
    }
})
//comparing the password 
userSchema.methods.comparePassword=async function(enteredPass){
return await bcrypt.compare(enteredPass,this.password)
}
//genrating tokens
userSchema.methods.generateToken=function(){
return jwt.sign({id:this._id},process.env.JWT_TOKEN,{expiresIn:"1h"})
}


const userModel = mongoose.model("authusers", userSchema)
module.exports = userModel
