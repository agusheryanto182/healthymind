import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/user.model";
import { signJwtToken } from "@/lib/jwt";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, otp } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Akun tidak ditemukan" },
        { status: 404 },
      );
    }

    if (user.otp !== otp) {
      return NextResponse.json({ error: "OTP salah" }, { status: 400 });
    }

    if (user.otp_expires_at < Date.now()) {
      return NextResponse.json(
        { error: "OTP telah kadaluarsa" },
        { status: 400 },
      );
    }

    if (!user.is_verified) {
      user.is_verified = true;
    }

    user.otp = null;
    user.otp_expires_at = null;
    user.otp_status = false;
    await user.save();

    const tokenPayload = {
      userId: user._id,
      role: user.role,
    };

    const token = signJwtToken(tokenPayload);

    return NextResponse.json({
      message: "Verifikasi OTP berhasil",
      token,
      user: {
        id: user._id,
        role: user.role,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 },
    );
  }
}
