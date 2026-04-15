const { default: mongoose } = require("mongoose")

const connectDB=async()=>{
 try {
    let res=await mongoose.connect("mongodb://localhost:27017/auth-project")
    if(res){
        console.log("mongoDB connected")
    }
 } catch (error) {
    console.log("error while connecting mongoDB")
 }
}

module.exports=connectDB