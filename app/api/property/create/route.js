// app/api/property/create/route.js

import { connectDB } from "../../../lib/db";
import Property from "../../../models/Property";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await connectDB();

  const token = req.headers.get("authorization")?.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret123");

  const body = await req.json();

  const property = await Property.create({
    ...body,
    agent: decoded.id,
  });

  return Response.json({ message: "Property created", property });
}
