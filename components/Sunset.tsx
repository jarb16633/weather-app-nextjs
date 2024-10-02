"use client";

import { useGlobalContext } from "@/app/context/globalContext";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { unixToTime } from "@/utils/misc";
import { sunset } from "@/utils/Icons";
import { Progress } from "./ui/progress";

type Props = {};

const Sunset = (props: Props) => {
  const { forecast } = useGlobalContext();

  if (!forecast) return <Skeleton className="h-[12rem] w-full" />;

  const times = forecast?.sys?.sunset;
  const timezone = forecast?.timezone;

  const sunsetTime = unixToTime(times, timezone);
  const sunriseTime = unixToTime(forecast?.sys?.sunrise, timezone);

  return (
    <div className="h-full pt-2 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div>
        <h2 className="flex items-center gap-2 font-medium text-base sm:text-lg md:text-xl">
          {sunset} Sunset
        </h2>
        <p className="pt-4 text-2xl font-bold">{sunsetTime}</p>
      </div>
      <p className="text-sm sm:text-base">Sunrise: {sunriseTime}</p>
    </div>
  );
};

export default Sunset;
