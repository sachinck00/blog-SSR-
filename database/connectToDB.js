import mongoose from "mongoose";

const connectToDatabase = async (url) => {
    try {
        await mongoose.connect(url)
        console.log("successfully connected to database ");
    } catch (error) {
        console.log("failed to connect database", error);
    }
}

export default connectToDatabase