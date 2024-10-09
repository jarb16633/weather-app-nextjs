"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { eye } from "@/utils/Icons";

type Props = {};

const Visibility = (props: Props) => {
  const { forecast } = useGlobalContext();

  if (!forecast || !forecast?.visibility)
    return <Skeleton className="h-[12rem] w-full" />;

  const { visibility } = forecast;

  const getVisibilityDescription = (visibility: number) => {
    const visibilityInKm = Math.round(visibility / 1000);
    if (visibilityInKm > 10) return "Excellent: Clear and vast view";
    if (visibilityInKm > 5) return "Good: Easily navigable";
    if (visibilityInKm > 2) return "Moderate: Some limitations";
    if (visibilityInKm > 1) return "Poor: Restricted and unclear";
    return "Unavailable: Not available";
  };

  return (
    <div className="h-full w-full min-h-[10rem] pt-3 pb-3 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <h2 className="flex items-center gap-2 font-medium">{eye} Visibility</h2>
      <p className="text-2xl">{Math.round(visibility / 1000)} km</p>
      <p className="text-sm">{getVisibilityDescription(visibility)}</p>
    </div>
  );
};

export default Visibility;
