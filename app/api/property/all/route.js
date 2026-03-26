// app/api/property/all/route.js

import { connectDB } from "../../../lib/db";
import Property from "../../../models/Property";

export async function GET() {
  await connectDB();

  const properties = await Property.find().populate("agent");

  return Response.json(properties);
}
