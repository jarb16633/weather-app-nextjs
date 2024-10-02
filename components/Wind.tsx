"use client";

import { useGlobalContext } from "@/app/context/globalContext";
import React from "react";
import { Skeleton } from "./ui/skeleton";

type Props = {};

const Wind = (props: Props) => {
  const { forecast } = useGlobalContext();

  if (!forecast) return <Skeleton className="h-[12rem] w-full" />;

  return (
    <div className="h-full pt-6 pb-5 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      Wind
    </div>
  );
};

export default Wind;
