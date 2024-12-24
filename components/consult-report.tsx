"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { toPng } from "html-to-image";

export default function ConsultReport() {
  const [reports, setReports] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReport, setNewReport] = useState({
    semester: "",
    date: "",
    by: "",
  });
  const [deleteReport, setDeleteReport] = useState(null);

  const resultRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (resultRef.current) {
      try {
        // Set the width and height to simulate a desktop layout
        const originalWidth = resultRef.current.style.width;
        const originalHeight = resultRef.current.style.height;

        // Set desired width and height for desktop layout
        resultRef.current.style.width = "1200px"; // Example desktop width
        resultRef.current.style.height = "auto"; // Adjust height automatically

        // Wait for styles to apply and then capture the image
        const dataUrl = await toPng(resultRef.current);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "mental-test-report.png";
        link.click();

        // Restore original width and height
        resultRef.current.style.width = originalWidth;
        resultRef.current.style.height = originalHeight;
      } catch (error) {
        console.error("Failed to download the image.", error);
      }
    }
  };

  const handleDeleteReport = async () => {
    const token = Cookies.get("token");
    if (!token) {
      window.location.href = "/login";
    }

    try {
      const response = await fetch(`/api/consult-report/${deleteReport?._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Gagal menghapus laporan konsultasi");
      }

      setReports(reports.filter((report) => report._id !== deleteReport._id));
      setDeleteReport(null);
      toast.success("Laporan konsultasi berhasil dihapus!");
    } catch (error: any) {
      toast.error(
        error?.message || "Terjadi kesalahan saat menghapus laporan konsultasi",
      );
    }
  };

  const fetchReports = async (token) => {
    try {
      const response = await fetch("/api/consult-report/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setReports(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      window.location.href = "/login";
    }

    fetchReports(token);
  }, []);

  const handleAddReport = async () => {
    const input = {
      semester: newReport.semester,
      date: newReport.date,
      by: newReport.by,
    };

    if (!newReport.semester || !newReport.date || !newReport.by) {
      toast.error("Semua field harus diisi!");
      return;
    }

    const token = Cookies.get("token");
    if (!token) {
      window.location.href = "/login";
    }

    try {
      const response = await fetch("/api/consult-report/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error("Gagal menambahkan laporan konsultasi");
      }

      setReports([...reports, { ...newReport, id: reports.length + 1 }]);
      setNewReport({ semester: "", date: "", by: "" });
      toast.success("Laporan konsultasi berhasil ditambahkan!");
    } catch (error: any) {
      toast.error(
        error?.message ||
          "Terjadi kesalahan saat menambahkan laporan konsultasi",
      );
    } finally {
      fetchReports(token);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-screen-xl">
      <div ref={resultRef} className="w-full bg-white p-4">
        <h1 className="mb-4 text-center text-xl font-bold uppercase md:text-2xl">
          Laporan Konsultasi
        </h1>
        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-auto border-separate border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th scope="col" className="p-4 text-left  text-black">
                  No
                </th>
                <th scope="col" className="p-4 text-left  text-black">
                  Semester
                </th>
                <th scope="col" className="p-4 text-left  text-black">
                  Tanggal Konsultasi
                </th>
                <th scope="col" className="p-4 text-left  text-black">
                  Oleh
                </th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr
                  key={index}
                  className="cursor-pointer text-left hover:bg-cyan-500 hover:text-white"
                  onClick={() => setDeleteReport(report)}
                >
                  <td className="p-4 font-medium">{index + 1}</td>
                  <td className="p-4 font-medium">{report.semester}</td>
                  <td className="p-4 font-medium">{report.date}</td>
                  <td className="p-4 font-medium">{report.by}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4 flex w-full items-center justify-center gap-4 font-bold">
        <button
          className="rounded-lg border border-cyan-500 px-4 py-2 text-[--primary] hover:bg-[--hover] hover:text-white"
          onClick={() => setIsModalOpen(true)}
        >
          Tambah Laporan
        </button>
        <button
          onClick={handleDownload}
          className="rounded-lg border border-cyan-500 px-4 py-2 text-[--primary] hover:bg-[--hover] hover:text-white"
        >
          Download
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h2 className="mb-4 text-lg font-bold">Tambah Laporan</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Semester
                </label>
                <input
                  type="number"
                  value={newReport.semester}
                  onChange={(e) =>
                    setNewReport({ ...newReport, semester: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Tanggal Konsultasi
                </label>
                <input
                  type="date"
                  value={newReport.date}
                  onChange={(e) =>
                    setNewReport({ ...newReport, date: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Oleh
                </label>
                <select
                  value={newReport.by}
                  onChange={(e) =>
                    setNewReport({ ...newReport, by: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                >
                  <option value="" disabled>
                    Pilih Konsultan
                  </option>
                  <option value="Bapak Fx. Joko Krisdiyanto, S.Psi., M.Psi.">
                    Bapak Fx. Joko Krisdiyanto, S.Psi., M.Psi.
                  </option>
                  <option value="Ibu Rini Indriyani, S.Psi, MARS, M.Psi, Psikolog.">
                    Ibu Rini Indriyani, S.Psi, MARS, M.Psi, Psikolog.
                  </option>
                  <option value="Ibu Inayah, S.Gz., M.Si., RD.">
                    Ibu Inayah, S.Gz., M.Si., RD.
                  </option>
                </select>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-lg bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={handleAddReport}
                  className="rounded-lg bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-600"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {deleteReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h2 className="mb-4 text-lg font-bold">Hapus Laporan</h2>
            <p>Apakah Anda yakin ingin menghapus laporan ini?</p>
            <div className="mt-4 flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setDeleteReport(null)}
                className="rounded-lg bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleDeleteReport}
                className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
