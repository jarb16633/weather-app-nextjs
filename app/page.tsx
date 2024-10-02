"use client";
import AirPollution from "@/components/AirPollution";
import FiveDayForecast from "@/components/FiveDayForcast";
import Navbar from "@/components/Navbar";
import Sunset from "@/components/Sunset";
import Temperature from "@/components/Temperature";
import Wind from "@/components/Wind";

export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[1rem] xl:mx-[2rem] 2xl:mx-[6rem] m-auto">
      <Navbar />
      <div className="pb-2 pt-2 flex flex-col gap-2 md:flex-row">
        <div className="w-full md:w-[25%]">
          <Temperature />
        </div>
        <div className="w-full md:w-[75%] grid grid-rows-2 grid-cols-3 gap-2">
          <div className="row-span-1 col-span-1">
            <AirPollution />
          </div>
          <div className="row-span-1 col-span-1">
            <Sunset />
          </div>
          <div className="row-span-1 col-span-1">
            <Wind />
          </div>
          <div className="row-span-1"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="w-full md:w-[25%]">
          <FiveDayForecast />
        </div>
        <div className="w-full sm:w-[75%] grid grid-rows-3 gap-2">
          <AirPollution />
        </div>
      </div>
    </main>
  );
}
