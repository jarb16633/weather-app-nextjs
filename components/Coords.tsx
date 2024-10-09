"use client";
import defaultCountry from "@/utils/defaultCountry";
import React from "react";

type Props = {};

const Coords = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 items-center text-center mt-2">
      <h2 className="flex gap-2 font-bold">Top large Cities</h2>
      <div className="flex flex-col gap-4">
        {defaultCountry.map((country, index) => {
          return (
            <button
              key={index}
              className="border text-sm rounded-lg px-6 py-4 dark:bg-dark-grey shadow-sm dark:shadow-none"
              onClick={() => {}}
            >
              {country.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Coords;
