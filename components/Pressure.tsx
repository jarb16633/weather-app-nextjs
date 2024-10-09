"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { gauge } from "@/utils/Icons";
import React from "react";
import { Skeleton } from "./ui/skeleton";

type Props = {};

const Pressure = (props: Props) => {
  const { forecast } = useGlobalContext();

  if (!forecast || !forecast?.main || !forecast?.main?.pressure)
    return <Skeleton className="h-[12rem] w-full" />;

  const { pressure } = forecast?.main;

  const getPressureDescription = (pressure: number) => {
    if (pressure < 1000)
      return "Low: Unusually low pressure can indicate severe weather conditions.";
    if (pressure < 1013) return "Normal: Standard atmospheric pressure.";
    if (pressure < 1020)
      return "High: Unusually high pressure can indicate stable weather conditions.";
    if (pressure < 1030)
      return "Very high: Extremely high pressure can indicate severe weather conditions.";
    return "Unavailable: Pressure data is not available.";
  };

  return (
    <div className="h-full w-full min-h-[10rem] pt-3 pb-3 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <h2 className="flex items-center gap-2 font-medium">{gauge} Pressure</h2>
      <p className="text-2xl">{pressure} hPa</p>
      <p className="text-sm">{getPressureDescription(pressure)}</p>
    </div>
  );
};

export default Pressure;
