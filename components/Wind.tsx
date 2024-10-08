"use client";

import { useGlobalContext } from "@/app/context/globalContext";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { wind } from "@/utils/Icons";
import Image from "next/image";

type Props = {};

const Wind = (props: Props) => {
  const { forecast } = useGlobalContext();

  const windSpeed = forecast?.wind?.speed;
  const windDirection = forecast?.wind?.deg;

  if (!windSpeed || !windDirection)
    return <Skeleton className="h-full min-h-[10rem] w-full" />;

  return (
    <div className="h-full w-full min-h-[10rem] pt-3 pb-3 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <h2 className="flex items-center gap-2 font-medium">{wind} Wind</h2>
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="compass relative flex items-center justify-center">
          <div className="image relative">
            <Image
              src="/compass_body.svg"
              alt="compass"
              width={110}
              height={110}
            />
            <Image
              src="/compass_arrow.svg"
              alt="compass"
              className="absolute top-0 left-[43%] transition-all duration-500 ease-in-out dark:invert sm:left-[45%]"
              style={{
                transform: `rotate(${windDirection}deg) translate(-50%)`,
                height: "100%",
              }}
              width={11}
              height={11}
            />
          </div>
          <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xs dark:text-white font-medium">
            {Math.round(windSpeed)} m/s
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wind;
