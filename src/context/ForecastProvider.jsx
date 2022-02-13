import axios from "axios";
import React, { useState } from "react";
import { createContext, useContext } from "react";
import GetComingDays from "../helpers/GetComingDays";
import getCurrentDayForecast from "../helpers/GetcurrentDayForcast";
import currentDayForecast from "../helpers/StatesOfcurrentDay";
const Forecast = createContext();

export function ForecastProvider({ children }) {
  const [forecastData, setForecastData] = useState(null);
  const [toggle, settoggle] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  const BASE_URL = "https://www.metaweather.com/api/location";
  const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
  const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;
  const getwoid = async (location) => {
    const { data } = await axios(`${REQUEST_URL}/search`, {
      params: { query: location },
    });
    setloading(true);
    if (!data || data.length === 0) {
      seterror("There is no such location");
      setloading(false);
      return;
    }

    return data;
  };
  const forcastLocation = async (woeid) => {
    const { data } = await axios(`${REQUEST_URL}/${woeid}`);
    setloading(true);
    if (!data || data.length === 0) {
      seterror("Something went wrong");
      setloading(false);
      return;
    }
    return data;
  };
  const getForcast = (data) => {
    const currentDAY = getCurrentDayForecast(
      data.consolidated_weather[0],
      data.title
    );

    const curentDayDetails = currentDayForecast(data.consolidated_weather[0]);
    const comingDays = GetComingDays(data.consolidated_weather);

    setForecastData({ currentDAY, curentDayDetails, comingDays });
    setloading(true);
  };

  const submitRequest = async (location) => {
    const response = await getwoid(location);
    const data = await forcastLocation(response[0].woeid);
    getForcast(data);
    settoggle(!toggle);
    setloading(true);
    seterror(false);
  };
  return (
    <Forecast.Provider
      value={{ submitRequest, forecastData, toggle, loading, error }}
    >
      {children}
    </Forecast.Provider>
  );
}
export function UseForecast() {
  return useContext(Forecast);
}
