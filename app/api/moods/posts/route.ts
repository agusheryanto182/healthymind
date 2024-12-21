import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Mood from "@/models/mood.model";
import { verifyAuthorization } from "@/lib/verifyAuthorization";

export async function POST(req: Request) {
  try {
    const decoded = await verifyAuthorization(req);
    if (!decoded) return;

    await connectDB();

    const { date,emoji, note } = await req.json();

    const moodPost = await Mood.create({
      user_id : decoded?.userId,
      emoji,
      note,
      date,
    });

    return NextResponse.json(moodPost, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating mood post" },
      { status: 500 },
    );
  }
}
