"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { thermo } from "@/utils/Icons";

type Props = {};

const AirPollution = (props: Props) => {
  const { airQuality } = useGlobalContext();

  // Check if air quality is available, check if necessary properties is defined
  if (
    !airQuality ||
    !airQuality.list ||
    !airQuality.list[0] ||
    !airQuality.list[0].main
  ) {
    return (
      <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-full" />
    );
  }

  const airQualityIndex = airQuality.list[0].main.aqi * 10;

  //   const filteredIndex = airQualityIndex.find((item) => {
  //     return item.rating === airQualityIndex;
  //   })

  return (
    <div className="air-pollution pt-6 px-4 h-full border rounded-xl flex flex-col gap-4 sm:gap-6 md:gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <h2 className="flex items-center gap-2 font-medium text-lg sm:text-xl md:text-2xl">
        {thermo}Air Pollution
      </h2>
      <p className="text-base sm:text-lg">
        Air Quality Index: {airQualityIndex}
      </p>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="w-full sm:w-1/2">
          {/* ใส่ข้อมูลเพิ่มเติมหรือกราฟิกแสดงคุณภาพอากาศ */}
        </div>
        <div className="w-full sm:w-1/2">
          {/* ใส่ข้อมูลเพิ่มเติมหรือคำแนะนำ */}
        </div>
      </div>
    </div>
  );
};

export default AirPollution;
