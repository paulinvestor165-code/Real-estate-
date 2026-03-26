import { NextResponse } from "next/server";
import db from "@/lib/db";
import Property from "@/models/Property";

export async function POST(req) {
  try {
    await db();

    const body = await req.json();

    const property = await Property.create(body);

    return NextResponse.json({
      success: true,
      data: property,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
