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
    <div className="h-full w-full min-h-[10rem] pt-3 pb-3 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <h2 className="flex items-center gap-2 font-medium">
        {sunset} Sunset & Sunrise
      </h2>
      <div className="flex flex-col justify-center flex-grow">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm">Sunset</p>
            <p className="text-2xl font-bold">{sunsetTime}</p>
          </div>
          <div>
            <p className="text-sm">Sunrise</p>
            <p className="text-2xl font-bold">{sunriseTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sunset;
