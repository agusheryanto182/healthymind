"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
} from "date-fns";
import Cookies from "js-cookie";

interface Mood {
  date: string;
  emoji: string;
  note: string;
}

const moodsList = [
  { emoji: "😄", label: "Bahagia", color: "bg-yellow-300" },
  { emoji: "😞", label: "Sedih", color: "bg-blue-300" },
  { emoji: "😠", label: "Marah", color: "bg-red-300" },
  { emoji: "😌", label: "Santai", color: "bg-green-300" },
  { emoji: "😰", label: "Cemas", color: "bg-purple-300" },
  { emoji: "😴", label: "Lelah", color: "bg-gray-400" },
];

const MoodTracker: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [moods, setMoods] = useState<Mood[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const handleOpenModal = (date: Date) => {
    setSelectedDate(date);
    const existingMood = moods.find(
      (mood) => mood.date === format(date, "yyyy-MM-dd"),
    );
    if (existingMood) {
      setSelectedMood(existingMood.emoji);
      setNote(existingMood.note);
    } else {
      setSelectedMood("");
      setNote("");
    }
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!selectedDate || !selectedMood) {
      toast.error("Silakan pilih emoji dan catatan terlebih dahulu.");
      return;
    }

    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    const updatedMoods = moods.filter((mood) => mood.date !== formattedDate);

    updatedMoods.push({ date: formattedDate, emoji: selectedMood, note });

    setMoods(updatedMoods);
    setIsModalOpen(false);

    try {
      const token = Cookies.get("token");
      if (token) {
        axios.post(
          "/api/moods/posts",
          { date: formattedDate, emoji: selectedMood, note },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      } else {
        window.location.href = "/login";
      }
      toast.success("Mood berhasil disimpan.");
    } catch (err) {
      toast.error("Terjadi kesalahan saat menyimpan mood.");
    }
  };

  const getMoodForDate = (date: Date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    const mood = moods.find((mood) => mood.date === formattedDate);
    return mood?.emoji || "";
  };

  const getColorForMood = (emoji: string) => {
    const mood = moodsList.find((m) => m.emoji === emoji);
    return mood?.color || "bg-white";
  };

  const handlePreviousMonth = () => {
    setCurrentDate((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => addMonths(prev, 1));
  };

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const token = Cookies.get("token");
        if (token) {
          const response = await axios.get("/api/moods/get", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setMoods(response.data);
        } else {
          window.location.href = "/login";
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchMoods();
  }, []);

  return (
    <div className="mx-auto w-full md:p-6">
      <h1 className="mb-6 text-center text-3xl font-bold text-cyan-500">
        Mood Tracker
      </h1>
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={handlePreviousMonth}
          className="rounded-lg bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-700"
        >
          &laquo;
        </button>
        <h2 className="text-xl font-semibold text-cyan-500">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <button
          onClick={handleNextMonth}
          className="rounded-lg bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-700"
        >
          &raquo;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-4 rounded-lg bg-gray-50 p-4 shadow-md">
        {daysInMonth.map((day) => {
          const emoji = getMoodForDate(day);
          const bgColor = getColorForMood(emoji);

          return (
            <div
              key={day.toISOString()}
              className={`flex flex-col items-center justify-center rounded-lg border p-3 transition-shadow duration-200 hover:shadow-lg ${bgColor}`}
              onClick={() => handleOpenModal(day)}
            >
              <span className="text-sm font-semibold text-gray-600">
                {format(day, "d")}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <h3 className="mb-4 text-lg font-semibold text-cyan-500">
          Keterangan Warna
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {moodsList.map((mood) => (
            <div
              key={mood.label}
              className="flex items-center gap-2 rounded-lg p-2 shadow-md"
            >
              <div className={`h-6 w-6 rounded-full ${mood.color}`}></div>
              <span className="font-medium text-gray-700">{mood.label}</span>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedDate && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-cyan-500">
              {format(selectedDate, "dd MMMM yyyy")}
            </h2>
            <div className="mb-4">
              <label className="mb-2 block font-semibold text-gray-700">
                Pilih Mood
              </label>
              <div className="flex flex-wrap gap-2">
                {moodsList.map((mood) => (
                  <button
                    key={mood.label}
                    onClick={() => setSelectedMood(mood.emoji)}
                    className={`rounded-lg border px-4 py-2 text-gray-700 ${
                      selectedMood === mood.emoji
                        ? "bg-cyan-500 text-white"
                        : "bg-gray-100 hover:bg-teal-100"
                    }`}
                  >
                    {mood.emoji} {mood.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="mb-2 block font-semibold text-gray-700">
                Catatan
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                rows={3}
                placeholder="Tambahkan catatan..."
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg border px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="rounded-lg bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-700"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodTracker;
