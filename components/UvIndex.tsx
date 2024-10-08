"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { sun } from "@/utils/Icons";
import { UvBar } from "./UvBar";

type Props = {};

const UvIndex = (props: Props) => {
  const { uvIndex } = useGlobalContext();

  if (!uvIndex || !uvIndex.daily)
    return <Skeleton className="h-full w-full min-h-[10rem]" />;

  const { daily } = uvIndex;
  // console.log(daily);
  const { uv_index_clear_sky_max, uv_index_max } = daily;

  const uvIndexMax = uv_index_max[0].toFixed(0);
  const uvIndexClearSkyMax = uv_index_clear_sky_max[0];

  const uvIndexCategory = (uvIndex: number) => {
    if (uvIndex <= 2)
      return {
        text: "Low",
        desc: "No protection needed",
      };
    if (uvIndex <= 5)
      return {
        text: "Moderate",
        desc: "Stay in shade near midday",
      };
    if (uvIndex <= 7)
      return {
        text: "High",
        desc: "Wear a hat and sunglasses",
      };
    if (uvIndex <= 10)
      return {
        text: "Very High",
        desc: "Apply sunscreen SPF 30+ every 2 hours",
      };
    return {
      text: "Extreme",
      desc: "Avoid being outside",
    };
  };

  const marginLeftPercentage = (uvIndexMax / 14) * 100;

  return (
    <div className="h-full w-full min-h-[10rem] pt-3 pb-3 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <h2 className="flex items-center gap-2 font-medium">{sun} UV Index</h2>
      <div className="flex flex-col gap-2">
        <p className="text-2xl">
          {uvIndexMax}{" "}
          <span className="text-sm text-gray-500">
            {uvIndexCategory(uvIndexMax).text}
          </span>
        </p>
        <UvBar max={14} value={marginLeftPercentage} className="progress" />
      </div>

      <p className="text-sm pt-2">{uvIndexCategory(uvIndexMax).desc}</p>
    </div>
  );
};

export default UvIndex;
