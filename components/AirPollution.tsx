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
    <div className="air-pollution pt-6 px-4 h-full border rounded-xl flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <h2 className="flex items-center gap-2 font-medium">
        {thermo}Air Pollution
      </h2>
      <p>Air Quality is</p>
    </div>
  );
};

export default AirPollution;
