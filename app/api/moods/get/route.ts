import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Mood from "@/models/mood.model";
import { verifyAuthorization } from "@/lib/verifyAuthorization";

export async function GET(req: Request) {
  try {
    const decoded = await verifyAuthorization(req);
    if (!decoded) return;

    await connectDB();

    const posts = await Mood.find({ user_id: decoded.userId }).sort({
      createdAt: -1,
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching posts" },
      { status: 500 },
    );
  }
}
