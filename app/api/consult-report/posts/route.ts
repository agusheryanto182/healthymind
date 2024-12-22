import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Consult from "@/models/consult.model";
import { verifyAuthorization } from "@/lib/verifyAuthorization";

export async function POST(req: Request) {
  try {
    const decoded = await verifyAuthorization(req);
    if (!decoded) return;

    await connectDB();

    const { date, semester, by } = await req.json();

    const consultPost = await Consult.create({
      user_id: decoded?.userId,
      semester,
      by,
      date,
    });

    return NextResponse.json(consultPost, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating mood post" },
      { status: 500 },
    );
  }
}
