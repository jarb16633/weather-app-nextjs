"use client";
import { useGlobalContext } from "@/app/context/globalContext";
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
  const mintemp = kelvinToCelsius(main?.temp_min);
  const maxTemp = kelvinToCelsius(main?.temp_max);

  // State
  const [localTime, setLocalTime] = useState<string>("");
  const [currentDay, setCurrentDay] = useState<string>("");

  console.log(weather[0]);

  return (
    <div className="pt-6 pb-5 border rounded-lg flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      Temperature
    </div>
  );
};

export default Temperature;
