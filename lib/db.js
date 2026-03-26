import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const db = async () => {
  if (mongoose.connection.readyState >= 1) return;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  return mongoose.connect(MONGODB_URI);
};

export default db;
