// models/User.js

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["buyer", "agent", "admin"],
    default: "buyer",
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
