import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Test from "@/models/test.model";
import { verifyAuthorization } from "@/lib/verifyAuthorization";

export async function GET(req: Request) {
  try {
    const decoded = await verifyAuthorization(req);
    if (!decoded) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 },
      );
    }

    await connectDB();

    const tests = await Test.find({ userId: decoded.id });

    if (!tests || tests.length === 0) {
      return NextResponse.json(
        { message: "No tests found for this user" },
        { status: 404 },
      );
    }

    return NextResponse.json(tests, { status: 200 });
  } catch (error) {
    console.error("Error fetching tests:", error);
    return NextResponse.json(
      { error: "Error fetching tests. Please try again later." },
      { status: 500 },
    );
  }
}
