"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import React from "react";

type Props = {};

const Temperature = (props: Props) => {
  const { forecast } = useGlobalContext();
  const { main, timezone, name, weather } = forecast;

  console.log(name);

  if (!forecast || !weather) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-6 pb-5 border rounded-lg flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      Temperature
    </div>
  );
};

export default Temperature;
