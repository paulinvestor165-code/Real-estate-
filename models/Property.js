// models/Property.js

import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  title: String,
  price: Number,
  location: String,
  type: String,
  images: [String],
  description: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Property || mongoose.model("Property", PropertySchema);
