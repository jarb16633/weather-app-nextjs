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
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1">
          <h2 className="flex flex-row items-center text-center gap-2 font-medium text-base sm:text-lg md:text-xl">
            {sunset} Sunset
          </h2>
          <p className="text-2xl font-bold items-center text-center">
            {sunsetTime}
          </p>
        </div>
        <div className="col-span-1">
          <h2 className="flex flex-row items-center text-center gap-2 font-medium text-base sm:text-lg md:text-xl">
            {sunrise} Sunrise
          </h2>
          <p className="text-2xl font-bold items-center text-center">
            {sunriseTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sunset;
