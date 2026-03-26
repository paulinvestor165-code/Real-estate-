// app/api/auth/signup/route.js

import { connectDB } from "../../../lib/db";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await connectDB();

  const { name, email, password, role } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  return Response.json({ message: "User created", user });
}
