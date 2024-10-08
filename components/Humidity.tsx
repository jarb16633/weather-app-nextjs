import { useGlobalContext } from "@/app/context/globalContext";
import { droplets } from "@/utils/Icons";
import React from "react";
import { Skeleton } from "./ui/skeleton";

type Props = {};

const Humidity = (props: Props) => {
  const { forecast } = useGlobalContext();

  if (!forecast || !forecast?.main || !forecast?.main?.humidity)
    return <Skeleton className="h-[12rem] w-full" />;

  const { humidity } = forecast?.main;

  const getHumidityDescription = (humidity: number) => {
    if (humidity < 30)
      return "Dry: May cause skin irritation and static electricity.";
    if (humidity >= 30 && humidity <= 60)
      return "Comfortable: Ideal for most people.";
    if (humidity > 60 && humidity <= 80)
      return "Moderate: May cause respiratory issues and mold.";
    if (humidity > 80)
      return "High: May cause discomfort and respiratory problems.";

    return "Unavailable: Humidity data is not available.";
  };

  return (
    <div className="h-full w-full min-h-[10rem] pt-3 pb-3 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">
          {droplets} Humidity
        </h2>
        <p className="text-2xl">{humidity}%</p>
      </div>

      <p className="text-sm">{getHumidityDescription(humidity)}</p>
    </div>
  );
};

export default Humidity;
