"use client";

import Lottie from "lottie-react";
import mentalTest from "@/public/assets/mental-test.json";
import CustomButtonComponent from "./custom-button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TestComponent() {
  const [semester, setSemester] = useState(null);
  const router = useRouter();

  const handleSubmit = () => {
    if (semester > 0) {
      localStorage.setItem("semester", String(semester));
      router.push("/mental-test");
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center  p-4">
        <Lottie
          animationData={mentalTest}
          loop
          autoplay
          style={{ width: "80%", height: "80%" }}
        />
        <Input
          className="mt-8 w-full focus:outline-none "
          placeholder="Saat ini kamu semester berapa?"
          type="number"
          onChange={(e) => setSemester(e.target.valueAsNumber)}
          value={semester}
        />
        <div onClick={handleSubmit} className="relative mt-8 w-1/2">
          <CustomButtonComponent title="tes sekarang" />
        </div>
      </div>
    </div>
  );
}
