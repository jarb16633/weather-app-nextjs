"use client";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForcast] = useState({});
  const [airQuality, setAirQuality] = useState({});
  const [fiveDayForecast, setFiveDayForecast] = useState({});
  const [uvIndex, setUvIndex] = useState({});

  const [activeCityCoords, setActiveCityCoords] = useState([
    51, 752021, -1.257726,
  ]);

  const fetchForcast = async (city) => {
    try {
      const res = await axios.get("api/weather");
      // console.log(res.data);

      setForcast(res.data);
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message);
    }
  };

  // Air quality
  const fetchAirQuality = async () => {
    try {
      const res = await axios.get("api/pollution");

      console.log(res.data);
      setAirQuality(res.data);
    } catch (error) {
      console.log("Error fetching air quality data: ", error.message);
    }
  };

  // Five day forcast
  const fetchFiveDayForecast = async () => {
    try {
      const res = await axios.get("api/fiveday");
      console.log("Five Day Forecast Data:", res.data);
      setFiveDayForecast(res.data);
    } catch (error) {
      console.error("Error fetching five day forecast data: ", error.message);
    }
  };

  // fetch uv index
  const fetchUvIndex = async () => {
    try {
      const res = await axios.get("api/uv");
      // console.log("Uv Index", res.data);
      setUvIndex(res.data);
    } catch (error) {
      console.log("Error fetching uv index data: ", error.message);
    }
  };

  useEffect(() => {
    fetchForcast();
    fetchAirQuality();
    fetchFiveDayForecast();
    fetchUvIndex();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ forecast, airQuality, fiveDayForecast, uvIndex }}
    >
      <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
