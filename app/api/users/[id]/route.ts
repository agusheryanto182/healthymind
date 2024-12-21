import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import { verifyAuthorization } from "@/lib/verifyAuthorization";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const decoded = await verifyAuthorization(req);
    if (!decoded) return;

    await connectDB();

    // Cari user berdasarkan ID
    const user = await User.findById(params.id).select("-password");
    if (!user) {
      return NextResponse.json(
        { error: "User tidak ditemukan" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      id: user._id,
      name: user.name,
      email: user.email,
      nim: user.nim,
      prodi: user.prodi,
      avatar: user.avatar || "/assets/icons/profile.svg",
    });
  } catch (error: any) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// PATCH /api/users/:id
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const decoded = await verifyAuthorization(req);
    if (!decoded) return;

    await connectDB();

    // Cari user berdasarkan ID
    const user = await User.findById(params.id);
    if (!user) {
      return NextResponse.json(
        { error: "User tidak ditemukan" },
        { status: 404 },
      );
    }

    // Perbarui data user
    const { name, email, nim, prodi, password } = await req.json();
    if (name) user.name = name;
    if (email) user.email = email;
    if (nim) user.nim = nim;
    if (prodi) user.prodi = prodi;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    // Simpan perubahan
    await user.save();

    return NextResponse.json({ message: "User berhasil diperbarui" });
  } catch (error: any) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
