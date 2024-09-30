"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { navigation } from "@/utils/Icons";
import { kelvinToCelsius } from "@/utils/misc";
import moment from "moment";
import React, { useEffect, useState } from "react";

type Props = {};

const Temperature = (props: Props) => {
  const { forecast } = useGlobalContext();
  const { main, timezone, name, weather } = forecast;

  console.log(timezone);

  if (!forecast || !weather) {
    return <div>Loading...</div>;
  }

  console.log(kelvinToCelsius(main.temp));

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
    <div className="pt-6 pb-5 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <p className="flex justify-between items-center">
        <span className="font-medium">{currentDay}</span>
        <span className="font-medium">{localTime}</span>
      </p>
      <p className="pt-2 font-bold text-xl flex gap-1 items-center">
        <span>{name}</span>
        <span>{navigation}</span>
      </p>
      <div className="flex flex-row justify-items-start align-middle">
        <img
          src={getIcon()}
          alt={description}
          className="object-contain h-50 w-50"
        />
        <p className="py-10 text-9xl font-bold">
          {temp}°
          <span className="font-bold text-4xl text-gray-500 relative mx-[-38px]">
            C
          </span>
        </p>
      </div>
      <div>
        <div>
          <p className="pt-2 capitalize text-lg font-medium">{description}</p>
        </div>
        <p>
          <span>Low: {minTemp}° </span>
          <span>High: {maxTemp}°</span>
        </p>
      </div>
    </div>
  );
};

export default Temperature;
