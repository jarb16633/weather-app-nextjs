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

  if (!times || !timezone) return <Skeleton className="h-[12rem] w-full" />;

  const sunsetTime = unixToTime(times, timezone);
  const sunriseTime = unixToTime(forecast?.sys?.sunrise, timezone);

  return (
    <div className="h-full pt-2 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="flex items-center gap-2 font-medium text-base sm:text-lg md:text-xl">
        <h2>{sunset} Sunset</h2>
      </div>
      <div className="pb-4">
        <p className="text-2xl font-bold">{sunsetTime}</p>
        <p className="text-sm sm:text-base">Sunrise: {sunriseTime}</p>
      </div>
    </div>
  );
};

export default Sunset;
