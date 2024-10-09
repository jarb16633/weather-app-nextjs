"use client";
import AirPollution from "@/components/AirPollution";
import DailyForecast from "@/components/DailyForecast";
import FeelsLike from "@/components/FeelsLike";
import FiveDayForecast from "@/components/FiveDayForcast";
import Humidity from "@/components/Humidity";
import MapBox from "@/components/MapBox";
import Navbar from "@/components/Navbar";
import Population from "@/components/Population";
import Pressure from "@/components/Pressure";
import States from "@/components/States";
import Sunset from "@/components/Sunset";
import Temperature from "@/components/Temperature";
import UvIndex from "@/components/UvIndex";
import Visibility from "@/components/Visibility";
import Wind from "@/components/Wind";

export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[1rem] xl:mx-[2rem] 2xl:mx-[6rem] mb-4">
      <Navbar />
      <div className="pb-2 flex flex-col gap-2 md:flex-row">
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
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="w-full md:w-[25%] h-full">
          <FiveDayForecast />
        </div>
        <div className="w-full md:w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <div className="col-span-2 flex gap-2">
            <FeelsLike />
            <Humidity />
          </div>
          <div className="col-span-2 flex gap-2">
            <Visibility />
            <Pressure />
          </div>
          <div className="mapbox-container col-span-3 row-span-4 flex">
            <MapBox />
          </div>
          <div className="states flex flex-col col-span-1 row-span-4 gap-3 flex-1">
            <States />
          </div>
        </div>
      </div>
    </main>
  );
}
