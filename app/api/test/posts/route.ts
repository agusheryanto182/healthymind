import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Test from "@/models/test.model";
import { verifyAuthorization } from "@/lib/verifyAuthorization";

export async function POST(req: Request) {
  try {
    const decoded = await verifyAuthorization(req);
    if (!decoded) return;

    await connectDB();

    const { user_id, score, title, message, semester } = await req.json();

    const test = await Test.create({
      user_id,
      score,
      title,
      message,
      semester,
    });

    return NextResponse.json(test, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating test" }, { status: 500 });
  }
}
