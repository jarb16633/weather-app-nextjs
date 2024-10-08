"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { people } from "@/utils/Icons";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { formatNumber } from "@/utils/misc";

type Props = {};

const Population = (props: Props) => {
  const { fiveDayForecast } = useGlobalContext();
  const { city } = fiveDayForecast;

  console.log(city);

  if (!fiveDayForecast || !city)
    return <Skeleton className="h-[12rem] w-full" />;

  return (
    <div className="h-full w-full min-h-[10rem] pt-3 pb-3 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <h2 className="flex items-center gap-2 font-medium">
        {people} <span>Population</span>
      </h2>
      <p className="pt-2 text-2xl">{formatNumber(city.population)}</p>
      <p className="text-sm">Latest UN population data for {city.name}</p>
    </div>
  );
};

export default Population;
