import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing");
  }

  return mongoose.connect(MONGODB_URI);
}

export default connectDB;
