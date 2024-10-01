"use client";
import React from "react";
import { useGlobalContext } from "@/app/context/globalContext";
import { Skeleton } from "./ui/skeleton";
import { kelvinToCelsius, unixToDay } from "@/utils/misc";
import { calender } from "@/utils/Icons";

type Props = {};

const FiveDayForecast = (props: Props) => {
  const { fiveDayForecast } = useGlobalContext();

  if (!fiveDayForecast) return <Skeleton className="h-[12rem] w-full" />;

  const { city, list } = fiveDayForecast;

  if (!city || !list) return <Skeleton className="h-[12rem] w-full" />;

  const processData = (
    dailyData: {
      main: { temp_min: number; temp_max: number };
      dt: number;
    }[]
  ) => {
    let minTemp = Number.MAX_VALUE;
    let maxTemp = Number.MIN_VALUE;
    let dailyDataArray = [];

    dailyData.forEach(
      (day: { main: { temp_min: number; temp_max: number }; dt: number }) => {
        if (day.main.temp_min < minTemp) minTemp = day.main.temp_min;
        if (day.main.temp_max > maxTemp) maxTemp = day.main.temp_max;
      }
    );

    return {
      day: unixToDay(dailyData[0].dt),
      minTemp: kelvinToCelsius(minTemp),
      maxTemp: kelvinToCelsius(maxTemp),
    };
  };

  const dailyForecasts = [];

  for (let i = 0; i < 40; i += 8) {
    const dailyData = list.slice(i, i + 5);
    dailyForecasts.push(processData(dailyData));
  }

  return (
    <div>
      <div>
        <h2 className="flex items-center gap-2 font-medium">
          {calender} 5-Day Forecast for {city.name}
        </h2>

        <div>
          {dailyForecasts.map((day, i) => {
            return (
              <div
                key={i}
                className="py-4 flex flex-col justify-evenly border-b-2"
              >
                <p className="text-xl min-w-[3.5rem]">{day.day}</p>
                <p className="text-sm flex justify-between">
                  <span>(low)</span>
                  <span>(high)</span>
                </p>
                <div>
                  <p className="font-bold">{day.minTemp}°C</p>
                  <div className="flex-1 w-full h-2 rounded-lg"></div>
                  <p className="font-bold">{day.maxTemp}°C</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FiveDayForecast;
