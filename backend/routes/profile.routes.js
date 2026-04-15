const express=require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const {profileController,updatePasswordController,updateProfileController}= require('../controllers/profile.controller')
const router=express.Router()
router.get("/profile",authMiddleware,profileController)
router.put("/profile/update",authMiddleware,updateProfileController)
router.put("/profile/update-password",authMiddleware,updatePasswordController)
module.exports=router