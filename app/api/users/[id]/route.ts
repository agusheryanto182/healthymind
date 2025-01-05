import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import { verifyAuthorization } from "@/lib/verifyAuthorization";
import generateUUID from "@/lib/uuid";

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
// export async function PATCH(
//   req: Request,
//   { params }: { params: { id: string } },
// ) {
//   try {
//     const decoded = await verifyAuthorization(req);
//     if (!decoded) return;

//     await connectDB();

//     // Cari user berdasarkan ID
//     const user = await User.findById(params.id);
//     if (!user) {
//       return NextResponse.json(
//         { error: "User tidak ditemukan" },
//         { status: 404 },
//       );
//     }

//     // Perbarui data user
//     const { name, email, nim, prodi, password } = await req.json();
//     if (name) user.name = name;
//     if (email) user.email = email;
//     if (nim) user.nim = nim;
//     if (prodi) user.prodi = prodi;
//     if (password) {
//       const hashedPassword = await bcrypt.hash(password, 10);
//       user.password = hashedPassword;
//     }

//     // Simpan perubahan
//     await user.save();

//     return NextResponse.json({ message: "User berhasil diperbarui" });
//   } catch (error: any) {
//     console.error("Error updating user:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 },
//     );
//   }
// }

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

    const formData = await req.formData();
    const avatar = formData.get("avatar") as File;
    if (avatar) {
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedTypes.includes(avatar.type)) {
        return NextResponse.json(
          { error: "Format file tidak diizinkan" },
          { status: 400 },
        );
      }

      // Validasi ukuran file (contoh: maksimum 2 MB)
      const maxSizeInBytes = 2 * 1024 * 1024; // 2 MB
      if (avatar.size > maxSizeInBytes) {
        return NextResponse.json(
          { error: "Ukuran file terlalu besar, maksimum 2 MB" },
          { status: 400 },
        );
      }

      // Proses penyimpanan file
      const data = await avatar.arrayBuffer();
      const buffer = Buffer.from(data);
      const ext = avatar.name.split(".").pop();
      const uuid = generateUUID();
      const uploadPath = `public/uploads/${uuid}.${ext}`;
      const fs = require("fs").promises;
      await fs.writeFile(uploadPath, buffer);

      // Perbarui avatar pengguna
      user.avatar = `/uploads/${uuid}.${ext}` || "/assets/icons/profile.svg";
    }

    const name = formData.get("name") as string;
    if (name) user.name = name;
    const email = formData.get("email") as string;
    if (email) user.email = email;
    const nim = formData.get("nim") as string;
    if (nim) user.nim = nim;
    const prodi = formData.get("prodi") as string;
    if (prodi) user.prodi = prodi;
    const password = formData.get("password") as string;
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
