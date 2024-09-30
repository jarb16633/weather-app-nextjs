"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { navigation } from "@/utils/Icons";
import { kelvinToCelsius } from "@/utils/misc";
import React, { useState } from "react";

type Props = {};

const Temperature = (props: Props) => {
  const { forecast } = useGlobalContext();
  const { main, timezone, name, weather } = forecast;

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
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="pt-6 pb-5 px-6 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <p className="flex justify-between items-center">
        <span className="font-medium">{currentDay}</span>
        <span className="font-medium">{localTime}</span>
      </p>
      <p className="pt-2 font-bold flex gap-1">
        <span>{name}</span>
        <span>{navigation}</span>
      </p>
      <p className="py-10 text-9xl font-bold self-center">{temp}°</p>
      <div>
        <div className="">
          <img src={getIcon()} alt={description} />
          <p className="pt-2 capitalize text-lg font-medium">{description}</p>
        </div>
        <p>
          <span>Low: {minTemp}°</span>
          <span>High: {maxTemp}°</span>
        </p>
      </div>
    </div>
  );
};

export default Temperature;
