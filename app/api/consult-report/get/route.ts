import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Consult from "@/models/consult.model";
import { verifyAuthorization } from "@/lib/verifyAuthorization";

export async function GET(req: Request) {
  try {
    const decoded = await verifyAuthorization(req);
    if (!decoded) return;

    await connectDB();

    const consults = await Consult.find({ user_id: decoded.userId }).sort({
      date: 1,
    });
    return NextResponse.json(consults);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching consults" },
      { status: 500 },
    );
  }
}
