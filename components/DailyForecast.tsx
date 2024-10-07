"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import moment from "moment";
import { kelvinToCelsius } from "@/utils/misc";

type Props = {};

const DailyForecast = (props: Props) => {
  const { forecast, fiveDayForecast } = useGlobalContext();

  const { weather } = forecast;
  const { city, list } = fiveDayForecast;

  if (!fiveDayForecast || !city || !list)
    return <Skeleton className="h-[12rem] w-full" />;

  if (!forecast || !weather) return <Skeleton className="h-[12rem] w-full" />;

  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  //filter list for today's forecast
  const todayForecast = list.filter(
    (forecast: { dt_txt: string; main: { temp: number } }) => {
      return forecast.dt_txt.startsWith(todayString);
    }
  );

  // console.log(todayForecast);

  const { main: weatherMain } = weather[0];

  const getIcon = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  };

  return (
    <div className="h-full pt-2 px-4 gap-2 border rounded-xl flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="h-full flex gap-10 overflow-hidden">
        {todayForecast.length < 1 ? (
          <div>Loading...</div>
        ) : (
          <div className="w-full">
            <Carousel>
              <CarouselContent>
                {todayForecast.map(
                  (forecast: {
                    dt_txt: string;
                    main: { temp: number };
                    weather: [{ icon: string }];
                  }) => {
                    return (
                      <CarouselItem
                        key={forecast.dt_txt}
                        className="flex flex-col gap-4 cursor-grab"
                      >
                        <p className="text-gray-300">
                          {moment(forecast.dt_txt).format("HH:mm")}
                        </p>
                        <img
                          src={getIcon(forecast.weather[0].icon)}
                          alt="weather icon"
                          className="w-26 sm:w-30 md:w-28 lg:w-26"
                        />
                        {kelvinToCelsius(forecast.main.temp)}°
                      </CarouselItem>
                    );
                  }
                )}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyForecast;
