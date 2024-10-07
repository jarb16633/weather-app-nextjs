"use client";

import { useGlobalContext } from "@/app/context/globalContext";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { unixToTime } from "@/utils/misc";
import { sunrise, sunset } from "@/utils/Icons";

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
    <div className="h-full min-w-[150px] px-4 border rounded-xl flex justify-evenly items-center dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 w-full">
        <div className="col-span-1">
          <h2 className="flex flex-row text-center items-center text-xs justify-center gap-2 font-medium sm:justify-center sm:text-center md:text-base">
            {sunset} Sunset
          </h2>
          <p className="text-2xl font-bold text-center">{sunsetTime}</p>
        </div>
        <div className="col-span-1">
          <h2 className="flex flex-row text-center items-center text-xs justify-center gap-2 font-medium sm:justify-center sm:text-center md:text-base">
            {sunrise} Sunrise
          </h2>
          <p className="text-2xl font-bold text-center">{sunriseTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Sunset;
