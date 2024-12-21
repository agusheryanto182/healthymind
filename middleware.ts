import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const path = request.nextUrl.pathname;

  // List of protected routes
  const protectedPaths = [
    "/profile",
    "/mood-tracker",
    "/test",
    "/consult-report",
    "/report",
  ];

  const guestPaths = ["/login", "/register"];

  if (protectedPaths.includes(path) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (guestPaths.includes(path) && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/mood-tracker/:path*",
    "/test",
    "/consult-report",
    "/report",
    "/login",
    "/register",
    "/",
  ],
};
