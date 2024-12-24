"use client";

import { Carousel } from "flowbite-react";
import Lottie from "lottie-react";
import animationData1 from "@/public/assets/girl.json";
import animationData2 from "@/public/assets/call-center.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ConsultButton from "./consult-button";

export default function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel indicators={false} leftControl rightControl>
        <div className="flex h-full items-center justify-center bg-cyan-500 bg-opacity-30">
          <section className="w-1/4">
            <h3 className="text-xs font-semibold md:text-xl">
              Mau langsung skrining kesehatan mental?
            </h3>
            <Button className="mt-4 rounded-full bg-[--primary] px-3 py-1 text-xs uppercase text-white hover:bg-[--hover] md:px-6 md:py-3 md:text-base">
              <Link href="/test">tes sekarang</Link>
            </Button>
          </section>
          <Lottie
            animationData={animationData1}
            loop
            autoplay
            style={{ width: "auto", height: "100%" }}
          />
        </div>
        {/* <div className="flex h-full items-center justify-center bg-cyan-500 bg-opacity-30">
          <section className="w-1/4">
            <h3 className="mb-4 text-xs font-semibold md:text-xl">
              Mau langsung konsultasi?
            </h3>
            <ConsultButton />
          </section>
          <Lottie
            animationData={animationData2}
            loop
            autoplay
            style={{ width: "auto", height: "100%" }}
          />
        </div> */}
      </Carousel>
    </div>
  );
}
