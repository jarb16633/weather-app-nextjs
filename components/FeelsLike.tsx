"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { thermometer } from "@/utils/Icons";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { kelvinToCelsius } from "@/utils/misc";

type Props = {};

const FeelsLike = (props: Props) => {
  const { forecast } = useGlobalContext();

  if (!forecast || !forecast?.main || !forecast?.main?.feels_like)
    return <Skeleton className="h-full w-full" />;

  const { feels_like, temp_min, temp_max } = forecast?.main;

  const feelsLikeText = (
    feelslike: number,
    minTemp: number,
    maxTemp: number
  ) => {
    const avgTemp = (minTemp + maxTemp) / 2;

    if (feelslike < avgTemp - 5)
      return "Feels significantly colder than actual temperature.";
    if (feelslike > avgTemp - 5 && feelslike <= avgTemp + 5)
      return "Feels close to actual temperature.";
    if (feelslike > avgTemp + 5)
      return "Feels significantly warmer than actual temperature.";

    return "Temperature feeling is typical for this range.";
  };

  const feelsLikeDescription = feelsLikeText(feels_like, temp_min, temp_max);

  return (
    <div className="h-full w-full min-h-[10rem] pt-3 pb-3 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">
          {thermometer} Feels Like
        </h2>
        <p className="text-2xl">{kelvinToCelsius(feels_like)}°</p>
      </div>

      <p className="text-sm">{feelsLikeDescription}</p>
    </div>
  );
};

export default FeelsLike;
