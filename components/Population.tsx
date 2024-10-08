"use client";
import { people } from "@/utils/Icons";
import React from "react";

type Props = {};

const Population = (props: Props) => {
  return (
    <div className="h-full w-full min-h-[10rem] pt-3 pb-3 px-4 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <h2 className="flex items-center gap-2 font-medium">
        {people} <span>Population</span>
      </h2>
      <div>
        <p>100,000</p>
      </div>
      <p>Test</p>
    </div>
  );
};

export default Population;
