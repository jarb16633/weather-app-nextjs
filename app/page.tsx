"use client";
import AirPollution from "@/components/AirPollution";
import DailyForecast from "@/components/DailyForecast";
import FiveDayForecast from "@/components/FiveDayForcast";
import Navbar from "@/components/Navbar";
import Population from "@/components/Population";
import Sunset from "@/components/Sunset";
import Temperature from "@/components/Temperature";
import UvIndex from "@/components/UvIndex";
import Wind from "@/components/Wind";

export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[1rem] xl:mx-[2rem] 2xl:mx-[6rem] m-auto">
      <Navbar />
      <div className="pb-2 pt-2 flex flex-col gap-2 md:flex-row">
        <div className="w-full md:w-[25%]">
          <Temperature />
        </div>
        <div className="w-full md:w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <div className="col-span-1 sm:col-span-2">
            <AirPollution />
          </div>
          <div className="col-span-1 flex">
            <Sunset />
          </div>
          <div className="col-span-1 flex">
            <Wind />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <DailyForecast />
          </div>
          <div className="col-span-1 flex">
            <UvIndex />
          </div>
          <div className="col-span-1 flex">
            <Population />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="w-full sm:w-[25%]">
          <FiveDayForecast />
        </div>
        <div className="w-full sm:w-[75%] grid grid-rows-3 gap-2">
          <AirPollution />
        </div>
      </div>
    </main>
  );
}
