import { NextResponse } from "next/server";
import { verifyJwtToken } from "@/lib/jwt";
import { JwtPayload } from "jsonwebtoken";

export async function verifyAuthorization(req: Request) {
  const token = req.headers.get("authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const decoded = verifyJwtToken(token);
  if (!decoded) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  return decoded as JwtPayload;
}
