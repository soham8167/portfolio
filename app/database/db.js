
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in environment variables");
      }
      
      await mongoose.connect(process.env.MONGODB_URI);
      console.log(`MongoDB connected: ${mongoose.connection.host}`);
    }
  } catch (error) {
    console.log(`MongoDB connection error: ${error.message}`);
    console.error('Full error:', error);
    // Throw the error so it can be caught by the route handler
    throw error;
  }
};

export default connectDb;