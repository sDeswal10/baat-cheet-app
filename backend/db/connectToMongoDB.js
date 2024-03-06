const mongoose = require("mongoose");

const connectToMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connection with MONGODB is successful");
    } catch (error) {
        console.log("Error in connecting to Database", error.message);
    }
};

module.exports = connectToMongoDB;