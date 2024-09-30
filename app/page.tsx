"use client";
import AirPollution from "@/components/AirPollution";
import Navbar from "@/components/Navbar";
import Temperature from "@/components/Temperature";

export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-row gap-4">
        <div className="w-[37%]">
          <Temperature />
        </div>
        <div className="w-[63%] grid grid-rows-2 gap-4">
          <div className="row-span-1">
            <AirPollution />
          </div>
          <div className="row-span-1">
            <AirPollution />
          </div>
        </div>
      </div>
    </main>
  );
}
