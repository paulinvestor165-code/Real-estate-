import { NextResponse } from "next/server";
import connectDB from "@/lib/db";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    // TODO: Save user properly later
    return NextResponse.json({
      success: true,
      message: "User created",
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
