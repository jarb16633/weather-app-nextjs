"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import React from "react";
import { Skeleton } from "./ui/skeleton";

type Props = {};

const DailyForecast = (props: Props) => {
  const { forecast, fiveDayForecast } = useGlobalContext();

  const { weather } = forecast;
  const { city, list } = fiveDayForecast;

  if (!fiveDayForecast || !city || !list)
    return <Skeleton className="h-[12rem] w-full" />;

  if (!forecast || !weather) return <Skeleton className="h-[12rem] w-full" />;

  return (
    <div className="h-full pt-2 px-4 gap-2 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      DailyForecast
    </div>
  );
};

export default DailyForecast;
