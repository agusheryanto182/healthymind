"use client";

import { useState, useRef, useEffect } from "react";
import good from "../public/assets/good.json";
import help from "../public/assets/help.json";
import Lottie from "lottie-react";
import { toPng } from "html-to-image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useUser } from "@/hooks/useUser";
import toast from "react-hot-toast";
import ConsultButton from "./consult-button";
import Cookies from "js-cookie";

interface Question {
  text: string;
  subText: string;
}

type ResponseValue =
  | "Dalam waktu singkat"
  | "Beberapa waktu"
  | "Kurang dari separuh waktu"
  | "Lebih dari separuh waktu"
  | "Sebagian besar waktu"
  | "Sepanjang waktu";

interface Result {
  title: string;
  message: string;
  animationData: any;
  score: number;
}

export default function MentalHealthTest(): JSX.Element {
  const questions: Question[] = [
    {
      text: "Bagaimana perasaan anda dalam dua minggu terakhir?",
      subText: " Saya merasa ceria dengan semangat yang baik",
    },
    {
      text: "Bagaimana perasaan anda dalam dua minggu terakhir?",
      subText: " Saya merasa tenang dan rileks",
    },
    {
      text: "Bagaimana perasaan anda dalam dua minggu terakhir?",
      subText: "Saya merasa aktif dan bertenaga",
    },
    {
      text: "Bagaimana perasaan anda dalam dua minggu terakhir?",
      subText: "Saya terbangun dengan perasaan segar dan beristirahat",
    },
    {
      text: "Bagaimana perasaan anda dalam dua minggu terakhir?",
      subText:
        "Kehidupan sehari-hari saya dipenuhi dengan hal-hal yang menarik bagi saya.",
    },
  ];

  const responseValues: Record<ResponseValue, number> = {
    "Dalam waktu singkat": 0,
    "Beberapa waktu": 1,
    "Kurang dari separuh waktu": 2,
    "Lebih dari separuh waktu": 3,
    "Sebagian besar waktu": 4,
    "Sepanjang waktu": 5,
  };

  const descriptionResults: Record<number, string> = {
    1: "Hasil tes menunjukkan kondisi mentalmu stabil. Jangan lupa untuk tetap menjaga kesehatan mentalmu dengan rutin melakukan hal-hal yang kamu sukai.",
    2: "Berdasarkan hasil tes, kondisi mentalmu mungkin sedang tidak stabil. Coba berbicara dengan teman, keluarga, atau orang yang kamu percaya untuk mendapatkan dukungan.",
    3: "Hasil tes menunjukkan bahwa kamu mungkin membutuhkan bantuan dari seorang profesional. Jangan ragu untuk mencari bantuan dari psikolog atau konselor.",
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [responses, setResponses] = useState<ResponseValue[]>(
    Array(questions.length).fill("") as ResponseValue[],
  );
  const [isTestComplete, setIsTestComplete] = useState<boolean>(false);

  const handleResponseChange = (response: ResponseValue): void => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestionIndex] = response;
    setResponses(updatedResponses);
  };

  const handleNext = (): void => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsTestComplete(true);
    }
  };

  const handlePrevious = (): void => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = (): number => {
    let rawScore = 0;
    responses.forEach((response) => {
      rawScore += responseValues[response] || 0;
    });

    return Math.round(rawScore * 4);
  };

  const renderResult = (): Result => {
    const score = calculateScore();
    if (score <= 28) {
      return {
        title: "Kamu Membutuhkan Bantuan Profesional!",
        message: descriptionResults[3],
        animationData: help,
        score: score,
      };
    } else if (score <= 50) {
      return {
        title: "Kamu Membutuhkan Sedikit Bantuan!",
        message: descriptionResults[2],
        animationData: help,
        score: score,
      };
    } else {
      return {
        title: "Kamu Baik-Baik Saja!",
        message: descriptionResults[1],
        animationData: good,
        score: score,
      };
    }
  };

  const resultRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (resultRef.current) {
      try {
        const dataUrl = await toPng(resultRef.current);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "mental-test-result.png";
        link.click();
      } catch (error) {
        console.error("Failed to download the image.", error);
      }
    }
  };

  const [finalResult, setFinalResult] = useState<Result | null>(null);
  const semester =
    typeof window !== "undefined"
      ? localStorage.getItem("semester") || "1"
      : "1";

  const { user: authUser } = useAuth();
  const { user } = useUser(authUser?.id || "");

  useEffect(() => {
    if (isTestComplete) {
      const result = renderResult();
      setFinalResult(result);
    }
  }, [isTestComplete]);

  const handleSimpan = async () => {
    if (user) {
      try {
        const response = await fetch("/api/test/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
          body: JSON.stringify({
            user_id: user.id,
            score: calculateScore(),
            title: finalResult?.title,
            message: finalResult?.message,
            semester: Number(semester),
          }),
        });

        if (response.ok) {
          toast.success("Hasil tes berhasil disimpan!");
        }
      } catch (error) {
        toast.error("Terjadi kesalahan saat menyimpan hasil tes.");
      }
    }
  };

  return (
    <div className="flex  max-h-screen w-full flex-col items-center justify-center p-4">
      {!isTestComplete ? (
        <>
          <div className="mb-4 flex w-full justify-between space-x-1">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full ${
                  index <= currentQuestionIndex
                    ? "bg-[--primary]"
                    : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>

          <h1 className="mb-6 text-start text-lg font-semibold text-gray-700">
            {questions[currentQuestionIndex].text}
          </h1>

          <p className="mb-4 text-start text-base text-gray-500">
            {questions[currentQuestionIndex].subText}
          </p>

          <div className="flex w-full  flex-col space-y-3">
            {(
              [
                "Dalam waktu singkat",
                "Beberapa waktu",
                "Kurang dari separuh waktu",
                "Lebih dari separuh waktu",
                "Sebagian besar waktu",
                "Sepanjang waktu",
              ] as ResponseValue[]
            ).map((option) => (
              <button
                key={option}
                className={`rounded-lg border p-3 ${
                  responses[currentQuestionIndex] === option
                    ? "bg-[--primary] text-white"
                    : "bg-white text-gray-700 hover:bg-[--primary] hover:text-white"
                }`}
                onClick={() => handleResponseChange(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-8 flex w-full  items-center justify-between">
            <button
              className="rounded-lg bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 disabled:opacity-50"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Kembali
            </button>
            <span className="text-gray-700">
              {currentQuestionIndex + 1} dari {questions.length}
            </span>
            <button
              className="rounded-lg bg-[--primary] px-4 py-2 text-white hover:bg-[--hover] disabled:opacity-50"
              onClick={handleNext}
              disabled={!responses[currentQuestionIndex]}
            >
              {currentQuestionIndex < questions.length - 1
                ? "Selanjutnya"
                : "Lihat Hasil"}
            </button>
          </div>
        </>
      ) : (
        <div className=" min-h-screen text-center">
          <div
            className="flex w-full flex-col items-center justify-center gap-4  bg-white p-4"
            ref={resultRef}
          >
            <div className="flex w-full items-center justify-center">
              {finalResult && (
                <Lottie
                  animationData={finalResult.animationData}
                  loop
                  autoplay
                  style={{ width: "60%", height: "60%" }}
                />
              )}
            </div>
            <div className="mb-4 rounded-lg border border-black p-2">
              {finalResult && (
                <h1 className="mb-4 text-xl font-bold text-gray-800">
                  {"Skor kamu: " + finalResult.score}
                </h1>
              )}
              {finalResult && (
                <p className="mb-6 text-gray-700">
                  Semakin tinggi skornya, semakin baik pula kesehatan mental
                  kamu. Jika skor kamu lebih rendah dari 50 poin, kami sarankan
                  kamu juga menguji diri sendiri pada kuesioner yang disebutkan
                  di atas (PHQ-9 dan GAD-7) dan mengikuti hasilnya pada skala
                  tersebut. Apa pun itu, kami sarankan kamu terus memantau
                  kesehatan mental kamu sendiri dan juga membaca bagian
                  Perawatan Diri, di mana kamu dapat menemukan kiat-kiat
                  bermanfaat tentang cara meningkatkan kesehatan mental kamu.
                </p>
              )}
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4">
            <div className="w-full">
              <Link href="/report" passHref>
                <p className="w-full rounded-lg bg-[--primary] py-2 text-center text-white hover:bg-[--hover]">
                  Laporan
                </p>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between font-bold">
              <button
                className="rounded-lg border border-cyan-500 px-4 py-2 text-[--primary]  hover:bg-[--hover] hover:text-white"
                onClick={handleDownload}
              >
                Download
              </button>
              <button
                className="rounded-lg border border-cyan-500 px-4 py-2 text-[--primary]  hover:bg-[--hover] hover:text-white"
                onClick={handleSimpan}
              >
                Simpan
              </button>
              <ConsultButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
