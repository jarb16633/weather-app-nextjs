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

  if (!windSpeed || !windDirection) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  return (
    <div className="h-full pt-6 pb-5 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <h2 className="flex items-center gap-2 font-medium text-base sm:text-base md:text-lg">
        {wind} Wind
      </h2>
      <div className="compass relative flex items-center justify-center">
        <div className="image relative">
          <Image
            src="/compass_body.svg"
            alt="compass"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Wind;
