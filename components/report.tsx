"use client";

import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { toPng } from "html-to-image";
import dayjs from "dayjs";
import Cookies from "js-cookie";

export default function ReportComponent() {
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        const response = await axios.get("/api/test/get", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setReport(response.data || []);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch report data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const resultRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (resultRef.current) {
      try {
        const dataUrl = await toPng(resultRef.current);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "mental-test-report.png";
        link.click();
      } catch (error) {
        console.error("Failed to download the image.", error);
      }
    }
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center">
      <div ref={resultRef} className="w-full bg-white p-4">
        <h1 className="mb-4 text-center text-xl font-bold uppercase md:text-2xl">
          HealthyMind Respati Report
        </h1>
        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-auto border-separate border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th scope="col" className="p-4 text-center text-black">
                  No
                </th>
                <th scope="col" className="p-4 text-center text-black">
                  Tanggal
                </th>
                <th scope="col" className="p-4 text-center text-black">
                  Semester
                </th>
                <th scope="col" className="p-4 text-center text-black">
                  Skor
                </th>
                <th scope="col" className="p-4 text-center text-black">
                  Hasil
                </th>
              </tr>
            </thead>
            <tbody>
              {report.length > 0 ? (
                report.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      item.score > 50
                        ? "bg-green-100 text-left"
                        : "bg-red-100 text-left"
                    }
                  >
                    <td className="p-4 font-medium">{index + 1}</td>
                    <td className="p-4">
                      {dayjs(item.createdAt).format("YYYY-MM-DD")}
                    </td>
                    <td className="p-4">{item.semester}</td>
                    <td className="p-4">{item.score}</td>
                    <td className="p-4">{item.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-4 text-center">
                    Tidak ada hasil
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="mt-8 rounded-lg border border-cyan-500 px-4 py-2 text-[--primary] hover:bg-[--hover] hover:text-white"
      >
        Download
      </button>
    </div>
  );
}
