import { NextResponse } from "next/server";
import db from "@/lib/db";
import Property from "@/models/Property";

export async function GET() {
  try {
    await db();

    const properties = await Property.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: properties,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
