import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    location: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.models.Property ||
  mongoose.model("Property", PropertySchema);
