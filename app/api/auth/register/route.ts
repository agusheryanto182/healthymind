import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/user.model";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, nim, prodi, email, password } = await req.json();

    if (!name || !nim || !prodi || !email || !password) {
      return NextResponse.json(
        { error: "Semua field harus diisi" },
        { status: 400 },
      );
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail?.is_verified) {
      return NextResponse.json(
        { error: "Email sudah terdaftar" },
        { status: 400 },
      );
    }

    const existingNIM = await User.findOne({ nim });
    if (existingNIM?.is_verified) {
      return NextResponse.json(
        { error: "NIM sudah terdaftar" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);

    const otp_expires_at = otpExpiresAt;
    const otp_status = false;

    if (existingEmail) {
      existingEmail.name = name;
      existingEmail.nim = nim;
      existingEmail.prodi = prodi;
      existingEmail.password = hashedPassword;
      existingEmail.otp = otp;
      existingEmail.otp_expires_at = otpExpiresAt;
      existingEmail.otp_status = false;
      await existingEmail.save();

      return NextResponse.json(
        { message: "Registrasi berhasil" },
        { status: 201 },
      );
    }

    const user = await User.create({
      name,
      nim,
      prodi,
      email,
      password: hashedPassword,
      otp,
      otp_expires_at,
      otp_status,
    });

    if (!user) {
      return NextResponse.json(
        { error: "Terjadi kesalahan saat registrasi" },
        { status: 500 },
      );
    }

    // const token = signJwtToken({
    //   userId: user._id,
    //   email: user.email,
    //   name: user.name,
    //   nim: user.nim,
    //   prodi: user.prodi,
    // });

    return NextResponse.json(
      {
        message: "Registrasi berhasil",
      },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Terjadi kesalahan saat registrasi" },
      { status: 500 },
    );
  }
}
