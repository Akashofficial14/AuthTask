const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const profileController = async (req, res) => {
    try {
        let loggedInUserData = req.user
        return res.status(200).json({
            success: true,
            message: "loggedIn user data",
            loggedInUserData
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error",
            success: false,
            error
        })
    }
}
const updateProfileController = async (req, res) => {
    try {
        let userId = req.user._id
        console.log("your logged in userID is-->", userId)
        let { name, city, mobileNumber, email } = req.body
        if (!name || !city || !mobileNumber || !email) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }
        let updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { name, city, mobileNumber, email },
            { new: true }
        )
        console.log("updated user is -->", updatedUser)
        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            updatedUser
        })

        // Add logic to update user profile here
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error",
            success: false,
            error
        })
    }
}
const updatePasswordController = async (req, res) => {
    try {
        let userId = req.user._id;
        let { newPassword, confirmPassword, currentPassword } = req.body;

        // 1. Validation
        if (!newPassword || !confirmPassword || !currentPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // 2. Find User
        let user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // 3. CORRECT COMPARE: Compare plain text with DB hash
        // DO NOT hash currentPassword before comparing!
        let isMatch = await bcrypt.compare(currentPassword, user.password);
        
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Current password is incorrect"
            });
        }

        // 4. Hash the NEW password
        let hashedNewPassword = await bcrypt.hash(newPassword, 10);

        // 5. Update and Save
        user.password = hashedNewPassword;
        await user.save();
       console.log("password updated successfully for userID-->", userId)
        return res.status(200).json({
            success: true,
            message: "Password updated successfully",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};
module.exports = { profileController, updateProfileController, updatePasswordController }