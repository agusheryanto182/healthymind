import { NextResponse } from "next/server";
import { verifyJwtToken, JwtPayload } from "@/lib/jwt";

export async function verifyAuthorization(
  req: Request,
): Promise<JwtPayload | null> {
  const token = req.headers.get("authorization")?.split(" ")[1];

  if (!token) {
    // return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    return null;
  }

  const decoded = verifyJwtToken(token);
  if (!decoded) {
    // return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    return null;
  }

  return decoded as JwtPayload;
}
