const User = require("../models/userModel");

const getUsersForSidebar = async(req, res)=>{
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");
        res.status(201).json(filteredUsers);                
    } catch (error) {
        console.log("Error in userController", error.message);
        res.status(500).json({error: "Internal server error"})
    }
};

module.exports = {getUsersForSidebar};