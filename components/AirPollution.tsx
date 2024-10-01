"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Progress } from "./ui/progress";
import { wind } from "@/utils/Icons";
import { evaluateAirQuality } from "@/utils/misc";

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

  const airQualityIndex = airQuality.list[0].main.aqi;
  const airQualityEvaluation = evaluateAirQuality(airQualityIndex);

  return (
    <div className="h-full pt-2 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <h2 className="flex items-center gap-2 font-medium text-base sm:text-lg md:text-xl">
        {wind} Air Pollution
      </h2>
      <div className="flex-grow flex flex-col justify-center py-2">
        <Progress value={airQualityIndex * 20} max={100} className="mb-2" />
        <p className="text-base sm:text-lg">
          Air Quality: {airQualityEvaluation.text}
        </p>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
        {airQualityEvaluation.description}
      </p>
    </div>
  );
};

export default AirPollution;
