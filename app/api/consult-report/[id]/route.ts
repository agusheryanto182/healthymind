import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Consult from "@/models/consult.model";
import { verifyAuthorization } from "@/lib/verifyAuthorization";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const decoded = await verifyAuthorization(req);
    if (!decoded) return;

    await connectDB();

    const deletedConsultReport = await Consult.findByIdAndDelete({
      _id: params.id,
      user_id: decoded?.userId,
    });

    if (!deletedConsultReport) {
      return NextResponse.json(
        { error: "Laporan konsultasi tidak ditemukan" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      message: "Laporan konsultasi berhasil dihapus",
    });
  } catch (error: any) {
    console.error("Error fetching consult reports:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
