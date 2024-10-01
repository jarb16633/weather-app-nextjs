"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { navigation } from "@/utils/Icons";
import { kelvinToCelsius } from "@/utils/misc";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

type Props = {};

const Temperature = (props: Props) => {
  const { forecast } = useGlobalContext();
  const { main, timezone, name, weather } = forecast;

  if (!forecast || !weather) {
    return <Skeleton />;
  }

  // console.log(kelvinToCelsius(main.temp));

  const temp = kelvinToCelsius(main?.temp);
  const minTemp = kelvinToCelsius(main?.temp_min);
  const maxTemp = kelvinToCelsius(main?.temp_max);

  // State
  const [localTime, setLocalTime] = useState<string>("");
  const [currentDay, setCurrentDay] = useState<string>("");

  const { main: weatherMain, description } = weather[0];

  const getIcon = () => {
    const iconCode = weather[0].icon;
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  };

  //  Live time update
  useEffect(() => {
    //update time every second
    const interval = setInterval(() => {
      const localMoment = moment().utcOffset(timezone / 60);
      // custom format: 24/7 format
      const formatedTime = localMoment.format("HH:mm:ss");
      // day of the week
      const day = localMoment.format("dddd");

      setLocalTime(formatedTime);
      setCurrentDay(day);
    }, 1000);
  }, []);

  return (
    <div className="h-full pt-6 pb-5 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div>
        <p className="flex justify-between items-center text-sm sm:text-base">
          <span className="font-medium">{currentDay}</span>
          <span className="font-medium">{localTime}</span>
        </p>
        <p className="pt-2 font-bold text-lg sm:text-xl md:text-2xl flex gap-1 items-center">
          <span>{name}</span>
          <span>{navigation}</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <img
          src={getIcon()}
          alt={description}
          className="w-24 sm:w-32 md:w-40"
        />
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          {temp}°
          <span className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-500 relative">
            C
          </span>
        </p>
      </div>
      <div>
        <p className="pt-2 capitalize text-base sm:text-lg md:text-xl font-medium">
          {description}
        </p>
        <p className="text-sm sm:text-base">
          <span>Low: {minTemp}° </span>
          <span>High: {maxTemp}°</span>
        </p>
      </div>
    </div>
  );
};

export default Temperature;
