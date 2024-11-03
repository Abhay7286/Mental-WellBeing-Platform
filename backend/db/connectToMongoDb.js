import mongoose from "mongoose";

const connectToMongoDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connection succesfull")
    } catch (error) {
        console.log("error occured", error.message)
    }
    
}

export default connectToMongoDb