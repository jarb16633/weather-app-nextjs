"use client";
import AirPollution from "@/components/AirPollution";
import FiveDayForcast from "@/components/FiveDayForcast";
import Navbar from "@/components/Navbar";
import Temperature from "@/components/Temperature";

export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 pt-4 flex flex-col gap-2 sm:flex-row">
        <div className="w-full sm:w-[37%]">
          <Temperature />
          <FiveDayForcast />
        </div>
        <div className="w-full sm:w-[63%] grid grid-rows-2 gap-2">
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
