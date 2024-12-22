"use client";

import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
        setReport(response.data); // Assuming the data comes as an array
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
      <div ref={resultRef} className="bg-white p-4">
        <h1 className="mb-4 text-center text-xl font-bold uppercase md:text-2xl">
          HealthyMind Respati Report
        </h1>
        <Table>
          <TableHeader className="bg-gray-200">
            <TableRow>
              <TableHead className="w-[100px] text-center text-black">
                No
              </TableHead>
              <TableHead className="w-[150px] text-center text-black">
                Tanggal
              </TableHead>
              <TableHead className="text-center text-black">Semester</TableHead>
              <TableHead className="text-center text-black">Hasil</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {report?.length > 0 ? (
              report.map((item, index) => (
                <TableRow
                  key={index}
                  className={
                    item.score > 50
                      ? "bg-green-100 text-center"
                      : "bg-red-100 text-center"
                  }
                >
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    {dayjs(item.createdAt).format("YYYY-MM-DD")}
                  </TableCell>
                  <TableCell>{item.semester}</TableCell>
                  <TableCell>{item.message}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  Tidak ada hasil
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
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
